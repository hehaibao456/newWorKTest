export function parseJSON(text, fallback = []){
  try{
    const v = JSON.parse(text);
    return v;
  }catch{
    return fallback;
  }
}

export function toJSON(data){
  return JSON.stringify(data, null, 2);
}
