import { PageHeader } from "@/components/sections";

export const metadata = {
  title: "Startup Hub",
  description: "Startup formation, DPIIT, MSME, and early-stage business support.",
};

export default function StartupHubPage() {
  return (
    <>
      <PageHeader
        kicker="Startup Hub"
        title="Launch-ready support for founders"
        description="Entity formation, startup recognition, MSME support, and early compliance planning."
      />
      <section className="section">
        <div className="container">
          <div className="grid-3">
            <article className="card">
              <h3>Entity setup</h3>
              <p>Private Limited, LLP, Partnership, and documentation support.</p>
            </article>
            <article className="card">
              <h3>DPIIT benefits</h3>
              <p>Startup recognition and benefit-oriented advisory for founders.</p>
            </article>
            <article className="card">
              <h3>MSME ecosystem</h3>
              <p>Udyam, ZED, and practical operational support for small firms.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

