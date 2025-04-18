import { useRef as s, useEffect as u } from "react";
const d = (t) => {
  const e = s(null);
  return u(() => {
    const n = (r) => {
      const o = r.target;
      e.current && o instanceof Node && !e.current.contains(o) && t(!1);
    };
    return document.addEventListener("mousedown", n), () => {
      document.removeEventListener("mousedown", n);
    };
  }, [e, t]), e;
};
export {
  d as useClickOutside
};
//# sourceMappingURL=useClickOutside.js.map
