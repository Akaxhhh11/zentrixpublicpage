"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ChevronRight, ChevronLeft, Check, Loader2 } from "lucide-react";

// ─── TYPES ─────────────────────────────────────────────────────────────────────
interface FormData {
  name: string;
  services: string[];
  otherService: string;
  contact: string;
  email: string;
  source: string;
  otherSource: string;
}

interface ContactDialogProps {
  onClose: () => void;
  preselectedService: string | null;
}

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const SERVICES = [
  "Website Development",
  "Website Management",
  "Instagram Page Handling",
  "SEO & Content Strategy",
  "Performance Marketing",
  "Brand Identity",
  "Others",
];

const SOURCES = [
  "Through a Friend",
  "Through Instagram",
  "Through Google Search",
  "Through LinkedIn",
  "Others",
];

const STEPS = ["Who are you?", "Services", "Contact", "How'd you find us?"];

// ─── PROGRESS BAR ─────────────────────────────────────────────────────────────
function StepBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex items-center gap-2 flex-1">
          <div
            className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold transition-all duration-500"
            style={{
              background:
                i < step
                  ? "var(--highlight)"
                  : i === step
                    ? "color-mix(in oklab, var(--highlight) 15%, transparent)"
                    : "color-mix(in oklab, var(--foreground) 6%, transparent)",
              border:
                i === step
                  ? "1px solid var(--highlight)"
                  : i < step
                    ? "none"
                    : "1px solid var(--border)",
              color:
                i < step
                  ? "var(--background)"
                  : i === step
                    ? "var(--highlight)"
                    : "var(--muted-foreground)",
            }}
          >
            {i < step ? <Check size={11} strokeWidth={3} /> : i + 1}
          </div>
          {i < total - 1 && (
            <div
              className="h-px flex-1 transition-all duration-500"
              style={{
                background: i < step ? "var(--highlight)" : "var(--border)",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── FIELD WRAPPER ────────────────────────────────────────────────────────────
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
        {label}
      </label>
      {children}
    </div>
  );
}

// ─── INPUT STYLE ──────────────────────────────────────────────────────────────
const inputCls = `
  w-full rounded-xl border border-border bg-foreground/[0.04]
  px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground/50
  outline-none backdrop-blur-sm
  focus:border-highlight focus:bg-foreground/[0.06] focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--highlight)_8%,transparent)]
  transition-all duration-200
`;

// ─── TOGGLE CHIP ─────────────────────────────────────────────────────────────
function Chip({
  label,
  selected,
  onClick,
  multi,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  multi?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-medium transition-all duration-200 select-none cursor-pointer"
      style={{
        background: selected
          ? "color-mix(in oklab, var(--highlight) 12%, transparent)"
          : "color-mix(in oklab, var(--foreground) 4%, transparent)",
        border: selected
          ? "1px solid color-mix(in oklab, var(--highlight) 45%, transparent)"
          : "1px solid var(--border)",
        color: selected ? "var(--highlight)" : "var(--muted-foreground)",
        boxShadow: selected
          ? "0 0 16px color-mix(in oklab, var(--highlight) 8%, transparent)"
          : "none",
      }}
    >
      <span
        className="flex h-4 w-4 shrink-0 items-center justify-center rounded transition-all duration-200"
        style={{
          background: selected
            ? "var(--highlight)"
            : "color-mix(in oklab, var(--foreground) 8%, transparent)",
          border: selected ? "none" : "1px solid var(--border)",
        }}
      >
        {selected &&
          (multi ? (
            <Check size={10} strokeWidth={3} style={{ color: "var(--background)" }} />
          ) : (
            <div
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "var(--background)" }}
            />
          ))}
      </span>
      {label}
    </button>
  );
}

// ─── DIALOG ───────────────────────────────────────────────────────────────────
export function ContactDialog({ onClose, preselectedService }: ContactDialogProps) {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState<FormData>({
    name: "",
    services: preselectedService ? [preselectedService] : [],
    otherService: "",
    contact: "",
    email: "",
    source: "",
    otherSource: "",
  });

  const overlayRef = useRef<HTMLDivElement>(null);

  const isNameValid = form.name.trim().length > 0 && /^[a-zA-Z\s]+$/.test(form.name);
  const isPhoneValid = form.contact.length === 10;
  const isEmailValid =
    form.email.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());

  // Update selected service if preselectedService changes
  useEffect(() => {
    if (preselectedService) {
      setForm((f) => ({
        ...f,
        services: [preselectedService],
      }));
    }
  }, [preselectedService]);

  // close on backdrop click
  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current) onClose();
  }

  // close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  function toggleService(s: string) {
    setForm((f) => ({
      ...f,
      services: f.services.includes(s) ? f.services.filter((x) => x !== s) : [...f.services, s],
    }));
  }

  // step validation
  function canAdvance() {
    if (step === 0) return isNameValid;
    if (step === 1)
      return (
        form.services.length > 0 &&
        (form.services.includes("Others") ? form.otherService.trim().length > 0 : true)
      );
    if (step === 2) return isPhoneValid && isEmailValid;
    if (step === 3)
      return (
        form.source.length > 0 &&
        (form.source === "Others" ? form.otherSource.trim().length > 0 : true)
      );
    return false;
  }

  async function submit() {
    setStatus("loading");

    // Construct payload with fallback ID and date
    const submissionId = crypto.randomUUID
      ? crypto.randomUUID()
      : Math.random().toString(36).substring(2, 9);
    const payload = {
      id: submissionId,
      timestamp: new Date().toLocaleString(),
      name: form.name,
      services: form.services.join(", "),
      otherService: form.otherService || "",
      contact: form.contact,
      email: form.email,
      source: form.source,
      otherSource: form.otherSource || "",
    };

    const webhookUrl = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK;

    if (!webhookUrl || !webhookUrl.includes("/macros/s/")) {
      console.error("Google Sheet webhook URL is not configured or invalid.");
      setStatus("error");
      return;
    }

    try {
      // Send request as text/plain to avoid CORS preflight options check
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        throw new Error(`Server returned status ${response.status}`);
      }
    } catch (err) {
      console.error("Google Sheet webhook submit failed:", err);
      setStatus("error");
    }
  }

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
  };
  const [dir, setDir] = useState(1);

  function next() {
    setDir(1);
    setStep((s) => s + 1);
  }
  function back() {
    setDir(-1);
    setStep((s) => s - 1);
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/85"
      style={{ backdropFilter: "blur(12px)" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card"
        style={{
          boxShadow:
            "0 40px 100px -20px rgba(0,0,0,0.35), 0 0 0 1px color-mix(in oklab, var(--highlight) 8%, transparent)",
        }}
      >
        {/* top glow strip */}
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(168,240,117,0.4), transparent)",
          }}
        />
        {/* ambient */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(126,217,87,0.05), transparent 65%)",
          }}
        />

        <div className="relative p-7">
          {/* close */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-foreground/[0.04] transition-all duration-200 hover:bg-foreground/[0.08] cursor-pointer"
          >
            <X size={14} className="text-muted-foreground" />
          </button>

          {/* header */}
          <div className="mb-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
              Step {step + 1} of {STEPS.length} — {STEPS[step]}
            </p>
            <StepBar step={step} total={STEPS.length} />
          </div>

          {/* SUCCESS STATE */}
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 py-8 text-center"
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full"
                style={{
                  background: "color-mix(in oklab, var(--highlight) 12%, transparent)",
                  border: "1px solid color-mix(in oklab, var(--highlight) 30%, transparent)",
                }}
              >
                <Check size={28} className="text-highlight" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mt-2">
                We've got your details!
              </h3>
              <p className="text-[13.5px] text-muted-foreground max-w-xs leading-relaxed">
                The Zentrix team will review your request and reach out within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="mt-4 rounded-full px-6 py-2.5 text-[13px] font-semibold text-background transition-all cursor-pointer hover:opacity-90"
                style={{ background: "var(--highlight)" }}
              >
                Done
              </button>
            </motion.div>
          ) : status === "error" ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center gap-4 py-8 text-center"
            >
              <p className="text-[14px] text-muted-foreground">
                Something went wrong submitting your request. Please check your connection and try
                again.
              </p>
              <p className="text-[13px] text-muted-foreground">Or email us directly at:</p>
              <a
                href="mailto:contactzentrixms@gmail.com"
                className="text-highlight underline text-[13px]"
              >
                contactzentrixms@gmail.com
              </a>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => setStatus("idle")}
                  className="rounded-full border border-border px-5 py-2 text-[12px] text-muted-foreground cursor-pointer hover:bg-foreground/[0.03]"
                >
                  Try again
                </button>
                <button
                  onClick={onClose}
                  className="rounded-full px-5 py-2 text-[12px] text-background font-semibold cursor-pointer"
                  style={{ background: "var(--highlight)" }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          ) : (
            <>
              {/* FORM STEPS */}
              <div className="overflow-hidden min-h-[240px]">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={step}
                    custom={dir}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col gap-5"
                  >
                    {/* STEP 0 — Identity */}
                    {step === 0 && (
                      <>
                        <Field label="Your name">
                          <input
                            className={inputCls}
                            placeholder="e.g. Arjun Sharma"
                            value={form.name}
                            onChange={(e) => {
                              const val = e.target.value;
                              const filtered = val.replace(/[^a-zA-Z\s]/g, "");
                              setForm((f) => ({ ...f, name: filtered }));
                            }}
                            autoFocus
                          />
                          <p
                            className="text-[11.5px] mt-1 transition-colors duration-200"
                            style={{
                              color:
                                form.name.length === 0
                                  ? "var(--muted-foreground)"
                                  : isNameValid
                                    ? "var(--highlight)"
                                    : "var(--destructive)",
                            }}
                          >
                            {form.name.length === 0
                              ? "Name can only contain alphabets and spaces"
                              : isNameValid
                                ? "✓ Valid name"
                                : "Name cannot be empty or contain only spaces"}
                          </p>
                        </Field>
                        <p className="text-[11.5px] text-muted-foreground/60 leading-relaxed">
                          Tell us who you are so we can personalise the conversation.
                        </p>
                      </>
                    )}

                    {/* STEP 1 — Services */}
                    {step === 1 && (
                      <>
                        <Field label="Services required (select all that apply)">
                          <div className="flex flex-wrap gap-2">
                            {SERVICES.map((s) => (
                              <Chip
                                key={s}
                                label={s}
                                selected={form.services.includes(s)}
                                onClick={() => toggleService(s)}
                                multi
                              />
                            ))}
                          </div>
                        </Field>
                        <AnimatePresence>
                          {form.services.includes("Others") && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                            >
                              <Field label="Describe your service">
                                <textarea
                                  className={inputCls + " resize-none"}
                                  rows={3}
                                  placeholder="Tell us what you need..."
                                  value={form.otherService}
                                  onChange={(e) =>
                                    setForm((f) => ({ ...f, otherService: e.target.value }))
                                  }
                                />
                              </Field>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}

                    {/* STEP 2 — Contact */}
                    {step === 2 && (
                      <>
                        <Field label="Phone / WhatsApp number">
                          <input
                            className={inputCls}
                            placeholder="9876543210"
                            value={form.contact}
                            onChange={(e) => {
                              const val = e.target.value;
                              const clean = val.replace(/\D/g, "");
                              if (clean.length <= 10) {
                                setForm((f) => ({ ...f, contact: clean }));
                              }
                            }}
                            autoFocus
                          />
                          <p
                            className="text-[11.5px] mt-1 transition-colors duration-200"
                            style={{
                              color:
                                form.contact.length === 0
                                  ? "var(--muted-foreground)"
                                  : isPhoneValid
                                    ? "var(--highlight)"
                                    : "var(--destructive)",
                            }}
                          >
                            {form.contact.length === 0
                              ? "Enter your 10-digit phone number"
                              : isPhoneValid
                                ? "✓ Valid 10-digit phone number"
                                : `Must be exactly 10 digits (currently ${form.contact.length}/10)`}
                          </p>
                        </Field>
                        <Field label="Email address">
                          <input
                            type="email"
                            className={inputCls}
                            placeholder="you@company.com"
                            value={form.email}
                            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                          />
                          <p
                            className="text-[11.5px] mt-1 transition-colors duration-200"
                            style={{
                              color:
                                form.email.length === 0
                                  ? "var(--muted-foreground)"
                                  : isEmailValid
                                    ? "var(--highlight)"
                                    : "var(--destructive)",
                            }}
                          >
                            {form.email.length === 0
                              ? "We will send your strategy proposal here"
                              : isEmailValid
                                ? "✓ Valid email address"
                                : "Please enter a valid email address"}
                          </p>
                        </Field>
                      </>
                    )}

                    {/* STEP 3 — Source */}
                    {step === 3 && (
                      <>
                        <Field label="How did you hear about Zentrix?">
                          <div className="flex flex-wrap gap-2">
                            {SOURCES.map((s) => (
                              <Chip
                                key={s}
                                label={s}
                                selected={form.source === s}
                                onClick={() =>
                                  setForm((f) => ({ ...f, source: s, otherSource: "" }))
                                }
                              />
                            ))}
                          </div>
                        </Field>
                        <AnimatePresence>
                          {form.source === "Others" && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                            >
                              <Field label="Please specify">
                                <input
                                  className={inputCls}
                                  placeholder="Where did you come across us?"
                                  value={form.otherSource}
                                  onChange={(e) =>
                                    setForm((f) => ({ ...f, otherSource: e.target.value }))
                                  }
                                  autoFocus
                                />
                              </Field>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* NAV BUTTONS */}
              <div className="mt-8 flex items-center justify-between">
                {step > 0 ? (
                  <button
                    onClick={back}
                    className="flex items-center gap-1.5 rounded-full border border-border bg-foreground/[0.03] px-4 py-2 text-[12.5px] text-muted-foreground transition-all hover:bg-foreground/[0.07] hover:text-foreground cursor-pointer"
                  >
                    <ChevronLeft size={13} /> Back
                  </button>
                ) : (
                  <div />
                )}

                {step < STEPS.length - 1 ? (
                  <button
                    onClick={next}
                    disabled={!canAdvance()}
                    className="group flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                    style={{
                      background: canAdvance()
                        ? "linear-gradient(135deg, var(--highlight), var(--primary))"
                        : "color-mix(in oklab, var(--foreground) 8%, transparent)",
                      color: canAdvance() ? "var(--background)" : "var(--muted-foreground)",
                    }}
                  >
                    Continue{" "}
                    <ChevronRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </button>
                ) : (
                  <button
                    onClick={submit}
                    disabled={!canAdvance() || status === "loading"}
                    className="group flex items-center gap-2 rounded-full px-6 py-2.5 text-[13px] font-semibold transition-all duration-200 disabled:opacity-40 cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg, var(--highlight), var(--primary))",
                      color: "var(--background)",
                      boxShadow: "0 0 40px -8px var(--highlight)",
                    }}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={14} className="animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        Submit{" "}
                        <ArrowUpRight
                          size={14}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </>
                    )}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
