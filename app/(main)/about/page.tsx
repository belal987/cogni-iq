import { Brain, Users, Award, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 lg:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-6xl font-bold font-heading text-zinc-100 mb-6">About CogniIQ</h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
          We are dedicated to making cognitive assessment accessible, accurate, and scientifically validated through the power of modern artificial intelligence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card className="p-8 bg-zinc-900 border-zinc-800">
          <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
            <Brain className="h-6 w-6 text-emerald-500" />
          </div>
          <h2 className="text-2xl font-bold text-zinc-100 mb-4">Our Mission</h2>
          <p className="text-zinc-400 leading-relaxed">
            To provide individuals with deep insights into their cognitive strengths and weaknesses, helping them unlock their full potential through personalized training and reliable assessment.
          </p>
        </Card>
        
        <Card className="p-8 bg-zinc-900 border-zinc-800">
          <div className="h-12 w-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6">
            <ShieldCheck className="h-6 w-6 text-indigo-500" />
          </div>
          <h2 className="text-2xl font-bold text-zinc-100 mb-4">Our Standard</h2>
          <p className="text-zinc-400 leading-relaxed">
            Every question in our database is strictly vetted by psychometric experts and AI models to ensure high reliability and culture-fair testing standards.
          </p>
        </Card>
      </div>

      <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 lg:p-12 text-center">
        <div className="flex justify-center -space-x-4 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-12 w-12 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center text-zinc-500 text-xs font-bold">
              <Users className="h-4 w-4" />
            </div>
          ))}
          <div className="h-12 w-12 rounded-full border-2 border-zinc-950 bg-emerald-500 flex items-center justify-center text-zinc-950 text-xs font-bold">
            2M+
          </div>
        </div>
        <h3 className="text-2xl font-bold text-zinc-100 mb-4">Join 2 Million+ Users</h3>
        <p className="text-zinc-400 max-w-xl mx-auto mb-8">
          Experience the most advanced cognitive testing platform and start your journey of self-discovery today.
        </p>
      </div>
    </div>
  );
}
