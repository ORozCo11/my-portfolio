import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center p-6">
      <div className="glass-card px-6 py-3 rounded-full flex gap-8 items-center border border-zinc-800">
        <Link href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition">Home</Link>
        <Link href="/about" className="text-sm font-medium text-zinc-400 hover:text-white transition">About</Link>
        <Link href="/projects" className="text-sm font-medium text-zinc-400 hover:text-white transition">Projects</Link>
        <Link href="/contact" className="text-sm font-medium text-zinc-400 hover:text-white transition">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;