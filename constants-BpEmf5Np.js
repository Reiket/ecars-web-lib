import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { cloneElement as d } from "react";
import { FieldError as c } from "./components/Field/components/FieldError.js";
import { cn as m } from "./services/helpers.js";
const E = ({ label: e, block: t, children: o, error: s, id: a = "input" }) => {
  const i = m(t, "field");
  return /* @__PURE__ */ n(
    "div",
    {
      "data-testid": p,
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
}, f = ({ text: e, htmlFor: t = "input" }) => /* @__PURE__ */ r(
  "label",
  {
    "data-testid": F,
    className: "field__label",
    htmlFor: t,
    children: e
  }
), l = Object.assign(E, {
  Label: f,
  Error: c
}), p = "fieldTestId", F = "fieldLabelTestId";
export {
  p as F,
  F as a,
  l as b,
  E as c,
  f as d
};
//# sourceMappingURL=constants-BpEmf5Np.js.map
