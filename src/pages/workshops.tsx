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
                        Onze workshops KIR biedt verschillende workshops die aansluiten bij de leefwereld en behoeften
                        van jongeren, ouders, scholen en professionals. De workshops zijn praktisch, interactief en
                        gericht op bewustwording, ontwikkeling en het versterken van vaardigheden. Een belangrijk
                        onderdeel van KIR is de inzet van ervaringsdeskundigen. Vanuit hun eigen ervaringen brengen zij
                        herkenning, kennis en een ander perspectief mee. Hierdoor ontstaat ruimte voor open gesprekken,
                        nieuwe inzichten en leren vanuit de praktijk.
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
