import { jsxs as l, jsx as t } from "react/jsx-runtime";
import { CheckboxIndicator as x } from "./components/Checkbox/components/CheckboxIndicator.js";
import { cn as n } from "./services/helpers.js";
const d = ({ id: c, block: e, ...o }) => /* @__PURE__ */ l(
  a.Block,
  {
    htmlFor: c,
    block: e,
    children: [
      /* @__PURE__ */ t(
        a.Input,
        {
          ...o,
          id: c
        }
      ),
      /* @__PURE__ */ t(a.Indicator, {})
    ]
  }
), C = ({ children: c, block: e, htmlFor: o = "checkbox" }) => {
  const s = n(e, "checkbox");
  return /* @__PURE__ */ t(
    "label",
    {
      "data-testid": m,
      className: s,
      htmlFor: o,
      children: c
    }
  );
}, i = ({
  onChange: c,
  id: e = "checkbox",
  checked: o = !1,
  disabled: s = !1,
  name: h = "checkbox",
  hasError: r = !1
}) => {
  const k = n("", "checkbox__input", {
    error: r
  });
  return /* @__PURE__ */ t(
    "input",
    {
      "data-testid": p,
      name: h,
      disabled: s,
      className: k,
      checked: o,
      onChange: (b) => {
        c && c(b.target.checked);
      },
      id: e,
      type: "checkbox"
    }
  );
}, a = Object.assign(d, {
  Block: C,
  Indicator: x,
  Input: i
}), m = "checkboxTestId", p = "checkboxTestInputId";
export {
  m as C,
  p as a,
  a as b,
  d as c,
  C as d,
  i as e
};
//# sourceMappingURL=constants-DbAfTJRK.js.map
