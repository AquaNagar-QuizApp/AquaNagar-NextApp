"use client"

import { useState, useEffect, Suspense, useRef, RefObject } from "react"
import Confetti from "react-confetti"
import { useRouter, useSearchParams } from "next/navigation"
import { JSX } from "react/jsx-runtime"
import { jsPDF } from "jspdf";
import { useAudio } from "@/context/AudioContext"

interface StageScoreSectionProps {
  windowSize: { width: number; height: number };
  router: ReturnType<typeof useRouter>; // Router type
  // winningSoundRef: RefObject<HTMLAudioElement | null>; // Ref for the winning sound
  isMuted: boolean;
  backgroundAudioSrc: string;
  pauseBackgroundMusic: () => void; // Function to pause background music
  playBackgroundMusic: () => void; // Function to play background music
  setBackgroundAudioSrc: (src: string) => void; // Function to update the audio source
}


export default function Complete(): JSX.Element {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const router = useRouter()

  const { isMuted, backgroundAudioSrc, playBackgroundMusic, pauseBackgroundMusic, setBackgroundAudioSrc } = useAudio();



  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <main className="min-h-screen relative overflow-auto">
      <div className="min-h-screen bg-gradient-to-br from-teal-500 to-blue-700 flex flex-col items-center justify-center">
        {/* Suspense is used to prevent hydration errors */}
        <Suspense fallback={<div className="text-white text-xl">Loading...</div>}>
          <StageScoreSection windowSize={windowSize}
            router={router}
            // winningSoundRef={winningSoundRef} // Pass the ref for the winning sound
            isMuted={isMuted}
            backgroundAudioSrc={backgroundAudioSrc}
            pauseBackgroundMusic={pauseBackgroundMusic} // Pass pauseBackgroundMusic
            playBackgroundMusic={playBackgroundMusic} // Pass playBackgroundMusic 
            setBackgroundAudioSrc={setBackgroundAudioSrc}
          />
        </Suspense>
      </div>
    </main>
  )
}


function StageScoreSection({ windowSize, router, isMuted, backgroundAudioSrc, pauseBackgroundMusic, playBackgroundMusic, setBackgroundAudioSrc }: StageScoreSectionProps) {
  const searchParams = useSearchParams();
  const score = Number(searchParams.get("score") || 0);
  const stage = searchParams.get("stage") || "Unknown";

  useEffect(() => {
    if (score > 0) {
      setBackgroundAudioSrc("./soundeffects/winningsound.mp3");
      generateCertificate();
      // playBackgroundMusic();
    }
  }, [score, isMuted]);

  useEffect(() => {
    if (!isMuted) {
      playBackgroundMusic(); // This ensures new audio plays after src update
    }
  }, [backgroundAudioSrc]);

  const generateCertificate = (): void => {
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [800, 600],
    });

    const img = new Image();
    img.src = "./certificates/gold-certificate.png";

    img.onload = function () {
      doc.addImage(img, "JPEG", 0, 0, 800, 600);

      doc.setFont("times", "bold");
      doc.setFontSize(36);
      doc.text("Congratulations!", 400, 200, { align: "center" });

      doc.setFontSize(30);
      doc.text(`You have completed the ${stage} stage`, 400, 270, { align: "center" });

      doc.setFontSize(26);
      doc.text(`Score: ${score}`, 400, 330, { align: "center" });

      const today = new Date();
      const formattedDate = today.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
      doc.setFontSize(20);
      doc.text(`Date: ${formattedDate}`, 400, 390, { align: "center" });

      doc.save(`Certificate_${stage}.pdf`);
    };
  };


  const handleReturnToStages = () => {
    setBackgroundAudioSrc("./songs/bgm1.mp3");
    playBackgroundMusic(); // Resume background music
    router.push(`/game-map?set=${encodeURIComponent("Set 1")}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* <audio ref={winningSoundRef} src="./soundeffects/winningsound.mp3" /> */}
      {score > 0 && <Confetti width={windowSize.width} height={windowSize.height} />}

      <h1
        className={`text-4xl sm:text-6xl font-bold mb-8 text-center 
        ${score > 0 ? "text-white animate-bounce" : "text-yellow-300"}`}
      >
        {score > 0 ? "Congratulations!" : "Don't Give Up!"}
      </h1>

      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-8 mb-8 text-center">
        <p className="text-3xl text-white mb-4">
          {score > 0 ? "You have successfully completed" : "You have attempted"}
        </p>
        <p className="text-4xl text-white mb-4">
          <strong>{stage} Stage</strong>
        </p>
        <p className="text-3xl text-white mb-4">{score > 0 ? "with a score of" : "but didn't score any points."}</p>
        {score > 0 && <p className={"text-6xl font-bold animate-pulse text-blue-800"}>{score}</p>}
      </div>

      <button
        className="px-6 py-2 bg-blue-700 text-white rounded-lg font-semibold backdrop-blur-lg text-lg transition duration-300 ease-in-out transform hover:bg-blue-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        onClick={handleReturnToStages}
      >
        Return to Stages Page
      </button>
    </div>
  );
}