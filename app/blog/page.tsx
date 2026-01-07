
"use client";

import { blogs } from "@/lib/content-data";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Tag } from "lucide-react";

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-void-black text-white pt-24 pb-32">
            <div className="fixed top-8 left-8 z-50">
                <Link href="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" /> BACK TO HUB
                </Link>
            </div>

            <header className="max-w-6xl mx-auto px-6 mb-24 text-center">
                <p className="text-arca-gold font-mono text-sm tracking-widest mb-4">THE ARCHIVE</p>
                <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">INTELLIGENCE</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Documentation of our philosophy, protocols, and findings.
                    Read these to understand how to replace yourself.
                </p>
            </header>

            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, idx) => (
                    <Link key={blog.id} href={`/blog/${blog.id}`} className="group">
                        <article className="h-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-arca-gold/30 transition-all duration-300 flex flex-col backdrop-blur-sm">
                            <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mb-6">
                                <span className="px-2 py-1 border border-white/10 rounded-md">{blog.category}</span>
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {blog.readTime}</span>
                            </div>

                            <h2 className="font-heading text-2xl font-bold mb-4 group-hover:text-arca-gold transition-colors leading-tight">
                                {blog.title}
                            </h2>
                            <p className="text-sm text-gray-400 leading-relaxed mb-8 flex-grow">
                                {blog.excerpt}
                            </p>

                            {/* Keywords / Tags Visual */}
                            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                                {blog.keywords.slice(0, 3).map((kw, kIdx) => (
                                    <span key={kIdx} className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors">#{kw}</span>
                                ))}
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </main>
    );
}
