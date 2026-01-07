"use client";

import { useState, useEffect } from "react";
import { Lock, Plus, Upload, CheckCircle } from "lucide-react";
import { Product, addProduct, getProducts } from "@/lib/store-data";

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [products, setProducts] = useState<Product[]>([]);

    // Form State
    const [productType, setProductType] = useState<"physical" | "automation">("physical");
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: "",
        category: "Software",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop" // Default tech background
    });

    const [notification, setNotification] = useState<string | null>(null);

    useEffect(() => {
        if (isAuthenticated) {
            setProducts(getProducts());
        }
    }, [isAuthenticated]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "admin123") {
            setIsAuthenticated(true);
        } else {
            alert("ACCESS DENIED");
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newProduct: Product = {
            id: Date.now().toString(),
            title: formData.title,
            price: parseFloat(formData.price),
            description: formData.description,
            image: formData.image,
            category: productType === "automation" ? "Automation" : formData.category
        };

        const updatedList = addProduct(newProduct);
        setProducts(updatedList);

        // Reset form
        setFormData({
            title: "",
            price: "",
            description: "",
            category: "Software",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop"
        });

        setNotification("SYSTEM DEPLOYED SUCCESSFULLY");
        setTimeout(() => setNotification(null), 3000);
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-void-black text-white flex items-center justify-center">
                <form onSubmit={handleLogin} className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur w-full max-w-md">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 rounded-full bg-white/5 border border-white/10">
                            <Lock className="w-6 h-6 text-arca-gold" />
                        </div>
                    </div>
                    <h1 className="text-center font-heading text-2xl font-bold mb-8">SECURE LOGIN</h1>
                    <input
                        type="password"
                        placeholder="ENTER ACCESS CODE"
                        className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-center font-mono tracking-widest focus:border-arca-gold outline-none transition-colors mb-6"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-arca-gold transition-colors">
                        AUTHENTICATE
                    </button>
                </form>
            </div>
        )
    }

    return (
        <main className="min-h-screen bg-void-black text-white font-sans p-6 md:p-12">
            <header className="max-w-6xl mx-auto mb-12 flex justify-between items-center pb-6 border-b border-white/10">
                <h1 className="font-heading text-3xl font-bold">COMMAND CENTER <span className="text-arca-gold text-lg ml-2">// ADMIN</span></h1>
                <div className="text-xs font-mono text-gray-500">
                    SESSION ID: {Date.now()}
                </div>
            </header>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Upload Form */}
                <section className="space-y-8">
                    <h2 className="font-heading text-xl font-bold flex items-center gap-2">
                        <Plus className="w-5 h-5 text-arca-gold" /> DEPLOY NEW SYSTEM
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10">

                        {/* Type Toggle */}
                        <div className="flex bg-black/50 p-1 rounded-lg border border-white/10">
                            <button
                                type="button"
                                onClick={() => setProductType("physical")}
                                className={`flex-1 py-2 text-xs font-bold rounded-md transition-colors ${productType === "physical" ? "bg-white text-black" : "text-gray-500 hover:text-white"}`}
                            >
                                PHYSICAL PRODUCT
                            </button>
                            <button
                                type="button"
                                onClick={() => setProductType("automation")}
                                className={`flex-1 py-2 text-xs font-bold rounded-md transition-colors ${productType === "automation" ? "bg-arca-gold text-black" : "text-gray-500 hover:text-white"}`}
                            >
                                n8n AUTOMATION
                            </button>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 mb-2 tracking-widest">{productType === "physical" ? "PRODUCT NAME" : "WORKFLOW NAME"}</label>
                            <input
                                type="text"
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-lg p-4 focus:border-arca-gold outline-none transition-colors"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-2 tracking-widest">PRICE ($)</label>
                                <input
                                    type="number"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg p-4 focus:border-arca-gold outline-none transition-colors"
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-2 tracking-widest">CATEGORY</label>
                                {productType === "physical" ? (
                                    <select
                                        className="w-full bg-black/50 border border-white/10 rounded-lg p-4 focus:border-arca-gold outline-none transition-colors text-gray-400"
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    >
                                        <option>Software</option>
                                        <option>Marketing</option>
                                        <option>Operations</option>
                                        <option>Infrastructure</option>
                                    </select>
                                ) : (
                                    <div className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-gray-500 cursor-not-allowed">
                                        n8n Workflow
                                    </div>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 mb-2 tracking-widest">DESCRIPTION</label>
                            <textarea
                                required
                                rows={4}
                                className="w-full bg-black/50 border border-white/10 rounded-lg p-4 focus:border-arca-gold outline-none transition-colors"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 mb-2 tracking-widest">{productType === "physical" ? "IMAGE URL" : "WORKFLOW SCREENSHOT URL"}</label>
                            <input
                                type="url"
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-lg p-4 focus:border-arca-gold outline-none transition-colors text-sm font-mono"
                                value={formData.image}
                                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                            />
                        </div>

                        <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-arca-gold transition-colors flex items-center justify-center gap-2">
                            <Upload className="w-4 h-4" /> UPLOAD TO MAINFRAME
                        </button>

                        {notification && (
                            <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-lg flex items-center gap-2 justify-center text-sm font-bold animate-pulse">
                                <CheckCircle className="w-4 h-4" /> {notification}
                            </div>
                        )}
                    </form>
                </section>

                {/* Current Inventory Preview */}
                <section className="space-y-8">
                    <h2 className="font-heading text-xl font-bold flex items-center gap-2">
                        ACTIVE INVENTORY ({products.length})
                    </h2>

                    <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
                        {products.map((p) => (
                            <div key={p.id} className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                                <img src={p.image} className="w-20 h-20 object-cover rounded-lg bg-black" />
                                <div>
                                    <h3 className="font-bold text-lg">{p.title}</h3>
                                    <p className="text-arca-gold font-mono text-sm">${p.price.toLocaleString()}</p>
                                    <p className="text-gray-500 text-xs mt-1">{p.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
}
