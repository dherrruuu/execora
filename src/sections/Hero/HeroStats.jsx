import heroData from "./heroData";

export default function HeroStats() {
  return (
    <div className="hero-stats">

      {heroData.stats.map((item) => (
        <div
          key={item.label}
          className="hero-stat-card"
        >

          <h2>{item.value ?? item.number}</h2>

          <p>{item.label}</p>

        </div>
      ))}

    </div>
  );
}