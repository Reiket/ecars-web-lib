import { jsx as c } from "react/jsx-runtime";
import { cn as i } from "../../../services/helpers.js";
const r = ({ isSelected: e, option: o, onOptionClick: t }) => /* @__PURE__ */ c(
  "li",
  {
    className: i("", "select__option", {
      _selected: e
    }),
    onClick: t,
    children: o
  }
);
export {
  r as SelectOption
};
//# sourceMappingURL=SelectOption.js.map
