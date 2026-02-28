export default function TechStack() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
    { category: "Backend", items: ["Node.js", "PHP", "PostgreSQL", "MySQL"] },
    { category: "Tools", items: ["Git", "Docker", "Vercel", "Postman"] }
  ];

  return (
    <section className="mt-20">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-8">Technologies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-white font-medium mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 text-sm bg-zinc-900 border border-zinc-800 rounded-md text-zinc-400 hover:border-zinc-600 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}