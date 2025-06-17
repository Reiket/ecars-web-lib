import { jsx as c } from "react/jsx-runtime";
import { c as v, r, s as u, f as h } from "../../react.esm-DeOc63_l.js";
import { BUTTON_COLOR as l, BUTTON_SIZE as b, BUTTON_TEST_ID as p } from "./constants.js";
import { Button as s } from "./Button.js";
describe("Button component", () => {
  afterEach(v);
  const d = Object.values(l), x = Object.values(b), f = ["submit", "reset", "button"], a = {
    color: l.GRAY,
    size: b.BIG
  }, T = [!0, !1];
  d.forEach((t) => {
    x.forEach((e) => {
      f.forEach((n) => {
        T.forEach((o) => {
          const B = `renders button with color ${t}, size ${e}, type ${n ?? "button"} and disabled`;
          test(B, () => {
            const { container: m } = r(
              /* @__PURE__ */ c(
                s,
                {
                  color: t,
                  size: e,
                  type: n,
                  disabled: o,
                  children: "button"
                }
              )
            ), i = u.getByTestId(p);
            expect(i).toBeInTheDocument(), expect(i).toHaveClass(`button--${t}`), expect(i).toHaveClass(`button--${e}`), expect(i.disabled).toBe(o), expect(i).toHaveStyle("cursor: default"), expect(m).toMatchSnapshot();
          });
        });
      });
    });
  }), test("changes button text according to the children text", () => {
    const { container: t, getByText: e, rerender: n } = r(/* @__PURE__ */ c(s, { ...a, children: "button" }));
    let o = e("button");
    expect(o).toBeInTheDocument(), n(/* @__PURE__ */ c(s, { ...a, children: "Confirm" })), o = e("Confirm"), expect(o).toBeInTheDocument(), expect(t).toMatchSnapshot();
  }), test("handles the click event", () => {
    const t = jest.fn(), { container: e, getByText: n } = r(
      /* @__PURE__ */ c(
        s,
        {
          ...a,
          onClick: t,
          children: "button"
        }
      )
    );
    h.click(n("button")), expect(t).toHaveBeenCalledTimes(1), expect(e).toMatchSnapshot();
  }), test("the onClick event does not fire when button is disabled", () => {
    const t = jest.fn(), { container: e, getByText: n } = r(
      /* @__PURE__ */ c(
        s,
        {
          ...a,
          disabled: !0,
          onClick: t,
          children: "button"
        }
      )
    ), o = n("button");
    h.click(o), expect(t).not.toHaveBeenCalled(), expect(e).toMatchSnapshot();
  }), test("additional classes are not applied if the button is disabled", () => {
    const { container: t, getByText: e } = r(
      /* @__PURE__ */ c(
        s,
        {
          ...a,
          disabled: !0,
          children: "button"
        }
      )
    ), n = e("button");
    expect(n).toHaveClass("button"), expect(t).toMatchSnapshot();
  }), test("button has button-transparent if receive prop isTransparent", () => {
    const { container: t } = r(
      /* @__PURE__ */ c(
        s,
        {
          ...a,
          isTransparent: !0,
          children: "button"
        }
      )
    ), e = u.getByTestId(p);
    expect(e).toHaveClass("button--transparent"), expect(t).toMatchSnapshot();
  }), test("button has button-icon if receive prop withIcon", () => {
    const { container: t } = r(
      /* @__PURE__ */ c(
        s,
        {
          ...a,
          withIcon: !0,
          children: "button"
        }
      )
    ), e = u.getByTestId(p);
    expect(e).toHaveClass("button--icon"), expect(t).toMatchSnapshot();
  });
});
//# sourceMappingURL=Button.test.js.map
