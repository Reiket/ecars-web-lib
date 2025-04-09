import { jsx as n, jsxs as l } from "react/jsx-runtime";
import { c as x, r as o, s as r } from "../../react.esm-CgrirGj5.js";
import { ROUTER_LINK_COLOR as h, ROUTER_LINK_TEST_ID as c } from "./constants.js";
import { RouterLink as s } from "./RouterLink.js";
import { M as m } from "../../chunk-HA7DTUK3-Dm4R8_3T.js";
describe("Router Link component", () => {
  afterEach(x);
  const p = Object.values(h), a = { color: h.GRAY };
  p.forEach((t) => {
    test(`renders links with ${t} color`, () => {
      const { container: e } = o(n(s, { href: "/", color: t, children: "Link" })), i = r.getByTestId(c);
      expect(i).toBeInTheDocument(), expect(i).toHaveClass(`link--${t}`), expect(e).toMatchSnapshot();
    });
  }), test('applies "link-icon" class when withIcon is true', () => {
    const { container: t } = o(n(s, { href: "/", withIcon: !0, ...a, children: "Link with Icon" })), e = r.getByTestId(c);
    expect(e).toHaveClass("link--icon"), expect(t).toMatchSnapshot();
  }), test('renders an external link when "href" is provided', () => {
    const { container: t } = o(n(s, { href: "https://example.com", ...a, children: "External Link" })), e = r.getByTestId(c);
    expect(e).toBeInTheDocument(), expect(e).toHaveAttribute("href", "https://example.com"), expect(e).toHaveAttribute("target", "_blank"), expect(e).toHaveAttribute("rel", "noopener noreferrer"), expect(t).toMatchSnapshot();
  }), test('renders an internal link when "to" is provided', () => {
    const { container: t } = o(l(m, { children: [n(s, { to: "/internal", ...a, children: "Internal Link" }), ","] })), e = r.getByTestId(c);
    expect(e).toBeInTheDocument(), expect(e).toHaveAttribute("href", "/internal"), expect(t).toMatchSnapshot();
  });
});
//# sourceMappingURL=RouterLink.test.js.map
