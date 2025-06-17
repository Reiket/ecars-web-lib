import { jsx as c, jsxs as m } from "react/jsx-runtime";
import { useMemo as S } from "react";
import { SelectOption as g } from "./components/Select/components/SelectOption.js";
import { SelectInput as w } from "./components/Select/components/SelectInput.js";
import { SelectArrow as L } from "./components/Select/components/SelectArrow.js";
import { cn as B } from "./services/helpers.js";
import { useClickOutside as I } from "./services/hooks/useClickOutside.js";
import { SelectBlock as N } from "./components/Select/components/SelectBlock.js";
import { withBlockClass as h } from "./services/hoc/withBlockClass.js";
const T = ({ options: t, onClick: o, value: s }) => t ? /* @__PURE__ */ c("ul", { className: "select__options", children: t.map((e) => {
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
}) }) : /* @__PURE__ */ c("ul", { className: "select__options", children: /* @__PURE__ */ c("li", { className: "select__option select__option_empty", children: "Nothing found" }) }), b = ({ children: t, isOpen: o, onClickOutside: s, block: e, disabled: l = !1 }) => {
  const r = I(s);
  return /* @__PURE__ */ c(
    "div",
    {
      ref: r,
      "data-testid": j,
      className: B(e, "select", {
        _open: o,
        disabled: l
      }),
      children: t
    }
  );
}, j = "selectTestId", x = h(N, "select"), n = Object.assign(E, {
  List: T,
  Option: g,
  Input: w,
  Arrow: L,
  Wrapper: b,
  Block: x
}), A = (t, o, s) => {
  if (!s || !o.trim())
    return t;
  const e = t.filter((l) => l.toLowerCase().includes(o.toLowerCase()));
  return e.length > 0 ? e : null;
}, E = ({
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
  const _ = S(() => A(t, r, i), [t, r, i]), k = (O) => {
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
};
export {
  j as S,
  n as a,
  T as b,
  b as c,
  E as d
};
//# sourceMappingURL=SelectComponent-BTwBiVSD.js.map
