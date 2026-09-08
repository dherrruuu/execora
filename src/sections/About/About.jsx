import { useRef } from "react";

import aboutData from "./aboutData";
import useFadeUp from "../../hooks/useFadeUp";
import "./about.css";

export default function About() {
  const aboutRef = useRef(null);

  useFadeUp(aboutRef);
  return (
    <section
    id="about"
    className="about"
    ref={aboutRef}
    >

      <div className="container about-container">

        {/* Left */}

        <div className="about-content">

          <span className="about-tag fade-up">

            <span className="about-dot"></span>

            {aboutData.tag}

          </span>

          <h2 className="about-title fade-up">

            {aboutData.title.map((line) => (

              <span key={line}>

                {line}

              </span>

            ))}

          </h2>

          <p className="about-description fade-up">

            {aboutData.description}

          </p>

          <div className="about-divider fade-up"></div>

          <div className="about-stats fade-up">

            {aboutData.stats.map((item) => (

              <div
                key={item.label}
                className="about-stat"
              >

                <h3>

                  {item.number}

                </h3>

                <span>

                  {item.label}

                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Right */}

        <div className="about-image-wrapper fade-up">

          <div className="about-image-bg"></div>

          <img
            src="/about.jpg"
            alt="BWD Interior"
            className="about-image"
          />

          <div className="about-floating-card">

            <h2>

              150+

            </h2>

            <p>

              Luxury Spaces Crafted

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}