import { jsxs as i, jsx as r } from "react/jsx-runtime";
import { AccordionContent as a } from "./components/Accordion/components/AccordionContent.js";
import { AccordionArrow as e } from "./components/Accordion/components/AccordionArrow.js";
import { AccordionTitle as m } from "./components/Accordion/components/AccordionTitle.js";
import { cn as A } from "./services/helpers.js";
import { AccordionButton as l } from "./components/Accordion/components/AccordionButton.js";
const p = ({ block: c, isOpen: o, textContent: n, title: d, onClick: s }) => /* @__PURE__ */ i(
  t.Layout,
  {
    isOpen: o,
    block: c,
    children: [
      /* @__PURE__ */ r(
        t.Block,
        {
          title: d,
          onClick: s
        }
      ),
      /* @__PURE__ */ r(t.Content, { isOpen: o, children: n })
    ]
  }
), u = ({ onClick: c, title: o }) => /* @__PURE__ */ i(t.Button, { onClick: c, children: [
  /* @__PURE__ */ r(t.Title, { title: o }),
  /* @__PURE__ */ r(t.Arrow, {})
] }), f = ({ block: c, isOpen: o, children: n }) => /* @__PURE__ */ r(
  "div",
  {
    "data-testid": B,
    className: A(c, "accordion", {
      _active: o
    }),
    children: n
  }
), t = Object.assign(p, {
  Content: a,
  Arrow: e,
  Title: m,
  Block: u,
  Layout: f,
  Button: l
}), B = "accordionTestId";
export {
  B as A,
  t as a,
  p as b,
  u as c,
  f as d
};
//# sourceMappingURL=constants-RDWPSVyj.js.map
