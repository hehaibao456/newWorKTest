export function planRRT(start, end, count = 10){
  const path = [start];
  for (let i = 1; i < count; i++){
    path.push({
      x: start.x + (end.x - start.x) * (i / count) + (Math.random() - 0.5) * 0.6,
      y: start.y + (end.y - start.y) * (i / count) + (Math.random() - 0.5) * 0.6,
      z: start.z + (end.z - start.z) * (i / count)
    });
  }
  path.push(end);
  return path;
}
