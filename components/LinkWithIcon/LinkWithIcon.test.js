import { jsx as n } from "react/jsx-runtime";
import { c as I, r, s as t } from "../../react.esm-OOgUt-k1.js";
import { LinkWithIcon as c } from "./LinkWithIcon.js";
import { ROUTER_LINK_COLOR as p } from "../RouterLink/constants.js";
import { Icons as i } from "../../services/icons.js";
import { LEFT_ICON_LINK_TEST_ID as h, RIGHT_ICON_LINK_TEST_ID as s } from "./constants.js";
describe("LinkWithIcon component", () => {
  afterEach(I);
  const o = {
    color: p.GRAY,
    href: "/"
  };
  test("renders component correctly", () => {
    const { container: e } = r(/* @__PURE__ */ n(c, { ...o, children: "Link" }));
    expect(t.getByText("Link")).toBeInTheDocument(), expect(e).toMatchSnapshot();
  }), test("renders LeftIcon when provided", () => {
    const { container: e } = r(
      /* @__PURE__ */ n(
        c,
        {
          LeftIcon: i.ArrowNarrowLeft,
          ...o,
          children: "Click"
        }
      )
    );
    expect(t.getByTestId(h)).toBeInTheDocument(), expect(e).toMatchSnapshot();
  }), test("renders RightIcon when provided", () => {
    const { container: e } = r(
      /* @__PURE__ */ n(
        c,
        {
          RightIcon: i.ArrowNarrowRight,
          ...o,
          children: "Click"
        }
      )
    );
    expect(t.getByTestId(s)).toBeInTheDocument(), expect(e).toMatchSnapshot();
  }), test("renders both LeftIcon and RightIcon when provided", () => {
    const { container: e } = r(
      /* @__PURE__ */ n(
        c,
        {
          LeftIcon: i.ArrowNarrowLeft,
          RightIcon: i.ArrowNarrowRight,
          ...o,
          children: "Click"
        }
      )
    );
    expect(t.getByTestId(h)).toBeInTheDocument(), expect(t.getByTestId(s)).toBeInTheDocument(), expect(e).toMatchSnapshot();
  });
});
//# sourceMappingURL=LinkWithIcon.test.js.map
