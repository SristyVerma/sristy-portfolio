const skillGroups = [
  {
    title: "Core",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "State",
    skills: ["Redux Toolkit", "Context API", "Redux Persist"],
  },
  {
    title: "UI",
    skills: ["Material UI", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Integration",
    skills: ["REST APIs", "Axios", "Stripe", "Google OAuth"],
  },
  {
    title: "Libraries",
    skills: [
      "Formik",
      "Yup",
      "Recharts",
      "React Big Calendar",
      "Leaflet",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "npm", "Postman", "Chrome DevTools"],
  },
  {
    title: "Currently Learning",
    skills: ["Next.js", "TypeScript"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container scroll-mt-24">
      <div className="section-heading">
        <p className="section-label">Technical skills</p>
        <h2>Tools and technologies I use in frontend work.</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <article key={group.title} className="portfolio-card group">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">{group.title}</h3>

              <span className="font-mono text-sm text-violet-400">
                0{index + 1}
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/10 bg-slate-950/50 px-3.5 py-2 text-sm text-slate-300 transition duration-200 group-hover:border-violet-400/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
