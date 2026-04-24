export const metadata = {
  title: "Tax & Audit",
  description: "Income tax, GST, TDS, and audit support for individuals and businesses.",
};

export default function TaxAuditPage() {
  return (
    <section className="hero">
      <div className="container">
        <div className="surface">
          <div className="eyebrow">Tax & Audit</div>
          <h1>Taxation, compliance, and audit work in one place.</h1>
          <p>
            Based on the SEO blueprint, this route carries the core tax and audit
            services such as GST, income tax, TDS, notices, and statutory audit.
          </p>
          <div className="grid-2">
            <article className="card">
              <h3>Direct taxes</h3>
              <p>ITR filing, tax computation, advance tax, and notice response support.</p>
            </article>
            <article className="card">
              <h3>Indirect taxes</h3>
              <p>GST registration, GST returns, TDS, and appeal-related assistance.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

