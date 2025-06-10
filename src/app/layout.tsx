import "~/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { type Metadata } from "next";
import { Geist } from "next/font/google";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import LoggedOutContent from "~/app/_components/loggedOutContent";
import { getCompany, getProducts } from "~/server/queries";

export const metadata: Metadata = {
  title: "yummy-ui",
  description: "your fast paced menu",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

async function TopBar() {
  const posts = await getCompany();
  return (
    <nav className="w-full backdrop-blur-md bg-white/5 border-b border-white/20 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-lg font-bold bg-gradient-to-r from-purple-300 to-pink-500 text-transparent bg-clip-text" style={{ fontFamily: 'var(--font-geist-sans)' }}>
        {posts.map((post) => (
          <span key={post.id}>🍽️{post.name}</span>
        ))}
      </div>
    </nav>
  );
}



export default async function RootLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode; }>) {
  const products = await getProducts();
  const featuredProducts = products.filter((product) => product.featured === true);
  return (
    <ClerkProvider>
      <SpeedInsights/>
      <html lang="en" className={geist.variable}>
      <body className="min-h-screen flex flex-col">
      { TopBar()}
      <SignedOut>
        <LoggedOutContent
        featuredProjects={featuredProducts}
        >
          <SignInButton mode="modal">
            <div className="cursor-pointer max-w-2xl p-6 sm:p-8 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg hover:bg-white/20 transition">
              <p className="text-center text-lg font-semibold">Sign in to continue</p>
            </div>
          </SignInButton>
        </LoggedOutContent>
      </SignedOut>
      <SignedIn>
        <main className="flex-1">
          <SignOutButton/>
          {children}
          {modal}
          <div id="modal-root" />
        </main>
      </SignedIn>
      </body>
      </html>
    </ClerkProvider>
  );
}
