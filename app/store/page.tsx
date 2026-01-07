"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, ExternalLink, Zap, Package } from "lucide-react";
import { Product, getProducts } from "@/lib/store-data";

export default function StorePage() {
    const [products, setProducts] = useState<Product[]>([]);

    const [activeTab, setActiveTab] = useState<"physical" | "automation">("physical");

    useEffect(() => {
        // Load products and filter by tab
        const allProducts = getProducts();
        const filtered = allProducts.filter((p: Product) => {
            if (activeTab === "physical") return p.category !== "Automation";
            return p.category === "Automation";
        });
        setProducts(filtered);
    }, [activeTab]);

    return (
        <main className="min-h-screen bg-void-black text-white selection:bg-arca-gold selection:text-black font-sans">
            {/* Header */}
            <header className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-void-black/80 backdrop-blur-md border-b border-white/5">
                <div className="flex items-center gap-4">
                    <Link href="/" className="hover:text-arca-gold transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="font-heading font-bold text-xl tracking-widest text-white">
                        ARCA STORE
                    </div>
                </div>
                <div className="flex items-center gap-4 text-sm font-medium text-gray-400">
                    <span>SYSTEMS ONLINE: {products.length}</span>
                    <Link href="#" className="hover:text-white transition-colors">
                        <ShoppingCart className="w-5 h-5" />
                    </Link>
                </div>
            </header>

            {/* Content */}
            <div className="pt-32 px-6 max-w-7xl mx-auto pb-24">

                <div className="mb-16 text-center">
                    <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">ACQUIRE INFRASTRUCTURE</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        Select your weapon class.
                    </p>

                    {/* Category Tabs */}
                    <div className="inline-flex p-1 bg-white/5 rounded-full border border-white/10">
                        <button
                            onClick={() => setActiveTab("physical")}
                            className={`px-8 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === "physical" ? "bg-arca-gold text-black" : "text-gray-400 hover:text-white"}`}
                        >
                            PHYSICAL HARDWARE
                        </button>
                        <button
                            onClick={() => setActiveTab("automation")}
                            className={`px-8 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === "automation" ? "bg-arca-gold text-black" : "text-gray-400 hover:text-white"}`}
                        >
                            n8n AUTOMATIONS
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-arca-gold/30 hover:shadow-[0_0_30px_rgba(197,160,89,0.15)] flex flex-col">

                            {/* Glossy Overlay/Sheen */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                            {/* Image */}
                            <div className="aspect-video w-full overflow-hidden relative">
                                {/* Placeholder overlay for style */}
                                <div className="absolute inset-0 bg-gradient-to-t from-void-black to-transparent opacity-60 z-10" />
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold border border-white/10 flex items-center gap-1 shadow-lg group-hover:border-arca-gold/50 transition-colors">
                                    {product.category === "Automation" ? <Zap className="w-3 h-3 text-arca-gold" /> : <Package className="w-3 h-3 text-blue-400" />}
                                    {product.category}
                                </div>
                            </div>

                            {/* Details */}
                            <div className="p-6 flex-1 flex flex-col relative z-20">
                                <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-arca-gold transition-colors">{product.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-2 flex-grow">{product.description}</p>

                                <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors">
                                    <span className="text-lg font-bold text-white group-hover:text-arca-gold transition-colors">${product.price.toLocaleString()}</span>
                                    <button className="px-4 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-arca-gold hover:shadow-[0_0_15px_rgba(197,160,89,0.4)] transition-all flex items-center gap-2">
                                        {activeTab === "automation" ? "DOWNLOAD" : "PURCHASE"} <ExternalLink className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {products.length === 0 && (
                    <div className="text-center py-24 text-gray-500">
                        <p>Establishing connection to warehouse...</p>
                    </div>
                )}
            </div>
        </main>
    );
}
