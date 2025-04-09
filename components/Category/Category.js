import { jsx as a } from "react/jsx-runtime";
import { CATEGORY_TEST_ID as s } from "./constants.js";
import { cn as c } from "../../services/helpers.js";
const i = ({ category: r, block: t }) => {
  const o = c(t, "category", `category--${r}`);
  return a("span", { "data-testid": s, className: o, children: r });
};
export {
  i as Category
};
//# sourceMappingURL=Category.js.map
