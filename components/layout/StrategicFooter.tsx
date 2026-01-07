
"use client";

import Link from "next/link";
import { Twitter, Github, Linkedin, Mail } from "lucide-react";

export default function StrategicFooter() {
    return (
        <footer className="bg-void-black border-t border-white/5 pt-12 pb-12 relative z-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">

                    {/* Brand / Manifesto */}
                    <div className="max-w-md">
                        <Link href="/" className="font-heading text-2xl font-bold text-white mb-6 block">
                            ARCA<span className="text-arca-gold">.GROUPS</span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            SYSTEM IDENTIFIER: AG-2025-X<br />
                            STATUS: OPERATIONAL<br />
                            LOCATION: DECENTRALIZED
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={Twitter} />
                            <SocialIcon icon={Github} />
                            <SocialIcon icon={Linkedin} />
                            <SocialIcon icon={Mail} />
                        </div>
                    </div>

                    {/* Legal / Minimal Links */}
                    <div className="text-right">
                        <div className="flex flex-wrap justify-end gap-6 text-xs text-gray-600 font-mono mb-4">
                            <Link href="/privacy" className="hover:text-white transition-colors">PRIVACY_PROTOCOL</Link>
                            <Link href="/terms" className="hover:text-white transition-colors">TERMS_OF_EXECUTION</Link>
                            <Link href="/contact" className="hover:text-white transition-colors">STATUS_PAGE</Link>
                        </div>
                        <p className="text-xs text-gray-700 font-mono">
                            © 2025 ARCA GROUPS. ALL RIGHTS RESERVED.
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon: Icon }: { icon: any }) {
    return (
        <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
            <Icon className="w-4 h-4" />
        </a>
    );
}
