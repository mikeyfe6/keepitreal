import * as React from "react";

import type { HeadFC, PageProps } from "gatsby";

import { useSiteMetadata } from "../hooks/use-site-metadata";

import Layout from "../components/layout";
import ContactForm from "../components/forms/contactForm";
import Maps from "../components/ui/maps";

import { Seo } from "../components/seo";

import * as contactStyles from "../styles/modules/pages/contact.module.scss";

const ContactPage: React.FC<PageProps> = () => {
    const {
        companyName,
        facility,
        street,
        postalCode,
        city,
        mailingStreet,
        mailingPostalcode,
        mailingCity,
        email,
        kvk,
        bank,
    } = useSiteMetadata();

    return (
        <Layout>
            <div className={contactStyles.contact}>
                <ContactForm />
                <div>
                    <h3>
                        <u>{companyName}</u>
                    </h3>
                    <h4>
                        Bezoekadres<span>:</span>
                    </h4>
                    <p>
                        {facility} <br />
                        {street} <br />
                        {postalCode} {city}
                    </p>

                    <h4>
                        Postadres<span>:</span>
                    </h4>
                    <p>
                        {mailingStreet} <br />
                        {mailingPostalcode} {mailingCity}
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

export const Head: HeadFC = () => (
    <Seo
        title="Contact"
        pathname="/contact/"
        description="Neem contact op met Stichting Keep It Real in Amsterdam. Voor vragen over onze workshops, samenwerkingen of ANBI-projecten kunt u ons bereiken via het contactformulier, e-mail of telefoon."
    />
);
