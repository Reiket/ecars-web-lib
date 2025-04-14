import { jsx as s } from "react/jsx-runtime";
import { c as i, r, s as n } from "../../react.esm-OOgUt-k1.js";
import { SliderNavigate as l } from "./SliderNavigate.js";
import { SLIDER_NAVIGATE_TEST_ID as m, NAVIGATE_BUTTON_TEST_ID as a, NAVIGATE_BUTTON_PLACEMENT as p } from "./constants.js";
import { NavigateButton as T } from "./NavigateButton.js";
describe("Slider Navigate component", () => {
  afterEach(i), test("renders correctly", () => {
    const { container: t } = r(/* @__PURE__ */ s(l, {})), e = n.getByTestId(m), o = n.getAllByTestId(a);
    expect(o.length).toBe(Object.values(p).length), expect(e).toBeInTheDocument(), expect(t).toMatchSnapshot();
  }), test("renders no buttons if NAVIGATE_BUTTON_PLACEMENT is empty", () => {
    jest.spyOn(Object, "values").mockReturnValue([]);
    const { container: t } = r(/* @__PURE__ */ s(l, {})), e = n.queryAllByTestId(a);
    expect(e.length).toBe(0), expect(t).toMatchSnapshot();
  });
});
describe("Navigate Button component", () => {
  Object.values(p).forEach((e) => {
    test(`renders correctly with ${e} placement`, () => {
      const { container: o } = r(/* @__PURE__ */ s(T, { placement: e })), c = n.getByTestId(a);
      expect(c).toBeInTheDocument(), expect(c).toHaveClass("slider-navigate__button"), expect(c.querySelector("svg")).toBeInTheDocument(), expect(o).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=SliderNavigate.test.js.map
