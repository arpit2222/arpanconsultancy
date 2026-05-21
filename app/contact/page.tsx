import { PageHeader } from "@/components/sections";
import { GoogleFormEmbed } from "@/components/google-form";

export const metadata = {
  title: "Contact",
  description: "Contact Arpan Consultancy for consultations and service inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Contact"
        title="Connect with Our Professional Advisory Team"
        description="Reach out for consultations, service support, and compliance planning."
      />
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <article className="card">
              <h3>General inquiries</h3>
              <div className="contact-list">
                <a href="tel:+918178845901">+91 81788 45901</a>
                <a href="tel:+918178845901">(427) 372-7296</a>
                <a href="mailto:chauhanarpan88@gmail.com">chauhanarpan88@gmail.com</a>
              </div>
            </article>
            <article className="card">
              <h3>Office details</h3>
              <p>Gaur City, Greater Noida West, Uttar Pradesh</p>
              <p className="muted">Add the exact office address before publishing.</p>
            </article>
          </div>
          <div style={{ marginTop: 18 }} className="card">
            <h3>Send your details</h3>
            <p className="muted">
              Use the form below to submit your request. It opens the Google Form
              directly inside the page for a simple mobile-friendly experience.
            </p>
            <GoogleFormEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
