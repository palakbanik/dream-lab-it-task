import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import { whoWeAreData } from "@/data/data";
import Image from "next/image";

export default function WhoWeAre() {
    return (
        <section id="about" className="relative sm:py-12.5">
            <Container className="max-w-255">
                <div className="flex flex-col md:flex-row items-center justify-center gap-17">
                    {/* Image */}
                    <div className="w-full h-full">
                        <Image
                            src={whoWeAreData.image.src}
                            alt={whoWeAreData.image.alt}
                            width={469}
                            height={534}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Text */}
                    <div className="max-w-120 space-y-7.5">
                        <div className="space-y-5">
                            <Heading className="2xl:text-[32px]">
                                {whoWeAreData.heading}
                            </Heading>

                            <p className="leading-[1.4] text-lg text-foreground/60">
                                Beyond Code is an operational intelligence
                                company that develops{" "}
                                <span className="font-bold">
                                    AI-powered institutional systems
                                </span>{" "}
                                designed to improve execution, reporting, and
                                decision-making.
                            </p>
                        </div>

                        <div className="space-y-5">
                            <Heading className="2xl:text-[32px]">
                                {whoWeAreData.missionHeading}
                            </Heading>
                            <p className="mt-2  leading-[1.4] text-lg text-foreground/60">
                                To close the gap between{" "}
                                <span className="font-bold">
                                    AI adoption and operational
                                </span>{" "}
                                readiness by building systems that integrate
                                directly into institutional workflows.
                            </p>
                        </div>

                        <div className="space-y-5">
                            <Heading className="2xl:text-[32px]">
                                {whoWeAreData.approachHeading}
                            </Heading>
                            <div>
                                <p className="mt-2 leading-[1.4] text-lg text-foreground/60">
                                    {whoWeAreData.approachIntro}
                                </p>

                                <ul className="mt-3 space-y-1 text-lg leading-[1.4] text-foreground/70">
                                    {whoWeAreData.bullets.map((b) => (
                                        <li
                                            key={b}
                                            className="flex items-start gap-2 ml-2.5"
                                        >
                                            <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-foreground/70"></span>
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
