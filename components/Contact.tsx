export default function Contact() {
  return (
    <section id="contact" className="py-32 max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

      <form className="flex flex-col gap-6">
        <input
          placeholder="Your Name"
          className="p-4 bg-zinc-800 rounded-lg"
        />
        <input
          placeholder="Your Email"
          className="p-4 bg-zinc-800 rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="p-4 bg-zinc-800 rounded-lg"
        />
        <button className="bg-indigo-600 py-3 rounded-lg hover:bg-indigo-500 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}