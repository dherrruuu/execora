import { useEffect } from "react";
import {
    Hero,
    About,
    Services,
    Portfolio,
    Clients,
    Contact
} from "../sections";

import clientsData from "../sections/Clients/clientsData";
import portfolioData from "../sections/Portfolio/portfolioData";
import servicesData from "../sections/Services/servicesData";

const homepageImages = [
    "/hero/hero.jpg",
    "/about.jpg",
    ...clientsData.map((client) => client.logo),
    ...servicesData.map((service) => service.image),
    ...portfolioData.flatMap((section) => section.projects.map((project) => project.image)),
];

export default function Home() {

    useEffect(() => {

        homepageImages.forEach((src) => {

            const image = new Image();

            image.src = src;

        });

    }, []);

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