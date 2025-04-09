import { jsx as a } from "react/jsx-runtime";
import { c as T, r as c, s } from "../../react.esm-CgrirGj5.js";
import { SliderNavigate as r } from "./SliderNavigate.js";
import { SLIDER_NAVIGATE_TEST_ID as i, NAVIGATE_BUTTON_TEST_ID as n, NAVIGATE_BUTTON_PLACEMENT as p } from "./constants.js";
import { NavigateButton as l } from "./NavigateButton.js";
describe("Slider Navigate component", () => {
  afterEach(T), test("renders correctly", () => {
    const { container: e } = c(a(r, {})), t = s.getByTestId(i), o = s.getAllByTestId(n);
    expect(o.length).toBe(Object.values(p).length), expect(t).toBeInTheDocument(), expect(e).toMatchSnapshot();
  }), test("renders no buttons if NAVIGATE_BUTTON_PLACEMENT is empty", () => {
    jest.spyOn(Object, "values").mockReturnValue([]);
    const { container: e } = c(a(r, {})), t = s.queryAllByTestId(n);
    expect(t.length).toBe(0), expect(e).toMatchSnapshot();
  });
}), describe("Navigate Button component", () => {
  Object.values(p).forEach((e) => {
    test(`renders correctly with ${e} placement`, () => {
      const { container: t } = c(a(l, { placement: e })), o = s.getByTestId(n);
      expect(o).toBeInTheDocument(), expect(o).toHaveClass("slider-navigate__button"), expect(o.querySelector("svg")).toBeInTheDocument(), expect(t).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=SliderNavigate.test.js.map
