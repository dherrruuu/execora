import "./contact.css";
import contactData from "./contactData";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {

    return (

        <section
            id="contact"
            className="contact"
        >

            <div className="contact-container">

                {/* Left */}

                <div className="contact-left">

                    <span className="contact-tag">

                        GET IN TOUCH

                    </span>

                    <h2 className="contact-title">

                        {contactData.title.map((line) => (

                            <span
                                key={line}
                                className="block"
                            >

                                {line}

                            </span>

                        ))}

                    </h2>

                    <p className="contact-description">

                        {contactData.description}

                    </p>

                    <button className="contact-btn">

                        {contactData.button}

                        <ArrowUpRight
                            size={20}
                            strokeWidth={1.8}
                        />

                    </button>

                </div>

                {/* Right */}

                <div className="contact-right">

                    <div className="contact-card">

                        <span>
                            PHONE
                        </span>

                        <h3>

                            {contactData.phone}

                        </h3>

                    </div>

                    <div className="contact-card">

                        <span>
                            EMAIL
                        </span>

                        <h3>

                            {contactData.email}

                        </h3>

                    </div>

                    <div className="contact-card">

                        <span>
                            OFFICE
                        </span>

                        <h3>

                            {contactData.office}

                        </h3>

                    </div>

                    <div className="contact-card">

                        <span>
                            INSTAGRAM
                        </span>

                        <h3>

                            {contactData.instagram}

                        </h3>

                    </div>

                </div>

            </div>

        </section>

    );

}