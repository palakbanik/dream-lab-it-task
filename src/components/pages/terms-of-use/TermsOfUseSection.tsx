import CtaGradientCard from "@/components/ui/CtaGradientCard";
import { termsOfUseData } from "@/data/terms-of-use";

function LegalBlockRenderer({
    block,
}: {
    block: import("@/data/terms-of-use").LegalBlock;
}) {
    if (block.type === "paragraph") {
        return (
            <p className="whitespace-pre-line text-xs sm:text-sm leading-6 text-muted-foreground-primary">
                {block.text}
            </p>
        );
    }

    return (
        <ul className="space-y-2 text-xs sm:text-sm leading-6 text-muted-foreground-primary">
            {block.items.map((item) => (
                <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground-secondary/80" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

export default function TermsOfUseSection() {
    const data = termsOfUseData;

    return (
        <section className="relative">
            {/* subtle glow (like screenshot vibe) */}
            <div className="pointer-events-none absolute inset-x-0 -top-16 mx-auto h-64 max-w-5xl rounded-full bg-gradient-to-r from-accent-green/0 via-accent-green/10 to-accent-green/0 blur-3xl" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-80 max-w-5xl rounded-full bg-gradient-to-r from-gradient-purple-start/10 via-accent-blue/10 to-accent-aqua/10 blur-3xl" />

            <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:py-16">
                {/* narrow center column */}
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                        {data.title}
                    </h1>

                    <p className="mt-2 text-xs text-muted-foreground-secondary">
                        {data.lastUpdated}
                    </p>

                    <div className="mt-4 space-y-2">
                        {data.introLines.map((line) => (
                            <p
                                key={line}
                                className="text-xs sm:text-sm leading-6 text-muted-foreground-primary"
                            >
                                {line}
                            </p>
                        ))}
                    </div>

                    {/* Sections */}
                    <div className="mt-8 space-y-8">
                        {data.sections.map((section) => (
                            <article
                                key={section.id}
                                id={section.id}
                                className="scroll-mt-24"
                            >
                                <h2 className="text-sm sm:text-base font-semibold text-foreground">
                                    {section.title}
                                </h2>

                                <div className="mt-3 space-y-3">
                                    {section.blocks.map((block, idx) => (
                                        <LegalBlockRenderer
                                            key={idx}
                                            block={block}
                                        />
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-14">
                        <CtaGradientCard
                            title={data.cta.title}
                            buttonLabel={data.cta.buttonLabel}
                            href={data.cta.href}
                            image={data.cta.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
