const skills = {
  Strong: ["C++", "HTML", "CSS", "Tailwind CSS", "Next.js"],
  Familiar: ["Python", "JavaScript", "SQL"],
  Learning: ["Node.js", "TypeScript", "Networking & protocols"],
};

const cert = {
  name: "TestOut Ethical Hacker Pro (CompTIA)",
  tools: ["Wireshark", "Nmap", "Zenmap", "Vulnerability scanning"],
};

export default function About() {
  return (
    <section id="about" className="py-32 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Section label */}
        <p
          className="text-xs font-medium tracking-widest uppercase mb-10"
          style={{ color: "var(--subtle)" }}
        >
          About
        </p>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left — story */}
          <div>
            <h2
              className="text-3xl font-semibold leading-snug mb-6"
              style={{ color: "var(--foreground)" }}
            >
              I learn fast, go deep,
              <br />and actually ship.
            </h2>

            <div
              className="space-y-4 text-base leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              <p>
                I'm a CS graduate who sits at the intersection of two things
                most people pick one of: building software and understanding
                how it breaks. That dual perspective shapes how I approach
                every project.
              </p>
              <p>
                My security research into WPA2 vs WPA3 taught me that the gap
                between "it works" and "it's secure" is enormous — and worth
                caring about. My ATM backend project taught me that good
                software engineering is just as much about edge cases and
                failure states as it is about the happy path.
              </p>
              <p>
                I'm comfortable picking up new tools and stacks. Currently
                deepening my knowledge in Node.js, TypeScript, and network
                security.
              </p>
            </div>
          </div>

          {/* Right — skills + cert */}
          <div className="space-y-10">

            {/* Skills by tier */}
            <div>
              <p
                className="text-xs font-medium tracking-widest uppercase mb-5"
                style={{ color: "var(--subtle)" }}
              >
                Skills
              </p>
              <div className="space-y-5">
                {Object.entries(skills).map(([tier, items]) => (
                  <div key={tier}>
                    <p
                      className="text-xs mb-2"
                      style={{ color: "var(--subtle)" }}
                    >
                      {tier}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1 rounded-full border"
                          style={{
                            borderColor: "var(--border)",
                            color: "var(--muted)",
                            backgroundColor: "var(--background-alt)",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification */}
            <div
              className="rounded-xl border p-5"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--background-alt)",
              }}
            >
              <p
                className="text-xs font-medium tracking-widest uppercase mb-3"
                style={{ color: "var(--subtle)" }}
              >
                Certification
              </p>
              <p
                className="text-sm font-medium mb-3"
                style={{ color: "var(--foreground)" }}
              >
                {cert.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {cert.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2.5 py-1 rounded-full border"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--muted)",
                    }}
                  >
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