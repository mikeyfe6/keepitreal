import * as React from "react";

import type { HeadFC, PageProps } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Layout from "../components/layout";
import SignUpForm from "../components/forms/signupForm";

import { Seo } from "../components/seo";

import * as signupStyles from "../styles/modules/pages/signup.module.scss";

const ContactPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <div className={signupStyles.contact}>
                <div>
                    <h2>Wil je een jongere of deelnemer aanmelden bij Keep It Real?</h2>
                    <h3>Vul het aanmeldformulier in. Wij nemen zo snel mogelijk contact op.</h3>
                    <p>
                        Voor vragen over een aanmelding of informatie over persoonlijke begeleiding kun je contact
                        opnemen via: <br />
                        <br /> <FontAwesomeIcon icon="envelope" size="lg" />{" "}
                        <a href="mailto:charity@keeptreal.nl">
                            <b>charity@keeptreal.nl</b>
                        </a>
                    </p>
                </div>
                <SignUpForm />
            </div>
        </Layout>
    );
};

export default ContactPage;

export const Head: HeadFC = () => (
    <Seo
        title="Aanmeldformulier persoonlijke begeleiding"
        pathname="/persoonlijke-begeleiding/"
        description="Meld een jongere of deelnemer aan voor persoonlijke begeleiding bij Keep It Real. Vul het aanmeldformulier in en wij nemen zo snel mogelijk contact op."
    />
);
