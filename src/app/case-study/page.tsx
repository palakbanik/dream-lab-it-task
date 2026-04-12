import { CaseStudyCard } from "@/components/pages/case-study-sections/CaseStudyCard";
import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import { caseStudy } from "@/data/case-study";

export default function CaseStudy() {
    return (
        <section>
            <Container className="pt-24 md:pt-36 2xl:pt-50 pb-50 sm:pb-30 lg:pb-50">
                <div className="px-4 sm:px-6 lg:px-10">
                    <Heading className="text-center">
                        Transforming operations through
                        <br />
                        intelligence and automation
                    </Heading>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center lg:gap-[50px]">
                        {caseStudy.map((item) => (
                            <CaseStudyCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
