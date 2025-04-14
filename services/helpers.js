function f(r) {
  var n, o, t = "";
  if (typeof r == "string" || typeof r == "number") t += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var s = r.length;
    for (n = 0; n < s; n++) r[n] && (o = f(r[n])) && (t && (t += " "), t += o);
  } else for (o in r) r[o] && (t && (t += " "), t += o);
  return t;
}
function i() {
  for (var r, n, o = 0, t = "", s = arguments.length; o < s; o++) (r = arguments[o]) && (n = f(r)) && (t && (t += " "), t += n);
  return t;
}
const u = (r = "", n, ...o) => {
  const t = r ? `${r}__${n} ${n}` : n;
  return i(t, o);
};
export {
  u as cn
};
//# sourceMappingURL=helpers.js.map
