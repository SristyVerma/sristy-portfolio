const contactLinks = [
  {
    label: "Email",
    value: "sristy.verma.work@gmail.com",
    href: "mailto:sristy.verma.work@gmail.com",
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
                className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/40 p-4 transition duration-200 hover:border-violet-400/30 hover:bg-slate-950/70"
              >
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    {link.label}
                  </p>

                  <p className="mt-1 text-sm text-slate-200">{link.value}</p>
                </div>

                <span className="text-violet-300">Email</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
