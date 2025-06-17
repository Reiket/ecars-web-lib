import { jsx as t } from "react/jsx-runtime";
import { NAVIGATE_BUTTON_TEST_ID as i } from "../constants.js";
import { Icons as o } from "../../../services/icons.js";
const a = {
  left: /* @__PURE__ */ t(o.ArrowNarrowLeft, {}),
  right: /* @__PURE__ */ t(o.ArrowNarrowRight, {})
}, m = ({ placement: r }) => /* @__PURE__ */ t(
  "button",
  {
    "data-testid": i,
    type: "button",
    className: "slider-navigate__button",
    children: a[r]
  }
);
export {
  m as NavigateButton
};
//# sourceMappingURL=NavigateButton.js.map
