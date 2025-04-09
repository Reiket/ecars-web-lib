import { jsx as a } from "react/jsx-runtime";
import { r as m, s as r } from "../../react.esm-V8WrrwsZ.js";
import { Input as p } from "../Input/Input.js";
import { F as l, a as u, b as T } from "../../constants-Vl-meTpW.js";
import { INPUT_TEST_ID as f } from "../Input/constants.js";
describe("Field Component", () => {
  const n = ["Some error", void 0], s = ["email", void 0];
  ["Email", void 0].forEach((t) => {
    n.forEach((o) => {
      s.forEach((e) => {
        test(`render field component ${o ? `with error - ${o}` : "without error"}, ${t ? `with label - ${t}` : "without label"}, ${e ? `with id - ${e}` : "without id"}`, () => {
          const { container: h } = m(a(T, { label: t, id: e, error: o, children: a(p, {}) })), d = r.getByTestId(l), c = r.queryByTestId(u), i = r.getByTestId(f);
          expect(h).toMatchSnapshot(), expect(d).toBeInTheDocument(), expect(i).toBeInTheDocument(), t && (expect(c).toBeInTheDocument(), e && (expect(c).toHaveAttribute("for", e), expect(i).toHaveAttribute("id", e))), o && (expect(r.getByText("Some error")).toBeInTheDocument(), expect(i).toHaveClass("error"));
        });
      });
    });
  });
});
//# sourceMappingURL=FieldComponent.test.js.map
