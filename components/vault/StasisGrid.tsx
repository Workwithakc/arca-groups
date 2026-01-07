"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import BookView from "./BookView";

const projects = [
    { id: 1, title: "PROJECT NEBULA", type: "Full Stack", color: "#60A5FA" },
    { id: 2, title: "HYPERION OPS", type: "Automation", color: "#FBBF24" },
    { id: 3, title: "TITAN FORGE", type: "E-Commerce", color: "#34D399" },
    { id: 4, title: "CHRONOS UI", type: "Design System", color: "#A78BFA" },
];

export default function StasisGrid() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-void-black p-8 md:p-20 relative">
            <div className="absolute top-8 left-8">
                <h1 className="font-heading text-2xl text-white">THE <span className="text-arca-gold">VAULT</span></h1>
                <p className="font-body text-xs text-gray-500 tracking-widest">SECURE STORAGE FACILITY</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        layoutId={`card-${project.id}`}
                        onClick={() => setSelectedId(project.id)}
                        className="group relative h-96 bg-gray-900 border border-gray-800 rounded-xl cursor-pointer overflow-hidden transform transition-all hover:border-arca-gold/50"
                    >
                        {/* Inner Glow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                        {/* Center Art */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div
                                className="w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                                style={{ backgroundColor: project.color }}
                            />
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <h3 className="font-heading text-2xl text-white mb-2">{project.title}</h3>
                            <span className="inline-block px-3 py-1 rounded-full border border-gray-700 text-xs text-gray-400">
                                {project.type}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Expanded View Overlay (The Book) */}
            <AnimatePresence>
                {selectedId && (
                    <BookView
                        project={projects.find(p => p.id === selectedId)!}
                        onClose={() => setSelectedId(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
