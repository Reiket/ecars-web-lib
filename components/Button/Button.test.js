import { jsx as c } from "react/jsx-runtime";
import { c as m, r as i, s as h, f as p } from "../../react.esm-DvVef44-.js";
import { BUTTON_COLOR as d, BUTTON_SIZE as b, BUTTON_TEST_ID as l } from "./constants.js";
import { Button as s } from "./Button.js";
describe("Button component", () => {
  afterEach(m);
  const u = Object.values(d), x = Object.values(b), T = ["submit", "reset", "button"], a = { color: d.GRAY, size: b.BIG }, f = [!0, !1];
  u.forEach((t) => {
    x.forEach((e) => {
      T.forEach((n) => {
        f.forEach((o) => {
          test(`renders button with color ${t}, size ${e}, type ${n || "button"} and disabled`, () => {
            const { container: B } = i(c(s, { color: t, size: e, type: n, disabled: o, children: "button" })), r = h.getByTestId(l);
            expect(r).toBeInTheDocument(), expect(r).toHaveClass(`button--${t}`), expect(r).toHaveClass(`button--${e}`), expect(r.disabled).toBe(o), expect(r).toHaveStyle("cursor: default"), expect(B).toMatchSnapshot();
          });
        });
      });
    });
  }), test("changes button text according to the children text", () => {
    const { container: t, getByText: e, rerender: n } = i(c(s, { ...a, children: "button" }));
    let o = e("button");
    expect(o).toBeInTheDocument(), n(c(s, { ...a, children: "Confirm" })), o = e("Confirm"), expect(o).toBeInTheDocument(), expect(t).toMatchSnapshot();
  }), test("handles the click event", () => {
    const t = jest.fn(), { container: e, getByText: n } = i(c(s, { ...a, onClick: () => t(), children: "button" }));
    p.click(n("button")), expect(t).toHaveBeenCalledTimes(1), expect(e).toMatchSnapshot();
  }), test("the onClick event does not fire when button is disabled", () => {
    const t = jest.fn(), { container: e, getByText: n } = i(c(s, { ...a, disabled: !0, onClick: t, children: "button" })), o = n("button");
    p.click(o), expect(t).not.toHaveBeenCalled(), expect(e).toMatchSnapshot();
  }), test("additional classes are not applied if the button is disabled", () => {
    const { container: t, getByText: e } = i(c(s, { ...a, disabled: !0, children: "button" })), n = e("button");
    expect(n).toHaveClass("button"), expect(t).toMatchSnapshot();
  }), test("button has button-transparent if receive prop isTransparent", () => {
    const { container: t } = i(c(s, { ...a, isTransparent: !0, children: "button" })), e = h.getByTestId(l);
    expect(e).toHaveClass("button--transparent"), expect(t).toMatchSnapshot();
  }), test("button has button-icon if receive prop withIcon", () => {
    const { container: t } = i(c(s, { ...a, withIcon: !0, children: "button" })), e = h.getByTestId(l);
    expect(e).toHaveClass("button--icon"), expect(t).toMatchSnapshot();
  });
});
//# sourceMappingURL=Button.test.js.map
