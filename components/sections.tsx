import Link from "next/link";
import Image from "next/image";
import {
  contactInfo,
  contactChannels,
  expertiseBars,
  featureCards,
  footerQuote,
  heroHighlights,
  newsletterText,
  pricingCards,
  processSteps,
  serviceDetails,
  servicesPreview,
} from "@/lib/site-content";
import { GoogleFormEmbed } from "@/components/google-form";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">Welcome</div>
          <h1>Simplifying Tax, Legal &amp; Business Compliance Across India</h1>
          <p>
            End-to-end consultancy services for startups, SMEs, and enterprises
            from registration to compliance, all under one roof.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/contact">
              Get Started Now
            </Link>
            <Link className="button" href="/news">
              Watch Video
            </Link>
          </div>
          <div className="hero-badge-row">
            {heroHighlights.map((item) => (
              <span key={item.label}>{item.label}</span>
            ))}
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-art">
            <div className="hero-card">
              <div className="logo-badge">
                <Image
                  src="/logo.jpg"
                  alt="Arpan Consultancy"
                  width={640}
                  height={532}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <section className="hero-trust">
      <div className="container">
        <div className="trust-strip">
          {heroHighlights.map((item) => (
            <span key={item.label}>✔ {item.label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExpertisePanel() {
  return (
    <section className="section">
      <div className="container expertise-panel">
        <div className="grid-2">
          <div>
            <div className="eyebrow">Our Expertise</div>
            <h2 className="section-title">
              When you change the way you look at things, the things you look at
              change
            </h2>
          </div>
          <div className="progress-list">
            {expertiseBars.map((item) => (
              <div className="progress-row" key={item.label}>
                <div className="progress-head">
                  <span>{item.label}</span>
                  <span>{item.value}/100</span>
                </div>
                <div className="progress-track" aria-hidden="true">
                  <div className="progress-fill" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeatureGrid() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid-2">
          {featureCards.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesGrid() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">What We Do</div>
            <h2 className="section-title">Business Consulting Services</h2>
          </div>
          <Link className="button" href="/services">
            All Services
          </Link>
        </div>

        <div className="grid-3">
          {servicesPreview.map((service, index) => (
            <article className="card" key={service.title}>
              <div className="eyebrow">0{index + 1}.</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">How it Works</div>
            <h2 className="section-title">Three Easy Steps</h2>
          </div>
        </div>

        <div className="timeline">
          {processSteps.map((step) => (
            <div className="timeline-item" key={step.title}>
              <div className="timeline-index">{step.number}</div>
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

export function PricingStrip() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid-2">
          {pricingCards.map((card) => (
            <article className="pricing-card" key={card.title}>
              <h3>{card.title}</h3>
              <div className="price">{card.price}</div>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div style={{ marginTop: 18 }}>
                <Link className="button primary" href="/contact">
                  Get Started
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ConsultationStrip() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid-2">
          <article className="card">
            <div className="eyebrow">Need Help?</div>
            <h2 className="section-title">Book a Consultation</h2>
            <p>
              Call us today for business setup, tax, licensing, or export support.
            </p>
            <Link className="button primary" href="/contact">
              Find Out More
            </Link>
          </article>
          <article className="card">
            <h3>Business Consultation</h3>
            <p>60 Minutes · Online Meeting</p>
            <div className="section-divider" />
            <p>{newsletterText.description}</p>
            <GoogleFormEmbed />
          </article>
        </div>
      </div>
    </section>
  );
}

export function NewsletterArea() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid-2">
          <div className="card newsletter">
            <div className="eyebrow">{newsletterText.title}</div>
            <p>{newsletterText.description}</p>
            <form>
              <input type="email" placeholder="Your email *" aria-label="Email address" />
              <button className="button primary" type="submit">
                Subscribe Now
              </button>
            </form>
          </div>
          <div className="card contact-grid">
            {contactChannels.map((section) => (
              <div key={section.title} className="stack">
                <h3>{section.title}</h3>
                {"items" in section
                  ? section.items.map((item) => {
                      if ("href" in item && item.href) {
                        return (
                          <Link href={item.href} key={item.label}>
                            {item.label}
                          </Link>
                        );
                      }

                      return <div key={item.label}>{item.label}</div>;
                    })
                  : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FooterExtras() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid-2">
          <div className="quote">
            <h3>“{footerQuote.title}”</h3>
            <p>— {footerQuote.author}</p>
          </div>
          <div className="card">
            <h3>Contact Info</h3>
            <div className="contact-list">
              <Link href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</Link>
              <Link href={`mailto:${contactInfo.email}`}>{contactInfo.email}</Link>
              <Link href={contactInfo.mapHref} target="_blank" rel="noreferrer">
                Google Maps Location
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHeader({
  kicker,
  title,
  description,
  ctaHref = "/contact",
  ctaLabel = "Get Started Now",
}: Readonly<{
  kicker: string;
  title: string;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
}>) {
  return (
    <section className="hero">
      <div className="container">
        <div className="surface">
          <div className="eyebrow">{kicker}</div>
          <h1 className="section-title" style={{ marginTop: 10, maxWidth: "13ch" }}>
            {title}
          </h1>
          <p className="section-lead" style={{ marginTop: 14 }}>
            {description}
          </p>
          <div style={{ marginTop: 22 }}>
            <Link className="button primary" href={ctaHref}>
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceCards() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid-3">
          {serviceDetails.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
