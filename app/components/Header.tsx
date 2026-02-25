"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const navLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
    { href: "/scioly", label: "SciOly" },
    { href: "/resources", label: "Uses" },
    { href: "/cv", label: "CV" },
  ];

  return (
    <header className="site-header">
      <Link href="/" className="site-title">
        Evan Xiang
      </Link>
      <div className="site-nav-wrap">
        <nav className="site-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark and light mode"
        >
          <span className="theme-toggle-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="theme-icon">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
            </svg>
          </span>
        </button>
      </div>
    </header>
  );
}
