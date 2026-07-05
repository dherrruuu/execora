import {
    Hero,
    About,
    Services,
    FeaturedProjects,
    Clients,
    Contact
} from "../sections";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <FeaturedProjects />
            <Clients />
            <Contact />
        </>
    );
}