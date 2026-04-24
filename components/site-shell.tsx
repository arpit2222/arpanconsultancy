"use client";

import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";
import { contactInfo, navItems, socialLinks } from "@/lib/site-content";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/social-icons";

const socialIconMap = {
  WhatsApp: WhatsAppIcon,
  Facebook: FacebookIcon,
  X: XIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  YouTube: YouTubeIcon,
} as const;

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
                  width={84}
                  height={56}
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
            <div className="contact-list">
              <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              <a href={contactInfo.mapHref} target="_blank" rel="noreferrer">
                Google Maps
              </a>
            </div>
            <div className="social-footer" aria-label="Social links">
              {socialLinks.map((item) => {
                const Icon = socialIconMap[item.name as keyof typeof socialIconMap];
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.name}
                  >
                    <Icon className="social-icon" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
