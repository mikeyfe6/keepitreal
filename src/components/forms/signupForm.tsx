import React, { useState } from "react";

import { navigate } from "gatsby";

import axios from "axios";

import * as formStyles from "../../styles/modules/forms/form.module.scss";

const SignUpForm: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        institution: "",
        contactPerson: "",
        phone: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>, form: HTMLFormElement | null) => {
        event.preventDefault();
        if (!form) return;
        setIsSubmitting(true);

        try {
            const encodedData = new URLSearchParams(new FormData(form) as any).toString();

            if (globalThis.location.hostname === "localhost") {
                console.log("Form data:", encodedData);
                alert("Form submission simulated (check console). ");
                setIsSubmitting(false);
                return;
            }

            await axios.post("/", encodedData, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            navigate("/success/");
        } catch (error) {
            console.error("Form submission error:", error);
            alert("Er is iets misgegaan bij het versturen van het formulier.");
        }

        setIsSubmitting(false);
    };

    return (
        <div className={formStyles.contactForm}>
            <form
                name="signup-form"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={(event) => handleSubmit(event, document.querySelector("form"))}
            >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="signup-form" />

                <div>
                    <label htmlFor="formFirstName">Voornaam</label>
                    <input
                        type="text"
                        name="firstName"
                        id="formFirstName"
                        autoComplete="given-name"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Voornaam *"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="formLastName">Achternaam</label>
                    <input
                        type="text"
                        name="lastName"
                        id="formLastName"
                        autoComplete="family-name"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Achternaam *"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="formInstitution">Verwijzende instantie</label>
                    <input
                        type="text"
                        name="institution"
                        id="formInstitution"
                        value={formData.institution}
                        onChange={handleChange}
                        placeholder="Verwijzende instantie"
                    />
                </div>
                <div>
                    <label htmlFor="formContactPerson">Contactpersoon</label>
                    <input
                        type="text"
                        name="contactPerson"
                        id="formContactPerson"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        placeholder="Contactpersoon"
                    />
                </div>
                <div>
                    <label htmlFor="formPhoneNr">Telefoonnummer</label>
                    <input
                        type="tel"
                        name="phone"
                        id="formPhoneNr"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Telefoonnummer"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="formEmail">E-mailadres</label>
                    <input
                        type="email"
                        name="email"
                        id="formEmail"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-mailadres *"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="formMessage">Bericht</label>
                    <textarea
                        name="message"
                        id="formMessage"
                        rows={7}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Toelichting aanmelding"
                    />
                </div>

                <p>
                    Na het indienen van de aanmelding ontvang je een bevestiging per e-mail. Vervolgens sturen wij een
                    officieel aanmeldformulier toe.
                </p>

                <div>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Versturen ..." : "Versturen"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;
