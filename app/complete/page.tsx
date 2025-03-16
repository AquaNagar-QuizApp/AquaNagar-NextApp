"use client"

import { useState, useEffect, Suspense } from "react"
import Confetti from "react-confetti"
import { useRouter, useSearchParams } from "next/navigation"
import { JSX } from "react/jsx-runtime"
import { useAudio } from "@/context/AudioContext"
import { Activity, ArrowRight, Clock, Download, Droplet, Heart, IndianRupee, PieChart, RefreshCw, Wifi, Zap } from "lucide-react"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import ResultsScreen from "@/components/result-screen"
import { generateCertificate } from "@/components/Certificate";
import { generateAnswerSheet } from "@/components/AnswerSheet"

interface StageScoreSectionProps {
  router: ReturnType<typeof useRouter>; // Router type
  isMuted: boolean;
  backgroundAudioSrc: string;
  playBackgroundMusic: () => void; // Function to play background music
  setBackgroundAudioSrc: (src: string) => void; // Function to update the audio source
}

interface Stage {
  name: string;
  title: string;
  score: number;
  maxScore: number;
  unit: string;
  decrease: boolean;
  incOrDecValue: number;
  icon: React.ReactNode;
  wrongAnswerMessage: [string, string];
  allCorrectAnswermessage: [string, string];
}

export default function Complete(): JSX.Element {
  const router = useRouter();
  const { isMuted, backgroundAudioSrc, playBackgroundMusic, setBackgroundAudioSrc } = useAudio();

  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="min-h-screen bg-gradient-to-br from-teal-500 to-blue-700 flex flex-col items-center justify-center">
        {/* Suspense is used to prevent hydration errors */}
        <Suspense fallback={<div className="text-white text-xl">Loading...</div>}>
          <StageScoreSection
            router={router}
            isMuted={isMuted}
            backgroundAudioSrc={backgroundAudioSrc}
            playBackgroundMusic={playBackgroundMusic}
            setBackgroundAudioSrc={setBackgroundAudioSrc}
          />
        </Suspense>
      </div>
    </main>
  )
}


function StageScoreSection({ router, isMuted, backgroundAudioSrc, playBackgroundMusic, setBackgroundAudioSrc }: StageScoreSectionProps) {
  const searchParams = useSearchParams();
  const score = Number(searchParams.get("score") || 0);
  const set = searchParams.get("set") || "Unknown";
  const stage = searchParams.get("stage") || "Unknown";

  const stages: Stage[] = [
    {
      name: "Plan a Water Supply System",
      title: "Dam Capacity",
      score: 0,
      maxScore: 6100,
      unit: "Million Cubic Feet",
      decrease: true,
      incOrDecValue: 307,
      icon: <Droplet className="w-16 h-16 text-blue-500 flex-shrink-0" />,
      wrongAnswerMessage: [
        "Dam capacity has been compromised.",
        "Salem City Dam's storage capacity has been reduced due to planning errors."
      ],
      allCorrectAnswermessage: [
        "Dam capacity is at optimal level.",
        "Salem City Dam is operating at full capacity, ensuring reliable water supply."
      ]
    },
    {
      name: "Design the Water Supply System",
      title: "Project Budget",
      score: 0,
      maxScore: 150,
      unit: "Crores",
      decrease: false,
      incOrDecValue: 5,
      icon: <IndianRupee className="w-16 h-16 text-green-500 flex-shrink-0" />,
      wrongAnswerMessage: [
        "Budget overruns are affecting the project.",
        "of project budget cost has increased due to design inefficiencies."
      ],
      allCorrectAnswermessage: [
        "Project budget is on target.",
        "The project has maintained its budget, demonstrating excellent financial management."
      ]
    },
    {
      name: "Building the Infrastructure",
      title: "Construction Timeline",
      score: 0,
      maxScore: 24,
      unit: "Months",
      decrease: false,
      incOrDecValue: 1,
      icon: <Clock className="w-16 h-16 text-purple-500 flex-shrink-0" />,
      wrongAnswerMessage: [
        "Project timeline has been extended.",
        "of timeline has been extended due to implementation challenges."
      ],
      allCorrectAnswermessage: [
        "Project timeline is on schedule.",
        "Construction completed on schedule, allowing timely water service to the community."
      ]
    },
    {
      name: "Water Treatment",
      title: "Public Health",
      score: 0,
      maxScore: 0,
      unit: "Cases",
      decrease: false,
      incOrDecValue: 100,
      icon: <Activity className="w-16 h-16 text-red-500 flex-shrink-0" />,
      wrongAnswerMessage: [
        "Public health is at risk due to the lack of prevention.",
        "of waterborne diseases are increasing, due to an inefficient water treatment system."
      ],
      allCorrectAnswermessage: [
        "Public health is protected with clean water.",
        "of waterborne diseases reported, thanks to an effective water treatment system."
      ]
    },
    {
      name: "Smart Water Networks",
      title: "Smart Distribution",
      score: 0,
      maxScore: 0,
      unit: "Cubic Feet Per Day",
      decrease: false,
      incOrDecValue: 13700,
      icon: <Wifi className="w-16 h-16 text-purple-500 flex-shrink-0" />,
      wrongAnswerMessage: [
        "Water losses are mounting in the distribution system.",
        "of water is being lost due to inefficiencies in the SCADA system."
      ],
      allCorrectAnswermessage: [
        "Water distribution system is operating efficiently.",
        "of water loss in the SCADA system, achieving maximum distribution efficiency."
      ]
    },
    {
      name: "Metering, Billing, and Collection",
      title: "Energy Efficiency",
      score: 0,
      maxScore: 0,
      unit: "kWh per Month",
      decrease: false,
      incOrDecValue: 500,
      icon: <Zap className="w-16 h-16 text-yellow-500 flex-shrink-0" />,
      wrongAnswerMessage: [
        "Energy efficiency is compromised.",
        "of excess energy is being consumed due to operational inefficiencies."
      ],
      allCorrectAnswermessage: [
        "Energy efficiency is maximized.",
        "of excess energy consumption, demonstrating optimal operational efficiency."
      ]
    },
    {
      name: "Non-Revenue Water Management",
      title: "Water Conservation",
      score: 0,
      maxScore: 0,
      unit: "Cubic Feet per Day",
      decrease: false,
      incOrDecValue: 13000,
      icon: <PieChart className="w-16 h-16 text-indigo-500 flex-shrink-0" />,
      wrongAnswerMessage: [
        "Water leakage is affecting system performance.",
        "of water is being lost through leaks in the distribution system."
      ],
      allCorrectAnswermessage: [
        "Water conservation is at optimal levels.",
        "of water leakage, ensuring maximum conservation of this precious resource."
      ]
    },
    {
      name: "Performance Assessment & Operational Excellence",
      title: "Customer Satisfaction",
      score: 0,
      maxScore: 100,
      unit: "% Customers",
      decrease: true,
      incOrDecValue: 2.5,
      icon: <Heart className="w-16 h-16 text-pink-500 flex-shrink-0" />,
      wrongAnswerMessage: [
        "Customer satisfaction is declining.",
        "are happy with the water supply service quality."
      ],
      allCorrectAnswermessage: [
        "Customer satisfaction is excellent.",
        "are happy and reflecting excellent service quality and reliability."
      ]
    }
  ];

  const currentStage = stages.find(s => s.name === stage);

  const computedScore = currentStage
    ? currentStage.decrease
      ? currentStage.maxScore - (10 - (score ?? 0)) * currentStage.incOrDecValue
      : (10 - (score ?? 0)) * currentStage.incOrDecValue
    : 0;

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [totalScore, setTotalScore] = useState(0);
  const [allSectionsCompleted, setAllSectionsCompleted] = useState(false);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const completedSections: Record<string, number> = JSON.parse(sessionStorage.getItem('completedSections') || '{}');
      const totalScore = Object.values(completedSections).reduce((sum, score) => sum + score, 0);
      // setTotalScore(totalScore);
      // Persist final score

      // Sum the scores of all stages
      // const totalScore = 0;
      // const totalScore = Object.values(completedSections).reduce((sum, score) => sum + score, 0);
      // setTotalScore(totalScore);
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
        setTotalScore(totalScore);
        sessionStorage.setItem("finalTotalScore", totalScore.toString());
        // } else if (storedAllStagesCompleted) {
        //   // setAllSectionsCompleted(false);
        //   sessionStorage.removeItem("allStagesCompleted");
        //   sessionStorage.removeItem("finalTotalScore");
      } else {
        setAllSectionsCompleted(storedAllStagesCompleted === "true");
      }

      if (score > 0) {
        setBackgroundAudioSrc("./soundeffects/winningsound.mp3");
      }

      if (allSectionsCompleted) {
        const completedSets: string[] = JSON.parse(sessionStorage.getItem("completedSets") || "[]");

        if (!completedSets.includes(set)) {
          completedSets.push(set);
          sessionStorage.setItem("completedSets", JSON.stringify(completedSets));
        }

        sessionStorage.removeItem("completedSections");
      }
    }
  }, [score, isMuted]);

  useEffect(() => {
    if (!isMuted) {
      playBackgroundMusic(); // This ensures new audio plays after src update
    }
  }, [backgroundAudioSrc]);

  const handleReturnToStages = () => {
    setBackgroundAudioSrc("./songs/bgm.mp3");
    if (!isMuted) {
      playBackgroundMusic(); // Resume background music
    }

    if (typeof window !== 'undefined') {
      sessionStorage.removeItem("allStagesCompleted");
    }

    router.replace(`/spinwheel?set=${encodeURIComponent(set)}`);
  };

  const handleSelectAnotherSet = () => {
    sessionStorage.removeItem("allStagesCompleted");
    sessionStorage.removeItem("finalTotalScore");
    setBackgroundAudioSrc("./songs/bgm.mp3");
    playBackgroundMusic(); // Resume background music
    router.replace("/set");
  }

  const handleDownloadCertificate = () => {
    generateCertificate(totalScore);
  }

  const handleDownloadAnswerSheet = () => {
    generateAnswerSheet(set);
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
  const showConfetti = (allSectionsCompleted && totalScore > 0) || (!allSectionsCompleted && score > 0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* <audio ref={winningSoundRef} src="./soundeffects/winningsound.mp3" /> */}
      {showConfetti ?
        (<Confetti width={windowSize.width} height={windowSize.height} />) :
        (<AnimatedBackground />)
      }

      {allSectionsCompleted && (
        <h1
          className={`text-4xl sm:text-6xl font-bold mb-8 text-center z-50
          ${(showConfetti) ? "text-white animate-bounce" : "text-yellow-300"}`}
        >
          All Stages Completed!
          {/* {allSectionsCompleted ? "All Stages Completed!" : score > 0 ? "Congratulations!" : "Don't Give Up!"} */}
        </h1>
      )}

      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-md p-8 mb-8 text-center ring-4 ring-blue-600">

        {!allSectionsCompleted && score >= 0 && score < 10 && (
          <div className="text-center text-xl text-white mt-4 max-w-3xl mx-auto">
            {currentStage && currentStage.wrongAnswerMessage && (
              // <>
              //   <p className="text-4xl font-bold text-white mb-16">
              //     {currentStage.wrongAnswerMessage[0]}
              //   </p>
              //   {/* {currentStage.message[0].split(",").map((part, index) => (
              //     <p key={index} className="text-3xl text-white mt-4">
              //       {part.trim()}
              //     </p>
              //   ))} */}
              //   <p className="text-6xl font-bold text-blue-800 mt-6 mb-6">{computedScore} {currentStage.unit}</p>
              //   {currentStage.wrongAnswerMessage[1].split(",").map((part, index) => (
              //     <p key={index} className="text-3xl text-white mt-4">
              //       {part.trim()}
              //     </p>
              //   ))}
              // </>
              <div className="p-6 rounded-lg transition-all duration-300 transform scale-105">
                <div className="flex items-center mb-16">
                  {currentStage.icon}
                  <h2 className="text-7xl font-bold ml-3 text-gray-700">{currentStage.title}</h2>
                </div>
                <p className="text-6xl font-bold text-blue-800 mb-4">{computedScore} {currentStage.unit}</p>
                <p className="text-2xl text-white">{currentStage.wrongAnswerMessage[1]}</p>
              </div>
            )}
          </div>
        )}

        {!allSectionsCompleted && score === 10 && (
          <div className="text-center text-xl text-white mt-4 max-w-3xl mx-auto">
            {/* <p className="text-3xl text-white mb-4">
              You have attempted
            </p>
            <p className="text-4xl text-white mb-4">
              <strong>{stage} Stage</strong>
            </p>
            <p className="text-3xl text-white mt-4">
              but didn&apos;t score any points.
            </p>
            <p className="text-3xl text-blue-800 mt-8 italic">
              Go to Spin Wheel and play other stages.
            </p> */}
            {currentStage && currentStage.allCorrectAnswermessage && (
              // <>
              //   <p className="text-4xl font-bold text-white mb-16">
              //     {currentStage.allCorrectAnswermessage[0]}
              //   </p>
              //   <p className="text-6xl font-bold text-blue-800 mt-6 mb-6">{currentStage.maxScore} {currentStage.unit}</p>
              //   <p className="text-3xl text-white mt-4">
              //     {currentStage.allCorrectAnswermessage[1]}
              //   </p>
              // </>
              <div className="p-6 rounded-lg transition-all duration-300 transform scale-105">
                <div className="flex items-center mb-16">
                  {currentStage.icon}
                  <h2 className="text-7xl font-bold ml-3 text-gray-700">{currentStage.title}</h2>
                </div>
                <p className="text-6xl font-bold text-blue-800 mb-4">{currentStage.maxScore} {currentStage.unit}</p>
                <p className="text-2xl text-white">{currentStage.allCorrectAnswermessage[1]}</p>
              </div>
            )}
          </div>
        )}

        {allSectionsCompleted && (
          <div className="text-center text-xl text-white mt-4">
            {/* <p className="text-3xl text-white mb-4">
              You have successfully completed all stages
            </p> */}
            {/* <p className="text-4xl text-white mb-8 italic">
              {(totalScore / 80) * 100 >= 80 ? "and achieved a Gold Certificate." : (totalScore / 80) * 100 >= 65 ? "and achieved a Silver Certificate." : (totalScore / 80) * 100 >= 50 ? "and achieved a Bronze Certificate." : "but didn't get any certificate."}
            </p>
            <p className="text-4xl text-yellow-700 mb-4 italic">
              {(totalScore / 80) * 100 < 50 ? "Play another Mission and win a Certificate." : "Download your Certificate."}
            </p> */}
            <ResultsScreen
              score={(totalScore / 80) * 100}
            />
          </div>
        )}

        {/* <p className="text-3xl text-white mb-4">
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
        {/* {score > 0 && ( */}
        {/* {((allSectionsCompleted && totalScore > 0) || (!allSectionsCompleted && score > 0)) && (
          <p className="text-6xl font-bold animate-pulse text-blue-800">
            {allSectionsCompleted ? totalScore : score}
          </p>

        {/* Display Stage-Specific Message */}
        {/* {!allSectionsCompleted && ( */}
        {/* <div className="text-center text-xl text-white mt-4 italic">
            {stageMessages[stage] && (
              <>
                <p>{stageMessages[stage][0]}</p>
                <p className="text-6xl font-bold animate-pulse text-blue-800">{stageMessages[stage][1]}</p>
                <p>{stageMessages[stage][2]}</p>
              </>
            )}
          </div> */}

      </div>

      {allSectionsCompleted && (totalScore / 80) * 100 >= 50 ? (
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
          <button
            className="px-6 py-2 w-full md:w-auto bg-green-700 text-white rounded-lg font-semibold backdrop-blur-lg text-lg transition duration-300 ease-in-out transform hover:bg-green-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 flex justify-between items-center"
            onClick={handleSelectAnotherSet}
          >
            Go to Next Game
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <button
            className="px-6 py-2 w-full md:w-auto bg-yellow-600 text-white rounded-lg font-semibold backdrop-blur-lg text-lg transition duration-300 ease-in-out transform hover:bg-yellow-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 flex justify-between items-center"
            onClick={handleDownloadCertificate}
          >
            Download Certificate
            <Download className="ml-2 h-5 w-5" />
          </button>
          <button
            className="px-6 py-2 w-full md:w-auto bg-blue-500 text-white rounded-lg font-semibold backdrop-blur-lg text-lg transition duration-300 ease-in-out transform hover:bg-yellow-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 flex justify-between items-center"
            onClick={handleDownloadAnswerSheet}
          >
            Download Answers
            <Download className="ml-2 h-5 w-5" />
          </button>
        </div>
      ) : allSectionsCompleted && (totalScore / 80) * 100 < 50 ?
        <button
          className="px-6 py-2 bg-blue-700 text-white rounded-lg font-semibold backdrop-blur-lg text-lg transition duration-300 ease-in-out transform hover:bg-blue-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 flex justify-between items-center"
          onClick={handleSelectAnotherSet}
        >
          Go to Next Game
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
        : (
          <button
            className="px-6 py-2 bg-teal-500 text-white rounded-lg font-semibold backdrop-blur-lg text-lg transition duration-300 ease-in-out transform hover:bg-teal-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 flex justify-between items-center"
            onClick={handleReturnToStages}
          >
            Go to Spin Wheel
            <RefreshCw className="ml-2 h-5 w-5" />
          </button>
        )}
    </div>
  );
};
