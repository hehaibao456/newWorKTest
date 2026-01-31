export function parseCSV(text){
  const lines = text.trim().split(/\r?\n/).filter(Boolean);
  if (lines.length === 0) return [];
  const headers = lines.shift().split(",").map(h => h.trim());
  return lines.map(line => {
    const cols = line.split(",");
    const obj = {};
    headers.forEach((h, i) => { obj[h] = cols[i]?.trim() ?? ""; });
    return obj;
  });
}

export function toCSV(rows){
  if (!rows.length) return "";
  const headers = Object.keys(rows[0]);
  const body = rows.map(r => headers.map(h => r[h]).join(","));
  return [headers.join(","), ...body].join("\n");
}
