"use client"
import { motion } from "framer-motion"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { Button } from "@/components/ui/button"
import { useRouter, useSearchParams } from "next/navigation"
import { Droplet, PenTool, Building2, FlaskRoundIcon as Flask, Cloud, Receipt, Banknote, BarChart3 } from "lucide-react"
import React, { Suspense, useMemo } from "react"

const stages = [
  "Plan A Water Supply System",
  "Design the Water Supply System",
  "Building the Infrastructure",
  "Water Treatment",
  "Smart Water Networks",
  "Metering, Billing, and Collection",
  "Non-Revenue Water Management",
  "Performance Assessment & Operational Excellence",
];

const icons = [
  Droplet, PenTool, Building2, Flask, Cloud, Receipt, Banknote, BarChart3
];

// export default function GameMap() {
//   const router = useRouter()
//   const searchParams = useSearchParams();

//   const handleStageClick = (stage: string, stageIndex: number) => {
//     const set: string | null = searchParams.get("set");
//     if (set) {
//       router.push(`/stages?set=${encodeURIComponent(set)}&stageIndex=${encodeURIComponent(stageIndex)}&stage=${encodeURIComponent(stage)}`);
//     } else {
//       console.error("Set is missing");
//     }
//   }

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       }
//     }
//   }

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//     }
//   }

//   return (
//     // <main className="min-h-screen relative overflow-hidden">
//     //   <AnimatedBackground />
//     //   <div className="relative z-10 h-screen flex flex-col items-center justify-center">
//     //     <motion.div
//     //       className="relative bg-white bg-opacity-70 backdrop-blur-lg rounded-xl p-6 mb-4"
//     //       initial="hidden"
//     //       animate="visible"
//     //       variants={containerVariants}
//     //     >
//     //       <motion.h2 className="text-4xl font-bold text-center text-gray-800 mb-4" variants={itemVariants}>
//     //         Game Stages
//     //       </motion.h2>
//     //       {/* <motion.p className="text-center text-gray-600 mb-8" variants={itemVariants}>
//     //         Choose the option that best describes you.
//     //       </motion.p> */}
//     //       <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
//     //         {stages.map((stage, index) => (
//     //           <motion.div key={index + 1} variants={itemVariants}>
//     //             <motion.div className="px-6 py-2 bg-blue-700 text-white rounded-lg font-semibold backdrop-blur-lg"
//     //               whileHover={{
//     //                 scale: 1.05,
//     //                 transition: { duration: 0.2 },
//     //               }}
//     //               whileTap={{ scale: 0.95 }}
//     //             >
//     //               <Button onClick={() => handleStageClick(stage, index)} className="w-full h-full py-4 text-lg font-semibold">
//     //                 {stage}
//     //               </Button>
//     //             </motion.div>
//     //           </motion.div>
//     //         ))}
//     //       </motion.div>
//     //     </motion.div>
//     //   </div>
//     // </main>


//     <main className="min-h-screen relative overflow-auto">
//       <AnimatedBackground />
//       <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-6">
//         <motion.div
//           className="relative bg-white bg-opacity-70 backdrop-blur-lg rounded-xl p-6 mb-4 w-full max-w-3xl"
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//         >
//           <motion.h2 className="text-4xl font-bold text-center text-gray-800 mb-4" variants={itemVariants}>
//             Game Stages
//           </motion.h2>

//           <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
//             {stages.map((stage, index) => (
//               <motion.div key={index + 1} variants={itemVariants}>
//                 <motion.div
//                   className="px-6 py-4 bg-blue-700 text-white rounded-lg font-semibold backdrop-blur-lg"
//                   whileHover={{
//                     scale: 1.05,
//                     transition: { duration: 0.2 },
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Button
//                     onClick={() => handleStageClick(stage, index)}
//                     className="w-full h-full py-4 px-1 text-lg font-semibold text-center break-words whitespace-normal flex items-center justify-between md:w-64 md:h-20"
//                   >
//                     {React.createElement(icons[index], {
//                       style: { width: '32px', height: '32px', }
//                     })}
//                     <span className="ml-2">{stage}</span>
//                   </Button>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </main>


//     // <main className="min-h-screen relative overflow-hidden">
//     //   <AnimatedBackground />
//     //   <div className="relative z-10 h-screen flex flex-col items-center justify-center p-4">
//     //     <h2 className="text-3xl font-semibold text-white mb-8">Game Stages</h2>
//     //     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//     //       {stages.map((stage, index) => (
//     //         <motion.button
//     //           key={index + 1}
//     //           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//     //           whileHover={{ scale: 1.05 }}
//     //           whileTap={{ scale: 0.95 }}
//     //           onClick={() => handleStageClick(stage)}
//     //         >
//     //           {`${stage}`}
//     //         </motion.button>
//     //       ))}
//     //     </div>
//     //   </div>
//     // </main>
//   )
// }

export default function GameMap() {
  return (
    <main className="min-h-screen relative overflow-auto">
      <AnimatedBackground />
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-6">
        <Suspense fallback={<div className="text-lg text-gray-700">Loading...</div>}>
          <GameMapContent />
        </Suspense>
      </div>
    </main>
  );
}

function GameMapContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Memoizing searchParams to avoid unnecessary re-renders
  const set = useMemo(() => searchParams.get("set"), [searchParams]);

  const handleStageClick = (stage: string, stageIndex: number) => {
    if (set) {
      router.push(`/stages?set=${encodeURIComponent(set)}&stageIndex=${encodeURIComponent(stageIndex)}&stage=${encodeURIComponent(stage)}`);
    } else {
      console.error("Set is missing");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="relative bg-white bg-opacity-70 backdrop-blur-lg rounded-xl p-6 mb-4 w-full max-w-3xl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 className="text-4xl font-bold text-center text-gray-800 mb-4" variants={itemVariants}>
        Game Stages
      </motion.h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
        {stages.map((stage, index) => {
          return (
            <motion.div key={index + 1} variants={itemVariants}>
              <motion.div
                className="px-6 py-4 bg-blue-700 text-white rounded-lg font-semibold backdrop-blur-lg"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => handleStageClick(stage, index)}
                  className="w-full h-full py-4 px-1 text-lg font-semibold text-center break-words whitespace-normal flex items-center justify-between md:w-64 md:h-20"
                >
                  {React.createElement(icons[index], {
                    style: { width: '32px', height: '32px', }
                  })}
                  <span className="ml-2">{stage}</span>
                </Button>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
