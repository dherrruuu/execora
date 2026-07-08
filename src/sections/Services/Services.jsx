import "./services.css";
import services from "./servicesData";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Services() {

  const navigate = useNavigate();

  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if (section) {

      section.scrollIntoView({ behavior: "smooth", block: "start" });

    }

  };

  const handleExplore = (serviceTitle) => {

    switch (serviceTitle) {

      case "Luxury Residential":

        scrollToSection("residential");

        break;

      case "Commercial Spaces":

        scrollToSection("commercial");

        break;

      case "Hospitality Design":

        scrollToSection("hospitality");

        break;

      case "Civil & Finishing Works":

        navigate("/projects/civil-work");

        break;

      default:

        break;

    }

  };

  const activeServices = new Set([
    "Luxury Residential",
    "Commercial Spaces",
    "Hospitality Design",
    "Civil & Finishing Works",
  ]);

  return (
    <section
    id="services"
    className="services"
    >

      <div className="services-container">

        {/* Header */}

        <div className="services-header">

          <span className="services-tag">
            WHAT WE DO
          </span>

          <h2 className="services-title">
            Spaces Designed
            <br />
            To Inspire.
          </h2>

          <p className="services-intro">
            We create interiors that blend architecture,
            craftsmanship and functionality into timeless
            environments for living, working and hospitality.
          </p>

        </div>

        {/* Services */}

        <div className="services-list">

          {services.map((service, index) => (

            <article
              key={service.id}
              className={`service-card shape-${index + 1}`}
            >

              {/* Left */}

              <div className="service-content">

                <span className="service-number">
                  {service.number}
                </span>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                {activeServices.has(service.title) && (

                <button
                  className="service-button"
                  type="button"
                  onClick={() => handleExplore(service.title)}
                >

                  Explore

                  <ArrowUpRight
                    size={20}
                    strokeWidth={2}
                  />

                </button>

                )}

              </div>

              {/* Right */}

              <div className="service-image">

                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}