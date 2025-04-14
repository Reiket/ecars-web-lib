import { jsx as c } from "react/jsx-runtime";
import { cn as f } from "../../services/helpers.js";
import { INPUT_TEST_ID as l } from "./constants.js";
const x = ({
  value: e,
  onChange: t,
  hasError: n,
  placeholder: r,
  block: a,
  disabled: o = !1,
  type: s = "text",
  id: p = "input",
  name: i = "input"
}) => {
  const m = f(a, "input", {
    error: n
  });
  return /* @__PURE__ */ c(
    "input",
    {
      onChange: (u) => {
        t && t(u.currentTarget.value);
      },
      disabled: o,
      autoComplete: "off",
      "data-testid": l,
      className: m,
      id: p,
      name: i,
      placeholder: r,
      value: e,
      type: s
    }
  );
};
export {
  x as Input
};
//# sourceMappingURL=Input.js.map
