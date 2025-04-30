import { jsx as a } from "react/jsx-runtime";
import { L as l } from "../../chunk-AYJ5UCUI-BvHW6AtU.js";
import { ROUTER_LINK_TEST_ID as o } from "./constants.js";
import { cn as f } from "../../services/helpers.js";
const L = ({ color: s, block: i, href: r, to: t, children: e, withIcon: m = !1 }) => {
  const n = f(i, "link", `link--${s}`, {
    "link--icon": m
  });
  return t ? /* @__PURE__ */ a(
    l,
    {
      "data-testid": o,
      to: t,
      className: n,
      children: e
    }
  ) : r ? /* @__PURE__ */ a(
    "a",
    {
      href: r,
      "data-testid": o,
      className: n,
      target: "_blank",
      rel: "noopener noreferrer",
      children: e
    }
  ) : null;
};
export {
  L as RouterLink
};
//# sourceMappingURL=RouterLink.js.map
