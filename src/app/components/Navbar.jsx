"use client";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (pathname === '/' || pathname === '') {
      const el = document.getElementById('about-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    // navigate to homepage with hash so it will land on about
    router.push('/#about-section');
  };

  return (
    <nav className="bg-black border-b border-gray-800 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-500">
        Bakhtawer<span className="text-white">.</span>
      </h1>

      <div className="space-x-6">
        <Link href="/" className="hover:text-green-500">Home</Link>
        <a href="/about" onClick={handleAboutClick} className="hover:text-green-500 cursor-pointer">About</a>
        <Link href="/projects" className="hover:text-green-500">Projects</Link>
        <Link href="/contact" className="hover:text-green-500">Contact</Link>
      </div>
    </nav>
  );
}
