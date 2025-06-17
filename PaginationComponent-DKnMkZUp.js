import { jsx as t, jsxs as g } from "react/jsx-runtime";
import { cn as N } from "./services/helpers.js";
import { PaginationPage as m } from "./components/Pagination/components/PaginationPage.js";
import { Icons as c } from "./services/icons.js";
const P = ({ onClick: n, direction: a, disabled: r = !1 }) => /* @__PURE__ */ t(
  "button",
  {
    type: "button",
    onClick: n,
    disabled: r,
    className: "pagination__button",
    children: a === p.LEFT ? /* @__PURE__ */ t(
      c.ArrowNarrowLeft,
      {
        "data-testid": R,
        className: "pagination__arrow"
      }
    ) : /* @__PURE__ */ t(
      c.ArrowNarrowRight,
      {
        "data-testid": b,
        className: "pagination__arrow"
      }
    )
  }
), f = ({
  pages: n,
  currentPage: a,
  onPageClick: r,
  onPrevClick: e,
  onNextClick: d,
  isLoading: s = !1
}) => {
  const l = a === 1 || s, _ = a === n.at(-1) || s, A = () => n.map((o) => {
    const I = o === a, T = () => {
      r(o);
    };
    return /* @__PURE__ */ t(
      i.Page,
      {
        isSelected: I,
        onClick: T,
        disabled: s,
        page: o
      },
      o
    );
  });
  return /* @__PURE__ */ g("div", { className: "pagination__body", children: [
    /* @__PURE__ */ t(
      i.Arrow,
      {
        disabled: l,
        onClick: e,
        direction: "left"
      }
    ),
    A(),
    /* @__PURE__ */ t(
      i.Arrow,
      {
        disabled: _,
        onClick: d,
        direction: "right"
      }
    )
  ] });
}, p = Object.freeze({
  LEFT: "left",
  RIGHT: "right"
}), i = Object.assign(h, {
  Page: m,
  Arrow: P,
  Body: f
}), w = "paginationTestId", R = "paginationArrowLeftTestId", b = "paginationArrowRightTestId", h = ({ block: n, ...a }) => /* @__PURE__ */ t(
  "div",
  {
    "data-testid": w,
    className: N(n, "pagination"),
    children: /* @__PURE__ */ t(i.Body, { ...a })
  }
);
export {
  w as P,
  R as a,
  b,
  i as c,
  P as d,
  f as e,
  p as f,
  h as g
};
//# sourceMappingURL=PaginationComponent-DKnMkZUp.js.map
