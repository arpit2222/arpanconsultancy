export const metadata = {
  title: "About",
  description: "About Arpan Consultancy, its structure, and its operating model.",
};

export default function AboutPage() {
  return (
    <section className="hero">
      <div className="container">
        <div className="surface">
          <div className="eyebrow">About</div>
          <h1>The institutional standard in business consulting.</h1>
          <p>
            The supplied content frames Arpan Consultancy as a multi-generational
            firm combining traditional accounting depth with modern regulatory
            execution. This page presents that positioning in a cleaner structure.
          </p>
          <div className="grid-2">
            <article className="card">
              <h3>Genesis</h3>
              <p>
                The firm is positioned as a bridge between professional heritage
                and digital-first service delivery.
              </p>
            </article>
            <article className="card">
              <h3>Structure</h3>
              <p>
                Taxation, legal compliance, EXIM, operations, and associate oversight
                work together as a single advisory system.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

