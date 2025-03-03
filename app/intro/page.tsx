"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { useAudio } from "@/context/AudioContext";

export default function Intro() {
    const [isMounted, setIsMounted] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const { isMuted } = useAudio();

    useEffect(() => {
        const audio = audioRef.current;

        // Play audio if not muted
        if (audio) {
            if (!isMuted && audio.paused) {
                audio.play();
            }
            audio.muted = isMuted; // Just mute/unmute without stopping
        }
    }, [isMuted]);

    // Ensure client-side rendering for dynamic content
    useEffect(() => {
        setIsMounted(true);

        // Play audio if not greeted
        if (!isMuted && audioRef.current) {
            audioRef.current.play();
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0; // Reset audio on unmount
            }
        };
    }, []);

    return (
        <main className="min-h-screen relative overflow-y-auto">
            <AnimatedBackground />
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-12">
                <motion.div
                    className="absolute flex flex-col items-center justify-center text-center"
                    initial={false} // Disable initial animation on server
                    animate={isMounted ? { scale: 1 } : { scale: 0 }} // Animate only on client
                    transition={{ duration: 0.5 }}
                >
                    <motion.img
                        src="./characters/Explainer.png" // Replace with your character image path
                        alt="Character"
                        className="w-32 h-32"
                    />
                    <motion.p
                        className="text-lg font-bold text-white mt-4"
                        initial={false} // Disable initial animation on server
                        animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} // Animate only on client
                        transition={{ delay: 0.3 }}
                    >
                        Hi, I am Bob! I will help you through this game.
                    </motion.p>

                    <Link href="/objective">
                        <motion.button
                            className="mt-12 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Say Hi 👋
                        </motion.button>
                    </Link>
                </motion.div>
            </div>

            {/* Hidden Audio Element */}
            <audio ref={audioRef} src="./voiceover/intro.mp3" preload="auto" />
        </main>
    );
}
