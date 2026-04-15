"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, Flag, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTestStore, Question } from "@/lib/store";

// Placeholder questions following the user's exact JSON structure requirements
const MOCK_QUESTIONS: Question[] = [
  {
    id: "1",
    question: "Complete the sequence: 2, 4, 8, 16, ...",
    type: "math",
    difficulty: "easy",
    options: [
      { text: "24", isCorrect: false },
      { text: "32", isCorrect: true },
      { text: "20", isCorrect: false },
      { text: "64", isCorrect: false }
    ],
    explanation: "Each number in the sequence is double the preceding one (geometric progression with ratio 2).",
    tags: ["sequence", "numbers"]
  },
  {
    id: "2",
    question: "If all Bloops are Rips, and all Rips are Zips, then all Bloops are definitely Zips.",
    type: "logic",
    difficulty: "medium",
    options: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
      { text: "Cannot be determined", isCorrect: false },
      { text: "Only if Zips are Bloops", isCorrect: false }
    ],
    explanation: "This is a basic transitive syllogism: A -> B and B -> C implies A -> C.",
    tags: ["logic", "deduction"]
  }
];

export default function TestPage() {
  const { 
    currentQuestionIndex, 
    answers, 
    setAnswer, 
    nextQuestion, 
    prevQuestion, 
    timeLeft, 
    tick,
    isFinished,
    finishTest
  } = useTestStore();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => tick(), 1000);
    return () => clearInterval(timer);
  }, [tick]);

  if (!mounted) return null;

  const currentQuestion = MOCK_QUESTIONS[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / MOCK_QUESTIONS.length) * 100;
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex-1 flex flex-col container max-w-4xl mx-auto px-4 py-8 lg:py-12">
      {/* Test Status Bar */}
      <div className="flex flex-col gap-6 mb-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LayoutGrid className="h-5 w-5 text-emerald-500" />
            <span className="text-sm font-semibold text-zinc-100 uppercase tracking-wider">
              Question {currentQuestionIndex + 1} of {MOCK_QUESTIONS.length}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-1.5 rounded-full shadow-sm">
            <Clock className="h-4 w-4 text-emerald-500" />
            <span className={`text-sm font-mono font-bold ${timeLeft < 300 ? 'text-red-400' : 'text-zinc-100'}`}>
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>
        <Progress value={progress} className="h-2 bg-zinc-900" />
      </div>

      {/* Main Question Interface */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full"
          >
            <Card className="p-8 lg:p-12 bg-zinc-900 border-zinc-800 shadow-2xl rounded-3xl">
              <div className="flex gap-2 mb-6">
                <Badge variant="outline" className="bg-emerald-500/10 border-emerald-500/20 text-emerald-400 capitalize">
                  {currentQuestion.type}
                </Badge>
                <Badge variant="outline" className="bg-zinc-800 border-zinc-700 text-zinc-400 capitalize">
                  {currentQuestion.difficulty}
                </Badge>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-zinc-100 mb-10 leading-snug">
                {currentQuestion.question}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = answers[currentQuestion.id] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setAnswer(currentQuestion.id, idx)}
                      className={`
                        flex items-center justify-between p-4 sm:p-6 rounded-2xl border-2 text-left transition-all group
                        ${isSelected 
                          ? "bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" 
                          : "bg-zinc-950/50 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-800/50"
                        }
                      `}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className={`
                          flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg border text-xs sm:text-sm font-bold
                          ${isSelected ? "bg-emerald-500 border-emerald-500 text-zinc-950" : "bg-zinc-900 border-zinc-800 group-hover:border-zinc-600"}
                        `}>
                          {String.fromCharCode(65 + idx)}
                        </div>
                        <span className="font-medium text-base sm:text-lg">{option.text}</span>
                      </div>
                      {isSelected && (
                        <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,1)]"></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Footer */}
      <div className="mt-12 flex items-center justify-between">
        <Button 
          variant="ghost" 
          onClick={prevQuestion}
          disabled={currentQuestionIndex === 0}
          className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 h-12 px-6"
        >
          <ChevronLeft className="mr-2 h-5 w-5" />
          Previous
        </Button>
        
        <div className="flex gap-4">
          <Button variant="ghost" className="text-zinc-500 h-12 px-6 hover:text-red-400">
            <Flag className="mr-2 h-4 w-4" />
            Report
          </Button>
          
          {currentQuestionIndex === MOCK_QUESTIONS.length - 1 ? (
            <Button 
              size="lg" 
              onClick={finishTest}
              className="bg-emerald-500 text-zinc-950 hover:bg-emerald-400 font-bold h-12 px-10 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              Finish Test
            </Button>
          ) : (
            <Button 
              size="lg" 
              onClick={nextQuestion}
              disabled={answers[currentQuestion.id] === undefined}
              className="bg-emerald-500 text-zinc-950 hover:bg-emerald-400 font-bold h-12 px-10 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              Next
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
