
export const processes = [
    {
        step: 1,
        title: "INITIATION",
        description: "You schedule a discovery call. We analyze compatibility.",
        action: "CALENDLY_LINK", // Placeholder
    },
    {
        step: 2,
        title: "DIAGNOSIS",
        description: "We dissect your workflow pains. We don't sell; we listen.",
        action: null
    },
    {
        step: 3,
        title: "INTELLIGENCE",
        description: "Our team spends 48h analyzing feasibility and architecture.",
        action: null
    },
    {
        step: 4,
        title: "VALUATION",
        description: "The Second Meeting. We present the Blueprint.",
        details: "Requires $20 (500 INR) consultation fee. This filters for serious intent and ensures we deliver a distinct, valuable roadmap regardless of whether you hire us.",
        action: "PAYMENT_GATEWAY"
    },
    {
        step: 5,
        title: "EXECUTION",
        description: "Production begins. 30% Advance required.",
        action: null
    },
    {
        step: 6,
        title: "DEPLOYMENT",
        description: "System handover, training, and recurring maintenance setup.",
        action: null
    }
];

export const trustQuestions = [
    {
        q: "Why don't you have public clients listed?",
        a: "Our clients operate in stealth. We sign NDAs before we write a single line of code. We believe in privacy, not vanity metrics."
    },
    {
        q: "Will this actually save me time?",
        a: "If it doesn't, we refund the development cost. We automate to replace human inefficiency, not to add software bloat."
    },
    {
        q: "Is 500 INR for a meeting necessary?",
        a: "It separates the curious from the committed. You receive a fully architected implementation plan worth 10x that amount, yours to keep."
    }
];

export const faqs = [
    {
        question: "Is this for my business?",
        answer: "If you value time over control, yes. If you want to micro-manage every pixel, no. We build machines that run themselves."
    },
    {
        question: "How fast is implementation?",
        answer: "Standard protocols are deployed in 48 hours. Custom architectures take 14-21 days. We move at the speed of code, not bureaucracy."
    },
    {
        question: "What if it breaks?",
        answer: "Our systems are self-healing. But on the rare occasion potential falls short of kinetic reality, our support team is on standby 24/7."
    },
    {
        question: "Do you offer refunds?",
        answer: "We offer results. If the system doesn't perform as specified, we iterate until it does."
    }
];
