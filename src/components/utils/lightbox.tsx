import React, { useState } from "react";

import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

import * as styles from "../../styles/modules/utils/lightbox.module.scss";

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

    const imageData = image ? getImage(image) : null;

    // TODO: sizes implementeren in parameter

    return (
        <>
            {imageData && (
                <div onClick={openModal} className={styles.lightboxThumbnail}>
                    <GatsbyImage image={imageData} alt={alt} />
                </div>
            )}

            {isModalOpen && imageData && (
                <div
                    className={`${styles.lightboxModal} modal`}
                    data-main-modal
                >
                    <div className={styles.lightboxContent}>
                        <span
                            className={styles.lightboxClose}
                            onClick={closeModal}
                        >
                            &times;
                        </span>
                        {imageData && (
                            <div onClick={openModal}>
                                <GatsbyImage
                                    image={imageData}
                                    alt={alt}
                                    className={styles.lightboxImage}
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
