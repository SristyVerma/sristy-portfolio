const projects = [
  {
    number: "01",
    name: "Sproutly",
    description:
      "A multi-role business-management and service-booking platform I worked on as Senior Frontend Developer at Menteso. I independently architected and developed its frontend for business owners, instructors, and customers.",
    features: [
      "Three role-protected user portals",
      "Scheduling, appointments, and attendance",
      "Memberships, gift cards, loyalty, and POS",
      "Reporting and analytics dashboards",
    ],
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Material UI",
      "Stripe",
      "Recharts",
    ],
    featured: true,
    type: "Company project · Menteso",
    walkthroughUrl:
      "https://drive.google.com/drive/folders/1xol-Gzq7uGKLllf1N_d98djbFmaAAdLP?usp=sharing",
  },
  {
    number: "02",
    name: "JobTracker",
    description:
      "A job application tracker focused on keeping role details, application status, and follow-up notes in one simple workflow.",
    features: [
      "Application list and dashboard",
      "Status-based tracking",
      "Search-friendly structure",
      "Responsive UI planning",
    ],
    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
    status: "In progress",
    featured: false,
    liveUrl: "https://jobtracker-sooty.vercel.app/",
  },
  {
    number: "03",
    name: "Portfolio Website",
    description:
      "This portfolio, built with Next.js and Tailwind CSS to present my frontend experience, skills, and practical project work.",
    features: [
      "Responsive layout",
      "Reusable components",
      "SEO metadata",
      "Accessible navigation",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS"],
    status: "Active",
    featured: false,
    liveUrl: "https://sristy-portfolio.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-container scroll-mt-24">
      <div className="section-heading">
        <p className="section-label">Selected work</p>
        <h2>Professional and personal work that shows how I build.</h2>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <article
            key={project.name}
            className="portfolio-card group overflow-hidden"
          >
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="relative flex min-h-64 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.25),transparent_45%)]" />
                <div className="absolute inset-0 project-grid opacity-30" />

                <div className="relative text-center">
                  <p className="font-mono text-sm text-violet-300">
                    PROJECT / {project.number}
                  </p>

                  <p className="mt-4 text-4xl font-bold text-white transition duration-500 group-hover:scale-105">
                    {project.name}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold text-white">
                    {project.name}
                  </h3>

                  {project.featured && (
                    <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-semibold text-violet-300">
                      Featured
                    </span>
                  )}

                  {project.type && (
                    <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300">
                      {project.type}
                    </span>
                  )}
                </div>

                <p className="mt-5 leading-7 text-slate-400">
                  {project.description}
                </p>

                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-slate-400"
                    >
                      <span className="text-violet-400">-</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-white/[0.05] px-3 py-1.5 font-mono text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {project.status && (
                  <p className="mt-7 font-mono text-sm text-violet-300">
                    Status: {project.status}
                  </p>
                )}

                {project.walkthroughUrl && (
                  <a
                    href={project.walkthroughUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link mt-7 w-fit gap-2"
                    aria-label={`Watch ${project.name} UI walkthroughs`}
                  >
                    Watch UI walkthroughs
                    <span aria-hidden="true">↗</span>
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link mt-5 w-fit gap-2"
                    aria-label={`Open the live ${project.name} project`}
                  >
                    View live project
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
