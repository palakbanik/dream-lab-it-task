import Link from "next/link";
import { footerData } from "@/data/footer";
import CtaGradientCard from "@/components/ui/CtaGradientCard";
import { cn } from "@/lib/cn";
import Heading from "@/components/shared/Heading";
import Paragraph from "@/components/shared/Paragraph";
import SubHeading from "@/components/shared/SubHeading";
import Container from "@/components/shared/Container";

type Props = {
    className?: string;
    showCta?: boolean; // যদি page section এ CTA already থাকে, false করুন
};

export default function Footer({ className, showCta = true }: Props) {
    const data = footerData;

    return (
        <footer className="relative pt-[246px] bg-linear-to-b from-background via-gradient-purple-start/50 to-gradient-purple-start/85 ">
            {/* CTA */}
            <div className="w-full absolute -top-30 left-0">
                <CtaGradientCard
                    className={cn("mx-auto max-w-5xl")}
                    title={data.cta.title}
                    buttonLabel={data.cta.buttonLabel}
                    href={data.cta.href}
                    image={data.cta.image}
                />
            </div>

            {/* main footer content */}
            <div className="relative overflow-hidden">
                {/* footer content */}
                <Container className="max-w-[1142px]">
                    <div className=" 2xl:pb-[105px]">
                        <div className="flex items-start justify-between">
                            {/* Brand */}
                            <div className="max-w-[265px] 2xl:space-y-5 ">
                                <Heading className="2xl:text-[30px] font-extrabold">
                                    {data.brand.title}
                                </Heading>
                                <Paragraph className="text-[15px] 2xl:leading-[1.5] tracking-tight">
                                    {data.brand.description}
                                </Paragraph>
                            </div>

                            {/* Columns */}
                            <div className="min-w-[562px] flex justify-between">
                                {data.columns.map((col) => (
                                    <div
                                        key={col.title}
                                        aria-label={col.title}
                                        className="space-y-4"
                                    >
                                        <SubHeading>{col.title}</SubHeading>
                                        <ul className="space-y-3">
                                            {col.links.map((l) => (
                                                <li
                                                    key={l.href}
                                                    className="text-sm text-muted-foreground-secondary hover:text-accent-aqua transition hover:translate-x-3"
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
                <Container className="max-w-[1142px]">
                    <div className="flex flex-col gap-3 py-4 text-xs sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-wrap items-center gap-6">
                            {data.bottomLinks.map((l) => (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    className="text-sm leading-none text-muted-foreground-secondary hover:text-accent-aqua hover:scale-105 transition"
                                >
                                    {l.label}
                                </Link>
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
