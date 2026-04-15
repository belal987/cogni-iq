import { create } from "zustand";

export type Question = {
  id: string;
  question: string;
  type: "pattern" | "logic" | "math" | "verbal";
  difficulty: "easy" | "medium" | "hard";
  options: { text: string; isCorrect: boolean }[];
  explanation: string;
  tags: string[];
};

interface TestState {
  currentQuestionIndex: number;
  answers: Record<string, number>; // questionId -> optionIndex
  isFinished: boolean;
  timeLeft: number;
  startTest: () => void;
  setAnswer: (questionId: string, optionIndex: number) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  finishTest: () => void;
  resetTest: () => void;
  tick: () => void;
}

export const useTestStore = create<TestState>((set) => ({
  currentQuestionIndex: 0,
  answers: {},
  isFinished: false,
  timeLeft: 20 * 60, // 20 minutes in seconds

  startTest: () => set({ isFinished: false, currentQuestionIndex: 0, answers: {}, timeLeft: 20 * 60 }),
  
  setAnswer: (questionId, optionIndex) => 
    set((state) => ({
      answers: { ...state.answers, [questionId]: optionIndex }
    })),

  nextQuestion: () => set((state) => ({ currentQuestionIndex: state.currentQuestionIndex + 1 })),
  
  prevQuestion: () => set((state) => ({ currentQuestionIndex: Math.max(0, state.currentQuestionIndex - 1) })),

  finishTest: () => set({ isFinished: true }),

  resetTest: () => set({ currentQuestionIndex: 0, answers: {}, isFinished: false, timeLeft: 20 * 60 }),

  tick: () => set((state) => ({ timeLeft: Math.max(0, state.timeLeft - 1) })),
}));


import { create } from "zustand";
import { AppPage, Question, TestResult, TestState, UserProfile } from "./types";
import { questions as allQuestions } from "./questions";

interface AppState {
  // Navigation
  currentPage: AppPage;
  setCurrentPage: (page: AppPage) => void;

  // Auth
  isAuthenticated: boolean;
  user: UserProfile | null;
  login: (email: string, password: string) => void;
  register: (name: string, email: string, password: string) => void;
  logout: () => void;

  // Test
  testState: TestState;
  startTest: (questionCount?: number) => void;
  answerQuestion: (questionIndex: number, optionIndex: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  completeTest: () => void;
  resetTest: () => void;
  tick: () => void;

  // Results
  lastResult: TestResult | null;
  testHistory: TestResult[];

  // Practice
  practiceCategory: string;
  practiceDifficulty: string;
  setPracticeCategory: (cat: string) => void;
  setPracticeDifficulty: (diff: string) => void;
  practiceCurrentIndex: number;
  practiceAnswers: Record<number, number>;
  practiceShowExplanation: boolean;
  practiceQuestions: Question[];
  setPracticeQuestions: () => void;
  answerPractice: (questionIndex: number, optionIndex: number) => void;
  nextPractice: () => void;
  prevPractice: () => void;
  toggleExplanation: () => void;
  resetPractice: () => void;

  // Theme
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function calculateIQ(correct: number, total: number): number {
  const percentage = correct / total;
  // IQ mapped: 40% correct ≈ 85, 60% ≈ 100, 80% ≈ 115, 95% ≈ 130
  const iq = Math.round(70 + percentage * 65);
  return Math.min(160, Math.max(70, iq));
}

function getCategoryScores(
  questions: Question[],
  answers: Record<number, number>
): { pattern: number; logic: number; math: number; verbal: number } {
  const categories = ["pattern", "logic", "math", "verbal"] as const;
  const scores = { pattern: 0, logic: 0, math: 0, verbal: 0 };

  for (const cat of categories) {
    const catQuestions = questions.filter((q) => q.type === cat);
    const catCorrect = catQuestions.filter((q) => {
      const answer = answers[questions.indexOf(q)];
      return answer !== undefined && q.options[answer]?.isCorrect;
    }).length;
    scores[cat] = catQuestions.length > 0
      ? Math.round((catCorrect / catQuestions.length) * 100)
      : 0;
  }

  return scores;
}

export const useAppStore = create<AppState>((set, get) => ({
  // Navigation
  currentPage: "landing",
  setCurrentPage: (page) => set({ currentPage: page }),

  // Auth
  isAuthenticated: false,
  user: null,
  login: (email, _password) =>
    set({
      isAuthenticated: true,
      user: {
        name: email.split("@")[0],
        email,
        testsTaken: 3,
        averageScore: 72,
        bestScore: 118,
        joinDate: "2025-12-01",
      },
    }),
  register: (name, email, _password) =>
    set({
      isAuthenticated: true,
      user: {
        name,
        email,
        testsTaken: 0,
        averageScore: 0,
        bestScore: 0,
        joinDate: new Date().toISOString().split("T")[0],
      },
    }),
  logout: () => set({ isAuthenticated: false, user: null, currentPage: "landing" }),

  // Test
  testState: {
    currentQuestionIndex: 0,
    answers: {},
    isStarted: false,
    isCompleted: false,
    timeElapsed: 0,
    questions: [],
  },
  startTest: (questionCount = 20) => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(questionCount, allQuestions.length));
    set({
      testState: {
        currentQuestionIndex: 0,
        answers: {},
        isStarted: true,
        isCompleted: false,
        timeElapsed: 0,
        questions: selected,
      },
      currentPage: "test",
    });
  },
  answerQuestion: (questionIndex, optionIndex) =>
    set((state) => ({
      testState: {
        ...state.testState,
        answers: { ...state.testState.answers, [questionIndex]: optionIndex },
      },
    })),
  nextQuestion: () =>
    set((state) => ({
      testState: {
        ...state.testState,
        currentQuestionIndex: Math.min(
          state.testState.currentQuestionIndex + 1,
          state.testState.questions.length - 1
        ),
      },
    })),
  previousQuestion: () =>
    set((state) => ({
      testState: {
        ...state.testState,
        currentQuestionIndex: Math.max(
          state.testState.currentQuestionIndex - 1,
          0
        ),
      },
    })),
  completeTest: () => {
    const state = get();
    const { questions, answers, timeElapsed } = state.testState;
    const correctAnswers = questions.filter(
      (q, i) => answers[i] !== undefined && q.options[answers[i]]?.isCorrect
    ).length;
    const iqScore = calculateIQ(correctAnswers, questions.length);
    const categoryScores = getCategoryScores(questions, answers);
    const result: TestResult = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      score: Math.round((correctAnswers / questions.length) * 100),
      iqScore,
      totalQuestions: questions.length,
      correctAnswers,
      timeTaken: timeElapsed,
      categoryScores,
    };
    set((s) => ({
      testState: { ...s.testState, isCompleted: true },
      lastResult: result,
      testHistory: [...s.testHistory, result],
      currentPage: "results",
      user: s.user
        ? {
            ...s.user,
            testsTaken: s.user.testsTaken + 1,
            averageScore: Math.round(
              (s.user.averageScore * s.user.testsTaken + result.score) /
              (s.user.testsTaken + 1)
            ),
            bestScore: Math.max(s.user.bestScore, iqScore),
          }
        : null,
    }));
  },
  resetTest: () =>
    set({
      testState: {
        currentQuestionIndex: 0,
        answers: {},
        isStarted: false,
        isCompleted: false,
        timeElapsed: 0,
        questions: [],
      },
    }),
  tick: () =>
    set((state) => ({
      testState: {
        ...state.testState,
        timeElapsed: state.testState.timeElapsed + 1,
      },
    })),

  // Results
  lastResult: null,
  testHistory: [],

  // Practice
  practiceCategory: "all",
  practiceDifficulty: "all",
  setPracticeCategory: (cat) => set({ practiceCategory: cat }),
  setPracticeDifficulty: (diff) => set({ practiceDifficulty: diff }),
  practiceCurrentIndex: 0,
  practiceAnswers: {},
  practiceShowExplanation: false,
  practiceQuestions: [],
  setPracticeQuestions: () => {
    const state = get();
    let filtered = [...allQuestions];
    if (state.practiceCategory !== "all") {
      filtered = filtered.filter((q) => q.type === state.practiceCategory);
    }
    if (state.practiceDifficulty !== "all") {
      filtered = filtered.filter((q) => q.difficulty === state.practiceDifficulty);
    }
    set({
      practiceQuestions: filtered.sort(() => Math.random() - 0.5),
      practiceCurrentIndex: 0,
      practiceAnswers: {},
      practiceShowExplanation: false,
    });
  },
  answerPractice: (qi, oi) =>
    set((s) => ({
      practiceAnswers: { ...s.practiceAnswers, [qi]: oi },
      practiceShowExplanation: true,
    })),
  nextPractice: () =>
    set((s) => ({
      practiceCurrentIndex: Math.min(
        s.practiceCurrentIndex + 1,
        s.practiceQuestions.length - 1
      ),
      practiceShowExplanation: false,
    })),
  prevPractice: () =>
    set((s) => ({
      practiceCurrentIndex: Math.max(s.practiceCurrentIndex - 1, 0),
      practiceShowExplanation: false,
    })),
  toggleExplanation: () =>
    set((s) => ({ practiceShowExplanation: !s.practiceShowExplanation })),
  resetPractice: () =>
    set({
      practiceCurrentIndex: 0,
      practiceAnswers: {},
      practiceShowExplanation: false,
      practiceQuestions: [],
    }),

  // Theme
  darkMode: false,
  toggleDarkMode: () =>
    set((s) => {
      const newMode = !s.darkMode;
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("dark", newMode);
      }
      return { darkMode: newMode };
    }),
}));
