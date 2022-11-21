import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Kartik</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="https://github.com/kartikanand0012" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/kartikanand989/" className="footer__link">Certificates</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a
                        href="https://www.facebook.com/kartik.anand123/"
                        className="footer__social-link"
                        target="__blank"
                    >
                        <i class="bx bxl-facebook"></i>
                    </a>

                    <a
                        href="https://www.instagram.com/kxrtikanand/"
                        className="footer__social-link"
                        target="__blank"
                    >
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a
                        href="https://twitter.com/"
                        className="footer__social-link"
                        target="__blank"
                    >
                        <i class="bx bxl-twitter"></i>
                    </a>
                </div>
                <span className='footer__copy'>
                &#169; Kartik Anand. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer