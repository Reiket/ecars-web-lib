import { jsx as a } from "react/jsx-runtime";
import { NavigateButton as i } from "./components/NavigateButton.js";
import { SLIDER_NAVIGATE_TEST_ID as r, NAVIGATE_BUTTON_PLACEMENT as e } from "./constants.js";
const N = () => /* @__PURE__ */ a(
  "div",
  {
    "data-testid": r,
    className: "slider-navigate",
    children: Object.values(e).map((t) => /* @__PURE__ */ a(
      i,
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
