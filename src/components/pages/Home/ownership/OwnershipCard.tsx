import SubHeading from "@/components/shared/SubHeading";
import { OwnershipCardDataProps } from "./Ownership";
import Paragraph from "@/components/shared/Paragraph";

interface OwnershipCardProps {
    card: OwnershipCardDataProps;
}

export default function OwnershipCard({ card }: OwnershipCardProps) {
    const { title, bullets } = card;
    return (
        <div className="rounded-[10px] min-h-[264px] max-w-[522px] flex-1">
            <div className="px-[42px] pt-[44px] pb-[55px] gradient-border">
                <SubHeading>{title}</SubHeading>

                <ul className="mt-[14px] space-y-[8px] pl-[18px] list-disc">
                    {bullets.map((bullet, i) => (
                        <li key={i}>
                            <Paragraph>{bullet}</Paragraph>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
