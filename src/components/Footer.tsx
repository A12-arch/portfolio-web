const styles = {
  footer: { borderColor: "var(--border)", color: "var(--subtle)" },
  link:   { color: "var(--subtle)" },
};

export default function Footer() {
  return (
    <footer className="border-t py-8" style={styles.footer}>
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between flex-wrap gap-4">

        {/* Left — copyright */}
        <p className="text-xs">
          © {new Date().getFullYear()} Adam Kheirddin
        </p>

        {/* Right — links */}
        <div className="flex gap-6">
          <a href="https://github.com/adam-khe" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline underline-offset-4" style={styles.link}>
            GitHub
          </a>
          <a href="https://linkedin.com/in/adam-kheirddin" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline underline-offset-4" style={styles.link}>
            LinkedIn
          </a>
          <a href="mailto:adam.kheirddin@gmail.com" className="text-xs hover:underline underline-offset-4" style={styles.link}>
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}