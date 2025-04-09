import { jsx as t } from "react/jsx-runtime";
import { NAVIGATE_BUTTON_TEST_ID as a } from "./constants.js";
import { Icons as r } from "../../services/icons.js";
const e = { left: t(r.ArrowNarrowLeft, {}), right: t(r.ArrowNarrowRight, {}) }, m = ({ placement: o }) => t("button", { "data-testid": a, type: "button", className: "slider-navigate__button", children: e[o] });
export {
  m as NavigateButton
};
//# sourceMappingURL=NavigateButton.js.map
