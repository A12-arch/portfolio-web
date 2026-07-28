const styles = {
  section:  { borderColor: "var(--border)" },
  label:    { color: "var(--subtle)" },
  heading:  { color: "var(--foreground)" },
  card:     { borderColor: "var(--border)", backgroundColor: "var(--background-alt)" },
  type:     { color: "var(--subtle)" },
  title:    { color: "var(--foreground)" },
  desc:     { color: "var(--muted)" },
  tag:      { borderColor: "var(--border)", color: "var(--muted)" },
};

const projects = [
  {
    title: "Wireless Network Security Research",
    description: "Compared WPA2 and WPA3 protocols, analysed packet captures, and demonstrated how WPA2 handshakes can be cracked. A deep dive into why the upgrade to WPA3 actually matters.",
    tags: ["Cybersecurity", "Wireshark", "Network analysis"],
    type: "Research",
    github: "",
  },
  {
    title: "ATM Software Engineering Project",
    description: "Group project designing and building the backend of an ATM system. Handled transaction logic, authentication, and account state management.",
    tags: ["Software engineering", "Backend", "Team project"],
    type: "Engineering",
    github: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 border-t" style={styles.section}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Section label */}
        <p className="text-xs font-medium tracking-widest uppercase mb-10" style={styles.label}>
          Projects
        </p>

        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-16" style={styles.heading}>
          Things I've worked on
        </h2>

        {/* Project cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <div key={project.title} className="rounded-xl border p-6" style={styles.card}>

              {/* Type label */}
              <p className="text-xs font-medium tracking-widest uppercase mb-3" style={styles.type}>
                {project.type}
              </p>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3" style={styles.title}>
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-5" style={styles.desc}>
                {project.description}
              </p>

              {/* Tags + GitHub link row */}
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full border" style={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium hover:underline underline-offset-4"
                    style={styles.label}
                  >
                    GitHub ↗
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
