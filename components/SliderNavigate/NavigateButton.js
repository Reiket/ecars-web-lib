import { jsx as t } from "react/jsx-runtime";
import { NAVIGATE_BUTTON_TEST_ID as e } from "./constants.js";
import { Icons as r } from "../../services/icons.js";
const i = {
  left: /* @__PURE__ */ t(r.ArrowNarrowLeft, {}),
  right: /* @__PURE__ */ t(r.ArrowNarrowRight, {})
}, m = ({ placement: o }) => /* @__PURE__ */ t(
  "button",
  {
    "data-testid": e,
    type: "button",
    className: "slider-navigate__button",
    children: i[o]
  }
);
export {
  m as NavigateButton
};
//# sourceMappingURL=NavigateButton.js.map
