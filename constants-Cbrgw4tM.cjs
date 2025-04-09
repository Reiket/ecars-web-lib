"use strict";const t=require("react/jsx-runtime"),C=require("./components/Checkbox/components/CheckboxIndicator.js"),h=require("./services/helpers.js"),s=({id:e,block:c,...o})=>t.jsxs(n.Block,{htmlFor:e,block:c,children:[t.jsx(n.Input,{...o,id:e}),t.jsx(n.Indicator,{})]}),d=({children:e,block:c,htmlFor:o="checkbox"})=>{const r=h.cn(c,"checkbox");return t.jsx("label",{"data-testid":a,className:r,htmlFor:o,children:e})},k=({onChange:e,id:c="checkbox",checked:o=!1,disabled:r=!1,name:b="checkbox",hasError:x=!1})=>{const l=h.cn("","checkbox__input",{error:x});return t.jsx("input",{"data-testid":i,name:b,disabled:r,className:l,checked:o,onChange:u=>{e&&e(u.target.checked)},id:c,type:"checkbox"})},n=Object.assign(s,{Block:d,Indicator:C.CheckboxIndicator,Input:k}),a="checkboxTestId",i="checkboxTestInputId";exports.CHECKBOX_TEST_ID=a,exports.CHECKBOX_TEST_INPUT_ID=i,exports.Checkbox=n,exports.CheckboxBlock=d,exports.CheckboxComponent=s,exports.CheckboxInput=k;
//# sourceMappingURL=constants-Cbrgw4tM.cjs.map
