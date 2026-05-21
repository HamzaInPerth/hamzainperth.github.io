const experiences = [
    {
        company: 'CrateGuard',
        location: 'Montréal, QC',
        position: 'Software Engineer',
        duration: 'Dec 2025 – Present',
        highlights: [
            'Solo Dev Product Delivery: Designed, built, and shipped a cross-platform desktop application (Tauri v2 + React 18) and AI support system end-to-end.',
            'Production RAG Pipeline: Engineered a pipeline utilizing semantic chunking, OpenAI embeddings, a Turso vector store, and gpt-4o-mini with strict safety rails and locale-aware responses across 10 languages.',
            'AI Monitoring & Security: Implemented token/cost analytics, abuse prevention (IP rate limiting), and unresolved question detection.',
            'Core Audio Engine: Built a Rust audio fingerprinting engine (Chromaprint + Rayon) for parallel processing, duplicate detection, and BPM/quality analysis for 100k+ track libraries.',
            'DevOps & Growth: Set up automated multi-platform CI/CD builds with Apple code signing/notarization, and launched a Next.js marketing site with Stripe integration.',
        ],
        tech: ['Tauri v2', 'React 18', 'Rust', 'OpenAI', 'Turso', 'Stripe', 'CI/CD'],
    },
    {
        company: 'Balcosa',
        location: 'Montréal, QC',
        position: 'Founder & Software Engineer',
        duration: 'Mar 2023 – Present',
        highlights: [
            'Platform Architecture: Built and launched an event-vantage-point access platform using an Nx monorepo (Next.js frontend, Fastify backend).',
            'Data & Search Infrastructure: Designed a multi-database approach using PostgreSQL, Cassandra (DataStax), and Redis; implemented Meilisearch for ultra-fast location discovery.',
            'Deployment: Containerized the system with Docker and deployed via Railway and Cloudflare.',
        ],
        tech: ['Next.js', 'Fastify', 'Nx', 'PostgreSQL', 'Cassandra', 'Redis', 'Meilisearch', 'Docker'],
    },
    {
        company: 'Ateko (Backed by Bell Canada)',
        location: 'Montréal, QC',
        position: 'Software Engineer',
        duration: 'Apr 2024 – Present',
        highlights: [
            'Data Pipelines: Engineered automated ETL tools to transform and sync enterprise data with ServiceNow APIs.',
            'UI Components: Developed complex data visualization components using React and Storybook.',
        ],
        tech: ['React', 'Storybook', 'ETL', 'ServiceNow'],
    },
    {
        company: 'FlightHub',
        location: 'Montréal, QC',
        position: 'Software Engineer',
        duration: 'Mar 2023 – Apr 2024',
        highlights: [
            'Backend Optimization: Developed an automated payout system to accelerate refund processing and refactored core database schemas.',
            'Frontend Performance: Resolved critical frontend performance bottlenecks and executed a UI overhaul using Tailwind CSS.',
        ],
        tech: ['React', 'Tailwind CSS', 'Database Design'],
    },
    {
        company: 'Les Manifestes',
        location: 'Montréal, QC',
        position: 'Software Engineer',
        duration: 'Aug 2022 – Jan 2023',
        highlights: [
            'Developed custom full-stack web applications and CMS solutions supported by automated CI/CD pipelines.',
        ],
        tech: ['Full Stack', 'CMS', 'CI/CD'],
    },
    {
        company: 'Biotopia',
        location: 'Paris, France',
        position: 'Full Stack Engineer',
        duration: 'Jan 2021 – Aug 2022',
        highlights: [
            'Led API design and architectural implementation; optimized databases and conducted team code reviews.',
        ],
        tech: ['API Design', 'Database', 'Code Review'],
    },
    {
        company: 'VyTree',
        location: 'Paris, France',
        position: 'Head of IT / Full Stack Engineer',
        duration: '2019 – Jan 2021',
        highlights: [
            'Designed a QR-code-based automation and access control system.',
            'Developed the company website using Nuxt.js and Strapi headless CMS.',
        ],
        tech: ['Nuxt.js', 'Strapi', 'QR Automation'],
    },
    {
        company: 'Spark Pear',
        location: 'Paris, France',
        position: 'Web Developer',
        duration: '2017 – 2019',
        highlights: [
            'Contributed to full-stack development projects.',
        ],
        tech: ['PHP', 'JavaScript'],
    },
];

const Experiences = () => {
    return (
        <div className="min-h-screen px-6 pt-24 pb-16 max-w-4xl mx-auto">
            <h1 className="section-heading">Experience</h1>
            <p className="section-subheading">A journey from Paris to Montreal, building impactful software.</p>

            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent hidden md:block" />

                <div className="flex flex-col gap-8">
                    {experiences.map((xp, idx) => (
                        <div key={idx} className="md:pl-12 relative group">
                            {/* Timeline dot */}
                            <div className="absolute left-0 md:left-[13px] top-2 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-dark-900 hidden md:block group-hover:animate-glow" />

                            <div className="card">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{xp.company}</h3>
                                        <p className="text-accent-light text-sm font-medium">{xp.position}</p>
                                    </div>
                                    <div className="text-gray-500 text-sm mt-1 sm:mt-0 font-mono">
                                        {xp.duration}
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm mb-3">{xp.location}</p>

                                <ul className="space-y-2 mb-4">
                                    {xp.highlights.map((h, i) => (
                                        <li key={i} className="text-gray-300 text-sm leading-relaxed pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-accent">
                                            {h}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {xp.tech.map(t => (
                                        <span key={t} className="text-xs px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/10">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Education */}
            <div className="mt-20">
                <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
                <div className="card">
                    <h3 className="text-lg font-semibold text-white">Master of Science in Software Systems Development</h3>
                    <p className="text-gray-400">Computer Science — ETNA</p>
                </div>
            </div>
        </div>
    )
}

export default Experiences