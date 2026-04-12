import Image from "next/image";
import type { CaseStudyBlock, CaseStudyItem } from "@/data/case-study";
import { cn } from "@/lib/cn";

function Block({ block }: { block: CaseStudyBlock }) {
    if (block.type === "paragraph") {
        return (
            <p className="text-sm leading-6 text-muted-foreground-primary">
                {block.text}
            </p>
        );
    }

    if (block.type === "bullets") {
        return (
            <ul className="mt-2 space-y-2 text-sm leading-6 text-muted-foreground-primary">
                {block.items.map((t) => (
                    <li key={t} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-pink" />
                        <span>{t}</span>
                    </li>
                ))}
            </ul>
        );
    }

    // image
    return (
        <div
            className={cn(
                "relative w-full overflow-hidden rounded-2xl",
                "border border-border/60 bg-white/5",
                block.aspectClass ?? "aspect-[16/9]",
            )}
        >
            <Image
                src={block.src}
                alt={block.alt}
                fill
                className="object-cover"
                sizes="100vw"
            />
        </div>
    );
}

export default function CaseStudyDetails({ item }: { item: CaseStudyItem }) {
    return (
        <section className="py-12">
            <div className="mx-auto max-w-3xl px-4">
                <h1 className="text-center whitespace-pre-line text-2xl sm:text-3xl font-semibold leading-tight">
                    {item.detailsTitle}
                </h1>

                {/* Top pill nav */}
                <div className="mt-6 flex justify-center">
                    <div
                        className={cn(
                            "max-w-full overflow-x-auto",
                            "rounded-full border border-border/60 bg-white/5 px-2 py-2",
                        )}
                    >
                        <div className="flex items-center gap-2 px-1">
                            {item.sections.map((s) => (
                                <a
                                    key={s.id}
                                    href={`#${s.id}`}
                                    className={cn(
                                        "shrink-0 rounded-full px-3 py-1 text-xs",
                                        "border border-border/60 bg-custom-black/30 text-muted-foreground-secondary",
                                        "hover:bg-white/10 hover:text-foreground transition",
                                    )}
                                >
                                    {s.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="mt-10 space-y-10">
                    {item.sections.map((sec) => (
                        <div key={sec.id} id={sec.id} className="scroll-mt-24">
                            <h2 className="text-sm font-semibold text-foreground">
                                {sec.heading ?? sec.label}
                            </h2>

                            <div className="mt-3 space-y-4">
                                {sec.blocks.map((b, idx) => (
                                    <Block key={idx} block={b} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
