import Link from "next/link";
import { footerData } from "@/data/footer";
import Heading from "@/components/shared/Heading";
import Paragraph from "@/components/shared/Paragraph";
import SubHeading from "@/components/shared/SubHeading";
import Container from "@/components/shared/Container";
import CtaGradientCard from "@/components/shared/CtaGradientCard";

export default function Footer() {
    const data = footerData;

    return (
        <footer className="relative pt-[246px] bg-linear-to-b from-background via-gradient-purple-start/50 to-gradient-purple-start/85 ">
            {/* CTA */}
            <div className="w-full absolute -top-36 sm:-top-6 md:-top-10 xl:-top-30 left-0">
                <Container>
                    <CtaGradientCard
                        title={data.cta.title}
                        buttonLabel={data.cta.buttonLabel}
                        href={data.cta.href}
                        image={data.cta.image}
                    />
                </Container>
            </div>

            {/* main footer content */}
            <div className="relative overflow-hidden">
                {/* footer content */}
                <Container className="max-w-[1142px] lg:px-0">
                    <div className="pb-10 2xl:pb-[105px]">
                        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                            {/* Brand */}
                            <div className="max-w-[265px] shrink-0 space-y-3 2xl:space-y-5 ">
                                <Heading className="2xl:text-[30px] font-extrabold">
                                    {data.brand.title}
                                </Heading>
                                <Paragraph className="sm:text-sm lg:text-[16px] 2xl:leading-normal tracking-tight">
                                    {data.brand.description}
                                </Paragraph>
                            </div>

                            {/* Columns */}
                            <div className="min-w-[562px] flex flex-col md:flex-row justify-between gap-4">
                                {data.columns.map((col) => (
                                    <div
                                        key={col.title}
                                        aria-label={col.title}
                                        className="space-y-2 md:space-y-4"
                                    >
                                        <SubHeading>{col.title}</SubHeading>
                                        <ul className="space-y-1.5 md:space-y-3">
                                            {col.links.map((l) => (
                                                <li
                                                    key={l.href}
                                                    className="text-xs sm:text-sm text-muted-foreground-secondary hover:text-accent-aqua transition hover:translate-x-3"
                                                >
                                                    <Link href={l.href}>
                                                        {l.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>

                {/* border */}
                <div className="border-t border-white/10" />

                {/* copyright */}
                <Container className="max-w-[1142px] lg:px-0">
                    <div className="flex flex-col gap-3 py-4 text-xs sm:flex-row items-center sm:justify-between">
                        <div className="flex flex-wrap items-center gap-6">
                            {data.bottomLinks.map((l) => (
                                <span
                                    key={l.href}
                                    className="text-xs md:text-sm leading-none text-muted-foreground-secondary hover:text-accent-aqua hover:scale-105 transition"
                                >
                                    <Link href={l.href}>{l.label}</Link>
                                </span>
                            ))}
                        </div>

                        <p className="text-xs text-muted-foreground-secondary">
                            {data.copyright}
                        </p>
                    </div>
                </Container>
            </div>
        </footer>
    );
}
