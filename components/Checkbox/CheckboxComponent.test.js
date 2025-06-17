import { jsx as n } from "react/jsx-runtime";
import { r, s as o, f as x } from "../../react.esm-DeOc63_l.js";
import { C as m, a, b as h } from "../../constants-DbAfTJRK.js";
describe("Checkbox component", () => {
  const d = [!0, !1], i = [!0, !1], p = [!0, !1];
  d.forEach((t) => {
    p.forEach((e) => {
      i.forEach((s) => {
        const u = `renders checkbox ${t ? "is disabled" : "is not disabled"}, ${e ? "is checked" : "is not checked"}, ${s ? "has an error and input has an error class" : "has no error"}`;
        test(u, () => {
          const f = {
            checked: e,
            disabled: t,
            hasError: s
          }, { container: k } = r(/* @__PURE__ */ n(h, { ...f })), l = o.getByTestId(m), c = o.getByTestId(a);
          s && expect(c).toHaveClass("error"), expect(c.checked).toBe(e), expect(c.disabled).toBe(t), expect(l).toBeInTheDocument(), expect(k).toMatchSnapshot();
        });
      });
    });
  }), test("onChange event changed checked when user clicks on checkbox", () => {
    const t = {
      checked: !1,
      onChange: jest.fn()
    };
    r(/* @__PURE__ */ n(h, { ...t }));
    const e = o.getByTestId(a);
    expect(e.checked).toBe(!1), x.change(e, { target: { checked: !0 } }), expect(e.checked).toBe(!0);
  });
});
//# sourceMappingURL=CheckboxComponent.test.js.map
