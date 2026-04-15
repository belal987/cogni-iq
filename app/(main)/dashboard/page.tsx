"use client";

import { motion } from "framer-motion";
import { 
  Trophy, 
  History, 
  LineChart as LineChartIcon, 
  Target, 
  ChevronRight, 
  TrendingUp,
  Brain,
  Zap
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MOCK_HISTORY = [
  { date: 'Jan 12', score: 108 },
  { date: 'Feb 05', score: 112 },
  { date: 'Mar 18', score: 118 },
  { date: 'Apr 10', score: 128 },
];

const TESTS_LOG = [
  { id: 1, date: '2026-04-10', score: 128, type: 'Full IQ Test', percentile: '98.4th' },
  { id: 2, date: '2026-03-18', score: 118, type: 'Logic Focus', percentile: '88th' },
  { id: 3, date: '2026-02-05', score: 112, type: 'Mental Math', percentile: '78th' },
];

export default function DashboardPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8 lg:py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-zinc-100">Welcome Back, Alex</h1>
          <p className="text-zinc-400">Track your progress and cognitive growth here.</p>
        </div>
        <Button className="bg-emerald-500 text-zinc-950 hover:bg-emerald-400 font-bold">
          Take New Assessment
        </Button>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Latest IQ Score", value: "128", icon: Trophy, trend: "+10 pts", color: "emerald" },
          { label: "Global Percentile", value: "98.4th", icon: Target, trend: "Top 2%", color: "indigo" },
          { label: "Tests Taken", value: "12", icon: History, trend: "3 this month", color: "cyan" },
          { label: "Best Domain", value: "Logic", icon: Brain, trend: "Superior", color: "purple" },
        ].map((stat, i) => (
          <Card key={i} className="p-6 bg-zinc-900 border-zinc-800">
            <div className="flex justify-between items-start mb-4">
              <div className="h-10 w-10 rounded-lg bg-zinc-950 flex items-center justify-center">
                <stat.icon className="h-5 w-5 text-emerald-500" />
              </div>
              <Badge variant="outline" className="border-emerald-500/20 text-emerald-400 text-[10px] uppercase tracking-wider">
                {stat.trend}
              </Badge>
            </div>
            <div className="text-sm text-zinc-500 mb-1">{stat.label}</div>
            <div className="text-2xl font-bold text-zinc-100">{stat.value}</div>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-10">
        {/* IQ Progress Chart */}
        <Card className="lg:col-span-2 p-8 bg-zinc-900 border-zinc-800">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <LineChartIcon className="h-5 w-5 text-emerald-400" />
              <h3 className="text-xl font-bold text-zinc-100">IQ Growth Over Time</h3>
            </div>
            <div className="flex items-center gap-1 text-emerald-400 text-sm font-medium">
              <TrendingUp className="h-4 w-4" />
              <span>+18.5% Growth</span>
            </div>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={MOCK_HISTORY}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis 
                  dataKey="date" 
                  stroke="#71717a" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  dy={10}
                />
                <YAxis 
                  stroke="#71717a" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  domain={[100, 140]}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px' }}
                  itemStyle={{ color: '#10b981' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#10b981" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: '#10b981', strokeWidth: 2, stroke: '#10b981' }}
                  activeDot={{ r: 6, fill: '#10b981', stroke: '#10b981' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Strengths Card */}
        <Card className="p-8 bg-zinc-900 border-zinc-800">
          <h3 className="text-xl font-bold text-zinc-100 mb-6 flex items-center gap-2">
            <Zap className="h-5 w-5 text-emerald-400" />
            Top Domains
          </h3>
          <div className="space-y-6">
            {[
              { label: "Pattern Recognition", score: 92 },
              { label: "Logical Deduction", score: 88 },
              { label: "Verbal Analogies", score: 76 },
              { label: "Speed & Accuracy", score: 65 },
            ].map((domain, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-300 font-medium">{domain.label}</span>
                  <span className="text-emerald-400 font-bold">{domain.score}%</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 rounded-full" 
                    style={{ width: `${domain.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-8 border-zinc-800 text-zinc-400 hover:text-emerald-400">
            View Deep Analysis
          </Button>
        </Card>
      </div>

      {/* History Log */}
      <h3 className="text-xl font-bold text-zinc-100 mb-6 flex items-center gap-2">
        <History className="h-5 w-5 text-emerald-400" />
        Recent Activity
      </h3>
      <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-950/50">
                <th className="px-6 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-widest">Test Type</th>
                <th className="px-6 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-widest text-center">IQ Score</th>
                <th className="px-6 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-widest">Percentile</th>
                <th className="px-6 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-widest"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {TESTS_LOG.map((test) => (
                <tr key={test.id} className="hover:bg-zinc-800/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-zinc-200">{test.type}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-400">{test.date}</td>
                  <td className="px-6 py-4 text-center">
                    <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 font-bold">
                      {test.score}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-400">{test.percentile}</td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="icon" className="text-zinc-500 group-hover:text-emerald-500">
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
