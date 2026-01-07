"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleHoverStart = () => setHovered(true);
        const handleHoverEnd = () => setHovered(false);

        window.addEventListener("mousemove", moveCursor);

        // Attach listeners to interactive elements
        const interactables = document.querySelectorAll("a, button, input, textarea, .interactable");
        interactables.forEach((el) => {
            el.addEventListener("mouseenter", handleHoverStart);
            el.addEventListener("mouseleave", handleHoverEnd);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            interactables.forEach((el) => {
                el.removeEventListener("mouseenter", handleHoverStart);
                el.removeEventListener("mouseleave", handleHoverEnd);
            });
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
        >
            <motion.div
                animate={{
                    scale: hovered ? 2.5 : 1,
                    backgroundColor: hovered ? "#C5A059" : "white"
                }}
                className="w-full h-full rounded-full bg-white opacity-80"
            />
        </motion.div>
    );
}
