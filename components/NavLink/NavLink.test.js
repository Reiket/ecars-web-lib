import { jsx as t } from "react/jsx-runtime";
import { c as r, r as o } from "../../react.esm-DeOc63_l.js";
import { NavLink as c } from "./NavLink.js";
import { M as s, R as h, a as l } from "../../chunk-KNED5TY2-9zjBD6gF.js";
import { MOCK_ROUTE_LINK as i } from "./constants.js";
describe("NavLink component", () => {
  afterEach(r), test("renders correctly with given children", () => {
    const { container: e, getByText: n } = o(
      /* @__PURE__ */ t(s, { children: /* @__PURE__ */ t(c, { to: "/test", children: "Test Link" }) })
    );
    expect(n("Test Link")).toBeInTheDocument(), expect(e).toMatchSnapshot();
  }), test("applies 'link-active' class when the link is active", () => {
    const { container: e, getByText: n } = o(
      /* @__PURE__ */ t(s, { initialEntries: [i], children: /* @__PURE__ */ t(h, { children: /* @__PURE__ */ t(
        l,
        {
          path: i,
          element: /* @__PURE__ */ t(c, { to: i, children: "Active Link" })
        }
      ) }) })
    );
    expect(n("Active Link")).toHaveClass("_active"), expect(e).toMatchSnapshot();
  }), test("does not apply 'link-active' class when the link is not active", () => {
    const e = "/other", { container: n, getByText: a } = o(
      /* @__PURE__ */ t(s, { initialEntries: [e], children: /* @__PURE__ */ t(c, { to: i, children: "Test Link" }) })
    );
    expect(a("Test Link")).not.toHaveClass("_active"), expect(n).toMatchSnapshot();
  });
});
//# sourceMappingURL=NavLink.test.js.map
