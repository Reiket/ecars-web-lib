import { jsx as c } from "react/jsx-runtime";
import { c as s, r as a, s as n } from "../../react.esm-OOgUt-k1.js";
import { CATEGORIES_LIST as m, CATEGORY_TEST_ID as p } from "./constants.js";
import { Category as i } from "./Category.js";
describe("Category component", () => {
  afterEach(s), Object.values(m).forEach((e) => {
    const o = `renders category with ${e}-category`;
    test(o, () => {
      const { container: r } = a(/* @__PURE__ */ c(i, { category: e })), t = n.getByTestId(p);
      expect(t).toBeInTheDocument(), expect(t).toHaveClass(`category--${e}`), expect(r).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=Category.test.js.map
