"use client";

import { useEffect, useRef, useState } from "react";

type Tone = "ok" | "info" | "warn" | "dim";

type Line =
  | { kind: "cmd"; text: string }
  | { kind: "out"; text: string; tone?: Tone };

type Scene = {
  cmd: string;
  out: { text: string; tone?: Tone }[];
};

const SCENES: Scene[] = [
  {
    cmd: "git push origin main",
    out: [
      { text: "Enumerating objects: 42, done.", tone: "dim" },
      { text: "To github.com:spiritus/dreambox-crm.git", tone: "dim" },
      { text: "  c2fa10e..8d7b421  main -> main", tone: "ok" },
    ],
  },
  {
    cmd: "pnpm deploy --env=production",
    out: [
      { text: "▲ Building with Turbopack...", tone: "info" },
      { text: "✓ Compiled 1,284 modules in 3.2s", tone: "ok" },
      { text: "✓ Live: https://crm.dreamboxadvertising.co.zw", tone: "ok" },
    ],
  },
  {
    cmd: "railway run db:migrate",
    out: [
      { text: "→ Applying 0042_add_multi_currency.sql", tone: "info" },
      { text: "→ Applying 0043_landlord_scope.sql", tone: "info" },
      { text: "✓ 2 migrations applied · USD · ZiG", tone: "ok" },
    ],
  },
  {
    cmd: "tail -f /var/log/hvac-ops",
    out: [
      { text: "[14:23] payment.received  USD 1,840.00", tone: "ok" },
      { text: "[14:23] job.dispatched    harare-cbd", tone: "info" },
      { text: "[14:23] api.sync          inventory · 12ms", tone: "dim" },
    ],
  },
  {
    cmd: "curl -s status.spiritus.co.zw | jq .",
    out: [
      { text: '{ "uptime": "99.98%",', tone: "info" },
      { text: '  "platforms": 6, "region": "ZW" }', tone: "info" },
      { text: "✓ all systems operational", tone: "ok" },
    ],
  },
];

const CHAR_MS = 36;
const OUT_MS = 260;
const POST_MS = 900;

function toneColor(tone?: Tone) {
  if (tone === "ok") return "var(--success)";
  if (tone === "info") return "var(--accent)";
  if (tone === "warn") return "#f59e0b";
  if (tone === "dim") return "var(--fg-subtle)";
  return "var(--fg-muted)";
}

export default function LiveOpsPanel() {
  const [sceneIdx, setSceneIdx] = useState(0);
  const [typed, setTyped] = useState(0);
  const [outCount, setOutCount] = useState(0);
  const [history, setHistory] = useState<Line[]>([]);
  const [reduced, setReduced] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) {
      const allLines: Line[] = [];
      for (const s of SCENES) {
        allLines.push({ kind: "cmd", text: s.cmd });
        for (const o of s.out) allLines.push({ kind: "out", ...o });
      }
      setHistory(allLines);
      return;
    }
    const scene = SCENES[sceneIdx];
    if (typed < scene.cmd.length) {
      const id = setTimeout(() => setTyped((t) => t + 1), CHAR_MS);
      return () => clearTimeout(id);
    }
    if (outCount < scene.out.length) {
      const id = setTimeout(() => setOutCount((c) => c + 1), OUT_MS);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => {
      setHistory((h) => [
        ...h,
        { kind: "cmd", text: scene.cmd },
        ...scene.out.map((o) => ({ kind: "out" as const, ...o })),
      ]);
      setTyped(0);
      setOutCount(0);
      setSceneIdx((i) => (i + 1) % SCENES.length);
    }, POST_MS);
    return () => clearTimeout(id);
  }, [sceneIdx, typed, outCount, reduced]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history, typed, outCount]);

  const currentScene = SCENES[sceneIdx];
  const currentCmd = currentScene.cmd.slice(0, typed);
  const currentOut = currentScene.out.slice(0, outCount);
  const trimmedHistory = history.slice(-12);

  return (
    <div
      className="term"
      aria-hidden
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #0b0b0d, #0a0a0b)",
        border: "1px solid var(--border-strong)",
        borderRadius: "var(--r-lg)",
        boxShadow: "var(--shadow-lg)",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: -1,
          background:
            "radial-gradient(600px circle at 0% 0%, var(--accent-subtle), transparent 55%), radial-gradient(500px circle at 100% 100%, rgba(16,185,129,0.06), transparent 60%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "11px 14px",
          borderBottom: "1px solid var(--border)",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <span style={{ display: "inline-flex", gap: 6 }}>
          <TermDot color="#ff5f57" />
          <TermDot color="#febc2e" />
          <TermDot color="#28c840" />
        </span>
        <span
          style={{
            flex: 1,
            textAlign: "center",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.08em",
            color: "var(--fg-subtle)",
          }}
        >
          spiritus — ops — 80×24
        </span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.08em",
            color: "var(--fg-subtle)",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--success)",
              boxShadow: "0 0 0 3px rgba(16,185,129,0.18)",
            }}
          />
          live
        </span>
      </div>

      <div
        ref={scrollRef}
        style={{
          position: "relative",
          padding: "18px 20px",
          height: 300,
          overflow: "hidden",
          fontFamily: "var(--font-mono)",
          fontSize: 12.5,
          lineHeight: 1.7,
          color: "var(--fg-muted)",
        }}
      >
        {trimmedHistory.map((line, i) => (
          <TermLine key={`h-${i}`} line={line} />
        ))}

        <TermLine line={{ kind: "cmd", text: currentCmd }} cursor />
        {currentOut.map((o, i) => (
          <TermLine key={`c-${i}`} line={{ kind: "out", ...o }} />
        ))}
      </div>
    </div>
  );
}

function TermDot({ color }: { color: string }) {
  return (
    <span
      style={{
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: color,
        display: "inline-block",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.25)",
      }}
    />
  );
}

function TermLine({ line, cursor }: { line: Line; cursor?: boolean }) {
  if (line.kind === "cmd") {
    return (
      <div style={{ display: "flex", gap: 8 }}>
        <span style={{ color: "var(--accent)", flexShrink: 0 }}>
          spiritus@harare
        </span>
        <span style={{ color: "var(--fg-dim)", flexShrink: 0 }}>~</span>
        <span style={{ color: "var(--fg-subtle)", flexShrink: 0 }}>$</span>
        <span style={{ color: "var(--fg)" }}>
          {line.text}
          {cursor && <Cursor />}
        </span>
      </div>
    );
  }
  return (
    <div style={{ color: toneColor(line.tone), paddingLeft: 0 }}>
      {line.text}
    </div>
  );
}

function Cursor() {
  return (
    <span
      style={{
        display: "inline-block",
        width: 7,
        height: 14,
        background: "var(--accent)",
        marginLeft: 2,
        transform: "translateY(2px)",
        animation: "termBlink 1s steps(2, start) infinite",
      }}
    />
  );
}
