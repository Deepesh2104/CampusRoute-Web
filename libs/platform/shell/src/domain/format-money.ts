export function formatLakhs(lakhs: number): string {
  return `₹${lakhs.toFixed(1)}L`;
}

export function formatLpaRange(min: number, max: number): string {
  return `₹${min.toFixed(1)}–${max.toFixed(1)} LPA`;
}
