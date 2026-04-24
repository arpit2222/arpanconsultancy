import { PageHeader, ServiceCards } from "@/components/sections";

export const metadata = {
  title: "About",
  description: "About Arpan Consultancy, its structure, and its operating model.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="About Us"
        title="About Arpan Consultancy"
        description="A structured consultancy built around tax, legal, export, and business support for Indian enterprises."
        ctaHref="/contact"
        ctaLabel="Contact Our Team"
      />
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <article className="card">
              <h3>Institutional approach</h3>
              <p>
                The firm blends professional heritage with a modern execution
                workflow, keeping compliance practical and predictable.
              </p>
            </article>
            <article className="card">
              <h3>Working structure</h3>
              <p>
                Taxation, finance, business setup, licensing, and export support
                operate as coordinated advisory wings.
              </p>
            </article>
          </div>
        </div>
      </section>
      <ServiceCards />
    </>
  );
}

