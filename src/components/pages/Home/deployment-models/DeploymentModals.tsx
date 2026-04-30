import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import Paragraph from "@/components/shared/Paragraph";
import Image from "next/image";
import { DeliverableItem } from "../deliverables/Deliverables";
import SubHeading from "@/components/shared/SubHeading";

import deploymentModalsImg from "@/public/deploymentModalsImg.jpg";

const deploymentModalsData: DeliverableItem[] = [
    {
        title: "Private Cloud Deployment",
        description:
            "Systems deployed within entity-controlled cloud environments.",
    },
    {
        title: "On-Premise Deployment",
        description:
            "Installed within institutional servers and infrastructure.",
    },
    {
        title: "Hybrid Deployment",
        description:
            "Combination of institutional infrastructure and cloud environments.",
    },
];

export default function DeploymentModals() {
    return (
        <section aria-label="Deliverables section">
            <Container className="pb-6 md:pb-9 xl:pb-13.75 2xl:pb-27.5">
                <div className="grid lg:grid-cols-[740px_1fr] place-items-center gap-[77px]">
                    {/* left content */}
                    <div className="max-w-[740px] space-y-6">
                        <Heading className="2xl:text-[42px]">
                            Deployment Models
                        </Heading>

                        <ul className="divide-y divide-white/10">
                            {deploymentModalsData.map((item) => (
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

                    {/* right img */}
                    <div>
                        <Image
                            src={deploymentModalsImg}
                            alt="Deployment Models"
                            placeholder="blur"
                            className="object-cover"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
