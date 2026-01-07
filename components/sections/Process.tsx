"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Calendar, Search, Workflow, DollarSign, Cpu, Activity } from "lucide-react";

const steps = [
    {
        title: "CALIBRATION",
        icon: Calendar,
        description: "Initiate protocol via secured uplink. No cost entry.",
        action: "FIX FREE MEETING",
        link: "#calendly",
        isWarning: false
    },
    {
        title: "DIAGNOSTICS",
        icon: Search,
        description: "Deep dive analysis of current operational bottlenecks.",
        action: "MEETING 01",
        isWarning: false
    },
    {
        title: "BLUEPRINT GENERATION",
        icon: Workflow,
        description: "Our architects draft the custom automation schema.",
        action: "INTERNAL PROCESS",
        isWarning: false
    },
    {
        title: "VALUE ASSESSMENT",
        icon: DollarSign,
        description: "Transparent pricing revealed. You only pay if the ROI makes sense.",
        action: "MEETING 02",
        disclaimer: "Validation Fee: 500 INR. Fully refundable if we can't help.",
        isWarning: true
    },
    {
        title: "FABRICATION",
        icon: Cpu,
        description: "Model training and infrastructure deployment.",
        action: "EXECUTION PHASE",
        isWarning: false
    },
    {
        title: "LIVE OPS",
        icon: Activity,
        description: "Continuous system maintenance and optimization.",
        action: "RETAINER",
        monthly: true,
        isWarning: false
    }
];

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

    return (
        <section ref={containerRef} className="relative min-h-[200vh] py-32 bg-void-black text-white overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center mb-20 md:mb-40">
                    <h2 className="font-heading text-4xl md:text-6xl mb-4">THE <span className="text-arca-gold">SYSTEM</span></h2>
                    <p className="font-body text-gray-400 max-w-xl mx-auto">
                        Complex architecture, simplified delivery. <br />
                        <span className="text-white font-bold">Start with a free strategy session.</span>
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">

                    {/* CURVY MAP SVG */}
                    <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 -translate-x-1/2 w-2 md:w-[600px] h-full pointer-events-none">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 600 1200" preserveAspectRatio="none">
                            <motion.path
                                d="M 300 0 C 300 100, 100 200, 100 300 C 100 400, 500 500, 500 600 C 500 700, 100 800, 100 900 C 100 1000, 300 1100, 300 1200"
                                fill="none"
                                stroke="rgba(255, 255, 255, 0.1)"
                                strokeWidth="2"
                                className="hidden md:block"
                            />
                            <motion.path
                                d="M 300 0 C 300 100, 100 200, 100 300 C 100 400, 500 500, 500 600 C 500 700, 100 800, 100 900 C 100 1000, 300 1100, 300 1200"
                                fill="none"
                                stroke="#C5A059"
                                strokeWidth="3"
                                className="hidden md:block shadow-[0_0_20px_#C5A059]"
                                style={{ pathLength: pathLength }}
                            />

                            {/* Mobile Straight Line fallback */}
                            <motion.line
                                x1="0" y1="0" x2="0" y2="100%"
                                stroke="#333" strokeWidth="2"
                                className="md:hidden"
                            />
                            <motion.line
                                x1="0" y1="0" x2="0" y2="100%"
                                stroke="#C5A059" strokeWidth="2"
                                className="md:hidden"
                                style={{ pathLength: pathLength }}
                            />
                        </svg>
                    </div>

                    <div className="space-y-32 md:space-y-48 pb-32">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={index} className={`relative flex flex-col md:flex-row items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>

                                    {/* Text Content */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.5 }}
                                        className={`flex-1 w-full md:w-auto p-6 md:p-8 rounded-xl bg-black/50 border border-gray-800 backdrop-blur-sm hover:border-arca-gold/50 transition-colors z-20 ${isEven ? "md:mr-20 text-right" : "md:ml-20 text-left"}`}
                                    >
                                        <div className={`flex items-center gap-4 mb-4 ${isEven ? "flex-row-reverse" : "flex-row"}`}>
                                            <step.icon className={`w-8 h-8 ${step.isWarning ? "text-red-500" : "text-arca-gold"}`} />
                                            <h3 className="font-heading text-xl md:text-3xl font-bold">{step.title}</h3>
                                        </div>

                                        <p className="font-body text-gray-400 mb-4 text-base">{step.description}</p>

                                        {step.disclaimer && (
                                            <div className={`text-xs font-mono text-arca-gold/70 bg-arca-gold/5 p-2 rounded mb-4 inline-block`}>
                                                {step.disclaimer}
                                            </div>
                                        )}

                                        <div className={`flex items-center gap-4 ${isEven ? "justify-end" : "justify-start"}`}>
                                            {step.link ? (
                                                <button className="px-6 py-2 bg-arca-gold text-black font-bold text-xs tracking-widest hover:bg-white transition-colors rounded-sm">
                                                    {step.action}
                                                </button>
                                            ) : (
                                                <span className="text-xs tracking-widest text-gray-600 uppercase font-bold border-b border-gray-800 pb-1">{step.action}</span>
                                            )}
                                        </div>
                                    </motion.div>

                                    {/* Marker Node (Hidden on mobile mostly, simplified) */}
                                    <div className={`w-4 h-4 bg-void-black border-2 border-arca-gold rounded-full z-20 shadow-[0_0_15px_#C5A059] hidden md:block absolute left-1/2 -translate-x-1/2 
                     ${index === 0 ? "top-[0%]" : ""} 
                     ${index === 1 ? "top-[1%]" : ""} 
                     /* Note: Positioning circles on a bezier curve via pure CSS is hard. 
                        We simplify visual alignment by letting the svg line pass 'near' them or use layout grids.
                        For 'Curvy Map', we just center them and let the line weave.
                     */
                  `}>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
