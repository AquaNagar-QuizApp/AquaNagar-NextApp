"use client";
import { useAudio } from "@/context/AudioContext";
import { useEffect } from "react";

const AudioPlayer = () => {
  const { isPlaying, playBackgroundMusic, pauseBackgroundMusic, isMuted } = useAudio();

  useEffect(() => {
    let isLoggedIn: boolean = false; 
    const handleMouseClick = () => {
      if (typeof window !== 'undefined') {
        // Check if user is logged in based on localStorage
        isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
        if (isLoggedIn && !isPlaying && !isMuted) {
          playBackgroundMusic();
        }
      }
    };

    const handleVisibilityChange = () => {
      isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
      if (isLoggedIn && !document.hidden && !isPlaying && !isMuted) {
        playBackgroundMusic();
      } else{
        pauseBackgroundMusic();
      }
    };
  
    document.addEventListener("visibilitychange", handleVisibilityChange);

    document.addEventListener("click", handleMouseClick);
    return () => {
      document.removeEventListener("click", handleMouseClick);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPlaying, playBackgroundMusic, isMuted]);

  return null;
};

export default AudioPlayer;
