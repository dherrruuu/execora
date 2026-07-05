import heroImage from "../../assets/hero.png";

export default function HeroVideo() {
  return (
    <div className="hero-video">

      <img
        src={heroImage}
        alt="Execora interior design showcase"
      />

      <div className="hero-overlay" />

    </div>
  );
}