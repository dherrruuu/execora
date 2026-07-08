import "./Portfolio.css";
import portfolio from "./portfolioData";

export default function Portfolio() {
  return (
    <section className="portfolio">

      <div className="portfolio-container">

        <span className="portfolio-tag">
          OUR PORTFOLIO
        </span>

        <h2>
          Selected Works
        </h2>

        {portfolio.map((section) => (

          <div
            key={section.category}
            className="portfolio-category"
          >

            <div className="category-header">

              <h3>{section.category}</h3>

            </div>

            <div className="portfolio-grid">

              {section.projects.map((project) => (

                <div
                  key={project.slug}
                  className="portfolio-card"
                >

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="portfolio-overlay">

                    <h4>{project.title}</h4>

                  </div>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}