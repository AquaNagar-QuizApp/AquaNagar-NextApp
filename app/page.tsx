// "use client";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { AnimatedBackground } from "@/components/AnimatedBackground";
// import AudioPlayer from "@/components/AudioPlayer";
// import router from "next/router";

// export default function Home() {
//   const [hasMounted, setHasMounted] = useState(false);
//   const [isClicked, setIsClicked] = useState(false);
//   const [showContent, setShowContent] = useState(false);
//   const [showWaves, setShowWaves] = useState(false);
//   const [waveCount, setWaveCount] = useState(0);

//   useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   // const handleClickAnywhere = () => {
//   //   if (isClicked) return; // Prevent multiple activations
//   //   setIsClicked(true);
//   //   setShowWaves(true);

//   //   // Show waves one by one
//   //   let count = 0;
//   //   const waveInterval = setInterval(() => {
//   //     setWaveCount((prev) => prev + 1);
//   //     count++;
//   //     if (count === 5) {
//   //       clearInterval(waveInterval);
//   //       setTimeout(() => {
//   //         setShowContent(true);
//   //         setShowWaves(false);
//   //       }, 1000); // Short pause before revealing the content
//   //     }
//   //   }, 500);
//   // };

//   const handleButtonClick = () => {
//     setShowWaves(true);
//     let count = 0;

//     const interval = setInterval(() => {
//       setWaveCount((prev) => prev + 1);
//       count++;

//       if (count === 5) {
//         clearInterval(interval);
//         setTimeout(() => {
//           router.push("/about");
//         }, 15000); // Wait a bit before navigating
//       }
//     }, 300); // Increase wave count every 300ms
//   };

//   if (!hasMounted) return null;

//   return (
//     <main className="min-h-screen relative overflow-hidden">
//       <AnimatedBackground />
//       {/* <AudioPlayer /> */}
//       <div className="relative z-10 h-screen flex flex-col items-center justify-center">
//         {/* Logos before clicking */}
//         {
//           <div className="relative bg-white bg-opacity-70 backdrop-blur-lg rounded-xl p-6 mb-4">
//              <motion.h1
//               className="title text-6xl text-blue-800 mb-8"
//               initial={{ scale: 0.5, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//             >
//               Aqua Nagar - The Urban Water Challenge
//             </motion.h1>
//             <div className="flex space-x-4 p-8 justify-center">
//               <motion.img
//                 src="./logos/logo1.png"
//                 alt="Logo 1"
//                 initial={{ y: 100, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 className="w-16 h-16"
//               />
//               <motion.img
//                 src="./logos/KFW Logo.png"
//                 alt="Logo 2"
//                 initial={{ y: 100, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//                 className="w-20 h-16"
//               />
//               <motion.img
//                 src="./logos/logo3-removebg.png"
//                 alt="Logo 3"
//                 initial={{ y: 100, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//                 className="w-16 h-16"
//               />
//               <motion.img
//                 src="./logos/logo4-removebg.png"
//                 alt="Logo 4"
//                 initial={{ y: 100, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//                 className="w-16 h-16"
//               />
//             </div>
//             <motion.div
//             className="flex justify-center text-sm text-white cursor-pointer"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.8 }}
//             >
//             <Link href="/about">
//               <motion.button
//                 className="px-6 py-3 bg-blue-700 text-white font-semibold"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.6 }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleButtonClick}
//               >
//                 Start Journey
//               </motion.button>
//             </Link>
//           </motion.div>
//           </div>
//         }

//         {/* Wave animation after click */}
//         {showWaves && (
//           <motion.div
//             className="flex items-center justify-center space-x-2 text-white text-xl font-semibold"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             {"🌀".repeat(waveCount)} {waveCount < 6 && "Adventure awaits..."}
//           </motion.div>
//         )}
//       </div>
//     </main>
//   );
// }


"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AnimatedBackground } from "@/components/AnimatedBackground"

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const handleButtonClick = () => {
    router.push("/login")
  }

  if (!hasMounted) return null

  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 h-screen flex flex-col items-center justify-center">
        <motion.div
          className="relative bg-white bg-opacity-70 backdrop-blur-lg rounded-xl p-6 mb-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="title text-6xl text-blue-800 mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Aqua Nagar - The Urban Water Challenge
          </motion.h1>
          <div className="flex space-x-4 p-8 justify-center">
            <motion.img
              src="./logos/TNGov_Logo.png"
              alt="TN Govt Logo"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-16 h-16"
            />
            <motion.img
              src="./logos/KFW_Logo.png"
              alt="KFW Logo"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-20 h-16"
            />
            <motion.img
              src="./logos/TNUIFSL_Logo.png"
              alt="TNUIFSL Logo"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-24 h-16"
            />
            <motion.img
              src="./logos/CED_Logo.png"
              alt="CED Logo"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-16 h-16"
            />
          </div>
          <motion.div
            className="flex justify-center text-sm text-white cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.button
              className="px-6 py-3 bg-blue-700 text-white font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleButtonClick}
            >
              Start Journey
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}