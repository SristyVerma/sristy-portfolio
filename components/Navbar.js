const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-white"
        >
          Sristy<span className="text-violet-400">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-full border border-violet-400/40 bg-violet-400/10 px-4 py-2 text-sm font-semibold text-violet-300 transition duration-200 hover:border-violet-300 hover:bg-violet-400/20 hover:text-white"
        >
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}