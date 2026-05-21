const projects = [
    {
        title: 'CrateGuard Desktop App',
        description: 'Cross-platform desktop application built with Tauri v2 and React 18, featuring a Rust audio fingerprinting engine for 100k+ track libraries with parallel processing, duplicate detection, and BPM/quality analysis.',
        tech: ['Tauri v2', 'React 18', 'Rust', 'Chromaprint', 'Rayon'],
        category: 'Desktop / AI',
    },
    {
        title: 'CrateGuard AI Support System',
        description: 'Production RAG pipeline utilizing semantic chunking, OpenAI embeddings, Turso vector store, and gpt-4o-mini with strict safety rails and locale-aware responses across 10 languages.',
        tech: ['OpenAI', 'RAG', 'Turso Vector DB', 'TypeScript', 'Fastify'],
        category: 'AI / LLM',
    },
    {
        title: 'Balcosa Platform',
        description: 'Event-vantage-point access platform built as an Nx monorepo with Next.js frontend and Fastify backend. Features ultra-fast location discovery via Meilisearch and a multi-database architecture.',
        tech: ['Next.js', 'Fastify', 'Nx', 'PostgreSQL', 'Cassandra', 'Redis', 'Meilisearch'],
        category: 'Full Stack',
    },
    {
        title: 'Automated ETL Pipelines',
        description: 'Enterprise data transformation and synchronization tools integrating with ServiceNow APIs, powering complex data visualization dashboards built with React and Storybook.',
        tech: ['Node.js', 'ServiceNow API', 'React', 'Storybook'],
        category: 'Data Engineering',
    },
    {
        title: 'FlightHub Payout System',
        description: 'Automated payout system to accelerate refund processing, including core database schema refactoring and critical frontend performance optimizations.',
        tech: ['Backend', 'Database Design', 'Tailwind CSS', 'React'],
        category: 'Backend',
    },
    {
        title: 'QR Access Control System',
        description: 'QR-code-based automation and access control system designed for VyTree, replacing traditional secure entry processes with a streamlined digital solution.',
        tech: ['Nuxt.js', 'Strapi', 'QR Generation', 'Security'],
        category: 'IoT / Automation',
    },
];

const Works = () => {
    return (
        <div className="min-h-screen px-6 pt-24 pb-16 max-w-6xl mx-auto">
            <h1 className="section-heading">Projects</h1>
            <p className="section-subheading">Notable products and systems I&apos;ve designed and built.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, idx) => (
                    <div key={idx} className="card group hover:translate-y-[-2px] flex flex-col">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-mono text-accent-light bg-accent/10 px-2 py-0.5 rounded">
                                {project.category}
                            </span>
                            <svg className="w-5 h-5 text-gray-600 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-light transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-4">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map(t => (
                                <span key={t} className="text-xs font-mono text-gray-500">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Works