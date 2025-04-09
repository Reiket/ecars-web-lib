import { jsxs as I, jsx as i } from "react/jsx-runtime";
import { RouterLink as a } from "../RouterLink/RouterLink.js";
import { LEFT_ICON_LINK_TEST_ID as n, RIGHT_ICON_LINK_TEST_ID as _ } from "./constants.js";
const m = ({ RightIcon: t, LeftIcon: o, children: s, ...r }) => I(a, { withIcon: !0, ...r, children: [!!o && i(o, { "data-testid": n }), s, !!t && i(t, { "data-testid": _ })] });
export {
  m as LinkWithIcon
};
//# sourceMappingURL=LinkWithIcon.js.map
