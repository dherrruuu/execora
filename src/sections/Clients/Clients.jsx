import "./clients.css";
import clients from "./clientsData";

export default function Clients() {

    // duplicate for seamless infinite scroll
    const loopedClients = [...clients, ...clients];

    return (
        <section id="clients" className="clients">

            <div className="clients-header">
                <span>Worked With / Worked For</span>
                <h2>Businesses We’ve Worked With</h2>
            </div>

            <div className="clients-marquee">
                <div className="clients-track">

                    {loopedClients.map((client, index) => (
                        <div key={index} className="client-card">

                            <div className="client-logo-box">
                                {client.logo ? (
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        loading="lazy"
                                    />
                                ) : (
                                    <span className="client-fallback">
                                        {client.name.charAt(0)}
                                    </span>
                                )}
                            </div>

                            <div className="client-name">
                                {client.name}
                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </section>
    );
}