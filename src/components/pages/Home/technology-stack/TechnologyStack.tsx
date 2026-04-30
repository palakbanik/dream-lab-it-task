import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import Paragraph from "@/components/shared/Paragraph";
import Image from "next/image";

import React from "react";

import blogBg from "@/public/technology-stack-gradient-blob-bg.svg";
import TechnologyStackCard from "../technology-stack-card/TechnologyStackCard";

export const glassTechCardsData = [
    {
        id: "ai-backend",
        tone: "teal",
        title: "AI & Backend",
        items: ["Python", "PyTorch", "Django", "Flask"],
    },
    {
        id: "data-infra",
        tone: "blue",
        title: "Data\nInfrastructure",
        items: ["MongoDB", "Elasticsearch", "Vector databases", "Redis"],
    },
    {
        id: "cloud-deploy",
        tone: "purple",
        title: "Cloud &\nDeployment",
        items: [
            "AWS",
            "Google Cloud",
            "Docker",
            "Kubernetes",
            "AWS Lambda",
            "AWS S3",
        ],
    },
];

export default function TechnologyStack() {
    return (
        <section className="bg-linear-to-t from-card-gradient-start to-card-gradient-end relative">
            <Image
                src={blogBg}
                alt="blob bg"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            />
            <Container className="py-6 md:py-9 xl:py-13.75 2xl:py-27.5">
                <div className="grid place-items-center ">
                    {/* heading */}
                    <div className="text-center grid place-items-center gap-5">
                        <Heading className="2xl:text-[42px]">
                            Technology Stack
                        </Heading>
                        <Paragraph className="2xl:text-xl max-w-[563px]">
                            Beyond Code systems are built using modern AI and
                            cloud infrastructure.
                        </Paragraph>
                    </div>

                    {/* card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 mt-10 2xl:mt-[50px]">
                        {glassTechCardsData.map((card, i) => (
                            <TechnologyStackCard key={i} {...card} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
