"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Share2, 
  RefreshCw, 
  Download, 
  Brain, 
  Target, 
  Zap, 
  BarChart3 
} from "lucide-react";
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from "recharts";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MOCK_DATA = [
  { subject: 'Logic', A: 120, fullMark: 150 },
  { subject: 'Pattern', A: 98, fullMark: 150 },
  { subject: 'Math', A: 86, fullMark: 150 },
  { subject: 'Verbal', A: 99, fullMark: 150 },
  { subject: 'Speed', A: 85, fullMark: 150 },
];

export default function ResultsPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 lg:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 mb-6"
        >
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-400">Assessment Complete</span>
        </motion.div>
        <h1 className="text-4xl lg:text-6xl font-bold text-zinc-100 mb-4">Your Psychometric Profile</h1>
        <p className="text-zinc-400 text-lg">Detailed analysis of your cognitive performance based on your recent test.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* IQ Score Hero Card */}
        <Card className="lg:col-span-1 p-8 bg-zinc-900 border-zinc-800 flex flex-col items-center justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 h-32 w-32 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-2">Estimated IQ</span>
          <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-cyan-400 mb-2">
            128
          </div>
          <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-6">
            Top 2% Globally
          </Badge>
          
          <div className="w-full pt-6 border-t border-zinc-800 space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-zinc-500">Percentile</span>
              <span className="text-zinc-100 font-semibold">98.4th</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-zinc-500">Status</span>
              <span className="text-emerald-400 font-semibold">Superior</span>
            </div>
          </div>
        </Card>

        {/* Radar Chart Card */}
        <Card className="lg:col-span-2 p-8 bg-zinc-900 border-zinc-800 flex flex-col items-center">
          <div className="w-full flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-zinc-100">Performance by Domain</h3>
            <div className="flex gap-2 text-xs">
              <div className="flex items-center gap-1 text-emerald-400">
                <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                <span>Current Score</span>
              </div>
            </div>
          </div>
          
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={MOCK_DATA}>
                <PolarGrid stroke="#27272a" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#a1a1aa', fontSize: 12 }} />
                <Radar
                  name="IQ Score"
                  dataKey="A"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Categories Breakdown */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          { label: "Logical Deduction", value: "High", icon: Brain, detail: "Strong transitive reasoning." },
          { label: "Pattern Recognition", value: "Superior", icon: Target, detail: "Excellent matrix analysis." },
          { label: "Processing Speed", value: "Average", icon: Zap, detail: "Room for improvement." },
          { label: "Mathematical Ability", value: "High", icon: BarChart3, detail: "Solid series comprehension." }
        ].map((item, i) => (
          <Card key={i} className="p-6 bg-zinc-900 border-zinc-800 hover:border-emerald-500/30 transition-colors">
            <div className="h-10 w-10 rounded-lg bg-zinc-950 flex items-center justify-center mb-4">
              <item.icon className="h-5 w-5 text-emerald-500" />
            </div>
            <h4 className="font-bold text-zinc-100 mb-1">{item.label}</h4>
            <div className="text-emerald-400 text-sm font-medium mb-3">{item.value}</div>
            <p className="text-xs text-zinc-500 leading-relaxed">{item.detail}</p>
          </Card>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button className="w-full sm:w-auto bg-emerald-500 text-zinc-950 hover:bg-emerald-400 font-bold h-12 px-8">
          <Share2 className="mr-2 h-4 w-4" />
          Share Results
        </Button>
        <Button variant="outline" className="w-full sm:w-auto border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300 h-12 px-8">
          <Download className="mr-2 h-4 w-4" />
          Download PDF Report
        </Button>
        <Button variant="ghost" className="w-full sm:w-auto text-zinc-500 hover:text-emerald-500 h-12 px-8">
          <RefreshCw className="mr-2 h-4 w-4" />
          Retake Test
        </Button>
      </div>
    </div>
  );
}
