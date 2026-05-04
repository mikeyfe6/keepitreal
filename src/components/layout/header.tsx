import React, { useState, useEffect } from "react";

import { Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSiteMetadata } from "../../hooks/use-site-metadata";

import Hamburger from "../layout/hamburger";

import * as headerStyles from "../../styles/modules/layout/header.module.scss";

const Header: React.FC = () => {
    const { facebookUrl, instagramUrl, tiktokUrl, youtubeUrl, spotifyUrl } = useSiteMetadata();

    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isWorkshopsOpen, setIsWorkshopsOpen] = useState(false);
    // const [isOffersOpen, setIsOffersOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleWorkshops = () => {
        setIsWorkshopsOpen(!isWorkshopsOpen);
    };

    // const toggleOffers = () => {
    //     setIsOffersOpen(!isOffersOpen);
    // };

    const closeMobileMenu = () => {
        setIsOpen(false);
        setIsWorkshopsOpen(false);
        // setIsOffersOpen(false);
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
                        <StaticImage src="../../images/logo/KIR-logo.png" alt="Keep It Real Logo" />
                    </Link>
                </div>

                <div className={headerStyles.desktop}>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/" activeClassName={headerStyles.active}>
                                    Home
                                </Link>
                            </li>

                            <li className={headerStyles.dropdown}>
                                <Link to="/workshops/" activeClassName={headerStyles.active}>
                                    Workshops
                                </Link>
                                <ul className={headerStyles.dropdownMenu}>
                                    <li>
                                        <Link to="/workshops/#codeswitching">Code Switching</Link>
                                    </li>
                                    <li>
                                        <Link to="/workshops/#teambuilding">Team Building X Genge Art</Link>
                                    </li>
                                    <li>
                                        <Link to="/workshops/#kenjezelf">Ken Jezelf</Link>
                                    </li>
                                    <li>
                                        <Link to="/workshops/#straatcodes">Straatcodes</Link>
                                    </li>
                                    <li>
                                        <Link to="/workshops/#tussen-de-straat-en-ik">Tussen de straat en ik </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* <li className={headerStyles.dropdown}>
                                <Link to="/#!" activeClassName={headerStyles.active} onClick={toggleOffers}>
                                    Aanbod
                                </Link>
                                <ul className={headerStyles.dropdownMenu}>
                                    <li>
                                        <Link to="/#!">Workshops jongeren</Link>
                                    </li>
                                    <li>
                                        <Link to="/#!">Trainingen professionals</Link>
                                    </li>
                                    <li>
                                        <Link to="/#!">Persoonlijke begeleiding</Link>
                                    </li>
                                    <li>
                                        <Link to="/#!">Op maat trajecten</Link>
                                    </li>
                                </ul>
                            </li> */}
                            <li>
                                <Link to="/over-ons/" activeClassName={headerStyles.active}>
                                    Over ons
                                </Link>
                            </li>
                            <li>
                                <Link to="/anbi/" activeClassName={headerStyles.active}>
                                    ANBI
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact/" activeClassName={headerStyles.active}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <ul>
                        <li>
                            <a href={instagramUrl} rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon icon={["fab", "instagram"]} size="xl" />
                            </a>
                        </li>
                        <li>
                            <a href={facebookUrl} rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon icon={["fab", "facebook"]} size="lg" />
                            </a>
                        </li>
                        <li>
                            <a href={tiktokUrl} rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon icon={["fab", "tiktok"]} size="lg" />
                            </a>
                        </li>
                        <li>
                            <a href={youtubeUrl} rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon icon={["fab", "youtube"]} size="lg" />
                            </a>
                        </li>
                        <li>
                            <a href={spotifyUrl} rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon icon={["fab", "spotify"]} size="lg" />
                            </a>
                        </li>
                    </ul>
                </div>

                <nav className={`${headerStyles.mobile} ${isOpen ? headerStyles.open : ""}`}>
                    <ul className={headerStyles.mobileMenu}>
                        <li>
                            <Link to="/" activeClassName={headerStyles.active}>
                                Home
                            </Link>
                        </li>
                        <li className={headerStyles.mobileDropdown}>
                            <div className={headerStyles.mobileDropdownToggle}>
                                <Link to="/workshops/" activeClassName={headerStyles.active}>
                                    Workshops
                                </Link>
                                <button
                                    onClick={toggleWorkshops}
                                    aria-label="Open workshops submenu"
                                    aria-expanded={isWorkshopsOpen}
                                    className={`${headerStyles.mobileChevron} ${
                                        isWorkshopsOpen ? headerStyles.mobileChevronOpen : ""
                                    }`}
                                >
                                    <FontAwesomeIcon icon={"chevron-down"} />
                                </button>
                            </div>
                            {isWorkshopsOpen && (
                                <ul className={headerStyles.mobileSubmenu}>
                                    <li>
                                        <Link to="/workshops/#codeswitching" onClick={closeMobileMenu}>
                                            Code Switching
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/workshops/#teambuilding" onClick={closeMobileMenu}>
                                            Team Building X Genge Art
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/workshops/#kenjezelf" onClick={closeMobileMenu}>
                                            Ken Jezelf
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/workshops/#straatcodes" onClick={closeMobileMenu}>
                                            Straatcodes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/workshops/#tussen-de-straat-en-ik" onClick={closeMobileMenu}>
                                            Tussen de straat en ik
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        {/* <li className={headerStyles.mobileDropdown}>
                            <div className={headerStyles.mobileDropdownToggle}>
                                <Link to="/#!" activeClassName={headerStyles.active}>
                                    Aanbod
                                </Link>
                                <button
                                    onClick={toggleOffers}
                                    aria-label="Open aanbod submenu"
                                    aria-expanded={isOffersOpen}
                                    className={`${headerStyles.mobileChevron} ${
                                        isOffersOpen ? headerStyles.mobileChevronOpen : ""
                                    }`}
                                >
                                    <FontAwesomeIcon icon={"chevron-down"} />
                                </button>
                            </div>
                            {isOffersOpen && (
                                <ul className={headerStyles.mobileSubmenu}>
                                    <li>
                                        <Link to="/#!" onClick={closeMobileMenu}>
                                            Workshops jongeren
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/#!" onClick={closeMobileMenu}>
                                            Trainingen professionals
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/#!" onClick={closeMobileMenu}>
                                            Persoonlijke begeleiding
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/#!" onClick={closeMobileMenu}>
                                            Op maat trajecten
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li> */}
                        <li>
                            <Link to="/over-ons/" activeClassName={headerStyles.active}>
                                Over Ons
                            </Link>
                        </li>
                        <li>
                            <Link to="/anbi/" activeClassName={headerStyles.active}>
                                ANBI
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact/" activeClassName={headerStyles.active}>
                                Contact
                            </Link>
                        </li>

                        <ul className={headerStyles.mobileSocials}>
                            <li>
                                <a href={instagramUrl} rel="noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={["fab", "instagram"]} size="2xl" />
                                </a>
                            </li>
                            <li>
                                <a href={facebookUrl} rel="noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={["fab", "facebook"]} size="2xl" />
                                </a>
                            </li>
                            <li>
                                <a href={tiktokUrl} rel="noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={["fab", "tiktok"]} size="2xl" />
                                </a>
                            </li>
                            <li>
                                <a href={youtubeUrl} rel="noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={["fab", "youtube"]} size="2xl" />
                                </a>
                            </li>
                            <li>
                                <a href={spotifyUrl} rel="noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={["fab", "spotify"]} size="2xl" />
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
