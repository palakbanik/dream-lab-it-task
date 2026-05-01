import Leadership from "../contact/Leadership";
import Beyond from "./beyond/Beyond";
import CaseStudy from "./case-study/CaseStudy";
import Deliverables from "./deliverables/Deliverables";
import DeploymentModals from "./deployment-models/DeploymentModals";
import HeroFAQSection from "./hero-faq-section/HeroFAQSection";
import Hero from "./hero/Hero";
import ImplementationProcess from "./implementation-process/ImplementationProcess";
import OurCoreSystems from "./our-core-systems/OurCoreSystems";
import Ownership from "./ownership/Ownership";
import ServiceAndExpertise from "./service-and-expertise/ServiceAndExpertise";
import TechnologyStack from "./technology-stack/TechnologyStack";
import WhoWeAre from "./who-we-are/WhoWeAre";

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
            <Ownership />
            <Leadership />
            <CaseStudy />
            <div className="mb-[200px]">
                <HeroFAQSection />
            </div>
        </div>
    );
}
