import { jsxs as r } from "react/jsx-runtime";
import { cn as c } from "../../../services/helpers.js";
const s = ({ label: o, value: n, isSelected: e, onSelect: t }) => /* @__PURE__ */ r(
  "li",
  {
    onClick: () => {
      t(n);
    },
    className: c("", "dropdown-menu__option", {
      "_selected-option": e
    }),
    children: [
      o && o,
      " ",
      n
    ]
  }
);
export {
  s as DropdownOption
};
//# sourceMappingURL=DropdownOption.js.map
