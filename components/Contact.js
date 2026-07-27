const contactLinks = [
  {
    label: "Email",
    value: "sristy.verma.work@gmail.com",
    href: "mailto:sristy.verma.work@gmail.com",
    action: "Email",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sristy-verma-211ba73a8",
    href: "https://www.linkedin.com/in/sristy-verma-211ba73a8",
    action: "Connect",
    external: true,
  },
  {
    label: "Phone",
    value: "Call me",
    href: "tel:+919599224010",
    action: "Call",
    phone: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-container scroll-mt-24">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/15 via-slate-900/80 to-cyan-500/10 p-7 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="section-label">Contact</p>

            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Looking for a frontend developer? Let&apos;s talk.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-slate-400">
              I am open to frontend roles where I can work on React interfaces,
              API-connected features, and responsive web experiences.
            </p>

            <a
              href="mailto:sristy.verma.work@gmail.com"
              className="mt-8 inline-flex rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-violet-100"
            >
              Send me an email
            </a>
          </div>

          <div className="space-y-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/40 p-4 transition duration-200 hover:border-violet-400/30 hover:bg-slate-950/70"
              >
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    {link.label}
                  </p>

                  <p className="mt-1 text-sm text-slate-200">{link.value}</p>
                </div>

                {link.phone ? (
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/20 bg-violet-400/10 text-violet-300"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.035 12.035 0 0 1-7.143-7.143 1.125 1.125 0 0 1 .38-1.21l1.293-.97c.37-.278.536-.753.417-1.173L6.963 3.102A1.125 1.125 0 0 0 5.872 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="text-violet-300">{link.action}</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
