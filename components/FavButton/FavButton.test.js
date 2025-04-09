import { jsx as o } from "react/jsx-runtime";
import { c as h, r as n, s as c, f as r } from "../../react.esm-CgrirGj5.js";
import { FAV_BUTTON_TYPE as v, FAV_BUTTON_TEST_ID as s } from "./constants.js";
import { FavButton as a } from "./FavButton.js";
describe("Fav Button component", () => {
  afterEach(h);
  const p = Object.values(v), d = [!0, !1];
  p.forEach((e) => {
    d.forEach((t) => {
      test(`renders button with type ${e} and disabled`, () => {
        const { container: l } = n(o(a, { type: e, disabled: t })), i = c.getByTestId(s);
        expect(i).toBeInTheDocument(), expect(i).toHaveClass(`favorite-button--${e}`), expect(i.disabled).toBe(t), expect(i).toHaveStyle("cursor: default"), expect(l).toMatchSnapshot();
      });
    });
  }), test("handles the click event", () => {
    const e = jest.fn(), { container: t } = n(o(a, { type: "circle", onClick: () => e() }));
    r.click(c.getByTestId(s)), expect(e).toHaveBeenCalledTimes(1), expect(t).toMatchSnapshot();
  }), test("the onClick event does not fire when button is disabled", () => {
    const e = jest.fn(), { container: t } = n(o(a, { type: "circle", disabled: !0, onClick: e }));
    r.click(c.getByTestId(s)), expect(e).not.toHaveBeenCalled(), expect(t).toMatchSnapshot();
  }), test("the active state when has prop isFavorite", () => {
    const e = jest.fn(), { container: t } = n(o(a, { type: "circle", isFavorite: !0, disabled: !0, onClick: e }));
    expect(c.getByTestId(s)).toHaveClass("active"), expect(t).toMatchSnapshot();
  }), test("renders correct icon based on isFavorite prop", () => {
    const { rerender: e } = n(o(a, { type: "circle", isFavorite: !0 }));
    expect(c.getByTestId(s)).toContainHTML("<svg"), e(o(a, { type: "circle", isFavorite: !1 })), expect(c.getByTestId(s)).toContainHTML("<svg");
  });
});
//# sourceMappingURL=FavButton.test.js.map
