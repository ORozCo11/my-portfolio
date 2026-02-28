export default function Stats() {
  const stats = [
    { label: "Projects", value: "15+" },
    { label: "Technologies", value: "12+" },
    { label: "Happy Clients", value: "5+" },
  ];

  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center gap-12">
        {stats.map((stat) => (
          <div key={stat.label}>
            <h3 className="text-5xl font-bold text-indigo-500">
              {stat.value}
            </h3>
            <p className="text-zinc-400 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}