"use client";
import { useAudio } from "@/context/AudioContext";
import LogoutButton from "./Logout";

const AudioToggleButton = () => {
    const { isMuted, toggleMute } = useAudio();
    
    // let isLoggedIn : boolean;

    // Retrieve the value and handle potential null cases
    const storedLogin = sessionStorage.getItem("isLoggedIn");
      
    if (storedLogin !== null) {
        if(storedLogin === "true"){
            
        }
            // isLoggedIn = true;
    } else {
        return null;
    }

    

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
};

export default AudioToggleButton;
