import Paragraph from "@/components/shared/Paragraph";
import SubHeading from "@/components/shared/SubHeading";
import React from "react";

export type TechnologyStackCardProps = {
    id: string;
    title: string;
    items: string[];
};

export default function TechnologyStackCard({
    title,
    items,
}: TechnologyStackCardProps) {
    return (
        <article className="w-[273px] h-[319px] rounded-[10px] border border-white/15 backdrop-blur-[20px] overflow-hidden shadow-[inset_3px_3px_0_-3px_rgba(0,0,0,0.50),inset_-2px_-2px_1px_-2px_rgba(179,179,179,0.55),inset_2px_2px_1px_-2px_rgba(179,179,179,0.55),inset_0_0_0_1px_rgba(153,153,153,0.32),inset_0_0_22px_0_rgba(242,242,242,0.16)] bg-foreground/13">
            <div className="h-full w-full px-[42px] pt-[32px] ">
                <SubHeading>{title}</SubHeading>

                <ul className="mt-[20px] space-y-[6px] pl-[24px] list-disc text-[13px] leading-[18px] text-white/70 marker:text-white/55">
                    {items.map((it) => (
                        <li key={it} className="">
                            <Paragraph className="lg:leading-[1.2]">{it}</Paragraph>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}
