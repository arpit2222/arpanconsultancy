export const metadata = {
  title: "Startup Hub",
  description: "Startup formation, DPIIT, MSME, and early-stage business support.",
};

export default function StartupHubPage() {
  return (
    <section className="hero">
      <div className="container">
        <div className="surface">
          <div className="eyebrow">Startup Hub</div>
          <h1>Launch-ready support for founders.</h1>
          <p>
            This page captures the expansion ideas from the service categorization
            document: entity formation, DPIIT recognition, MSME ecosystem support,
            and startup compliance.
          </p>
          <div className="grid-3">
            <article className="card">
              <h3>Entity setup</h3>
              <p>Private Limited, LLP, Partnership, and related incorporation support.</p>
            </article>
            <article className="card">
              <h3>DPIIT and benefits</h3>
              <p>Startup recognition and benefit-oriented advisory for new ventures.</p>
            </article>
            <article className="card">
              <h3>MSME ecosystem</h3>
              <p>Udyam, ZED, delayed payment recovery, and practical business guidance.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

