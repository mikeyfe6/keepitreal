import React, { useState, useEffect } from "react";

import { Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSiteMetadata } from "../../hooks/use-site-metadata";

import Hamburger from "../layout/hamburger";

import * as headerStyles from "../../styles/modules/layout/header.module.scss";

const Header: React.FC = () => {
    const { facebookUrl, instagramUrl, tiktokUrl, youtubeUrl, spotifyUrl } =
        useSiteMetadata();

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
                isOpen ? "mobileMenu" : "desktopMenu"
            } ${isSticky ? headerStyles.isSticky : ""}`}
        >
            <div>
                <div className={headerStyles.logo}>
                    <Link to="/">
                        <StaticImage
                            src="../../images/logo/KIR-light-logo.png"
                            alt="Keep It Real Logo"
                        />
                    </Link>
                </div>

                <div className={headerStyles.desktop}>
                    <nav>
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
                                href={instagramUrl}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <FontAwesomeIcon
                                    icon={["fab", "instagram"]}
                                    size="xl"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href={facebookUrl}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <FontAwesomeIcon
                                    icon={["fab", "facebook"]}
                                    size="lg"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href={tiktokUrl}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <FontAwesomeIcon
                                    icon={["fab", "tiktok"]}
                                    size="lg"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href={youtubeUrl}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <FontAwesomeIcon
                                    icon={["fab", "youtube"]}
                                    size="lg"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href={spotifyUrl}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <FontAwesomeIcon
                                    icon={["fab", "spotify"]}
                                    size="lg"
                                />
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
                                    href={instagramUrl}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon
                                        icon={["fab", "instagram"]}
                                        size="2xl"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={facebookUrl}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon
                                        icon={["fab", "facebook"]}
                                        size="2xl"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={tiktokUrl}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon
                                        icon={["fab", "tiktok"]}
                                        size="2xl"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={youtubeUrl}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon
                                        icon={["fab", "youtube"]}
                                        size="2xl"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={spotifyUrl}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon
                                        icon={["fab", "spotify"]}
                                        size="2xl"
                                    />
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
