// Мягкие бирюзовые завихрения — фирменный фон сторис клиники. Чистый декор.
export function Swirl({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 800 600" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <path d="M-40 420C120 300 240 520 420 400S640 120 860 220" stroke="currentColor" strokeWidth="90" strokeLinecap="round" opacity="0.55" />
      <path d="M40 160C200 60 330 250 500 170S700 0 860 60" stroke="currentColor" strokeWidth="46" strokeLinecap="round" opacity="0.35" />
      <path d="M-20 560C180 480 300 600 520 540S760 420 860 470" stroke="currentColor" strokeWidth="26" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}
