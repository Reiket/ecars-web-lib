import { jsxs as I, jsx as i } from "react/jsx-runtime";
import { RouterLink as e } from "../RouterLink/RouterLink.js";
import { LEFT_ICON_LINK_TEST_ID as m, RIGHT_ICON_LINK_TEST_ID as s } from "./constants.js";
const a = ({ RightIcon: t, LeftIcon: r, children: o, ..._ }) => /* @__PURE__ */ I(
  e,
  {
    withIcon: !0,
    ..._,
    children: [
      !!r && /* @__PURE__ */ i(r, { "data-testid": m }),
      o,
      !!t && /* @__PURE__ */ i(t, { "data-testid": s })
    ]
  }
);
export {
  a as LinkWithIcon
};
//# sourceMappingURL=LinkWithIcon.js.map
