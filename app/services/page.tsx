import { PageHeader, ServiceCards, ServicesGrid } from "@/components/sections";

export const metadata = {
  title: "Services",
  description: "Explore the consultancy's complete service architecture.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        kicker="Services"
        title="The Best Services For Your Business"
        description="A clean directory of the main service groups offered by Arpan Consultancy."
      />
      <ServicesGrid />
      <ServiceCards />
    </>
  );
}

