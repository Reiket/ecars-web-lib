import { jsxs as d, jsx as T } from "react/jsx-runtime";
import { Button as m } from "../Button/Button.js";
import { LEFT_ICON_BUTTON_TEST_ID as n, RIGHT_ICON_BUTTON_TEST_ID as I } from "./constants.js";
const u = ({
  RightIcon: t,
  LeftIcon: r,
  children: _,
  className: o,
  ...i
}) => /* @__PURE__ */ d(
  m,
  {
    withIcon: !0,
    ...i,
    children: [
      !!r && /* @__PURE__ */ T(
        r,
        {
          className: o,
          "data-testid": n
        }
      ),
      _,
      !!t && /* @__PURE__ */ T(
        t,
        {
          className: o,
          "data-testid": I
        }
      )
    ]
  }
);
export {
  u as ButtonWithIcon
};
//# sourceMappingURL=ButtonWithIcon.js.map
