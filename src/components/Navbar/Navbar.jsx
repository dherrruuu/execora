import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import navLinks from "./navbarData";
import "./navbar.css";

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 40);

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

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

        <>

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
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                >

                    {menuOpen ? <X size={24} /> : <Menu size={24} />}

                </button>

                <a
                    className="nav-btn"
                    href="https://wa.me/918209592340"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    Let's Talk

                    <ArrowRight size={18} />

                </a>

            </header>

            {menuOpen && (

                <div
                    className="mobile-menu-backdrop"
                    onClick={() => setMenuOpen(false)}
                >

                    <div className="mobile-menu">

                        {navLinks.map((link) => (

                            <button
                                key={link.id}
                                onClick={() => {

                                    scrollToSection(link.section);

                                    setMenuOpen(false);

                                }}
                            >

                                {link.title}

                            </button>

                        ))}

                        <a
                            className="mobile-talk-btn"
                            href="https://wa.me/918209592340"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            Let's Talk

                        </a>

                    </div>

                </div>

            )}

        </>

    );

}