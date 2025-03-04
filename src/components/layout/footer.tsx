import * as React from "react";

import * as footerStyles from "../../styles/modules/layout/footer.module.scss";

const Footer: React.FC = () => {
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.footerContainer}>
                <p>© 2024 - Keep It Real </p>
                <ul>
                    <li>
                        <a
                            href="https://www.instagram.com/keepitrealkir"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <i className="fab fa-instagram fa-lg" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.facebook.com/profile.php?id=61559466671196"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <i className="fab fa-facebook fa-lg" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.tiktok.com/@keepitreal_nl"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <i className="fab fa-tiktok fa-lg" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@keepitreal_de_podcast"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <i className="fab fa-youtube fa-lg" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://open.spotify.com/show/7wDDGz0HtXhn3WPCJ3KLcO?si=80196a51f4e4423d"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <i className="fab fa-spotify fa-lg" />
                        </a>
                    </li>
                </ul>

                <p>
                    Webcrafted by{" "}
                    <a
                        href="https://menefex.nl"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={footerStyles.menefex}
                    >
                        Menefex
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
