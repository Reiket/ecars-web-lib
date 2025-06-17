import { jsx as r, jsxs as n } from "react/jsx-runtime";
import { cloneElement as d } from "react";
import { cn as c } from "./services/helpers.js";
import { FieldError as m } from "./components/Field/components/FieldError.js";
const E = ({ text: e, htmlFor: t = "input" }) => /* @__PURE__ */ r(
  "label",
  {
    "data-testid": p,
    className: "field__label",
    htmlFor: t,
    children: e
  }
), l = Object.assign(F, {
  Label: E,
  Error: m
}), f = "fieldTestId", p = "fieldLabelTestId", F = ({ label: e, block: t, children: o, error: s, id: a = "input" }) => {
  const i = c(t, "field");
  return /* @__PURE__ */ n(
    "div",
    {
      "data-testid": f,
      className: i,
      children: [
        !!e && /* @__PURE__ */ r(
          l.Label,
          {
            text: e,
            htmlFor: a
          }
        ),
        d(o, { id: a, hasError: !!s }),
        !!s && /* @__PURE__ */ r(l.Error, { errorText: s })
      ]
    }
  );
};
export {
  f as F,
  p as a,
  l as b,
  E as c,
  F as d
};
//# sourceMappingURL=FieldComponent-C0AemaBM.js.map
