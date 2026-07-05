import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import navLinks from "./navbarData";
import "./navbar.css";

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 40);

        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);

    }, []);

    const scrollToSection = (id) => {

        const section = document.getElementById(id);

        if (section) {

            section.scrollIntoView({

                behavior: "smooth",
                block: "start",

            });

        }

    };

    return (

        <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

            <div
                className="navbar-logo"
                onClick={() => scrollToSection("home")}
            >

                EXECORA

            </div>

            <nav>

                {navLinks.map((link) => (

                    <button
                        key={link.id}
                        onClick={() => scrollToSection(link.section)}
                    >

                        {link.title}

                    </button>

                ))}

            </nav>

            <button
                className="nav-btn"
                onClick={() => scrollToSection("contact")}
            >

                Let's Talk

                <ArrowRight size={18} />

            </button>

        </header>

    );

}