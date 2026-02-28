export default function Services() {
  const services = [
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
  ];

  return (
    <section className="py-32 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12">Services</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service}
            className="p-8 border border-zinc-800 rounded-2xl hover:border-indigo-500 transition"
          >
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}