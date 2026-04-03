export function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg className="logo-mark" width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M14 2L26 9V19L14 26L2 19V9L14 2Z" stroke="url(#logoGrad)" strokeWidth="1.5" fill="none"/>
      <path d="M14 7L21 11V17L14 21L7 17V11L14 7Z" fill="url(#logoGrad)" opacity="0.6"/>
      <defs>
        <linearGradient id="logoGrad" x1="2" y1="2" x2="26" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1"/>
          <stop offset="1" stopColor="#A78BFA"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
