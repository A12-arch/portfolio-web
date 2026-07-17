"use client";

import { useEffect, useState } from "react";

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
        style={{
          borderColor: "var(--border)",
          color: "var(--muted)",
          backgroundColor: "var(--background-alt)",
        }}
      >
        {dark ? "☀" : "☾"}
      </button>

      <div className="max-w-5xl mx-auto px-6 py-24">
    {/*
        {/* Open to work badge *}
        <div
          className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full mb-8 border"
          style={{
            borderColor: "var(--border)",
            color: "var(--muted)",
            backgroundColor: "var(--background-alt)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "#1D9E75" }}
          />
          Open to work
        </div>
    */}
        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight leading-none"
          style={{ color: "var(--foreground)" }}
        >
          Adam Kheirddin.
        </h1>

        {/* Tagline */}
        <h2
          className="mt-4 text-xl md:text-2xl font-normal"
          style={{ color: "var(--muted)" }}
        >
          I build software and break security — sometimes on purpose.
        </h2>

        {/* Bio */}
        <p
          className="mt-6 text-base md:text-lg leading-relaxed max-w-xl"
          style={{ color: "var(--muted)" }}
        >
          CS graduate with a focus on cybersecurity and software engineering.
          I've researched wireless network vulnerabilities, built backend
          systems, and earned an Ethical Hacker Pro certification. Always
          learning, always building.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-md text-sm font-medium transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--accent-fg)",
            }}
          >
            View projects
          </a>
          <a
            href="/resume.pdf"
            className="px-5 py-2.5 rounded-md text-sm font-medium border transition-colors hover:opacity-80"
            style={{
              borderColor: "var(--border)",
              color: "var(--foreground)",
              backgroundColor: "transparent",
            }}
          >
            Download resume
          </a>
        </div>

        {/* Social links */}
        <div className="mt-10 flex gap-6">
          <a
            href="https://github.com/A12-arch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:underline underline-offset-4"
            style={{ color: "var(--subtle)" }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/adam-kheirddin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:underline underline-offset-4"
            style={{ color: "var(--subtle)" }}
          >
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}