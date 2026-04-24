import { PageHeader, ServiceCards } from "@/components/sections";

export const metadata = {
  title: "Tax & Audit",
  description: "Income tax, GST, TDS, and audit support for individuals and businesses.",
};

export default function TaxAuditPage() {
  return (
    <>
      <PageHeader
        kicker="Tax & Audit"
        title="Taxation, compliance, and audit work in one place"
        description="GST, income tax, notices, and audit support designed for organized business operations."
      />
      <ServiceCards />
    </>
  );
}

