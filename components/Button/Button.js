import { jsx as u } from "react/jsx-runtime";
import { BUTTON_TEST_ID as l } from "./constants.js";
import { cn as d } from "../../services/helpers.js";
const f = ({ children: t, size: o, color: n, onClick: r, type: s = "button", disabled: a = !1, isTransparent: i = !1, withIcon: e = !1, block: c }) => {
  const b = d(c, "button", `button--${o} button--${n}`, { "button--transparent": i, "button--icon": e });
  return u("button", { "data-testid": l, disabled: a, type: s, className: b, onClick: r, children: t });
};
export {
  f as Button
};
//# sourceMappingURL=Button.js.map
