/**
 * What: Shared class strings for the Stream world's few repeated pieces (buttons, section type).
 * Why: The same action and heading should look the same on every page.
 * How: Tailwind class constants composed with cn() at the call site.
 * Deps: None.
 */
export const pill =
  "inline-flex min-h-[46px] items-center rounded-full bg-ink px-5 text-[15px] font-semibold text-ground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ink";

export const pillGhost =
  "inline-flex min-h-[46px] items-center rounded-full px-5 text-[15px] font-semibold text-ink shadow-[inset_0_0_0_1.5px_var(--stream-ink)] transition-colors hover:bg-ink/5 focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ink";

export const sectionTitle = "m-0 text-[26px] font-extrabold leading-[1.05] tracking-[-0.01em] [font-stretch:82%] md:text-[34px]";

export const lead = "mt-2 max-w-[36ch] font-serif text-[16.5px] text-haze";

export const textLink = "underline decoration-rule decoration-1 underline-offset-[5px] transition-colors hover:decoration-ink";
