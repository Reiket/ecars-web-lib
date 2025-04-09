import { jsx as n } from "react/jsx-runtime";
import { L as c } from "../../chunk-HA7DTUK3-Dm4R8_3T.js";
import { ROUTER_LINK_TEST_ID as a } from "./constants.js";
import { cn as m } from "../../services/helpers.js";
const p = ({ color: i, block: s, href: r, to: o, children: t, withIcon: l = !1 }) => {
  const e = m(s, "link", `link--${i}`, { "link--icon": l });
  return o ? n(c, { "data-testid": a, to: o, className: e, children: t }) : r ? n("a", { href: r, "data-testid": a, className: e, target: "_blank", rel: "noopener noreferrer", children: t }) : null;
};
export {
  p as RouterLink
};
//# sourceMappingURL=RouterLink.js.map
