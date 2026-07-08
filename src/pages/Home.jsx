import {
    Hero,
    About,
    Services,
    Portfolio,
    Clients,
    Contact
} from "../sections";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Clients />
            <Contact />
        </>
    );
}