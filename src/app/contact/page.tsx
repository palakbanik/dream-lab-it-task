import ContactSection from "@/components/pages/contact/ContactSection";
import FaqSection from "@/components/pages/contact/FaqSection";
import LeadershipSection from "@/components/pages/contact/Leadership";

export default function page() {
    return (
        <section className="pt-30 md:pt-46 lg:pt-50 pb-50 sm:pb-30 lg:pb-50">
            <ContactSection />
            <LeadershipSection />
            <FaqSection />
        </section>
    );
}
