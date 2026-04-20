export type FaqItem = { id: number; question: string; answer: string };

export const faqData: FaqItem[] = [
    {
        id: 1,
        question: "What does Beyond Code do?",
        answer: "Beyond Code designs and deploys operational intelligence systems that integrate AI, automation, and data infrastructure to improve execution, reporting, and decision-making within institutional environments.",
    },
    {
        id: 2,
        question: "How are your systems different from traditional AI tools?",
        answer: "We focus on end-to-end operational workflows (data + process + automation + governance), ensuring measurable outcomes rather than isolated AI features.",
    },
    {
        id: 3,
        question: "Can your systems integrate with our existing platforms?",
        answer: "Yes. We integrate with your current stack first (ERP/CRM/data tools), then recommend upgrades only if required for performance, security, or scale.",
    },
    {
        id: 4,
        question: "How long does implementation take?",
        answer: "Most implementations take 2–8 weeks depending on scope, integrations, and data readiness.",
    },
    {
        id: 5,
        question: "Do you offer a pilot or trial before full deployment?",
        answer: "Yes. We can run a scoped pilot to validate ROI, feasibility, and integration approach before a full rollout.",
    },
    {
        id: 6,
        question: "How secure are your systems?",
        answer: "Security is designed-in: least-privilege access, auditability, secure integrations, and governance aligned to your organizational policies.",
    },
    {
        id: 7,
        question: "Will we retain ownership of our data and systems?",
        answer: "Yes. You retain ownership of your data. We design solutions with clear boundaries, access control, and portability considerations.",
    },
    {
        id: 8,
        question: "What kind of results can we expect?",
        answer: "Typical outcomes include reduced manual workload, faster execution cycles, improved reporting clarity, and better exception handling through visibility and automation.",
    },
];
