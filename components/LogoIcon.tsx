"use client";

const LogoIcon = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizeMap = {
    sm: { width: 24, height: 24 },
    md: { width: 32, height: 32 },
    lg: { width: 64, height: 64 },
  };

  const { width, height } = sizeMap[size];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
    >
      {/* Feather/Quill at top */}
      <g>
        {/* Main quill stem */}
        <path
          d="M 200 50 Q 210 80 220 120 Q 225 140 230 160"
          stroke="#E8F4F8"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Feather details - left side */}
        <path
          d="M 200 60 Q 185 75 175 95"
          stroke="#E8F4F8"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M 205 85 Q 190 100 180 120"
          stroke="#E8F4F8"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M 210 110 Q 195 125 185 145"
          stroke="#E8F4F8"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>

      {/* Top curved wave - Vibrant Teal */}
      <path
        d="M 120 180 Q 140 160 180 160 Q 240 160 280 180 Q 300 190 320 210 L 320 240 Q 300 220 280 210 Q 240 190 180 190 Q 140 190 120 210 Z"
        fill="#00A896"
      />

      {/* Dark Ocean Blue divider line */}
      <path
        d="M 140 240 Q 160 235 200 235 Q 260 235 300 245"
        stroke="#0A2E4A"
        strokeWidth="18"
        fill="none"
        strokeLinecap="round"
      />

      {/* Bottom curved wave - Vibrant Teal */}
      <path
        d="M 120 270 Q 140 250 180 250 Q 240 250 280 270 Q 300 280 320 300 L 320 330 Q 300 310 280 300 Q 240 280 180 280 Q 140 280 120 300 Z"
        fill="#00A896"
      />
    </svg>
  );
};

export default LogoIcon;
