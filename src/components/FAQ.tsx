import Link from "next/link";

type Item = { q: string; a: string };

const sections: { title: string; items: Item[] }[] = [
  {
    title: "Pricing & engagement",
    items: [
      {
        q: "How much does a custom platform cost?",
        a: "Every engagement is scoped individually. The final figure depends on complexity, integrations, timeline, and ongoing support needs. You get a fixed, itemised quote before any work starts, and we will walk you through exactly how it was costed so there are no surprises.",
      },
      {
        q: "Do you work on fixed-price or retainer?",
        a: "Both. Most new builds are fixed-price against a detailed scope document. Once a platform is live, it typically moves to a monthly retainer covering maintenance, small feature additions, and support.",
      },
      {
        q: "What payment methods do you accept?",
        a: "USD bank transfer, local Zimbabwean bank transfer, EcoCash for smaller retainers, and cross-border bank wire for diaspora-owned clients. We issue formal invoices for every engagement.",
      },
      {
        q: "Do you work with startups or only established companies?",
        a: "Both. We have worked with solo founders on their first MVP and with established corporates on mission-critical platforms. The engineering standard is the same either way. What differs is scope and timeline.",
      },
    ],
  },
  {
    title: "Process & delivery",
    items: [
      {
        q: "How long does a typical project take?",
        a: "Small custom tools: 4 to 6 weeks. Mid-size platforms like CRMs or ERPs: 8 to 16 weeks. Full enterprise platforms: 4 to 9 months. We ship in 2-week sprints with working software you can test at the end of each one.",
      },
      {
        q: "What does working with Spiritus actually look like?",
        a: "Kickoff, discovery, scoping, sprint delivery, handover, ongoing support. You get a single point of contact, weekly status updates, and access to the development environment throughout. No black-box delivery.",
      },
      {
        q: "Do you handle maintenance after launch?",
        a: "Yes. Every platform we ship can transition to a monthly support retainer that covers uptime, bug fixes, small feature additions, infrastructure management, and security patching.",
      },
    ],
  },
  {
    title: "Technical & local context",
    items: [
      {
        q: "What technologies do you work with?",
        a: "Primarily Next.js and TypeScript on the frontend, Node.js or Python on the backend, PostgreSQL for data, and AWS or DigitalOcean for infrastructure. We pick the tool that fits the problem, not the one that was trendy last quarter.",
      },
      {
        q: "Can you integrate with systems we already run?",
        a: "Yes. We build APIs and data pipelines that connect to existing ERPs, accounting packages, POS systems, legacy databases, and third-party services. If it has an API or a database, we can work with it.",
      },
      {
        q: "How do you handle load-shedding, connectivity, and local payment rails?",
        a: "Every platform is built offline-first where relevant. Data syncs back when connectivity returns. We integrate with EcoCash, bank transfer, card, and USD cash as standard, and we support local hosting when data residency is a requirement.",
      },
      {
        q: "Do you only work with Zimbabwean companies?",
        a: "Our focus is Zimbabwe. We work with Zimbabwean organisations and with diaspora-owned businesses whose operations include a Zim footprint. That focus is the reason our systems actually fit. We understand the operating environment.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <div id="faq" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
      <div
        className="section-wrap"
        style={{ padding: "120px 56px", maxWidth: 900, margin: "0 auto" }}
      >
        <div className="section-label">FAQ</div>
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "var(--fg)",
            marginBottom: 16,
          }}
        >
          Frequently asked
          <br />
          <span style={{ color: "var(--fg-subtle)" }}>questions.</span>
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: "var(--fg-muted)",
            maxWidth: 560,
            marginBottom: 56,
          }}
        >
          What clients usually ask us before signing a contract. If your
          question is not here, send us a note. We respond within 24 hours.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {sections.map((section) => (
            <div key={section.title}>
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 16,
                }}
              >
                {section.title}
              </h3>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {section.items.map((item, i) => (
                  <details
                    key={i}
                    className="faq-item"
                    style={{
                      borderTop: "1px solid var(--border)",
                      ...(i === section.items.length - 1
                        ? { borderBottom: "1px solid var(--border)" }
                        : {}),
                    }}
                  >
                    <summary
                      style={{
                        listStyle: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 16,
                        padding: "18px 4px",
                        cursor: "pointer",
                        fontFamily: "var(--font-sans)",
                        fontSize: 15,
                        fontWeight: 500,
                        letterSpacing: "-0.01em",
                        color: "var(--fg)",
                        transition: "color 0.15s",
                      }}
                    >
                      {item.q}
                      <svg
                        className="faq-chevron"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        style={{
                          flexShrink: 0,
                          color: "var(--fg-subtle)",
                          transition: "transform 0.2s ease, color 0.15s",
                        }}
                      >
                        <path
                          d="M3 5L7 9L11 5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </summary>
                    <div
                      style={{
                        fontSize: 14,
                        lineHeight: 1.65,
                        color: "var(--fg-muted)",
                        padding: "0 48px 20px 4px",
                      }}
                    >
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className="qcard"
          style={{
            marginTop: 64,
            padding: "32px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: "var(--fg)",
                marginBottom: 4,
              }}
            >
              Still have a question?
            </div>
            <div style={{ fontSize: 14, color: "var(--fg-muted)" }}>
              Send us a note. We respond within 24 hours.
            </div>
          </div>
          <Link href="/contact" className="btn-amber">
            Start a conversation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M7 3L11 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
