import { StaticImageData } from "next/image";

import serviceOne from "@/public/icons/service-icon-one.svg";
import serviceTwo from "@/public/icons/service-icon-two.svg";
import serviceThree from "@/public/icons/service-icon-three.svg";
import serviceFour from "@/public/icons/service-icon-four.svg";

export type ServicesDataProps = {
    id: string;
    src: StaticImageData;
    alt: string;
    title: string;
    description: string;
};

export const servicesData: ServicesDataProps[] = [
    {
        id: "intelligence",
        src: serviceOne,
        alt: "predictive",
        title: "Intelligence &\nPredictive Systems",
        description:
            "Powered by LLM and machine learning systems, predictive analytics, and organizational knowledge intelligence.",
    },
    {
        id: "operational",
        src: serviceTwo,
        alt: "operational",
        title: "Operational\nIntelligence Systems",
        description:
            "From real-time monitoring to intelligent dashboards and operational data insights - built for complete operational control.",
    },
    {
        id: "automation",
        src: serviceThree,
        alt: "automation",
        title: "Automation\nSystems",
        description:
            "From automated reporting to workflow automation and AI-powered assistants — built to streamline and scale operations.",
    },
    {
        id: "custom",
        src: serviceFour,
        alt: "custom",
        title: "Custom Intelligence\nDevelopment",
        description:
            "Agentic AI systems, autonomous operational intelligence platforms, and custom enterprise system development.",
    },
];
