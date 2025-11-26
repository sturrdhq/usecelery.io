import { LucideProps } from 'lucide-react';

export const Icons = {
  logo: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      {...props}
    >
      {/* Left vertical bar with curved top */}
      <path
        d="M20 40C20 28.9543 28.9543 20 40 20H40V80H20V40Z"
        fill="#16A34A"
      />
      {/* Top right quarter circle */}
      <path
        d="M40 40V20C51.0457 20 60 28.9543 60 40H40Z"
        fill="#22C55E"
      />
      {/* Middle horizontal bar extending right */}
      <path
        d="M40 40H76.5C76.5 40 76.5 60 60 60H40V40Z"
        fill="#4ADE80"
      />
      {/* Bottom right quarter circle */}
      <path
        d="M40 60H60C60 71.0457 51.0457 80 40 80V60Z"
        fill="#4ADE80"
      />
    </svg>
  ),
};
