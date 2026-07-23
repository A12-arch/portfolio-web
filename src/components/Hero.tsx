"use client";

import { useEffect, useState } from "react";

const styles = {
  toggleBtn: {
    borderColor: "var(--border)",
    color: "var(--muted)",
    backgroundColor: "var(--background-alt)",
  },
  badge: {
    borderColor: "var(--border)",
    color: "var(--muted)",
    backgroundColor: "var(--background-alt)",
  },
  dot:         { backgroundColor: "#1D9E75" },
  name:        { color: "var(--foreground)" },
  tagline:     { color: "var(--muted)" },
  bio:         { color: "var(--muted)" },
  btnPrimary:  { backgroundColor: "var(--accent)", color: "var(--accent-fg)" },
  btnSecondary:{ borderColor: "var(--border)", color: "var(--foreground)", backgroundColor: "transparent" },
  social:      { color: "var(--subtle)" },
};

export default function Hero() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setDark(isDark);
  }

  return (
    <section className="min-h-screen flex items-center relative">

      {/* Dark mode toggle — top right */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        className="absolute top-6 right-6 w-9 h-9 rounded-full border flex items-center justify-center text-sm cursor-pointer"
        style={styles.toggleBtn}
      >
        {dark ? "☀" : "☾"}
      </button>

      <div className="max-w-5xl mx-auto px-6 py-24">

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none" style={styles.name}>
          Adam Kheirddin.
        </h1>

        {/* Tagline */}
        <h2 className="mt-4 text-xl md:text-2xl font-normal" style={styles.tagline}>
          CS graduate with a broad interest in technology.
        </h2>

        {/* Bio */}
        <p className="mt-6 text-base md:text-lg leading-relaxed max-w-xl" style={styles.bio}>
          I'm drawn to a lot of areas — cybersecurity, software engineering,
          game dev, and more. I'm early in my journey but I take it seriously.
          This is where I document what I'm building and learning along the way.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#projects" className="px-5 py-2.5 rounded-md text-sm font-medium transition-opacity hover:opacity-80" style={styles.btnPrimary}>
            View projects
          </a>
          <a href="/resume.pdf" className="px-5 py-2.5 rounded-md text-sm font-medium border transition-colors hover:opacity-80" style={styles.btnSecondary}>
            Download resume
          </a>
        </div>

        {/* Social links */}
        <div className="mt-10 flex gap-6">
          <a href="https://github.com/A12-arch" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline underline-offset-4" style={styles.social}>
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline underline-offset-4" style={styles.social}>
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}
