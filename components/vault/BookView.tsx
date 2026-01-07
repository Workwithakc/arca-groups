"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronRight, ChevronLeft, X } from "lucide-react";

interface BookViewProps {
    project: { id: number; title: string; type: string; color: string };
    onClose: () => void;
}

export default function BookView({ project, onClose }: BookViewProps) {
    const [page, setPage] = useState(0);
    const totalPages = 3;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-10"
        >
            <button
                onClick={onClose}
                className="absolute top-8 right-8 z-50 p-2 rounded-full border border-gray-700 text-gray-500 hover:border-white hover:text-white transition-colors"
            >
                <X />
            </button>

            {/* The Book Container */}
            <div className="relative w-full max-w-5xl h-[70vh] flex perspective-1000">

                {/* Left Page (Static Base) */}
                <div className="w-1/2 h-full bg-void-black border-l border-t border-b border-gray-800 rounded-l-xl p-8 md:p-12 relative overflow-hidden hidden md:block">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-arca-gold to-transparent opacity-50" />
                    <h2 className="font-heading text-4xl text-white mb-4 leading-tight">{project.title}</h2>
                    <p className="font-mono text-xs text-arca-gold mb-8">CLASSIFIED // LEVEL 5 ACCESS</p>
                    <p className="font-body text-gray-400 text-lg leading-relaxed">
                        This project represents a pinnacle of our engineering capabilities.
                        Designed to operate autonomously, it reduces human operational load by 99%.
                    </p>

                    <div className="absolute bottom-12 left-12 grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-heading text-xl text-white">400%</h4>
                            <p className="text-xs text-gray-600">ROI INCREASE</p>
                        </div>
                        <div>
                            <h4 className="font-heading text-xl text-white">0.05s</h4>
                            <p className="text-xs text-gray-600">LATENCY</p>
                        </div>
                    </div>
                </div>

                {/* Right Page (Flippable) */}
                <div className="w-full md:w-1/2 h-full relative perspective-1000">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={page}
                            initial={{ rotateY: -90, opacity: 0 }}
                            animate={{ rotateY: 0, opacity: 1 }}
                            exit={{ rotateY: 90, opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gray-900 border border-gray-800 rounded-xl md:rounded-l-none md:rounded-r-xl p-8 md:p-12 origin-left shadow-2xl"
                            style={{ backfaceVisibility: "hidden" }}
                        >
                            {/* Page Content Switcher */}
                            {page === 0 && (
                                <div className="h-full flex flex-col">
                                    <h3 className="font-heading text-2xl text-white mb-6">EXECUTION PROTOCOL</h3>
                                    <div className="flex-1 space-y-4">
                                        <div className="p-4 bg-black/50 border border-gray-800 rounded">
                                            <h5 className="text-arca-gold font-bold mb-1">PHASE 1: INJECTION</h5>
                                            <p className="text-gray-500 text-sm">Direct database integration avoiding limited APIs.</p>
                                        </div>
                                        <div className="p-4 bg-black/50 border border-gray-800 rounded">
                                            <h5 className="text-white font-bold mb-1">PHASE 2: PROCESSING</h5>
                                            <p className="text-gray-500 text-sm">AI-driven sorting logic implementation.</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {page === 1 && (
                                <div className="h-full flex flex-col justify-center items-center">
                                    <div className="w-full h-48 bg-gray-800 rounded animate-pulse mb-8" />
                                    <p className="text-gray-400 text-center">Visual Architecture Diagram Loading...</p>
                                </div>
                            )}
                            {page === 2 && (
                                <div className="h-full flex flex-col justify-center items-center text-center">
                                    <h3 className="font-heading text-3xl text-arca-gold mb-4">DEPLOY SYSTEM?</h3>
                                    <p className="text-gray-500 mb-8">This architecture is available for immediate cloning.</p>
                                    <button className="px-8 py-4 bg-white text-black font-bold tracking-widest hover:bg-arca-gold transition-colors">
                                        INITIATE TRANSFER
                                    </button>
                                </div>
                            )}

                            {/* Pagination Controls */}
                            <div className="absolute bottom-8 right-8 flex gap-4">
                                <button
                                    disabled={page === 0}
                                    onClick={() => setPage(p => p - 1)}
                                    className="p-2 border border-gray-700 rounded-full hover:bg-white hover:text-black disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-current transition-colors"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </button>
                                <span className="font-mono text-xs flex items-center text-gray-500">
                                    {page + 1} / {totalPages}
                                </span>
                                <button
                                    disabled={page === totalPages - 1}
                                    onClick={() => setPage(p => p + 1)}
                                    className="p-2 border border-gray-700 rounded-full hover:bg-white hover:text-black disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-current transition-colors"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}
