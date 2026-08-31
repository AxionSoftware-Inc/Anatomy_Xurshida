type IconProps = { className?: string };

export function ArrowIcon({ className }: IconProps) {
  return <svg className={className} aria-hidden="true" viewBox="0 0 16 16" fill="none"><path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function ArrowLeftIcon({ className }: IconProps) {
  return <svg className={className} aria-hidden="true" viewBox="0 0 16 16" fill="none"><path d="M13 8H3m0 0 4-4M3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function PlayIcon({ className }: IconProps) {
  return <svg className={className} aria-hidden="true" viewBox="0 0 18 18" fill="none"><path d="m6.5 4.5 7 4.5-7 4.5v-9Z" fill="currentColor" /></svg>;
}

export function CheckIcon({ className }: IconProps) {
  return <svg className={className} aria-hidden="true" viewBox="0 0 18 18" fill="none"><path d="m3.5 9.1 3.3 3.2 7.7-7.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function BookIcon({ className }: IconProps) {
  return <svg className={className} aria-hidden="true" viewBox="0 0 18 18" fill="none"><path d="M3.5 4.2c2.4-.7 4.3-.3 5.5.8v9c-1.2-1.1-3.1-1.5-5.5-.8v-9ZM14.5 4.2c-2.4-.7-4.3-.3-5.5.8v9c1.2-1.1 3.1-1.5 5.5-.8v-9Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></svg>;
}

export function EyeIcon({ className }: IconProps) {
  return <svg className={className} aria-hidden="true" viewBox="0 0 18 18" fill="none"><path d="M2.6 9s2.2-3.8 6.4-3.8S15.4 9 15.4 9 13.2 12.8 9 12.8 2.6 9 2.6 9Z" stroke="currentColor" strokeWidth="1.3" /><circle cx="9" cy="9" r="1.8" stroke="currentColor" strokeWidth="1.3" /></svg>;
}

export function ClockIcon({ className }: IconProps) {
  return <svg className={className} aria-hidden="true" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="6.1" stroke="currentColor" strokeWidth="1.3" /><path d="M9 5.5v3.8l2.6 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function SparkIcon({ className }: IconProps) {
  return <svg className={className} aria-hidden="true" viewBox="0 0 18 18" fill="none"><path d="M9 1.8 10.2 7l5.1 1.2-5.1 1.2L9 14.6l-1.2-5.2-5.1-1.2L7.8 7 9 1.8ZM14.2 12.2l.5 1.1 1.1.5-1.1.5-.5 1.1-.5-1.1-1.1-.5 1.1-.5.5-1.1Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" /></svg>;
}

export function ChevronIcon({ className }: IconProps) {
  return <svg className={className} aria-hidden="true" viewBox="0 0 16 16" fill="none"><path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
