import * as React from "react";

import { navigate } from "gatsby";

import axios from "axios";

import * as formStyles from "../../styles/modules/forms/form.module.scss";

const Form: React.FC = () => {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        company: "",
        phone: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>,
        form: HTMLFormElement | null
    ) => {
        event.preventDefault();
        if (!form) return;
        setIsSubmitting(true);

        try {
            const encodedData = new URLSearchParams(
                new FormData(form) as any
            ).toString();

            if (window.location.hostname === "localhost") {
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
        <div className={formStyles.form}>
            <div>
                <h2>Vul hieronder je gegevens in</h2>
                <p>En we komen spoedig met je in contact!</p>
            </div>

            <form
                name="kir-form"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={(event) =>
                    handleSubmit(event, document.querySelector("form"))
                }
            >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="kir-form" />

                <div>
                    <label htmlFor="formFirstName">Voornaam</label>
                    <input
                        type="text"
                        name="firstName"
                        id="formFirstName"
                        placeholder="Voornaam *"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="formLastName">Achternaam</label>
                    <input
                        type="text"
                        name="lastName"
                        id="formLastName"
                        placeholder="Achternaam *"
                        value={formData.lastName}
                        onChange={handleChange}
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
                        value={formData.company}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="formPhoneNr">Telefoonnummer</label>
                    <input
                        type="tel"
                        name="phone"
                        id="formPhoneNr"
                        placeholder="Telefoonnummer"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="formEmail">E-mailadres</label>
                    <input
                        type="email"
                        name="email"
                        id="formEmail"
                        placeholder="E-mailadres *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="formMessage">Bericht</label>
                    <textarea
                        name="message"
                        id="formMessage"
                        rows={7}
                        placeholder="Bericht *"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Versturen ..." : "Versturen"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
