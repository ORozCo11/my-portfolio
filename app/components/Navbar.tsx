import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-blue-600 text-white flex space-x-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
