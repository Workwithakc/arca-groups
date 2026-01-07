
"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const wheelItems = [
    { name: "BUSINESS SYSTEMS", href: "/services#marketing" },
    { name: "AUTOMATION STORE", href: "/store" },
    { name: "THE VAULT", href: "/vault" },
    { name: "INTELLIGENCE BLOG", href: "/blog" },
    { name: "MANIFESTO", href: "/#about" },
    { name: "CONTACT PROTOCOL", href: "/contact" },
    // Repeat for continuous feel/overflow handling if needed, 
    // but for this design we map 0-1 to full rotation or a segment.
];

export default function AutomationWheel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Track scroll over a larger distance to "pin" the view
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth rotation: Map 0-1 scroll to 0 -> -360 degrees (one full rotation)
    // Adjust the angle range based on how many items we have to ensure they all pass through the "active" zone (3 o'clock)
    // If we want the wheel to spin "forward" (clockwise items moving up?), usually negative rotation.
    // Let's assume active zone is at 0 degrees (3 o'clock standard math) or 90.
    // Our design puts links at 3 o'clock. 
    const rotationRange = [20, -((wheelItems.length - 1) * (360 / wheelItems.length)) + 20];
    const rotation = useSpring(useTransform(scrollYProgress, [0, 1], rotationRange), { stiffness: 50, damping: 20 });

    // Update active index based on scroll progress
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Divide progress into segments
        const segmentSize = 1 / wheelItems.length;
        // Clamp to valid index
        const index = Math.min(Math.floor(latest / segmentSize), wheelItems.length - 1);
        setActiveIndex(index);
    });

    return (
        // The container is TALL (300vh) to allow scrolling time
        <section ref={containerRef} className="h-[400vh] bg-void-black relative">

            {/* The Sticky Viewport */}
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">

                {/* Title / Indicator */}
                <div className="absolute top-20 text-center z-20 pointer-events-none">
                    <p className="text-arca-gold font-mono text-xs tracking-[0.5em] mb-4">NAVIGATION CONSOLE</p>
                    <h3 className="text-white font-heading text-4xl font-bold">SELECT DESTINATION</h3>
                </div>

                {/* The Wheel Container - Shifted down/right to position active area */}
                <motion.div
                    className="relative w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] flex items-center justify-center translate-y-[40%]"
                >
                    {/* Rotating Inner Ring */}
                    <motion.div
                        style={{ rotate: rotation }}
                        className="w-full h-full relative rounded-full border border-white/5"
                    >
                        {wheelItems.map((item, idx) => {
                            const anglePerItem = 360 / wheelItems.length;
                            const angle = idx * anglePerItem;

                            // Check if this item is active
                            const isActive = idx === activeIndex;

                            return (
                                <div
                                    key={idx}
                                    className="absolute top-1/2 left-1/2 w-full h-2"
                                    style={{
                                        rotate: `${angle}deg`,
                                        transformOrigin: "left center"
                                    }}
                                >
                                    {/* The Link Item placed at the edge */}
                                    {/* We attach it to the 'end' of the radius (right side) */}
                                    <div className="absolute right-[-50px] top-1/2 -translate-y-1/2 flex items-center gap-4 pl-4"
                                        style={{
                                            // Counter-rotate the text so it stays mostly upright? 
                                            // Or let it rotate with the wheel. User asked for "wheel going round".
                                            // Usually text rotates.
                                        }}
                                    >
                                        <Link href={item.href} className={`group flex items-center gap-6 transition-all duration-500 ${isActive ? 'scale-110' : 'scale-90 opacity-20 blur-[2px]'}`}>

                                            {/* Connector Line */}
                                            <div className={`h-[2px] transition-all duration-500 ${isActive ? 'w-48 bg-arca-gold shadow-[0_0_20px_rgba(255,215,0,0.5)]' : 'w-24 bg-white/10'}`} />

                                            {/* Text */}
                                            <span className={`font-heading text-4xl md:text-7xl font-bold whitespace-nowrap transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-800'}`}>
                                                {item.name}
                                            </span>

                                            {/* Icon */}
                                            <div className={`p-4 rounded-full border transition-all duration-500 ${isActive ? 'border-arca-gold bg-arca-gold text-black rotate-45' : 'border-white/10 text-transparent'}`}>
                                                <ArrowUpRight className="w-8 h-8" />
                                            </div>

                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* Center Hub Decoration */}
                    <div className="absolute inset-0 m-auto w-48 h-48 rounded-full border border-arca-gold/20 bg-void-black z-10 flex items-center justify-center">
                        <div className="absolute inset-0 border border-t-arca-gold/50 rounded-full animate-spin duration-3000" />
                        <div className="w-2 h-2 bg-arca-gold rounded-full shadow-[0_0_20px_rgba(255,215,0,1)]" />
                    </div>

                </motion.div>

                {/* Active Zone Marker (Optional visual cue) */}
                <div className="absolute right-[10%] top-1/2 w-20 h-[1px] bg-gradient-to-l from-arca-gold to-transparent pointer-events-none opacity-50" />

            </div>
        </section>
    );
}
