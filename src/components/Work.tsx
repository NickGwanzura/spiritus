"use client";

import { useState } from "react";

type Project = {
  client: string;
  title: string;
  url: string;
  status: "Deployed" | "Delivered" | "In Development" | "In Progress";
  location: string;
  metric: { value: string; label: string };
  desc: string;
  caseStudy: string[];
  tags: string[];
};

const projects: Project[] = [
  {
    client: "National Ozone Unit & HEVACRAZ",
    title: "RAC Technician National Registry",
    url: "https://web-production-e408d.up.railway.app/",
    status: "Deployed",
    location: "Zimbabwe",
    metric: { value: "Montreal Protocol", label: "Compliance Registry" },
    desc: "A national self-registration platform for refrigeration and air conditioning technicians in Zimbabwe. Captures credentials, equipment handled, and training history to support regulatory oversight and Montreal Protocol reporting obligations.",
    caseStudy: [
      "Zimbabwe's National Ozone Unit and HEVACRAZ are the bodies responsible for tracking who is allowed to handle refrigerants in the country, a question that matters for both worker safety and the country's standing under the Montreal Protocol and Kigali Amendment. The challenge they came to us with was that nobody actually had a complete list of the technicians doing this work. Records lived in workshop ledgers, training-provider spreadsheets, and the memories of long-serving inspectors. Designing vocational programmes or proving compliance to international partners on the back of that was effectively impossible.",
      "We built a public-facing registry that lets every RAC technician in the country self-register in fifteen minutes. The form captures professional credentials, the equipment they service, training history, and consent for inclusion in a public directory, and it works offline so technicians on rural sites can complete it on a phone with intermittent connectivity. Behind the registry sits an admin workspace restricted to NOU and HEVACRAZ staff, where the data feeds straight into training programme design, regulatory frameworks, and the country's reporting obligations. For the first time, the regulator has a single source of truth for the workforce it is supposed to oversee.",
    ],
    tags: ["REGISTRY", "COMPLIANCE", "HVAC-R", "GOVERNMENT"],
  },
  {
    client: "Dreambox Advertising",
    title: "Billboard CRM",
    url: "https://crm.dreamboxadvertising.co.zw/",
    status: "Deployed",
    location: "Zimbabwe",
    metric: { value: "Multi-Site", label: "Billboard Portfolio" },
    desc: "A custom CRM for Zimbabwe's leading billboard advertising company. Manages inventory across locations, tracks campaigns booking-through-completion, and reports live revenue and occupancy.",
    caseStudy: [
      "Dreambox came to us running one of the largest billboard networks in the country on a tangle of spreadsheets, WhatsApp threads, and half-remembered bookings. The commercial team could tell you a given site was occupied but nobody could tell you by whom, for how long, or at what rate without opening three different files. Pricing conversations with agencies were stretching into days, and double bookings were becoming frequent enough to threaten the reputation that had taken the business a decade to build.",
      "We rebuilt their operation around a single CRM designed for outdoor media. Every billboard is now its own asset record with location, size, lighting class, rate card, and a live calendar of bookings. The sales team quotes agencies in real time from the same screen that finance uses to invoice, operations uses to schedule installations, and management uses to look at revenue by region. Double bookings have disappeared, proposal turnaround is measured in minutes rather than days, and the board finally sees a single number for portfolio occupancy that everyone agrees on.",
    ],
    tags: ["CRM", "ADVERTISING", "INVENTORY", "SCHEDULING"],
  },
  {
    client: "Blackivymedia",
    title: "Billboard CRM",
    url: "https://blackivymediacrm.live/",
    status: "Delivered",
    location: "Zimbabwe",
    metric: { value: "Multi-Site", label: "Billboard Portfolio" },
    desc: "A custom CRM for Blackivymedia's outdoor advertising operations. Manages billboard inventory across locations, tracks client campaigns booking-through-completion, and reports live revenue and occupancy.",
    caseStudy: [
      "Blackivymedia had grown from a handful of premium sites into a national outdoor portfolio, and the systems had not kept up. Campaign records lived in the account managers' heads, invoicing depended on one finance lead's spreadsheets, and reporting to shareholders required a full week of manual reconciliation every month. The business was profitable in spite of the tooling, not because of it.",
      "Our engagement delivered a purpose-built CRM that mirrors how the team actually sells outdoor media. Account managers book campaigns against a live inventory map, finance pulls invoices with one click, and operations see an installation queue that flags conflicts before they reach the street. The board now gets a live dashboard showing campaign revenue, site occupancy, and pipeline by segment. Month-end reconciliation has collapsed from a week of manual work to a short review, and the team can focus on selling instead of stitching reports together.",
    ],
    tags: ["CRM", "ADVERTISING", "INVENTORY", "SCHEDULING"],
  },
  {
    client: "Splash Air",
    title: "HVAC Services Platform",
    url: "https://splashaircrmzw.site/",
    status: "Deployed",
    location: "Zimbabwe",
    metric: { value: "Full Lifecycle", label: "Service Operations" },
    desc: "A full-service operations platform for an HVAC installation and maintenance company. Handles the complete service lifecycle from client enquiry through job completion, with dispatch, scheduling, service history, and integrated invoicing.",
    caseStudy: [
      "Splash Air is a busy HVAC installation and maintenance business working across commercial and residential clients in Harare and beyond. The operational rhythm of that work is relentless: enquiries come in at all hours, technicians need to be dispatched quickly, parts have to be matched to jobs, and invoices cannot wait until the end of the month if cashflow is going to hold. The team was running that rhythm on WhatsApp, handwritten job cards, and a shared spreadsheet, and the cracks were starting to show.",
      "We built a platform that handles the entire service lifecycle in one place. A new enquiry becomes a job record, a technician is dispatched with the right parts, service history is captured on site, and an invoice is raised the same day. Management sees a live view of open jobs, outstanding balances, and technician utilisation. Response times are down, repeat client rates are up, and the leadership team has the visibility they need to scale the operation without losing the quality that got them here.",
    ],
    tags: ["OPERATIONS", "HVAC", "DISPATCH", "INVOICING"],
  },
  {
    client: "Affinity Logistics",
    title: "UK to Zimbabwe Shipping CRM",
    url: "https://affinitylogistics.site/",
    status: "Deployed",
    location: "UK → Zimbabwe",
    metric: { value: "Cross-Border", label: "UK → Zim Corridor" },
    desc: "A logistics CRM purpose-built for cross-border shipping between the UK and Zimbabwe. Tracks shipments end-to-end, manages customs documentation, and provides real-time status updates across the full corridor.",
    caseStudy: [
      "Affinity Logistics runs one of the most demanding shipping corridors we have worked on, moving consignments between the United Kingdom and Zimbabwe for a diaspora customer base that expects supermarket-grade tracking from a cross-border operation. Before our engagement, a typical shipment lived simultaneously in a UK warehouse spreadsheet, a broker's email thread, a WhatsApp status update to the customer, and a Zimbabwean clearing agent's paper file. Any question about where a consignment was took a phone call and a best guess.",
      "We replaced that with a single CRM that treats the shipment as the unit of truth. A customer books online, the system issues a reference, the UK warehouse scans the cargo in, customs documentation is generated, and every transition along the corridor updates a live status the customer can see. Clearing agents in Harare pick up handover from the same record. The business now moves more consignments with the same team, customers stop asking where their cargo is, and the operation finally runs on data instead of goodwill.",
    ],
    tags: ["LOGISTICS", "SHIPPING", "TRACKING", "CUSTOMS"],
  },
  {
    client: "EasyRentals",
    title: "Property Management ERP",
    url: "https://easyrentalszw.online/",
    status: "Deployed",
    location: "Zimbabwe",
    metric: { value: "USD · ZiG", label: "Multi-Currency Payments" },
    desc: "A cloud-based property management ERP for Zimbabwe's rental market. Handles malls, boarding houses, residential estates, and individual homes in a unified workspace with role-based access and multi-currency support.",
    caseStudy: [
      "EasyRentals operates across a uniquely Zimbabwean property mix: shopping mall tenants, boarding house residents, residential estate owners, and individually managed homes, all in the same portfolio. Every tenant type has a different rent cycle, a different payment channel, and a different way of being difficult to reconcile at month end. When the team came to us, every landlord was essentially being served by a separate informal workflow, and a meaningful share of collected rent was going missing somewhere between the tenant's payment and the landlord's statement.",
      "We built a property management ERP designed for exactly that mix. Each property type has its own workflow but rolls up into a unified ledger. Tenants pay in USD, ZiG, cash, EcoCash, or bank transfer, and every payment is attributed to the right unit with the correct exchange rate at the moment it landed. Landlords log into a scoped portal to see only their properties, in real time. Reconciliation that used to take a full week is now a short morning review, disputes have dropped sharply, and the business can now take on new property types without rebuilding the operation each time.",
    ],
    tags: ["ERP", "PROPERTY", "MULTI-CURRENCY", "LANDLORD PORTAL"],
  },
  {
    client: "Cansan Solutions",
    title: "Online Shop & CRM Backend",
    url: "https://cansansolutions.shop/",
    status: "Deployed",
    location: "Zimbabwe",
    metric: { value: "Storefront + CRM", label: "Unified Commerce" },
    desc: "A full-stack e-commerce platform and CRM backend for a Zimbabwean technology retailer. Public storefront handles listings, guides, and local delivery; the admin CRM manages inventory, orders, clients, and supplier procurement.",
    caseStudy: [
      "Cansan Solutions is a Zimbabwean technology retailer selling into a market where a stockout in Harare, a supplier delay from South Africa, and a corporate client calling for a bulk price can all land on the same morning. The founders were running a public storefront on one platform, tracking inventory on another, and managing corporate clients from yet another workspace. Orders were being missed, stock counts were drifting from reality, and the time needed to quote a corporate deal was costing them business.",
      "We shipped a unified platform covering both the public-facing storefront and the admin CRM behind it. Customers browse a fast, SEO-tuned catalogue, pay in USD, EcoCash, or bank transfer, and receive delivery updates end-to-end. Behind the scenes, the admin CRM handles inventory, supplier procurement, corporate bulk pricing, and client accounts in one workflow. Stock is now trustworthy, corporate quotes go out within the hour, and the business has the operational headroom to pursue growth instead of firefighting the day.",
    ],
    tags: ["E-COMMERCE", "RETAIL", "CRM", "PAYMENTS"],
  },
];

const statusStyle: Record<Project["status"], { bg: string; color: string }> = {
  Deployed: {
    bg: "color-mix(in srgb, #22c55e 16%, transparent)",
    color: "#22c55e",
  },
  Delivered: {
    bg: "color-mix(in srgb, #818cf8 16%, transparent)",
    color: "#818cf8",
  },
  "In Development": {
    bg: "color-mix(in srgb, #3b82f6 16%, transparent)",
    color: "#3b82f6",
  },
  "In Progress": {
    bg: "var(--accent-muted)",
    color: "var(--accent)",
  },
};

function PinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M6 1.5a3 3 0 0 0-3 3c0 2.25 3 6 3 6s3-3.75 3-6a3 3 0 0 0-3-3Zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
      <rect x="2" y="2" width="8" height="9" stroke="currentColor" strokeWidth="1" />
      <path d="M4.5 4.5h.01M7.5 4.5h.01M4.5 6.5h.01M7.5 6.5h.01M4.5 8.5h.01M7.5 8.5h.01" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function StackIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M10 3L3 6.5 10 10l7-3.5L10 3Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M3 10l7 3.5L17 10" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M3 13.5l7 3.5 7-3.5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

function PulseIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M1 5h2l1.5-3 1 6L7 5h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M2 5.5L4 7.5 8 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <circle cx="5" cy="5" r="3.6" stroke="currentColor" strokeWidth="1.1" />
      <path d="M5 3v2l1.3 1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StatusIcon({ status }: { status: Project["status"] }) {
  if (status === "Deployed" || status === "Delivered") return <CheckIcon />;
  if (status === "In Development") return <ClockIcon />;
  return <PulseIcon />;
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
    >
      <path d="M3.5 5.5L7 9l3.5-3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowOut() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const s = statusStyle[project.status];

  return (
    <div
      className="qcard"
      style={{
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "5px 10px",
            borderRadius: 6,
            background: s.bg,
            color: s.color,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.01em",
          }}
        >
          <StatusIcon status={project.status} />
          {project.status}
        </span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--fg-subtle)",
          }}
        >
          <PinIcon />
          {project.location}
        </span>
      </div>

      <div>
        <h3
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(20px, 2vw, 24px)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "var(--fg)",
            lineHeight: 1.25,
            marginBottom: 8,
          }}
        >
          {project.title}
        </h3>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--fg-muted)",
          }}
        >
          <BuildingIcon />
          {project.client}
        </div>
      </div>

      <p style={{ color: "var(--fg-muted)", lineHeight: 1.6, fontSize: 14, margin: 0 }}>
        {project.desc}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "14px 16px",
          borderRadius: 10,
          background: "var(--bg-sunken)",
          border: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            borderRadius: 8,
            background: "var(--accent-subtle)",
            color: "var(--accent)",
            flexShrink: 0,
          }}
        >
          <StackIcon />
        </div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 600, color: "var(--fg)", lineHeight: 1.2 }}>
            {project.metric.value}
          </div>
          <div style={{ fontSize: 12, color: "var(--fg-subtle)", marginTop: 2 }}>
            {project.metric.label}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.tags.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.04em",
              color: "var(--fg-muted)",
              padding: "4px 8px",
              border: "1px solid var(--border)",
              borderRadius: 4,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {open && (
        <div
          className="work-scope-enter"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            paddingTop: 8,
            borderTop: "1px dashed var(--border)",
            marginTop: 6,
          }}
        >
          {project.caseStudy.map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: 13.5,
                lineHeight: 1.65,
                color: "var(--fg-muted)",
                margin: 0,
              }}
            >
              {para}
            </p>
          ))}
        </div>
      )}

      <div style={{ borderTop: "1px solid var(--border)", paddingTop: 14, marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="work-link"
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            fontWeight: 500,
            color: "var(--fg)",
          }}
        >
          {open ? "Hide case study" : "Read full case study"}
          <ChevronIcon open={open} />
        </button>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="work-link"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            fontWeight: 500,
            color: "var(--accent)",
            textDecoration: "none",
          }}
        >
          View live
          <ArrowOut />
        </a>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <div style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
      <div
        className="section-wrap"
        style={{ padding: "120px 56px", maxWidth: 1200, margin: "0 auto" }}
      >
        <div className="section-label">Selected work</div>
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
          Systems we&rsquo;ve shipped.
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: "var(--fg-muted)",
            maxWidth: 560,
            marginBottom: 48,
          }}
        >
          A selection of platforms we have designed, built, and deployed for
          clients across advertising, logistics, property, and field services.
        </p>

        <div
          className="work-grid reveal-stagger"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.url} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
