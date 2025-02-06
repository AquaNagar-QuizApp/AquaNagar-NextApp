"use client";
import { useAudio } from "@/context/AudioContext";
// import { useEffect } from "react";

const AudioToggleButton = () => {
    const { isMuted, toggleMute } = useAudio();

    // useEffect(() => {
    //     console.log("AudioToggleButton mounted");
    // }, []);

    return (
        <button
            onClick={toggleMute}
            className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition cursor-pointer z-50"
        >
            {isMuted ? "Unmute 🔊" : "Mute 🔇"}
        </button>
    );
};

export default AudioToggleButton;
