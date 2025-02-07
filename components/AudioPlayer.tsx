// "use client"

// import { useEffect, useRef, useState, useCallback } from "react";

// const AudioPlayer = () => {
//   const audioRef1 = useRef<HTMLAudioElement | null>(null);
//   const audioRef2 = useRef<HTMLAudioElement | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   // useEffect(() => {
//   //   const handleUnload = () => {
//   //     localStorage.removeItem("isLoggedIn"); // Clear on tab close/refresh
//   //   };

//   //   window.addEventListener("beforeunload", handleUnload);
//   //   return () => {
//   //     window.removeEventListener("beforeunload", handleUnload);
//   //   };
//   // }, []);

//   // Memoizing the function with useCallback to avoid unnecessary re-renders
//   const handleMouseClick = useCallback(() => {
//     console.log("mouse clicked");
//     const audio1 = audioRef1.current;
//     const audio2 = audioRef2.current;

//     // Check if user is logged in based on localStorage
//     const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

//     //   if (audio1 && audio2 && !isPlaying) {
//     //     console.log("in");
//     //     audio1.muted = true; // Mute initially to bypass autoplay restrictions

//     //     audio1.play()
//     //       .then(() => {
//     //         setIsPlaying(true);
//     //         audio1.muted = false; // Unmute after the first play attempt
//     //       })
//     //       .catch((err) => {// eslint-disable-line @typescript-eslint/no-unused-vars

//     //         // console.error("Error while trying to play audio:", err);
//     //       });

//     //     // Set up the loop behavior between two tracks
//     //     audio1.onended = () => {
//     //       audio2.play();
//     //     };

//     //     audio2.onended = () => {
//     //       audio1.play();
//     //     };
//     //   }
//     // }, [isPlaying]); // `handleMouseMove` will only be recreated when `isPlaying` changes

//     if (audio1 && audio2) {
//       if (isLoggedIn && !isPlaying) {
//         // If logged in, play the audio in a loop
//         console.log("User is logged in, playing audio in loop");

//         audio1.muted = true; // Mute initially to bypass autoplay restrictions

//         audio1.play()
//           .then(() => {
//             setIsPlaying(true);
//             audio1.muted = false; // Unmute after the first play attempt
//           })
//           .catch((err) => {
//             // console.error("Error while trying to play audio:", err);
//           });

//         // Set up the loop behavior between two tracks
//         audio1.onended = () => {
//           audio2.play();
//         };

//         audio2.onended = () => {
//           audio1.play();
//         };
//       } else if (!isLoggedIn) {
//         // If not logged in, pause both audios
//         console.log("User is not logged in, pausing audio");

//         audio1.pause();
//         audio2.pause();
//         setIsPlaying(false);
//       }
//     }
//   }, [isPlaying]);

//   useEffect(() => {
//     // Attach mousemove event listener when the component is mounted
//     document.addEventListener("click", handleMouseClick);

//     // Cleanup the event listener on unmount
//     return () => {
//       document.removeEventListener("click", handleMouseClick);
//     };
//   }, [handleMouseClick]); // Adding `handleMouseMove` to dependencies

//   return (
//     <div style={{ display: "none" }}>
//       <audio ref={audioRef1} loop>
//         <source src="./songs/bgm1.mp3" type="audio/mp3" />
//         Your browser does not support the audio element.
//       </audio>
//       <audio ref={audioRef2} loop>
//         <source src="./songs/bgm2.mp3" type="audio/mp3" />
//         Your browser does not support the audio element.
//       </audio>
//     </div>
//   );
// };

// export default AudioPlayer;


"use client";
import { useAudio } from "@/context/AudioContext";
import { useEffect } from "react";

const AudioPlayer = () => {
  const { isPlaying, playBackgroundMusic, isMuted } = useAudio();

  useEffect(() => {
    const handleMouseClick = () => {
      let isLoggedIn: boolean = false;
      if (typeof window !== 'undefined') {
        // Check if user is logged in based on localStorage
        isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
      }

      if (isLoggedIn && !isPlaying && !isMuted) {
        playBackgroundMusic();
      }
    };

    document.addEventListener("click", handleMouseClick);
    return () => {
      document.removeEventListener("click", handleMouseClick);
    };
  }, [isPlaying, playBackgroundMusic, isMuted]);

  return null;
};

export default AudioPlayer;
