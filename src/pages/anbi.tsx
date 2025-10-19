import * as React from "react";

import type { HeadFC, PageProps } from "gatsby";

import Layout from "../components/layout";

import { Seo } from "../components/seo";

import * as anbiStyles from "../styles/modules/pages/anbi.module.scss";

const AnbiPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <section className={anbiStyles.anbi}>
                <div>
                    <h1>Doelstelling: Stichting Keep It Real</h1>
                    <p>
                        Stichting Keep It Real is een culturele instelling die
                        zich richt op het bevorderen van de maatschappelijke en
                        culturele participatie van jongeren, evenals hun
                        culturele en artistieke ontwikkeling.
                    </p>

                    <br />
                    <h2>De organisatie heeft als doel:</h2>
                    <ul>
                        <li>
                            Sponsorgelden en giften aanvragen en uitbesteden aan
                            projecten onder de naam van de Stichting Keep It
                            Real.
                        </li>
                        <li>
                            Het organiseren van activiteiten die bijdragen aan
                            de maatschappelijke en culturele participatie van
                            jongeren.
                        </li>
                        <li>
                            Het initiëren en stimuleren van projecten die
                            jongeren ondersteunen in hun ontwikkeling.
                        </li>
                        <li>
                            Samenwerken met organisaties en instellingen met
                            vergelijkbare of complementaire doelstellingen.
                        </li>
                    </ul>

                    <br />
                    <h2>
                        <u>Algemene gegevens</u>
                    </h2>
                    <p>
                        <strong>Naam ANBI:</strong> Stichting Keep It Real{" "}
                        <br />
                        <strong>RSIN:</strong> Niet bekend <br />
                    </p>

                    <br />
                    <h3>Bezoekadres:</h3>
                    <p>
                        De Ster <br />
                        Woudrichemstraat 8<br />
                        1107 NG Amsterdam
                    </p>

                    <br />
                    <h3>Postadres:</h3>
                    <p>
                        Piet Heinkade 3 <br />
                        1019 BR Amsterdam
                    </p>

                    <br />
                    <h2>
                        <u>Bestuur</u>
                    </h2>
                    <p>
                        <strong>Voorzitter:</strong> Mijke Daphne Loeven <br />
                        <strong>Secretaris:</strong> Dansowaa Asamoah <br />
                        <strong>Penningmeester:</strong> Joachim Pieter
                        Junghanss <br />
                    </p>

                    <br />
                    <h2>
                        <u>Beleidsplan</u>
                    </h2>
                    <h3>Hoofdlijnen van het beleidsplan:</h3>
                    <ol>
                        <li>
                            De stichting heeft ten doel het bevorderen van de
                            maatschappelijke en culturele participatie van
                            jongeren, evenals hun culturele en artistieke
                            ontwikkeling.
                        </li>
                        <li>
                            De stichting tracht haar doel onder meer te bereiken
                            door:
                            <ul>
                                <li>
                                    Het organiseren van activiteiten die
                                    bijdragen aan de doelstellingen.
                                </li>
                                <li>
                                    Het initiëren en stimuleren van projecten.
                                </li>
                                <li>
                                    Samenwerken met vergelijkbare organisaties
                                    en instellingen.
                                </li>
                            </ul>
                        </li>
                    </ol>

                    <h2>
                        <u>Beloningsbeleid</u>
                    </h2>
                    <p>
                        <strong>Bestuur:</strong> Bestuurders kunnen recht
                        hebben op vergoeding van gemaakte kosten en een niet
                        bovenmatig vacatiegeld voor hun werkzaamheden. <br />
                        <strong>Personeel:</strong> CAO niet van toepassing.
                    </p>
                </div>
            </section>
        </Layout>
    );
};

export default AnbiPage;

export const Head: HeadFC = () => (
    <Seo
        title="ANBI"
        pathname="/anbi/"
        description="Stichting Keep It Real is een culturele ANBI die jongeren ondersteunt in hun maatschappelijke, culturele en artistieke ontwikkeling via projecten en workshops."
    />
);
