const technologies = ["React", "JavaScript", "Redux", "Next.js", "REST APIs"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-28 sm:px-8"
    >
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.35fr_0.65fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            Available for frontend roles
          </div>

          <p className="mb-4 font-mono text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            Frontend Developer
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m Sristy.
            <span className="mt-2 block bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              I build clean, responsive React interfaces.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I am a frontend developer with 2.7 years of experience turning UI
            requirements into reliable screens, reusable React components, and
            API-connected features.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-violet-100"
            >
              View my work
            </a>

            <a
              href="mailto:sristy.verma.work@gmail.com"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
            >
              Email me
            </a>

            <a
              href="/Sristy_Verma_Resume.pdf"
              download="Sristy_Verma_Resume.pdf"
              className="rounded-xl border border-violet-400/30 bg-violet-400/10 px-6 py-3.5 text-sm font-bold text-violet-200 transition duration-300 hover:-translate-y-1 hover:border-violet-300/60 hover:bg-violet-400/20 hover:text-white"
            >
              Download résumé
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-sm lg:block">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-violet-500/20 to-cyan-400/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-xl">
            <div className="mb-8 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>

            <div className="font-mono text-sm leading-7">
              <p className="text-slate-500">{"// Frontend notes"}</p>

              <p>
                <span className="text-fuchsia-300">const</span>{" "}
                <span className="text-cyan-300">developer</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-amber-200">{"{"}</span>
              </p>

              <p className="pl-5">
                <span className="text-violet-300">name</span>
                <span className="text-white">:</span>{" "}
                <span className="text-emerald-300">
                  &quot;Sristy Verma&quot;
                </span>
                ,
              </p>

              <p className="pl-5">
                <span className="text-violet-300">role</span>
                <span className="text-white">:</span>{" "}
                <span className="text-emerald-300">
                  &quot;Frontend Developer&quot;
                </span>
                ,
              </p>

              <p className="pl-5">
                <span className="text-violet-300">experience</span>
                <span className="text-white">:</span>{" "}
                <span className="text-orange-300">2.7</span>,
              </p>

              <p className="pl-5">
                <span className="text-violet-300">focus</span>
                <span className="text-white">:</span>{" "}
                <span className="text-emerald-300">
                  &quot;React UI and API integration&quot;
                </span>
              </p>

              <p className="text-amber-200">{"};"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
