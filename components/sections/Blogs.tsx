"use client";

import { motion } from "framer-motion";
import { FileText, Lock, Unlock } from "lucide-react";
import { useState } from "react";

const archives = [
    {
        id: "001",
        title: "PROJECT: ETERNITY",
        category: "AUTOMATION",
        snippet: "Constructing a self-perpetuating lead generation engine using n8n and Supabase.",
        locked: false
    },
    {
        id: "002",
        title: "CASE STUDY: NEURAL LINK",
        category: "AI INTEGRATION",
        snippet: "Connecting GPT-4 to legacy CRM systems for autonomous customer handling.",
        locked: false
    },
    {
        id: "003",
        title: "CLASSIFIED",
        category: "UNKNOWN",
        snippet: "Encrypted data. Clearance Level 5 required.",
        locked: true
    }
];

export default function Blogs() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section className="min-h-screen py-32 bg-void-black relative">
            <div className="container mx-auto px-4">
                <h2 className="font-heading text-4xl mb-16 text-center text-white">THE <span className="text-arca-gold">ARCHIVES</span></h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {archives.map((doc, index) => (
                        <motion.div
                            key={index}
                            onHoverStart={() => setHovered(index)}
                            onHoverEnd={() => setHovered(null)}
                            className="group relative p-8 border border-gray-800 bg-black/50 hover:border-arca-gold/50 transition-colors cursor-pointer overflow-hidden h-64 flex flex-col justify-between"
                        >
                            {/* Matrix Background Effect on Hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-[url('https://media.giphy.com/media/dummy-matrix/giphy.gif')] bg-cover pointer-events-none" />

                            <div className="flex justify-between items-start z-10">
                                <span className="font-mono text-xs text-gray-600">FILE_ID: {doc.id}</span>
                                {doc.locked ? <Lock className="w-4 h-4 text-red-500" /> : <Unlock className="w-4 h-4 text-arca-gold" />}
                            </div>

                            <div className="z-10 relative">
                                <span className="text-[10px] bg-gray-900 text-gray-400 px-2 py-1 mb-2 inline-block rounded border border-gray-800">{doc.category}</span>
                                <h3 className="font-heading text-xl text-white mb-2 group-hover:text-arca-gold transition-colors">
                                    {doc.title}
                                </h3>
                                <p className="font-body text-sm text-gray-500 line-clamp-2">
                                    {doc.locked ? "ACCESS DENIED. ENCRYPTED CONTENT." : doc.snippet}
                                </p>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-800 group-hover:border-arca-gold transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
