"use client";
import { createContext, useContext, useState, useRef, useEffect } from "react";

interface AudioContextType {
    isPlaying: boolean;
    isMuted: boolean;
    backgroundAudioSrc: string;
    playBackgroundMusic: () => void;
    pauseBackgroundMusic: () => void;
    stopBackgroundMusic: () => void;
    toggleMute: () => void;
    setBackgroundAudioSrc: (src: string) => void; // Function to update the audio source
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [backgroundAudioSrc, setBackgroundAudioSrc] = useState("./songs/bgm.mp3"); // Default BGM
    // const [volume, setVolume] = useState(0.3); // Default volume

    const playBackgroundMusic = () => {
        if (audioRef.current && !isMuted) {
            if (!isPlaying) {
                audioRef.current.play();
                audioRef.current.volume = 0.1;
                setIsPlaying(true);
            } else {
                audioRef.current.load();
                // audioRef.current.play();
                audioRef.current
                    .play()
                    .catch((error) => console.error("Audio play error:", error));
            }
        }
    };

    const pauseBackgroundMusic = () => {
        if (audioRef.current && isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const stopBackgroundMusic = () => {
        if (audioRef.current && isPlaying) {
            audioRef.current.pause();  // Pause the audio
            audioRef.current.currentTime = 0;  // Reset playback position to start
            setIsPlaying(false);  // Update state
        }
    };


    const toggleMute = () => {
        setIsMuted((prev) => !prev);
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            if (isMuted) {
                audioRef.current.play();
            }
        }
    };

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
        <AudioContext.Provider value={{ isPlaying, isMuted, backgroundAudioSrc, playBackgroundMusic, pauseBackgroundMusic, stopBackgroundMusic, toggleMute, setBackgroundAudioSrc }}>
            {children}
            
            {/* Hidden audio element for background music */}
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
