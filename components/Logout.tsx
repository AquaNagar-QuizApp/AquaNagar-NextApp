"use client";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react"; // Importing an icon (optional)
import { useAudio } from "@/context/AudioContext";


const LogoutButton = () => {
    const router = useRouter();
    const { stopBackgroundMusic } = useAudio();

    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            sessionStorage.clear(); // Clears all sessionStorage data
            // sessionStorage.removeItem("isLoggedIn"); // Clear login session
            // sessionStorage.removeItem("currentUser"); // Clear user data if stored
            stopBackgroundMusic();
            router.push("/");
        }
    };

    let storedLogin: boolean = false;
    if (typeof window !== 'undefined') {
        storedLogin = sessionStorage.getItem("isLoggedIn") === "true";
    }

    if (storedLogin) {
        return (
            <button
                onClick={handleLogout}
                className="fixed top-4 right-4 bg-red-600 text-white p-3 rounded-full shadow-md hover:bg-red-500 transition cursor-pointer z-50"
                title="Logout"
            >
                <LogOut size={24} /> {/* Logout Icon */}
            </button>
        );
    } else {
        return null;
    }
};

export default LogoutButton;
