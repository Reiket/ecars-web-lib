import { jsx as n } from "react/jsx-runtime";
import { c as a, r, s as t } from "../../react.esm-CgrirGj5.js";
import { LinkWithIcon as c } from "./LinkWithIcon.js";
import { ROUTER_LINK_COLOR as I } from "../RouterLink/constants.js";
import { Icons as s } from "../../services/icons.js";
import { LEFT_ICON_LINK_TEST_ID as i, RIGHT_ICON_LINK_TEST_ID as h } from "./constants.js";
describe("LinkWithIcon component", () => {
  afterEach(a);
  const o = { color: I.GRAY, href: "/" };
  test("renders component correctly", () => {
    const { container: e } = r(n(c, { ...o, children: "Link" }));
    expect(t.getByText("Link")).toBeInTheDocument(), expect(e).toMatchSnapshot();
  }), test("renders LeftIcon when provided", () => {
    const { container: e } = r(n(c, { LeftIcon: s.ArrowNarrowLeft, ...o, children: "Click" }));
    expect(t.getByTestId(i)).toBeInTheDocument(), expect(e).toMatchSnapshot();
  }), test("renders RightIcon when provided", () => {
    const { container: e } = r(n(c, { RightIcon: s.ArrowNarrowRight, ...o, children: "Click" }));
    expect(t.getByTestId(h)).toBeInTheDocument(), expect(e).toMatchSnapshot();
  }), test("renders both LeftIcon and RightIcon when provided", () => {
    const { container: e } = r(n(c, { LeftIcon: s.ArrowNarrowLeft, RightIcon: s.ArrowNarrowRight, ...o, children: "Click" }));
    expect(t.getByTestId(i)).toBeInTheDocument(), expect(t.getByTestId(h)).toBeInTheDocument(), expect(e).toMatchSnapshot();
  });
});
//# sourceMappingURL=LinkWithIcon.test.js.map
