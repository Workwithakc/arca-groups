"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "@/lib/store";
import { ShieldAlert, Terminal, Upload, CheckCircle, Loader2, Box, FileJson } from "lucide-react";

export default function CommandOS() {
    const { isAdminAuthenticated, authenticateAdmin } = useAppStore();
    const [input, setInput] = useState("");
    const [logs, setLogs] = useState<string[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Upload Simulation State
    const [uploading, setUploading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs]);

    const handleCommand = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            const cmd = input.trim();
            setLogs((prev) => [...prev, `> ${cmd}`]);

            if (cmd === "sudo login admin" || cmd === "LOGIN") {
                setLogs((prev) => [...prev, "AUTHENTICATING...", "ACCESS GRANTED."]);
                setTimeout(authenticateAdmin, 1000);
            } else {
                setLogs((prev) => [...prev, `UNKNOWN COMMAND: ${cmd}`]);
            }
            setInput("");
        }
    };

    const handleUpload = () => {
        setUploading(true);
        // Simulate API call
        setTimeout(() => {
            setUploading(false);
            setUploadSuccess(true);
            setTimeout(() => setUploadSuccess(false), 3000);
        }, 2000);
    };

    if (!isAdminAuthenticated) {
        return (
            <main className="min-h-screen bg-black text-green-500 font-mono p-4 md:p-10 flex flex-col items-center justify-center">
                <div className="w-full max-w-2xl border border-green-900 bg-black p-4 rounded shadow-[0_0_20px_rgba(0,255,0,0.1)]">
                    <div className="flex items-center gap-2 mb-4 border-b border-green-900 pb-2">
                        <Terminal className="w-4 h-4" />
                        <span className="text-xs">COMMAND_OS v.1.0.4</span>
                    </div>

                    <div ref={scrollRef} className="h-64 overflow-y-auto space-y-1 mb-4 text-sm opacity-80">
                        <p>INITIALIZING SYSTEM...</p>
                        <p>CONNECTING TO ARCA_SECURE_SERVER...</p>
                        <p className="text-red-500">Warning: UNAUTHORIZED USER DETECTED.</p>
                        {logs.map((log, i) => (
                            <p key={i}>{log}</p>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="animate-pulse">_</span>
                        <input
                            autoFocus
                            className="bg-transparent border-none outline-none flex-1 text-green-500 placeholder-green-900"
                            placeholder="ENTER COMMAND (Try: LOGIN)"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleCommand}
                        />
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row">
            {/* Sidebar - Mobile Responsive */}
            <aside className="w-full md:w-64 bg-black border-b md:border-b-0 md:border-r border-gray-800 p-6 flex flex-col md:h-screen">
                <h2 className="font-heading text-xl text-arca-gold mb-8 flex justify-between items-center">
                    COMMAND_OS
                    <span className="md:hidden text-xs text-green-500">● ONLINE</span>
                </h2>
                <nav className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
                    <button className="whitespace-nowrap w-full text-left p-3 hover:bg-gray-800 rounded bg-gray-800/50 border-l-2 border-arca-gold text-sm font-bold">UPLOAD ARTIFACT</button>
                    <button className="whitespace-nowrap w-full text-left p-3 hover:bg-gray-800 rounded text-gray-500 text-sm">ANALYTICS</button>
                    <button className="whitespace-nowrap w-full text-left p-3 hover:bg-gray-800 rounded text-gray-500 text-sm">logs</button>
                </nav>
                <div className="hidden md:block mt-auto text-xs text-gray-600 font-mono">
                    USER: ROOT<br />SESSION: SECURE
                </div>
            </aside>

            {/* Content */}
            <section className="flex-1 p-6 md:p-10 overflow-y-auto h-auto md:h-screen">
                <header className="flex justify-between items-center mb-10">
                    <h1 className="text-xl md:text-2xl font-body">UPLOAD INTERFACE</h1>
                    <span className="px-3 py-1 rounded bg-green-500/20 text-green-400 text-xs border border-green-500/30 flex items-center gap-2">
                        <CheckCircle className="w-3 h-3" /> <span className="hidden md:inline">SYSTEM OPTIMAL</span>
                    </span>
                </header>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Upload Card Template */}
                    {[
                        { title: "PHYSICAL_ARTIFACT" as const, icon: Box, placeholder: "PRODUCT NAME" },
                        { title: "DIGITAL_CONSTRUCT" as const, icon: FileJson, placeholder: "WORKFLOW NAME" }
                    ].map((type, i) => (
                        <UploadCard key={i} type={type.title} Icon={type.icon} placeholder={type.placeholder} />
                    ))}
                </div>
            </section>
        </main>
    );
}
