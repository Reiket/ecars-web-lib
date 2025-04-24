import { jsx as l } from "react/jsx-runtime";
import { s as o, f as a, r as p } from "../../react.esm-OOgUt-k1.js";
import { A as x, a as d } from "../../constants-RDWPSVyj.js";
const t = {
  isOpen: !1,
  textContent: "Test content",
  title: "Test title",
  onClick: jest.fn()
};
describe("Accordion Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const r = [!0, !1], n = (e = {}) => {
    const c = { ...t, ...e };
    return p(/* @__PURE__ */ l(d, { ...c }));
  };
  test("renders the accordion component and title, text correctly", () => {
    const { container: e } = n();
    expect(o.getByText(t.title)).toBeInTheDocument(), expect(o.getByText(t.textContent)).toBeInTheDocument(), expect(o.getByTestId(x)).toBeInTheDocument(), expect(e).toMatchSnapshot();
  }), r.forEach((e) => {
    const c = `should ${e ? "open" : "close"} the content`;
    test(c, () => {
      const { container: i } = n({ isOpen: e }), s = o.getByText(t.textContent);
      e ? expect(s).toBeVisible() : (expect(s.offsetHeight).toBe(0), expect(i).toMatchSnapshot());
    });
  }), test("triggers onClick handler when title is clicked", () => {
    n(), a.click(o.getByText(t.title)), expect(t.onClick).toHaveBeenCalledTimes(1);
  });
});
//# sourceMappingURL=AccordionComponent.test.js.map
