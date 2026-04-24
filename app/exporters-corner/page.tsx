import { PageHeader } from "@/components/sections";

export const metadata = {
  title: "Exporters Corner",
  description: "IEC, RCMC, EXIM, and export council registrations.",
};

export default function ExportersCornerPage() {
  return (
    <>
      <PageHeader
        kicker="Exporters Corner"
        title="EXIM and export-council support for growing businesses"
        description="IEC, RCMC, council memberships, and export-related regulatory assistance."
      />
      <section className="section">
        <div className="container">
          <div className="grid-3">
            <article className="card">
              <h3>Essential registrations</h3>
              <p>IEC, LUT, and trade-ready compliance setup.</p>
            </article>
            <article className="card">
              <h3>Council memberships</h3>
              <p>APEDA, EPCH, FIEO, EEPC, AEPC, PHARMEXCIL, and others.</p>
            </article>
            <article className="card">
              <h3>Operational support</h3>
              <p>Icegate, customs coordination, and documentation handling.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

