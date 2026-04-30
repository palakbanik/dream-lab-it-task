import Accordion from "@/components/shared/Accordion";
import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import { FaqItem } from "@/data/faq";
import React from "react";

export const heroFaqData: FaqItem[] = [
    {
        id: 1,
        question: "What does Beyond Code do?",
        answer: "Beyond Code designs and deploys operational intelligence systems that integrate AI, automation, and data infrastructure to improve execution, reporting, and decision-making within institutional environments.",
    },
    {
        id: 2,
        question: "How are your systems different from traditional AI tools?",
        answer: "Our systems go beyond standalone AI tools by integrating directly into operational workflows, combining automation, data pipelines, and decision support to deliver real-world impact.",
    },
    {
        id: 3,
        question: "Can your systems integrate with our existing platforms?",
        answer: "Yes, our solutions are designed to seamlessly integrate with your existing platforms, APIs, and data infrastructure without disrupting current operations.",
    },
    {
        id: 4,
        question: "How long does implementation take?",
        answer: "Implementation timelines vary depending on project scope, but most deployments are completed within a few weeks to a few months.",
    },
    {
        id: 5,
        question: "Do you offer a pilot or trial before full deployment?",
        answer: "Yes, we typically offer pilot programs or trials so clients can evaluate performance and impact before committing to full deployment.",
    },
    {
        id: 6,
        question: "How secure are your systems?",
        answer: "We follow industry best practices for security, including data encryption, access controls, and compliance with relevant standards to ensure your systems remain secure.",
    },
    {
        id: 7,
        question: "Will we retain ownership of our data and systems?",
        answer: "Yes, clients retain full ownership of their data and systems. We ensure transparency and control throughout the engagement.",
    },
    {
        id: 8,
        question: "What kind of results can we expect?",
        answer: "Clients typically see improvements in efficiency, faster decision-making, better reporting accuracy, and measurable operational impact.",
    },
];

export default function HeroFAQSection() {
    return (
        <section className="mt-[80px] md:mt-[120px] xl:mt-[160px]">
            <Container className="mx-auto w-full max-w-5xl px-4 text-center space-y-5 md:space-y-7">
                <Heading>Frequently Asked Questions</Heading>
                {/* accordion */}
                <Accordion data={heroFaqData} />
            </Container>
        </section>
    );
}
