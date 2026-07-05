import heroData from "./heroData";
import HeroStats from "./HeroStats";
import ScrollIndicator from "./ScrollIndicator";
import { ArrowRight } from "lucide-react";

export default function HeroContent() {

    return (

        <div className="hero-content">

            <div className="hero-left">

                <span className="hero-badge">
                    {heroData.badge}
                </span>

                <h1 className="hero-title">

                    {heroData.title.map((line) => (

                        <span
                            className="hero-line"
                            key={line}
                        >
                            {line}
                        </span>

                    ))}

                </h1>

                <p className="hero-description">

                    {heroData.description}

                </p>

                <div className="hero-buttons">

                    <button className="glass-button">

                        {heroData.primaryButton}

                        <ArrowRight
                            size={18}
                            style={{ marginLeft: 10 }}
                        />

                    </button>

                    <button className="outline-button">

                        {heroData.secondaryButton}

                    </button>

                </div>

                <HeroStats />

            </div>

            <ScrollIndicator />

        </div>

    );

}