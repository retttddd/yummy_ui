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
import { CounterStoreProvider } from "~/providers/order-store-provider";
import TopBar from "~/app/_components/topBar";
import { Toaster } from "sonner";


export const metadata: Metadata = {
  title: "yummy-ui",
  description: "your fast paced menu",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});


export default async function RootLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode; }>) {
  return (
    <ClerkProvider>
      <CounterStoreProvider>
      <html lang="en" className={geist.variable}>
      <body className="min-h-screen flex flex-col">
      { TopBar()}
      <SignedOut>
        <LoggedOutContent>
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
            <SpeedInsights/>
          </main>
          <Toaster />
      </SignedIn>
      </body>
      </html>
      </CounterStoreProvider>
    </ClerkProvider>
  );
}
