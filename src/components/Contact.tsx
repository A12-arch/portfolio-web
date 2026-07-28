export default function Contact() {
    return (
        <section id="contact" className="py-32 border-t" style={{ borderColor: "var(--border)" }}>
            <div className="max-w-5xl mx-auto px-6">
                {/* Section label */}
                <p className="text-xs font-medium tracking-widest uppercase mb-10" style={{ color: "var(--subtle)" }}>
                    Contact
                </p>

                {/* Heading */}
                <h2 className="text-3xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>
                    Get in touch
                </h2>

                {/* Subheading */}
                <p className="text-base max-w-md mb-12" style={{ color: "var(--muted)" }}>
                    I'm currently open to opportunities. Whether it's a job, a project, or just a conversation — feel free to reach out.
                </p>

                {/* Contact links */}
                <div className="flex flex-col gap-4">

                    {/* Email */}
                    <a
                        href="mailto:adam.kheirddin@gmail.com"
                        className="inline-flex items-center gap-3 text-sm font-medium hover:underline underline-offset-4"
                        style={{ color: "var(--foreground)" }}
                    >
                        <span style={{ color: "var(--subtle)" }}>Email</span>
                        adam.kheirddin@gmail.com
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/A12-arch"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-sm font-medium hover:underline underline-offset-4"
                        style={{ color: "var(--foreground)" }}
                    >
                        <span style={{ color: "var(--subtle)" }}>GitHub</span>
                        github.com/A12-arch
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/adam-kheirddin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-sm font-medium hover:underline underline-offset-4"
                        style={{ color: "var(--foreground)" }}
                    >
                        <span style={{ color: "var(--subtle)" }}>LinkedIn</span>
                        linkedin.com/in/adam-kheirddin
                    </a>
                </div>
            </div>
        </section>
    )
}    