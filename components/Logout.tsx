"use client";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react"; // Importing an icon (optional)
import { useAudio } from "@/context/AudioContext";


const LogoutButton = () => {
    const router = useRouter();
    const { stopBackgroundMusic } = useAudio();
    
    let isLoggedIn : boolean;

    const handleLogout = () => {
        sessionStorage.removeItem("isLoggedIn"); // Clear login session
        sessionStorage.removeItem("currentUser"); // Clear user data if stored
        isLoggedIn = false;
        stopBackgroundMusic();
        router.push("/");
      };

    // Retrieve the value and handle potential null cases
    const storedLogin = sessionStorage.getItem("isLoggedIn");
      
    if (storedLogin !== null) {
        if(storedLogin === "true")
            isLoggedIn = true;
    } else {
        return null;
    }

    

    return (
        <button
        onClick={handleLogout}
        className="fixed top-4 right-4 bg-red-600 text-white p-3 rounded-full shadow-md hover:bg-red-500 transition cursor-pointer z-50"
        title="Logout"
        >
        <LogOut size={24} /> {/* Logout Icon */}
        </button>
    );
};


export default LogoutButton;
