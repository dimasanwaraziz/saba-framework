(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[35,79],{1303:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/2.c8691d67.png"},1304:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/6.858a7a6b.png"},1305:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/9.8617df44.png"},1306:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/10.5da4bd6d.png"},1323:function(e,t,a){"use strict";t.a=a.p+"static/media/faq-illustrations.f8c4ea78.svg"},1324:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/12.761057bd.png"},1325:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/11.9d340e5c.png"},1326:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/8.ee1de961.png"},1327:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/3.80eecfc8.png"},1352:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/4.4bfb7963.png"},1353:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/1.6a7d13c0.png"},1354:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/5.b76b05aa.png"},1355:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/7.0fc55608.png"},1389:function(e,t,a){var c={"./1-small.png":641,"./1.png":1353,"./10-small.png":1390,"./10.png":1306,"./11-small.png":646,"./11.png":1325,"./12-small.png":1391,"./12.png":1324,"./2-small.png":1392,"./2.png":1303,"./3-small.png":642,"./3.png":1327,"./4-small.png":1393,"./4.png":1352,"./5-small.png":643,"./5.png":1354,"./6-small.png":1394,"./6.png":1304,"./7-small.png":644,"./7.png":1355,"./8-small.png":1395,"./8.png":1326,"./9-small.png":645,"./9.png":1305,"./avatar-blank.png":88};function n(e){var t=s(e);return a(t)}function s(e){if(!a.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}n.keys=function(){return Object.keys(c)},n.resolve=s,e.exports=n,n.id=1389},1390:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/10-small.ab9b80df.png"},1391:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/12-small.59ec58ce.png"},1392:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/2-small.d95009b5.png"},1393:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/4-small.4a4717ef.png"},1394:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/6-small.cb875cd8.png"},1395:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/8-small.34d2edd5.png"},754:function(e,t,a){"use strict";a.r(t),a.d(t,"getData",(function(){return i})),a.d(t,"getSummaryData",(function(){return d})),a.d(t,"addRole",(function(){return o})),a.d(t,"updateRole",(function(){return u})),a.d(t,"deleteRole",(function(){return m})),a.d(t,"rolesSlice",(function(){return f})),a.d(t,"selectRole",(function(){return p}));var c=a(9),n=a(7),s=a.n(n),r=a(18),l=a(44),i=Object(r.b)("role/getData",function(){var e=Object(c.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.ssoAxiosInterceptor.get("/api/role",{params:t});case 2:return a=e.sent,e.abrupt("return",{data:a.data.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d=Object(r.b)("role/getSummaryData",function(){var e=Object(c.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,l.a.ssoAxiosInterceptor.get("/api/role/summary",{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),o=Object(r.b)("roles/addRole",function(){var e=Object(c.a)(s.a.mark((function e(t,a){var c,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.dispatch,n=a.getState,e.next=3,l.a.ssoAxiosInterceptor.post("/api/role",{role:t});case 3:return e.next=5,c(i(n().roles.params));case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),u=Object(r.b)("roles/updateRole",function(){var e=Object(c.a)(s.a.mark((function e(t,a){var c,n,r,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.id,n=t.name,r=a.dispatch,d=a.getState,e.next=4,l.a.ssoAxiosInterceptor.post("/apps/roles/update-role",{id:c,name:n});case 4:return e.next=6,r(i(d().roles.params));case 6:return e.abrupt("return",{id:c,name:n});case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),m=Object(r.b)("roles/deleteRole",function(){var e=Object(c.a)(s.a.mark((function e(t,a){var c,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.dispatch,n=a.getState,e.next=3,l.a.ssoAxiosInterceptor.delete("/apps/roles/delete",{id:t});case 3:return e.next=5,c(i(n().roles.params));case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),f=Object(r.c)({name:"roles",initialState:{crudTitle:"Roles",statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],selected:null},reducers:{selectRole:function(e,t){null===t.payload?e.selected=null:e.selected=t.payload}},extraReducers:function(e){e.addCase(i.pending,(function(e){e.status="loading",e.isLoading=!0})).addCase(i.fulfilled,(function(e,t){e.status="succeeded",e.isLoading=!1,e.data=t.payload.data})).addCase(i.rejected,(function(e,t){e.status="failed",e.isLoading=!1,e.error=t.error.message})).addCase(d.pending,(function(e){e.statusSummary="loading",e.isLoadingSummary=!0})).addCase(d.fulfilled,(function(e,t){e.statusSummary="succeeded",e.isLoadingSummary=!1,e.dataSummary=t.payload.data})).addCase(d.rejected,(function(e,t){e.statusSummary="failed",e.isLoadingSummary=!1,e.errorSummary=t.error.message}))}}),p=f.actions.selectRole;t.default=f.reducer},784:function(e,t,a){"use strict";a.r(t);var c=a(6),n=a(2),s=a(30),r=a(5),l=a(533),i=a(446),d=a(46),o=a(264),u=a(16),m=a(754),f=a(1323),p=a(81),j=a(0),b=(a(1303).default,a(1324).default,a(1304).default,a(1325).default,a(1352).default,a(1353).default,a(1303).default,a(1354).default,a(1355).default,a(1304).default,a(1305).default,a(1303).default,a(1306).default,a(1326).default,a(1327).default,a(1305).default,a(1324).default,a(1306).default,a(1325).default,a(1306).default,a(1304).default,a(1327).default,a(1326).default,a(1305).default,["User Management","Content Management","Disputes Management","Database Management","Financial Management","Reporting","API Control","Repository Management","Payroll"]);t.default=function(){var e=Object(p.a)().t,t=Object(n.useState)(!1),x=Object(c.a)(t,2),g=x[0],h=x[1],O=Object(n.useState)("".concat(e("Add New"))),y=Object(c.a)(O,2),N=y[0],v=y[1],w=Object(u.b)(),S=Object(u.c)((function(e){return e.roles})),k=Object(n.useState)([]),R=Object(c.a)(k,2),A=(R[0],R[1]),C=Object(d.e)({defaultValues:{roleName:""}}),D=C.reset,E=(C.control,C.setError),L=C.setValue,I=C.handleSubmit;C.formState.errors;return Object(n.useEffect)((function(){0!==S.dataSummary.length||S.isLoadingSummary||w(Object(m.getSummaryData)({})).then((function(e){A(e.payload.data)}))}),[w,S.dataSummary.length]),Object(j.jsxs)(n.Fragment,{children:[Object(j.jsxs)(r.U,{children:[S.dataSummary.map((function(t,c){return Object(j.jsx)(r.t,{xl:4,md:6,children:Object(j.jsx)(r.l,{children:Object(j.jsxs)(r.m,{children:[Object(j.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(j.jsx)("span",{children:"Total ".concat(t.totalUsers," users")}),Object(j.jsx)(o.a,{data:t.users.map((function(e){return{size:e.size,title:e.title,img:a(1389)("./".concat(e.img)).default}}))})]}),Object(j.jsxs)("div",{className:"d-flex justify-content-between align-items-end mt-1 pt-25",children:[Object(j.jsxs)("div",{className:"role-heading",children:[Object(j.jsx)("h4",{className:"fw-bolder",children:t.title}),Object(j.jsx)(s.b,{to:"/",className:"role-edit-modal",onClick:function(t){t.preventDefault(),v("".concat(e("Edit"))),h(!0)},children:Object(j.jsxs)("small",{className:"fw-bolder",children:[e("Edit")," ",e("Role")]})})]}),Object(j.jsx)(s.b,{to:"",className:"text-body",onClick:function(e){return e.preventDefault()},children:Object(j.jsx)(l.a,{className:"font-medium-5"})})]})]})})},c)})),Object(j.jsx)(r.t,{xl:4,md:6,children:Object(j.jsx)(r.l,{children:Object(j.jsxs)(r.U,{children:[Object(j.jsx)(r.t,{sm:5,children:Object(j.jsx)("div",{className:"d-flex align-items-end justify-content-center h-100",children:Object(j.jsx)("img",{className:"img-fluid mt-2",src:f.a,alt:"Image",width:85})})}),Object(j.jsx)(r.t,{sm:7,children:Object(j.jsxs)(r.m,{className:"text-sm-end text-center ps-sm-0",children:[Object(j.jsx)(r.i,{color:"primary",className:"text-nowrap mb-1",onClick:function(){v("".concat(e("Add New"))),h(!0)},children:e("Add New Role")}),Object(j.jsx)("p",{className:"mb-0",children:e("Add a new role, if it does not exist")})]})})]})})})]}),Object(j.jsxs)(r.G,{isOpen:g,onClosed:function(){v("".concat(e("Add New"))),L("roleName")},toggle:function(){return h(!g)},className:"modal-dialog-centered modal-lg",children:[Object(j.jsx)(r.J,{className:"bg-transparent",toggle:function(){return h(!g)}}),Object(j.jsxs)(r.H,{className:"px-5 pb-5",children:[Object(j.jsxs)("div",{className:"text-center mb-4",children:[Object(j.jsxs)("h1",{children:[N," ",e("Role")]}),Object(j.jsx)("p",{children:e("Set role permissions")})]}),Object(j.jsxs)(r.U,{tag:"form",onSubmit:I((function(e){e.roleName.length?h(!1):E("roleName",{type:"manual"})})),children:[Object(j.jsxs)(r.t,{xs:12,children:[Object(j.jsx)("h4",{className:"mt-2 pt-50",children:e("Role Permissions")}),Object(j.jsx)(r.Y,{className:"table-flush-spacing",responsive:!0,children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{className:"text-nowrap fw-bolder",children:[Object(j.jsxs)("span",{className:"me-50",children:[" ",e("Administrator Access")]}),Object(j.jsx)(i.a,{size:14,id:"info-tooltip"}),Object(j.jsx)(r.cb,{placement:"top",target:"info-tooltip",children:e("Allows a full access to the system")})]}),Object(j.jsx)("td",{children:Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)(r.B,{type:"checkbox",id:"select-all"}),Object(j.jsx)(r.E,{className:"form-check-label",for:"select-all",children:e("Select All")})]})})]}),b.map((function(t,a){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text-nowrap fw-bolder",children:t}),Object(j.jsx)("td",{children:Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(j.jsx)(r.B,{type:"checkbox",id:"read-".concat(t)}),Object(j.jsx)(r.E,{className:"form-check-label",for:"read-".concat(t),children:e("Read")})]}),Object(j.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(j.jsx)(r.B,{type:"checkbox",id:"write-".concat(t)}),Object(j.jsx)(r.E,{className:"form-check-label",for:"write-".concat(t),children:e("Write")})]}),Object(j.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(j.jsx)(r.B,{type:"checkbox",id:"create-".concat(t)}),Object(j.jsx)(r.E,{className:"form-check-label",for:"create-".concat(t),children:e("Create")})]}),Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)(r.B,{type:"checkbox",id:"delete-".concat(t)}),Object(j.jsx)(r.E,{className:"form-check-label",for:"delete-".concat(t),children:e("Delete")})]})]})})]},a)}))]})})]}),Object(j.jsxs)(r.t,{className:"text-center mt-2",xs:12,children:[Object(j.jsx)(r.i,{type:"submit",color:"primary",className:"me-1",children:e("Submit")}),Object(j.jsx)(r.i,{type:"reset",outline:!0,onClick:function(){h(!1),D({roleName:""})},children:e("Discard")})]})]})]})]})]})}}}]);
//# sourceMappingURL=35.d778cd7f.chunk.js.map