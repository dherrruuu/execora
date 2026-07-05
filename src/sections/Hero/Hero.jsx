import { ArrowRight, Play } from "lucide-react";
import "./hero.css";

export default function Hero() {

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

            <div className="hero-container">

                <div className="hero-left">

                    <span className="hero-tag">

                        EXECORA • LUXURY INTERIOR STUDIO

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

                        <button className="btn-primary">

                            Explore Projects

                            <ArrowRight size={18} />

                        </button>

                        <a
                            className="watch-btn"
                            href="https://drive.google.com/file/d/18PFbcvliWeGOKvuOIDE9QlUfxQCMCB_z/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <Play size={18} />

                            Watch Walkthrough

                        </a>

                    </div>

                </div>

                <div className="hero-right">

                    <div className="hero-card">

                        <div className="stat">

                            <h2>150+</h2>

                            <span>Projects Delivered</span>

                        </div>

                        <div className="divider"></div>

                        <div className="stat">

                            <h2>12+</h2>

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