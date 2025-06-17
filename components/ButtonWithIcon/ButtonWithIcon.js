import { jsxs as d, jsx as r } from "react/jsx-runtime";
import { Button as m } from "../Button/Button.js";
import { LEFT_ICON_BUTTON_TEST_ID as I, RIGHT_ICON_BUTTON_TEST_ID as n } from "./constants.js";
const O = ({
  RightIcon: t,
  LeftIcon: o,
  children: _,
  className: T,
  ...i
}) => /* @__PURE__ */ d(
  m,
  {
    withIcon: !0,
    ...i,
    children: [
      !!o && /* @__PURE__ */ r(
        o,
        {
          className: T,
          "data-testid": I
        }
      ),
      _,
      !!t && /* @__PURE__ */ r(
        t,
        {
          className: T,
          "data-testid": n
        }
      )
    ]
  }
);
export {
  O as ButtonWithIcon
};
//# sourceMappingURL=ButtonWithIcon.js.map
