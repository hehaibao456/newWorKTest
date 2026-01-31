export function genId(prefix = "ID"){
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(16).slice(2,8)}`.toUpperCase();
}

export function genTraceId(){
  const a = Math.random().toString(16).slice(2);
  const b = Math.random().toString(16).slice(2);
  return (a + b).slice(0, 18);
}
