
"use client";

import { motion } from "framer-motion";
import { platformLogos } from "@/lib/content-data";

export default function SupportedPlatforms() {
    return (
        <section className="py-24 border-y border-white/5 bg-black/40 relative overflow-hidden">
            {/* Gradient Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-void-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-void-black to-transparent z-10" />

            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-mono text-gray-500 tracking-widest uppercase mb-8">System Compatibility Matrix</p>
            </div>

            {/* Infinite Marquee */}
            <div className="flex overflow-hidden group">
                <motion.div
                    className="flex gap-16 items-center min-w-full px-8"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                >
                    {/* Double the array for seamless loop */}
                    {[...platformLogos, ...platformLogos].map((platform, idx) => (
                        <div key={idx} className="flex items-center gap-3 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer group/item">
                            <platform.icon className="w-8 h-8 group-hover/item:text-arca-gold transition-colors" />
                            <span className="font-heading text-xl font-bold">{platform.name}</span>
                        </div>
                    ))}
                </motion.div>
                <motion.div
                    className="flex gap-16 items-center min-w-full px-8"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                >
                    {/* Repeated for safety in wide screens although double array usually covers it */}
                    {/* Already handled by spread above but doing explicit second div for safety in framer motion loop logic if needed. Actually single big div is better. Reverting to single div approach above with doubled data.*/}
                </motion.div>
            </div>

            <div className="flex overflow-hidden group mt-4 absolute top-24 left-0 right-0 pointer-events-none opacity-0">
                {/* Backup hidden structure */}
            </div>
        </section>
    );
}
