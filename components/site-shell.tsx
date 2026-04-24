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
                  width={56}
                  height={47}
                  priority
                />
              </span>
              <span className="brand-copy">
                <span className="brand-name">Arpan Consultancy</span>
                <span className="brand-tag">
                  Tax, GST, EXIM, licensing, and business setup
                </span>
              </span>
            </Link>

            <nav className="nav" aria-label="Primary">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link className="cta" href="/contact">
                Book Consultation
              </Link>
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
              <Link className="cta" href="/contact" onClick={() => setOpen(false)}>
                Book Consultation
              </Link>
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
              <div className="muted">
                Institutional business consulting for Delhi-NCR and export-led firms.
              </div>
            </div>
            <div className="muted">
              Gaur City, Greater Noida West
              <br />
              GST | Income Tax | RCMC | Licenses | Audits
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
