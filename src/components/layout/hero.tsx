import React, { useRef, useState, useEffect } from "react";

import Player from "@vimeo/player";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "gatsby";

// import { StaticImage } from "gatsby-plugin-image";

import * as heroStyles from "../../styles/modules/layout/hero.module.scss";

const Hero: React.FC = () => {
    const playerRef = useRef<HTMLIFrameElement>(null);
    const [player, setPlayer] = useState<Player | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [loading, setLoading] = useState(true);
    const vimeoInitialized = useRef(false);

    useEffect(() => {
        if (playerRef.current) {
            const options = {
                id: 1074564963,
                loop: true,
                muted: false,
                background: false,
                responsive: true,
                controls: false,
            };

            const vimeoPlayer = new Player(playerRef.current, options);
            setPlayer(vimeoPlayer);

            vimeoPlayer.ready().then(() => {
                setLoading(false);

                vimeoPlayer
                    .getVolume()
                    .then((volume) => {
                        setIsMuted(volume === 0);
                    })
                    .catch((err) => {
                        console.warn("Volume check blocked:", err);
                    });
            });
        }
    }, []);

    const handlePlay = async () => {
        if (!player) return;
        try {
            if (!vimeoInitialized.current) {
                await player.setVolume(0);
                await player.setVolume(1);
                vimeoInitialized.current = true;
            }

            await player.play();
            setIsPlaying(true);
        } catch (error) {
            console.error("Error playing video:", error);
        }
    };

    const handlePause = async () => {
        if (!player) return;
        try {
            await player.pause();
            setIsPlaying(false);
        } catch (error) {
            console.error("Error pausing video:", error);
        }
    };

    const handleMute = async () => {
        if (!player) return;
        try {
            await player.setVolume(0);
            setIsMuted(true);
        } catch (error) {
            console.error("Error muting video:", error);
        }
    };

    const handleUnmute = async () => {
        if (!player) return;
        try {
            await player.setVolume(1);
            setIsMuted(false);
        } catch (error) {
            console.error("Error unmuting video:", error);
        }
    };

    const handleFullscreen = async () => {
        if (!player) return;
        try {
            await player.requestFullscreen();
        } catch (error) {
            console.error("Fullscreen request failed:", error);
        }
    };

    return (
        <section className={heroStyles.hero}>
            <div className={heroStyles.slogan}>
                <h1>
                    Welkom bij <strong>KEEP IT REAL</strong>. Een programma
                    waarin jongeren talenten ontdekken en we het onderwijs
                    verrijken met levenslessen.
                </h1>
                <div className={heroStyles.buttons}>
                    <Link to="/workshops/">Workshops</Link>
                    <Link to="/contact/">Contact</Link>
                </div>
            </div>

            <div className={heroStyles.line} />

            <div className={heroStyles.visual}>
                {/* <StaticImage
                    src="../../images/hero.jpeg"
                    alt="Keep It Real Hero Image"
                    objectPosition={"100% 62.5%"}
                /> */}

                {loading && (
                    <div className={heroStyles.spinner}>
                        <span />
                    </div>
                )}

                <div ref={playerRef} style={{ opacity: loading ? 0 : 1 }} />
                <div className={heroStyles.controls}>
                    <button onClick={handleFullscreen} title="Volledig Scherm">
                        <FontAwesomeIcon icon={"expand"} />
                    </button>
                    <button
                        onClick={isMuted ? handleUnmute : handleMute}
                        title="Geluid Aan/Uit"
                    >
                        <FontAwesomeIcon
                            icon={isMuted ? "volume-mute" : "volume-up"}
                        />
                    </button>
                    <button
                        onClick={isPlaying ? handlePause : handlePlay}
                        title="Afspelen/Pauzeren"
                    >
                        <FontAwesomeIcon icon={isPlaying ? "pause" : "play"} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
