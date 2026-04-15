"use client";

import React, { useActionState } from "react";
import Link from "next/link";
import { login } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Lock, Mail, Loader2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [state, action, isPending] = useActionState(login, undefined);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-xl text-white">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/20">
            <Brain className="w-7 h-7 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight">Welcome back</CardTitle>
          <CardDescription className="text-slate-400">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={action} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-300">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                <Input
                  id="email"
                  name="email"
                  placeholder="m@example.com"
                  type="email"
                  required
                  className="pl-10 bg-slate-950/50 border-slate-800 text-white placeholder:text-slate-600 focus:ring-indigo-500"
                />
              </div>
              {state?.errors?.email && (
                <p className="text-sm text-red-500 mt-1">{state.errors.email[0]}</p>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-slate-300">Password</Label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="pl-10 bg-slate-950/50 border-slate-800 text-white placeholder:text-slate-600 focus:ring-indigo-500"
                />
              </div>
              {state?.errors?.password && (
                <p className="text-sm text-red-500 mt-1">{state.errors.password[0]}</p>
              )}
            </div>
            {state?.message && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
                {state.message}
              </div>
            )}
            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white border-none h-11 text-base font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              {isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <>
                  Sign In <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-center gap-1 text-sm text-slate-400 border-t border-slate-800/50 pt-6">
          <span>Don't have an account?</span>
          <Link
            href="/register"
            className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
          >
            Create account
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
