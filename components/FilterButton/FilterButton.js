import { jsx as s } from "react/jsx-runtime";
import { ButtonWithIcon as m } from "../ButtonWithIcon/ButtonWithIcon.js";
import { Icons as n } from "../../services/icons.js";
const l = ({ children: o, onClick: t, block: r }) => /* @__PURE__ */ s(
  m,
  {
    type: "button",
    block: r,
    onClick: t,
    className: "button__close",
    RightIcon: n.Close,
    size: "small",
    color: "gray",
    children: o
  }
);
export {
  l as FilterButton
};
//# sourceMappingURL=FilterButton.js.map
