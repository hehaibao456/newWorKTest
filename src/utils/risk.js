import { clamp } from "./math.js";

export function nodeRiskScore(node, linkDelayMs = 30){
  const bat = clamp(100 - (node.bat ?? 100), 0, 100);
  const delay = clamp((linkDelayMs - 20) * 2, 0, 100);
  const temp = node.temp ?? 25;
  const tempRisk = clamp(Math.abs(temp - 25) * 2, 0, 100);
  return Math.round((bat * 0.4) + (delay * 0.35) + (tempRisk * 0.25));
}

export function riskLevel(score){
  if (score >= 80) return "HIGH";
  if (score >= 50) return "MED";
  return "LOW";
}
