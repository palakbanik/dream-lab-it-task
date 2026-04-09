import ContactSection from "@/components/pages/contact/ContactSection";
import FaqSection from "@/components/pages/contact/FaqSection";
import LeadershipSection from "@/components/pages/contact/LeadershipSection";
import React from "react";

export default function page() {
    return (
        <>
            <ContactSection />
            <LeadershipSection />
            <FaqSection />
        </>
    );
}
