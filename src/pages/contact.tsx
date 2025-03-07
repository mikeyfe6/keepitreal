import * as React from "react";

import type { HeadFC, PageProps } from "gatsby";

import Layout from "../components/layout";
import Form from "../components/forms/form";
import Maps from "../components/ui/maps";

import { Seo } from "../components/seo";

import * as contactStyles from "../styles/modules/pages/contact.module.scss";

const ContactPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <div className={contactStyles.contact}>
                <Form />
                <div>
                    <h3>Bezoekadres & postadres:</h3>
                    <h5>
                        <u>Stichting Keep It Real</u>
                    </h5>

                    <p>
                        Piet Heinkade 3 <br /> 1019 BR Amsterdam
                    </p>

                    <p>
                        E-mail<span>:</span>
                        <br />
                        <a href="mailto:secretariaat@keeptreal.nl">
                            secretariaat@keeptreal.nl
                        </a>
                    </p>

                    <p>
                        KvK<span>:</span>
                        <br />
                        94261237
                    </p>

                    <p>
                        Bank<span>:</span> <br />
                        NL77 ABNA 0136 1411 96
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

export const Head: HeadFC = () => <Seo title="Contact" pathname="/contact/" />;
