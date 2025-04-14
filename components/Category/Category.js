import { jsx as s } from "react/jsx-runtime";
import { CATEGORY_TEST_ID as a } from "./constants.js";
import { cn as e } from "../../services/helpers.js";
const i = ({ category: r, block: t }) => {
  const o = e(t, "category", `category--${r}`);
  return /* @__PURE__ */ s(
    "span",
    {
      "data-testid": a,
      className: o,
      children: r
    }
  );
};
export {
  i as Category
};
//# sourceMappingURL=Category.js.map
