"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { processes } from "@/lib/agency-data";
import Link from "next/link";
import { Calendar, DollarSign, Zap } from "lucide-react";
import { ProcessLineProgress } from "./ProcessLineProgress";

export default function ProcessRoadmap() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    return (
        <section ref={containerRef} className="py-32 bg-white/5 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative">
                <div className="text-center mb-24 relative z-10">
                    <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4">THE PROTOCOL</h2>
                    <p className="text-gray-400">Six steps from chaos to order.</p>
                </div>

                <div className="relative">
                    {/* SVG Curvy Path - Desktop */}
                    <div className="absolute left-0 right-0 top-0 bottom-0 hidden md:block pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 100 1200" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="gold-gradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#C5A059" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#C5A059" />
                                    <stop offset="100%" stopColor="#C5A059" />
                                </linearGradient>
                            </defs>
                            {/* Background Trace (Grey) */}
                            <motion.path
                                d="M 50 0 Q 60 100, 50 200 T 50 400 T 50 600 T 50 800 T 50 1000 T 50 1200"
                                stroke="rgba(255,255,255,0.05)"
                                strokeWidth="2"
                                fill="none"
                                vectorEffect="non-scaling-stroke"
                            />
                            {/* Scroll Progress Line (Gold) */}
                            <ProcessLineProgress scrollYProgress={scrollYProgress} />
                        </svg>
                    </div>

                    {/* Mobile Line (Straight) */}
                    <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/10 md:hidden">
                        <motion.div
                            style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                            className="w-full bg-arca-gold shadow-[0_0_20px_var(--color-arca-gold)]"
                        />
                    </div>

                    <div className="space-y-32">
                        {processes.map((step, idx) => (
                            <ProcessStep key={idx} data={step} index={idx} parentScroll={scrollYProgress} totalSteps={processes.length} />
                        ))}
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-32 text-center max-w-2xl mx-auto p-8 border border-white/10 rounded-2xl bg-black/50 backdrop-blur-sm relative z-10">
                    <h4 className="font-bold text-lg mb-2 text-white">SIMPLE PRICING. NO HIDDEN FEES.</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        We charge for value released, not hours spent.
                        The 500 INR consultation fee ensures we only work with serious partners who value architectural precision.
                    </p>
                </div>
            </div>
        </section>
    );
}

function ProcessStep({ data, index, parentScroll, totalSteps }: { data: any, index: number, parentScroll: any, totalSteps: number }) {
    const isEven = index % 2 === 0;

    // Calculate when this step should be "active" based on scroll
    // roughly: index / totalSteps
    const stepStart = index / totalSteps;
    const stepEnd = (index + 0.5) / totalSteps;

    const opacity = useTransform(parentScroll, [stepStart - 0.1, stepStart, stepEnd], [0.3, 1, 1]);
    const scale = useTransform(parentScroll, [stepStart - 0.1, stepStart], [0.8, 1]);
    const glow = useTransform(parentScroll, [stepStart, stepStart + 0.1], ["0px 0px 0px rgba(197,160,89,0)", "0px 0px 30px rgba(197,160,89,0.5)"]);

    const borderOpacity = useTransform(parentScroll, [stepStart, stepStart + 0.1], [0.1, 0.5]);
    const borderGlow = useTransform(parentScroll, [stepStart, stepStart + 0.1], ["0px 0px 0px rgba(197,160,89,0)", "0px 0px 20px rgba(197,160,89,0.2)"]);
    const textGlow = useTransform(parentScroll, [stepStart, stepStart + 0.1], ["none", "drop-shadow(0 0 8px rgba(197,160,89,0.5))"]);

    return (
        <motion.div
            style={{ opacity }}
            className={`flex flex-col md:flex-row gap-8 md:gap-0 items-center relative z-10 ${isEven ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Content Side - HUD Box */}
            <motion.div
                style={{
                    borderColor: useTransform(borderOpacity, (v) => `rgba(255, 255, 255, ${v})`),
                    boxShadow: borderGlow,
                    backgroundColor: "rgba(0,0,0,0.5)"
                }}
                className={`flex-1 ${isEven ? 'md:mr-12 md:text-left' : 'md:ml-12 md:text-right'} p-8 rounded-xl border backdrop-blur-md transition-colors relative overflow-hidden group`}
            >
                {/* HUD Corners - Visual Candy */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-arca-gold opacity-50" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-arca-gold opacity-50" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-arca-gold opacity-50" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-arca-gold opacity-50" />

                <div className="text-arca-gold font-mono text-sm mb-2 tracking-widest flex items-center gap-2 justify-between">
                    <span>PHASE 0{data.step}</span>
                    <Zap className="w-3 h-3 opacity-50" />
                </div>

                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">{data.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">{data.description}</p>

                {data.details && (
                    <div className="p-3 bg-white/5 border border-white/10 text-gray-300 text-xs font-mono rounded-lg mb-4 inline-block">
                        {data.details}
                    </div>
                )}

                <div className={`mt-4 ${isEven ? 'flex justify-start' : 'flex justify-end'}`}>
                    {data.action === "CALENDLY_LINK" && (
                        <Link href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-arca-gold transition-colors text-xs tracking-wide">
                            <Calendar className="w-3 h-3" /> BOOK DISCOVERY
                        </Link>
                    )}
                    {data.action === "PAYMENT_GATEWAY" && (
                        <button className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-black transition-colors text-xs tracking-wide">
                            <DollarSign className="w-3 h-3" /> PAY $20 (500 INR)
                        </button>
                    )}
                </div>
            </motion.div>

            {/* Center Node */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                {/* Connection Line to Content (Horizontal) */}
                <div className={`hidden md:block absolute top-1/2 w-12 h-[1px] bg-white/20 ${isEven ? 'right-full' : 'left-full'}`} />

                <motion.div
                    style={{ scale, boxShadow: glow }}
                    className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-void-black border-2 border-arca-gold relative z-20 shrink-0"
                >
                    <div className="absolute inset-0 bg-arca-gold rounded-full animate-ping opacity-20" />
                </motion.div>
            </div>

            {/* Empty Side for balance */}
            <div className="flex-1 hidden md:block" />

        </motion.div>
    );
}
