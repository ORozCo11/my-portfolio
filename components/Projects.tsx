export default function Projects() {
  const projects = [
    { title: "Project One" },
    { title: "Project Two" },
    { title: "Project Three" },
  ];

  return (
    <section id="projects" className="py-32 bg-zinc-900 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="h-60 bg-zinc-800 rounded-xl flex items-center justify-center hover:scale-105 transition"
            >
              {project.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
