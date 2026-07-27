"use client";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{ borderColor: "var(--border)", backgroundColor: "var(--background)" }}>
            <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">

                {/* Logo / name */}
                <a href="/" className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                    Adam K.
                </a>

                {/* Nav links */}
                <div className="flex items-center gap-6">
                    <a href="#about" className="text-sm hover:underline underline-offset-4" style={{ color: "var(--muted)" }}>About</a>
                    <a href="#projects" className="text-sm hover:underline underline-offset-4" style={{ color: "var(--muted)" }}>Projects</a>
                    <a href="#contact" className="text-sm hover:underline underline-offset-4" style={{ color: "var(--muted)" }}>Contact</a>
                </div>

            </div>
        </nav>
    )
}