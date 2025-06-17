import { jsx as i } from "react/jsx-runtime";
import { r as T, s as n } from "../../react.esm-DeOc63_l.js";
import { Input as I } from "../Input/Input.js";
import { F as E, a as x, b as B } from "../../FieldComponent-C0AemaBM.js";
import { INPUT_TEST_ID as D } from "../Input/constants.js";
describe("Field Component", () => {
  const c = ["Email", void 0], a = ["Some error", void 0], m = ["email", void 0];
  c.forEach((e) => {
    a.forEach((o) => {
      m.forEach((t) => {
        const p = o ? `with error - ${o}` : "without error", h = e ? `with label - ${e}` : "without label", d = t ? `with id - ${t}` : "without id", f = `render field component ${p}, ${h}, ${d}`;
        test(f, () => {
          const { container: l } = T(
            /* @__PURE__ */ i(
              B,
              {
                label: e,
                id: t,
                error: o,
                children: /* @__PURE__ */ i(I, {})
              }
            )
          ), u = n.getByTestId(E), s = n.queryByTestId(x), r = n.getByTestId(D);
          expect(l).toMatchSnapshot(), expect(u).toBeInTheDocument(), expect(r).toBeInTheDocument(), e && (expect(s).toBeInTheDocument(), t && (expect(s).toHaveAttribute("for", t), expect(r).toHaveAttribute("id", t))), o && (expect(n.getByText("Some error")).toBeInTheDocument(), expect(r).toHaveClass("error"));
        });
      });
    });
  });
});
//# sourceMappingURL=FieldComponent.test.js.map
