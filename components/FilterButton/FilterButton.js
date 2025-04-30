import { jsx as r } from "react/jsx-runtime";
import { ButtonWithIcon as n } from "../ButtonWithIcon/ButtonWithIcon.js";
import { Icons as s } from "../../services/icons.js";
const i = ({ children: o, onClick: t }) => /* @__PURE__ */ r(
  n,
  {
    type: "button",
    onClick: t,
    className: "button__close",
    RightIcon: s.Close,
    size: "small",
    color: "gray",
    children: o
  }
);
export {
  i as FilterButton
};
//# sourceMappingURL=FilterButton.js.map
