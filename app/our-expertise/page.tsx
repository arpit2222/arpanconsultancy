import { PageHeader } from "@/components/sections";

export const metadata = {
  title: "Our Expertise",
  description: "Comprehensive equity investment, mutual funds, commodities, and Forex market strategies.",
};

export default function OurExpertisePage() {
  return (
    <>
      <PageHeader
        kicker="Our Expertise"
        title="Investment Advisory"
        description="We deliver ethical, research-based, and client-centric investment solutions that support informed decision-making and long-term financial success."
        ctaHref="/contact"
        ctaLabel="Get Started"
      />
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <article className="card">
              <h3>Equity Investing</h3>
              <p>
                We provide comprehensive equity investment strategies based on fundamental analysis, technical research, market trends, and long-term wealth creation principles.
              </p>
            </article>
            <article className="card">
              <h3>Mutual Funds</h3>
              <p>
                Our advisory services help clients select suitable mutual fund investments aligned with their financial goals, investment horizon, and risk profile.
              </p>
            </article>
            <article className="card">
              <h3>Commodities</h3>
              <p>
                We offer market insights and strategic guidance across commodity markets, helping investors understand price trends, hedging opportunities, and portfolio diversification.
              </p>
            </article>
            <article className="card">
              <h3>Forex Markets</h3>
              <p>
                Our expertise in foreign exchange markets includes currency analysis, risk management strategies, and market intelligence for investors and businesses with global exposure.
              </p>
            </article>
          </div>

          <div style={{ marginTop: "40px" }}>
            <h2 className="section-title">Investment Advisory Services</h2>
            <ul style={{ marginTop: "20px", listStyle: "disc", paddingLeft: "20px", display: "grid", gap: "10px" }}>
              <li>Portfolio Analysis</li>
              <li>Asset Allocation</li>
              <li>Risk Management</li>
              <li>Wealth Creation Strategies</li>
              <li>Market Research & Investment Insights</li>
              <li>Long-Term Financial Planning</li>
            </ul>
          </div>

          <div className="card" style={{ marginTop: "40px" }}>
            <h3>Our Commitment</h3>
            <p>
              Our mission is to deliver ethical, research-based, and client-centric investment solutions that support informed decision-making and long-term financial success.
            </p>
            <div className="section-divider" />
            <p className="muted" style={{ fontSize: "0.85rem", marginTop: "1rem" }}>
              <strong>Disclaimer:</strong> Investments in securities, mutual funds, commodities, and Forex markets are subject to market risks. Past performance is not indicative of future results. Investors should carefully consider their financial objectives and risk tolerance before making investment decisions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

