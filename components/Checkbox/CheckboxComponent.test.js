import { jsx as a } from "react/jsx-runtime";
import { r, s, f as b } from "../../react.esm-V8WrrwsZ.js";
import { C as f, a as n, b as h } from "../../constants-DIsb-mTS.js";
describe("Checkbox component", () => {
  const d = [!0, !1], i = [!0, !1];
  [!0, !1].forEach((c) => {
    i.forEach((e) => {
      d.forEach((t) => {
        test(`renders checkbox ${c ? "is disabled" : "is not disabled"}, ${e ? "is checked" : "is not checked"}, ${t ? "has an error and input has an error class" : "has no error"}`, () => {
          const k = { checked: e, disabled: c, hasError: t }, { container: p } = r(a(h, { ...k })), x = s.getByTestId(f), o = s.getByTestId(n);
          t && expect(o).toHaveClass("error"), expect(o.checked).toBe(e), expect(o.disabled).toBe(c), expect(x).toBeInTheDocument(), expect(p).toMatchSnapshot();
        });
      });
    });
  }), test("onChange event changed checked when user clicks on checkbox", () => {
    const c = { checked: !1, onChange: jest.fn() };
    r(a(h, { ...c }));
    const e = s.getByTestId(n);
    expect(e.checked).toBe(!1), b.change(e, { target: { checked: !0 } }), expect(e.checked).toBe(!0);
  });
});
//# sourceMappingURL=CheckboxComponent.test.js.map
