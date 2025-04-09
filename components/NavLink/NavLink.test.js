import { jsx as t } from "react/jsx-runtime";
import { c as o, r as c } from "../../react.esm-DvVef44-.js";
import { NavLink as s } from "./NavLink.js";
import { M as a, R as r, a as h } from "../../chunk-HA7DTUK3-Dm4R8_3T.js";
import { MOCK_ROUTE_LINK as n } from "./constants.js";
describe("NavLink component", () => {
  afterEach(o), test("renders correctly with given children", () => {
    const { container: e, getByText: i } = c(t(a, { children: t(s, { to: "/test", children: "Test Link" }) }));
    expect(i("Test Link")).toBeInTheDocument(), expect(e).toMatchSnapshot();
  }), test("applies 'link-active' class when the link is active", () => {
    const { container: e, getByText: i } = c(t(a, { initialEntries: [n], children: t(r, { children: t(h, { path: n, element: t(s, { to: n, children: "Active Link" }) }) }) }));
    expect(i("Active Link")).toHaveClass("_active"), expect(e).toMatchSnapshot();
  }), test("does not apply 'link-active' class when the link is not active", () => {
    const { container: e, getByText: i } = c(t(a, { initialEntries: ["/other"], children: t(s, { to: n, children: "Test Link" }) }));
    expect(i("Test Link")).not.toHaveClass("_active"), expect(e).toMatchSnapshot();
  });
});
//# sourceMappingURL=NavLink.test.js.map
