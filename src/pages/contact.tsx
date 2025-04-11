import * as React from "react";

import type { HeadFC, PageProps } from "gatsby";

import { useSiteMetadata } from "../hooks/use-site-metadata";

import Layout from "../components/layout";
import Form from "../components/forms/form";
import Maps from "../components/ui/maps";

import { Seo } from "../components/seo";

import * as contactStyles from "../styles/modules/pages/contact.module.scss";

const ContactPage: React.FC<PageProps> = () => {
    const { companyName, address, postalCode, city, email, kvk, bank } =
        useSiteMetadata();

    return (
        <Layout>
            <div className={contactStyles.contact}>
                <Form />
                <div>
                    <h3>Bezoekadres & postadres:</h3>
                    <h5>
                        <u>{companyName}</u>
                    </h5>

                    <p>
                        {address} <br /> {postalCode} {city}
                    </p>

                    <p>
                        <b>E-mail</b>
                        <span>:</span>
                        <br />
                        <a href={`mailto:${email}`}>{email}</a>
                    </p>

                    <p>
                        <b>KvK</b>
                        <span>:</span>
                        <br />
                        {kvk}
                    </p>

                    <p>
                        <b>Bank</b>
                        <span>:</span> <br />
                        {bank}
                    </p>

                    {/* <p>
						<span>Telefoonnummer:</span> 0612345678 <br />
						<span>E-mailadres:</span> test@keeptreal.nl
					</p> */}
                    <p>
                        <b> We zijn bereikbaar van</b>
                        <span>:</span> <br /> maandag t/m vrijdag van 9:00 tot
                        17:00
                    </p>
                    {/* <p>
						<strong>KvK:</strong> 12345678 <br /> <strong>BTW:</strong>{' '}
						NL123456789B01
					</p> */}
                    <Maps />
                </div>
            </div>
        </Layout>
    );
};

export default ContactPage;

export const Head: HeadFC = () => <Seo title="Contact" pathname="/contact/" />;
