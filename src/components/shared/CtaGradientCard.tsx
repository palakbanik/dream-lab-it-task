import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Heading from "../shared/Heading";
import Button from "../ui/Button";

type Props = {
    title: string;
    buttonLabel: string;
    href: string;
    image: { src: string; alt: string };
    className?: string;
};

export default function CtaGradientCard({
    title,

    image,
    className,
}: Props) {
    return (
        <div
            className={cn(
                "mx-auto max-w-[1142px] rounded-xl xl:rounded-[30px] bg-linear-to-r from-accent-pink/90 to-accent-aqua/90 ",
                className,
            )}
        >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 md:gap-12 2xl:gap-16 p-3 sm:px-5 xl:px-5.5 xl:py-5 xl:pl-10">
                {/* Left */}
                <div className="flex-1 lg:flex-2 max-w-lg space-y-4 2xl:space-y-7.5">
                    <Heading className="text-lg sm:text-[21px] md:text-[24px] lg:text-[28px] xl:text-[30px] 2xl:text-[36px] leading-normal md:leading-normal font-extrabold">
                        {title}
                    </Heading>
                    <Button
                        variant="black"
                        iconVariant="white"
                        icon={<FiArrowUpRight />}
                    >
                        Book for Consultation
                    </Button>
                </div>

                {/* Right image */}
                <div className="flex-1">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        className="object-cover rounded-[10px] md:rounded-[20px] w-full"
                        width={411}
                        height={232}
                    />
                </div>
            </div>
        </div>
    );
}
