export type Product = {
    id: string;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
};

// Initial mock data
export const initialProducts: Product[] = [
    {
        id: "1",
        title: "Quantum Lead Scraper",
        price: 499.00,
        description: "Automated high-ticket lead generation system. Target specific industries with 99% accuracy.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        category: "Software"
    },
    {
        id: "2",
        title: "Viral Content Engine",
        price: 299.00,
        description: "AI-driven content replication system. Scale your organic reach without lifting a finger.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
        category: "Marketing"
    },
    {
        id: "3",
        title: "CRM Autopilot Node",
        price: 750.00,
        description: "Complete customer relationship management automation. From first contact to deal close.",
        image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2670&auto=format&fit=crop",
        category: "Operations"
    }
];

// Helper to simulate "database" operations for the session
// In a real app, this would be an API call
export const getProducts = () => {
    if (typeof window === 'undefined') return initialProducts;
    const stored = localStorage.getItem('arca_products');
    return stored ? JSON.parse(stored) : initialProducts;
};

export const addProduct = (product: Product) => {
    const current = getProducts();
    const updated = [product, ...current];
    if (typeof window !== 'undefined') {
        localStorage.setItem('arca_products', JSON.stringify(updated));
    }
    return updated;
};
