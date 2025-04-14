import { jsx as n } from "react/jsx-runtime";
import { N as t } from "../../chunk-KNED5TY2-9zjBD6gF.js";
import { cn as i } from "../../services/helpers.js";
const p = ({ block: o, to: r, children: s }) => {
  const m = (a) => i(o, "nav-link", {
    _active: a
  });
  return /* @__PURE__ */ n(
    t,
    {
      className: ({ isActive: a }) => m(a),
      to: r,
      children: s
    }
  );
};
export {
  p as NavLink
};
//# sourceMappingURL=NavLink.js.map
