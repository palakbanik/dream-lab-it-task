"use client";

import { FaqItem } from "@/data/faq";
import { useState } from "react";

type DataProps = {
    data: FaqItem[];
};

export default function Accordion({ data }: DataProps) {
    const [bgAccording, setBgAccording] = useState<number | null>(null);

    const handleBgAccording = (index: number) =>
        setBgAccording((prevIndex) => (prevIndex === index ? null : index));

    return (
        <div className="mx-auto max-w-[760px] space-y-4">
            {data.map((item, i) => (
                <article
                    key={i}
                    className="rounded-xl md:rounded-2xl overflow-hidden bg-foreground/2"
                >
                    <div
                        className="flex items-center justify-between gap-6 cursor-pointer w-full p-5 sm:p-6 transition-colors min-h-[76px]"
                        onClick={() => handleBgAccording(i)}
                    >
                        <h2 className="text-foreground text-start font-semibold text-[15px] sm:text-base leading-snug select-none">
                            {item.question}
                        </h2>

                        <svg
                            className="fill-muted-foreground-secondary shrink-0"
                            width="18"
                            height="18"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <rect
                                y="8"
                                width="18"
                                height="2"
                                rx="1"
                                className={` transform origin-center transition duration-200 ease-out ${bgAccording === i ? "opacity-100" : "opacity-90"}`}
                            />
                            <rect
                                y="8"
                                width="18"
                                height="2"
                                rx="1"
                                className={`transform origin-center rotate-90 transition duration-200 ease-out ${bgAccording === i && "!rotate-180"}`}
                            />
                        </svg>
                    </div>

                    <div
                        className={`grid overflow-hidden transition-all duration-300 ease-in-out  ${bgAccording === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                        <div className="overflow-hidden">
                            <div
                                className={`${bgAccording === i ? "px-5 sm:px-6 pb-5" : "px-5 sm:px-6 pb-0"}`}
                            >
                                <div className="text-muted-foreground-primary text-xs md:text-sm leading-normal md:leading-6 text-start">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}
