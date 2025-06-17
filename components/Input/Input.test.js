import { jsx as o } from "react/jsx-runtime";
import { r, s as c, f as s } from "../../react.esm-DeOc63_l.js";
import { Input as p } from "./Input.js";
import { INPUT_TEST_ID as l } from "./constants.js";
describe("Input component", () => {
  const h = [!0, !1], i = [!0, !1], u = ["Your email", void 0];
  h.forEach((e) => {
    i.forEach((a) => {
      u.forEach((t) => {
        const d = `should input ${e ? "is disabled" : "is not disabled"} ${a ? "has an error and input has an error class" : "has no error"} ${t ? "has a placeholder" : "has no placeholder"}`;
        test(d, () => {
          const v = {
            disabled: e,
            hasError: a,
            placeholder: t
          }, { container: g } = r(/* @__PURE__ */ o(p, { ...v })), n = c.getByTestId(l);
          a && expect(n).toHaveClass("error"), t && expect(n).toHaveAttribute("placeholder", t), expect(n).toBeInTheDocument(), expect(n.disabled).toBe(e), expect(g).toMatchSnapshot();
        });
      });
    });
  }), test("should input has a value which got in props", () => {
    const e = {
      value: "input text"
    };
    r(/* @__PURE__ */ o(p, { ...e }));
    const a = c.getByTestId(l);
    expect(a).toHaveValue(e.value);
  }), test("should onChange event updates value correctly", () => {
    const e = jest.fn();
    r(/* @__PURE__ */ o(p, { ...{
      value: "",
      onChange: e
    } }));
    const t = c.getByTestId(l);
    s.change(t, { target: { value: "test" } }), expect(e).toHaveBeenCalledWith("test");
  }), test("onChange event updates input value correctly when typing", () => {
    const e = jest.fn();
    r(/* @__PURE__ */ o(p, { ...{
      value: "",
      onChange: e
    } }));
    const t = c.getByTestId(l);
    s.change(t, { target: { value: "t" } }), expect(e).toHaveBeenCalledWith("t"), s.change(t, { target: { value: "te" } }), expect(e).toHaveBeenCalledWith("te"), s.change(t, { target: { value: "tes" } }), expect(e).toHaveBeenCalledWith("tes"), s.change(t, { target: { value: "test" } }), expect(e).toHaveBeenCalledWith("test");
  });
});
//# sourceMappingURL=Input.test.js.map
