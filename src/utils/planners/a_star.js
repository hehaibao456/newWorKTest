export function planAStar(start, end, count = 12){
  const path = [];
  for (let i = 0; i <= count; i++){
    const t = i / count;
    path.push({
      x: start.x + (end.x - start.x) * t,
      y: start.y + (end.y - start.y) * t,
      z: start.z + (end.z - start.z) * t
    });
  }
  return path;
}
