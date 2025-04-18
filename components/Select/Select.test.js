import { jsx as s } from "react/jsx-runtime";
import { r as c, s as n, f as r } from "../../react.esm-OOgUt-k1.js";
import { S as i, a } from "../../constants-DNQ9bsvo.js";
import { INPUT_TEST_ID as h } from "../Input/constants.js";
import { selectOptionsMock as f } from "../../services/mocks.js";
const o = {
  options: f,
  onClick: jest.fn(),
  handleSelect: jest.fn(),
  onClickToOptions: jest.fn(),
  onChange: jest.fn(),
  value: "",
  isOpen: !0
}, p = f[0], u = ".select__option", B = ".select__option_empty";
describe("Select Component", () => {
  const m = [!0, !1], v = ["Select", void 0];
  m.forEach((e) => {
    v.forEach((t) => {
      const d = `should input ${e ? "is disabled" : "is not disabled"} ${t ? "has a placeholder" : "has no placeholder"}`;
      test(d, () => {
        const { container: y } = c(
          /* @__PURE__ */ s(
            a,
            {
              ...o,
              disabled: e,
              placeholder: t
            }
          )
        ), x = n.getByTestId(i), g = n.getByTestId(h);
        t && expect(g).toHaveAttribute("placeholder", t), expect(x).toBeInTheDocument(), expect(g.disabled).toBe(e), e && expect(x).toHaveClass("disabled"), expect(y).toMatchSnapshot();
      });
    });
  }), test("calls onChange and handleSelect when input changes", () => {
    const { container: e } = c(
      /* @__PURE__ */ s(
        a,
        {
          ...o,
          hasSearch: !0
        }
      )
    ), t = n.getByTestId(h);
    r.change(t, { target: { value: p } }), expect(o.onChange).toHaveBeenCalledWith(p), expect(o.handleSelect).toHaveBeenCalledWith(!0), expect(e).toMatchSnapshot();
  }), test("calls onClick when block is clicked", () => {
    const { container: e } = c(/* @__PURE__ */ s(a, { ...o })), t = n.getByTestId(i), l = t.querySelector(".select__block");
    l && r.click(l), expect(t).toHaveClass("_open"), expect(o.onClick).toHaveBeenCalled(), expect(e).toMatchSnapshot();
  }), test("filters options when hasSearch is true and value is typed", () => {
    c(
      /* @__PURE__ */ s(
        a,
        {
          ...o,
          hasSearch: !0,
          value: "Another"
        }
      )
    );
    const e = n.getByTestId(i).querySelectorAll(u);
    expect(e.length).toBe(1), expect(e[0].textContent).toBe("Another Option");
  }), test("does not render list if search yields no match", () => {
    const { container: e } = c(
      /* @__PURE__ */ s(
        a,
        {
          ...o,
          hasSearch: !0,
          value: "nonexistent"
        }
      )
    ), t = n.getByTestId(i).querySelectorAll(u), l = n.getByTestId(i).querySelector(B);
    expect(t.length).toBe(1), expect(l).toBeInTheDocument(), expect(e).toMatchSnapshot();
  }), test("closes list on outside click", () => {
    c(/* @__PURE__ */ s(a, { ...o })), r.mouseDown(document), expect(o.handleSelect).toHaveBeenCalled();
  }), test("displays the provided value in the input and highlights the corresponding option", () => {
    const { container: e } = c(
      /* @__PURE__ */ s(
        a,
        {
          ...o,
          value: p
        }
      )
    ), t = n.getByTestId(h), S = Array.from(n.getByTestId(i).querySelectorAll(u)).find((d) => d.textContent === p);
    expect(t).toHaveValue(p), expect(S).toHaveClass("_selected"), expect(e).toMatchSnapshot();
  }), test("opens the select when typing in the input", () => {
    const { container: e } = c(
      /* @__PURE__ */ s(
        a,
        {
          ...o,
          hasSearch: !0
        }
      )
    ), t = n.getByTestId(h);
    r.change(t, { target: { value: p } }), expect(o.isOpen).toBe(!0), expect(e).toMatchSnapshot();
  });
});
//# sourceMappingURL=Select.test.js.map
