const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Menteso",
    location: "Noida, India",
    duration: "Aug 2024 – Feb 2026",
    description:
      "Delivered frontend solutions for a US-based client and internal company products, including independently building the complete frontend for Sproutly—a multi-role business-management and service-booking platform.",
    responsibilities: [
      "Architected and developed Sproutly's frontend independently, creating role-protected portals for business owners, instructors, and customers.",
      "Delivered 30+ functional modules spanning scheduling, appointments, attendance, memberships, staff management, POS, loyalty programs, reporting, and analytics.",
      "Built a scalable codebase of 650+ source files with reusable components, custom hooks, centralized Redux state, and structured API service layers.",
      "Integrated development-environment Stripe workflows for checkout, saved cards, coupons, gift cards, memberships, packages, and point-of-sale payments.",
      "Created daily, weekly, and monthly scheduling experiences for classes, instructor availability, attendance, appointments, and cancellations.",
      "Developed analytics dashboards for sales, visits, bookings, retention, memberships, and instructor earnings using Recharts and Material UI.",
      "Implemented authentication, protected routing, persistent state, form validation, pagination, timezone handling, responsive layouts, and loading and error states.",
    ],
    technologies:
      "React.js, JavaScript, Redux Toolkit, React Router, Material UI, Tailwind CSS, Axios, Stripe, Formik, Yup, Recharts, React Big Calendar, Leaflet, CryptoJS, Git",
  },
  {
    role: "Frontend Developer",
    company: "Prune",
    companyUrl: "https://prune.co.in/",
    location: "Noida, India",
    duration: "Aug 2023 – Aug 2024",
    description:
      "Developed and maintained responsive website interfaces using React and JavaScript, translating product requirements into clear, usable frontend experiences.",
    responsibilities: [
      "Built website user interfaces with React and JavaScript, turning requirements into functional, responsive pages.",
      "Created reusable UI components to keep styling and behavior consistent across the website.",
      "Implemented responsive layouts for reliable experiences across desktop, tablet, and mobile screen sizes.",
      "Improved existing frontend screens through UI refinements, bug fixes, and maintainable component updates.",
    ],
    technologies: "React.js, JavaScript",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-container scroll-mt-24">
      <div className="section-heading">
        <p className="section-label">Experience</p>
        <h2>Building production frontend experiences that scale.</h2>
      </div>

      <div className="relative border-l border-white/10 pl-7 sm:pl-10">
        {experiences.map((experience, index) => (
          <article
            key={`${experience.company}-${experience.role}`}
            className={`relative ${index < experiences.length - 1 ? "pb-8" : ""}`}
          >
            <span className="absolute -left-[2.15rem] top-2 h-3 w-3 rounded-full border-2 border-violet-300 bg-slate-950 shadow-[0_0_18px_rgba(167,139,250,0.8)] sm:-left-[2.85rem]" />

            <div className="portfolio-card">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {experience.role}
                  </h3>

                  <p className="mt-1 text-violet-300">
                    {experience.companyUrl ? (
                      <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-violet-400/40 underline-offset-4 transition hover:text-violet-200"
                      >
                        {experience.company}
                      </a>
                    ) : (
                      experience.company
                    )}
                    <span className="text-slate-500">
                      {" "}
                      · {experience.location}
                    </span>
                  </p>
                </div>

                <p className="font-mono text-sm text-slate-500">
                  {experience.duration}
                </p>
              </div>

              <p className="mt-6 max-w-3xl leading-7 text-slate-400">
                {experience.description}
              </p>

              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {experience.responsibilities.map((responsibility) => (
                  <li
                    key={responsibility}
                    className="flex gap-3 text-sm leading-6 text-slate-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    {responsibility}
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-slate-500">
                <span className="font-semibold text-slate-300">
                  Technologies:
                </span>{" "}
                {experience.technologies}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
