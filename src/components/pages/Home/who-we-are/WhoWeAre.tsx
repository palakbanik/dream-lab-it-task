import Container from "@/components/shared/Container";
import { whoWeAreData } from "@/data/data";
import Image from "next/image";

export default function WhoWeAre() {
    return (
        <section id="about" className="relative py-14 sm:py-20">
            <Container>
                <div className="grid items-start gap-10 md:grid-cols-2">
                    {/* Image */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_14px_40px_rgba(0,0,0,0.55)]">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                            <Image
                                src={whoWeAreData.image.src}
                                alt={whoWeAreData.image.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 520px"
                                priority={false}
                            />
                        </div>
                    </div>

                    {/* Text */}
                    <div>
                        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                            {whoWeAreData.heading}
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-white/60">
                            {whoWeAreData.paragraph}
                        </p>

                        <h3 className="mt-8 text-lg font-semibold">
                            {whoWeAreData.missionHeading}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-white/60">
                            {whoWeAreData.missionText}
                        </p>

                        <h3 className="mt-8 text-lg font-semibold">
                            {whoWeAreData.approachHeading}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-white/60">
                            {whoWeAreData.approachIntro}
                        </p>

                        <ul className="mt-3 space-y-2 text-sm text-white/70">
                            {whoWeAreData.bullets.map((b) => (
                                <li key={b} className="flex items-start gap-2">
                                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}
