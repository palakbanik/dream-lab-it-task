"use client";
import Heading from "@/components/shared/Heading";
import { faqData } from "@/data/faq";
import { useState } from "react";

export default function FaqSection() {
    const { items } = faqData;
    const [bgAccording, setBgAccording] = useState(null);

    const handleBgAccording = (index) =>
        setBgAccording((prevIndex) => (prevIndex === index ? null : index));

    return (
        <section className="xl:mt-[160px]">
            <div className="mx-auto w-full max-w-5xl px-4 text-center">
                <Heading>Frequently Asked Questions</Heading>

                <div className="mx-auto mt-7 max-w-3xl space-y-3">
                    {items.map((it, i) => (
                        <article
                            key={i}
                            className="bg-[#e5eaf2] dark:bg-transparent rounded"
                        >
                            <div
                                className={`${it === i ? "rounded-t-sm" : "rounded"} flex gap-2 cursor-pointer items-center justify-between dark:bg-slate-800 w-full bg-gray-700 p-3`}
                                onClick={() => handleBgAccording(i)}
                            >
                                <h2
                                    className={`dark:text-[#abc2d3] text-white font-[600] text-[1.2rem]`}
                                >
                                    {it.question}
                                </h2>
                                <svg
                                    className="dark:fill-[#abc2d3] fill-[#ffffff] shrink-0 ml-8"
                                    width="16"
                                    height="16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        y="7"
                                        width="16"
                                        height="2"
                                        rx="1"
                                        className={`transform origin-center transition duration-200 ease-out ${
                                            bgAccording === i && "!rotate-180"
                                        }`}
                                    />
                                    <rect
                                        y="7"
                                        width="16"
                                        height="2"
                                        rx="1"
                                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                                            bgAccording === i && "!rotate-180"
                                        }`}
                                    />
                                </svg>
                            </div>
                            <div
                                className={`grid transition-all duration-300 dark:bg-slate-900 overflow-hidden ease-in-out bg-gray-100 ${
                                    bgAccording === i
                                        ? "grid-rows-[1fr] opacity-100 px-3 py-3"
                                        : "grid-rows-[0fr] opacity-0 px-3"
                                }`}
                            >
                                <div className="text-[#424242] dark:text-[#abc2d3] text-[0.9rem] overflow-hidden">
                                    {it.answer}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
