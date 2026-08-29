import * as React from "react";

import { Link } from "@reach/router";

import type { HeadFC, PageProps } from "gatsby";

import Layout from "../components/layout";

import { Seo } from "../components/seo";

import * as workshopStyles from "../styles/modules/pages/workshops.module.scss";

const WorkshopsPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <div className={workshopStyles.workshops} id="workshops">
                <div>
                    <h1>Onze workshops</h1>
                    <p>
                        Keep It Real biedt verschillende preventieve workshops die aansluiten bij de leefwereld en
                        behoeften van jongeren, scholen en professionals. Het doel van de workshops is om bewustwording
                        te vergroten, vaardigheden te versterken en jongeren en hun omgeving handvatten te bieden om
                        vroegtijdig signalen en risico’s te herkennen en hierop te handelen. De workshops zijn
                        praktisch, interactief, gericht op ontwikkeling, reflectie en het stimuleren van gesprekken.
                    </p>
                </div>
                <div>
                    <Link to="/workshops/aanbod-scholen/">Bekijk ons workshopaanbod voor scholen</Link>
                    <Link to="/workshops/aanbod-professionals/">Bekijk ons workshopaanbod voor professionals</Link>
                </div>
            </div>
        </Layout>
    );
};

export default WorkshopsPage;

export const Head: HeadFC = () => (
    <Seo
        title="Workshops"
        pathname="/workshops/"
        description="Keep It Real biedt workshops voor professionals die met jongeren werken. Met focus op kunst, cultuur en straatcodes geven we inzicht in de leefwereld van jongeren."
    />
);
