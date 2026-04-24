import {
  ConsultationStrip,
  ExpertisePanel,
  FeatureGrid,
  FooterExtras,
  Hero,
  HowItWorks,
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
      <ConsultationStrip />
      <FooterExtras />
    </>
  );
}
