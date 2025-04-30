import { jsx as n, jsxs as m } from "react/jsx-runtime";
import { c as x, r as o, s as r } from "../../react.esm-OOgUt-k1.js";
import { ROUTER_LINK_COLOR as p, ROUTER_LINK_TEST_ID as c } from "./constants.js";
import { RouterLink as s } from "./RouterLink.js";
import { M as d } from "../../chunk-AYJ5UCUI-BvHW6AtU.js";
describe("Router Link component", () => {
  afterEach(x);
  const h = Object.values(p), i = {
    color: p.GRAY
  };
  h.forEach((t) => {
    const e = `renders links with ${t} color`;
    test(e, () => {
      const { container: l } = o(
        /* @__PURE__ */ n(
          s,
          {
            href: "/",
            color: t,
            children: "Link"
          }
        )
      ), a = r.getByTestId(c);
      expect(a).toBeInTheDocument(), expect(a).toHaveClass(`link--${t}`), expect(l).toMatchSnapshot();
    });
  }), test('applies "link-icon" class when withIcon is true', () => {
    const { container: t } = o(
      /* @__PURE__ */ n(
        s,
        {
          href: "/",
          withIcon: !0,
          ...i,
          children: "Link with Icon"
        }
      )
    ), e = r.getByTestId(c);
    expect(e).toHaveClass("link--icon"), expect(t).toMatchSnapshot();
  }), test('renders an external link when "href" is provided', () => {
    const { container: t } = o(
      /* @__PURE__ */ n(
        s,
        {
          href: "https://example.com",
          ...i,
          children: "External Link"
        }
      )
    ), e = r.getByTestId(c);
    expect(e).toBeInTheDocument(), expect(e).toHaveAttribute("href", "https://example.com"), expect(e).toHaveAttribute("target", "_blank"), expect(e).toHaveAttribute("rel", "noopener noreferrer"), expect(t).toMatchSnapshot();
  }), test('renders an internal link when "to" is provided', () => {
    const { container: t } = o(
      /* @__PURE__ */ m(d, { children: [
        /* @__PURE__ */ n(
          s,
          {
            to: "/internal",
            ...i,
            children: "Internal Link"
          }
        ),
        ","
      ] })
    ), e = r.getByTestId(c);
    expect(e).toBeInTheDocument(), expect(e).toHaveAttribute("href", "/internal"), expect(t).toMatchSnapshot();
  });
});
//# sourceMappingURL=RouterLink.test.js.map
