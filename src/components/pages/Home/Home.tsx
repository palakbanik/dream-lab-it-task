import WhoWeAre from "./who-we-are/WhoWeAre";
import Hero from "./hero/Hero";
import Beyond from "./beyond/Beyond";

export default function Home() {
    return (
        <div>
            <Hero />
            <WhoWeAre />
            <Beyond />
        </div>
    );
}
