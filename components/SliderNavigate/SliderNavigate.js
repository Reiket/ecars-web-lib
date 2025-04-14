import { jsx as r } from "react/jsx-runtime";
import { NavigateButton as a } from "./NavigateButton.js";
import { SLIDER_NAVIGATE_TEST_ID as i, NAVIGATE_BUTTON_PLACEMENT as e } from "./constants.js";
const N = () => /* @__PURE__ */ r(
  "div",
  {
    "data-testid": i,
    className: "slider-navigate",
    children: Object.values(e).map((t) => /* @__PURE__ */ r(
      a,
      {
        placement: t
      },
      t
    ))
  }
);
export {
  N as SliderNavigate
};
//# sourceMappingURL=SliderNavigate.js.map
