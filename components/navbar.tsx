"use client";

import Link from "next/link";
import { Brain, Menu, User, Sparkles, LogOut, LayoutDashboard, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/app/actions/auth";

export function Navbar({ userId }: { userId?: string }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <Sparkles className="h-6 w-6 text-zinc-950" />
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-100">
              Cogni<span className="text-emerald-500">IQ</span>
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/practice" className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors">
            Practice
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {!userId ? (
            <>
              <Link href="/login" className="hidden sm:block">
                <Button variant="ghost" className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900">
                  Log in
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-emerald-500 text-zinc-950 hover:bg-emerald-400 font-semibold px-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  Sign Up
                </Button>
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="hidden sm:block">
                <Button variant="ghost" className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 gap-2">
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 p-0 overflow-hidden ring-offset-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
                  <User className="h-5 w-5 text-emerald-500" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-zinc-900 border-zinc-800 text-zinc-100 p-2">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-zinc-800" />
                  <DropdownMenuItem className="focus:bg-zinc-800 focus:text-zinc-100">
                    <Link href="/dashboard" className="flex items-center gap-2 w-full">
                      <LayoutDashboard className="h-4 w-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-zinc-800 focus:text-zinc-100">
                    <Link href="/profile" className="flex items-center gap-2 w-full">
                      <User className="h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-zinc-800 focus:text-zinc-100">
                    <Link href="/settings" className="flex items-center gap-2 w-full">
                      <Settings className="h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-zinc-800" />
                  <DropdownMenuItem 
                    className="focus:bg-red-500/10 focus:text-red-500 text-red-400 cursor-pointer"
                    onClick={() => logout()}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
                <Menu className="h-6 w-6" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-zinc-900 border-zinc-800 text-zinc-100 p-2">
                <DropdownMenuItem>
                  <Link href="/practice">Practice</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/pricing">Pricing</Link>
                </DropdownMenuItem>
                {!userId ? (
                  <>
                    <DropdownMenuItem>
                      <Link href="/login">Log in</Link>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem>
                      <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => logout()}>
                      Log out
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
