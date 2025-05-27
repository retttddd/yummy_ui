
"use client";

import { useState } from "react";
import { addUser } from "../../userActions";

export default function HomePage() {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<{
    message?: string;
    error?: string;
    isLoading?: boolean;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus({ isLoading: true });

    try {
      const result = await addUser(phone);

      if (result.success) {
        setStatus({ message: result.message });
        setPhone(""); // Clear input on success
      } else {
        setStatus({ error: result.error });
      }
    } catch (error) {
      setStatus({ error: "An unexpected error occurred. Please try again." });
    } finally {
      setStatus(prev => ({ ...prev, isLoading: false }));
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#2e026d] to-[#15162c] text-white px-4">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 w-full max-w-sm shadow-2xl">
        <h1 className="text-center text-2xl font-semibold mb-6">Enter your phone number</h1>

        {status.message && (
          <div className="mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-xl text-green-200">
            {status.message}
          </div>
        )}

        {status.error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-xl text-red-200">
            {status.error}
          </div>
        )}

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="tel"
            pattern="[0-9]{9}"
            maxLength={9}
            inputMode="numeric"
            placeholder="509322734"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={status.isLoading ?? !phone}
          >
            {status.isLoading ? "Processing..." : "Send"}
          </button>
        </form>
      </div>
    </main>
  );
}
