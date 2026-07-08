import aboutData from "./aboutData";
import "./about.css";

export default function About() {
  return (
    <section
    id="about"
    className="about"
    >

      <div className="container about-container">

        {/* Left */}

        <div className="about-content">

          <span className="about-tag">

            <span className="about-dot"></span>

            {aboutData.tag}

          </span>

          <h2 className="about-title">

            {aboutData.title.map((line) => (

              <span key={line}>

                {line}

              </span>

            ))}

          </h2>

          <p className="about-description">

            {aboutData.description}

          </p>

          <div className="about-divider"></div>

          <div className="about-stats">

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

        <div className="about-image-wrapper">

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