export const metadata = {
  title: "Insights",
  description: "Business guidance, compliance updates, and content expansion hub.",
};

export default function BlogPage() {
  return (
    <section className="hero">
      <div className="container">
        <div className="surface">
          <div className="eyebrow">Insights</div>
          <h1>Compliance updates, expansion topics, and business guidance.</h1>
          <p>
            The service categorization doc suggests this as a strategic content
            engine for SEO, so this route is reserved for articles and updates.
          </p>
          <div className="grid-3">
            <article className="card">
              <h3>Budget and tax updates</h3>
              <p>Articles around GST, income tax, and compliance changes.</p>
            </article>
            <article className="card">
              <h3>Startup guidance</h3>
              <p>Formation, DPIIT, MSME, and funding-related explainers.</p>
            </article>
            <article className="card">
              <h3>Export compliance</h3>
              <p>Export council registration and EXIM workflow articles.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

