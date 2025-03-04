import * as React from "react";

import type { HeadFC, PageProps } from "gatsby";

import Layout from "../components/layout";
import Form from "../components/form";
import Maps from "../components/maps";

import { Seo } from "../components/seo";

import * as contactStyles from "../styles/modules/pages/contact.module.scss";

const ContactPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <div className={contactStyles.contact}>
                <Form />
                <div>
                    <h3>Bezoekadres & postadres:</h3>
                    <h4>
                        <u>Stichting Keep It Real</u>
                    </h4>
                    <p>
                        Piet Heinkade 3, 1019 BR Amsterdam <br />
                        E-mail<span>:</span> Secretariaat@keeptreal.nl <br />
                        KvK<span>:</span> 94261237 <br />
                        Bank<span>:</span> ​NL77 ABNA 0136 1411 96
                    </p>

                    {/* <p>
						<span>Telefoonnummer:</span> 0612345678 <br />
						<span>E-mailadres:</span> test@keeptreal.nl
					</p> */}
                    <p>
                        We zijn bereikbaar van maandag t/m vrijdag van 9:00 tot
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

export const Head: HeadFC = () => (
    <Seo title="Neem Contact Op" pathname="/contact/" />
);
