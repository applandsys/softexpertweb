"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden font-sans bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="SoftExpert Background Illustration"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 py-24 sm:py-32 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl flex flex-col items-center gap-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-md leading-tight">
            To get started, edit the{" "}
            <span className="text-transparent bg-clip-text  from-blue-400 to-teal-400">
              page.tsx
            </span>{" "}
            file.
          </h1>

          <p className="max-w-xl text-lg leading-8 text-zinc-300 drop-shadow-sm">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js"
              className="font-medium text-white underline underline-offset-4 decoration-zinc-500 hover:decoration-white transition-colors"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn"
              className="font-medium text-white underline underline-offset-4 decoration-zinc-500 hover:decoration-white transition-colors"
            >
              Learning center
            </a>.
          </p>

          <div className="mt-6 flex flex-row flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
            <a
              className="flex h-12 items-center justify-center rounded-none bg-blue-600 px-8 font-semibold text-white shadow-lg transition-all hover:bg-blue-700 active:scale-[0.98] min-w-[150px]"
              href="#contact"
            >
              যোগাযোগ করুন
            </a>

            <a
              className="flex h-12 items-center justify-center rounded-none border border-white/40 bg-white/10 backdrop-blur-sm px-8 font-semibold text-white shadow-sm transition-all hover:bg-white/20 hover:border-white/70 min-w-[180px]"
              href="tel:+8801722447755"
            >
              +8801722447755
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}