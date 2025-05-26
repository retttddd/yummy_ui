import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "yummy-ui",
  description: "your fast paced menu",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

function TopBar() {
  return (
    <header className="w-full backdrop-blur-md bg-white/5 border-b border-white/20 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-lg font-bold bg-gradient-to-r from-purple-300 to-pink-500 text-transparent bg-clip-text" style={{ fontFamily: 'var(--font-geist-sans)' }}>
        🍽️ DEMO COMPANY
      </div>
    </header>
  );
}


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <TopBar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
