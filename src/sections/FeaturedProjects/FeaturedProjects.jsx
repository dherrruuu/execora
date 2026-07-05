import "./featuredProjects.css";
import projects from "./projectsData";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedProjects() {

    return (

        <section
            id="projects"
            className="featured-projects"
        >

            <div className="projects-container">

                {/* Heading */}

                <div className="projects-header">

                    <span className="projects-tag">

                        FEATURED PROJECTS

                    </span>

                    <div className="projects-heading">

                        <h2>

                            Spaces
                            <br />
                            That Speak
                            <br />
                            Luxury.

                        </h2>

                        <p>

                            Every project reflects our philosophy of timeless
                            aesthetics, thoughtful planning and flawless
                            craftsmanship. From luxury residences to
                            commercial environments, each space is designed
                            to leave a lasting impression.

                        </p>

                    </div>

                </div>

                {/* Projects */}

                <div className="projects-list">

                    {projects.map((project) => (

                        <article
                            key={project.id}
                            className="project-card"
                        >

                            {/* Image */}

                            <div className="project-image">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                />

                            </div>

                            {/* Overlay */}

                            <div className="project-overlay">

                                <div className="project-info">

                                    <div>

                                        <span className="project-category">

                                            {project.category}

                                        </span>

                                        <h3>

                                            {project.title}

                                        </h3>

                                    </div>

                                    <ArrowUpRight
                                        size={34}
                                        strokeWidth={1.8}
                                        className="project-arrow"
                                    />

                                </div>

                                <div className="project-meta">

                                    <span>

                                        {project.location}

                                    </span>

                                    <span>

                                        {project.year}

                                    </span>

                                </div>

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>

    );

}