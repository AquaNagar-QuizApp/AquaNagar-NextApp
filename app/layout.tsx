import type { Metadata } from 'next'
import './globals.css'
import { AudioProvider } from '@/context/AudioContext'
import AudioPlayer from '@/components/AudioPlayer'
import AudioToggleButton  from '@/components/AudioToggle'
import LogoutButton from '@/components/Logout'
// import AudioPlayer from '@/components/AudioPlayer'

export const metadata: Metadata = {
  title: 'Aqua Nagar',
  // description: 'Created by Mahesh'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AudioProvider>
          <AudioPlayer />
          
          <AudioToggleButton />
          
          {children}
        </AudioProvider>
      </body>
    </html>
  )
}


// "use client"

// import './globals.css'
// import { useEffect, useMemo, useState } from "react"
// import { usePathname } from "next/navigation"
// import { Howl } from "howler"

// export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
//   const [isPlaying, setIsPlaying] = useState(false)
//   const [hasMounted, setHasMounted] = useState(false) // To handle hydration issues
//   const pathname = usePathname()

//   // Memoize BGM instance
//   const bgm = useMemo(() => {
//     return new Howl({
//       src: ["/songs/bgm1.mp3"],
//       volume: 0.3,
//       loop: true,
//     })
//   }, [])

//   // Hydration fix: Ensure BGM only runs client-side
//   useEffect(() => {
//     setHasMounted(true)
//   }, [])

//   // Start BGM after login
//   useEffect(() => {
//     if (!hasMounted) return // Prevent running before the component has mounted
//     const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
//     if (isLoggedIn && !isPlaying) {
//       setIsPlaying(true)
//       bgm.play()
//     }
//   }, [hasMounted, isPlaying, bgm])

//   // Stop BGM when on login page
//   useEffect(() => {
//     if (pathname === "/login") {
//       setIsPlaying(false)
//       bgm.stop()
//     }
//   }, [pathname, bgm])

//   return (
//     <html lang="en">
//       <body>
//         {/* Play/Pause BGM control button */}
//         {isPlaying && (
//           <button
//             onClick={() => {
//               setIsPlaying(!isPlaying)
//               if (isPlaying) bgm.pause()
//               else bgm.play()
//             }}
//             className="fixed top-4 right-4 bg-blue-600 text-white px-3 py-2 rounded-lg"
//           >
//             {isPlaying ? "Pause BGM" : "Play BGM"}
//           </button>
//         )}

//         {children}
//       </body>
//     </html>
//   )
// }
