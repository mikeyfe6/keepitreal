import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

import Header from "./layout/header";
import Hero from "./layout/hero";
import Footer from "./layout/footer";

import ResponsiveTag from "./helpers/respoTag";

import "../styles/layout.scss";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div className="keep-it-real">
                <Header />
                <Hero />
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
