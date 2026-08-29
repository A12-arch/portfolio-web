const styles = {
	section: { borderColor: "var(--border)" },
	label: { color: "var(--subtle)" },
	heading: { color: "var(--foreground)" },
	body: { color: "var(--muted)" },
	skillTier: { color: "var(--subtle)" },
	tag: { borderColor: "var(--border)", color: "var(--muted)", backgroundColor: "var(--background-alt)" },
	toolTag: { borderColor: "var(--border)", color: "var(--subtle)" },
	certCard: { borderColor: "var(--border)", backgroundColor: "var(--background-alt)" },
	certTitle: { color: "var(--foreground)" },
	certTag: { borderColor: "var(--border)", color: "var(--muted)" },
};

const skills = {
	Strong: ["C++", "HTML", "CSS", "SQL", "Object Oriented Programming"],
	Familiar: ["Python", "JavaScript", "Tailwind CSS", "Next.js", "Network Security"],
	Learning: ["TypeScript", "Cybersecurity", "Game Development"],
};

const tools = {
	Development: ["Git", "GitHub", "VS Code", "Node.js"],
	Security: ["Kali Linux", "Wireshark", "Nmap", "Zenmap"],
	Systems: ["Linux", "XAMPP"],
};

const cert = {
	name: "TestOut Ethical Hacker Pro (CompTIA)",
	tools: ["Wireshark", "Nmap", "Zenmap", "Vulnerability scanning"],
};

export default function About() {
	return (
		<section id="about" className="py-32 border-t" style={styles.section}>
			<div className="max-w-5xl mx-auto px-6">

				{/* Section label */}
				<p className="text-xs font-medium tracking-widest uppercase mb-10" style={styles.label}>
					About
				</p>

				<div className="grid md:grid-cols-2 gap-16">

					{/* Left — story */}
					<div>
						<h2 className="text-3xl font-semibold leading-snug mb-6" style={styles.heading}>
							Passionate about tech,
							<br />still finding my path.
						</h2>

						<div className="space-y-4 text-base leading-relaxed" style={styles.body}>
							<p>
								I'm a CS graduate with a genuine interest in a lot of areas —
								cybersecurity, software engineering, game development, and
								whatever else catches my curiosity. I haven't locked in on one
								direction yet, and I think that's okay.
							</p>
							<p>
								The projects I have so far came from my coursework — a wireless
								network security research comparing WPA2 and WPA3, and a group
								project building the backend of an ATM system. They're not
								flashy, but they were real problems I had to think through.
							</p>
							<p>
								I'm currently learning and building more. This site will grow
								as I do.
							</p>
						</div>
					</div>

					{/* Right — skills, tools, cert */}
					<div className="space-y-10">

						{/* Skills */}
						<div>
							<p className="text-xs font-medium tracking-widest uppercase mb-5" style={styles.label}>
								Skills
							</p>
							<div className="space-y-5">
								{Object.entries(skills).map(([tier, items]) => (
									<div key={tier}>
										<p className="text-xs mb-2" style={styles.skillTier}>{tier}</p>
										<div className="flex flex-wrap gap-2">
											{items.map((skill) => (
												<span key={skill} className="text-xs px-3 py-1 rounded-full border" style={styles.tag}>
													{skill}
												</span>
											))}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Tools */}
						<div>
							<p className="text-xs font-medium tracking-widest uppercase mb-5" style={styles.label}>
								Tools
							</p>
							<div className="space-y-5">
								{Object.entries(tools).map(([category, items]) => (
									<div key={category}>
										<p className="text-xs mb-2" style={styles.skillTier}>{category}</p>
										<div className="flex flex-wrap gap-2">
											{items.map((tool) => (
												<span key={tool} className="text-xs px-3 py-1 rounded-md border" style={styles.toolTag}>
													{tool}
												</span>
											))}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Certification */}
						<div className="rounded-xl border p-5" style={styles.certCard}>
							<p className="text-xs font-medium tracking-widest uppercase mb-3" style={styles.label}>
								Certification
							</p>
							<p className="text-sm font-medium mb-3" style={styles.certTitle}>
								{cert.name}
							</p>
							<div className="flex flex-wrap gap-2">
								{cert.tools.map((tool) => (
									<span key={tool} className="text-xs px-2.5 py-1 rounded-full border" style={styles.certTag}>
										{tool}
									</span>
								))}
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	);
}