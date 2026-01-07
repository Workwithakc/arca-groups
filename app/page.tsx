"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Lock, Package, Zap } from "lucide-react";
import { useState } from "react";
import TrustSection from "@/components/Agency/TrustSection";
import ProcessRoadmap from "@/components/Agency/ProcessRoadmap";
import SupportedPlatforms from "@/components/Agency/SupportedPlatforms";
import StrategicFooter from "@/components/layout/StrategicFooter";
import AutomationWheel from "@/components/navigation/AutomationWheel";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function Home() {
    return (
        <main className="min-h-screen bg-void-black text-white selection:bg-arca-gold selection:text-black font-sans">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
                <div className="font-heading font-bold text-xl tracking-widest text-white">
                    ARCA GROUPS
                </div>
                <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
                    <Link href="/vault" className="hover:text-white transition-colors">VAULT</Link>
                    <Link href="/store" className="hover:text-white transition-colors">STORE</Link>
                </div>
                <Link href="/contact" className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold hover:bg-white hover:text-black transition-all">
                    GET ACCESS
                </Link>
            </nav>

            {/* Hero Section */}
            <section className="h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-holo-blue)_0%,_transparent_70%)] opacity-20 pointer-events-none" />

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="z-10 text-center max-w-4xl"
                >
                    <motion.h2 variants={fadeInUp} className="text-arca-gold font-medium tracking-[0.2em] mb-4 text-sm md:text-base">
                        AUTOMATION SIMPLIFIED
                    </motion.h2>
                    <motion.h1 variants={fadeInUp} className="font-heading text-5xl md:text-8xl font-bold leading-tight mb-8">
                        WE DO NOT SELL <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">SERVICES.</span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                        We install systems that operate without you.
                        Standardized. Scalable. Perfect.
                        Your business should be a machine, not a job.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/store" className="group px-8 py-4 bg-white text-black font-bold rounded-full flex items-center justify-center gap-2 hover:bg-arca-gold transition-colors">
                            BROWSE SYSTEMS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/vault" className="group px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/10 transition-colors">
                            ENTER VAULT
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Trust / Clients / "No Clients" Section */}
            <TrustSection />

            {/* Platform Matrix */}
            <SupportedPlatforms />

            {/* Process Roadmap */}
            <ProcessRoadmap />

            {/* Portal Grid */}
            <section className="py-32 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PortalCard
                            title="THE VAULT"
                            description="Exclusive resources, knowledge bases, and forbidden protocols."
                            icon={<Lock className="w-6 h-6 text-arca-gold" />}
                            link="/vault"
                        />
                        <PortalCard
                            title="THE STORE"
                            description="Pre-built automation engines. Plug, play, and dominate."
                            icon={<Package className="w-6 h-6 text-arca-gold" />}
                            link="/store"
                        />
                        <PortalCard
                            title="SERVICES"
                            description="Custom architecture for enterprise-grade scalability."
                            icon={<Zap className="w-6 h-6 text-arca-gold" />}
                            link="/contact"
                        />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-32 px-6 border-t border-white/5">
                <div className="max-w-3xl mx-auto">
                    <h3 className="font-heading text-3xl font-bold mb-16 text-center">COMMON QUERIES</h3>
                    <div className="space-y-4">
                        <AccordionItem
                            question="Is this for my business?"
                            answer="If you value time over control, yes. If you want to micro-manage every pixel, no. We build machines that run themselves."
                        />
                        <AccordionItem
                            question="How fast is implementation?"
                            answer="Standard protocols are deployed in 48 hours. Custom architectures take 14-21 days. We move at the speed of code, not bureaucracy."
                        />
                        <AccordionItem
                            question="What if it breaks?"
                            answer="Our systems are self-healing. But on the rare occasion potential falls short of kinetic reality, our support team is on standby 24/7."
                        />
                        <AccordionItem
                            question="Do you offer refunds?"
                            answer="We offer results. If the system doesn't perform as specified, we iterate until it does."
                        />
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-arca-gold/5 pointer-events-none" />
                <h2 className="font-heading text-4xl md:text-7xl font-bold mb-8 relative z-10">READY TO AUTOMATE?</h2>
                <Link href="/store" className="relative z-10 inline-block px-12 py-5 bg-arca-gold text-black font-bold rounded-full text-lg hover:bg-white transition-colors hover:scale-105 duration-300">
                    START NOW
                </Link>
            </section>

            {/* Navigation Wheel */}
            <AutomationWheel />

            {/* Footer */}
            <StrategicFooter />
        </main>
    );
}

function PortalCard({ title, description, icon, link }: { title: string, description: string, icon: React.ReactNode, link: string }) {
    return (
        <Link href={link} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-arca-gold/50 transition-all duration-300">
            <div className="mb-6 p-4 bg-void-black rounded-full inline-block group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-arca-gold">
                {icon}
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-arca-gold transition-colors">{title}</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{description}</p>
        </Link>
    )
}

function AccordionItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/10 rounded-lg overflow-hidden bg-white/5">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
            >
                <span className="font-bold text-lg">{question}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-6 pt-0 text-gray-400">
                    {answer}
                </div>
            </div>
        </div>
    )
}
