"use strict";(globalThis.webpackChunkreact_6_hw_29||=[]).push([[399],{399(e,r,o){o.r(r),o.d(r,{ContactForm:()=>f});var t=o(43),n=o(3),a=o(580),s=o(820);const c=s.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  border-radius: 16px;
  background: #182033;
`,i=s.Ay.h2`
  margin: 0 0 5px;
  color: #fff;
  font-size: 19px;
`,d=s.Ay.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: #aab2c3;
  font-size: 12px;
`,l=s.Ay.input`
  width: 100%;
  padding: 11px 12px;
  border: 1px solid #303a50;
  border-radius: 10px;
  outline: none;
  color: #fff;
  background: #101622;

  &:focus { border-color: #6366f1; }
`,p=s.Ay.p`
  margin: -2px 0 0;
  color: #fb7185;
  font-size: 11px;
`,u=s.Ay.button`
  padding: 11px 14px;
  border: 0;
  border-radius: 10px;
  background: #6366f1;
  color: white;
  font-weight: 700;
  cursor: pointer;

  &:hover { background: #5558dc; }
`;var x=o(579);const f=()=>{const[e,r]=(0,t.useState)(""),[o,s]=(0,t.useState)(""),[f,b]=(0,t.useState)(""),h=(0,n.d4)(e=>e.contacts.contacts),g=(0,n.wA)();return(0,x.jsxs)(c,{onSubmit:t=>{t.preventDefault();const n=e.trim(),c=o.trim();if(!n||!c)return void b("\u0417\u0430\u043f\u043e\u0432\u043d\u0438 \u0456\u043c'\u044f \u0442\u0430 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443.");h.some(e=>e.name.trim().toLowerCase()===n.toLowerCase()||e.number.replace(/\D/g,"")===c.replace(/\D/g,""))?b("\u0422\u0430\u043a\u0438\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0430\u0431\u043e \u043d\u043e\u043c\u0435\u0440 \u0432\u0436\u0435 \u0456\u0441\u043d\u0443\u0454."):(g((0,a.IP)({id:Date.now(),name:n,number:c})),r(""),s(""),b(""))},children:[(0,x.jsxs)(i,{children:[(0,x.jsx)("span",{children:"\uff0b"}),"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"]}),(0,x.jsxs)(d,{children:["\u0406\u043c'\u044f",(0,x.jsx)(l,{type:"text",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u041e\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",value:e,onChange:e=>{r(e.target.value),b("")}})]}),(0,x.jsxs)(d,{children:["\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443",(0,x.jsx)(l,{type:"tel",placeholder:"+380 67 123 45 67",value:o,onChange:e=>{s(e.target.value),b("")}})]}),f&&(0,x.jsx)(p,{children:f}),(0,x.jsx)(u,{type:"submit",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})}}}]);
//# sourceMappingURL=399.78144aae.chunk.js.map