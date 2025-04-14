"use strict";const t=require("react/jsx-runtime"),u=require("./components/Checkbox/components/CheckboxIndicator.js"),h=require("./services/helpers.js"),r=({id:c,block:e,...o})=>t.jsxs(s.Block,{htmlFor:c,block:e,children:[t.jsx(s.Input,{...o,id:c}),t.jsx(s.Indicator,{})]}),x=({children:c,block:e,htmlFor:o="checkbox"})=>{const n=h.cn(e,"checkbox");return t.jsx("label",{"data-testid":k,className:n,htmlFor:o,children:c})},a=({onChange:c,id:e="checkbox",checked:o=!1,disabled:n=!1,name:b="checkbox",hasError:l=!1})=>{const I=h.cn("","checkbox__input",{error:l}),i=_=>{c&&c(_.target.checked)};return t.jsx("input",{"data-testid":C,name:b,disabled:n,className:I,checked:o,onChange:i,id:e,type:"checkbox"})},s=Object.assign(r,{Block:x,Indicator:u.CheckboxIndicator,Input:a}),k="checkboxTestId",C="checkboxTestInputId";exports.CHECKBOX_TEST_ID=k;exports.CHECKBOX_TEST_INPUT_ID=C;exports.Checkbox=s;exports.CheckboxBlock=x;exports.CheckboxComponent=r;exports.CheckboxInput=a;
//# sourceMappingURL=constants-en7qMDO7.cjs.map
