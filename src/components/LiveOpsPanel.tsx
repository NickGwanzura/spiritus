"use client";

import { useEffect, useState } from "react";

type EventKind = "payment" | "deploy" | "api" | "job";

type OpsEvent = {
  type: string;
  label: string;
  kind: EventKind;
};

const EVENTS: OpsEvent[] = [
  { type: "pay",    label: "EcoCash  ·  ZWL 2,400",        kind: "payment" },
  { type: "api",    label: "inventory-sync  ·  12ms",       kind: "api" },
  { type: "deploy", label: "hvac-ops  ·  v2.4.1",           kind: "deploy" },
  { type: "pay",    label: "Visa  ·  USD 240.00",           kind: "payment" },
  { type: "job",    label: "billboard-rotation  ·  queued", kind: "job" },
  { type: "pay",    label: "ZIPIT  ·  ZWL 18,500",          kind: "payment" },
  { type: "api",    label: "crm.webhook  ·  204",           kind: "api" },
  { type: "deploy", label: "tasker-core  ·  v1.8.2",        kind: "deploy" },
  { type: "pay",    label: "Stripe  ·  USD 1,840",          kind: "payment" },
  { type: "api",    label: "ledger.reconcile  ·  38ms",     kind: "api" },
];

const ICON: Record<EventKind, string> = {
  payment: "↗",
  deploy:  "✓",
  api:     "·",
  job:     "◇",
};

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export default function LiveOpsPanel() {
  const [tick, setTick] = useState(0);
  const [clock, setClock] = useState<string | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const updateClock = () => {
      const d = new Date();
      setClock(`${pad(d.getHours())}:${pad(d.getMinutes())} CAT`);
    };
    updateClock();
    const clockId = setInterval(updateClock, 30_000);

    let tickId: ReturnType<typeof setInterval> | null = null;
    if (!reduced) {
      tickId = setInterval(() => setTick((t) => t + 1), 2400);
    }

    return () => {
      clearInterval(clockId);
      if (tickId) clearInterval(tickId);
    };
  }, []);

  const visible = Array.from({ length: 4 }, (_, i) => {
    const idx = (tick + i) % EVENTS.length;
    return { ...EVENTS[idx], key: `${tick}-${i}` };
  });

  const txToday = 14207 + tick * 3;

  return (
    <div className="lop" aria-hidden>
      <div className="lop-glow" />

      <div className="lop-head">
        <span className="lop-status">
          <span className="lop-dot" />
          PRODUCTION · HARARE
        </span>
        <span className="lop-clock" suppressHydrationWarning>
          {clock ?? "—— CAT"}
        </span>
      </div>

      <div className="lop-metrics">
        <div className="lop-metric">
          <div className="lop-metric-label">Uptime · 90d</div>
          <div className="lop-metric-value">99.98<span className="lop-unit">%</span></div>
        </div>
        <div className="lop-metric">
          <div className="lop-metric-label">Tx · today</div>
          <div className="lop-metric-value lop-tx">{txToday.toLocaleString("en-US")}</div>
        </div>
        <div className="lop-metric">
          <div className="lop-metric-label">Live systems</div>
          <div className="lop-metric-value">40<span className="lop-unit">+</span></div>
        </div>
      </div>

      <div className="lop-rule" />

      <div className="lop-stream-label">
        <span>Event stream</span>
        <span className="lop-stream-meta">last 4 · auto</span>
      </div>

      <ul className="lop-stream">
        {visible.map((e, i) => (
          <li key={e.key} className={`lop-ev lop-ev-${i} k-${e.kind}`}>
            <span className="lop-ic">{ICON[e.kind]}</span>
            <span className="lop-ty">{e.type}</span>
            <span className="lop-lb">{e.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
