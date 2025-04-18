import { jsxs as m, jsx as c } from "react/jsx-runtime";
import { SelectOption as S } from "./components/Select/components/SelectOption.js";
import { SelectInput as g } from "./components/Select/components/SelectInput.js";
import { SelectArrow as w } from "./components/Select/components/SelectArrow.js";
import { cn as L } from "./services/helpers.js";
import { useClickOutside as B } from "./services/hooks/useClickOutside.js";
import { SelectBlock as I } from "./components/Select/components/SelectBlock.js";
import { withBlockClass as N } from "./services/hoc/withBlockClass.js";
import { useMemo as h } from "react";
const T = (t, o, s) => {
  if (!s || !o.trim())
    return t;
  const e = t.filter((l) => l.toLowerCase().includes(o.toLowerCase()));
  return e.length > 0 ? e : null;
}, b = ({
  options: t,
  onClick: o,
  handleSelect: s,
  onClickToOptions: e,
  isOpen: l,
  value: r,
  onChange: f,
  block: a,
  id: d = "select",
  name: u = "select",
  disabled: p,
  hasSearch: i = !1,
  ...C
}) => {
  const _ = h(() => T(t, r, i), [t, r, i]), k = (O) => {
    f(O), s(i);
  };
  return /* @__PURE__ */ m(
    n.Wrapper,
    {
      onClickOutside: s,
      isOpen: l,
      block: a,
      disabled: p,
      children: [
        /* @__PURE__ */ m(
          n.Block,
          {
            onClick: o,
            block: "select",
            children: [
              /* @__PURE__ */ c(
                n.Input,
                {
                  disabled: p,
                  id: d,
                  name: u,
                  value: r,
                  onChange: k,
                  hasSearch: i,
                  ...C
                }
              ),
              /* @__PURE__ */ c(n.Arrow, {})
            ]
          }
        ),
        /* @__PURE__ */ c(
          n.List,
          {
            options: _,
            onClick: e,
            value: r
          }
        )
      ]
    }
  );
}, j = ({ options: t, onClick: o, value: s }) => t ? /* @__PURE__ */ c("ul", { className: "select__options", children: t.map((e) => {
  const l = e === s, r = () => {
    o(e);
  };
  return /* @__PURE__ */ c(
    n.Option,
    {
      isSelected: l,
      onOptionClick: r,
      option: e
    },
    e
  );
}) }) : /* @__PURE__ */ c("ul", { className: "select__options", children: /* @__PURE__ */ c("li", { className: "select__option select__option_empty", children: "Nothing found" }) }), x = ({ children: t, isOpen: o, onClickOutside: s, block: e, disabled: l = !1 }) => {
  const r = B(s);
  return /* @__PURE__ */ c(
    "div",
    {
      ref: r,
      "data-testid": A,
      className: L(e, "select", {
        _open: o,
        disabled: l
      }),
      children: t
    }
  );
}, A = "selectTestId", E = N(I, "select"), n = Object.assign(b, {
  List: j,
  Option: S,
  Input: g,
  Arrow: w,
  Wrapper: x,
  Block: E
});
export {
  A as S,
  n as a,
  b,
  j as c,
  x as d
};
//# sourceMappingURL=constants-DNQ9bsvo.js.map
