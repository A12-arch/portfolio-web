"use client";

import { useEffect, useState } from "react";

const styles = {
	nav: { borderColor: "var(--border)", backgroundColor: "var(--background)" },
	logo: { color: "var(--foreground)" },
	link: { color: "var(--muted)" },
	toggle: { borderColor: "var(--border)", color: "var(--muted)", backgroundColor: "var(--background-alt)" },
};

export default function Navbar() {
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
		<nav className="fixed top-0 left-0 right-0 z-50 border-b" style={styles.nav}>
			<div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">

				{/* Logo / name */}
				<a href="/" className="text-sm font-medium" style={styles.logo}>
					Adam K.
				</a>

				{/* Nav links + toggle */}
				<div className="flex items-center gap-6">
					<a href="#about" className="text-sm hover:underline underline-offset-4" style={styles.link}>About</a>
					<a href="#projects" className="text-sm hover:underline underline-offset-4" style={styles.link}>Projects</a>
					<a href="#contact" className="text-sm hover:underline underline-offset-4" style={styles.link}>Contact</a>

					{/* Dark mode toggle */}
					<button
						onClick={toggleTheme}
						aria-label="Toggle dark mode"
						className="w-8 h-8 rounded-full border flex items-center justify-center text-sm cursor-pointer"
						style={styles.toggle}
					>
						{dark ? "☀" : "☾"}
					</button>
				</div>

			</div>
		</nav>
	);
}