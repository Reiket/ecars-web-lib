import { jsx as c } from "react/jsx-runtime";
import { cn as d } from "../../services/helpers.js";
import { INPUT_TEST_ID as h } from "./constants.js";
const I = ({
  value: e,
  onChange: t,
  hasError: a,
  placeholder: n,
  block: r,
  disabled: o = !1,
  type: s = "text",
  id: p = "input",
  name: l = "input",
  isReadOnly: f = !1,
  isTransparent: i = !1
}) => {
  const m = d(r, "input", {
    error: a,
    transparent: i
  });
  return /* @__PURE__ */ c(
    "input",
    {
      readOnly: f,
      onChange: (u) => {
        t && t(u.currentTarget.value);
      },
      disabled: o,
      autoComplete: "off",
      "data-testid": h,
      className: m,
      id: p,
      name: l,
      placeholder: n,
      value: e,
      type: s
    }
  );
};
export {
  I as Input
};
//# sourceMappingURL=Input.js.map
