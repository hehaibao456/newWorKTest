import { planAStar } from "./a_star.js";
import { planRRT } from "./rrt.js";
import { planGA } from "./ga.js";

export { planAStar, planRRT, planGA };

export function planByAlgo(algo, start, end){
  if (algo === "RRT") return planRRT(start, end);
  if (algo === "GA") return planGA(start, end);
  return planAStar(start, end);
}
