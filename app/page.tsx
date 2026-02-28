import Link from 'next/link';
import TechStack from '../components/TechStack';

export default function Home() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-20 max-w-4xl mx-auto">
      {/* Hero */}
      <section className="mb-24">
        <h1 className="text-6xl font-bold tracking-tighter mb-6 text-white leading-tight">
          Crafting digital <br /> 
          <span className="text-zinc-600">solutions for impact.</span>
        </h1>
        <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed">
          Full-stack developer focused on building systems for DRRM and government operations. 
          Turning complex problems into clean, functional code.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="mb-24">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-10">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard 
            title="DRRM Strategic System" 
            desc="Innovative tracking and management for Disaster Risk Reduction." 
            tags={["Next.js", "PostgreSQL"]} 
          />
          <ProjectCard 
            title="Procurement Tracker" 
            desc="Accounting compliance and audit system for local government." 
            tags={["PHP", "MySQL"]} 
          />
        </div>
      </section>

      {/* Tech Stack */}
      <TechStack />

      {/* Simple Footer Link */}
      <footer className="mt-32 pt-8 border-t border-zinc-900 flex justify-between items-center text-zinc-500 text-sm">
        <p>© 2026 Your Name</p>
        <Link href="/contact" className="hover:text-white transition">Get in touch →</Link>
      </footer>
    </main>
  );
}

function ProjectCard({ title, desc, tags }: { title: string, desc: string, tags: string[] }) {
  return (
    <div className="group p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300">
      <div className="flex justify-between items-start mb-6">
        <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-xl">🚀</div>
        <span className="text-zinc-600 group-hover:text-white transition-colors">↗</span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-zinc-400 mb-6 leading-relaxed">{desc}</p>
      <div className="flex gap-2">
        {tags.map(tag => (
          <span key={tag} className="text-[11px] font-medium px-2 py-1 bg-zinc-800 text-zinc-400 rounded uppercase tracking-wider">{tag}</span>
        ))}
      </div>
    </div>
  );
}