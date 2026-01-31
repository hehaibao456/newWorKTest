export function linkHealth({ rssi = -70, delay = 60 }){
  const rssiScore = Math.max(0, Math.min(100, 100 - Math.abs(rssi + 50) * 2));
  const delayScore = Math.max(0, Math.min(100, 100 - delay));
  const score = Math.round(rssiScore * 0.6 + delayScore * 0.4);
  const level = score >= 75 ? "OK" : score >= 45 ? "WARN" : "BAD";
  return { score, level };
}
