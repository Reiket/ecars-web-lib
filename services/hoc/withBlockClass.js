import { jsx as p } from "react/jsx-runtime";
import { cloneElement as o } from "react";
const c = (e, n) => ({ block: r, children: t, ...m }) => {
  const s = Array.isArray(t) ? t.map(
    (i, a) => o(i, {
      block: r,
      key: `${r} - ${a.toString()}`
    })
  ) : o(t, { block: r });
  return /* @__PURE__ */ p(
    e,
    {
      className: n,
      ...m,
      children: s
    }
  );
};
export {
  c as withBlockClass
};
//# sourceMappingURL=withBlockClass.js.map
