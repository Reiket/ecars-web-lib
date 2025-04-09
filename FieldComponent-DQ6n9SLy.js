import { jsx as a, jsxs as d } from "react/jsx-runtime";
import { cloneElement as m } from "react";
import { cn as n } from "./services/helpers.js";
import { FieldError as c } from "./components/Field/components/FieldError.js";
const b = ({ text: r, htmlFor: e = "input" }) => a("label", { "data-testid": h, className: "field__label", htmlFor: e, children: r }), l = Object.assign(p, { Label: b, Error: c }), f = "fieldTestId", h = "fieldLabelTestId", p = ({ label: r, block: e, children: o, error: t, id: s = "input" }) => {
  const i = n(e, "field");
  return d("div", { "data-testid": f, className: i, children: [!!r && a(l.Label, { text: r, htmlFor: s }), m(o, { id: s, hasError: !!t }), !!t && a(l.Error, { errorText: t })] });
};
export {
  f as F,
  h as a,
  l as b,
  b as c,
  p as d
};
//# sourceMappingURL=FieldComponent-DQ6n9SLy.js.map
