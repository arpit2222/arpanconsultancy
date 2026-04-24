import { PageHeader } from "@/components/sections";

export const metadata = {
  title: "News",
  description: "Updates, business insights, and compliance news from Arpan Consultancy.",
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        kicker="News"
        title="Latest News and Compliance Updates"
        description="Use this page for announcements, articles, and business guidance."
      />
      <section className="section">
        <div className="container">
          <div className="grid-3">
            <article className="card">
              <h3>Tax updates</h3>
              <p>Short compliance notes and filing reminders for businesses.</p>
            </article>
            <article className="card">
              <h3>Business setup</h3>
              <p>Company registration and startup support articles.</p>
            </article>
            <article className="card">
              <h3>Export guidance</h3>
              <p>RCMC, IEC, and export-council related educational content.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

