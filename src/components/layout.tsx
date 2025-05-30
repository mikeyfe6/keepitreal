import * as React from "react";

import { useLocation } from "@reach/router";

import { StaticImage } from "gatsby-plugin-image";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faXmark,
    faSquareArrowUpRight,
    faHandHoldingHand,
    faPeopleArrows,
    faHandshake,
    faUsers,
    faPersonChalkboard,
    faUsersViewfinder,
    faLanguage,
    faRightLong,
    faSquareEnvelope,
    faPlay,
    faPause,
    faVolumeMute,
    faVolumeUp,
    faExpand,
} from "@fortawesome/free-solid-svg-icons";

import {
    faInstagram,
    faFacebook,
    faTiktok,
    faYoutube,
    faSpotify,
} from "@fortawesome/free-brands-svg-icons";

library.add(
    faInstagram,
    faFacebook,
    faTiktok,
    faYoutube,
    faSpotify,
    faXmark,
    faSquareArrowUpRight,
    faHandHoldingHand,
    faPeopleArrows,
    faHandshake,
    faUsers,
    faPersonChalkboard,
    faUsersViewfinder,
    faLanguage,
    faRightLong,
    faSquareEnvelope,
    faPlay,
    faPause,
    faVolumeMute,
    faVolumeUp,
    faExpand
);

import Header from "./layout/header";
import Hero from "./layout/hero";
import Footer from "./layout/footer";

import ResponsiveTag from "./helpers/respoTag";

import "../styles/layout.scss";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { pathname } = useLocation();

    return (
        <>
            <div className="keep-it-real">
                <Header />
                {pathname === "/" && <Hero />}
                <main>{children}</main>
                <div className="keep-it-real__logo">
                    <StaticImage
                        src="../images/logo/KIR-light-icon.png"
                        alt="Keep It Real Transparent Logo"
                    />
                </div>
                <Footer />
            </div>

            {process.env.NODE_ENV === "development" && <ResponsiveTag />}
        </>
    );
};

export default Layout;
