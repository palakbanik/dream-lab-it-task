import systemCapability from "@/public/images/case-study-imgs/case-study-one.png";
import integrationReadiness from "@/public/images/case-study-imgs/case-study-two.png";
import operationalImpact from "@/public/images/case-study-imgs/case-study-three.png";
import automationSystem from "@/public/images/case-study-imgs/case-study-four.png";
import systemDeployment from "@/public/images/case-study-imgs/case-study-five.png";
import industryImpact from "@/public/images/case-study-imgs/case-study-six.png";
import { StaticImageData } from "next/image";

export type CaseStudyBlock =
    | { type: "paragraph"; text: string }
    | { type: "bullets"; items: string[] }
    | { type: "image"; src: string; alt: string; aspectClass?: string };

export type CaseStudySection = {
    id: string;
    label: string;
    heading?: string;
    blocks: CaseStudyBlock[];
};

export type CaseStudyItem = {
    id: string;
    title: string;
    cardTitle: string;
    cardDescription: string;

    cardImage: {
        src: StaticImageData;
        alt: string;
    };

    detailsTitle: string;
    sections: CaseStudySection[];
};

export const caseStudy: CaseStudyItem[] = [
    {
        id: "1",
        title: "System capability",
        cardTitle: "System capability",
        cardDescription:
            "Evaluates the system’s ability to deliver core intelligence functions, including data processing, automation...",
        cardImage: {
            src: systemCapability,
            alt: "System capability",
        },
        detailsTitle:
            "Transforming Operational Efficiency\nThrough Intelligent Systems",
        sections: [],
    },

    {
        id: "2",
        title: "Integration Readiness",
        cardTitle: "Integration Readiness",
        cardDescription:
            "Assesses how seamlessly the system can integrate with existing infrastructure, including ERP systems, databases...",
        cardImage: {
            src: integrationReadiness,
            alt: "Integration Readiness",
        },
        detailsTitle: "Integration Readiness\nfor Intelligent Systems",
        sections: [],
    },

    {
        id: "3",
        title: "Operational Impact",
        cardTitle: "Operational Impact",
        cardDescription:
            "Measures the system’s effectiveness in improving execution, reducing manual workload, enhancing visibility...",
        cardImage: {
            src: operationalImpact,
            alt: "Operational Impact",
        },
        detailsTitle: "Operational Impact\nThat You Can Measure",
        sections: [],
    },

    {
        id: "4",
        title: "Automation System",
        cardTitle: "Automation System",
        cardDescription:
            "Evaluates the system’s ability to deliver core intelligence functions, including data processing, automation...",
        cardImage: {
            src: automationSystem,
            alt: "Automation System",
        },
        detailsTitle: "Automation Systems\nfor Modern Operations",
        sections: [],
    },

    {
        id: "5",
        title: "System Deployment",
        cardTitle: "System Deployment",
        cardDescription:
            "Assesses how seamlessly the system can integrate with existing infrastructure, including ERP systems, databases...",
        cardImage: {
            src: systemDeployment,
            alt: "System Deployment",
        },
        detailsTitle: "System Deployment\nWithout Friction",
        sections: [],
    },

    {
        id: "6",
        title: "How Impact on Your Industry",
        cardTitle: "How Impact on Your Industry",
        cardDescription:
            "Measures the system’s effectiveness in improving execution, reducing manual workload, enhancing visibility...",
        cardImage: {
            src: industryImpact,
            alt: "Industry Impact",
        },
        detailsTitle: "Industry Impact\nAcross Workflows",
        sections: [],
    },
];
