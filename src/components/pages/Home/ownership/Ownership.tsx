import React from "react";
import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import Paragraph from "@/components/shared/Paragraph";
import Image from "next/image";

import bgBlog from "@/public/core-systems-blobs-bg.svg";

type OwnershipCardData = {
    title: string;
    bullets: string[];
};

const cards: OwnershipCardData[] = [
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

function OwnershipCard({ title, bullets }: OwnershipCardData) {
    return (
        <article
            className="
        rounded-[12px] p-px
        bg-[linear-gradient(90deg,rgba(255,215,120,0.75)_0%,rgba(165,90,255,0.55)_48%,rgba(255,215,120,0.75)_100%)]
        shadow-[0_18px_55px_rgba(0,0,0,0.55)]
      "
        >
            <div
                className="
          h-full w-full
          rounded-[12px]
          bg-[radial-gradient(520px_circle_at_18%_8%,rgba(255,255,255,0.10),transparent_55%),linear-gradient(180deg,rgba(20,20,22,0.92)_0%,rgba(10,10,12,0.92)_100%)]
          backdrop-blur-[18px]
          px-[28px] py-[22px]
          shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_0_0_1px_rgba(255,255,255,0.06)]
        "
            >
                <h3 className="text-white text-[18px] leading-[24px] font-semibold">
                    {title}
                </h3>

                <ul className="mt-[14px] space-y-[8px] pl-[18px] list-disc text-[14px] leading-[20px] text-white/70 marker:text-white/40">
                    {bullets.map((b) => (
                        <li key={b}>{b}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

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
                <div className="space-y-[50px]">
                    {/* heading */}
                    <div className="text-center grid place-items-center gap-5">
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
                    <div className="relative">
                        <div className="grid grid-cols-1 gap-[18px] lg:grid-cols-2">
                            {cards.map((card) => (
                                <OwnershipCard
                                    key={card.title}
                                    title={card.title}
                                    bullets={card.bullets}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
