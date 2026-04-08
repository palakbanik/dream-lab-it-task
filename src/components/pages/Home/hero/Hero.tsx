// IMPORTANT: আপনার Button component এর আসল path দিন
import Container from "@/components/shared/Container";
import FeatureCard from "@/components/shared/FeatureCard";
import Button from "@/components/ui/Button";
import { featureData, heroData } from "@/data/data";
import { FaCheck } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">

                {/* Right big orb */}
                {/* <div className="absolute -right-[240px] top-[90px] h-[560px] w-[560px] rounded-full border border-[#B300FF]/40 bg-gradient-to-br from-[#B300FF]/15 via-transparent to-[#FF2BD6]/10" />
                <div className="absolute -right-[290px] top-[45px] h-[660px] w-[660px] rounded-full bg-[#B300FF]/10 blur-[60px]" /> */}

                {/* Floating dots */}
                {/* <div className="absolute left-[12%] top-[310px] h-3 w-3 rounded-full bg-[#FFD24A]/60" />
                <div className="absolute left-[75%] top-[270px] h-4 w-4 rounded-full bg-[#B300FF]/70" />
                <div className="absolute left-[58%] top-[410px] h-2.5 w-2.5 rounded-full bg-white/20" /> */}
            </div>

            <Container className="relative pt-[72px] sm:pt-[96px] 2xl:pt-[225px]">
                <div className="mx-auto max-w-[860px] text-center">
                    <h1 className="text-balance text-[34px] font-semibold leading-[1.08] tracking-tight sm:text-[52px]">
                        <span className="text-white">{heroData.title.a} </span>
                        <span className="bg-gradient-to-r from-[#FF2BD6] to-[#B300FF] bg-clip-text text-transparent">
                            {heroData.title.emphasis}
                        </span>{" "}
                        <span className="text-white">{heroData.title.b} </span>
                        <span className="bg-gradient-to-r from-[#FFD24A] to-white bg-clip-text text-transparent">
                            {heroData.title.highlight}
                        </span>{" "}
                        <span className="text-white">{heroData.title.c}</span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-[650px] text-sm leading-6 text-white/55 sm:text-[13px]">
                        {heroData.description}
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a href={heroData.ctas.primary.href}>
                            <Button
                                text={heroData.ctas.primary.text}
                                icon={<FaCheck />}
                                className="py-1.5"
                            />
                        </a>

                        <a href={heroData.ctas.secondary.href}>
                            <Button
                                text={heroData.ctas.secondary.text}
                                icon={<FaCheck />}
                                className="py-1.5"
                            />
                        </a>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {featureData.map((f, idx) => (
                            <FeatureCard key={idx} title={f.title} />
                        ))}
                    </div>
                </div>
            </Container>

            <div className="h-10 sm:h-16" />
        </section>
    );
}
