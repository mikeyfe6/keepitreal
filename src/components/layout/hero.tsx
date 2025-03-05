import React from "react";

import { Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

import * as heroStyles from "../../styles/modules/layout/hero.module.scss";

const Hero: React.FC = () => {
    return (
        <section className={heroStyles.hero}>
            <div className={heroStyles.slogan}>
                <h1>
                    Welkom bij <strong>KEEP IT REAL</strong>. Een programma
                    waarin jongeren talenten ontdekken en we het onderwijs
                    verrijken met levenslessen.
                </h1>
                <div className={heroStyles.buttons}>
                    <Link to="/workshops/">Workshops</Link>
                    <Link to="/contact/">Contact</Link>
                </div>
            </div>

            <div className={heroStyles.line} />

            <div className={heroStyles.image}>
                <StaticImage
                    src="../../images/hero.jpeg"
                    alt="Keep It Real Hero Image"
                    objectPosition={"100% 62.5%"}
                />
            </div>
        </section>
    );
};

export default Hero;
