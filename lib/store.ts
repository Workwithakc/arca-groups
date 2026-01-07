import { create } from 'zustand';

export interface Product {
    id: number;
    name: string;
    price: string;
    category: "PHYSICAL" | "DIGITAL";
    image?: string;
    stats: string;
}

interface AppState {
    isVaultUnlocked: boolean;
    isAdminAuthenticated: boolean;
    products: Product[];
    unlockVault: () => void;
    authenticateAdmin: () => void;
    addProduct: (product: Product) => void;
}

const initialProducts: Product[] = [
    {
        id: 1,
        name: "QUANTUM DESK MAT",
        price: "$49.00",
        category: "PHYSICAL",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
        stats: "Anti-Static // Waterproof"
    },
    {
        id: 2,
        name: "LEAD_GEN_V.2.0.JSON",
        price: "$199.00",
        category: "DIGITAL",
        stats: "n8n // Supabase"
    },
    {
        id: 3,
        name: "NEURAL HEADSET STAND",
        price: "$89.00",
        category: "PHYSICAL",
        image: "https://images.unsplash.com/photo-1596740926474-00539541710b?auto=format&fit=crop&q=80&w=800",
        stats: "Aluminum // RGB"
    },
    {
        id: 4,
        name: "AUTO_CRM_SYNC.JSON",
        price: "$149.00",
        category: "DIGITAL",
        stats: "Pipedrive // OpenAI"
    }
];

export const useAppStore = create<AppState>((set) => ({
    isVaultUnlocked: false,
    isAdminAuthenticated: false,
    products: initialProducts,
    unlockVault: () => set({ isVaultUnlocked: true }),
    authenticateAdmin: () => set({ isAdminAuthenticated: true }),
    addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
}));
