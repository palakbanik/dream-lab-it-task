import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import Paragraph from "@/components/shared/Paragraph";
import SubHeading from "@/components/shared/SubHeading";
import { termsOfUseData } from "@/data/terms-of-use";

function LegalBlockRenderer({
    block,
}: {
    block: import("@/data/terms-of-use").LegalBlock;
}) {
    if (block.type === "paragraph") {
        return <Paragraph>{block.text}</Paragraph>;
    }

    return (
        <ul className="space-y-2 text-xs sm:text-sm leading-normal md:leading-6 text-muted-foreground-primary">
            {block.items.map((item) => (
                <li key={item} className="flex gap-3">
                    <span className="mt-1.5 md:mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground-secondary/80" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

export default function TermsOfUse() {
    const data = termsOfUseData;

    return (
        <section>
            {/* narrow center column */}
            <Container className="max-w-[1250px] pt-24 md:pt-36 2xl:pt-50 pb-40 md:pb-50 2xl:pb-44.5 space-y-2 md:space-y-3 xl:space-y-5">
                <div className="space-y-2 md:space-y-3 xl:space-y-5">
                    <Heading>{data.title}</Heading>
                    <div>
                        <Paragraph>{data.lastUpdated}</Paragraph>
                        <div>
                            {data.introLines.map((line, i) => (
                                <Paragraph key={i}>{line}</Paragraph>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="space-y-2 md:space-y-3 xl:space-y-5">
                        <ul className="space-y-2 md:space-y-3 xl:space-y-5">
                            {data.sections.map((section, i) => (
                                <li
                                    key={i}
                                    className="space-y-2 md:space-y-3 xl:space-y-3.5"
                                >
                                    <SubHeading>{section.title}</SubHeading>
                                    <div>
                                        {section.blocks.map((block, i) => (
                                            <LegalBlockRenderer
                                                key={i}
                                                block={block}
                                            />
                                        ))}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}
