import Link from "next/link";
export default function TopBar() {
  return (
    <nav className="w-full backdrop-blur-md bg-white/5 border-b border-white/20 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-lg font-bold bg-gradient-to-r from-purple-300 to-pink-500 text-transparent bg-clip-text" style={{ fontFamily: 'var(--font-geist-sans)' }}>
        <span>Mock company 🍽️</span>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link href={'/checkout'}> Go to checkout</Link></button>
    </nav>
  );
}