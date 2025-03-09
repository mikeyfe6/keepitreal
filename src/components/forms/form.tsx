import * as React from "react";

import { navigate } from "gatsby";

import axios from "axios";

import * as formStyles from "../../styles/modules/forms/form.module.scss";

const Form: React.FC = () => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
            const encodedData = new URLSearchParams(formData as any).toString();

            if (window.location.hostname === "localhost") {
                console.log("Form data:", encodedData);
                alert("Form submission simulated (check console).");
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
    };

    return (
        <div className={formStyles.form}>
            <div>
                <h2>Vul hieronder je gegevens in</h2>
                <p>En we komen spoedig met je in contact!</p>
            </div>

            <form
                name="kir-form"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                // data-netlify-recaptcha="true"
                onSubmit={handleSubmit}
            >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="kir-form" />

                <div>
                    <label htmlFor="formFirstName">Voornaam</label>
                    <input
                        type="text"
                        name="firstName"
                        id="formFirstName"
                        placeholder="Voornaam"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="formLastName">Achternaam</label>
                    <input
                        type="text"
                        name="lastName"
                        id="formLastName"
                        placeholder="Achternaam"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="formCompany">Bedrijfsnaam</label>
                    <input
                        type="text"
                        name="company"
                        id="formCompany"
                        placeholder="Bedrijfsnaam"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="formPhoneNr">Telefoonnummer</label>
                    <input
                        type="tel"
                        name="phone"
                        id="formPhoneNr"
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
                        placeholder="E-mailadres"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="formMessage">Bericht</label>
                    <textarea
                        name="message"
                        id="formMessage"
                        rows={7}
                        placeholder="Bericht"
                        required
                    />
                </div>
                {/* <div data-netlify-recaptcha="true" /> */}
                <div>
                    <button type="submit">Versturen</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
