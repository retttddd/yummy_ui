
export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#2e026d] to-[#15162c] text-white px-4">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 w-full max-w-sm shadow-2xl">
        <h1 className="text-center text-2xl font-semibold mb-6">Podaj numer telefonu</h1>
        <form className="flex flex-col gap-4">
          <input
            type="tel"
            pattern="[0-9]{9}"
            maxLength={9}
            inputMode="numeric"
            placeholder="509322734"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
