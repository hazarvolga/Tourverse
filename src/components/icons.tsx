import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2L12 22" />
      <path d="M22 12L2 12" />
      <path d="M6 6l-3.5 3.5" />
      <path d="M18 18l3.5-3.5" />
      <path d="M6 18l-3.5-3.5" />
      <path d="M18 6l3.5 3.5" />
    </svg>
  );
}
