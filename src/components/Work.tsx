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
  scope: string[];
  tags: string[];
};

const projects: Project[] = [
  {
    client: "Dreambox Advertising",
    title: "Billboard CRM",
    url: "https://crm.dreamboxadvertising.co.zw/",
    status: "Deployed",
    location: "Zimbabwe",
    metric: { value: "Multi-Site", label: "Billboard Portfolio" },
    desc: "A custom CRM for Zimbabwe's leading billboard advertising company. Manages inventory across locations, tracks campaigns booking-through-completion, and reports live revenue and occupancy.",
    scope: [
      "Billboard inventory management",
      "Client & campaign tracking",
      "Booking & scheduling system",
      "Revenue reporting & analytics",
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
    scope: [
      "Billboard inventory management",
      "Client & campaign tracking",
      "Booking & scheduling system",
      "Revenue reporting & analytics",
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
    scope: [
      "Job scheduling & dispatch",
      "Technician management",
      "Client service history",
      "Invoicing & payment tracking",
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
    scope: [
      "Shipment tracking & status updates",
      "Cross-border documentation",
      "Client cargo management",
      "Route & consignment scheduling",
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
    scope: [
      "Multi-property portfolio management",
      "Offline payment tracking (cash, EcoCash, bank)",
      "Multi-currency support (USD, ZiG)",
      "Landlord portal with scoped access",
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
    scope: [
      "E-commerce storefront with product catalog",
      "Multi-payment support (USD, EcoCash, bank transfer)",
      "Admin CRM for orders, inventory & clients",
      "Bulk pricing & corporate orders",
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
          className="work-scope-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "6px 20px",
            paddingTop: 4,
          }}
        >
          {project.scope.map((item) => (
            <div
              key={item}
              style={{
                fontSize: 12.5,
                color: "var(--fg-muted)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
              {item}
            </div>
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
          className="work-grid"
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
