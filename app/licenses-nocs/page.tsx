import { PageHeader } from "@/components/sections";

export const metadata = {
  title: "Licenses & NOCs",
  description: "Industrial licenses, factory approvals, NOCs, and certifications.",
};

export default function LicensesPage() {
  return (
    <>
      <PageHeader
        kicker="Licenses & NOCs"
        title="Industrial permits and regulatory approvals"
        description="Pollution NOC, fire NOC, factory license, FSSAI, ISO, and trademark support."
      />
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <article className="card">
              <h3>Safety and operations</h3>
              <p>Fire NOC, factory licensing, and infrastructure-related compliance.</p>
            </article>
            <article className="card">
              <h3>Quality and brand</h3>
              <p>Trade Mark, ISO, FSSAI, FSC, and broader certification support.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

