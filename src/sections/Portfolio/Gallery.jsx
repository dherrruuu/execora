import "./Gallery.css";
import "./Lightbox.css";

export default function Gallery({ images = [], onImageClick }) {

    return (

        <section className="gallery-page">

            <div className="gallery-grid">

                {images.map((image, index) => (

                    <div

                        key={index}

                        className="gallery-item"

                        onClick={() => onImageClick?.(index)}

                    >

                        <img

                            src={image}

                            alt=""

                            loading="lazy"

                        />

                    </div>

                ))}

            </div>

        </section>

    );

}