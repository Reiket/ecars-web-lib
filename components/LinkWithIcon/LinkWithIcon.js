import { jsxs as I, jsx as i } from "react/jsx-runtime";
import { RouterLink as m } from "../RouterLink/RouterLink.js";
import { LEFT_ICON_LINK_TEST_ID as s, RIGHT_ICON_LINK_TEST_ID as T } from "./constants.js";
const n = ({ RightIcon: t, LeftIcon: r, children: o, ..._ }) => /* @__PURE__ */ I(
  m,
  {
    withIcon: !0,
    ..._,
    children: [
      !!r && /* @__PURE__ */ i(r, { "data-testid": s }),
      o,
      !!t && /* @__PURE__ */ i(t, { "data-testid": T })
    ]
  }
);
export {
  n as LinkWithIcon
};
//# sourceMappingURL=LinkWithIcon.js.map
