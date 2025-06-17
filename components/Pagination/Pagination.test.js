import { jsx as a } from "react/jsx-runtime";
import { r, s as t, f as s } from "../../react.esm-DeOc63_l.js";
import { P as T, a as i, b as g, c } from "../../PaginationComponent-DKnMkZUp.js";
const e = {
  pages: [1, 2, 3],
  currentPage: 1,
  onPageClick: jest.fn(),
  onNextClick: jest.fn(),
  onPrevClick: jest.fn()
};
describe("Pagination component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  }), test("renders component with all page buttons and arrows", () => {
    const { container: n } = r(/* @__PURE__ */ a(c, { ...e })), o = t.getByTestId(T), l = t.getByTestId(i), p = t.getByTestId(g);
    expect(o).toBeInTheDocument(), expect(l).toBeInTheDocument(), expect(p).toBeInTheDocument(), e.pages.forEach((d) => {
      expect(t.getByText(String(d))).toBeInTheDocument();
    }), expect(n).toMatchSnapshot();
  }), test("disables prev arrow on first page", () => {
    const n = e.pages.at(0) ?? 0, o = e.pages.at(-1) ?? 0, { container: l, rerender: p } = r(
      /* @__PURE__ */ a(
        c,
        {
          ...e,
          currentPage: n
        }
      )
    ), d = t.getByTestId(i).parentElement, B = t.getByTestId(g).parentElement;
    expect(d).toBeDisabled(), p(
      /* @__PURE__ */ a(
        c,
        {
          ...e,
          currentPage: o
        }
      )
    ), expect(B).toBeDisabled(), expect(l).toMatchSnapshot();
  }), test("calls onPageClick when page button is clicked", () => {
    r(
      /* @__PURE__ */ a(
        c,
        {
          ...e,
          currentPage: 2
        }
      )
    ), s.click(t.getByText("2")), expect(e.onPageClick).toHaveBeenCalledWith(2);
  }), test("marks the current page as selected", () => {
    r(/* @__PURE__ */ a(c, { ...e })), expect(t.getByText("1")).toHaveClass("_current-page");
  }), test("calls onPrevClick and onNextClick", () => {
    r(
      /* @__PURE__ */ a(
        c,
        {
          ...e,
          currentPage: 2
        }
      )
    );
    const n = t.getByTestId(i).parentElement, o = t.getByTestId(g).parentElement;
    n && (s.click(n), expect(e.onPrevClick).toHaveBeenCalled()), o && (s.click(o), expect(e.onNextClick).toHaveBeenCalled());
  }), test("disables all buttons and arrows when loading", () => {
    r(
      /* @__PURE__ */ a(
        c,
        {
          ...e,
          isLoading: !0
        }
      )
    );
    const n = t.getByTestId(i).parentElement, o = t.getByTestId(g).parentElement;
    expect(n).toBeDisabled(), expect(o).toBeDisabled(), e.pages.forEach((l) => {
      expect(t.getByText(String(l))).toBeDisabled();
    }), s.click(t.getByText("1")), n && s.click(n), o && s.click(o), expect(e.onPageClick).not.toHaveBeenCalled(), expect(e.onPrevClick).not.toHaveBeenCalled(), expect(e.onNextClick).not.toHaveBeenCalled();
  });
});
//# sourceMappingURL=Pagination.test.js.map
