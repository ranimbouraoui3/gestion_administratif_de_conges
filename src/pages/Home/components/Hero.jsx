import { Link } from "react-router-dom";
import './styles/Hero.css'; // Import the custom CSS

export const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-card">
                <h1 className="hero-title">
                    Simplifiez la gestion administrative de votre entreprise.
                </h1>
                <p className="hero-description">
                    OffTimeMaster est une solution intuitive qui vous permet de gérer efficacement les congés, les tâches et les ressources humaines. Automatisez vos processus pour une gestion plus fluide et productive.
                </p>
                <div className="hero-btn-container">
                    <Link to="/about" className="learn-more-btn">
                        En savoir plus
                    </Link>
                </div>
            </div>
        </section>
    );
};
