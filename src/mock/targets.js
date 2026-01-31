export const mockTargets = Array.from({ length: 12 }).map((_, i) => {
  const id = String(i + 1).padStart(2, "0");
  return {
    id: `TGT-${id}`,
    type: i % 3 === 0 ? "UAV" : (i % 3 === 1 ? "BIRD" : "UNKNOWN"),
    lat: 34.26 + Math.random() * 0.03,
    lon: 108.94 + Math.random() * 0.03,
    alt: 120 + Math.random() * 260,
    vx: -2 + Math.random() * 4,
    vy: -2 + Math.random() * 4,
    score: Math.round(60 + Math.random() * 40)
  };
});
