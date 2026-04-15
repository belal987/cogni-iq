"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Filter, 
  Search, 
  Brain, 
  Zap, 
  BarChart3, 
  Target,
  RefreshCw,
  CheckCircle2,
  XCircle,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Question } from "@/lib/store";

const PRACTICE_QUESTIONS: Question[] = [
  {
    id: "p1",
    question: "Complete the sequence: 1, 1, 2, 3, 5, 8, ...",
    type: "math",
    difficulty: "easy",
    options: [
      { text: "11", isCorrect: false },
      { text: "13", isCorrect: true },
      { text: "12", isCorrect: false },
      { text: "15", isCorrect: false }
    ],
    explanation: "This is the Fibonacci sequence, where each number is the sum of the two preceding ones.",
    tags: ["sequence", "fibonacci"]
  },
  {
    id: "p2",
    question: "Which word does not belong with the others?",
    type: "verbal",
    difficulty: "medium",
    options: [
      { text: "Clarinet", isCorrect: false },
      { text: "Flute", isCorrect: false },
      { text: "Violin", isCorrect: true },
      { text: "Oboe", isCorrect: false }
    ],
    explanation: "Violin is a string instrument, while the others are woodwind instruments.",
    tags: ["verbal", "categorization"]
  }
];

export default function PracticePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestion = PRACTICE_QUESTIONS[currentIdx];

  const handleAnswer = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setCurrentIdx((prev) => (prev + 1) % PRACTICE_QUESTIONS.length);
  };

  return (
    <div className="container max-w-5xl mx-auto px-4 py-8 lg:py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-3xl font-bold text-zinc-100">Practice Mode</h1>
          <p className="text-zinc-400">Master specific cognitive skills with immediate feedback.</p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <Tabs defaultValue="all" className="bg-zinc-900 border border-zinc-800 p-1 rounded-lg">
            <TabsList className="bg-transparent h-8">
              <TabsTrigger value="all" className="data-[state=active]:bg-zinc-800">All</TabsTrigger>
              <TabsTrigger value="easy" className="data-[state=active]:bg-zinc-800">Easy</TabsTrigger>
              <TabsTrigger value="medium" className="data-[state=active]:bg-zinc-800">Medium</TabsTrigger>
              <TabsTrigger value="hard" className="data-[state=active]:bg-zinc-800">Hard</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar Categories */}
        <div className="lg:col-span-1 space-y-2">
          <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-4 mb-4">Categories</div>
          {[
            { label: "All Topics", icon: Filter, id: "all" },
            { label: "Logic & Deduction", icon: Brain, id: "logic" },
            { label: "Pattern Recognition", icon: Target, id: "pattern" },
            { label: "Mathematical", icon: BarChart3, id: "math" },
            { label: "Verbal Reasoning", icon: Zap, id: "verbal" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                selectedCategory === cat.id 
                  ? "bg-emerald-500/10 text-emerald-400" 
                  : "text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300"
              }`}
            >
              <cat.icon className="h-4 w-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Practice Interface */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <Card className="p-8 bg-zinc-900 border-zinc-800 shadow-xl">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex gap-2">
                    <Badge variant="outline" className="bg-emerald-500/10 border-emerald-500/20 text-emerald-400 capitalize">
                      {currentQuestion.type}
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-800 border-zinc-700 text-zinc-400">
                      Question {currentIdx + 1}/50
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm" className="text-zinc-500 hover:text-emerald-500">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Reset Session
                  </Button>
                </div>

                <h2 className="text-2xl font-bold text-zinc-100 mb-8 leading-relaxed">
                  {currentQuestion.question}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {currentQuestion.options.map((option, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = option.isCorrect;
                    
                    let stateClass = "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-900";
                    if (isSubmitted) {
                      if (isCorrect) stateClass = "bg-emerald-500/10 border-emerald-500 text-emerald-400";
                      else if (isSelected) stateClass = "bg-red-500/10 border-red-500 text-red-400";
                      else stateClass = "bg-zinc-950 border-zinc-800 text-zinc-600 opacity-50";
                    } else if (isSelected) {
                      stateClass = "bg-emerald-500/5 border-emerald-500/50 text-emerald-400";
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        disabled={isSubmitted}
                        className={`flex items-center justify-between p-6 rounded-2xl border-2 text-left transition-all group ${stateClass}`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`
                            flex h-8 w-8 items-center justify-center rounded-lg border text-sm font-bold transition-colors
                            ${isSelected ? "bg-emerald-500 border-emerald-500 text-zinc-950" : "bg-zinc-900 border-zinc-800 group-hover:border-zinc-600"}
                          `}>
                            {String.fromCharCode(65 + idx)}
                          </div>
                          <span className="font-medium">{option.text}</span>
                        </div>
                        {isSubmitted && isCorrect && <CheckCircle2 className="h-5 w-5 text-emerald-500" />}
                        {isSubmitted && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-500" />}
                      </button>
                    );
                  })}
                </div>

                {!isSubmitted ? (
                  <Button 
                    className="w-full h-12 bg-emerald-500 text-zinc-950 hover:bg-emerald-400 font-bold text-lg"
                    disabled={selectedOption === null}
                    onClick={() => setIsSubmitted(true)}
                  >
                    Check Answer
                  </Button>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-6 pt-6 border-t border-zinc-800"
                  >
                    <div className="bg-zinc-950 rounded-2xl p-6 border border-zinc-800">
                      <div className="text-zinc-100 font-bold mb-2 flex items-center gap-2">
                        <Brain className="h-5 w-5 text-emerald-500" />
                        Explanation
                      </div>
                      <p className="text-zinc-400 leading-relaxed text-sm">
                        {currentQuestion.explanation}
                      </p>
                    </div>
                    <Button 
                      className="w-full h-12 bg-zinc-100 text-zinc-950 hover:bg-zinc-200 font-bold text-lg"
                      onClick={handleNext}
                    >
                      Next Question
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
