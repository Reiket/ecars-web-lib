import { jsx as d } from "react/jsx-runtime";
import { cn as m } from "../../services/helpers.js";
import { INPUT_TEST_ID as c } from "./constants.js";
const b = ({ value: t, onChange: e, hasError: a, placeholder: r, block: o, disabled: n = !1, type: p = "text", id: s = "input", name: i = "input" }) => {
  const l = m(o, "input", { error: a });
  return d("input", { onChange: (u) => {
    e && e(u.currentTarget.value);
  }, disabled: n, autoComplete: "off", "data-testid": c, className: l, id: s, name: i, placeholder: r, value: t, type: p });
};
export {
  b as Input
};
//# sourceMappingURL=Input.js.map
