"use client"

import { useState, useEffect, Suspense } from "react"
import Confetti from "react-confetti"
import { useRouter, useSearchParams } from "next/navigation"
import { JSX } from "react/jsx-runtime"
import { jsPDF } from "jspdf";
import { useAudio } from "@/context/AudioContext"
import { User } from "@/types"


interface StageScoreSectionProps {
  windowSize: { width: number; height: number };
  router: ReturnType<typeof useRouter>; // Router type
  // winningSoundRef: RefObject<HTMLAudioElement | null>; // Ref for the winning sound
  isMuted: boolean;
  backgroundAudioSrc: string;
  // pauseBackgroundMusic: () => void; // Function to pause background music
  playBackgroundMusic: () => void; // Function to play background music
  setBackgroundAudioSrc: (src: string) => void; // Function to update the audio source
}


export default function Complete(): JSX.Element {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const router = useRouter()

  const { isMuted, backgroundAudioSrc, playBackgroundMusic, setBackgroundAudioSrc } = useAudio();



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
            // pauseBackgroundMusic={pauseBackgroundMusic} // Pass pauseBackgroundMusic
            playBackgroundMusic={playBackgroundMusic} // Pass playBackgroundMusic 
            setBackgroundAudioSrc={setBackgroundAudioSrc}
          />
        </Suspense>
      </div>
    </main>
  )
}


function StageScoreSection({ windowSize, router, isMuted, backgroundAudioSrc, playBackgroundMusic, setBackgroundAudioSrc }: StageScoreSectionProps) {
  const searchParams = useSearchParams();
  const score = Number(searchParams.get("score") || 0);
  const set = searchParams.get("set") || "Unknown";
  const stage = searchParams.get("stage") || "Unknown";

  const [totalScore, setTotalScore] = useState(0);
  const [allSectionsCompleted, setAllSectionsCompleted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const completedSections: Record<string, number> = JSON.parse(sessionStorage.getItem('completedSections') || '[]');

      // Sum the scores of all stages
      // const totalScore = 0;
      const totalScore = Object.values(completedSections).reduce((sum, score) => sum + score, 0);
      setTotalScore(totalScore);
      // console.log(totalScore);      

      // Check if all 8 sections are completed
      const storedAllStagesCompleted = sessionStorage.getItem("allStagesCompleted");
      const allSectionsCompleted = Object.keys(completedSections).length === 8 && totalScore > 0;
      // let allCompleted = Object.keys(completedSections).length === 8 && totalScore > 0;

      // If the flag exists in sessionStorage, use it
      // if (sessionStorage.getItem("allStagesCompleted") === "true") {
      //   allCompleted = true;
      // }

      if (allSectionsCompleted && !storedAllStagesCompleted) {
        setAllSectionsCompleted(true);
        sessionStorage.setItem("allStagesCompleted", "true");
      } else if(storedAllStagesCompleted){
        // setAllSectionsCompleted(false);
        sessionStorage.removeItem("allStagesCompleted");
      } else {
        setAllSectionsCompleted(storedAllStagesCompleted === "true");
      }
  

      // setAllSectionsCompleted(allCompleted);

      // console.log("All sections Completed: " + allSectionsCompleted, "Total Score: " + totalScore);

      if (score > 0) {
        setBackgroundAudioSrc("./soundeffects/winningsound.mp3");
        // playBackgroundMusic();
      }

      if (allSectionsCompleted) {
        const completedSets: string[] = JSON.parse(sessionStorage.getItem("completedSets") || "[]");
  
        if (!completedSets.includes(set)) {
          completedSets.push(set);
          sessionStorage.setItem("completedSets", JSON.stringify(completedSets));
        }
  
        sessionStorage.removeItem("completedSections");
      }

      // if (allSectionsCompleted) {
      //   // generateCertificate(totalScore);

      //   // Retrieve the existing completed sets or initialize as an empty array
      //   const completedSets: string[] = JSON.parse(sessionStorage.getItem("completedSets") || "[]");

      //   // Add a new completed set name (assuming `stage` contains the set name)
      //   const newCompletedSet = set;
      //   if (!completedSets.includes(newCompletedSet)) {
      //     completedSets.push(newCompletedSet);
      //   }

      //   // Store the updated list back into sessionStorage
      //   sessionStorage.setItem("completedSets", JSON.stringify(completedSets));

      //   sessionStorage.setItem("allStagesCompleted", "true");

      //   sessionStorage.removeItem("completedSections");

      //   // setBackgroundAudioSrc("./songs/bgm1.mp3");
      //   // playBackgroundMusic(); // Resume background music
      //   // router.push("/set");
      // }
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
    // else if (percentage >= 60) return "Bronze";
    return "Bronze"; // Optional case if percentage < 60
  };

  const getDefaultUser = (): User => ({
    name: "",
    department: "",
    designation: "",
    email: "",
    mobile: "",
    title: "",
  });

  const generateCertificate = (score: number): void => {

    const level = getCertificateLevel(score);
    // URLs of the font files to fetch
    const fontUrl1 = "/fonts/open-sans.ttf"; // First font file
    const fontUrl2 = "/fonts/noto-sans.ttf";

    const getUserData = (): User => {
      if (typeof window !== "undefined") {
        const storedData = sessionStorage.getItem("currentUser");
        return storedData ? JSON.parse(storedData) : getDefaultUser();
      }
      return getDefaultUser(); // Default values for SSR or undefined sessionStorage
    };

    // const isClient = typeof window !== 'undefined';
    const userData: User = getUserData();

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
          //const base64Font1 = fontReader1.result.toString().split(",")[1]; // Extract the Base64 part

          // Convert the second font blob to Base64
          const fontReader2 = new FileReader();
          fontReader2.onloadend = () => {

            if (!fontReader2.result) {
              console.error("Failed to read the second font file.");
              return;
            }
            //const base64Font2 = fontReader2.result.toString().split(",")[1]; // Extract the Base64 part

            // Initialize jsPDF
            const doc = new jsPDF({
              orientation: "landscape",
              unit: "px",
              format: [800, 600],
            });

            // // Add the first custom font to jsPDF
            // doc.addFileToVFS("open-sans.ttf", base64Font1);
            // doc.addFont("open-sans.ttf", "open-sans", "normal", 'Identity-H');

            // // Add the second custom font to jsPDF
            // doc.addFileToVFS("noto-sans.ttf", base64Font2);
            // doc.addFont("noto-sans.ttf", "noto-sans", "normal", 'Identity-H');

            const img = new Image();

            if (level == "Gold")
              img.src = "./certificates/gold-certificate.png";
            else if (level == "Silver")
              img.src = "./certificates/Silver_Certificate.png";
            else
              img.src = "./certificates/Bronze_Certificate.png";

            img.onload = function () {
              doc.addImage(img, "JPEG", 0, 0, 800, 600);

              // Set the first font and add text
              // doc.setFont("open-sans");
              doc.setFont('helvetica', 'bold');
              doc.setFontSize(30);
              doc.text(`${userData.title}` + "." + `${userData.name}`, 400, 240, { align: "center" });

              // Set the second font and add text
              // doc.setFont("noto-sans");
              doc.setFont('times', 'normal'); 
              doc.setFontSize(17);
              doc.text(`(${userData.designation} - ${userData.department})`, 400, 272, { align: "center" });

              // Add the date
              const today = new Date();
              const day = String(today.getDate()).padStart(2, "0");
              const month = String(today.getMonth() + 1).padStart(2, "0");
              const year = today.getFullYear();
              const formattedDate = `${day}/${month}/${year}`;

              // doc.setFont("noto-sans");
              doc.setFont('times', 'normal'); 
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

    if (typeof window !== 'undefined') {
      sessionStorage.removeItem("allStagesCompleted");
    }

    router.push(`/game-map?set=${encodeURIComponent(set)}`);
  };

  const handleSelectAnotherSet = () => {
    setBackgroundAudioSrc("./songs/bgm1.mp3");
    playBackgroundMusic(); // Resume background music
    router.push("/set");
  }

  const handleDownloadCertificate = () => {
    generateCertificate(totalScore);
  }

  // return (
  //   <div className="flex flex-col items-center justify-center min-h-screen">
  //     {/* <audio ref={winningSoundRef} src="./soundeffects/winningsound.mp3" /> */}
  //     {score > 0 && <Confetti width={windowSize.width} height={windowSize.height} />}

  //     <h1
  //       className={`text-4xl sm:text-6xl font-bold mb-8 text-center 
  //       ${score > 0 ? "text-white animate-bounce" : "text-yellow-300"}`}
  //     >
  //       {score > 0 ? "Congratulations!" : "Don't Give Up!"}
  //     </h1>

  //     <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-8 mb-8 text-center">
  //       <p className="text-3xl text-white mb-4">
  //         {score > 0 ? "You have successfully completed" : "You have attempted"}
  //       </p>
  //       <p className="text-4xl text-white mb-4">
  //         <strong>{stage} Stage</strong>
  //       </p>
  //       <p className="text-3xl text-white mb-4">{score > 0 ? "with a score of" : "but didn't score any points."}</p>
  //       {score > 0 && <p className={"text-6xl font-bold animate-pulse text-blue-800"}>{score}</p>}
  //     </div>

  //     <button
  //       className="px-6 py-2 bg-blue-700 text-white rounded-lg font-semibold backdrop-blur-lg text-lg transition duration-300 ease-in-out transform hover:bg-blue-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
  //       onClick={handleReturnToStages}
  //     >
  //       Return to Stages Page
  //     </button>
  //   </div>
  // );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* <audio ref={winningSoundRef} src="./soundeffects/winningsound.mp3" /> */}
      {score > 0 && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      <h1
        className={`text-4xl sm:text-6xl font-bold mb-8 text-center 
        ${score > 0 ? "text-white animate-bounce" : "text-yellow-300"}`}
      >
        {allSectionsCompleted ? "All Stages Completed!" : score > 0 ? "Congratulations!" : "Don't Give Up!"}
      </h1>

      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-8 mb-8 text-center">
        <p className="text-3xl text-white mb-4">
          {allSectionsCompleted
            ? "You have successfully completed all stages."
            : score > 0
              ? "You have successfully completed"
              : "You have attempted"}
        </p>
        {!allSectionsCompleted && (
          <p className="text-4xl text-white mb-4">
            <strong>{stage} Stage</strong>
          </p>
        )}
        <p className="text-3xl text-white mb-4">
          {allSectionsCompleted
            ? "Your total score is:"
            : score > 0
              ? "with a score of"
              : "but didn't score any points."}
        </p>
        {score > 0 && (
          <p className="text-6xl font-bold animate-pulse text-blue-800">
            {allSectionsCompleted ? totalScore : score}
          </p>
        )}
      </div>

      {allSectionsCompleted ? (
        <>
          <button
            className="px-6 py-2 bg-green-700 text-white rounded-lg font-semibold backdrop-blur-lg text-lg transition duration-300 ease-in-out transform hover:bg-green-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 mb-4"
            onClick={handleSelectAnotherSet}
          >
            Return to Select Another Set
          </button>
          <button
            className="px-6 py-2 bg-yellow-600 text-white rounded-lg font-semibold backdrop-blur-lg text-lg transition duration-300 ease-in-out transform hover:bg-yellow-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
            onClick={handleDownloadCertificate}
          >
            Download Certificate
          </button>
        </>
      ) : (
        <button
          className="px-6 py-2 bg-blue-700 text-white rounded-lg font-semibold backdrop-blur-lg text-lg transition duration-300 ease-in-out transform hover:bg-blue-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          onClick={handleReturnToStages}
        >
          Return to Stages Page
        </button>
      )}
    </div>
  );
};
