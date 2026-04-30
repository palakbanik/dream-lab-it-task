import WhoWeAre from "./who-we-are/WhoWeAre";
import Hero from "./hero/Hero";
import Beyond from "./beyond/Beyond";
import OurCoreSystems from "./our-core-systems/OurCoreSystems";
import ServiceAndExpertise from "./service-and-expertise/ServiceAndExpertise";
import TechnologyStack from "./technology-stack/TechnologyStack";

export default function Home() {
    return (
        <div>
            <Hero />
            <WhoWeAre />
            <Beyond />
            <OurCoreSystems />
            <ServiceAndExpertise />
            <TechnologyStack />
        </div>
    );
}
