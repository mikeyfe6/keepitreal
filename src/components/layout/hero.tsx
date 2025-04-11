import React, { useRef, useState, useEffect } from "react";

import Player from "@vimeo/player";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "gatsby";

// import { StaticImage } from "gatsby-plugin-image";

import * as heroStyles from "../../styles/modules/layout/hero.module.scss";

const Hero: React.FC = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [player, setPlayer] = useState<Player | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [loading, setLoading] = useState(true);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (iframeRef.current) {
            const options = {
                id: 1074564963,
                loop: true,
                muted: false,
                background: false,
                responsive: true,
                controls: false,
            };

            const vimeoPlayer = new Player(iframeRef.current, options);
            setPlayer(vimeoPlayer);

            vimeoPlayer.ready().then(() => {
                setLoading(false);
                setIsReady(true);
            });

            vimeoPlayer.getVolume().then((volume) => {
                setIsMuted(volume === 0);
            });
        }
    }, []);

    const handlePlayPause = async () => {
        if (player && isReady) {
            const currentlyPaused = await player.getPaused();
            if (currentlyPaused) {
                player.play();
                setIsPlaying(true);
            } else {
                player.pause();
                setIsPlaying(false);
            }
        }
    };

    const handleMuteUnmute = async () => {
        if (player && isReady) {
            const currentlyMuted = (await player.getVolume()) === 0;
            if (currentlyMuted) {
                player.setVolume(1);
                setIsMuted(false);
            } else {
                player.setVolume(0);
                setIsMuted(true);
            }
        }
    };

    const handleFullscreen = () => {
        if (player && isReady) {
            player.requestFullscreen();
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

                <div ref={iframeRef} style={{ opacity: loading ? 0 : 1 }} />

                <div className={heroStyles.controls}>
                    <button onClick={handleFullscreen} title="Volledig Scherm">
                        <FontAwesomeIcon icon={"expand"} />
                    </button>
                    <button onClick={handleMuteUnmute} title="Geluid Aan/Uit">
                        <FontAwesomeIcon
                            icon={isMuted ? "volume-mute" : "volume-up"}
                        />
                    </button>
                    <button onClick={handlePlayPause} title="Afspelen/Pauzeren">
                        <FontAwesomeIcon icon={isPlaying ? "pause" : "play"} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
