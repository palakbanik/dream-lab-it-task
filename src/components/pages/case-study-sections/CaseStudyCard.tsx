import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { CaseStudyItem } from "@/data/case-study";
import SubHeading from "@/components/shared/SubHeading";
import Paragraph from "@/components/shared/Paragraph";
import Button from "@/components/ui/Button";

export function CaseStudyCard({ item }: { item: CaseStudyItem }) {
    return (
        <div className="w-full max-w-[440px] space-y-[10px] sm:space-y-[20px] lg:space-y-[30px] group">
            {/* image frame */}
            <div className="overflow-hidden">
                <Image
                    src={item.cardImage.src}
                    alt={item.cardImage.alt}
                    width={440}
                    height={405}
                    className="transition-transform w-full h-full duration-300 group-hover:scale-[1.08] object-cover"
                />
            </div>

            {/* content */}
            <div className="space-y-[26px] lg:space-y-[30px]">
                <div className="space-y-[10px] lg:space-y-[15px]">
                    <SubHeading>{item.cardTitle}</SubHeading>
                    <Paragraph>{item.cardDescription}</Paragraph>
                </div>

                <Link href={`/case-study/${item.id}`}>
                    <Button
                        className="pl-4 pr-2 sm:pl-4 sm:pr-2.5 lg:px-4 xl:pl-5 xl:pr-2.5 py-1.5 sm:py-1.5 lg:py-1.5 xl:py-1.5"
                        icon={<FiArrowRight />}
                        variant="gray"
                        iconVariant="gray"
                    >
                        Learn More
                    </Button>
                </Link>
            </div>
        </div>
    );
}
