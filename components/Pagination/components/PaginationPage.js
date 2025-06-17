import { jsx as r } from "react/jsx-runtime";
import { cn as e } from "../../../services/helpers.js";
const m = ({ onClick: t, isSelected: n, page: o, disabled: a = !1 }) => /* @__PURE__ */ r(
  "button",
  {
    disabled: a,
    onClick: t,
    className: e("", "pagination__button", {
      "_current-page": n
    }),
    children: o
  }
);
export {
  m as PaginationPage
};
//# sourceMappingURL=PaginationPage.js.map
