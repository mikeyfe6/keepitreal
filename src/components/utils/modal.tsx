import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as modalStyles from "../../styles/modules/utils/modal.module.scss";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className={`${modalStyles.modalOverlay} modal`}
            onClick={handleBackdropClick}
        >
            <div className={modalStyles.modalContent}>
                <div className={modalStyles.modalHeader}>
                    <h2>{title}</h2>
                    <button onClick={onClose} aria-label="Sluit modal">
                        <FontAwesomeIcon icon="times" />
                    </button>
                </div>
                <div className={modalStyles.modalBody}>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
