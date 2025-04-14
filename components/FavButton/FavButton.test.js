import { jsx as o } from "react/jsx-runtime";
import { c as h, r as a, s, f as i } from "../../react.esm-OOgUt-k1.js";
import { FAV_BUTTON_TYPE as f, FAV_BUTTON_TEST_ID as c } from "./constants.js";
import { FavButton as n } from "./FavButton.js";
describe("Fav Button component", () => {
  afterEach(h);
  const p = Object.values(f), l = [!0, !1];
  p.forEach((e) => {
    l.forEach((t) => {
      const d = `renders button with type ${e} and disabled`;
      test(d, () => {
        const { container: v } = a(
          /* @__PURE__ */ o(
            n,
            {
              type: e,
              disabled: t
            }
          )
        ), r = s.getByTestId(c);
        expect(r).toBeInTheDocument(), expect(r).toHaveClass(`favorite-button--${e}`), expect(r.disabled).toBe(t), expect(r).toHaveStyle("cursor: default"), expect(v).toMatchSnapshot();
      });
    });
  }), test("handles the click event", () => {
    const e = jest.fn(), { container: t } = a(
      /* @__PURE__ */ o(
        n,
        {
          type: "circle",
          onClick: e
        }
      )
    );
    i.click(s.getByTestId(c)), expect(e).toHaveBeenCalledTimes(1), expect(t).toMatchSnapshot();
  }), test("the onClick event does not fire when button is disabled", () => {
    const e = jest.fn(), { container: t } = a(
      /* @__PURE__ */ o(
        n,
        {
          type: "circle",
          disabled: !0,
          onClick: e
        }
      )
    );
    i.click(s.getByTestId(c)), expect(e).not.toHaveBeenCalled(), expect(t).toMatchSnapshot();
  }), test("the active state when has prop isFavorite", () => {
    const e = jest.fn(), { container: t } = a(
      /* @__PURE__ */ o(
        n,
        {
          type: "circle",
          isFavorite: !0,
          disabled: !0,
          onClick: e
        }
      )
    );
    expect(s.getByTestId(c)).toHaveClass("active"), expect(t).toMatchSnapshot();
  }), test("renders correct icon based on isFavorite prop", () => {
    const { rerender: e } = a(
      /* @__PURE__ */ o(
        n,
        {
          type: "circle",
          isFavorite: !0
        }
      )
    );
    expect(s.getByTestId(c)).toContainHTML("<svg"), e(
      /* @__PURE__ */ o(
        n,
        {
          type: "circle",
          isFavorite: !1
        }
      )
    ), expect(s.getByTestId(c)).toContainHTML("<svg");
  });
});
//# sourceMappingURL=FavButton.test.js.map
