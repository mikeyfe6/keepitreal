import * as React from "react";

import { HeadFC, PageProps, Link } from "gatsby";

import Layout from "../components/layout";

import { Seo } from "../components/seo";

const SuccessPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <div>
                <h1>Bedankt! Je bericht is verzonden</h1>
                <p>We komen bij je terug!</p>
                <br />
                <br />
                <Link to="/">
                    <u>Ga naar de homepage</u>
                </Link>
            </div>
        </Layout>
    );
};

export default SuccessPage;

export const Head: HeadFC = () => (
    <Seo title="Formulier verzonden!" pathname="/success/" noindex />
);
