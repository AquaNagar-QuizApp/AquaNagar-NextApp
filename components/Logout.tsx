"use client";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react"; // Importing an icon (optional)
import { useAudio } from "@/context/AudioContext";
import { useEffect, useRef, useState } from "react";


const LogoutButton = () => {
    const router = useRouter();
    const { toggleMute, stopBackgroundMusic, setBackgroundAudioSrc } = useAudio();

    const [username, setUsername] = useState<string | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLDivElement | null>(null); // ✅ Reference for the avatar button


    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            sessionStorage.clear(); // Clears all sessionStorage data
            // sessionStorage.removeItem("isLoggedIn"); // Clear login session
            // sessionStorage.removeItem("currentUser"); // Clear user data if stored
            toggleMute();
            stopBackgroundMusic();
            setBackgroundAudioSrc("./songs/bgm.mp3");
            router.replace("/");
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedLogin = sessionStorage.getItem("isLoggedIn") === "true";
            const storedUser = sessionStorage.getItem("currentUser");

            setIsLoggedIn(storedLogin);

            if (storedUser) {
                try {
                    const userObject = JSON.parse(storedUser);
                    setUsername(userObject.name);
                } catch (error) {
                    console.error("Error parsing currentUser:", error);
                }
            }
        }
    }, []);

    // Close popup when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!popupRef.current) return;

            if (
                popupRef.current &&
                !popupRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node) // ✅ Exclude avatar button
            ) {
                setShowPopup(false);
            }
        };

        if (showPopup) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showPopup]);

    // let storedLogin: boolean = false;
    // if (typeof window !== 'undefined') {
    //     storedLogin = sessionStorage.getItem("isLoggedIn") === "true";
    // }

    // if (storedLogin) {
    //     return (
    //         <button
    //             onClick={handleLogout}
    //             className="fixed top-2 right-4 bg-red-600 text-white p-3 rounded-full shadow-md hover:bg-red-500 transition cursor-pointer z-50"
    //             title="Logout"
    //         >
    //             <LogOut size={18} /> {/* Logout Icon */}
    //         </button>
    //     );
    // } else {
    //     return null;
    // }

    if (!isLoggedIn || !username) return null;

    const capitalizeName = (name: string) =>
        name.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

    return (
        <div className="relative">
            {/* Clickable Avatar */}
            <div
                ref={buttonRef}
                className="fixed top-2 right-4 w-10 h-10 bg-gray-700 text-white p-3 rounded-full flex items-center justify-center shadow-md font-bold hover:bg-gray-600 transition cursor-pointer z-50"
                // onClick={() => setShowPopup(!showPopup)}
                onMouseDown={() => setShowPopup((prev) => !prev)}
            >
                {username.charAt(0).toUpperCase()}
            </div>

            {/* Popup Menu */}
            {showPopup && (
                <div ref={popupRef}
                    className="absolute top-12 right-4 bg-white bg-opacity-70 backdrop-blur-lg shadow-lg rounded-lg p-4 min-w-fit max-w-xs z-50">
                    <p className="text-gray-500 text-sm">Hi,</p>
                    <p className="text-gray-800 font-medium">{capitalizeName(username)}</p>
                    <hr className="my-2 border-gray-400" />
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-red-600 hover:text-red-500 font-medium w-full text-left px-3 py-2 transition"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default LogoutButton;
