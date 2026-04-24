export const metadata = {
  title: "Exporters Corner",
  description: "IEC, RCMC, EXIM, and export council registrations.",
};

export default function ExportersCornerPage() {
  return (
    <section className="hero">
      <div className="container">
        <div className="surface">
          <div className="eyebrow">Exporters Corner</div>
          <h1>EXIM and export-council support for growth-focused businesses.</h1>
          <p>
            The docs strongly emphasize export registration and export council
            work, so this page is dedicated to that niche.
          </p>
          <div className="grid-3">
            <article className="card">
              <h3>Essential registrations</h3>
              <p>IEC, LUT, and trade-enabled compliance setup.</p>
            </article>
            <article className="card">
              <h3>Council memberships</h3>
              <p>APEDA, EPCH, FIEO, EEPC, AEPC, PHARMEXCIL, and more.</p>
            </article>
            <article className="card">
              <h3>Operational support</h3>
              <p>Icegate, customs coordination, and related documentation help.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

