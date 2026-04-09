import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import type { OperationItem } from "@/data/operations";
import { cn } from "@/lib/cn";

export function OperationCard({ item }: { item: OperationItem }) {
    return (
        <Link
            href={`/operations/${item.slug}`}
            className={cn(
                "group block rounded-2xl overflow-hidden",
                "border border-border/60 bg-white/5 hover:bg-white/7 transition",
                "focus:outline-none focus:ring-2 focus:ring-accent-pink/40",
            )}
        >
            {/* image frame */}
            <div
                className={cn(
                    "relative w-full aspect-square",
                    item.cardImage.frameClassName ?? "bg-white/5",
                )}
            >
                <Image
                    src={item.cardImage.src}
                    alt={item.cardImage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={cn(
                        "transition-transform duration-300 group-hover:scale-[1.02]",
                        item.cardImage.imageClassName ?? "object-cover",
                    )}
                    priority={false}
                />
            </div>

            {/* content */}
            <div className="p-5">
                <h3 className="text-sm font-semibold">{item.cardTitle}</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground-primary">
                    {item.cardDescription}
                </p>

                <div className="mt-4">
                    <span
                        className={cn(
                            "inline-flex items-center gap-2 rounded-full",
                            "border border-border/60 bg-custom-black/30 px-3 py-1 text-xs",
                            "text-muted-foreground-secondary group-hover:text-foreground transition",
                        )}
                    >
                        Learn More
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                            <FiArrowRight className="h-3.5 w-3.5" />
                        </span>
                    </span>
                </div>
            </div>
        </Link>
    );
}
