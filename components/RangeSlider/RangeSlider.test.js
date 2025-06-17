import { jsx as r } from "react/jsx-runtime";
import { r as t, s as a } from "../../react.esm-DeOc63_l.js";
import { RangeSlider as o } from "./RangeSlider.js";
import { rangeSliderArrayMock as n } from "../../services/mocks.js";
describe("RangeSlider Component", () => {
  test("renders Range Slider component correctly", () => {
    const { container: e } = t(/* @__PURE__ */ r(o, { defaultValue: n })), c = e.querySelector(".rc-slider");
    expect(c).toBeInTheDocument(), expect(e).toMatchSnapshot();
  }), test("renders with correct default range", () => {
    t(/* @__PURE__ */ r(o, { defaultValue: n }));
    const e = a.getAllByRole("slider", { hidden: !0 });
    expect(e).toHaveLength(2);
  });
});
//# sourceMappingURL=RangeSlider.test.js.map
