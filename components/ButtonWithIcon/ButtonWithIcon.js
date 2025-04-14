import { jsxs as i, jsx as o } from "react/jsx-runtime";
import { Button as m } from "../Button/Button.js";
import { LEFT_ICON_BUTTON_TEST_ID as s, RIGHT_ICON_BUTTON_TEST_ID as d } from "./constants.js";
const a = ({ RightIcon: t, LeftIcon: r, children: T, ..._ }) => /* @__PURE__ */ i(
  m,
  {
    withIcon: !0,
    ..._,
    children: [
      !!r && /* @__PURE__ */ o(r, { "data-testid": s }),
      T,
      !!t && /* @__PURE__ */ o(t, { "data-testid": d })
    ]
  }
);
export {
  a as ButtonWithIcon
};
//# sourceMappingURL=ButtonWithIcon.js.map
