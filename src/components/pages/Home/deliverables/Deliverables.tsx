import Heading from "@/components/shared/Heading";
import Paragraph from "@/components/shared/Paragraph";
import Image from "next/image";

import deliverables from "@/public/deliverables.jpg";
import Container from "@/components/shared/Container";
import SubHeading from "@/components/shared/SubHeading";

export type DeliverableItem = {
    title: string;
    description: string;
};

const defaultItems: DeliverableItem[] = [
    {
        title: "AI Assistants",
        description:
            "Secure internal assistants trained on institutional data.",
    },
    {
        title: "Operational Intelligence Systems",
        description: "Real-time monitoring and execution tracking.",
    },
    {
        title: "Enterprise Reporting Infrastructure",
        description: "Automated report generation and executive dashboards.",
    },
    {
        title: "Workflow Automation",
        description: "Structured operational execution systems.",
    },
    {
        title: "Full System Deployment",
        description:
            "Integration with existing infrastructure and institutional systems.",
    },
];

export default function Deliverables() {
    return (
        <section aria-label="Deliverables section">
            <Container className="pt-6 md:pt-9 xl:pt-13.75 2xl:pt-27.5">
                <div className="grid lg:grid-cols-[605px_1fr] items-center gap-[77px]">
                    {/* left image */}
                    <div>
                        <Image
                            src={deliverables}
                            alt="AI robotics illustration"
                            priority
                            placeholder="blur"
                            className="object-cover"
                        />
                    </div>

                    {/* right content */}
                    <div className="max-w-[705px] space-y-6">
                        <div>
                            <Heading className="2xl:text-[42px]">
                                Deliverables
                            </Heading>
                            <Paragraph>
                                When institutions work with Beyond Code, they
                                receive:
                            </Paragraph>
                        </div>

                        <ul className="divide-y divide-white/10">
                            {defaultItems.map((item) => (
                                <li
                                    key={item.title}
                                    className="space-y-[10px] py-5"
                                >
                                    <SubHeading>{item.title}</SubHeading>
                                    <Paragraph className="2xl:text-xl">
                                        {item.description}
                                    </Paragraph>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}
