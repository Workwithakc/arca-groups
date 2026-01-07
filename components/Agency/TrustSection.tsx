"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { trustQuestions } from "@/lib/agency-data";
import { ShieldCheck, Lock, EyeOff } from "lucide-react";

export default function TrustSection() {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

    return (
        <section className="py-32 px-6 relative overflow-hidden">
            {/* Background elements to suggest "Stealth" */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-void-black border border-white/5 rounded-full flex items-center justify-center opacity-20 pointer-events-none">
                <div className="w-[300px] h-[300px] border border-white/5 rounded-full animate-pulse" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
                        ZERO PUBLIC CLIENTS.
                        <br />
                        <span className="text-gray-500">INFINITE CAPABILITY.</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        We don't display trophies. We simply win.
                        Our work speaks through efficiency, not logos.
                    </p>
                </motion.div>

                {/* Floating Questions Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {trustQuestions.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors cursor-pointer text-left group"
                            onClick={() => setActiveQuestion(idx === activeQuestion ? null : idx)}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-arca-gold opacity-50 font-mono">0{idx + 1}</span>
                                {idx === 0 && <EyeOff className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />}
                                {idx === 1 && <ShieldCheck className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />}
                                {idx === 2 && <Lock className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />}
                            </div>
                            <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                            <AnimatePresence>
                                {activeQuestion === idx && (
                                    <motion.p
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="text-sm text-gray-400 overflow-hidden"
                                    >
                                        {item.a}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Floating Action Button */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                >
                    <div className="bg-void-black border border-arca-gold/30 p-2 rounded-full shadow-[0_0_30px_-5px_var(--color-arca-gold)]">
                        <div className="px-8 py-3 bg-arca-gold text-black font-bold rounded-full mb-2">
                            SHOULD YOU TRUST US?
                        </div>
                        <div className="flex justify-center gap-2 text-xs font-mono text-gray-400">
                            <Link href="/vault" className="hover:text-white underline decoration-dotted">Verify Portfolio</Link>
                            <span>|</span>
                            <Link href="/store" className="hover:text-white underline decoration-dotted">Inspect Store</Link>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
