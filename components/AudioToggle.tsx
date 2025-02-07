"use client";
import { useAudio } from "@/context/AudioContext";
import LogoutButton from "./Logout";

const AudioToggleButton = () => {
    const { isMuted, toggleMute } = useAudio();

    let storedLogin: boolean = false;
    if (typeof window !== 'undefined') {
        storedLogin = sessionStorage.getItem("isLoggedIn") === "true";
    }

    if (storedLogin) {
        return (
            <>
                <LogoutButton />
                <button
                    onClick={toggleMute}
                    className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition cursor-pointer z-50"
                >
                    {isMuted ? "Unmute 🔊" : "Mute 🔇"}
                </button>
            </>

        );
    } else {
        return null;
    }
};

export default AudioToggleButton;
