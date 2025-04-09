import { jsx as n } from "react/jsx-runtime";
import { c as a, r as c, s as t } from "../../react.esm-V8WrrwsZ.js";
import { BUTTON_SIZE as I, BUTTON_COLOR as p } from "../Button/constants.js";
import { ButtonWithIcon as r } from "./ButtonWithIcon.js";
import { Icons as s } from "../../services/icons.js";
import { LEFT_ICON_BUTTON_TEST_ID as i, RIGHT_ICON_BUTTON_TEST_ID as h } from "./constants.js";
describe("ButtonWithIcon component", () => {
  afterEach(a);
  const o = { color: p.GRAY, size: I.BIG };
  test("renders component correctly", () => {
    const { container: e } = c(n(r, { ...o, children: "Click me" }));
    expect(t.getByText("Click me")).toBeInTheDocument(), expect(e).toMatchSnapshot();
  }), test("renders LeftIcon when provided", () => {
    const { container: e } = c(n(r, { LeftIcon: s.ArrowNarrowLeft, ...o, children: "Click" }));
    expect(t.getByTestId(i)).toBeInTheDocument(), expect(e).toMatchSnapshot();
  }), test("renders RightIcon when provided", () => {
    const { container: e } = c(n(r, { RightIcon: s.ArrowNarrowRight, ...o, children: "Click" }));
    expect(t.getByTestId(h)).toBeInTheDocument(), expect(e).toMatchSnapshot();
  }), test("renders both LeftIcon and RightIcon when provided", () => {
    const { container: e } = c(n(r, { LeftIcon: s.ArrowNarrowLeft, RightIcon: s.ArrowNarrowRight, ...o, children: "Click" }));
    expect(t.getByTestId(i)).toBeInTheDocument(), expect(t.getByTestId(h)).toBeInTheDocument(), expect(e).toMatchSnapshot();
  });
});
//# sourceMappingURL=ButtonWithIcon.test.js.map
