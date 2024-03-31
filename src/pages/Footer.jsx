import React from "react";
import './footer.css';

function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <a href="/" className="Logo d-flex align-items-center">
                                <span>CINEMA</span>
                            </a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis recusandae delectus quis, suscipit architecto rem exercitationem temporibus officiis doloremque eveniet, eum, eligendi fuga fugiat provident nam dolorum veniam quos atque.</p>
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
                <div className="credits">
                    Designed by <a href="#">DStudio Technology</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;