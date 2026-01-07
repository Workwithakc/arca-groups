
"use client";

import { services } from "@/lib/content-data";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-void-black text-white pt-24 pb-32">
            <div className="fixed top-8 left-8 z-50">
                <Link href="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" /> BACK TO HUB
                </Link>
            </div>

            <header className="max-w-6xl mx-auto px-6 mb-32 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-heading text-5xl md:text-7xl font-bold mb-6"
                >
                    SYSTEM ARCHITECTURE
                </motion.h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    We don't sell "marketing" or "dev hours." We sell installed capabilities.
                    Choose the module you need installed in your business.
                </p>
            </header>

            <div className="max-w-6xl mx-auto px-6 space-y-32">
                {services.map((service, idx) => (
                    <section key={service.id} id={service.id} className={`flex flex-col md:flex-row gap-16 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                        {/* Visual / Animation Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ margin: "-100px" }}
                            className="flex-1 w-full aspect-square md:aspect-video bg-white/5 border border-white/10 rounded-2xl overflow-hidden relative group"
                        >
                            {/* "Animational Video" Placeholder - CSS Animation */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className={`w-32 h-32 rounded-full border-2 border-dashed border-white/20 animate-spin-slow ${idx % 2 === 0 ? 'border-arca-gold/50' : 'border-blue-500/50'}`} />
                                <div className="absolute w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full animate-pulse" />
                                <service.icon className={`w-12 h-12 ${idx % 2 === 0 ? 'text-arca-gold' : 'text-blue-500'} opacity-80 relative z-10`} />
                            </div>

                            {/* Grid Graphic Overlay */}
                            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                            <div className="absolute bottom-4 left-4 font-mono text-xs text-gray-500">
                                FIG {idx + 1}.0 // {service.videoPlaceholder.toUpperCase()}
                            </div>
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <service.icon className="w-6 h-6 text-arca-gold" />
                                <span className="font-mono text-sm text-arca-gold tracking-widest">{service.title}</span>
                            </div>

                            <h2 className="font-heading text-4xl font-bold mb-6">{service.description}</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-2 border-white/10 pl-6">
                                {service.longDescription}
                            </p>

                            <ul className="space-y-4 mb-10">
                                {service.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-3 text-sm font-bold text-gray-300">
                                        <CheckCircle2 className="w-4 h-4 text-arca-gold/50" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-arca-gold transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                DEPLOY MODULE
                            </button>
                        </div>

                    </section>
                ))}
            </div>
        </main>
    );
}
