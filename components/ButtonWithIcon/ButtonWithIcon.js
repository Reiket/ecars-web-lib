import { jsxs as n, jsx as s } from "react/jsx-runtime";
import { Button as r } from "../Button/Button.js";
import { LEFT_ICON_BUTTON_TEST_ID as T, RIGHT_ICON_BUTTON_TEST_ID as I } from "./constants.js";
const m = ({ RightIcon: t, LeftIcon: o, children: i, ...a }) => n(r, { withIcon: !0, ...a, children: [!!o && s(o, { "data-testid": T }), i, !!t && s(t, { "data-testid": I })] });
export {
  m as ButtonWithIcon
};
//# sourceMappingURL=ButtonWithIcon.js.map
