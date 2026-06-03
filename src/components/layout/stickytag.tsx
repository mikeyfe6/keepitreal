import React, { useEffect, useRef, useState } from "react";

import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as stickyTagStyles from "../../styles/modules/layout/stickytag.module.scss";

const StickyTag: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [openScrollY, setOpenScrollY] = useState<number | null>(null);
    const [footerOffset, setFooterOffset] = useState(0);
    const [isMobileViewport, setIsMobileViewport] = useState(false);
    const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const inactivityTimeout = 3500;
    const scrollThreshold = 150;

    const clearCloseTimeout = () => {
        if (closeTimeoutRef.current) {
            globalThis.clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
    };

    const closeStickyTag = () => {
        setIsExpanded(false);
        setOpenScrollY(null);
        clearCloseTimeout();
    };

    const scheduleCloseAfterInactivity = () => {
        if (!isExpanded) {
            return;
        }

        clearCloseTimeout();
        closeTimeoutRef.current = globalThis.setTimeout(() => {
            closeStickyTag();
        }, inactivityTimeout);
    };

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
            if (Math.abs(globalThis.scrollY - openScrollY) >= scrollThreshold) {
                setIsExpanded(false);
                setOpenScrollY(null);
            }
        };

        globalThis.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            globalThis.removeEventListener("scroll", handleScroll);
        };
    }, [isExpanded, openScrollY]);

    useEffect(() => {
        if (!isExpanded) {
            clearCloseTimeout();
        }

        return () => {
            clearCloseTimeout();
        };
    }, [isExpanded]);

    useEffect(() => {
        const mediaQuery = globalThis.matchMedia("(max-width: 63.99em)");

        const updateViewport = () => {
            setIsMobileViewport(mediaQuery.matches);
        };

        updateViewport();
        mediaQuery.addEventListener("change", updateViewport);

        return () => {
            mediaQuery.removeEventListener("change", updateViewport);
        };
    }, []);

    useEffect(() => {
        if (!isMobileViewport) {
            setFooterOffset(0);
            return;
        }

        const updateFooterOffset = () => {
            const footerElement = document.querySelector("footer");

            if (!footerElement) {
                setFooterOffset(0);
                return;
            }

            const footerRect = footerElement.getBoundingClientRect();
            const overlap = globalThis.innerHeight - footerRect.top;
            setFooterOffset(Math.max(overlap, 0));
        };

        updateFooterOffset();

        globalThis.addEventListener("scroll", updateFooterOffset, { passive: true });
        globalThis.addEventListener("resize", updateFooterOffset);

        return () => {
            globalThis.removeEventListener("scroll", updateFooterOffset);
            globalThis.removeEventListener("resize", updateFooterOffset);
        };
    }, [isMobileViewport]);

    const stickyTagStyle =
        isMobileViewport && footerOffset > 0 ?
            {
                top: "auto",
                bottom: `${footerOffset + 16}px`,
                transform: "none",
            }
        :   undefined;

    return (
        <div
            className={`${stickyTagStyles.stickyTag} ${isExpanded ? stickyTagStyles.expanded : ""}`}
            style={stickyTagStyle}
            onMouseEnter={clearCloseTimeout}
            onMouseLeave={scheduleCloseAfterInactivity}
            onFocusCapture={clearCloseTimeout}
            onBlurCapture={scheduleCloseAfterInactivity}
        >
            <div className={stickyTagStyles.stickyTagWrapper} id="sticky-tag-cta">
                <Link
                    to="/persoonlijke-begeleiding/"
                    onClick={() => {
                        closeStickyTag();
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
