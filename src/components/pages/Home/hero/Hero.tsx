// IMPORTANT: আপনার Button component এর আসল path দিন
import Container from "@/components/shared/Container";
import FeatureCard from "@/components/shared/FeatureCard";
import Button from "@/components/ui/Button";
import { featureData, heroData } from "@/data/data";
import { FaArrowRight, FaCheck } from "react-icons/fa";

export default function Hero() {
    return (
        <section
            style={{
                backgroundImage: 'url("/home-hero-bg.svg")',
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
            }}
            className="relative min-h-screen overflow-hidden"
        >
            {/* background blob */}
            <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-256.5 h-162 bg-accent-pink/50 rounded-full blur-[200px] -z-10 pointer-events-none" />
            <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-391 h-162 bg-accent-light-blue/30 rounded-full blur-[150px] -z-11 pointer-events-none" />

            <Container className="relative pt-18 sm:pt-24 2xl:pt-56.25 2xl:pb-20">
                {/* text and btn  */}
                <div className="mx-auto max-w-240 text-center relative">
                    {/* circle blob */}
                    <div className="w-15.75 h-15.75 bg-linear-to-tl from-custom-black to-purple-800/90 rounded-full flex items-center justify-center mx-auto mt-7.5 absolute -right-6 bottom-40 pointer-events-none -z-10" />
                    <div className="w-11.25 h-11.25 bg-linear-to-tl from-custom-black to-accent-yellow/50 rounded-full flex items-center justify-center mx-auto mt-7.5 absolute left-0 bottom-8 pointer-events-none -z-10" />

                    {/* text content */}
                    <h1 className="text-[34px] sm:text-[52px] 2xl:text-[70px] font-bold leading-[1.2] tracking-[-0.01px]">
                        Operational{" "}
                        <span className="bg-linear-to-r from-pink-400 to-accent-pink bg-clip-text text-transparent">
                            Intelligence
                        </span>{" "}
                        and{" "}
                        <span className="bg-linear-to-r from-accent-yellow to-accent-pink bg-clip-text text-transparent">
                            AI Systems
                        </span>{" "}
                        for Institutional Environments
                    </h1>

                    <p className="mx-auto mt-7.5 max-w-224.5 leading-[1.6] tracking-normal text-muted-foreground-primary font-normal text-sm sm:text-base lg:text-lg">
                        {heroData.description}
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a href={"/"}>
                            <Button icon={<FaCheck />} className="py-1.5">
                                {heroData.ctas.primary.text}
                            </Button>
                        </a>

                        <a href={"/systems"}>
                            <Button
                                icon={<FaArrowRight />}
                                className="py-1.5"
                                variant="white"
                            >
                                {heroData.ctas.secondary.text}
                            </Button>
                        </a>
                    </div>
                </div>

                <div className="2xl:mt-32 flex flex-col md:flex-row items-center justify-center gap-6">
                    {featureData.map((feature, i) => (
                        <FeatureCard key={i}>{feature.title}</FeatureCard>
                    ))}
                </div>
            </Container>
        </section>
    );
}
