import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import Paragraph from "@/components/shared/Paragraph";
import SubHeading from "@/components/shared/SubHeading";
import { beyondData } from "@/data/beyond";
import Image from "next/image";

const betyondData = [
    {
        title: "The Real Problem",
        desc: "The issue in modern institutions is not technology - it is lack of operational intelligence.",
        src: "/icons/problem.svg",
        bgGradient: "from-[#00D1FF]/50 via-[#FF09F4]/80 to-[#2D7FFF]/40",
    },
    {
        title: "Common Industry Problems",
        desc: "Digital tools without workflow change • Dashboards without governance • AI without impact • Automation without execution",
        src: "/icons/industry.svg",
        bgGradient: " from-[#00D1FF]/50 via-[#2D7FFF]/80 to-[#2D7FFF]/40",
    },
    {
        title: "Our Solution",
        desc: "Beyond Code builds structured intelligence systems that integrate directly into institutional operations.",
        src: "/icons/solution.svg",
        bgGradient: "from-[#00D1FF]/50 via-[#05E388]/90 to-[#2D7FFF]/40",
    },
];

export default function Beyond() {
    return (
        <div>
            <Container className="xl:mt-13.75">
                <div className="bg-linear-to-b from-dark-pink/5 to-accent-dark-blue/60 rounded-[20px] px-[20px] py-[30px] lg:py-[50px] lg:px-[40px] xl:py-[76px] xl:px-[106px]">
                    <Heading className="text-center">Why Beyond Code</Heading>

                    <div className="mt-10 md:mt-12 lg:mt-16 xl:mt-20 flex flex-col md:flex-row items-center justify-between gap-12">
                        {beyondData.map((item, i) => (
                            <div
                                key={i}
                                className="w-full max-w-[380px] space-y-3.5 md:space-y-5 flex flex-col items-center text-center md:text-start md:items-start"
                            >
                                <div className="w-[100px] aspect-square grid place-items-center rounded-full relative">
                                    {/* glow blur effect */}
                                    <div
                                        className={`absolute inset-0 rounded-full bg-linear-to-r ${item.bgGradient} blur-[50px] opacity-60`}
                                    />

                                    {/* white background with img icon */}
                                    <div className="bg-foreground w-full max-w-[63px] aspect-square rounded-full grid place-items-center relative z-10">
                                        <Image
                                            src={item.src}
                                            alt={item.title}
                                            width={35}
                                            height={36}
                                            draggable={false}
                                            className="z-10 w-[35px] h-[36px]"
                                        />
                                    </div>
                                </div>
                                <SubHeading>{item.title}</SubHeading>
                                <Paragraph>{item.desc}</Paragraph>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
