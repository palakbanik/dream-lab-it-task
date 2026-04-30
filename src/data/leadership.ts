import { StaticImageData } from "next/image";
import leaderOneImage from "@/public/images/leaders/leader-one.jpg";
import leaderTwoImage from "@/public/images/leaders/leader-two.jpg";
import leaderThreeImage from "@/public/images/leaders/leader-three.jpg";

export type Leader = {
    name: string;
    role: string;
    imageSrc: StaticImageData;
};

export const leadershipData = {
    title: "Leadership",
    description:
        "Leadership is a deeply human process that empowers people and systems through clarity, alignment, and exceptional execution.\n\nThe team focuses on building operational intelligence by leveraging intelligent systems and real-world implementation.",
    leaders: [
        {
            name: "Reem Aljeali",
            role: "Director, Operations\n\nOperational Intelligence and Systems Strategist",
            imageSrc: leaderOneImage,
        },
        {
            name: "Mohammed Alyfatai",
            role: "Head of Strategy\n\nIntelligent Systems and AI Infrastructure Architect",
            imageSrc: leaderTwoImage,
        },
        {
            name: "Yasir Arafat",
            role: "Technology Advisor\n\nIntelligent Systems and AI Infrastructure Architect",
            imageSrc: leaderThreeImage,
        },
    ] satisfies Leader[],
};
