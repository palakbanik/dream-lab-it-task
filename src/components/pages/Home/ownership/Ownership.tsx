import React from "react";
import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import Paragraph from "@/components/shared/Paragraph";
import Image from "next/image";

import bgBlog from "@/public/core-systems-blobs-bg.svg";
import OwnershipCard from "./OwnershipCard";

export type OwnershipCardDataProps = {
    title: string;
    bullets: string[];
};

const ownershipCardData: OwnershipCardDataProps[] = [
    {
        title: "Beyond Code systems ensure:",
        bullets: [
            "Full institutional data ownership",
            "Infrastructure controlled by the entity",
            "Secure internal deployment environments",
            "Governance-aligned system architecture",
        ],
    },
    {
        title: "Beyond Code provides:",
        bullets: [
            "Intelligence software",
            "Deployment support",
            "System configuration",
            "Maintenance and updates",
        ],
    },
];

export default function Ownership() {
    return (
        <section className="relative">
            <Image
                src={bgBlog}
                alt="blob"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none -z-10"
                draggable={false}
            />
            <Container>
                <div className="space-y-[50px] w-full flex flex-col items-center justify-center">
                    {/* heading */}
                    <div className="w-full text-center grid place-items-center gap-5">
                        <Heading className="2xl:text-[42px]">
                            Security & Infrastructure Ownership
                        </Heading>
                        <Paragraph className="2xl:text-xl max-w-[563px] lg:whitespace-pre-line">
                            {
                                "Beyond Code systems are built using modern AI and\n cloud infrastructure."
                            }
                        </Paragraph>
                    </div>

                    {/* list content */}
                    <div className="w-full flex items-center justify-center gap-10">
                        {ownershipCardData.map((card) => (
                            <OwnershipCard key={card.title} card={card} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
