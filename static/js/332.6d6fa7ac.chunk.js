"use strict";(globalThis.webpackChunkreact_6_hw_29||=[]).push([[332],{332(e,n,i){i.r(n),i.d(n,{ContactList:()=>j});var t=i(3),r=i(580),o=i(820);const s=o.Ay.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid #29334a;
  border-radius: 12px;
  background: #111827;
  transition: .15s ease;

  &:hover { border-color: #465271; }
`,d=o.Ay.div`
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  border-radius: 12px;
  background: #30378a;
  color: #c7c9ff;
  font-size: 12px;
  font-weight: 700;
`,l=o.Ay.div` min-width: 0; flex: 1; `,a=o.Ay.div`
  overflow: hidden;
  color: #f3f4f8;
  font-size: 14px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
`,c=o.Ay.div`
  margin-top: 3px;
  color: #818a9d;
  font-size: 12px;
`,p=o.Ay.button`
  width: 32px;
  height: 32px;
  border: 1px solid #713747;
  border-radius: 9px;
  background: transparent;
  color: #fb7185;
  cursor: pointer;

  &:hover { background: #713747; color: white; }
`;var x=i(579);const h=e=>{let{contact:n}=e;const i=(0,t.wA)();return(0,x.jsxs)(s,{children:[(0,x.jsx)(d,{children:(o=n.name,o.split(" ").filter(Boolean).slice(0,2).map(e=>e[0].toUpperCase()).join("")||"?")}),(0,x.jsxs)(l,{children:[(0,x.jsx)(a,{children:n.name}),(0,x.jsx)(c,{children:n.number})]}),(0,x.jsx)(p,{type:"button","aria-label":`\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 ${n.name}`,title:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442",onClick:()=>i((0,r.MO)(n.id)),children:"\xd7"})]});var o},g=o.Ay.section`
  min-height: 400px;
  padding: 20px;
  border-radius: 16px;
  background: #182033;
`,f=o.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 15px;
`,b=o.Ay.h2`
  margin: 0;
  color: #fff;
  font-size: 20px;
`,u=(o.Ay.p`
  margin: 4px 0 0;
  color: #818a9d;
  font-size: 12px;
`,o.Ay.ul`
  display: grid;
  gap: 9px;
  padding: 0;
  margin: 0;
  list-style: none;
`),m=o.Ay.button`
  padding: 8px 11px;
  border: 1px solid #713747;
  border-radius: 9px;
  background: transparent;
  color: #fb7185;
  font-size: 11px;
  cursor: pointer;

  &:hover { background: #713747; color: white; }
`,y=o.Ay.div`
  display: flex;
  min-height: 280px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #818a9d;

  div { font-size: 42px; margin-bottom: 10px; }
  strong { color: #e5e7ef; font-size: 16px; }
  span { max-width: 320px; margin-top: 6px; font-size: 12px; }
`,j=()=>{const e=(0,t.wA)(),n=(0,t.d4)(e=>e.contacts.contacts),i=(0,t.d4)(e=>e.contacts.filter),o=n.filter(e=>e.name.toLowerCase().includes(i.toLowerCase().trim()));return(0,x.jsxs)(g,{children:[(0,x.jsxs)(f,{children:[(0,x.jsxs)("div",{children:[(0,x.jsx)(b,{children:"\u041c\u043e\u0457 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"}),(0,x.jsx)("p",{style:{margin:"6px 0 0",color:"#999caf",fontSize:12},children:i?`\u0417\u043d\u0430\u0439\u0434\u0435\u043d\u043e: ${o.length}`:`${n.length} ${1===n.length?"\u043a\u043e\u043d\u0442\u0430\u043a\u0442":"\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432"}`})]}),n.length>0&&(0,x.jsx)(m,{type:"button",onClick:()=>{window.confirm("\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0432\u0441\u0456 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0438?")&&e((0,r.Wg)())},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0432\u0441\u0435"})]}),o.length>0?(0,x.jsx)(u,{children:o.map(e=>(0,x.jsx)(h,{contact:e},e.id))}):(0,x.jsxs)(y,{children:[(0,x.jsx)("div",{children:0===n.length?"\u2661":"\u2315"}),(0,x.jsx)("strong",{children:0===n.length?"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432 \u043f\u043e\u043a\u0438 \u043d\u0435\u043c\u0430\u0454":"\u041d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),(0,x.jsx)("span",{children:0===n.length?"\u0414\u043e\u0434\u0430\u0439 \u0441\u0432\u0456\u0439 \u043f\u0435\u0440\u0448\u0438\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443 \u0444\u043e\u0440\u043c\u0456 \u0437\u043b\u0456\u0432\u0430.":"\u0421\u043f\u0440\u043e\u0431\u0443\u0439 \u0437\u043c\u0456\u043d\u0438\u0442\u0438 \u043f\u043e\u0448\u0443\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0442."})]})]})}}}]);
//# sourceMappingURL=332.6d6fa7ac.chunk.js.map