export const metadata = {
  title: "Licenses & NOCs",
  description: "Industrial licenses, factory approvals, NOCs, and certifications.",
};

export default function LicensesPage() {
  return (
    <section className="hero">
      <div className="container">
        <div className="surface">
          <div className="eyebrow">Licenses & NOCs</div>
          <h1>Industrial permits and regulatory approvals.</h1>
          <p>
            This route groups the manufacturing-focused services from the brief:
            pollution NOC, fire NOC, factory license, trademark, FSSAI, ISO, and
            related certifications.
          </p>
          <div className="grid-2">
            <article className="card">
              <h3>Safety and operations</h3>
              <p>Fire NOC, factory licensing, and building-related compliance support.</p>
            </article>
            <article className="card">
              <h3>Quality and brand</h3>
              <p>Trade Mark, ISO, FSSAI, FSC, and broader regulatory assistance.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

