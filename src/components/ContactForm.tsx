"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message }),
      });

      if (res.ok) {
        setResult({
          success: true,
          text: "보냈어요!",
        });
        setName("");
        setMessage("");
      } else {
        const errorText = await res.text();
        setResult({
          success: false,
          text: errorText || "전송에 실패했습니다.",
        });
      }
    } catch (err: unknown) {
      setResult({
        success: false,
        text: err instanceof Error ? err.message : "네트워크 오류가 발생했습니다.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full mt-8 pt-8 border-t border-yellow-200/80 text-left">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">📬</span>
        <h2 className="text-xl sm:text-2xl font-black text-lime-900 tracking-tight">
          연락하기
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-bold uppercase tracking-wider text-lime-800 mb-1.5"
          >
            이름
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력해주세요"
            className="w-full px-4 py-2.5 rounded-xl bg-yellow-50/70 border border-lime-300 text-lime-950 placeholder-lime-600/60 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:bg-white text-sm transition"
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs font-bold uppercase tracking-wider text-lime-800 mb-1.5"
          >
            하고 싶은 말
          </label>
          <textarea
            id="contact-message"
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="하고 싶은 말을 자유롭게 남겨주세요"
            className="w-full px-4 py-2.5 rounded-xl bg-yellow-50/70 border border-lime-300 text-lime-950 placeholder-lime-600/60 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:bg-white text-sm transition resize-none"
          />
        </div>

        <button
          id="contact-submit-btn"
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 rounded-xl font-bold text-sm text-white bg-lime-700 hover:bg-lime-800 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed transition duration-200 shadow-md shadow-lime-900/10 flex items-center justify-center gap-2 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              전송 중...
            </>
          ) : (
            "보내기"
          )}
        </button>
      </form>

      {result && (
        <div
          id="contact-result-message"
          role="alert"
          className={`mt-4 p-3.5 rounded-xl text-sm font-semibold border transition-all ${
            result.success
              ? "bg-emerald-50 border-emerald-300 text-emerald-800"
              : "bg-red-50 border-red-300 text-red-800"
          }`}
        >
          {result.text}
        </div>
      )}
    </section>
  );
}
