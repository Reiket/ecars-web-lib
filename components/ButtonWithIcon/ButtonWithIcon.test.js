import { jsx as n } from "react/jsx-runtime";
import { c as p, r as c, s as t } from "../../react.esm-OOgUt-k1.js";
import { BUTTON_SIZE as I, BUTTON_COLOR as T } from "../Button/constants.js";
import { ButtonWithIcon as r } from "./ButtonWithIcon.js";
import { Icons as i } from "../../services/icons.js";
import { LEFT_ICON_BUTTON_TEST_ID as s, RIGHT_ICON_BUTTON_TEST_ID as h } from "./constants.js";
describe("ButtonWithIcon component", () => {
  afterEach(p);
  const o = {
    color: T.GRAY,
    size: I.BIG
  };
  test("renders component correctly", () => {
    const { container: e } = c(/* @__PURE__ */ n(r, { ...o, children: "Click me" }));
    expect(t.getByText("Click me")).toBeInTheDocument(), expect(e).toMatchSnapshot();
  }), test("renders LeftIcon when provided", () => {
    const { container: e } = c(
      /* @__PURE__ */ n(
        r,
        {
          LeftIcon: i.ArrowNarrowLeft,
          ...o,
          children: "Click"
        }
      )
    );
    expect(t.getByTestId(s)).toBeInTheDocument(), expect(e).toMatchSnapshot();
  }), test("renders RightIcon when provided", () => {
    const { container: e } = c(
      /* @__PURE__ */ n(
        r,
        {
          RightIcon: i.ArrowNarrowRight,
          ...o,
          children: "Click"
        }
      )
    );
    expect(t.getByTestId(h)).toBeInTheDocument(), expect(e).toMatchSnapshot();
  }), test("renders both LeftIcon and RightIcon when provided", () => {
    const { container: e } = c(
      /* @__PURE__ */ n(
        r,
        {
          LeftIcon: i.ArrowNarrowLeft,
          RightIcon: i.ArrowNarrowRight,
          ...o,
          children: "Click"
        }
      )
    );
    expect(t.getByTestId(s)).toBeInTheDocument(), expect(t.getByTestId(h)).toBeInTheDocument(), expect(e).toMatchSnapshot();
  });
});
//# sourceMappingURL=ButtonWithIcon.test.js.map
