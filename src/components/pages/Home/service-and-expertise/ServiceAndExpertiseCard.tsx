import React from "react";
import Image from "next/image";
import { ServicesDataProps } from "@/data/services-and-expertise";
import SubHeading from "@/components/shared/SubHeading";
import Paragraph from "@/components/shared/Paragraph";

export default function ServiceAndExpertiseCard({
    title,
    description,
    src,
    alt,
}: ServicesDataProps) {
    return (
        <article className="">
            <div className="w-full min-w-[333px] min-h-[361px] rounded-[14px] px-[25px] pt-[20px] pb-[60px] rounded-[14px] p-px bg-linear-to-b from-card-gradient-start to-card-gradient-end overflow-hidden">
                <Image src={src} alt={alt} />

                <div className="space-y-5 mt-[34px] max-w-[308px]">
                    <SubHeading className="whitespace-pre-line">
                        {title}
                    </SubHeading>
                    <Paragraph>{description}</Paragraph>
                </div>
            </div>
        </article>
    );
}
