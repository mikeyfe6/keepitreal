import * as React from "react";

import type { HeadFC, PageProps } from "gatsby";

import Layout from "../components/layout";

import { Seo } from "../components/seo";

const SuccessPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <div>
                <h2>Bedankt! Je bericht is verzonden</h2>
                <p>We komen bij je terug!</p>
            </div>
        </Layout>
    );
};

export default SuccessPage;

export const Head: HeadFC = () => (
    <Seo title="Formulier verzonden!" pathname="/success/" noindex />
);
