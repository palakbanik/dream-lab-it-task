import Link from "next/link";
import { footerData } from "@/data/footer";
import CtaGradientCard from "@/components/ui/CtaGradientCard";
import { cn } from "@/lib/cn";

type Props = {
    className?: string;
    showCta?: boolean; // যদি page section এ CTA already থাকে, false করুন
};

export default function Footer({ className, showCta = true }: Props) {
    const data = footerData;

    return (
        <footer className={cn("relative", className)}>
            {/* CTA sits above footer like screenshot */}
            {showCta && (
                <div className="relative z-10">
                    <div className="mx-auto max-w-6xl px-4">
                        <div className="-mb-10 sm:-mb-12 md:-mb-14">
                            <CtaGradientCard
                                className={cn(
                                    "mx-auto max-w-5xl",
                                    "shadow-[0_40px_90px_rgba(0,0,0,0.6)]",
                                )}
                                title={data.cta.title}
                                buttonLabel={data.cta.buttonLabel}
                                href={data.cta.href}
                                image={data.cta.image}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Main purple footer area */}
            <div className="relative overflow-hidden">
                {/* Background gradient like screenshot */}
                <div
                    className={cn(
                        "absolute inset-0",
                        "bg-gradient-to-b from-custom-black via-gradient-purple-end/35 to-gradient-purple-start/85",
                    )}
                />
                {/* subtle color glows */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_380px_at_18%_0%,rgba(255,9,244,0.18),transparent_55%),radial-gradient(800px_360px_at_85%_15%,rgba(0,209,255,0.18),transparent_55%),radial-gradient(900px_420px_at_50%_110%,rgba(86,30,171,0.28),transparent_60%)]" />

                <div className="relative">
                    <div className="mx-auto max-w-6xl px-4">
                        {/* padding-top increases if CTA is shown */}
                        <div
                            className={cn(
                                showCta ? "pt-20 sm:pt-24" : "pt-14",
                                "pb-10 sm:pb-12",
                            )}
                        >
                            <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:gap-8">
                                {/* Brand */}
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                                        {data.brand.title}
                                    </h3>
                                    <p className="mt-4 whitespace-pre-line text-sm leading-6 text-muted-foreground-secondary">
                                        {data.brand.description}
                                    </p>
                                </div>

                                {/* Columns */}
                                {data.columns.map((col) => (
                                    <nav
                                        key={col.title}
                                        aria-label={col.title}
                                        className="md:justify-self-end md:w-full"
                                    >
                                        <h4 className="text-sm font-semibold text-foreground">
                                            {col.title}
                                        </h4>
                                        <ul className="mt-4 space-y-3">
                                            {col.links.map((l) => (
                                                <li key={l.href}>
                                                    <Link
                                                        href={l.href}
                                                        className="text-sm text-muted-foreground-secondary hover:text-foreground transition"
                                                    >
                                                        {l.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar (separate strip like screenshot) */}
                    <div className="border-t border-white/10 bg-gradient-to-b from-gradient-purple-start/80 to-gradient-purple-start/90">
                        <div className="mx-auto max-w-6xl px-4">
                            <div className="flex flex-col gap-3 py-4 text-xs text-muted-foreground-secondary sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex flex-wrap items-center gap-6">
                                    {data.bottomLinks.map((l) => (
                                        <Link
                                            key={l.href}
                                            href={l.href}
                                            className="hover:text-foreground transition"
                                        >
                                            {l.label}
                                        </Link>
                                    ))}
                                </div>

                                <p className="text-xs">{data.copyright}</p>
                            </div>
                        </div>
                    </div>
                    {/* /Bottom bar */}
                </div>
            </div>
        </footer>
    );
}
