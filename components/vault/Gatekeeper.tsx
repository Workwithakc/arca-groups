"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock } from "lucide-react";

export default function Gatekeeper({ children }: { children: React.ReactNode }) {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState(false);

    // Simple Logic Puzzle
    // Question: If A=1, B=2, what is the sum of ARCA (1+18+3+1 = 23)?
    // Let's keep it simpler for MVP: "What is 8 + 5?" or the ARCA one for cool factor.
    const question = "AUTHENTICATION REQUIRED. SOLVE: 8 + 5 = ?";
    const expectedAnswer = "13";

    // Check if session is already unlocked
    useEffect(() => {
        const session = sessionStorage.getItem("vault_unlocked");
        if (session === "true") setIsUnlocked(true);
    }, []);

    const handleUnlock = (e: React.FormEvent) => {
        e.preventDefault();
        if (answer.trim() === expectedAnswer) {
            setIsUnlocked(true);
            sessionStorage.setItem("vault_unlocked", "true");
        } else {
            setError(true);
            setTimeout(() => setError(false), 1000);
        }
    };

    if (isUnlocked) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-screen"
            >
                {children}
            </motion.div>
        )
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-void-black text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-holo-blue)_0%,_transparent_50%)] opacity-10" />

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full max-w-md p-8 border border-white/10 rounded-2xl bg-black/80 backdrop-blur-xl relative z-10 text-center"
            >
                <div className="mb-6 mx-auto w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-arca-gold">
                    {error ? <Lock className="w-8 h-8 animate-shake" /> : <Lock className="w-8 h-8" />}
                </div>

                <h2 className="font-heading text-2xl font-bold mb-2">VAULT LOCKED</h2>
                <p className="text-gray-400 mb-8 text-sm">Restricted Area. Prove human intelligence.</p>

                <form onSubmit={handleUnlock}>
                    <label className="block text-xs font-mono text-arca-gold mb-2 tracking-widest">{question}</label>
                    <input
                        type="text"
                        autoFocus
                        className={`w-full bg-black/50 border rounded-lg p-4 text-center font-bold text-xl outline-none transition-colors mb-6 ${error ? 'border-red-500 text-red-500' : 'border-white/20 focus:border-arca-gold'}`}
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="ENTER CODE"
                    />

                    <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-arca-gold transition-colors flex items-center justify-center gap-2">
                        <Unlock className="w-4 h-4" /> ACCESS VAULT
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
