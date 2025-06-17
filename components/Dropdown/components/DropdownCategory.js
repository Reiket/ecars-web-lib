import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { Icons as s } from "../../../services/icons.js";
const w = ({ item: o, handleOpen: r }) => /* @__PURE__ */ n(
  "button",
  {
    onClick: r,
    className: "dropdown-menu__category",
    children: [
      o == null ? void 0 : o.label,
      o == null ? void 0 : o.value,
      /* @__PURE__ */ a(s.ArrowNarrowDown, { className: "dropdown-menu__arrow" })
    ]
  }
);
export {
  w as DropdownCategory
};
//# sourceMappingURL=DropdownCategory.js.map
