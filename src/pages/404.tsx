import * as React from "react";

import { HeadFC, PageProps, Link } from "gatsby";

import Layout from "../components/layout";

import { Seo } from "../components/seo";

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <div>
                <h1>Pagina niet gevonden...</h1>
                <br />
                <Link to="/">
                    <u>Ga naar de homepage</u>
                </Link>
            </div>
        </Layout>
    );
};

export default NotFoundPage;

export const Head: HeadFC = () => (
    <Seo title="Pagina niet gevonden" pathname="/404/" noindex />
);
