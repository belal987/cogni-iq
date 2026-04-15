import Link from "next/link";
import { Brain, Github, Twitter, Linkedin, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <Sparkles className="h-5 w-5 text-zinc-950" />
              </div>
              <span className="text-lg font-bold tracking-tight text-zinc-100">
                Cogni<span className="text-emerald-500">IQ</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-400 max-w-xs mb-6">
              Unlock your cognitive potential with the world's most advanced AI-powered IQ testing platform.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-zinc-500 hover:text-emerald-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-emerald-500 transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-emerald-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-100 mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/test" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">IQ Test</Link></li>
              <li><Link href="/practice" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">Practice Mode</Link></li>
              <li><Link href="/results" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">Sample Results</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-100 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} CogniIQ. All rights reserved.
            </p>
            <p className="text-[10px] text-zinc-600 font-medium uppercase tracking-widest">
              Developed by <span className="text-emerald-500/80">Belal Mahmoud Abdelfattah</span>
            </p>
          </div>
          <div className="flex gap-6 text-xs text-zinc-500">
            <Link href="#" className="hover:text-zinc-300">Terms of Service</Link>
            <Link href="#" className="hover:text-zinc-300">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
