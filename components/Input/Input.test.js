import { jsx as n } from "react/jsx-runtime";
import { r, s as l, f as a } from "../../react.esm-V8WrrwsZ.js";
import { Input as c } from "./Input.js";
import { INPUT_TEST_ID as h } from "./constants.js";
describe("Input component", () => {
  const p = [!0, !1], d = ["Your email", void 0];
  [!0, !1].forEach((e) => {
    p.forEach((t) => {
      d.forEach((o) => {
        test(`should input ${e ? "is disabled" : "is not disabled"} ${t ? "has an error and input has an error class" : "has no error"} ${o ? "has a placeholder" : "has no placeholder"}`, () => {
          const i = { disabled: e, hasError: t, placeholder: o }, { container: u } = r(n(c, { ...i })), s = l.getByTestId(h);
          t && expect(s).toHaveClass("error"), o && expect(s).toHaveAttribute("placeholder", o), expect(s).toBeInTheDocument(), expect(s.disabled).toBe(e), expect(u).toMatchSnapshot();
        });
      });
    });
  }), test("should input has a value which got in props", () => {
    const e = { value: "input text" };
    r(n(c, { ...e }));
    const t = l.getByTestId(h);
    expect(t).toHaveValue(e.value);
  }), test("should onChange event updates value correctly", () => {
    const e = jest.fn();
    r(n(c, { value: "", onChange: e }));
    const t = l.getByTestId(h);
    a.change(t, { target: { value: "test" } }), expect(e).toHaveBeenCalledWith("test");
  }), test("onChange event updates input value correctly when typing", () => {
    const e = jest.fn();
    r(n(c, { value: "", onChange: e }));
    const t = l.getByTestId(h);
    a.change(t, { target: { value: "t" } }), expect(e).toHaveBeenCalledWith("t"), a.change(t, { target: { value: "te" } }), expect(e).toHaveBeenCalledWith("te"), a.change(t, { target: { value: "tes" } }), expect(e).toHaveBeenCalledWith("tes"), a.change(t, { target: { value: "test" } }), expect(e).toHaveBeenCalledWith("test");
  });
});
//# sourceMappingURL=Input.test.js.map
