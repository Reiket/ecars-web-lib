function s(r) {
  var t, o, n = "";
  if (typeof r == "string" || typeof r == "number") n += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var f = r.length;
    for (t = 0; t < f; t++) r[t] && (o = s(r[t])) && (n && (n += " "), n += o);
  } else for (o in r) r[o] && (n && (n += " "), n += o);
  return n;
}
const e = (r = "", t, ...o) => function() {
  for (var n, f, i = 0, a = "", u = arguments.length; i < u; i++) (n = arguments[i]) && (f = s(n)) && (a && (a += " "), a += f);
  return a;
}(r ? `${r}__${t} ${t}` : t, o);
export {
  e as cn
};
//# sourceMappingURL=helpers.js.map
