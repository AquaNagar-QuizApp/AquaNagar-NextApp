// "use client"
// import { motion } from "framer-motion"
// import { AnimatedBackground } from "@/components/AnimatedBackground"
// import { Button } from "@/components/ui/button"
// import { useRouter, useSearchParams } from "next/navigation"
// import { Droplet, PenTool, Building2, FlaskRoundIcon as Flask, Cloud, Receipt, Banknote, BarChart3 } from "lucide-react"
// import React, { Suspense, useEffect, useMemo, useState } from "react"

// const stages = [
//   "Plan a Water Supply System",
//   "Design the Water Supply System",
//   "Building the Infrastructure",
//   "Water Treatment",
//   "Smart Water Networks",
//   "Metering, Billing, and Collection",
//   "Non-Revenue Water Management",
//   "Performance Assessment & Operational Excellence",
// ];

// const icons = [
//   Droplet, PenTool, Building2, Flask, Cloud, Receipt, Banknote, BarChart3
// ];

// export default function GameMap() {
//   return (
//     <main className="min-h-screen relative overflow-auto">
//       <AnimatedBackground />
//       <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-6">
//         <Suspense fallback={<div className="text-lg text-gray-700">Loading...</div>}>
//           <GameMapContent />
//         </Suspense>
//       </div>
//     </main>
//   );
// }

// function GameMapContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [completedSections, setCompletedSections] = useState<Record<string, number>>({});

//   // Memoizing searchParams to avoid unnecessary re-renders
//   const set = useMemo(() => searchParams.get("set"), [searchParams]);

//   // Retrieve sessionStorage data on mount
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const storedData = sessionStorage.getItem("completedSections");
//       if (storedData) {
//         setCompletedSections(JSON.parse(storedData));
//       }
//     }
//   }, []);

//   const handleStageClick = (stage: string, stageIndex: number) => {
//     if (set) {
//       router.push(`/stages?set=${encodeURIComponent(set)}&stageIndex=${encodeURIComponent(stageIndex)}&stage=${encodeURIComponent(stage)}`);
//     } else {
//       console.error("Set is missing");
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1 },
//   };

//   return (
//     <motion.div
//       className="relative bg-white bg-opacity-70 backdrop-blur-lg rounded-xl p-6 mb-4 w-full max-w-3xl"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <motion.h2 className="text-4xl font-bold text-center text-gray-800 mb-4" variants={itemVariants}>
//         Game Stages
//       </motion.h2>
//       <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
//         {stages.map((stage, index) => {
//           const isCompleted = completedSections.hasOwnProperty(stage); // Check if stage is completed
//           return (
//             <motion.div key={index + 1} variants={itemVariants}>
//               <motion.div
//                 // className={`px-6 py-4 ${isCompleted ? 'bg-gray-500' : 'bg-blue-700'} text-white rounded-lg font-semibold backdrop-blur-lg`}
//                 className={`px-6 py-4 rounded-lg font-semibold backdrop-blur-lg ${isCompleted
//                   ? "bg-gray-400 text-gray-700 cursor-not-allowed" // Disabled state
//                   : "bg-blue-700 text-white"
//                 }`}
//                 whileHover={isCompleted ? {} : { scale: 1.05, transition: { duration: 0.2 } }} // Disable hover effect when completed
//                 whileTap={isCompleted ? {} : { scale: 0.95 }} // Disable tap effect when completed
//                 >
//                 <Button
//                   onClick={() => handleStageClick(stage, index)}
//                   disabled={isCompleted} // Disable button
//                   className="w-full h-full py-4 px-1 text-lg font-semibold text-center break-words whitespace-normal flex items-center justify-between md:w-64 md:h-20"
//                 >
//                   {React.createElement(icons[index], {
//                     style: { width: '32px', height: '32px', }
//                   })}
//                   <span className="ml-2">{stage}</span>
//                 </Button>
//               </motion.div>
//             </motion.div>
//           );
//         })}
//       </motion.div>
//     </motion.div>
//   );
// }


"use client"
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const stages = [
  "Plan a Water Supply System",
  "Design the Water Supply System",
  "Building the Infrastructure",
  "Water Treatment",
  "Smart Water Networks",
  "Metering, Billing, and Collection",
  "Non-Revenue Water Management",
  "Performance Assessment & Operational Excellence",
];

// const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFD700", "#40E0D0", "#FF4500", "#800080"];

const colors = [
  "#FF6B6B", // Red
  "#4ECDC4", // Turquoise
  "#45B7D1", // Light Blue
  "#FFA07A", // Light Salmon
  "#66CDAA", // Medium Aquamarine
  "#FFD700", // Gold
  "#BA55D3", // Medium Orchid
  "#20B2AA" // Light Sea Green
];

export default function GameMap() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-6">
        <SpinWheel />
      </div>
    </main>
  );
}

// function SpinWheel() {
//   const [spinning, setSpinning] = useState(false);
//   const [result, setResult] = useState<string | null>(null);
//   const [rotation, setRotation] = useState(0);
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const set = searchParams.get("set");

//   const spinWheel = () => {
//     setSpinning(true);
//     const newRotation = rotation + 1440 + Math.floor(Math.random() * 360);
//     setRotation(newRotation);

//     const selectedIndex = Math.floor((newRotation % 360) / (360 / stages.length));
//     const selectedStage = stages[selectedIndex];

//     setTimeout(() => {
//       setSpinning(false);
//       setResult(selectedStage);
//     }, 5000);
//   };

//   useEffect(() => {
//     if (result && set) {
//       setTimeout(() => {
//         router.push(`/stages?set=${encodeURIComponent(set)}&stage=${encodeURIComponent(result)}`);
//       }, 2000);
//     }
//   }, [result, router, set]);

//   return (
//     <motion.div className="relative bg-white bg-opacity-70 backdrop-blur-lg rounded-xl p-6 mb-4 flex flex-col items-center">
//       <motion.h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Game Stages</motion.h2>
//       <div className="relative flex items-center justify-center max-w-[90vw] max-h-[90vh] aspect-square">
//         <svg
//           className={`w-[90vw] h-[90vw] max-w-[500px] max-h-[500px] aspect-square ${spinning ? "transition-transform duration-[5s] ease-in-out" : ""}`}
//           viewBox="0 0 100 100"
//           style={{ transform: `rotate(${rotation}deg)` }}
//         >
//           {stages.map((stage, index) => {
//             const startAngle = (index * 360) / stages.length;
//             const endAngle = ((index + 1) * 360) / stages.length;
//             const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

//             const startX = 50 + 50 * Math.cos(((startAngle - 90) * Math.PI) / 180);
//             const startY = 50 + 50 * Math.sin(((startAngle - 90) * Math.PI) / 180);
//             const endX = 50 + 50 * Math.cos(((endAngle - 90) * Math.PI) / 180);
//             const endY = 50 + 50 * Math.sin(((endAngle - 90) * Math.PI) / 180);

//             const textRadius = 30; // Reduce radius to fit text inside the segment
//             const midAngle = (startAngle + endAngle) / 2;
//             const textX = 50 + textRadius * Math.cos(((midAngle - 90) * Math.PI) / 180);
//             const textY = 50 + textRadius * Math.sin(((midAngle - 90) * Math.PI) / 180);

//             const splitText = stage.split(" "); // Split by spaces
//             const firstLine = splitText.slice(0, Math.ceil(splitText.length / 2)).join(" ");
//             const secondLine = splitText.slice(Math.ceil(splitText.length / 2)).join(" ");

//             return (
//               <g key={stage}>
//                 <path
//                   d={`M50,50 L${startX},${startY} A50,50 0 ${largeArcFlag},1 ${endX},${endY} Z`}
//                   fill={colors[index]}
//                 />
//                 <text
//                   x={textX}
//                   y={textY - 3} // Move the first line slightly up
//                   fill="white"
//                   fontSize="4" // Reduce font size slightly
//                   fontWeight="bold"
//                   textAnchor="middle"
//                   dominantBaseline="middle"
//                   transform={`rotate(${midAngle + 90}, ${textX}, ${textY - 3})`} // Adjust rotation
//                 >
//                   {firstLine}
//                 </text>
//                 <text
//                   x={textX}
//                   y={textY + 3} // Move the second line slightly down
//                   fill="white"
//                   fontSize="4"
//                   fontWeight="bold"
//                   textAnchor="middle"
//                   dominantBaseline="middle"
//                   transform={`rotate(${midAngle + 90}, ${textX}, ${textY + 3})`}
//                 >
//                   {secondLine}
//                 </text>


//               </g>
//             );
//           })}
//         </svg>
//         <div className="absolute top-0 left-1/2 -ml-4 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[32px] border-t-black"></div>
//       </div>
//       <button
//         onClick={spinWheel}
//         disabled={spinning}
//         className="mt-8 px-6 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
//       >
//         {spinning ? "Spinning..." : "Spin"}
//       </button>
//       {result && <p className="mt-4 text-xl font-semibold">Selected Stage: {result}</p>}
//     </motion.div>
//   );
// }

function SpinWheel() {
  const [spinning, setSpinning] = useState(false);
  const [stageResult, setStageResult] = useState<string | null>(null);
  const [stageIndex, setStageIndex] = useState<number>(0);
  const [rotation, setRotation] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();
  const set = searchParams.get("set");

  const spinWheel = () => {
    setSpinning(true);

    let completedSections: Record<string, number> = {};

    if (typeof window !== "undefined") {
      completedSections = JSON.parse(sessionStorage.getItem('completedSections') || '{}');
    }

    // // Filter out completed stages
    // const availableStages = stages.filter(stage => !completedSections[stage]);

    // Get a list of completed stage names
    const completedStages = Object.keys(completedSections);

    // Filter out completed stages properly
    const availableStages = stages.filter(stage => !completedStages.includes(stage));

    if (availableStages.length === 0) {
      alert("All stages are completed!"); // Handle case when all sections are done
      setSpinning(false);
      return;
    }

    // Spin multiple rounds + random final angle
    // const newRotation = rotation + 1440 + Math.floor(Math.random() * 360);
    // setRotation(newRotation);

    // // Adjust the calculation to align with the pointer
    // const selectedIndex = (8 - Math.round(((newRotation % 360) + 22.5) / 45)) % 8
    // const selectedStage = stages[selectedIndex]

    const totalRotations = 1440; // Ensure multiple spins before stopping
    let newRotation, selectedIndex, selectedStage;

    // do {
    //   // Spin multiple rounds + random final angle
    //   newRotation = rotation + totalRotations + Math.floor(Math.random() * 360);

    //   // Adjust calculation to align with the pointer
    //   selectedIndex = (8 - Math.round(((newRotation % 360) + 22.5) / 45)) % 8;
    //   selectedStage = stages[selectedIndex];

    // } while (completedSections[selectedStage]); // Re-roll if the stage is completed

    // Select a valid stage directly
    selectedStage = availableStages[Math.floor(Math.random() * availableStages.length)];
    selectedIndex = stages.indexOf(selectedStage); // Get correct index from original array

    // Ensure correct rotation targeting selectedIndex
    newRotation = rotation + totalRotations + (360 - (selectedIndex * 45 + 22.5));

    setRotation(newRotation);

    setTimeout(() => {
      setSpinning(false);
      setStageResult(selectedStage);
      setStageIndex(selectedIndex);
      console.log(selectedStage);
    }, 5000);
  };


  useEffect(() => {
    if (stageResult && set) {
      setTimeout(() => {
        // if (typeof window !== 'undefined') {
        //   const completedSections = JSON.parse(sessionStorage.getItem("completedSections") || "{}");
        //   completedSections[stageResult] = 5;
        //   sessionStorage.setItem("completedSections", JSON.stringify(completedSections));
        // }
        router.push(`/stages?set=${encodeURIComponent(set)}&stageIndex=${encodeURIComponent(stageIndex)}&stage=${encodeURIComponent(stageResult)}`);
      }, 1000);
    }
  }, [stageResult, router, set]);

  const wrapText = (text: string, maxLength: number) => {
    const words = text.split(" ")
    const lines = []
    let currentLine = ""

    words.forEach((word) => {
      if ((currentLine + word).length <= maxLength) {
        currentLine += (currentLine ? " " : "") + word
      } else {
        lines.push(currentLine)
        currentLine = word
      }
    })
    lines.push(currentLine)

    return lines
  };

  return (
    // <motion.div className="relative bg-white bg-opacity-70 backdrop-blur-lg rounded-xl p-6 w-full h-full flex flex-col items-center">
    //   <motion.h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Game Stages</motion.h2>
    <motion.div className="relative rounded-xl p-6 mb-4 flex flex-col items-center">
      {/* <motion.h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Game Stages</motion.h2> */}

      {/* Wheel Container */}
      <div className="relative flex items-center justify-center w-[575px] h-[575px] md:w-[675px] md:h-[675px]">
        {/* <div className="relative flex items-center justify-center max-w-[90vw] max-h-[90vh] aspect-square"> */}
        {/* SVG Spin Wheel */}
        <svg
          className={`w-full h-full ${spinning ? "transition-transform duration-5000 ease-in-out" : ""}`}
          viewBox="0 0 100 100"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {stages.map((stage, index) => {
            const startAngle = index * 45
            const endAngle = (index + 1) * 45
            const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"

            const startX = 50 + 50 * Math.cos(((startAngle - 90) * Math.PI) / 180)
            const startY = 50 + 50 * Math.sin(((startAngle - 90) * Math.PI) / 180)
            const endX = 50 + 50 * Math.cos(((endAngle - 90) * Math.PI) / 180)
            const endY = 50 + 50 * Math.sin(((endAngle - 90) * Math.PI) / 180)

            const midAngle = (startAngle + endAngle) / 2
            const textX = 50 + 35 * Math.cos(((midAngle - 90) * Math.PI) / 180)
            const textY = 50 + 35 * Math.sin(((midAngle - 90) * Math.PI) / 180)

            const wrappedText = wrapText(stage, 12)

            return (
              <g key={stage}>
                <path
                  d={`M50,50 L${startX},${startY} A50,50 0 ${largeArcFlag},1 ${endX},${endY} Z`}
                  fill={colors[index]}
                />
                <text
                  x={textX}
                  y={textY}
                  fill="white"
                  fontSize="3"
                  fontWeight="bold"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  transform={`rotate(${midAngle}, ${textX}, ${textY})`}
                >
                  {wrappedText.map((line, i) => (
                    <tspan x={textX} dy={i === 0 ? 0 : "1.2em"} key={i}>
                      {line}
                    </tspan>
                  ))}
                </text>
              </g>
            )
          })}
        </svg>
        <div className="absolute top-0 left-1/2 -ml-4 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[32px] border-t-black"></div>
        <button
          onClick={spinWheel}
          disabled={spinning}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
        // className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        //    w-20 h-20 bg-blue-500 text-white font-semibold rounded-full shadow-md 
        //    flex items-center justify-center text-lg
        //    hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 
        //    disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {spinning ? "Spinning..." : "Spin"}
        </button>
      </div>
      {/* {stageResult && <p className="mt-4 text-xl font-semibold text-center">Result: {stageResult}</p>} */}
    </motion.div>
  );
}
