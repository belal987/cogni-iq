export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950">
      {/* Zen Header */}
      <header className="border-b border-zinc-900 bg-zinc-950/50 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-center px-4">
          <span className="text-lg font-bold tracking-tight text-zinc-100">
            Cogni<span className="text-emerald-500">IQ</span> Assessment
          </span>
        </div>
      </header>
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
}
