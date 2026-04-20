import Accordion from "@/components/shared/Accordion";
import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import { faqData } from "@/data/faq";

export default function FaqSection() {
    return (
        <section className="mt-[80px] md:mt-[120px] xl:mt-[160px]">
            <Container className="mx-auto w-full max-w-5xl px-4 text-center space-y-5 md:space-y-7">
                <Heading>Frequently Asked Questions</Heading>
                {/* accordion */}
                <Accordion data={faqData} />
            </Container>
        </section>
    );
}
