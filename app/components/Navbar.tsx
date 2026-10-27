"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const path = usePathname();
  return (
    <header className="ribbon">
      <Link href="/" className="brand" aria-label="Phindile Sandi home">
        PS<span> / developer</span>
      </Link>
      <nav aria-label="Main navigation">
        {[
          ["/", "Overview"],
          ["/projects", "Work"],
          ["/skills", "Expertise"],
          ["/contact", "Let’s talk ↗"],
        ].map(([href, label]) => (
          <Link
            key={href}
            href={href}
            aria-current={path === href ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
