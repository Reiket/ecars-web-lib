import { jsxs as b, jsx as a } from "react/jsx-runtime";
import { CheckboxIndicator as k } from "./components/Checkbox/components/CheckboxIndicator.js";
import { cn as r } from "./services/helpers.js";
const l = ({ id: c, block: e, ...o }) => b(s.Block, { htmlFor: c, block: e, children: [a(s.Input, { ...o, id: c }), a(s.Indicator, {})] }), m = ({ children: c, block: e, htmlFor: o = "checkbox" }) => {
  const t = r(e, "checkbox");
  return a("label", { "data-testid": p, className: t, htmlFor: o, children: c });
}, x = ({ onChange: c, id: e = "checkbox", checked: o = !1, disabled: t = !1, name: d = "checkbox", hasError: n = !1 }) => {
  const h = r("", "checkbox__input", { error: n });
  return a("input", { "data-testid": I, name: d, disabled: t, className: h, checked: o, onChange: (i) => {
    c && c(i.target.checked);
  }, id: e, type: "checkbox" });
}, s = Object.assign(l, { Block: m, Indicator: k, Input: x }), p = "checkboxTestId", I = "checkboxTestInputId";
export {
  p as C,
  I as a,
  s as b,
  l as c,
  m as d,
  x as e
};
//# sourceMappingURL=constants-DIsb-mTS.js.map
