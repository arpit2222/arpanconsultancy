export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
] as const;

export const heroHighlights = [
  {
    label: "Trusted by Businesses Across India",
  },
  {
    label: "Expert CA & Legal Team",
  },
  {
    label: "Fast & Reliable Service",
  },
  {
    label: "Compliance with care",
  },
] as const;

export const expertiseBars = [
  { label: "Tax Consulting", value: 65 },
  { label: "Finance Consulting", value: 95 },
  { label: "Business Consulting", value: 80 },
] as const;

export const servicesPreview = [
  {
    title: "Tax Consulting",
    description:
      "GST, Income Tax, TDS, return filing, notices, and day-to-day compliance support.",
  },
  {
    title: "Finance Consulting",
    description:
      "Financial planning, audit support, business reporting, and advisory assistance.",
  },
  {
    title: "Business Consulting",
    description:
      "Company setup, licenses, RCMC registrations, and practical business guidance.",
  },
  {
    title: "Tax Legislation",
    description:
      "Structured interpretation of laws, filing calendars, and regulatory updates.",
  },
  {
    title: "Strategy & Analytics",
    description:
      "Clarity for founders and growing firms using organized compliance and planning.",
  },
  {
    title: "Audit & Assurance",
    description:
      "Audit preparation, documentation review, and assurance-oriented workflows.",
  },
] as const;

export const featureCards = [
  {
    title: "Expert Advisory",
    description:
      "Get professional guidance from experienced tax and legal consultants.",
  },
  {
    title: "End-to-End Compliance",
    description:
      "From registration to filings, everything is handled under one roof.",
  },
  {
    title: "Pan India Services",
    description:
      "Serving clients across India with reliable digital support.",
  },
  {
    title: "Fast Execution",
    description:
      "Quick turnaround with accurate documentation and careful review.",
  },
] as const;

export const processSteps = [
  {
    number: "1",
    title: "Understand the Business",
    body:
      "We study your current business position, compliance needs, and service requirements.",
  },
  {
    number: "2",
    title: "Create a Business Plan",
    body:
      "We map the route for filings, registrations, licensing, and follow-up actions.",
  },
  {
    number: "3",
    title: "Implementation",
    body:
      "We execute the plan with documentation support, submission, and coordination.",
  },
] as const;

export const pricingCards = [
  {
    title: "Individual",
    price: "$49/Mo",
    items: [
      "Auctor elit sed vulputate",
      "Nunc aliquet bibendum",
      "Vitae nunc sed velit aliquam",
      "Dignissim tincidunt lobortis",
    ],
  },
  {
    title: "Business",
    price: "$199/Mo",
    items: [
      "Auctor elit sed vulputate",
      "Nunc aliquet bibendum",
      "Vitae nunc sed velit aliquam",
      "Dignissim tincidunt lobortis",
    ],
  },
] as const;

export const contactChannels = [
  {
    title: "Contact Info",
    items: [
      {
        label: "(647) 528-7458",
        href: "tel:+16475287458",
      },
      {
        label: "(427) 372-7296",
        href: "tel:+14273727296",
      },
      {
        label: "consulting@mail.com",
        href: "mailto:consulting@mail.com",
      },
    ],
  },
  {
    title: "Opening Hours",
    items: [
      { label: "Mon - Fri 9AM - 8PM" },
      { label: "Sat - Sun 10AM - 5PM" },
    ],
  },
  {
    title: "Social Media",
    items: [
      { label: "Facebook", href: "#" },
      { label: "X (Twitter)", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
] as const;

export const footerQuote = {
  title: "Beware of little expenses, a small leak will sink a great ship",
  author: "Benjamin Franklin",
} as const;

export const newsletterText = {
  title: "Subscribe to Latest News",
  description: "Get compliance updates, service news, and business insights.",
} as const;

export const serviceDetails = [
  {
    title: "Tax Consultantion",
    description:
      "Income tax, GST, TDS, filing support, and routine compliance management.",
  },
  {
    title: "Finance Consultantion",
    description:
      "Finance planning, bookkeeping support, and audit-ready reporting assistance.",
  },
  {
    title: "Business Consultantion",
    description:
      "Entity setup, registrations, licensing, and consulting for growing firms.",
  },
] as const;
