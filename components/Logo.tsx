"use client";

const Logo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizeMap = {
    sm: { width: 24, height: 24, fontSize: 14 },
    md: { width: 32, height: 32, fontSize: 18 },
    lg: { width: 48, height: 48, fontSize: 24 },
  };

  const { width, height, fontSize } = sizeMap[size];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
    >
      {/* Main E shape */}
      <path
        d="M 12 8 L 12 40 M 12 8 L 32 8 M 12 24 L 30 24 M 12 40 L 32 40"
        stroke="#0A2E4A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Quill/feather as dash after E */}
      <g transform="translate(36, 16)">
        {/* Quill stem */}
        <line x1="0" y1="0" x2="0" y2="16" stroke="#00A896" strokeWidth="2" strokeLinecap="round" />

        {/* Feather curves - left side */}
        <path
          d="M 0 2 Q -3 4 -4 8 Q -3 10 0 12"
          stroke="#00A896"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Feather curves - right side */}
        <path
          d="M 0 2 Q 3 4 4 8 Q 3 10 0 12"
          stroke="#00A896"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Accent feather detail */}
        <path
          d="M -2 6 Q 0 7 2 6"
          stroke="#00A896"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>

      {/* Subtle accent dot */}
      <circle cx="42" cy="32" r="1.5" fill="#00A896" opacity="0.7" />
    </svg>
  );
};

export default Logo;
