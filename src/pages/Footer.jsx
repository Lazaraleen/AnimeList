import React from "react";
import './footer.css';

function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row gy-4">
                        <div className="footer-info">
                            <a href="/" className="Logo d-flex align-items-center">
                                <span>AnimeList</span>
                            </a>
                            <p>Ceci n'est qu'un petit projet d'adaptation d'un site de cinéma mais adapter avec certains animes que j'ai vu...</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    &copy; Copiright{' '}
                    <strong>
                        <span>DStudio Technology</span>
                    </strong>
                    . All Rights Reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer;