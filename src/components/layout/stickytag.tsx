import React, { useEffect, useState } from "react";

import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as stickyTagStyles from "../../styles/modules/layout/stickytag.module.scss";

const StickyTag: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [openScrollY, setOpenScrollY] = useState<number | null>(null);

    const toggleExpanded = () => {
        setIsExpanded((prev) => {
            const nextExpanded = !prev;

            if (nextExpanded) {
                setOpenScrollY(globalThis.scrollY);
            } else {
                setOpenScrollY(null);
            }

            return nextExpanded;
        });
    };

    useEffect(() => {
        if (!isExpanded || openScrollY === null) {
            return;
        }

        const handleScroll = () => {
            if (Math.abs(globalThis.scrollY - openScrollY) >= 100) {
                setIsExpanded(false);
                setOpenScrollY(null);
            }
        };

        globalThis.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            globalThis.removeEventListener("scroll", handleScroll);
        };
    }, [isExpanded, openScrollY]);

    return (
        <div className={`${stickyTagStyles.stickyTag} ${isExpanded ? stickyTagStyles.expanded : ""}`}>
            <div className={stickyTagStyles.stickyTagWrapper} id="sticky-tag-cta">
                <Link
                    to="/persoonlijke-begeleiding/"
                    onClick={() => {
                        setIsExpanded(false);
                        setOpenScrollY(null);
                    }}
                >
                    <b>Aanmelden persoonlijke begeleiding</b>
                </Link>

                <button
                    type="button"
                    onClick={toggleExpanded}
                    aria-expanded={isExpanded}
                    aria-controls="sticky-tag-cta"
                    aria-label={isExpanded ? "Sluit aanmeldknop" : "Open aanmeldknop"}
                >
                    <FontAwesomeIcon icon="chevron-right" size="lg" />
                </button>
            </div>
        </div>
    );
};

export default StickyTag;
