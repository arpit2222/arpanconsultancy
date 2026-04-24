import {
  ConsultationStrip,
  ExpertisePanel,
  FeatureGrid,
  FooterExtras,
  Hero,
  HowItWorks,
  PricingStrip,
  ServicesGrid,
  TrustStrip,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ExpertisePanel />
      <FeatureGrid />
      <ServicesGrid />
      <HowItWorks />
      <PricingStrip />
      <ConsultationStrip />
      <FooterExtras />
    </>
  );
}
