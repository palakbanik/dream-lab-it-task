import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import Paragraph from "@/components/shared/Paragraph";
import SubHeading from "@/components/shared/SubHeading";
import { beyondData } from "@/data/beyond";
import Image from "next/image";

export default function Beyond() {
    return (
        <div>
            <Container className="mt-6 md:mt-9 xl:mt-13.75">
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
                                            priority
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
