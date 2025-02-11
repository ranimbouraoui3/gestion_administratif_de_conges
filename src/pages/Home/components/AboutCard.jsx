import "./styles/AboutCard.css"
export const AboutCard = ({ image, nom, lien, para }) => {
    return (
        <div className="about-card-container">
            <div className="about-card">
                <div className="image-container">
                    <img src={image} alt={nom} className="rounded-full" />
                </div>
                <div className="content-container">
                    <h2 className="about-card-title">{nom}</h2>
                    <p className="about-card-description">{para}</p>
                    <a
                        href={lien}
                        target="_blank"
                        className="learn-more-link"
                    >
                        Learn more
                        <svg
                            className="arrow-icon"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};
