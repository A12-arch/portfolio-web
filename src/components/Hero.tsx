export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-bold">
                Adam Kheirddin
            </h1>

            <h2 className="mt-4 text-xl md:text-2xl text-gray-500">
                Computer Science Student
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
                Focused on cybersecurity, networking, and systems. 
                Interested in building secure and efficient software.
            </p>

            <div className="mt-8 flex gap-6">
                <a
                    href="https://github.com/A12-arch"
                    className="text-sm font-medium hover:underline"
                >
                    GitHub
                </a>

                <a
                    href="https://linkedin.com/in/yourusername"
                    className="text-sm font-medium hover:underline"
                >
                    LinkedIn
                </a>
            </div>
        </div>
    </section>
  )
}
