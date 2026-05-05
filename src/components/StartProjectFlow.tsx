"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";

const WHATSAPP_NUMBER = "263777816368";
const EMAIL_TO = "create@spiritus.co.zw";
const STORAGE_KEY = "spiritus.startProject.v1";

const projectTypes = [
  { id: "saas", label: "SaaS Platform", hint: "Custom web platform" },
  { id: "crm_erp", label: "CRM / ERP", hint: "Operations system" },
  { id: "ai", label: "AI & Automation", hint: "Agents, workflows, LLMs" },
  { id: "integration", label: "Systems Integration", hint: "APIs, pipelines, bridges" },
  { id: "strategy", label: "Digital Strategy", hint: "Audit, roadmap, GTM" },
  { id: "other", label: "Not sure yet", hint: "Need consultation" },
];

const scopes = [
  { id: "small", label: "Small", hint: "MVP or custom tool" },
  { id: "medium", label: "Medium", hint: "Multi-module platform" },
  { id: "large", label: "Large", hint: "Enterprise / multi-year" },
  { id: "unsure", label: "Unsure", hint: "Need consultation" },
];

const timelines = [
  { id: "asap", label: "ASAP" },
  { id: "1m", label: "Within 1 month" },
  { id: "3m", label: "1 to 3 months" },
  { id: "flex", label: "Flexible" },
];

type FormState = {
  projectType: string;
  buildDesc: string;
  problem: string;
  users: string;
  currentTools: string;
  scope: string;
  timeline: string;
  name: string;
  company: string;
  email: string;
  phone: string;
};

const initialState: FormState = {
  projectType: "",
  buildDesc: "",
  problem: "",
  users: "",
  currentTools: "",
  scope: "",
  timeline: "",
  name: "",
  company: "",
  email: "",
  phone: "",
};

const MIN_BUILD_DESC = 8;
const MIN_PROBLEM = 8;

function composeMessage(f: FormState) {
  const typeLabel = projectTypes.find((p) => p.id === f.projectType)?.label || "(not specified)";
  const scopeLabel = scopes.find((s) => s.id === f.scope)?.label || "(not specified)";
  const timelineLabel = timelines.find((t) => t.id === f.timeline)?.label || "(not specified)";

  return [
    "Hi Spiritus Systems,",
    "",
    "I'd like to start a project. Here are my answers:",
    "",
    "── PROJECT ──",
    `Type: ${typeLabel}`,
    `What I want to build: ${f.buildDesc}`,
    "",
    "── CONTEXT ──",
    `Problem to solve: ${f.problem}`,
    `Who will use it: ${f.users}`,
    f.currentTools ? `Current tools/systems: ${f.currentTools}` : null,
    "",
    "── SCOPE & TIMING ──",
    `Scope: ${scopeLabel}`,
    `Timeline: ${timelineLabel}`,
    "",
    "── CONTACT ──",
    `Name: ${f.name}`,
    f.company ? `Company: ${f.company}` : null,
    `Email: ${f.email}`,
    f.phone ? `Phone: ${f.phone}` : null,
    "",
    "Sent via spiritus.co.zw",
  ]
    .filter(Boolean)
    .join("\n");
}

export default function StartProjectFlow() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [showAttempted, setShowAttempted] = useState(false);
  const [copied, setCopied] = useState(false);
  const flowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const hydratedRef = useRef(false);

  useEffect(() => {
    if (hydratedRef.current) return;
    hydratedRef.current = true;
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { form?: FormState; step?: number };
        if (parsed.form) setForm({ ...initialState, ...parsed.form });
        if (parsed.step && parsed.step >= 1 && parsed.step <= 3) setStep(parsed.step);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (submitted) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ form, step }));
    } catch {
      // ignore
    }
  }, [form, step, submitted]);

  useEffect(() => {
    headingRef.current?.focus();
  }, [step, submitted]);

  const update = useCallback(
    <K extends keyof FormState>(key: K, value: FormState[K]) => {
      setForm((f) => ({ ...f, [key]: value }));
      setErrors((e) => ({ ...e, [key]: undefined }));
    },
    []
  );

  const validateStep = useCallback(
    (s: number): Partial<Record<keyof FormState, string>> => {
      const e: Partial<Record<keyof FormState, string>> = {};
      if (s === 1) {
        if (!form.projectType) e.projectType = "Pick a category to continue.";
        if (form.buildDesc.trim().length < MIN_BUILD_DESC)
          e.buildDesc = "Add a sentence about what you want built.";
      }
      if (s === 2) {
        if (form.problem.trim().length < MIN_PROBLEM)
          e.problem = "Tell us the underlying problem in a sentence.";
        if (form.users.trim().length < 2)
          e.users = "Who will use this? One role or group is fine.";
      }
      if (s === 3) {
        if (!form.scope) e.scope = "Pick a rough size.";
        if (!form.timeline) e.timeline = "Pick a rough timeline.";
        if (form.name.trim().length < 2) e.name = "Your name, please.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
          e.email = "Enter a valid email.";
      }
      return e;
    },
    [form]
  );

  const stepErrors = useMemo(() => validateStep(step), [validateStep, step]);
  const isStepValid = Object.keys(stepErrors).length === 0;

  const handleNext = () => {
    const e = validateStep(step);
    if (Object.keys(e).length > 0) {
      setErrors(e);
      setShowAttempted(true);
      setTimeout(() => {
        const firstKey = Object.keys(e)[0];
        const el = flowRef.current?.querySelector<HTMLElement>(
          `[data-field="${firstKey}"]`
        );
        el?.focus();
      }, 0);
      return;
    }
    setErrors({});
    setShowAttempted(false);
    if (step === 3) {
      setSubmitted(true);
      try {
        sessionStorage.removeItem(STORAGE_KEY);
      } catch {
        // ignore
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setErrors({});
    setShowAttempted(false);
    if (step > 1) {
      setStep((s) => s - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleEditAnswers = () => {
    setSubmitted(false);
  };

  const message = useMemo(() => composeMessage(form), [form]);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const mailUrl = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(
    "New project inquiry via spiritus.co.zw"
  )}&body=${encodeURIComponent(message)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = message;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      } finally {
        document.body.removeChild(ta);
      }
    }
  };

  const visibleErrors: Partial<Record<keyof FormState, string>> = showAttempted
    ? { ...stepErrors, ...errors }
    : errors;

  if (submitted) {
    return (
      <SubmittedView
        waUrl={waUrl}
        mailUrl={mailUrl}
        onCopy={handleCopy}
        onEdit={handleEditAnswers}
        copied={copied}
      />
    );
  }

  return (
    <div ref={flowRef}>
      <div style={{ marginBottom: 20 }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 8,
          }}
        >
          Step {step} of 3
        </div>
        <h1
          ref={headingRef}
          tabIndex={-1}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(26px, 3.2vw, 36px)",
            fontWeight: 600,
            color: "var(--fg)",
            letterSpacing: "-0.02em",
            marginBottom: 6,
            outline: "none",
          }}
        >
          {step === 1 && "What do you want to build?"}
          {step === 2 && "What's the context?"}
          {step === 3 && "Scope, timing & contact."}
        </h1>
        <p style={{ fontSize: 15, color: "var(--fg-muted)", lineHeight: 1.55, margin: 0 }}>
          {step === 1 && "Pick a category and describe it in plain language."}
          {step === 2 && "The more specific you are, the more useful our first reply will be."}
          {step === 3 && "Rough estimates are fine. We respond within 24 hours."}
        </p>
      </div>

      <ProgressBar step={step} />

      {step === 1 && (
        <div className="anim-up d1" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div data-field="projectType" tabIndex={-1} style={{ outline: "none" }}>
            <Label>Which best describes your project?</Label>
            <OptionGrid
              options={projectTypes}
              value={form.projectType}
              onChange={(v) => update("projectType", v)}
              ariaLabel="Project type"
              errorId={visibleErrors.projectType ? "err-projectType" : undefined}
            />
            {visibleErrors.projectType && (
              <ErrorText id="err-projectType">{visibleErrors.projectType}</ErrorText>
            )}
          </div>
          <TextareaField
            field="buildDesc"
            label="What do you want us to build?"
            placeholder="e.g. A CRM for my agency where reps track leads, log calls, and generate invoices. Today everything lives in WhatsApp and Excel."
            value={form.buildDesc}
            onChange={(v) => update("buildDesc", v)}
            error={visibleErrors.buildDesc}
            rows={4}
            required
            counterMin={MIN_BUILD_DESC}
          />
        </div>
      )}

      {step === 2 && (
        <div className="anim-up d1" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <TextareaField
            field="problem"
            label="What problem are you trying to solve?"
            placeholder="e.g. Sales miss follow-ups, we can't see which campaigns convert, invoicing eats 3 hours a week."
            value={form.problem}
            onChange={(v) => update("problem", v)}
            error={visibleErrors.problem}
            rows={3}
            required
            counterMin={MIN_PROBLEM}
          />
          <TextField
            field="users"
            label="Who will use the system?"
            placeholder="e.g. 6 sales reps and 2 admin staff"
            value={form.users}
            onChange={(v) => update("users", v)}
            error={visibleErrors.users}
            required
          />
          <TextareaField
            field="currentTools"
            label="What are you using now?"
            optional
            placeholder="e.g. Excel + WhatsApp, or a generic CRM that doesn't fit local payment flows."
            value={form.currentTools}
            onChange={(v) => update("currentTools", v)}
            rows={2}
          />
        </div>
      )}

      {step === 3 && (
        <div className="anim-up d1" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div data-field="scope" tabIndex={-1} style={{ outline: "none" }}>
            <Label>Rough scope</Label>
            <OptionGrid
              options={scopes}
              value={form.scope}
              onChange={(v) => update("scope", v)}
              columns={2}
              ariaLabel="Scope"
              errorId={visibleErrors.scope ? "err-scope" : undefined}
            />
            {visibleErrors.scope && <ErrorText id="err-scope">{visibleErrors.scope}</ErrorText>}
          </div>
          <div data-field="timeline" tabIndex={-1} style={{ outline: "none" }}>
            <Label>Timeline</Label>
            <OptionGrid
              options={timelines}
              value={form.timeline}
              onChange={(v) => update("timeline", v)}
              columns={2}
              compact
              ariaLabel="Timeline"
              errorId={visibleErrors.timeline ? "err-timeline" : undefined}
            />
            {visibleErrors.timeline && <ErrorText id="err-timeline">{visibleErrors.timeline}</ErrorText>}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="sp-contact-grid">
            <TextField
              field="name"
              label="Full name"
              placeholder="Your name"
              value={form.name}
              onChange={(v) => update("name", v)}
              error={visibleErrors.name}
              required
              autoComplete="name"
            />
            <TextField
              field="company"
              label="Company"
              optional
              placeholder="Your organisation"
              value={form.company}
              onChange={(v) => update("company", v)}
              autoComplete="organization"
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="sp-contact-grid">
            <TextField
              field="email"
              label="Email"
              type="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={(v) => update("email", v)}
              error={visibleErrors.email}
              required
              autoComplete="email"
              inputMode="email"
            />
            <TextField
              field="phone"
              label="Phone"
              optional
              type="tel"
              placeholder="+263 77 000 0000"
              value={form.phone}
              onChange={(v) => update("phone", v)}
              autoComplete="tel"
              inputMode="tel"
            />
          </div>
        </div>
      )}

      <div
        className="sp-actions"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
          marginTop: 32,
          paddingTop: 20,
          borderTop: "1px solid var(--border)",
        }}
      >
        {step === 1 ? (
          <Link href="/" className="sp-secondary">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M11 7H3M7 3L3 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to home
          </Link>
        ) : (
          <button type="button" onClick={handleBack} className="sp-secondary">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M11 7H3M7 3L3 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </button>
        )}
        <button
          type="button"
          onClick={handleNext}
          className="btn-amber"
          aria-disabled={!isStepValid && showAttempted ? true : undefined}
        >
          {step === 3 ? "Review & send" : "Continue"}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7H11M7 3L11 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function ProgressBar({ step }: { step: number }) {
  return (
    <div
      role="progressbar"
      aria-valuenow={step}
      aria-valuemin={1}
      aria-valuemax={3}
      aria-label={`Step ${step} of 3`}
      style={{ display: "flex", gap: 6, marginBottom: 28 }}
    >
      {[1, 2, 3].map((n) => {
        const state = n < step ? "done" : n === step ? "current" : "todo";
        return (
          <div
            key={n}
            style={{
              flex: 1,
              height: 4,
              borderRadius: 999,
              background:
                state === "done"
                  ? "var(--accent)"
                  : state === "current"
                  ? "var(--accent)"
                  : "var(--border)",
              opacity: state === "done" ? 0.55 : 1,
              transition: "background var(--t), opacity var(--t)",
            }}
          />
        );
      })}
    </div>
  );
}

function SubmittedView({
  waUrl,
  mailUrl,
  onCopy,
  onEdit,
  copied,
}: {
  waUrl: string;
  mailUrl: string;
  onCopy: () => void;
  onEdit: () => void;
  copied: boolean;
}) {
  return (
    <div style={{ textAlign: "center", padding: "20px 0 12px" }}>
      <div
        className="success-check"
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "var(--accent)",
          margin: "0 auto 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--cta-text)",
          boxShadow: "var(--shadow-btn)",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h2
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 26,
          fontWeight: 600,
          color: "var(--fg)",
          letterSpacing: "-0.02em",
          marginBottom: 8,
        }}
      >
        Your brief is ready
      </h2>
      <p
        style={{
          fontSize: 15,
          color: "var(--fg-muted)",
          lineHeight: 1.55,
          marginBottom: 24,
          maxWidth: 460,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Pick how to send it. We reply within 24 hours.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          maxWidth: 360,
          margin: "0 auto",
        }}
      >
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-amber"
          style={{ justifyContent: "center", padding: "14px 18px" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.5 4.1 1.6 6L0 24l6.2-1.6c1.8.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.3zM12 22c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.95 9.95 0 0 1 2 12c0-5.5 4.5-10 10-10 2.7 0 5.2 1 7.1 2.9 1.9 1.9 2.9 4.4 2.9 7.1 0 5.5-4.5 10-10 10z" />
            <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1.1-.1.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5.1-.2 0-.3 0-.5 0-.1-.5-1.3-.7-1.8-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.2-.2-.3-.2-.5-.3z" />
          </svg>
          Send via WhatsApp
        </a>
        <a
          href={mailUrl}
          className="btn-ghost"
          style={{ justifyContent: "center", padding: "13px 18px" }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <rect x="1.5" y="3.5" width="13" height="9" rx="1" />
            <path d="M2 4L8 9L14 4" />
          </svg>
          Send via Email
        </a>
        <button
          type="button"
          onClick={onCopy}
          className="btn-ghost"
          style={{ justifyContent: "center", padding: "13px 18px" }}
          aria-live="polite"
        >
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 13L9 17L19 7" />
              </svg>
              Copied to clipboard
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="4.5" y="4.5" width="9" height="9" rx="1" />
                <path d="M2.5 11V3a1 1 0 0 1 1-1h7" />
              </svg>
              Copy brief
            </>
          )}
        </button>
      </div>
      <div
        style={{
          marginTop: 22,
          display: "flex",
          gap: 14,
          justifyContent: "center",
          fontSize: 13,
        }}
      >
        <button type="button" onClick={onEdit} className="sp-link">
          ← Edit answers
        </button>
        <span style={{ color: "var(--border-strong)" }} aria-hidden="true">·</span>
        <Link href="/" className="sp-link">
          Back to home
        </Link>
      </div>
    </div>
  );
}

function OptionGrid({
  options,
  value,
  onChange,
  columns = 2,
  compact = false,
  ariaLabel,
  errorId,
}: {
  options: { id: string; label: string; hint?: string }[];
  value: string;
  onChange: (v: string) => void;
  columns?: number;
  compact?: boolean;
  ariaLabel?: string;
  errorId?: string;
}) {
  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      aria-describedby={errorId}
      className="sp-option-grid"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: 8,
      }}
    >
      {options.map((opt) => {
        const active = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            role="radio"
            aria-checked={active}
            className="sp-option"
            style={{
              textAlign: "left",
              padding: compact ? "12px 14px" : "14px 16px",
              borderRadius: "var(--r)",
              border: `1px solid ${active ? "var(--accent)" : "var(--border-strong)"}`,
              background: active ? "var(--accent-subtle)" : "var(--bg)",
              color: "var(--fg)",
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              transition:
                "border-color 0.2s ease, background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease",
              boxShadow: active ? "0 0 20px -4px var(--accent-muted)" : "none",
              transform: active ? "translateY(-1px)" : "translateY(0)",
            }}
          >
            <div
              style={{
                fontSize: compact ? 13 : 14,
                fontWeight: 500,
                letterSpacing: "-0.01em",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 8,
              }}
            >
              <span>{opt.label}</span>
              {active && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0, color: "var(--accent)" }}>
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            {opt.hint && !compact && (
              <div
                style={{
                  fontSize: 12,
                  color: "var(--fg-subtle)",
                  marginTop: 2,
                }}
              >
                {opt.hint}
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 13,
        fontWeight: 500,
        color: "var(--fg)",
        marginBottom: 10,
      }}
    >
      {children}
    </div>
  );
}

function ErrorText({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <span
      id={id}
      role="alert"
      style={{ fontSize: 12, color: "var(--danger)", marginTop: 6, display: "block" }}
    >
      {children}
    </span>
  );
}

function TextField({
  field,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
  optional,
  error,
  autoComplete,
  inputMode,
}: {
  field: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel" | "url" | "numeric" | "decimal" | "search";
}) {
  const reactId = useId();
  const id = `sp-${field}-${reactId}`;
  const errorId = `${id}-err`;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label htmlFor={id} style={{ fontSize: 13, fontWeight: 500, color: "var(--fg)" }}>
        {label}
        {required && <span style={{ color: "var(--accent)" }} aria-hidden="true"> *</span>}
        {optional && (
          <span style={{ color: "var(--fg-subtle)", fontWeight: 400, marginLeft: 6 }}>
            (optional)
          </span>
        )}
      </label>
      <input
        id={id}
        data-field={field}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        onChange={(e) => onChange(e.target.value)}
        className="sp-input"
        style={{
          ...inputStyle,
          borderColor: error ? "var(--danger)" : (inputStyle as { borderColor?: string }).borderColor,
        }}
      />
      {error && (
        <span id={errorId} role="alert" style={{ fontSize: 12, color: "var(--danger)" }}>
          {error}
        </span>
      )}
    </div>
  );
}

function TextareaField({
  field,
  label,
  value,
  onChange,
  placeholder,
  required,
  optional,
  error,
  rows = 3,
  counterMin,
}: {
  field: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  rows?: number;
  counterMin?: number;
}) {
  const reactId = useId();
  const id = `sp-${field}-${reactId}`;
  const errorId = `${id}-err`;
  const length = value.trim().length;
  const meetsMin = counterMin ? length >= counterMin : true;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label htmlFor={id} style={{ fontSize: 13, fontWeight: 500, color: "var(--fg)" }}>
        {label}
        {required && <span style={{ color: "var(--accent)" }} aria-hidden="true"> *</span>}
        {optional && (
          <span style={{ color: "var(--fg-subtle)", fontWeight: 400, marginLeft: 6 }}>
            (optional)
          </span>
        )}
      </label>
      <textarea
        id={id}
        data-field={field}
        value={value}
        placeholder={placeholder}
        required={required}
        rows={rows}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        onChange={(e) => onChange(e.target.value)}
        className="sp-input"
        style={{
          ...inputStyle,
          borderColor: error ? "var(--danger)" : (inputStyle as { borderColor?: string }).borderColor,
          resize: "vertical",
          minHeight: rows * 22 + 24,
          lineHeight: 1.5,
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, minHeight: 16 }}>
        {error ? (
          <span id={errorId} role="alert" style={{ fontSize: 12, color: "var(--danger)" }}>
            {error}
          </span>
        ) : (
          <span />
        )}
        {counterMin && (
          <span
            style={{
              fontSize: 11,
              color: meetsMin ? "var(--accent)" : "var(--fg-subtle)",
              fontFamily: "var(--font-mono)",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            {meetsMin && (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            {meetsMin ? "looks good" : `${length}/${counterMin}`}
          </span>
        )}
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  background: "var(--bg)",
  border: "1px solid var(--border-strong)",
  borderRadius: "var(--r)",
  color: "var(--fg)",
  fontFamily: "var(--font-sans)",
  fontSize: 14,
  padding: "11px 14px",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease",
};
