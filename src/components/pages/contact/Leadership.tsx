import Image from "next/image";
import { leadershipData } from "@/data/leadership";
import Heading from "@/components/shared/Heading";
import Paragraph from "@/components/shared/Paragraph";
import Container from "@/components/shared/Container";
import SubHeading from "@/components/shared/SubHeading";

export default function Leadership() {
    const { description, leaders } = leadershipData;

    return (
        <section className="mt-[60px] md:mt-[80px] lg:mt-[110px]">
            <Container className="relative">
                {/* blobs */}
                <div className="w-[300px] md:w-[418px] aspect-square bg-accent-green/30 blur-[100px] rounded-full absolute -bottom-1/3 xl:left-26 -z-10 pointer-events-none" />
                <div className="w-[300px] md:w-[418px] aspect-square bg-accent-light-blue/40 blur-[100px] rounded-full absolute -bottom-2/4 -left-10 -z-10 pointer-events-none" />

                {/* main content */}
                <div className="flex flex-col lg:flex-row justify-between lg:px-10 space-y-8 items-center sm:items-start">
                    <div className="space-y-2 lg:space-y-5 max-w-[372px]">
                        <Heading className="mt-4 xl:mt-[30px]  text-2xl 2xl:text-[42px] font-semibold leading-snug xl:leading-[1.2]">
                            Leadership
                        </Heading>
                        <Paragraph className="whitespace-pre-line">
                            {description}
                        </Paragraph>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {leaders.map((p) => (
                            <div
                                key={p.name}
                                className="max-w-[256px] space-y-[28px]"
                            >
                                <div className="relative xl:w-[256px] h-[303px] overflow-hidden">
                                    <Image
                                        src={p.imageSrc}
                                        alt={p.name}
                                        fill
                                        sizes="(max-width: 1280px) 100vw, 256px"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <SubHeading className="font-bold lg:text-xl">
                                        {p.name}
                                    </SubHeading>
                                    <Paragraph className="whitespace-pre-wrap">
                                        {p.role}
                                    </Paragraph>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
