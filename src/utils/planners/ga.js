function cost(path){
  let c = 0;
  for (let i = 1; i < path.length; i++){
    const dx = path[i].x - path[i-1].x;
    const dy = path[i].y - path[i-1].y;
    const dz = path[i].z - path[i-1].z;
    c += Math.sqrt(dx*dx + dy*dy + dz*dz);
  }
  return c;
}

export function planGA(start, end, count = 12, population = 8){
  const candidates = [];
  for (let p = 0; p < population; p++){
    const path = [];
    for (let i = 0; i <= count; i++){
      const t = i / count;
      path.push({
        x: start.x + (end.x - start.x) * t + (Math.random() - 0.5) * 0.4,
        y: start.y + (end.y - start.y) * t + (Math.random() - 0.5) * 0.4,
        z: start.z + (end.z - start.z) * t
      });
    }
    candidates.push(path);
  }
  candidates.sort((a, b) => cost(a) - cost(b));
  return candidates[0];
}
