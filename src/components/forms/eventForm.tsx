import React, { useState } from "react";

import axios from "axios";

import * as formStyles from "../../styles/modules/forms/form.module.scss";

interface EventFormProps {
    onSuccess: () => void;
    eventName: string;
}

const EventForm: React.FC<EventFormProps> = ({ onSuccess, eventName }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        workshop: "",
        time: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("form-name", "kir-event");
            formDataToSend.append("name", formData.name);
            formDataToSend.append("email", formData.email);
            formDataToSend.append("workshop", formData.workshop);
            formDataToSend.append("time", formData.time);
            formDataToSend.append("event", eventName);

            if (window.location.hostname === "localhost") {
                console.log("Registration data:", {
                    ...formData,
                    event: eventName,
                });
                alert("Aanmelding gesimuleerd (check console).");
                onSuccess();
                return;
            }

            const encodedData = new URLSearchParams(
                formDataToSend as any
            ).toString();

            await axios.post("/", encodedData, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            try {
                await axios.post(
                    "/.netlify/functions/send-event-confirmation",
                    formDataToSend
                );
            } catch (emailError) {
                console.warn("Failed to send confirmation email:", emailError);
            }

            onSuccess();
        } catch (error) {
            console.error("Registration error:", error);
            setError(
                "Er is iets misgegaan bij de aanmelding. Probeer het opnieuw."
            );
            setTimeout(() => {
                setError("");
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={formStyles.eventForm}>
            <form
                name="kir-event"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
            >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="kir-event" />
                <input type="hidden" name="event" value={eventName} />

                <div>
                    <label htmlFor="name">Naam *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jouw volledige naam"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email">E-mailadres *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jouw@email.nl"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="workshop">Type workshop *</label>
                    <select
                        id="workshop"
                        name="workshop"
                        value={formData.workshop}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecteer een type workshop</option>
                        <option value="Schilderen en beeldende kunst">
                            Schilderen en beeldende kunst
                        </option>
                        <option value="Fashion en styling">
                            Fashion en styling
                        </option>
                        <option value="Muziek en teksten schrijven">
                            Muziek en teksten schrijven
                        </option>
                        <option value="Knutselen en creatieve vorming">
                            Knutselen en creatieve vorming
                        </option>
                    </select>
                </div>

                <div>
                    <fieldset>
                        <legend>Tijdsblok *</legend>
                        <div>
                            <div>
                                <input
                                    type="radio"
                                    id="timeBlock1"
                                    name="time"
                                    value="Tijdsblok 1 van 10:00 - 12:00"
                                    checked={
                                        formData.time ===
                                        "Tijdsblok 1 van 10:00 - 12:00"
                                    }
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="timeBlock1">
                                    Tijdsblok 1 van 10:00 - 12:00
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="timeBlock2"
                                    name="time"
                                    value="Tijdsblok 2 van 13:00 - 15:00"
                                    checked={
                                        formData.time ===
                                        "Tijdsblok 2 van 13:00 - 15:00"
                                    }
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="timeBlock2">
                                    Tijdsblok 2 van 13:00 - 15:00
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </div>

                {error && <div className={formStyles.error}>{error}</div>}

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Aanmelden..." : "Aanmelden"}
                </button>
            </form>
        </div>
    );
};

export default EventForm;
