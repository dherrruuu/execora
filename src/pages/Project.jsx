import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import "./Project.css";

import projects from "./projectData";

import Gallery from "../sections/Portfolio/Gallery";
import Lightbox from "../sections/Portfolio/Lightbox";

export default function Project() {

    const { slug } = useParams();

    const project = projects[slug];

    const [selected, setSelected] = useState(null);

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [slug]);

    if (!project) {

        return (

            <section className="project-not-found">

                <h1>Project Not Found</h1>

            </section>

        );

    }

    const images = useMemo(() => {

        const sourceImages = project.images
            ? project.images
            : (() => {

                const arr = [];

                arr.push(`${project.folder}/cover.jpg`);

                for (let i = 1; i <= project.count; i++) {

                    arr.push(`${project.folder}/${i}.jpg`);

                }

                return arr;

            })();

        return sourceImages.map((path) => encodeURI(path));

    }, [project]);

    const heroImage = images[0];

    return (

        <main className="project-page">

            <Link to="/" className="project-back-link">

                <ArrowLeft size={18} />

                Back to Home

            </Link>

            {/* HERO */}

            <section className="project-hero">

                <img

                    src={heroImage}

                    alt={project.title}

                />

            </section>

            {/* TITLE */}

            <section className="project-header">

                <span>

                    {project.category}

                </span>

                <h1>

                    {project.title}

                </h1>

            </section>

            {/* GALLERY */}

            <Gallery

                images={images}

                onImageClick={setSelected}

            />

            {/* LIGHTBOX */}
            {selected !== null && (

                <Lightbox

                    images={images}

                    index={selected}

                    setIndex={setSelected}

                    onClose={() => setSelected(null)}

                />

            )}

        </main>

    );

}