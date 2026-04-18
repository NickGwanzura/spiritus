"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const WHATSAPP_NUMBER = "263777816368";
const EMAIL_TO = "create@spiritus.co.zw";

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
  { id: "3m", label: "1–3 months" },
  { id: "flex", label: "Flexible" },
];

type FormState = {
  // Step 1
  projectType: string;
  buildDesc: string;
  // Step 2
  problem: string;
  users: string;
  currentTools: string;
  // Step 3
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

const MIN_ANSWER_LEN = 12;

function composeMessage(f: FormState) {
  const typeLabel = projectTypes.find((p) => p.id === f.projectType)?.label || "—";
  const scopeLabel = scopes.find((s) => s.id === f.scope)?.label || "—";
  const timelineLabel = timelines.find((t) => t.id === f.timeline)?.label || "—";

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

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function StartProjectModal({ open, onClose }: Props) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setStep(1);
        setForm(initialState);
        setSubmitted(false);
        setErrors({});
      }, 200);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

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
        if (!form.projectType) e.projectType = "Please choose a project type";
        if (form.buildDesc.trim().length < MIN_ANSWER_LEN)
          e.buildDesc = "Give us a sentence or two — we need the substance";
      }
      if (s === 2) {
        if (form.problem.trim().length < MIN_ANSWER_LEN)
          e.problem = "Tell us the actual problem, not just a feature list";
        if (form.users.trim().length < 3)
          e.users = "Who will use this? One role or group is enough";
      }
      if (s === 3) {
        if (!form.scope) e.scope = "Pick a rough size";
        if (!form.timeline) e.timeline = "Pick a rough timeline";
        if (form.name.trim().length < 2) e.name = "Your name, please";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
          e.email = "Enter a valid email";
      }
      return e;
    },
    [form]
  );

  const stepErrors = useMemo(() => validateStep(step), [validateStep, step]);
  const canAdvance = Object.keys(stepErrors).length === 0;

  const handleNext = () => {
    const e = validateStep(step);
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setErrors({});
    if (step === 3) {
      setSubmitted(true);
      return;
    }
    setStep((s) => s + 1);
  };

  const handleBack = () => {
    setErrors({});
    if (step > 1) setStep((s) => s - 1);
  };

  const message = composeMessage(form);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const mailUrl = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(
    "New project inquiry via spiritus.co.zw"
  )}&body=${encodeURIComponent(message)}`;

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="start-project-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        animation: "fadeIn 0.2s ease",
      }}
    >
      <div
        className="start-modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 600,
          maxHeight: "calc(100dvh - 48px)",
          overflow: "auto",
          background: "var(--bg-raised)",
          border: "1px solid var(--border-strong)",
          borderRadius: "var(--r-lg)",
          boxShadow: "var(--shadow-lg)",
          padding: 28,
          animation: "modalIn 0.3s var(--ease) both",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            width: 36,
            height: 36,
            borderRadius: "var(--r-sm)",
            border: "1px solid var(--border)",
            background: "transparent",
            color: "var(--fg-muted)",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "color var(--t-fast), border-color var(--t-fast)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M3 3L11 11M11 3L3 11" />
          </svg>
        </button>

        {submitted ? (
          <SubmittedView waUrl={waUrl} mailUrl={mailUrl} onClose={onClose} />
        ) : (
          <>
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
              <h2
                id="start-project-title"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 22,
                  fontWeight: 600,
                  color: "var(--fg)",
                  letterSpacing: "-0.02em",
                  marginBottom: 4,
                }}
              >
                {step === 1 && "What do you want to build?"}
                {step === 2 && "Tell us the context."}
                {step === 3 && "Scope, timing, and how to reach you."}
              </h2>
              <p style={{ fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.5 }}>
                {step === 1 && "Pick a category and describe the thing in plain language."}
                {step === 2 && "The more specific you are here, the more useful our first reply will be."}
                {step === 3 && "Rough estimates are fine. We respond within 24 hours."}
              </p>
            </div>

            {/* Progress */}
            <div style={{ display: "flex", gap: 6, marginBottom: 24 }}>
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  style={{
                    flex: 1,
                    height: 3,
                    borderRadius: 999,
                    background: n <= step ? "var(--accent)" : "var(--border)",
                    transition: "background var(--t)",
                  }}
                />
              ))}
            </div>

            {/* === STEP 1: Project type + what === */}
            {step === 1 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div>
                  <Label>Which of these best describes your project?</Label>
                  <OptionGrid
                    options={projectTypes}
                    value={form.projectType}
                    onChange={(v) => update("projectType", v)}
                  />
                  {errors.projectType && <ErrorText>{errors.projectType}</ErrorText>}
                </div>
                <TextareaField
                  label="What exactly do you want us to build?"
                  placeholder="e.g. A CRM for my agency where sales reps can track leads, log calls, and generate invoices. Currently everything lives in WhatsApp and Excel."
                  value={form.buildDesc}
                  onChange={(v) => update("buildDesc", v)}
                  error={errors.buildDesc}
                  rows={4}
                  required
                  counterMin={MIN_ANSWER_LEN}
                />
              </div>
            )}

            {/* === STEP 2: Context — why / users / current === */}
            {step === 2 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <TextareaField
                  label="What problem are you trying to solve?"
                  placeholder="e.g. Sales team is missing follow-ups, we don't know which campaigns convert, invoicing takes 3 hours per week."
                  value={form.problem}
                  onChange={(v) => update("problem", v)}
                  error={errors.problem}
                  rows={3}
                  required
                  counterMin={MIN_ANSWER_LEN}
                />
                <TextField
                  label="Who will use the system?"
                  placeholder="e.g. Our 6 sales reps and 2 admin staff"
                  value={form.users}
                  onChange={(v) => update("users", v)}
                  error={errors.users}
                  required
                />
                <TextareaField
                  label="What are you using now? (optional)"
                  placeholder="e.g. Excel + WhatsApp, or a generic CRM that doesn't fit Zim payment flows."
                  value={form.currentTools}
                  onChange={(v) => update("currentTools", v)}
                  rows={2}
                />
              </div>
            )}

            {/* === STEP 3: Scope, timeline, contact === */}
            {step === 3 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div>
                  <Label>Rough scope</Label>
                  <OptionGrid
                    options={scopes}
                    value={form.scope}
                    onChange={(v) => update("scope", v)}
                    columns={2}
                  />
                  {errors.scope && <ErrorText>{errors.scope}</ErrorText>}
                </div>
                <div>
                  <Label>Timeline</Label>
                  <OptionGrid
                    options={timelines}
                    value={form.timeline}
                    onChange={(v) => update("timeline", v)}
                    columns={2}
                    compact
                  />
                  {errors.timeline && <ErrorText>{errors.timeline}</ErrorText>}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="sp-contact-grid">
                  <TextField
                    label="Full name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(v) => update("name", v)}
                    error={errors.name}
                    required
                    autoFocus
                  />
                  <TextField
                    label="Company (optional)"
                    placeholder="Your organisation"
                    value={form.company}
                    onChange={(v) => update("company", v)}
                  />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="sp-contact-grid">
                  <TextField
                    label="Email"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(v) => update("email", v)}
                    error={errors.email}
                    required
                  />
                  <TextField
                    label="Phone (optional)"
                    type="tel"
                    placeholder="0777 000 000"
                    value={form.phone}
                    onChange={(v) => update("phone", v)}
                  />
                </div>
              </div>
            )}

            {/* Actions */}
            <div
              style={{
                display: "flex",
                gap: 10,
                marginTop: 28,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <button
                type="button"
                onClick={step === 1 ? onClose : handleBack}
                style={{
                  background: "transparent",
                  color: "var(--fg-muted)",
                  border: "none",
                  padding: "10px 4px",
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: "pointer",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {step === 1 ? "Cancel" : "← Back"}
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!canAdvance}
                className="btn-amber"
                style={{
                  opacity: canAdvance ? 1 : 0.45,
                  cursor: canAdvance ? "pointer" : "not-allowed",
                }}
              >
                {step === 3 ? "Review & send" : "Next"}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7H11M7 3L11 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function SubmittedView({
  waUrl,
  mailUrl,
  onClose,
}: {
  waUrl: string;
  mailUrl: string;
  onClose: () => void;
}) {
  return (
    <div style={{ textAlign: "center", padding: "12px 0" }}>
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "var(--accent)",
          margin: "0 auto 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--cta-text)",
          boxShadow: "var(--shadow-btn)",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h2
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 20,
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
          fontSize: 14,
          color: "var(--fg-muted)",
          lineHeight: 1.55,
          marginBottom: 24,
          maxWidth: 420,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        We&rsquo;ve packaged your answers into a message. Pick how to send it —
        we reply within 24 hours.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          maxWidth: 320,
          margin: "0 auto",
        }}
      >
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setTimeout(onClose, 400)}
          className="btn-amber"
          style={{ justifyContent: "center", padding: "14px 18px" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.5 4.1 1.6 6L0 24l6.2-1.6c1.8.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.3zM12 22c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.95 9.95 0 0 1 2 12c0-5.5 4.5-10 10-10 2.7 0 5.2 1 7.1 2.9 1.9 1.9 2.9 4.4 2.9 7.1 0 5.5-4.5 10-10 10z" />
            <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1.1-.1.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5.1-.2 0-.3 0-.5 0-.1-.5-1.3-.7-1.8-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.2-.2-.3-.2-.5-.3z" />
          </svg>
          Send via WhatsApp
        </a>
        <a
          href={mailUrl}
          onClick={() => setTimeout(onClose, 400)}
          className="btn-ghost"
          style={{ justifyContent: "center", padding: "13px 18px" }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="1.5" y="3.5" width="13" height="9" rx="1" />
            <path d="M2 4L8 9L14 4" />
          </svg>
          Send via Email
        </a>
      </div>
    </div>
  );
}

// --- helpers ---

function OptionGrid({
  options,
  value,
  onChange,
  columns = 2,
  compact = false,
}: {
  options: { id: string; label: string; hint?: string }[];
  value: string;
  onChange: (v: string) => void;
  columns?: number;
  compact?: boolean;
}) {
  return (
    <div
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
            aria-pressed={active}
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
                "border-color var(--t-fast), background var(--t-fast), transform var(--t-fast)",
            }}
          >
            <div
              style={{
                fontSize: compact ? 13 : 14,
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              {opt.label}
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

function ErrorText({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontSize: 12, color: "var(--danger)", marginTop: 6, display: "block" }}>
      {children}
    </span>
  );
}

function TextField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
  autoFocus,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoFocus?: boolean;
  error?: string;
}) {
  const id = `sp-${label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label htmlFor={id} style={{ fontSize: 13, fontWeight: 500, color: "var(--fg)" }}>
        {label}
        {required && <span style={{ color: "var(--accent)" }}> *</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        autoFocus={autoFocus}
        onChange={(e) => onChange(e.target.value)}
        style={{
          ...inputStyle,
          borderColor: error ? "var(--danger)" : (inputStyle as { borderColor?: string }).borderColor,
        }}
      />
      {error && <span style={{ fontSize: 12, color: "var(--danger)" }}>{error}</span>}
    </div>
  );
}

function TextareaField({
  label,
  value,
  onChange,
  placeholder,
  required,
  error,
  rows = 3,
  counterMin,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  rows?: number;
  counterMin?: number;
}) {
  const id = `sp-${label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;
  const length = value.trim().length;
  const showCounter = !!counterMin && length < counterMin;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label htmlFor={id} style={{ fontSize: 13, fontWeight: 500, color: "var(--fg)" }}>
        {label}
        {required && <span style={{ color: "var(--accent)" }}> *</span>}
      </label>
      <textarea
        id={id}
        value={value}
        placeholder={placeholder}
        required={required}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        style={{
          ...inputStyle,
          borderColor: error ? "var(--danger)" : (inputStyle as { borderColor?: string }).borderColor,
          resize: "vertical",
          minHeight: rows * 22 + 24,
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        {error ? (
          <span style={{ fontSize: 12, color: "var(--danger)" }}>{error}</span>
        ) : (
          <span />
        )}
        {showCounter && (
          <span style={{ fontSize: 11, color: "var(--fg-subtle)", fontFamily: "var(--font-mono)" }}>
            {length}/{counterMin} min
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
  transition: "border-color var(--t-fast)",
};
