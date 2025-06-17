import { jsx as p } from "react/jsx-runtime";
import { s as t, f as x, r as d } from "../../react.esm-DeOc63_l.js";
import { A as i, a as h } from "../../constants-8e3nZ3aI.js";
const o = {
  isOpen: !1,
  textContent: "Test content",
  title: "Test title",
  onClick: jest.fn()
};
describe("Accordion Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const a = [!0, !1], n = (e = {}) => {
    const c = { ...o, ...e };
    return d(/* @__PURE__ */ p(h, { ...c }));
  };
  test("renders the accordion component and title, text correctly", () => {
    const { container: e } = n();
    expect(t.getByText(o.title)).toBeInTheDocument(), expect(t.getByText(o.textContent)).toBeInTheDocument(), expect(t.getByTestId(i)).toBeInTheDocument(), expect(e).toMatchSnapshot();
  }), a.forEach((e) => {
    const c = `should ${e ? "open" : "close"} the content`;
    test(c, () => {
      const { container: l } = n({ isOpen: e }), s = t.getByText(o.textContent), r = t.getByTestId(i);
      e ? (expect(s).toBeVisible(), expect(r).toHaveClass("_active")) : (expect(s.offsetHeight).toBe(0), expect(r).not.toHaveClass("_active"), expect(l).toMatchSnapshot());
    });
  }), test("triggers onClick handler when title is clicked", () => {
    n(), x.click(t.getByText(o.title)), expect(o.onClick).toHaveBeenCalledTimes(1);
  });
});
//# sourceMappingURL=AccordionComponent.test.js.map
