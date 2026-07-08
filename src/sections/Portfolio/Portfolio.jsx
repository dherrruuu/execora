import "./Portfolio.css";
import portfolio from "./portfolioData";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {

    const sectionRef = useRef(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.utils.toArray(".portfolio-card").forEach((card) => {

                const slats = card.querySelectorAll(".slat");
                const image = card.querySelector(".portfolio-image img");
                const info = card.querySelector(".portfolio-info");

                const tl = gsap.timeline({

                    scrollTrigger:{
                        trigger:card,
                        start:"top 82%",
                        once:true
                    }

                });

                tl

                .to(slats,{

                    yPercent:-100,

                    stagger:0.08,

                    duration:0.9,

                    ease:"power4.inOut"

                })

                .to(image,{

                    scale:1,

                    filter:"blur(0px)",

                    opacity:1,

                    duration:1,

                    ease:"power3.out"

                },0)

                .from(info,{

                    y:40,

                    opacity:0,

                    duration:.7,

                    ease:"power3.out"

                },"-=0.5");

            });

        },sectionRef);

        return ()=>ctx.revert();

    },[]);

    return(

        <section
            className="portfolio"
            ref={sectionRef}
        >

            <div className="portfolio-container">

                <span className="portfolio-tag">
                    OUR PORTFOLIO
                </span>

                <h2>
                    Selected Works
                </h2>

                {

                    portfolio.map((section)=>(

                        <div
                            key={section.category}
                            className="portfolio-category"
                        >

                            <div className="category-header">

                                <h3>

                                    {section.category}

                                </h3>

                            </div>

                            <div className="portfolio-grid">

                                {

                                    section.projects.map((project)=>(

                                        <article
                                            key={project.slug}
                                            className="portfolio-card"
                                        >

                                            <div className="portfolio-image">

                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    loading="lazy"
                                                />

                                                <div className="slats">

                                                    <span className="slat"></span>
                                                    <span className="slat"></span>
                                                    <span className="slat"></span>
                                                    <span className="slat"></span>
                                                    <span className="slat"></span>
                                                    <span className="slat"></span>
                                                    <span className="slat"></span>
                                                    <span className="slat"></span>

                                                </div>

                                            </div>

                                            <div className="portfolio-info">

                                                <span className="portfolio-category-name">

                                                    {section.category}

                                                </span>

                                                <div className="portfolio-bottom">

                                                    <h4>

                                                        {project.title}

                                                    </h4>

                                                    <div className="portfolio-arrow">

                                                        ↗

                                                    </div>

                                                </div>

                                            </div>

                                        </article>

                                    ))

                                }

                            </div>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}