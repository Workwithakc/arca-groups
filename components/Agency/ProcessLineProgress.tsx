"use client";
import { motion, useTransform, MotionValue } from "framer-motion";

export function ProcessLineProgress({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

    // A "DNA" style double helix or simple sine wave that repeats
    // M (start) x y
    // Q (control) x y (end) x y

    // Screen width is variable, but viewBox is relative.
    // Center is 50%.
    // We want a wave that oscillates between 45% and 55% width. or more.

    // Since we can't easily get the total height in the viewBox without measurement,
    // We'll use a very long path assumption or percentage based points.
    // BUT percent based path data is not fully supported in all path commands predictably.
    // So we assume the container is tall and use relative coordinates? No.

    // Best bet: Vertical line with slight curves.
    // Using a simpler straight path with curve aesthetic for safety:
    // M 50% 0 L 50% 100%

    // Wait, let's try a fixed coordinate system assuming a tall scroll area (e.g. 2000px)
    // And preserveAspectRatio="none" stretches it.

    return (
        <motion.path
            d="M 50 0 Q 60 100, 50 200 T 50 400 T 50 600 T 50 800 T 50 1000 T 50 1200" // Simple wavy line logic, assuming viewBox="0 0 100 1200"
            fill="none"
            stroke="#C5A059"
            strokeWidth="2"
            style={{ pathLength }}
            vectorEffect="non-scaling-stroke" // Keeps line width constant even if stretched
        />
    );
}
