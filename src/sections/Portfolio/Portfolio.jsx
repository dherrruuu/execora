import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Portfolio.css";
import portfolio from "./portfolioData";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {

    const portfolioRef = useRef(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.utils.toArray(".portfolio-card").forEach((card) => {

                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        y: 40
                    },
                    {
                        opacity: 1,
                        y: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 98%",
                            end: "top 30%",
                            scrub: 3
                        }
                    }
                );

            });

        }, portfolioRef);

        return () => ctx.revert();

    }, []);

    return (

        <section
            className="portfolio"
            id="projects"
            ref={portfolioRef}
        >

            <div className="portfolio-container">

                <span className="portfolio-tag">
                    OUR PORTFOLIO
                </span>

                <h2>
                    Selected Works
                </h2>

                {portfolio.map((section) => (

                    <section
                        key={section.category}
                        className="portfolio-category"
                        id={section.category.toLowerCase()}
                    >

                        <div className="category-header">

                            <h3>{section.category}</h3>

                        </div>

                        <div className="portfolio-grid">

                            {section.projects.map((project) => (

                                <Link
                                    key={project.slug}
                                    to={`/projects/${project.slug}`}
                                    className="portfolio-card"
                                >

                                    <div className="portfolio-image">

                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            loading="lazy"
                                        />

                                    </div>

                                    <div className="portfolio-content">

                                        <span className="portfolio-category-name">

                                            {section.category}

                                        </span>

                                        <div className="portfolio-bottom">

                                            <h4>

                                                {project.title}

                                            </h4>

                                            <div className="portfolio-arrow">

                                                <ArrowUpRight size={20} />

                                            </div>

                                        </div>

                                    </div>

                                </Link>

                            ))}

                        </div>

                    </section>

                ))}

            </div>

        </section>

    );

}