import { PiArrowRightBold, PiHeadphonesBold } from "react-icons/pi";
import { FaCheck } from "react-icons/fa";

// export type Feature = {
//     title: string;
//     icon: IconType;
// };

export const heroData = {
    title: {
        a: "Operational",
        emphasis: "Intelligence",
        b: "and",
        highlight: "AI Systems",
        c: "for Institutional Environments",
    },
    description:
        "Enhancing execution, reporting, and decision-making through structured intelligence systems - delivering clarity, control, and measurable operational impact.",
    ctas: {
        primary: {
            text: "Request a Consultation",
            icon: PiHeadphonesBold,
            href: "/contact",
        },
        secondary: {
            text: "Explore Our Systems",
            icon: PiArrowRightBold,
            href: "/systems",
        },
    },
};

export const featureData = [
    { title: "Reduce preparation\ntime by up to 70%" },
    { title: "Reduce manual\nreporting by 85%" },
    { title: "Enable real-time\noperational intelligence" },
];

export const whoWeAreData = {
    image: {
        src: "/images/robot-hand.jpg",
        alt: "Robotic hand holding a green sphere",
    },
    heading: "Who We Are",
    paragraph:
        "Beyond Code is an operational intelligence company that develops AI-powered institutional systems designed to improve execution, reporting, and decision-making.",
    missionHeading: "Our Mission",
    missionText:
        "To close the gap between AI adoption and operational readiness by building systems that integrate directly into institutional workflows.",
    approachHeading: "Our Approach",
    approachIntro: "Systems are designed to align with:",
    bullets: [
        "Institutional governance structures",
        "Existing operational workflows",
        "Reporting frameworks",
        "Infrastructure environments",
    ],
};
