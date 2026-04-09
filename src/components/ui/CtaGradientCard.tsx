import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

type Props = {
    title: string;
    buttonLabel: string;
    href: string;
    image: { src: string; alt: string };
    className?: string;
};

export default function CtaGradientCard({
    title,
    buttonLabel,
    href,
    image,
    className,
}: Props) {
    return (
        <div
            className={cn(
                "rounded-2xl p-[1px]",
                "bg-gradient-to-r from-accent-pink via-accent-blue to-accent-aqua",
                className,
            )}
        >
            <div className="rounded-2xl bg-custom-black/25 backdrop-blur border border-white/10">
                <div className="grid grid-cols-1 gap-5 p-5 sm:p-6 md:grid-cols-[1.2fr_1fr] md:items-center">
                    {/* Left */}
                    <div>
                        <h3 className="whitespace-pre-line text-xl sm:text-2xl font-semibold leading-tight">
                            {title}
                        </h3>

                        <div className="mt-4">
                            <Link
                                href={href}
                                className={cn(
                                    "inline-flex items-center gap-3 rounded-full",
                                    "bg-custom-black text-foreground",
                                    "border border-white/10 px-4 py-2 text-sm font-semibold",
                                    "hover:bg-custom-black/80 transition",
                                    "focus:outline-none focus:ring-2 focus:ring-accent-pink/40",
                                )}
                            >
                                {buttonLabel}
                                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                                    <FiArrowUpRight className="h-4 w-4" />
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Right image */}
                    <div className="md:justify-self-end">
                        <div className="relative w-full md:w-[280px] overflow-hidden rounded-xl border border-white/10 bg-white/5 aspect-[16/10]">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 280px"
                                priority={false}
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-custom-black/20 via-transparent to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
