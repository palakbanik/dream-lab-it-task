export type FaqItem = { question: string; answer: string };

export const faqData = {
    title: "Frequently Asked Questions",
    items: [
        {
            question: "Which industries do you work in?",
            answer: "We work across multiple industries including SaaS, manufacturing, logistics, and professional services—where operations can benefit from automation and intelligence.",
        },
        {
            question:
                "How can your systems different from traditional AI tools?",
            answer: "We focus on operational workflows end‑to‑end: data + process + automation + governance—so outcomes are measurable and repeatable.",
        },
        {
            question: "Can you optimize workflow with our existing tech stack?",
            answer: "Yes. We integrate with your current tools first, then recommend targeted upgrades only when necessary.",
        },
        {
            question: "How long does implementation take?",
            answer: "Typical timelines range from 2–8 weeks depending on scope, access, and integration complexity.",
        },
        {
            question: "Do you offer support & iteration after deployment?",
            answer: "Yes—monitoring, iteration, and operational training are available as ongoing packages.",
        },
    ] satisfies FaqItem[],
};
