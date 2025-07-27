import React, { useState } from "react";

import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

import * as lightBoxStyles from "../../styles/modules/utils/lightbox.module.scss";

const LightBox = ({
    image,
    alt,
}: {
    image: IGatsbyImageData | undefined;
    alt: string;
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const imageData = image ? getImage(image) : null;

    // TODO: sizes implementeren in parameter

    return (
        <>
            {imageData && (
                <div
                    onClick={openModal}
                    className={lightBoxStyles.lightboxThumbnail}
                >
                    <GatsbyImage image={imageData} alt={alt} />
                </div>
            )}

            {isModalOpen && imageData && (
                <div
                    className={`${lightBoxStyles.lightboxModal} modal`}
                    data-main-modal
                    onClick={handleBackdropClick}
                >
                    <div className={lightBoxStyles.lightboxContent}>
                        <span
                            className={lightBoxStyles.lightboxClose}
                            onClick={closeModal}
                        >
                            &times;
                        </span>
                        {imageData && (
                            <div onClick={openModal}>
                                <GatsbyImage
                                    image={imageData}
                                    alt={alt}
                                    className={lightBoxStyles.lightboxImage}
                                    objectFit="contain"
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default LightBox;
