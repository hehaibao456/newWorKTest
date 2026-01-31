export const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const rnd = (min = 0, max = 1) => Math.random() * (max - min) + min;
export const rndInt = (min = 0, max = 100) => Math.floor(rnd(min, max + 1));
export const avg = (arr = []) => arr.length ? arr.reduce((s, x) => s + x, 0) / arr.length : 0;
export const sum = (arr = []) => arr.reduce((s, x) => s + x, 0);
