import { jsx as e } from "react/jsx-runtime";
import { useRef as i } from "react";
const a = ({ isOpen: c, children: n }) => {
  var o;
  const t = i(null), r = c ? { height: (o = t.current) == null ? void 0 : o.scrollHeight } : { height: 0 };
  return /* @__PURE__ */ e(
    "div",
    {
      style: r,
      className: "accordion__content",
      children: /* @__PURE__ */ e(
        "p",
        {
          className: "accordion__text",
          ref: t,
          children: n
        }
      )
    }
  );
};
export {
  a as AccordionContent
};
//# sourceMappingURL=AccordionContent.js.map
