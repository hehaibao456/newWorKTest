export function delayLevel(ms){
  if (ms <= 30) return "LOW";
  if (ms <= 80) return "MID";
  return "HIGH";
}

export function delayColor(ms){
  const lvl = delayLevel(ms);
  return lvl === "LOW" ? "#2C9B6D" : lvl === "MID" ? "#C9872D" : "#C4544A";
}
