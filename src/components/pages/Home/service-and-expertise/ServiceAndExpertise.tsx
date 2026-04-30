import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import Button from "@/components/ui/Button";
import { servicesData } from "@/data/services-and-expertise";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import GradientCard from "../../../shared/GradientCard";

export default function ServiceAndExpertise() {
    return (
        <section>
            <Container>
                <div className="flex items-center justify-between">
                    <Heading>Service & Expertise</Heading>

                    <Button variant="white" icon={<FiArrowRight />}>
                        Contact Us
                    </Button>
                </div>

                <div className="mt-[30px] sm:mt-[40px] xl:mt-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[10px]">
                    {servicesData.map((service, i) => (
                        <GradientCard key={i} {...service} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
