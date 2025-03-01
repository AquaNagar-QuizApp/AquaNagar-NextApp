// "use client"

// import React from "react"
// import { motion } from "framer-motion"

// const backgroundGradients = [
//   // Day time - bright turquoise sea
//   ["#7dd3fc", "#38bdf8"],
//   ["#38bdf8", "#0ea5e9"],
//   // Afternoon sea - deeper blue with hint of turquoise
//   ["#0ea5e9", "#0284c7"],
//   ["#0284c7", "#0369a1"],
//   // Evening/Twilight sea - rich blue
//   ["#0369a1", "#075985"],
//   ["#075985", "#0369a1"],
//   // Back to day transition
//   ["#0369a1", "#0284c7"],
//   ["#0284c7", "#7dd3fc"],
//   ["#7dd3fc", "#38bdf8"]
// ]

// export function AnimatedBackground() {
//   return (
//     <div className="fixed inset-0 z-0 overflow-hidden">
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600"
//         animate={{
//           background: backgroundGradients.map(([from, to]) => `linear-gradient(to bottom right, ${from}, ${to})`),
//         }}
//         transition={{
//           duration: 30,
//           repeat: Number.POSITIVE_INFINITY,
//           ease: "easeInOut",
//         }}
//       />

//       {[...Array(20)].map((_, i) => {
//         const size = Math.random() * 10 + 5; // Bubbles will be between 5px and 15px
//         return (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-white"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               width: `${size}px`,
//               height: `${size}px`,
//               opacity: Math.random() * 0.8 + 0.2, // Randomize opacity for more realism
//             }}
//             animate={{
//               y: [0, -100], // Moves upwards
//               opacity: [0, 1, 0], // Fade-in and fade-out effect
//             }}
//             transition={{
//               duration: Math.random() * 2 + 3, // Random float duration (3s - 5s)
//               repeat: Number.POSITIVE_INFINITY,
//               ease: "linear",
//               delay: Math.random() * 2, // Random delay
//             }}
//           />
//         );
//       })}
//       <WaveAnimation />
//     </div>
//   )
// }


// function WaveAnimation() {
//   return (
//     <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-56 md:h-64 overflow-hidden">
//       {[0, 1, 2].map((index) => (
//         <svg
//           key={index}
//           viewBox="0 0 1440 320"
//           className="absolute bottom-0 w-full h-full"
//           preserveAspectRatio="none"
//           style={{ zIndex: index }}
//         >
//           <defs>
//             <motion.linearGradient
//               id={`animatedWaveGradient${index}`}
//               gradientTransform="rotate(90)"
//               animate={{
//                 gradientTransform: backgroundGradients.map((_, i) => `rotate(${90 + i * 5})`),
//               }}
//               transition={{
//                 repeat: Number.POSITIVE_INFINITY,
//                 duration: 30,
//                 ease: "easeInOut",
//               }}
//             >
//               {backgroundGradients.map(([from, to], i) => (
//                 <React.Fragment key={i}>
//                   <motion.stop
//                     offset={`${(i * 100) / (backgroundGradients.length - 1)}%`}
//                     animate={{
//                       stopColor: [from, to],
//                       stopOpacity: [0.5, 0.4],
//                     }}
//                     transition={{
//                       repeat: Number.POSITIVE_INFINITY,
//                       duration: 30,
//                       ease: "easeInOut",
//                     }}
//                   />
//                   {i < backgroundGradients.length - 1 && (
//                     <motion.stop
//                       offset={`${((i + 0.5) * 100) / (backgroundGradients.length - 1)}%`}
//                       animate={{
//                         stopColor: [to, backgroundGradients[i + 1][0]],
//                         stopOpacity: [0.45, 0.45],
//                       }}
//                       transition={{
//                         repeat: Number.POSITIVE_INFINITY,
//                         duration: 30,
//                         ease: "easeInOut",
//                       }}
//                     />
//                   )}
//                 </React.Fragment>
//               ))}
//             </motion.linearGradient>
//           </defs>

//           <motion.path
//             fill={`url(#animatedWaveGradient${index})`}
//             animate={{
//               d: [
//                 "M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,144C672,128,768,96,864,90.7C960,85,1056,107,1152,122.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
//                 "M0,96L48,101.3C96,107,192,117,288,112C384,107,480,85,576,74.7C672,64,768,64,864,80C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
//                 "M0,128L48,122.7C96,117,192,107,288,101.3C384,96,480,96,576,85.3C672,75,768,53,864,58.7C960,64,1056,96,1152,106.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
//               ],
//             }}
//             transition={{
//               repeat: Number.POSITIVE_INFINITY,
//               repeatType: "reverse",
//               duration: 12 - index * 2.5,
//               ease: "easeInOut",
//             }}
//             style={{
//               opacity: 0.2 + index * 0.05,
//               filter: `blur(${index * 0.5}px)`,
//             }}
//           />
//         </svg>
//       ))}

//       <div
//         className="absolute inset-0 opacity-10"
//         style={{
//           backgroundImage: `
//             linear-gradient(
//               to right,
//               transparent,
//               rgba(255, 255, 255, 0.1) 15%,
//               transparent 30%
//             )
//           `,
//           animation: "shimmer 7s infinite linear",
//         }}
//       />

//       <style jsx>{`
//         @keyframes shimmer {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }
//       `}</style>
//     </div>
//   )
// }


"use client"

import React, { useEffect, useState, useId } from "react"
import { motion } from "framer-motion"

const backgroundGradients = [
  // Day time - bright turquoise sea
  ["#7dd3fc", "#38bdf8"],
  ["#38bdf8", "#0ea5e9"],
  // Afternoon sea - deeper blue with hint of turquoise
  ["#0ea5e9", "#0284c7"],
  ["#0284c7", "#0369a1"],
  // Evening/Twilight sea - rich blue
  ["#0369a1", "#075985"],
  ["#075985", "#0369a1"],
  // Back to day transition
  ["#0369a1", "#0284c7"],
  ["#0284c7", "#7dd3fc"],
  ["#7dd3fc", "#38bdf8"],
]

export function AnimatedBackground() {
  // Use state to handle client-side only rendering
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Generate bubbles only on the client side
  const bubbles = React.useMemo(() => {
    if (!isClient) return []

    return Array.from({ length: 20 }, (_, i) => {
      const size = Math.random() * 10 + 5
      return {
        id: i,
        size,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.8 + 0.2,
        duration: Math.random() * 2 + 3,
        delay: Math.random() * 2,
      }
    })
  }, [isClient])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {isClient && (
        <>
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600"
            animate={{
              background: backgroundGradients.map(([from, to]) => `linear-gradient(to bottom right, ${from}, ${to})`),
            }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {bubbles.map((bubble) => (
            <motion.div
              key={`bubble-${bubble.id}`}
              className="absolute rounded-full bg-white"
              style={{
                left: bubble.left,
                top: bubble.top,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                opacity: bubble.opacity,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: bubble.duration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: bubble.delay,
              }}
            />
          ))}

          <WaveAnimation isClient={isClient} />
        </>
      )}
    </div>
  )
}

function WaveAnimation({ isClient }: { isClient: boolean }) {
  // Generate stable IDs for SVG elements
  const gradientId1 = useId()
  const gradientId2 = useId()
  const gradientId3 = useId()

  const waveGradientIds = [gradientId1, gradientId2, gradientId3]

  return (
    <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-56 md:h-64 overflow-hidden">
      {isClient &&
        [0, 1, 2].map((index) => (
          <svg
            key={`wave-${index}`}
            viewBox="0 0 1440 320"
            className="absolute bottom-0 w-full h-full"
            preserveAspectRatio="none"
            style={{ zIndex: index }}
          >
            <defs>
              <motion.linearGradient
                id={waveGradientIds[index]}
                gradientTransform="rotate(90)"
                animate={{
                  gradientTransform: backgroundGradients.map((_, i) => `rotate(${90 + i * 5})`),
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 30,
                  ease: "easeInOut",
                }}
              >
                {backgroundGradients.map(([from, to], i) => (
                  <React.Fragment key={`gradient-stop-${index}-${i}`}>
                    <motion.stop
                      offset={`${(i * 100) / (backgroundGradients.length - 1)}%`}
                      animate={{
                        stopColor: [from, to],
                        stopOpacity: [0.5, 0.4],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 30,
                        ease: "easeInOut",
                      }}
                    />
                    {i < backgroundGradients.length - 1 && (
                      <motion.stop
                        offset={`${((i + 0.5) * 100) / (backgroundGradients.length - 1)}%`}
                        animate={{
                          stopColor: [to, backgroundGradients[i + 1][0]],
                          stopOpacity: [0.45, 0.45],
                        }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 30,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                  </React.Fragment>
                ))}
              </motion.linearGradient>
            </defs>

            <motion.path
              fill={`url(#${waveGradientIds[index]})`}
              animate={{
                d: [
                  "M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,144C672,128,768,96,864,90.7C960,85,1056,107,1152,122.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,96L48,101.3C96,107,192,117,288,112C384,107,480,85,576,74.7C672,64,768,64,864,80C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,128L48,122.7C96,117,192,107,288,101.3C384,96,480,96,576,85.3C672,75,768,53,864,58.7C960,64,1056,96,1152,106.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                ],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: 12 - index * 2.5,
                ease: "easeInOut",
              }}
              style={{
                opacity: 0.2 + index * 0.05,
                filter: `blur(${index * 0.5}px)`,
              }}
            />
          </svg>
        ))}

      {isClient && (
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                transparent,
                rgba(255, 255, 255, 0.1) 15%,
                transparent 30%
              )
            `,
            animation: "shimmer 7s infinite linear",
          }}
        />
      )}

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  )
}

