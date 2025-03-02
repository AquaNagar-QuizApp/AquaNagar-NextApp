import type { Metadata } from 'next'
import './globals.css'
import { AudioProvider } from '@/context/AudioContext'
import AudioPlayer from '@/components/AudioPlayer'
import AudioToggleButton  from '@/components/AudioToggle'

export const metadata: Metadata = {
  title: 'Maruthu Nagar',
  description: 'Created and updated by Hi-Griv'
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
