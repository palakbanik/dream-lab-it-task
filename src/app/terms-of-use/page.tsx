import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import Paragraph from "@/components/shared/Paragraph";
import SubHeading from "@/components/shared/SubHeading";
import { termsOfUseData } from "@/data/terms-of-use";

// function LegalBlockRenderer({
//     block,
// }: {
//     block: import("@/data/terms-of-use").LegalBlock;
// }) {
//     if (block.type === "paragraph") {
//         return <Paragraph>{block.text}</Paragraph>;
//     }

//     return (
//         <ul className="space-y-2 text-xs sm:text-sm leading-6 text-muted-foreground-primary">
//             {block.items.map((item) => (
//                 <li key={item} className="flex gap-3">
//                     <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground-secondary/80" />
//                     <span>{item}</span>
//                 </li>
//             ))}
//         </ul>
//     );
// }

export default function TermsOfUse() {
    const data = termsOfUseData;

    return (
        <section>
            {/* narrow center column */}
            <Container className="max-w-[1250px] 2xl:pt-50 2xl:pb-32.5">
                <div className="space-y-2 md:space-y-3 xl:space-y-5">
                    <Heading>{data.title}</Heading>
                    <div>
                        <Paragraph>{data.lastUpdated}</Paragraph>
                        <div>
                            {data.introLines.map((line) => (
                                <Paragraph key={line}>{line}</Paragraph>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sections */}
                <div className="mt-8 space-y-8"></div>
            </Container>
        </section>
    );
}
