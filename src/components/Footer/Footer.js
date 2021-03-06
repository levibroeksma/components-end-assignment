import './Footer.css';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer({}) {
    return (
        <footer>
            <div className="footer-position-holder">
                <div className="main-footer">
                    <section className="footer-section">
                        <div className="h2">Recepten</div>
                        <ul className="link-holder">
                            <li><a href="#">Dit is een suggestie</a></li>
                            <li><a href="#">Dit is een suggestie</a></li>
                            <li><a href="#">Dit is een suggestie</a></li>
                            <li><a href="#">Dit is een suggestie</a></li>
                            <li><a href="#">Dit is een suggestie</a></li>
                        </ul>
                    </section>
                    <section className="footer-section">
                        <div className="h2">Other</div>
                        <ul className="link-holder">
                            <li><a href="#">Dit is een suggestie</a></li>
                            <li><a href="#">Dit is een suggestie</a></li>
                            <li><a href="#">Dit is een suggestie</a></li>
                            <li><a href="#">Dit is een suggestie</a></li>
                            <li><a href="#">Dit is een suggestie</a></li>
                        </ul>
                    </section>
                    <section className="footer-section">
                        <div className="h2">Contact</div>
                        <span>RecipeTracker</span>
                        <a href="#" className="mail"><strong>M</strong> info@recipetracker.com</a>
                        <a href="#" className="phone-number"><strong>P</strong> + 31 (0) 123 45 67 8</a>
                    </section>
                </div>
            </div>
            <div className="copyright-bar">
                <span>RecipeTracker ©</span>
                <span className="seperator">|</span>
                <span>All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer;