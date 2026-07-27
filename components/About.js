const highlights = [
  {
    number: "2.7",
    label: "Years of experience",
  },
  {
    number: "React",
    label: "Primary expertise",
  },
  {
    number: "API",
    label: "Integration experience",
  },
];

export default function About() {
  return (
    <section id="about" className="section-container scroll-mt-24">
      <div className="section-heading">
        <p className="section-label">About me</p>
        <h2>Frontend work with attention to the everyday details.</h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div className="space-y-5 text-base leading-8 text-slate-400">
          <p>
            I am a frontend developer with 2.7 years of experience building
            React interfaces for production web applications.
          </p>

          <p>
            Most of my work has been around component development, responsive
            layouts, Redux-based state handling, REST API integration, and
            debugging UI issues across different screens and devices.
          </p>

          <p>
            I am currently building more Next.js projects so I can bring the
            same practical frontend experience into newer React workflows.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {highlights.map((highlight) => (
            <article
              key={highlight.label}
              className="portfolio-card flex items-center gap-5"
            >
              <p className="min-w-20 bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-3xl font-bold text-transparent">
                {highlight.number}
              </p>

              <p className="text-sm leading-6 text-slate-400">
                {highlight.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
