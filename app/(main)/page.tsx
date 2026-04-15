"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, Sparkles, Zap, BarChart3, ChevronRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-32 overflow-hidden flex flex-col items-center">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 -z-10 h-full w-full bg-zinc-950">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-emerald-500/10 opacity-50 blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 right-auto top-auto h-[400px] w-[400px] translate-x-[20%] -translate-y-[20%] rounded-full bg-indigo-500/10 opacity-30 blur-[100px]"></div>
        </div>

        <motion.div
          className="container mx-auto px-4 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 mb-6">
            <Sparkles className="h-4 w-4 text-emerald-400" />
            <span className="text-[10px] sm:text-xs font-medium text-emerald-400 uppercase tracking-widest">AI-Powered Cognitive Assessment</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-zinc-100 mb-6"
          >
            Test Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">IQ</span> in Minutes
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed px-4"
          >
            Unlock deep insights into your cognitive potential with our scientifically designed adaptive test.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/test" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)] group">
                Start Free Test
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/practice">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300">
                Try Practice Mode
              </Button>
            </Link>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-12 flex items-center justify-center gap-8 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-emerald-500" />
              <span>&lt;15 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span>No sign-up required</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-zinc-900/30 border-y border-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Tests Completed", value: "2M+" },
              { label: "Success Rate", value: "98%" },
              { label: "Countries", value: "150+" },
              { label: "User Rating", value: "4.9/5" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-zinc-100 mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-zinc-100 mb-4">Why Choose CogniIQ?</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Our platform combines psychometric science with modern AI to deliver accurate, insightful cognitive assessments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Adaptive Testing",
                description: "Our algorithm adjusts question difficulty in real-time based on your performance, ensuring accurate measurement across all skill levels.",
                icon: Brain,
                color: "text-emerald-400"
              },
              {
                title: "AI-Powered Analysis",
                description: "Get detailed breakdowns of your mental processing speed, spatial awareness, and logical depth.",
                icon: Zap,
                color: "text-cyan-400"
              },
              {
                title: "Instant Results",
                description: "No waiting. Get your IQ score, percentile ranking, and personalized feedback immediately after completion.",
                icon: BarChart3,
                color: "text-indigo-400"
              }
            ].map((feature, i) => (
              <Card key={i} className="p-8 bg-zinc-900 border-zinc-800 hover:border-emerald-500/50 transition-all group">
                <div className={`h-12 w-12 rounded-lg bg-zinc-950 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-zinc-100 mb-3">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-emerald-400 p-8 lg:p-16 text-center transform relative overflow-hidden shadow-[0_20px_50px_rgba(16,185,129,0.3)]">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 h-64 w-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="relative text-3xl lg:text-5xl font-bold text-zinc-950 mb-6">Ready to Discover Your IQ?</h2>
          <p className="relative text-emerald-900 lg:text-lg mb-10 max-w-2xl mx-auto font-medium">
            Join over 2 million people who have discovered their cognitive strengths with our scientifically validated assessment.
          </p>
          <Link href="/test" className="relative">
            <Button size="lg" className="h-14 px-10 text-lg font-bold bg-zinc-950 text-white hover:bg-zinc-900 transition-colors">
              Take the Test Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
