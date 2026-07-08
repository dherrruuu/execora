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

        if (window.location.hash) {

            const sectionId = window.location.hash.slice(1);
            const section = document.getElementById(sectionId);

            if (section) {

                requestAnimationFrame(() => {

                    section.scrollIntoView({ behavior: "smooth", block: "start" });

                });

            }

        }

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