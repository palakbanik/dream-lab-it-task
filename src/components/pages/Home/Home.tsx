import WhoWeAre from "./who-we-are/WhoWeAre";
import Hero from "./hero/Hero";
import Beyond from "./beyond/Beyond";
import OurCoreSystems from "./our-core-systems/OurCoreSystems";
import ServiceAndExpertise from "./service-and-expertise/ServiceAndExpertise";
import TechnologyStack from "./technology-stack/TechnologyStack";
import ImplementationProcess from "./implementation-process/ImplementationProcess";
import Deliverables from "./deliverables/Deliverables";
import DeploymentModals from "./deployment-models/DeploymentModals";
import HeroFAQSection from "./hero-faq-section/HeroFAQSection";
import CaseStudy from "./case-study/CaseStudy";

export default function Home() {
    return (
        <div>
            <Hero />
            <WhoWeAre />
            <Beyond />
            <OurCoreSystems />
            <ServiceAndExpertise />
            <TechnologyStack />
            <Deliverables />
            <ImplementationProcess />
            <DeploymentModals />
            <CaseStudy />
            <HeroFAQSection />
        </div>
    );
}
