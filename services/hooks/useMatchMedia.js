import { useState as n, useEffect as r } from "react";
const i = (s) => {
  const [t, a] = n(!1);
  return r(() => {
    const e = window.matchMedia(s);
    e.matches !== t && a(e.matches);
    const c = () => {
      a(e.matches);
    };
    return e.addEventListener("change", c), () => {
      e.removeEventListener("change", c);
    };
  }, [t, s]), t;
};
export {
  i as useMatchMedia
};
//# sourceMappingURL=useMatchMedia.js.map
