"use client";
import { usePathname } from "next/navigation";
import { createContext, useContext, useState, useRef, useEffect } from "react";

interface AudioContextType {
    isPlaying: boolean;
    isMuted: boolean;
    backgroundAudioSrc: string;
    playBackgroundMusic: () => void;
    pauseBackgroundMusic: () => void;
    toggleMute: () => void;
    setBackgroundAudioSrc: (src: string) => void; // Function to update the audio source
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const pathname = usePathname(); // Get current route
    const [backgroundAudioSrc, setBackgroundAudioSrc] = useState("./songs/bgm1.mp3"); // Default BGM


    // useEffect(() => {
    //     if (audioRef.current) {
    //         audioRef.current.muted = isMuted;
    //     }
    // }, [isMuted]);

    // const playBackgroundMusic = () => {
    //     if (audioRef.current && !isPlaying) {
    //         audioRef.current.play();
    //         setIsPlaying(true);
    //     }
    // };

    // const pauseBackgroundMusic = () => {
    //     if (audioRef.current && isPlaying) {
    //         audioRef.current.pause();
    //         setIsPlaying(false);
    //     }
    // };

    // const toggleMute = () => {
    //     setIsMuted((prev) => !prev);
    // };


    const playBackgroundMusic = () => {
        if (audioRef.current && !isMuted) {
            if (!isPlaying) {
                audioRef.current.play();
                setIsPlaying(true);
            } else {
                audioRef.current.load();
                audioRef.current.play();
            }
        }
    };

    const pauseBackgroundMusic = () => {
        if (audioRef.current && isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const toggleMute = () => {
        setIsMuted((prev) => !prev);
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            if (isMuted) {
                audioRef.current.play();
            }
            // if (isMuted) {
            //     if(pathname === "/complete"){
            //         audioRef.current.src = "./soundeffects/winningsound.mp3";
            //     }else{
            //         audioRef.current.src = "./songs/bgm1.mp3";
            //     }
            //     audioRef.current.muted = !isMuted; // Mute/unmute audio globally
            //     audioRef.current.play(); // Ensure the correct music starts after unmute
            // } else{
            //     audioRef.current.muted = !isMuted;
            //     // audioRef.current.play();
            // }
        }
    };

    // Whenever the audio source changes, update the audio element
    // useEffect(() => {
    //     if (audioRef.current) {
    //         audioRef.current.src = backgroundAudioSrc;
    //         if (!isMuted && isPlaying) {
    //             audioRef.current.play();
    //         }
    //     }
    // }, [backgroundAudioSrc]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = backgroundAudioSrc;
            audioRef.current.load(); // Ensure audio reloads with new src
            if (!isMuted && isPlaying) {
                audioRef.current.play();
            }
        }
    }, [backgroundAudioSrc]); // React when src changes

    return (
        <AudioContext.Provider value={{ isPlaying, isMuted, backgroundAudioSrc, playBackgroundMusic, pauseBackgroundMusic, toggleMute, setBackgroundAudioSrc }}>
            {children}
            {/* Hidden audio element for background music */}
            {/* <audio ref={audioRef} loop>
                <source src="./songs/bgm1.mp3" type="audio/mp3" />
            </audio> */}
            <audio ref={audioRef} loop />
        </AudioContext.Provider>
    );
};

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error("useAudio must be used within an AudioProvider");
    }
    return context;
};
