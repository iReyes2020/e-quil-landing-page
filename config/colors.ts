export const brandColors = {
  ocean: "#0A2E4A",
  white: "#F8F8F8",
  teal: "#00A896",
} as const;

export type BrandColor = typeof brandColors[keyof typeof brandColors];
