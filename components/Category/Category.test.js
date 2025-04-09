import { jsx as a } from "react/jsx-runtime";
import { c as r, r as s, s as c } from "../../react.esm-DvVef44-.js";
import { CATEGORIES_LIST as m, CATEGORY_TEST_ID as n } from "./constants.js";
import { Category as p } from "./Category.js";
describe("Category component", () => {
  afterEach(r), Object.values(m).forEach((t) => {
    test(`renders category with ${t}-category`, () => {
      const { container: o } = s(a(p, { category: t })), e = c.getByTestId(n);
      expect(e).toBeInTheDocument(), expect(e).toHaveClass(`category--${t}`), expect(o).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=Category.test.js.map
