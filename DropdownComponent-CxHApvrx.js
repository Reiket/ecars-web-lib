import { jsx as t, jsxs as l } from "react/jsx-runtime";
import { cn as w } from "./services/helpers.js";
import { useClickOutside as D } from "./services/hooks/useClickOutside.js";
import { DropdownOption as f } from "./components/Dropdown/components/DropdownOption.js";
import { DropdownCategory as u } from "./components/Dropdown/components/DropdownCategory.js";
import { DropdownBlock as O } from "./components/Dropdown/components/DropdownBlock.js";
const C = ({ category: n, options: s, onSelect: r }) => /* @__PURE__ */ t("ul", { className: "dropdown-menu__list", children: s.map((d) => {
  const { value: o, label: i } = d, p = o === n;
  return /* @__PURE__ */ t(
    e.Option,
    {
      value: o,
      label: i,
      onSelect: r,
      isSelected: p
    },
    o
  );
}) }), e = Object.assign(k, {
  List: C,
  Option: f,
  Category: u,
  Block: O
}), _ = "dropdownTestId", k = ({
  category: n,
  block: s,
  options: r,
  onSelect: d,
  handleOpen: o,
  isOpen: i,
  onClickOutside: p
}) => {
  const c = r.find((m) => m.value === n), a = D(p);
  return /* @__PURE__ */ l(
    "div",
    {
      "data-testid": _,
      ref: a,
      className: w(s, "dropdown-menu", {
        "_dropdown-active": i
      }),
      children: [
        /* @__PURE__ */ t(e.Block, { children: /* @__PURE__ */ t(
          e.Category,
          {
            handleOpen: o,
            item: c
          }
        ) }),
        /* @__PURE__ */ t(
          e.List,
          {
            onSelect: d,
            options: r,
            category: n
          }
        )
      ]
    }
  );
};
export {
  _ as D,
  e as a,
  C as b,
  k as c
};
//# sourceMappingURL=DropdownComponent-CxHApvrx.js.map
