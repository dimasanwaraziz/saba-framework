(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[137],{1274:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/avatar-s-7.ba3f6823.jpg"},798:function(e,a,t){"use strict";t.r(a);var l=t(4),i=t(6),c=t(36),n=(t(264),t(5)),s=t(16),d=t(81),r=(t(148),t(2)),o=t(64),j=t(47),m=t(65),b=t.n(m),u=(t(146),t(102),t(14)),v=t(99),p=t(25),h=t(34),O=t(56),x=t(223),g=t.n(x),f=(t(1274),t(0)),N={pagination:{clickable:!0},autoplay:{delay:1e4,disableOnInteraction:!1}};a.default=function(){var e,a,m,x,y,D,L,w,k=Object(d.a)().t,S=Object(s.c)((function(e){return e.dynamicStore})),_=(Object(s.c)((function(e){return e.dynamic_temp_state})),Object(s.b)()),R=Object(r.useContext)(h.a).colors,C=Object(r.useState)(!1),E=Object(i.a)(C,2),q=(E[0],E[1],Object(r.useState)(!1)),T=Object(i.a)(q,2),I=T[0],U=T[1],W=Object(r.useState)(!1),A=Object(i.a)(W,2),P=A[0],z=A[1],H=Object(r.useState)("Please Wait"),J=Object(i.a)(H,2),V=J[0],Y=J[1],B="Leave_needApproval",F="Leave/await";Object(r.useEffect)((function(){var e,a,t;S.pageData[B]&&(0!==(null===(e=S.pageData[B])||void 0===e||null===(a=e.data)||void 0===a?void 0:a.length)||null!==(t=S.pageData[B])&&void 0!==t&&t.isLoading)||_(Object(u.i)({storeName:B,endpointName:F,baseUrl:"hr"}))}),[]);var G=function(e){var a,t,l,i,c="";if(null!==e&&void 0!==e&&null!==(a=e.payload)&&void 0!==a&&null!==(t=a.error)&&void 0!==t&&t.errors){var n,s,d=null===e||void 0===e||null===(n=e.payload)||void 0===n||null===(s=n.error)||void 0===s?void 0:s.errors;for(var r in null===e||void 0===e||null===(o=e.payload)||void 0===o||null===(j=o.error)||void 0===j?void 0:j.errors){var o,j;c="".concat(c," - ").concat(d[r],"\n")}}return p.b.error("".concat(null===(l=e.payload)||void 0===l||null===(i=l.error)||void 0===i?void 0:i.message," \n \n ").concat(c),{style:{padding:"16px",color:R.danger.main,border:"1px solid ".concat(R.danger.main)},iconTheme:{primary:R.danger.main}})},K=function(e){Y("Confirming Leave Request"),e.storeName=B,e.endpointName="Leave/".concat(e.id),e.baseUrl="hr",delete e.id,_(Object(u.q)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?_(Object(u.i)({storeName:B,endpointName:F,baseUrl:"hr"})).then((function(e){p.b.success("".concat(k("Successfully Confirming Leave Request"),"}"),{style:{padding:"16px",color:R.success.main,border:"1px solid ".concat(R.success.main)},iconTheme:{primary:R.success.main}})})).then((function(e){U(!1),z(!1)})).then((function(e){_(Object(u.i)({storeName:"hr_leave",endpointName:"Leave",baseUrl:"hr"})),setTimeout((function(){_(Object(O.getDataList)({}))}),8e3)})):"rejected"===e.meta.requestStatus&&G(e)})).catch((function(e){U(!1),G(e)}))},M={lastDay:"[Yesterday]",sameDay:"[Today]",nextDay:"[Tomorrow]",lastWeek:"[last] dddd",nextWeek:"dddd",sameElse:"L"};return null!==(e=S.pageData[B])&&void 0!==e&&e.isLoading?Object(f.jsx)(n.t,{lg:"12",xs:"12",children:Object(f.jsxs)(n.l,{style:{minHeight:"200px"},children:[Object(f.jsx)(n.o,{children:Object(f.jsxs)("div",{className:"d-flex align-items-center",children:[Object(f.jsx)(g.a,{className:"user-timeline-title-icon me-1"}),Object(f.jsx)(n.s,{tag:"h4",children:k("Leave Need Approval")})]})}),Object(f.jsx)(o.a,{blocking:!0,loader:Object(f.jsx)(j.b,{}),children:Object(f.jsx)(n.m,{})})]})}):(null===(a=S.pageData[B])||void 0===a||null===(m=a.data)||void 0===m?void 0:m.length)>0?Object(f.jsx)(n.t,{lg:"12",xs:"12",children:Object(f.jsxs)(n.l,{children:[Object(f.jsx)(n.o,{children:Object(f.jsxs)("div",{className:"d-flex align-items-center",children:[Object(f.jsx)(g.a,{className:"user-timeline-title-icon me-1"}),Object(f.jsx)(n.s,{tag:"h4",children:k("Leave Need Approval")}),(null===(x=S.pageData[B])||void 0===x||null===(y=x.data)||void 0===y?void 0:y.length)>1&&Object(f.jsx)(n.f,{className:"ms-1",tag:"div",color:"danger",pill:!0,children:null===(D=S.pageData[B])||void 0===D||null===(L=D.data)||void 0===L?void 0:L.length})]})}),Object(f.jsx)(n.m,{className:"px-0 pb-0",children:Object(f.jsx)(v.a,Object(l.a)(Object(l.a)({},N),{},{children:null===(w=S.pageData[B])||void 0===w?void 0:w.data.map((function(e){var a;return Object(f.jsx)(v.b,{children:Object(f.jsx)(n.l,{className:"card-apply-job mb-0",children:Object(f.jsxs)(n.m,{children:[Object(f.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-1",children:[Object(f.jsxs)("div",{className:"d-flex align-items-center",children:[Object(f.jsx)(c.a,{imgClassName:"rounded",className:"me-75",img:null!==(a=null===e||void 0===e?void 0:e.Employee_PhotoPath)&&void 0!==a?a:t(88).default,imgHeight:"42",imgWidth:"42"}),Object(f.jsxs)("div",{className:"my-auto",children:[Object(f.jsx)("h6",{className:"mb-0",children:"".concat(null===e||void 0===e?void 0:e.Employee_Name)}),Object(f.jsx)("small",{className:"text-muted",children:null===e||void 0===e?void 0:e.Employee_EmployeeIdNumber})]})]}),Object(f.jsx)(n.f,{color:"light-primary",pill:!0,children:null===e||void 0===e?void 0:e.LeaveName})]}),Object(f.jsx)("h5",{className:"apply-job-title",children:k("New request for leave from staff that needs to be confirmed.")}),Object(f.jsxs)(n.r,{className:"mb-2",children:[k("Reason")," : ",null===e||void 0===e?void 0:e.Reason,"."]}),Object(f.jsx)("div",{className:"apply-job-package bg-light-primary rounded",children:Object(f.jsxs)("div",{children:[Object(f.jsx)("sup",{className:"text-body",children:Object(f.jsxs)("small",{children:[k("period")," "]})}),Object(f.jsxs)("h2",{className:"d-inline me-25",children:[Object(f.jsx)(b.a,{calendar:M,children:null===e||void 0===e?void 0:e.StartDate})," ",Object(f.jsx)("sub",{className:"text-body",children:Object(f.jsxs)("small",{children:[" ",k("until")]})})," ",Object(f.jsx)(b.a,{calendar:M,children:null===e||void 0===e?void 0:e.EndDate})]})]})}),Object(f.jsxs)("div",{className:"text-end",children:[!I&&(P?Object(f.jsxs)(n.i.Ripple,{color:"flat-danger me-1",children:[Object(f.jsx)(n.V,{color:"white",size:"sm",type:"grow"}),Object(f.jsx)("span",{className:"ms-50",children:V})]}):Object(f.jsx)(n.i.Ripple,{color:"flat-danger me-1",onClick:function(a){a.preventDefault(),z(!0),K({id:null===e||void 0===e?void 0:e.id,Id_LeaveState:"3"})},children:k("Decline")})),!P&&(I?Object(f.jsxs)(n.i.Ripple,{color:"gradient-primary",children:[Object(f.jsx)(n.V,{color:"white",size:"sm",type:"grow"}),Object(f.jsx)("span",{className:"ms-50",children:V})]}):Object(f.jsx)(n.i.Ripple,{onClick:function(a){a.preventDefault(),U(!0),K({id:null===e||void 0===e?void 0:e.id,Id_LeaveState:"2"})},color:"gradient-primary",children:k("Confirm")}))]})]})})},"swiper_".concat(e.id))}))}))})]})}):null}}}]);
//# sourceMappingURL=137.911e18d3.chunk.js.map