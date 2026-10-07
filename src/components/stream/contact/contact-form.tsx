/**
 * What: The contact form in the Stream world, with the stream strip above it that mirrors its progress.
 * Why: Captures enquiries exactly as before (Formspree, same fields, mailto fallback) while the visitor's
 *      process visibly enters the stream as they complete it.
 * How: Client component; native inputs styled with Tailwind, interest prefilled from ?type=, validation on submit,
 *      fetch to Formspree; derived completion flags drive ContactStream.
 * Deps: next/navigation, next/link, stream/contact/contact-stream, stream/styles.
 */
"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { pill, textLink } from "@/components/stream/styles";
import { reducedMotion } from "@/components/stream/canvas";
import { ContactStream } from "@/components/stream/contact/contact-stream";

type FormState = "idle" | "submitting" | "success" | "error";
type Interest = "corporate" | "individual" | "question";

const ENDPOINT = "https://formspree.io/f/xwpkgjbr";
const INTERESTS: { value: Interest; label: string }[] = [
  { value: "corporate", label: "Training my team" },
  { value: "individual", label: "Attending as an individual first" },
  { value: "question", label: "Evaluating for a future quarter" },
];
const TEAM_SIZES = [
  { value: "5-10", label: "5 to 10" },
  { value: "11-25", label: "11 to 25" },
  { value: "26-50", label: "26 to 50" },
  { value: "50+", label: "50+" },
];

const field =
  "block w-full min-h-12 rounded-[10px] border border-rule bg-panel px-4 py-3 text-[16px] text-ink placeholder:text-haze/80 transition-colors focus:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";
const fieldError = "border-ink border-2";
const labelText = "mb-2 block text-[15px] font-semibold";
const choice =
  "flex min-h-12 cursor-pointer items-center gap-3 rounded-[10px] border border-rule px-4 py-3 text-[16px] transition-colors hover:border-haze has-[:checked]:border-ink has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ink";
const dot =
  "relative size-[18px] shrink-0 rounded-full border-[1.5px] border-haze transition-colors after:absolute after:inset-[3px] after:scale-0 after:rounded-full after:bg-ink after:transition-transform peer-checked:border-ink peer-checked:after:scale-100";

const isInterest = (v: string | null): v is Interest => v === "corporate" || v === "individual" || v === "question";

export function StreamContactForm() {
  const searchParams = useSearchParams();
  const [state, setState] = useState<FormState>("idle");
  const [interest, setInterest] = useState<Interest>("individual");
  const [errors, setErrors] = useState<{ name?: boolean; email?: boolean }>({});
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [showSuccess, setShowSuccess] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const type = searchParams.get("type");
    if (isInterest(type)) setInterest(type);
  }, [searchParams]);

  const done = useMemo<[boolean, boolean, boolean]>(
    () => [values.name.trim().length > 0, values.email.trim().includes("@"), values.message.trim().length > 0],
    [values],
  );

  // Let the band form before the confirmation appears; at once with reduced motion
  useEffect(() => {
    if (state !== "success") return;
    // Bring the strip into view so the visitor sees their note enter the stream
    stripRef.current?.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth", block: "center" });
    const t = window.setTimeout(() => setShowSuccess(true), reducedMotion() ? 0 : 1900);
    return () => window.clearTimeout(t);
  }, [state]);
  useEffect(() => {
    if (showSuccess) successRef.current?.focus({ preventScroll: true });
  }, [showSuccess]);

  const onValue = (key: "name" | "email" | "message") => (e: { currentTarget: { value: string } }) => {
    const v = e.currentTarget.value;
    setValues((s) => ({ ...s, [key]: v }));
    if (key !== "message") setErrors((s) => ({ ...s, [key]: false }));
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const next: { name?: boolean; email?: boolean } = {};
    if (!formData.get("name")?.toString().trim()) next.name = true;
    const email = formData.get("email")?.toString().trim() || "";
    if (!email || !email.includes("@")) next.email = true;
    if (next.name || next.email) {
      setErrors(next);
      (next.name ? nameRef : emailRef).current?.focus();
      return;
    }

    setState("submitting");
    formData.set("interest", interest);

    try {
      const res = await fetch(ENDPOINT, { method: "POST", body: formData, headers: { Accept: "application/json" } });
      if (res.ok) setState("success");
      else throw new Error("Submission failed");
    } catch {
      // Fallback: open the visitor's email app with the note filled in
      const subject = encodeURIComponent("New enquiry from Unlock Intelligence");
      const body = encodeURIComponent(
        `Name: ${formData.get("name") || ""}\nEmail: ${formData.get("email") || ""}\nCompany: ${formData.get("company") || ""}\nInterest: ${interest}\n\nMessage:\n${formData.get("message") || ""}`,
      );
      window.location.href = `mailto:hello@unlockintelligence.co?subject=${subject}&body=${body}`;
      setState("error");
    }
  }

  const sent = state === "success";

  return (
    <div>
      <div ref={stripRef}>
        <ContactStream done={done} sent={sent} />
      </div>

      {sent ? (
        <div aria-live="polite" className={cn("mt-6 transition-opacity duration-700 motion-reduce:transition-none", showSuccess ? "opacity-100" : "opacity-0")}>
          {showSuccess && (
            <>
              <h2 ref={successRef} tabIndex={-1} className="m-0 text-[26px] font-extrabold leading-[1.05] [font-stretch:82%] focus:outline-none md:text-[30px]">
                Sent. We&rsquo;ll reply within one business day.
              </h2>
              <p className="mt-4">
                <Link href="/" className={cn("text-[15px] font-semibold", textLink)}>
                  Back to the homepage
                </Link>
              </p>
            </>
          )}
        </div>
      ) : state === "error" ? (
        <div role="alert" className="mt-6">
          <h2 className="m-0 text-[24px] font-extrabold leading-[1.1] [font-stretch:82%]">We couldn&rsquo;t send that from here.</h2>
          <p className="mt-3 max-w-[46ch] font-serif text-[16.5px] text-haze">
            We opened your email app with your note filled in. You can also write to{" "}
            <a href="mailto:hello@unlockintelligence.co" className={cn("text-ink", textLink)}>
              hello@unlockintelligence.co
            </a>
            .
          </p>
          <button type="button" onClick={() => setState("idle")} className={cn("mt-5 min-h-10 text-[15px] font-semibold", textLink)}>
            Try again
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="mt-4 grid gap-6">
          <input type="hidden" name="_subject" value="New enquiry from Unlock Intelligence" />

          <div>
            <label htmlFor="name" className={labelText}>
              Name
            </label>
            <input
              ref={nameRef}
              id="name"
              name="name"
              required
              autoComplete="name"
              defaultValue={values.name}
              onChange={onValue("name")}
              aria-invalid={errors.name || undefined}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={cn(field, errors.name && fieldError)}
            />
            {errors.name && (
              <p id="name-error" className="mt-2 text-[14.5px] font-medium text-ink">
                Add your name so we know who to reply to.
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className={labelText}>
              Email
            </label>
            <input
              ref={emailRef}
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              placeholder="you@company.com"
              defaultValue={values.email}
              onChange={onValue("email")}
              aria-invalid={errors.email || undefined}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={cn(field, errors.email && fieldError)}
            />
            {errors.email && (
              <p id="email-error" className="mt-2 text-[14.5px] font-medium text-ink">
                Add an email address we can reply to, such as you@company.com.
              </p>
            )}
          </div>

          <div>
            <label htmlFor="company" className={labelText}>
              Company <span className="font-normal text-haze">(optional)</span>
            </label>
            <input id="company" name="company" autoComplete="organization" className={field} />
          </div>

          <fieldset className="m-0 border-0 p-0">
            <legend className={labelText}>I&rsquo;m interested in</legend>
            <div className="grid gap-2">
              {INTERESTS.map((o) => (
                <label key={o.value} className={choice}>
                  <input
                    type="radio"
                    name="interest"
                    value={o.value}
                    checked={interest === o.value}
                    onChange={() => setInterest(o.value)}
                    className="peer sr-only"
                  />
                  <span aria-hidden="true" className={dot} />
                  <span>{o.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {interest === "corporate" && (
            <fieldset className="m-0 border-0 p-0">
              <legend className={labelText}>Team size</legend>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {TEAM_SIZES.map((o) => (
                  <label key={o.value} className={cn(choice, "justify-center sm:justify-start")}>
                    <input type="radio" name="team_size" value={o.value} className="peer sr-only" />
                    <span aria-hidden="true" className={dot} />
                    <span>{o.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          )}

          <div>
            <label htmlFor="message" className={labelText}>
              The process <span className="font-normal text-haze">(optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="e.g. vendor onboarding: four teams, six handoffs, two weeks"
              defaultValue={values.message}
              onChange={onValue("message")}
              className={cn(field, "min-h-[120px] resize-y leading-[1.5]")}
            />
          </div>

          <div>
            <button type="submit" disabled={state === "submitting"} className={cn(pill, "disabled:opacity-60")}>
              {state === "submitting" ? "Sending…" : "Send"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
