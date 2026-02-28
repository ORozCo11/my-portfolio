import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen px-6 pt-24 pb-12 max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="mb-20">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-white">
          Software Engineer & <br /> 
          <span className="text-zinc-500">Web Developer.</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
          Building digital products with a focus on clean code and user-centric design. 
          Specializing in React, Next.js, and scalable backend systems.
        </p>
        <div className="flex gap-4 mt-8">
          <Link href="/projects" className="px-5 py-2 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition">
            View Projects
          </Link>
          <Link href="/contact" className="px-5 py-2 border border-zinc-700 text-white font-medium rounded-full hover:bg-zinc-900 transition">
            Get in touch
          </Link>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-8">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Example Project Card */}
          <div className="glass-card p-6 rounded-2xl group cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-zinc-800 rounded-lg text-sm text-zinc-300">Web App</div>
              <span className="text-zinc-600 group-hover:text-white transition">↗</span>
            </div>
            <h3 className="text-xl font-bold mb-2">DRRM Strategic System</h3>
            <p className="text-zinc-400 text-sm mb-4">An innovative system built for Disaster Risk Reduction and Management tracking.</p>
            <div className="flex gap-2">
              <span className="text-[10px] px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-zinc-500">Next.js</span>
              <span className="text-[10px] px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-zinc-500">PostgreSQL</span>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl group cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-zinc-800 rounded-lg text-sm text-zinc-300">Management</div>
              <span className="text-zinc-600 group-hover:text-white transition">↗</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Procurement Tracker</h3>
            <p className="text-zinc-400 text-sm mb-4">Accounting and audit compliance system for government operations.</p>
            <div className="flex gap-2">
              <span className="text-[10px] px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-zinc-500">PHP</span>
              <span className="text-[10px] px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-zinc-500">MySQL</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}