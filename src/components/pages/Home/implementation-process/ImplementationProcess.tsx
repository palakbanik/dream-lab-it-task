import Container from "@/components/shared/Container";
import GradientCard from "@/components/shared/GradientCard";
import Heading from "@/components/shared/Heading";
import Paragraph from "@/components/shared/Paragraph";
import Button from "@/components/ui/Button";
import { servicesData } from "@/data/services-and-expertise";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

import stepOne from "@/public/number-one-icon.svg";
import stepTwo from "@/public/number-two-icon.svg";
import stepThree from "@/public/number-three-icon.svg";
import stepFour from "@/public/number-four-icon.svg";

const processCardsData = [
    {
        id: "1",
        title: "Diagnose",
        description:
            "Assess workflows, reporting\n structures, and operational\n gaps.",
        src: stepOne,
        alt: "Diagnose",
    },
    {
        id: "2",
        title: "Structure",
        description: "Design governance logic and\n system architecture.",
        src: stepTwo,
        alt: "Structure",
    },
    {
        id: "3",
        title: "Engineer",
        description: "Develop AI systems and\n intelligence infrastructure.",
        src: stepThree,
        alt: "Engineer",
    },
    {
        id: "4",
        title: "Deploy",
        description:
            "Deploy and configure systems\n within institutional\n environments.",
        src: stepFour,
        alt: "Deploy",
    },
];

export default function ImplementationProcess() {
    return (
        <section>
            <Container className="py-6 md:py-9 xl:py-13.75 2xl:py-27.5">
                <div className="space-y-[50px]">
                    <div className="flex items-center justify-between">
                        <div>
                            <Heading>Implementation Process</Heading>
                            <Paragraph className="2xl:text-xl">
                                Beyond Code follows a 4-stage deployment
                                methodology.
                            </Paragraph>
                        </div>

                        <Button icon={<FiArrowRight />}>Learn More</Button>
                    </div>

                    <div className="mt-[30px] sm:mt-[40px] xl:mt-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[10px]">
                        {processCardsData.map((processData, i) => (
                            <GradientCard
                                key={i}
                                {...processData}
                                className="pt-[50px] rounded-[5px]"
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
