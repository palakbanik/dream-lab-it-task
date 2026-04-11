import { privacyPolicyData } from "@/data/privacy-policy";
import Container from "@/components/shared/Container";
import Paragraph from "@/components/shared/Paragraph";
import Heading from "@/components/shared/Heading";
import SubHeading from "@/components/shared/SubHeading";

function PolicyBlockRenderer({
    block,
}: {
    block: import("@/data/privacy-policy").PolicyBlock;
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

export default function PrivacyPolicy() {
    const data = privacyPolicyData;

    return (
        <section>
            <Container className="max-w-[1250px] pt-24 md:pt-36 2xl:pt-50 pb-40 md:pb-50 2xl:pb-44.5 space-y-2 md:space-y-3 xl:space-y-5">
                <Heading>{data.title}</Heading>
                <Paragraph>
                    <span>{data.lastUpdated}</span> <br />
                    <span>{data.intro}</span>
                </Paragraph>

                {/* Sections */}
                <div className="mt-8 space-y-8">
                    {data.sections.map((section) => (
                        <article
                            key={section.id}
                            id={section.id}
                            className="scroll-mt-24"
                        >
                            <SubHeading className="text-sm sm:text-base font-semibold text-foreground">
                                {section.title}
                            </SubHeading>

                            <ul className="space-y-2 md:space-y-3 xl:space-y-5 mt-1.5 md:mt-3">
                                {section.blocks.map((block, idx) => (
                                    <li
                                        key={idx}
                                        className="space-y-2 md:space-y-3 xl:space-y-3.5"
                                    >
                                        <PolicyBlockRenderer block={block} />
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
