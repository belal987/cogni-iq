import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getSession } from "@/lib/session";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <>
      <Navbar userId={session?.userId} />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
