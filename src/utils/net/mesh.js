export function buildAdjacency(nodes = [], links = []){
  const adj = new Map();
  nodes.forEach(n => adj.set(n.id, []));
  links.forEach(l => {
    if (!adj.has(l.a)) adj.set(l.a, []);
    if (!adj.has(l.b)) adj.set(l.b, []);
    adj.get(l.a).push(l.b);
    adj.get(l.b).push(l.a);
  });
  return adj;
}

export function bfsRoute(adj, start, end){
  const q = [start];
  const prev = new Map();
  prev.set(start, null);
  while(q.length){
    const cur = q.shift();
    if (cur === end) break;
    for (const nxt of adj.get(cur) || []){
      if (!prev.has(nxt)){
        prev.set(nxt, cur);
        q.push(nxt);
      }
    }
  }
  if (!prev.has(end)) return [];
  const path = [];
  let p = end;
  while(p){ path.push(p); p = prev.get(p); }
  return path.reverse();
}
