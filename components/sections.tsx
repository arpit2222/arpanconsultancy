import Link from "next/link";
import {
  contactChannels,
  coreServices,
  industryPillars,
  processSteps,
  serviceClusters,
  siteStats,
} from "@/lib/site-content";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">Gaur City, Greater Noida West</div>
          <h1>Business compliance, built with precision and speed.</h1>
          <p>
            Arpan Consultancy is a multi-disciplinary firm for GST, Income Tax,
            company formation, export registrations, industrial NOCs, and audit
            support. The site structure below mirrors the current consultancy
            offering and expands it into a clean Next.js experience.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/contact">
              Book a Professional Consultation
            </Link>
            <Link className="button" href="/services">
              Explore Services
            </Link>
          </div>
        </div>

        <aside className="hero-card">
          <div className="eyebrow">What the site covers</div>
          <div className="stat-grid">
            {siteStats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20 }} className="muted">
            Core pages included: Home, About, Services, Startup Hub, Tax & Audit,
            Exporters Corner, Licenses & NOCs, Insights, and Contact.
          </div>
        </aside>
      </div>
    </section>
  );
}

export function ServicesSurface() {
  return (
    <section className="section">
      <div className="container surface">
        <div className="section-head">
          <div>
            <h2 className="section-title">Service pillars</h2>
            <p className="section-lead">
              Built from the provided SEO docs and expanded into a clean page
              structure for the Next.js build.
            </p>
          </div>
        </div>
        <div className="grid-3">
          {coreServices.map((service) => (
            <article className="card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid-2">
          <article className="card">
            <h2 className="section-title">Why Arpan Consultancy</h2>
            <p>
              The copy supplied in your docs points to a firm that combines
              multi-generation accounting knowledge, subject-matter specialists,
              and local liaison capability in the Delhi-NCR industrial belt.
            </p>
            <ul className="pill-list">
              <li>Multi-tier review</li>
              <li>Digital-first workflow</li>
              <li>Local coordination</li>
              <li>Institutional accuracy</li>
            </ul>
          </article>

          <article className="card">
            <h3>Industries served</h3>
            <p>These are the industry clusters explicitly mentioned in the brief.</p>
            <ul className="pill-list">
              {industryPillars.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export function ServiceClusters() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <h2 className="section-title">Full service architecture</h2>
            <p className="section-lead">
              This is the page-level grouping I derived from the documents.
            </p>
          </div>
        </div>

        <div className="grid-2">
          {serviceClusters.map((cluster) => (
            <article className="card" key={cluster.title}>
              <h3>{cluster.title}</h3>
              <ul>
                {cluster.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section">
      <div className="container surface">
        <div className="section-head">
          <div>
            <h2 className="section-title">How the firm works</h2>
            <p className="section-lead">
              A concise process that matches a professional consulting service.
            </p>
          </div>
        </div>

        <div className="timeline">
          {processSteps.map((step, index) => (
            <div className="timeline-item" key={step.title}>
              <div className="timeline-index">{index + 1}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSurface() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid-2">
          <article className="card">
            <h2 className="section-title">Contact channels</h2>
            <div className="stack">
              {contactChannels.map((channel) => (
                <div key={channel.title}>
                  <h3>{channel.title}</h3>
                  <div className="accent">{channel.value}</div>
                  <p>{channel.note}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="card">
            <h3>Inquiry form</h3>
            <form className="form">
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="org">Organization</label>
                <input id="org" name="org" placeholder="Business or company name" />
              </div>
              <div className="field">
                <label htmlFor="service">Service category</label>
                <select id="service" name="service" defaultValue="Taxation">
                  <option>Taxation</option>
                  <option>EXIM / Export</option>
                  <option>Licensing</option>
                  <option>Audit</option>
                  <option>Incorporation</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Describe what you need help with"
                />
              </div>
              <button className="button primary" type="submit">
                Submit inquiry
              </button>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
}

