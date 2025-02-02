"use client"

import { useEffect, useRef, useState, useCallback } from "react";

const AudioPlayer = () => {
  const audioRef1 = useRef<HTMLAudioElement | null>(null);
  const audioRef2 = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Memoizing the function with useCallback to avoid unnecessary re-renders
  const handleMouseMove = useCallback(() => {
    console.log("mouse moved");
    const audio1 = audioRef1.current;
    const audio2 = audioRef2.current;

    if (audio1 && audio2 && !isPlaying) {
      console.log("in");
      audio1.muted = true; // Mute initially to bypass autoplay restrictions

      audio1.play()
        .then(() => {
          setIsPlaying(true);
          audio1.muted = false; // Unmute after the first play attempt
        })
        .catch((err) => {// eslint-disable-line @typescript-eslint/no-unused-vars
          
          // console.error("Error while trying to play audio:", err);
        });

      // Set up the loop behavior between two tracks
      audio1.onended = () => {
        audio2.play();
      };

      audio2.onended = () => {
        audio1.play();
      };
    }
  }, [isPlaying]); // `handleMouseMove` will only be recreated when `isPlaying` changes

  useEffect(() => {
    // Attach mousemove event listener when the component is mounted
    document.addEventListener("click", handleMouseMove);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("click", handleMouseMove);
    };
  }, [handleMouseMove]); // Adding `handleMouseMove` to dependencies

  return (
    <div style={{ display: "none" }}>
      <audio ref={audioRef1} loop>
        <source src="/songs/bgm1.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <audio ref={audioRef2} loop>
        <source src="/songs/bgm2.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
