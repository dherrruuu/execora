import { ArrowRight } from "lucide-react";
import "./hero.css";

export default function Hero() {

    const scrollToSection = (id) => {

        const section = document.getElementById(id);

        if (section) {

            section.scrollIntoView({ behavior: "smooth", block: "start" });

        }

    };

    return (

        <section
            id="home"
            className="hero"
        >

            {/* Background Image */}

            <div className="hero-image"></div>

            {/* Overlays */}

            <div className="hero-overlay"></div>

            <div className="hero-gradient"></div>

            {/* Content */}

            <div className="container hero-container">

                <div className="hero-left">

                    <span className="hero-tag">

                        

                    </span>

                    <h1>

                        Crafting
                        <br />
                        Extraordinary
                        <br />
                        Spaces.

                    </h1>

                    <p>

                        Premium interiors for residential,
                        commercial and hospitality spaces.
                        Designed with timeless aesthetics,
                        precision and flawless execution.

                    </p>

                    <div className="hero-buttons">

                        <button
                            type="button"
                            className="btn-primary"
                            onClick={() => scrollToSection("projects")}
                        >

                            Explore Projects

                            <ArrowRight size={18} />

                        </button>

                        <button
                            type="button"
                            className="watch-btn"
                            onClick={() => scrollToSection("contact")}
                        >

                            <ArrowRight size={18} />

                            Let&apos;s Talk

                        </button>

                    </div>

                </div>

                <div className="hero-right">

                    <div className="hero-card">

                        <div className="stat">

                            <h2>225+</h2>

                            <span>Projects Delivered</span>

                        </div>

                        <div className="divider"></div>

                        <div className="stat">

                            <h2>25+</h2>

                            <span>Years Experience</span>

                        </div>

                        <div className="divider"></div>

                        <div className="stat">

                            <h2>98%</h2>

                            <span>Client Satisfaction</span>

                        </div>

                    </div>

                </div>

            </div>

            <div className="scroll-indicator">

                <span></span>

                SCROLL

            </div>

        </section>

    );

}