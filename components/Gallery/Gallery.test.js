import { jsx as t } from "react/jsx-runtime";
import { r as m, s as a } from "../../react.esm-DeOc63_l.js";
import "../../setupTests.js";
import { Gallery as s } from "./Gallery.js";
import { imagesMock as o } from "../../services/mocks.js";
import { GALLERY_TEST_ID as i } from "./constants.js";
jest.mock("react-image-gallery", () => ({ items: e }) => /* @__PURE__ */ t("div", { "data-testid": i, children: e.map((r, l) => /* @__PURE__ */ t(
  "img",
  {
    src: r.original,
    alt: "image-gallery"
  },
  l
)) }));
describe("Gallery component", () => {
  test("renders Gallery component", () => {
    const { container: e } = m(/* @__PURE__ */ t(s, { images: o })), r = a.getByTestId(i);
    expect(r).toBeInTheDocument(), expect(e).toMatchSnapshot();
  }), test("renders all mock images", () => {
    m(/* @__PURE__ */ t(s, { images: o }));
    const e = a.getAllByRole("img");
    expect(e).toHaveLength(o.length);
  });
});
//# sourceMappingURL=Gallery.test.js.map
