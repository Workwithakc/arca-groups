"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface OrbProps {
    question: string;
    answer: string;
    delay?: number;
}

export const Orb = ({ question, answer, delay = 0 }: OrbProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{
                y: [0, -20, 0],
                x: [0, 10, 0]
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }}
            className="relative z-20 group"
        >
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1, borderColor: "var(--color-arca-gold)" }}
                whileTap={{ scale: 0.95 }}
                className={`w-32 h-32 rounded-full border border-gray-800 bg-void-black/80 backdrop-blur-md flex items-center justify-center text-center p-4 transition-colors ${isOpen ? "border-arca-gold shadow-glow-gold" : "border-gray-800"
                    }`}
            >
                <span className="text-xs font-heading text-gray-400 group-hover:text-white transition-colors">
                    {question}
                </span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                        className="absolute top-36 left-1/2 -translate-x-1/2 w-64 bg-void-black border border-arca-gold/50 p-4 rounded-lg shadow-2xl z-30"
                    >
                        <p className="text-sm font-body text-gray-300 leading-relaxed">
                            <span className="text-arca-gold font-bold block mb-2">CLASSIFIED DATA:</span>
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
