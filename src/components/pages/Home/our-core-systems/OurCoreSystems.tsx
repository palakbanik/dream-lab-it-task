import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import Button from "@/components/ui/Button";
import { PiHeadphonesBold } from "react-icons/pi";
import CoreSystemCard from "./CoreSystemCard";
import { coreSystemsData } from "@/data/CoreSystemCardData";
import Image from "next/image";
import InstitutionalImpact from "./InstitutionalImpact";

import bgBlog from "@/public/core-systems-blobs-bg.svg";

export default function OurCoreSystems() {
    return (
        <section className="relative">
            <Image
                src={bgBlog}
                alt="blob"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none -z-10"
                draggable={false}
            />
            <Container className="py-10 md:py-15 lg:py-[80px] xl:py-[110px]">
                <div>
                    {/* heading */}
                    <div className="flex items-center justify-between">
                        <Heading>Our Core Systems</Heading>

                        <Button icon={<PiHeadphonesBold />}>
                            Book for consultation
                        </Button>
                    </div>

                    {/* content */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-5 mt-[20px] md:mt-[35px] xl:mt-[50px]">
                        {coreSystemsData.map((system, idx) => (
                            <CoreSystemCard key={idx} {...system} />
                        ))}
                    </div>

                    <div className="mt-5">
                        <InstitutionalImpact />
                    </div>
                </div>
            </Container>
        </section>
    );
}
