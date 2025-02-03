export type QuizSetName = "Set 1" | "Set 2" | "Set 3" | "Set 4"

export interface Question {
  type: "text" | "image"
  question: string
  options: string[]
  correctAnswer: string
  imageUrl?: string
}

export interface QuizSet {
  name: QuizSetName
  sections: Question[][]
}

export interface User {
  name: string
  department: string
  designation: string
  email: string
  phone: string
}

export interface QuizProps {
  quizSet: QuizSet
  onComplete: (score: number) => void
}

export interface LoginProps {
  onLogin: (user: User) => void
}

export interface QuizSelectionProps {
  onSelect: (quizSetName: QuizSetName) => void
}

export interface CertificateProps {
  user: User
  score: number
}

