"use client";

import { motion } from "framer-motion";

export default function ReactorCore() {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 md:opacity-100">

            {/* Outer Ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-[600px] h-[600px] border border-gray-800 rounded-full flex items-center justify-center"
            >
                <div className="absolute w-full h-full border-t border-b border-arca-gold/20 rounded-full" />
            </motion.div>

            {/* Middle Ring */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[450px] h-[450px] border border-gray-800/50 rounded-full flex items-center justify-center border-dashed"
            >
                <div className="absolute top-0 w-2 h-2 bg-arca-gold rounded-full shadow-glow-gold" />
                <div className="absolute bottom-0 w-2 h-2 bg-arca-gold rounded-full shadow-glow-gold" />
            </motion.div>

            {/* Inner Core */}
            <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[200px] h-[200px] rounded-full bg-void-black border border-arca-gold shadow-[0_0_50px_rgba(197,160,89,0.2)] flex items-center justify-center"
            >
                <div className="w-[180px] h-[180px] rounded-full border border-gray-800 flex items-center justify-center">
                    <div className="w-[100px] h-[100px] rounded-full bg-[radial-gradient(circle_at_center,_var(--color-arca-gold),transparent)] opacity-30 blur-xl" />
                </div>
            </motion.div>

        </div>
    );
}
