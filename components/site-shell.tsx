"use client";

import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";
import { navItems } from "@/lib/site-content";

export function SiteShell({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [open, setOpen] = useState(false);

  return (
    <div className="page-wrap">
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <Link href="/" className="brand" onClick={() => setOpen(false)}>
              <span className="brand-mark">
                <Image
                  src="/logo.jpg"
                  alt="Arpan Consultancy logo"
                  width={156}
                  height={96}
                  priority
                />
              </span>
            </Link>

            <nav className="nav" aria-label="Primary">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <div className="social-group" aria-label="Social links">
                <Link href="#" aria-label="Facebook">
                  f
                </Link>
                <Link href="#" aria-label="X">
                  x
                </Link>
                <Link href="#" aria-label="Instagram">
                  o
                </Link>
              </div>
            </nav>

            <button
              className="button mobile-toggle"
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              Menu
            </button>
          </div>

          {open ? (
            <div id="mobile-nav" className="mobile-panel">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <div className="mobile-socials">
                <Link href="#" onClick={() => setOpen(false)}>
                  Facebook
                </Link>
                <Link href="#" onClick={() => setOpen(false)}>
                  X
                </Link>
                <Link href="#" onClick={() => setOpen(false)}>
                  Instagram
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div>
              <strong>Arpan Consultancy</strong>
              <div className="muted">Compliance simplified. Business amplified.</div>
            </div>
            <div className="muted">
              Gaur City, Greater Noida West
              <br />
              Tax | Legal | Business | Finance
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
