export function estimateTime({ distance_km = 0, speed_mps = 12, overhead_min = 2 }){
  const dist_m = distance_km * 1000;
  const sec = dist_m / Math.max(speed_mps, 1);
  const min = sec / 60 + overhead_min;
  return Math.round(min * 10) / 10;
}

export function estimateMission({ targets = 10, base_min = 12, per_target = 0.8, bonus = 0 }){
  const total = Math.max(8, base_min + targets * per_target + bonus);
  return Math.round(total);
}
