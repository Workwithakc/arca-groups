"use client";

import Gatekeeper from "@/components/vault/Gatekeeper";
import StasisGrid from "@/components/vault/StasisGrid";

export default function VaultPage() {
    return (
        <main className="bg-void-black min-h-screen text-white selection:bg-arca-gold selection:text-black">
            <Gatekeeper>
                <StasisGrid />
            </Gatekeeper>
        </main>
    );
}
