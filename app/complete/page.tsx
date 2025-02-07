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
      generateCertificate(score);
      // playBackgroundMusic();
    }
  }, [score, isMuted]);

  useEffect(() => {
    if (!isMuted) {
      playBackgroundMusic(); // This ensures new audio plays after src update
    }
  }, [backgroundAudioSrc]);

  const getCertificateLevel = (marksObtained: number): string => {
    const percentage = (marksObtained / 400) * 100;
  
    if (percentage >= 80) return "Gold";
    else if (percentage >= 70) return "Silver";
    else if (percentage >= 60) return "Bronze";
    
    return "No Level"; // Optional case if percentage < 60
  };

  const generateCertificate = (score :number ): void => {

    const level = getCertificateLevel(score);
    // URLs of the font files to fetch
    const fontUrl1 = "/fonts/MagnoliaScript.ttf"; // First font file
    const fontUrl2 = "/fonts/Poppins-Regular.ttf";
    
    const userData = JSON.parse(sessionStorage.getItem("currentUser") || "{}");
    // Second font file
  
    // Fetch both font files and convert them to Base64
    Promise.all([
      fetch(fontUrl1).then((response) => response.blob()),
      fetch(fontUrl2).then((response) => response.blob()),
    ])
      .then(([fontBlob1, fontBlob2]) => {
        // Convert the first font blob to Base64
        const fontReader1 = new FileReader();
        fontReader1.onloadend = () => {

          if (!fontReader1.result) {
            console.error("Failed to read the first font file.");
            return;
          }
          const base64Font1 = fontReader1.result.toString().split(",")[1]; // Extract the Base64 part
  
          // Convert the second font blob to Base64
          const fontReader2 = new FileReader();
          fontReader2.onloadend = () => {

            if (!fontReader2.result) {
              console.error("Failed to read the second font file.");
              return;
            }
            const base64Font2 = fontReader2.result.toString().split(",")[1]; // Extract the Base64 part
  
            // Initialize jsPDF
            const doc = new jsPDF({
              orientation: "landscape",
              unit: "px",
              format: [800, 600],
            });
  
            // Add the first custom font to jsPDF
            doc.addFileToVFS("MagnoliaScript.ttf", base64Font1);
            doc.addFont("MagnoliaScript.ttf", "MagnoliaScript", "normal");
  
            // Add the second custom font to jsPDF
            doc.addFileToVFS("Poppins-Regular.ttf", base64Font2);
            doc.addFont("Poppins-Regular.ttf", "Poppins-Regular", "normal");
  
            const img = new Image();

              if(level == "Gold")
                img.src = "./certificates/gold-certificate.png";
              else if(level == "Silver")
                img.src = "./certificates/Silver_Certificate.png";
              else
                img.src = "./certificates/Bronze_Certificate.png";

              img.onload = function () {
              doc.addImage(img, "JPEG", 0, 0, 800, 600);

              // Set the first font and add text
              doc.setFont("MagnoliaScript");
              doc.setFontSize(30);
              doc.text(`${userData.title}` + "." + `${userData.name}`, 400, 240, { align: "center" });
    
              // Set the second font and add text
              doc.setFont("Poppins-Regular");
              doc.setFontSize(17);
              doc.text(`(${userData.designation} - ${userData.department})`, 400, 272, { align: "center" });
    
              // Add the date
              const today = new Date();
              const day = String(today.getDate()).padStart(2, "0");
              const month = String(today.getMonth() + 1).padStart(2, "0");
              const year = today.getFullYear();
              const formattedDate = `${day}/${month}/${year}`;

              doc.setFont("Poppins-Regular");
              doc.setFontSize(19);
              doc.text(`${formattedDate}`, 672, 448, { align: "center" });
    
              // Save the PDF
              doc.save(`Certificate_${level}.pdf`);
          }
            
          };
          fontReader2.readAsDataURL(fontBlob2); // Convert the second font blob to a data URL
        };
        fontReader1.readAsDataURL(fontBlob1); // Convert the first font blob to a data URL
      })
      .catch((error) => {
        console.error("Error loading font files:", error);
      });
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