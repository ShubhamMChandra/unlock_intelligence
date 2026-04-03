export function GradientDivider({ direction = "dark-to-light" }: { direction?: "dark-to-light" | "light-to-dark" }) {
  return (
    <div
      className={
        direction === "dark-to-light"
          ? "h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
          : "h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent"
      }
    />
  );
}
