import { jsx as t } from "react/jsx-runtime";
import { r as o, s as n, f as s } from "../../react.esm-DeOc63_l.js";
import { FilterButton as c } from "./FilterButton.js";
import { RIGHT_ICON_BUTTON_TEST_ID as l } from "../ButtonWithIcon/constants.js";
const e = {
  onClick: jest.fn()
};
describe("FilterButton component", () => {
  test("renders the filter component correctly", () => {
    const { container: r } = o(/* @__PURE__ */ t(c, { ...e, children: "Close" }));
    expect(n.getByText("Close")).toBeInTheDocument(), expect(r).toMatchSnapshot();
  }), test("renders RightIcon component", () => {
    o(/* @__PURE__ */ t(c, { ...e, children: "Close" })), expect(n.getByTestId(l)).toBeInTheDocument();
  }), test("calls onClick when clicked", () => {
    o(/* @__PURE__ */ t(c, { ...e, children: "Close" })), s.click(n.getByRole("button")), expect(e.onClick).toHaveBeenCalledTimes(1);
  });
});
//# sourceMappingURL=FilterButton.test.js.map
