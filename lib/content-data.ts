
import { Cpu, Layers, Zap, Database, TrendingUp, Shield, Smartphone, Globe, DollarSign, Workflow, Bot, Lock } from "lucide-react";

export const blogs = [
    {
        id: "zero-employee-model",
        title: "The $0 Employee: How n8n Workflows Replace Mid-Level Managers",
        excerpt: "Why hire a project manager for $60k/year when a workflow can do it for $0.05/run?",
        content: "Traditional scaling requires headcount. Modern scaling requires logic...",
        category: "Automation Economics",
        keywords: ["n8n automation", "operational efficiency", "digital workforce", "lean business models"],
        readTime: "4 min",
        date: "OCT 12, 2025"
    },
    {
        id: "integration-hell",
        title: "Integration Hell: Why Your Apps Don't Talk (And How to Fix It)",
        excerpt: "APIs are the new language of business. If your CRM isn't talking to your Ad Manager, you are losing money every second.",
        content: "Your data is trapped in silos. Here is the blueprint to break the walls...",
        category: "System Architecture",
        keywords: ["API integration", "CRM automation", "data silos", "webhook orchestration"],
        readTime: "6 min",
        date: "OCT 15, 2025"
    },
    {
        id: "scale-without-hiring",
        title: "Scale to $1M Without Hiring: The Solo-Empire Blueprint",
        excerpt: "The old model: More Revenue = More People. The new model: More Revenue = Better Code.",
        content: "Validation, Systemization, Automation. The three pillars of the solo unicorn...",
        category: "Strategy",
        keywords: ["solo founder", "scaling automation", "business systems", "fractional CTO"],
        readTime: "5 min",
        date: "OCT 20, 2025"
    },
    {
        id: "virtual-assistant-trap",
        title: "Why Your Virtual Assistant is Slowing You Down: The Case for Code",
        excerpt: "Humans sleep, forget, and make errors. Code runs 24/7/365 with 99.9% reliability.",
        content: "VAs are a band-aid. Automation is the cure. Stop managing people, start managing logic...",
        category: "Human Resources",
        keywords: ["VA vs Automation", "process optimization", "human error reduction"],
        readTime: "3 min",
        date: "NOV 01, 2025"
    },
    {
        id: "clientless-agency",
        title: "The Dark Art of Clientless Agencies: How We Operate",
        excerpt: "We realized that selling services is a trap. Building assets is freedom. Here is how we pivoted.",
        content: "Service revenue is linear. Asset revenue is exponential...",
        category: "Agency Philosophy",
        keywords: ["productized service", "assets vs services", "agency scaling"],
        readTime: "7 min",
        date: "NOV 05, 2025"
    },
    {
        id: "recovering-founder-time",
        title: "Automating the Boring: Recovering 20 Hours of Founder Time Per Week",
        excerpt: "What could you build if you weren't invoicing, scheduling, or following up? Let's do the math.",
        content: "Your time is worth $500/hr. Why are you doing $10/hr work?",
        category: "Productivity",
        keywords: ["founder productivity", "time reclamation", "automated scheduling"],
        readTime: "4 min",
        date: "NOV 10, 2025"
    },
    {
        id: "crm-chaos-cleanup",
        title: "CRM Chaos to Cash Flow: A Database Cleanup Protocol",
        excerpt: "Your data is dirty, and it's costing you leads. Here is the automated protocol for pristine logic.",
        content: "Garbage in, garbage out. Cleaning your CRM is the highest ROI activity you can do today...",
        category: "Data Hygiene",
        keywords: ["database management", "CRM cleanup", "lead scoring automation"],
        readTime: "5 min",
        date: "NOV 12, 2025"
    },
    {
        id: "digital-moats",
        title: "From Freelancer to Fortress: Building Digital Moats",
        excerpt: "Proprietary workflows are the intellectual property of the next decade. Protect your logic.",
        content: "Anyone can copy your service. No one can copy your system...",
        category: "Strategy",
        keywords: ["IP protection", "digital moats", "proprietary algorithms"],
        readTime: "6 min",
        date: "NOV 18, 2025"
    },
    {
        id: "passive-income-truth",
        title: "The Truth About Passive Income: It Requires Active Architecture",
        excerpt: "There is no such thing as free money. But there is such thing as a machine that prints it once you build it.",
        content: "Passive income is a lie. Automated income is the truth...",
        category: "Wealth Architecture",
        keywords: ["passive income systems", "automated revenue", "ecommerce automation"],
        readTime: "4 min",
        date: "NOV 22, 2025"
    },
    {
        id: "human-error-standard",
        title: "AI vs. Human Error: The 99.9% Reliability Standard",
        excerpt: "We don't accept 'I clicked the wrong button'. Neither should you.",
        content: "To err is human. To execute perfectly is machine...",
        category: "Quality Assurance",
        keywords: ["quality control", "AI reliability", "process standardization"],
        readTime: "3 min",
        date: "NOV 25, 2025"
    }
];

export const platformLogos = [
    { name: "n8n", icon: Zap },
    { name: "OpenAI", icon: Bot },
    { name: "Shopify", icon: Smartphone },
    { name: "Stripe", icon: DollarSign },
    { name: "Wordpress", icon: Globe },
    { name: "Slack", icon: Layers },
    { name: "Airtable", icon: Database },
    { name: "Supabase", icon: Database },
    { name: "Google Cloud", icon: Globe },
    { name: "AWS", icon: Cpu }
];

export const services = [
    {
        id: "marketing-systems",
        title: "MARKETING SYSTEMS",
        description: "Autonomous lead generation and nurturing engines.",
        longDescription: "We build self-driving marketing machines. From cold outreach to warm lead handoff, every step is orchestrated by logic, not luck.",
        icon: TrendingUp,
        features: ["Multi-Channel Outreach", "Automated Content Schedulers", "Lead Scoring Logic", "CRM Sync"],
        videoPlaceholder: "marketing-grid-animation"
    },
    {
        id: "infrastructure-mgt",
        title: "INFRASTRUCTURE MGT",
        description: "Hosting, security, and uptime for your digital empire.",
        longDescription: "Your business needs a fortress. We provide the servers, the security, and the redundancy to ensure you never sleep with one eye open.",
        icon: Database,
        features: ["99.9% Uptime Hosting", "Auto-Healing Servers", "DDoS Protection", "Automated Backups"],
        videoPlaceholder: "server-rack-animation"
    },
    {
        id: "integration-matrix",
        title: "INTEGRATION MATRIX",
        description: "Connecting your fragmented stack into a unified brain.",
        longDescription: "Stop copying and pasting. We weave your disparate tools into a single, cohesive neural network for your business.",
        icon: Layers,
        features: ["Custom API Webhooks", "Legacy System Bridging", "Data Synchronization", "Error Handling"],
        videoPlaceholder: "neural-network-animation"
    },
    {
        id: "creative-intelligence",
        title: "CREATIVE INTELLIGENCE",
        description: "AI-generated visuals curated by human design principles.",
        longDescription: "Scale your creative output by 100x. AI generates the assets; our systems deploy them where they matter most.",
        icon: Zap,
        features: ["Programmatic SEO Pages", "Dynamic Video Generation", "Brand Asset Management", "Social Auto-Posting"],
        videoPlaceholder: "creative-burst-animation"
    }
];

export const footerLinks = {
    solutions: [
        { name: "Business Systems", href: "/services#marketing-systems" },
        { name: "Workflow Orchestration", href: "/services#integration-matrix" },
        { name: "Infrastructure", href: "/services#infrastructure-mgt" },
        { name: "AI Labor", href: "/services#creative-intelligence" }
    ],
    company: [
        { name: "Manifesto", href: "/#about" },
        { name: "The Vault", href: "/vault" },
        { name: "Store", href: "/store" },
        { name: "Contact", href: "/#contact" }
    ],
    resources: [
        { name: "Blog", href: "/blog" },
        { name: "Documentation", href: "/docs" },
        { name: "Status", href: "/status" }
    ]
};
