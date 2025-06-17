import { jsx as c } from "react/jsx-runtime";
import { r as s, s as p, f as d } from "../../react.esm-DeOc63_l.js";
import { dropdownOptionsMock as i } from "../../services/mocks.js";
import { D as l, a as r } from "../../DropdownComponent-CxHApvrx.js";
const o = {
  options: i,
  onSelect: jest.fn(),
  handleOpen: jest.fn(),
  isOpen: !1,
  onClickOutside: jest.fn(),
  category: "1"
};
describe("Dropdown Component", () => {
  test("renders the dropdown component correctly", () => {
    const { container: t } = s(/* @__PURE__ */ c(r, { ...o })), e = p.getByTestId(l);
    expect(e).toBeInTheDocument(), expect(t).toMatchSnapshot();
  }), test("calls handleOpen when block is clicked", () => {
    const { container: t } = s(
      /* @__PURE__ */ c(
        r,
        {
          ...o,
          isOpen: !0
        }
      )
    ), e = p.getByTestId(l), n = e.querySelector(".dropdown-menu__category");
    n && d.click(n), expect(e).toHaveClass("_dropdown-active"), expect(o.handleOpen).toHaveBeenCalled(), expect(t).toMatchSnapshot();
  }), test("closes list on outside click", () => {
    s(/* @__PURE__ */ c(r, { ...o })), d.mouseDown(document), expect(o.onClickOutside).toHaveBeenCalled();
  }), test("highlights the selected option correctly", () => {
    const t = i[0].value, { container: e } = s(
      /* @__PURE__ */ c(
        r,
        {
          ...o,
          category: t,
          isOpen: !0
        }
      )
    ), n = p.getByTestId(l), m = Array.from(n.querySelectorAll(".dropdown-menu__option")).find((u) => u.classList.contains("_selected-option"));
    expect(m).toBeInTheDocument(), expect(e).toMatchSnapshot();
  }), test("calls onSelect when an option is clicked", () => {
    s(
      /* @__PURE__ */ c(
        r,
        {
          ...o,
          isOpen: !0
        }
      )
    );
    const t = p.getByTestId(l), e = Array.from(t.querySelectorAll(".dropdown-menu__option")), n = i[0].value, a = e[0];
    d.click(a), expect(o.onSelect).toHaveBeenCalledWith(n);
  });
});
//# sourceMappingURL=Dropdown.test.js.map
