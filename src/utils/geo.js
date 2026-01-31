export function haversineKm(a, b){
  const R = 6371;
  const toRad = (d) => d * Math.PI / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const la1 = toRad(a.lat);
  const la2 = toRad(b.lat);
  const h = Math.sin(dLat/2)**2 + Math.cos(la1)*Math.cos(la2)*Math.sin(dLon/2)**2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

export function latLonToXY(origin, p){
  const km = haversineKm(origin, p);
  const dx = (p.lon - origin.lon) * 111.32 * Math.cos(origin.lat * Math.PI/180);
  const dy = (p.lat - origin.lat) * 110.57;
  return { x: dx, y: dy, r: km };
}

export function bbox(points){
  if (!points.length) return null;
  const lats = points.map(p => p.lat);
  const lons = points.map(p => p.lon);
  return {
    minLat: Math.min(...lats),
    maxLat: Math.max(...lats),
    minLon: Math.min(...lons),
    maxLon: Math.max(...lons)
  };
}
