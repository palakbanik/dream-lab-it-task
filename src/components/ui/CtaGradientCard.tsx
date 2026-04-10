import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Heading from "../shared/Heading";
import Button from "./Button";

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
                "mx-auto max-w-285.5 2xl:rounded-[30px] bg-linear-to-r from-accent-pink/90 to-accent-aqua/90 ",
                className,
            )}
        >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 2xl:gap-16 px-6 2xl:px-5.5 2xl:py-5 2xl:pl-10">
                {/* Left */}
                <div className="max-w-lg 2xl:space-y-7.5">
                    <Heading className="2xl:text-[36px] leading-none font-extrabold">
                        {title}
                    </Heading>

                    <div>
                        {/* <Link
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
                                
                            </span>
                        </Link> */}

                        <Button
                            variant="black"
                            iconVariant="white"
                            icon={<FiArrowUpRight />}
                        >
                            Book for Consultation
                        </Button>
                    </div>
                </div>

                {/* Right image */}
                <div>
                    <Image
                        src={image.src}
                        alt={image.alt}
                        className="object-cover rounded-[20px]"
                        width={411}
                        height={232}
                    />
                </div>
            </div>
        </div>
    );
}
