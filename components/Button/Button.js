import { jsx as c } from "react/jsx-runtime";
import { BUTTON_TEST_ID as f } from "./constants.js";
import { cn as i } from "../../services/helpers.js";
const N = ({
  children: t,
  size: o,
  color: n,
  onClick: s,
  type: a = "button",
  disabled: r = !1,
  isTransparent: e = !1,
  withIcon: u = !1,
  block: m
}) => {
  const b = i(m, "button", `button--${o} button--${n}`, {
    "button--transparent": e,
    "button--icon": u
  });
  return /* @__PURE__ */ c(
    "button",
    {
      "data-testid": f,
      disabled: r,
      type: a,
      className: b,
      onClick: s,
      children: t
    }
  );
};
export {
  N as Button
};
//# sourceMappingURL=Button.js.map
