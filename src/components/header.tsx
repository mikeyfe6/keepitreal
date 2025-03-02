import React, { useState, useEffect } from "react";

import { Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

import Hamburger from "./hamburger";

import * as headerStyles from "../styles/modules/header.module.scss";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 37.5) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`${headerStyles.header} ${
                isOpen ? "mobileMenu" : "defaultMenu"
            } ${isSticky ? headerStyles.isSticky : ""}`}
        >
            <div>
                <div className={headerStyles.logo}>
                    <Link to="/">
                        <StaticImage
                            src="../images/logo/KIR-light-logo.png"
                            alt="Keep It Real Logo"
                        />
                    </Link>
                </div>

                <div className={headerStyles.desktop}>
                    <nav className={headerStyles.nav}>
                        <ul>
                            <li>
                                <Link
                                    to="/"
                                    activeClassName={headerStyles.active}
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/workshops/"
                                    activeClassName={headerStyles.active}
                                >
                                    Workshops
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/over-ons/"
                                    activeClassName={headerStyles.active}
                                >
                                    Over ons
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/anbi/"
                                    activeClassName={headerStyles.active}
                                >
                                    ANBI
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact/"
                                    activeClassName={headerStyles.active}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

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
                </div>

                <nav
                    className={`${headerStyles.mobile} ${
                        isOpen ? headerStyles.open : ""
                    }`}
                >
                    <ul className={headerStyles.mobileMenu}>
                        <li>
                            <Link to="/" activeClassName={headerStyles.active}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/workshops/"
                                activeClassName={headerStyles.active}
                            >
                                Workshops
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/over-ons/"
                                activeClassName={headerStyles.active}
                            >
                                Over Ons
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/anbi/"
                                activeClassName={headerStyles.active}
                            >
                                ANBI
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact/"
                                activeClassName={headerStyles.active}
                            >
                                Contact
                            </Link>
                        </li>

                        <ul className={headerStyles.mobileSocials}>
                            <li>
                                <a
                                    href="https://www.instagram.com/keepitrealkir"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i className="fab fa-instagram fa-2xl" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/profile.php?id=61559466671196"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i className="fab fa-facebook fa-2xl" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.tiktok.com/@keepitreal_nl"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i className="fab fa-tiktok fa-2xl" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/@keepitreal_de_podcast"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i className="fab fa-youtube fa-2xl" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://open.spotify.com/show/7wDDGz0HtXhn3WPCJ3KLcO?si=80196a51f4e4423d"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i className="fab fa-spotify fa-2xl" />
                                </a>
                            </li>
                        </ul>
                    </ul>
                </nav>

                <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
            </div>
        </header>
    );
};

export default Header;
