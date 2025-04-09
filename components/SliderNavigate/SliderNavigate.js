import { jsx as t } from "react/jsx-runtime";
import { NavigateButton as e } from "./NavigateButton.js";
import { SLIDER_NAVIGATE_TEST_ID as s, NAVIGATE_BUTTON_PLACEMENT as i } from "./constants.js";
const N = () => t("div", { "data-testid": s, className: "slider-navigate", children: Object.values(i).map((a) => t(e, { placement: a }, a)) });
export {
  N as SliderNavigate
};
//# sourceMappingURL=SliderNavigate.js.map
