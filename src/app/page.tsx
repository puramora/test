export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-br from-yellow-200 via-amber-100 to-yellow-300 text-lime-800 relative overflow-hidden">
      {/* Decorative ambient yellow glow circles */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-yellow-400/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-300/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl w-full text-center space-y-6 p-8 sm:p-10 bg-white/90 backdrop-blur-md rounded-3xl border border-yellow-300/80 shadow-2xl shadow-yellow-600/15">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-lime-100 text-lime-800 border border-lime-300 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          Next.js 프로젝트 준비 완료
        </div>

        <div className="flex flex-col items-center justify-center text-center space-y-3">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-lime-900 leading-tight whitespace-nowrap">
            안녕하세요, <span className="text-teal-600">나춘식</span>입니다
          </h1>
          <img src="/profile.png" alt="프로필 사진" className="mx-auto mt-4 w-28 h-28 rounded-full object-cover border-4 border-lime-300 shadow-lg" />

          <p className="text-lg sm:text-xl text-lime-800 font-medium max-w-lg mx-auto leading-relaxed">
            가장 단순하고 깔끔한 Next.js 시작 템플릿입니다.
          </p>
          <p className="text-base sm:text-lg text-lime-700 font-medium">
            곧 인터넷에서 만나요
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-yellow-50/90 border border-lime-200 shadow-sm">
            <p className="text-xs font-semibold text-lime-600 uppercase tracking-wider">Language</p>
            <p className="font-extrabold text-sm sm:text-base mt-1 text-lime-800">TypeScript</p>
          </div>
          <div className="p-3.5 rounded-xl bg-yellow-50/90 border border-lime-200 shadow-sm">
            <p className="text-xs font-semibold text-lime-600 uppercase tracking-wider">Router</p>
            <p className="font-extrabold text-sm sm:text-base mt-1 text-lime-800">App Router</p>
          </div>
          <div className="p-3.5 rounded-xl bg-yellow-50/90 border border-lime-200 shadow-sm">
            <p className="text-xs font-semibold text-lime-600 uppercase tracking-wider">Styling</p>
            <p className="font-extrabold text-sm sm:text-base mt-1 text-lime-800">Tailwind CSS</p>
          </div>
        </div>

        <div className="pt-4 border-t border-yellow-200/80 text-xs text-lime-700">
          시작하려면 <code className="px-2 py-0.5 rounded bg-lime-100 font-mono text-lime-900 font-semibold border border-lime-300">src/app/page.tsx</code> 파일을 수정하세요.
        </div>
      </div>
    </main>
  );
}

