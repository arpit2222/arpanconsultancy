import Link from "next/link";
import { Hero, Process, ServicesSurface, WhyUs } from "@/components/sections";

const pageRoutes = [
  { href: "/about", label: "About", text: "Firm story and operating model." },
  { href: "/services", label: "Services", text: "Full service architecture." },
  { href: "/startup-hub", label: "Startup Hub", text: "Formation and early-stage support." },
  { href: "/tax-audit", label: "Tax & Audit", text: "GST, income tax, and audit support." },
  {
    href: "/exporters-corner",
    label: "Exporters Corner",
    text: "IEC, RCMC, and export council registrations.",
  },
  {
    href: "/licenses-nocs",
    label: "Licenses & NOCs",
    text: "Industrial permits, NOCs, and certifications.",
  },
  { href: "/blog", label: "Insights", text: "SEO-led articles and updates." },
  { href: "/contact", label: "Contact", text: "Inquiry form and contact channels." },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSurface />
      <WhyUs />
      <Process />
      <section className="section">
        <div className="container surface">
          <div className="section-head">
            <div>
              <h2 className="section-title">Pages included in the rebuild</h2>
              <p className="section-lead">
                I reconstructed the consultancy into separate routes so the site
                is easier to navigate, expand, and optimize for SEO.
              </p>
            </div>
          </div>
          <div className="grid-3">
            {pageRoutes.map((route) => (
              <Link key={route.href} href={route.href} className="card">
                <h3>{route.label}</h3>
                <p>{route.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
