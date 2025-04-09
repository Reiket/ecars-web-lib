import { jsxs as d, jsx as a } from "react/jsx-runtime";
import { cloneElement as m } from "react";
import { FieldError as n } from "./components/Field/components/FieldError.js";
import { cn as c } from "./services/helpers.js";
const b = ({ label: r, block: e, children: o, error: t, id: l = "input" }) => {
  const i = c(e, "field");
  return d("div", { "data-testid": h, className: i, children: [!!r && a(s.Label, { text: r, htmlFor: l }), m(o, { id: l, hasError: !!t }), !!t && a(s.Error, { errorText: t })] });
}, f = ({ text: r, htmlFor: e = "input" }) => a("label", { "data-testid": p, className: "field__label", htmlFor: e, children: r }), s = Object.assign(b, { Label: f, Error: n }), h = "fieldTestId", p = "fieldLabelTestId";
export {
  h as F,
  p as a,
  s as b,
  b as c,
  f as d
};
//# sourceMappingURL=constants-Vl-meTpW.js.map
