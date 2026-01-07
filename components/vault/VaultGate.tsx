"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useAppStore } from "@/lib/store";
import { Lock, Unlock, Fingerprint } from "lucide-react";

export default function VaultGate() {
    const unlockVault = useAppStore((state) => state.unlockVault);
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);
    const [scanning, setScanning] = useState(false);

    // Logic: The answer to "8, 16, 32, 64, ?" is 128
    const handleVerify = () => {
        setScanning(true);

        setTimeout(() => {
            if (input.trim() === "128") {
                unlockVault();
            } else {
                setError(true);
                setScanning(false);
                setInput("");
                setTimeout(() => setError(false), 2000);
            }
        }, 1500); // Fake scanning delay
    };

    return (
        <div className="h-screen w-full bg-void-black flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/40 via-void-black to-void-black" />

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="z-10 w-full max-w-md p-8 border border-gray-800 bg-black/80 backdrop-blur-xl rounded-2xl shadow-2xl relative"
            >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />

                <div className="text-center mb-8">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-4 border border-gray-700">
                        {scanning ? (
                            <motion.div
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 0.5, repeat: Infinity }}
                            >
                                <Fingerprint className="w-8 h-8 text-arca-gold" />
                            </motion.div>
                        ) : (
                            <Lock className="w-6 h-6 text-gray-500" />
                        )}
                    </div>
                    <h2 className="font-heading text-2xl text-white tracking-widest">SECURITY GATE</h2>
                    <p className="font-body text-xs text-gray-500 mt-2">BIOMETRIC LOGIC CHALLENGE REQUIRED</p>
                </div>

                <div className="space-y-6">
                    <div className="p-4 bg-gray-900/50 rounded border border-gray-800">
                        <p className="font-mono text-sm text-gray-400 text-center">
                            COMPLETE THE SEQUENCE:<br />
                            <span className="text-white text-lg tracking-widest mt-2 block">8, 16, 32, 64, ...</span>
                        </p>
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="ENTER SEQUENCE"
                            className="w-full bg-black border border-gray-700 text-white font-mono text-center py-3 rounded focus:outline-none focus:border-arca-gold transition-colors"
                        />
                        {error && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute -bottom-6 left-0 right-0 text-center text-xs text-red-500 font-bold"
                            >
                                ACCESS DENIED. INCORRECT SEQUENCE.
                            </motion.p>
                        )}
                    </div>

                    <button
                        onClick={handleVerify}
                        className="w-full py-4 bg-white/5 border border-gray-700 hover:bg-arca-gold hover:text-black hover:border-arca-gold transition-all duration-300 rounded font-heading tracking-widest text-sm"
                    >
                        {scanning ? "VERIFYING..." : "AUTHENTICATE"}
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
