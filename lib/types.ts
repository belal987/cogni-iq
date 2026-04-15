export type QuestionType = "pattern" | "logic" | "math" | "verbal";
export type Difficulty = "easy" | "medium" | "hard";

export interface QuestionOption {
  text: string;
  isCorrect: boolean;
}

export interface QuestionStats {
  timesAnswered: number;
  timesCorrect: number;
}

export interface Question {
  id: number;
  question: string;
  type: QuestionType;
  difficulty: Difficulty;
  options: QuestionOption[];
  explanation: string;
  tags: string[];
  stats: QuestionStats;
  createdAt: string;
}

export interface TestResult {
  id: string;
  date: string;
  score: number;
  iqScore: number;
  totalQuestions: number;
  correctAnswers: number;
  timeTaken: number; // in seconds
  categoryScores: {
    pattern: number;
    logic: number;
    math: number;
    verbal: number;
  };
}

export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
  testsTaken: number;
  averageScore: number;
  bestScore: number;
  joinDate: string;
}

export type AppPage = "landing" | "test" | "results" | "dashboard" | "practice" | "login" | "register";

export interface TestState {
  currentQuestionIndex: number;
  answers: Record<number, number>;
  isStarted: boolean;
  isCompleted: boolean;
  timeElapsed: number;
  questions: Question[];
}
