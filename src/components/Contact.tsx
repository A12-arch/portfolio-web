const styles = {
	section: { borderColor: "var(--border)" },
	label: { color: "var(--subtle)" },
	heading: { color: "var(--foreground)" },
	body: { color: "var(--muted)" },
	link: { color: "var(--foreground)" },
	linkLabel: { color: "var(--subtle)" },
};

export default function Contact() {
	return (
		<section id="contact" className="py-32 border-t" style={styles.section}>
			<div className="max-w-5xl mx-auto px-6">

				{/* Section label */}
				<p className="text-xs font-medium tracking-widest uppercase mb-10" style={styles.label}>
					Contact
				</p>

				{/* Heading */}
				<h2 className="text-3xl font-semibold mb-4" style={styles.heading}>
					Get in touch
				</h2>

				{/* Subheading */}
				<p className="text-base max-w-md mb-12" style={styles.body}>
					I'm currently open to opportunities. Whether it's a job, a project, or just a conversation — feel free to reach out.
				</p>

				{/* Contact options */}
				<div className="flex flex-col gap-4">

					<a href="mailto:adam.kheirddin@gmail.com" className="inline-flex items-center gap-3 text-sm font-medium hover:underline underline-offset-4" style={styles.link}>
						<span style={styles.linkLabel}>Email</span>
						adam.kheirddin@gmail.com
					</a>

					<a href="https://github.com/adam-khe" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm font-medium hover:underline underline-offset-4" style={styles.link}>
						<span style={styles.linkLabel}>GitHub</span>
						github.com/adam-khe
					</a>

					<a href="https://www.linkedin.com/in/adam-kheirddin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm font-medium hover:underline underline-offset-4" style={styles.link}>
						<span style={styles.linkLabel}>LinkedIn</span>
						linkedin.com/in/adam-kheirddin
					</a>

				</div>
			</div>
		</section>
	);
}