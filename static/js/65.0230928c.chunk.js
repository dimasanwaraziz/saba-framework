(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[65,24,132],{257:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(4),c=a(6),s=a(2),i=a(33),d=a(30),o=a(24),u=(a(169),a(5)),l=a(85),p=a(63),f=(a(480),a(114),a(34)),j=(a(13),a(135),a(145),a(1258),a(46),a(47)),m=a(358),b=a(16),O=a(754),g=a(660),v=a(0);t.default=function(){var e=Object(l.a)().t,t=Object(i.g)(),h=t.id,x=t.pageType,D=Object(b.b)(),y=Object(b.c)((function(e){return e[m.storeName]})),S=Object(s.useContext)(f.a).colors,C=Object(s.useState)("Please Wait"),L=Object(c.a)(C,2),N=(L[0],L[1]),w=Object(i.f)(),A=Object(s.useState)("1"),k=Object(c.a)(A,2),E=k[0],T=k[1],_=(Object(b.c)((function(e){return e})),Object(s.useState)({})),M=Object(c.a)(_,2),V=M[0],I=M[1];function P(e){return Object.keys(e).sort().reduce((function(t,a){return t[a]=e[a],t}),{})}var W=function(t){if(function(e){if("edit"===x){var t=Object(r.a)({},P(y.selectedData));for(var a in delete t.id,t)a in e||delete t[a];return JSON.stringify(P(t))!==JSON.stringify(P(e))}return!0}(t))if(Object.values(t).every((function(e){return null!==e&&""!==e})))N("".concat(e("Updating")," ").concat(e(m.pageTitle)," ").concat(e("Detail")," Data")),D(Object(m.putData)(t)).then((function(t){"fulfilled"===t.meta.requestStatus?(w(-1),o.b.success("".concat(e("Successfully Updated")," ").concat(e(m.pageTitle)),{style:{padding:"16px",color:S.success.main,border:"1px solid ".concat(S.success.main)},iconTheme:{primary:S.success.main}})):"rejected"===t.meta.requestStatus&&o.b.error(t.payload.message,{style:{padding:"16px",color:S.danger.main,border:"1px solid ".concat(S.danger.main)},iconTheme:{primary:S.danger.main}})}));else for(var a in t){var n;0===(null===(n=t[a])||void 0===n?void 0:n.length)&&setError(a,{type:"manual"})}else Object(o.b)("".concat(e("You haven't changed anything")),{icon:"\ud83d\udc4f"})},B=function(t){if(Object.values(t).every((function(e){return null!==e&&""!==e})))N("".concat(e("Creating a New ".concat(m.pageTitle)))),D(Object(m.postData)(t)).then((function(t){"fulfilled"===t.meta.requestStatus?(w(-1),o.b.success("".concat(e("Successfully Created")," ").concat(e(m.pageTitle)),{style:{padding:"16px",color:S.success.main,border:"1px solid ".concat(S.success.main)},iconTheme:{primary:S.success.main}})):"rejected"===t.meta.requestStatus&&o.b.error(t.payload.message,{style:{padding:"16px",color:S.danger.main,border:"1px solid ".concat(S.danger.main)},iconTheme:{primary:S.danger.main}})}));else for(var a in t){var n;null!==t[a]&&0===(null===(n=t[a])||void 0===n?void 0:n.length)&&setError(a,{type:"manual"})}};function F(){return D(Object(m.resetSelectedData)()),w(-1)}return Object(s.useEffect)((function(){var e;if("edit"===x&&!y.isLoadingDetail&&(!y.selectedData||(null===(e=y.selectedData)||void 0===e?void 0:e.id)!==parseInt(h))){D(Object(m.getDataById)(h)).then((function(e){"rejected"===e.meta.requestStatus&&o.b.error(e.payload.message,{style:{padding:"16px",color:S.danger.main,border:"1px solid ".concat(S.danger.main)},iconTheme:{primary:S.danger.main}})}));for(var t={},r=m.extraCrud,c=function(e){var c=r[e].crudName,i=(r[e].crudLabel,r[e].crudName),d=Object(s.lazy)((function(){return a(1262)("./".concat(i))}));t["".concat(i,"_comp")]=Object(v.jsx)(s.Fragment,{children:Object(v.jsx)(d,{lookupMode:!0,lookupMode_defaultFilter:Object(n.a)({},"filter_".concat(m.storeName.replaceAll("apps_","id_")),parseInt(h)),lookupMode_fieldName:c,lookupMode_dropdown:!1,lookupMode_isMulti:null,lookupMode_onChange:null,lookupMode_defaultValue:null,lookupMode_isM2MDefValFromGrid:null},"extraCrud_".concat(c))})},i=0;i<r.length;i++)c(i);I(t)}}),[D,y.selectedData]),"edit"===x?y.isLoadingDetail?Object(v.jsx)(s.Fragment,{children:Object(v.jsx)("div",{className:"app-user-view",children:Object(v.jsx)(p.a,{className:"mt-5",blocking:y.isLoadingDetail,loader:Object(v.jsx)(j.b,{})})})}):null!==y.selectedData&&void 0!==y.selectedData?Object(v.jsx)("div",{className:"app-user-view",children:Object(v.jsxs)(u.S,{children:[Object(v.jsx)(u.t,{xl:"5",lg:"6",xs:{order:1},md:{order:0,size:6},children:Object(v.jsxs)(u.l,{children:[Object(v.jsx)(u.o,{children:Object(v.jsxs)("h2",{children:[e("Edit")," ",e(m.pageTitle)]})}),Object(v.jsx)(u.m,{children:Object(v.jsx)(O.default,{formState:"edit",updateDataToApi:W,postDataToApi:B,handleReset:F})})]})}),Object(v.jsxs)(u.t,{xl:"7",lg:"7",xs:{order:0},md:{order:1,size:7},children:[Object(v.jsx)(u.K,{pills:!0,className:"mb-2",children:m.extraCrud.map((function(t,a){t.crudName;return Object(v.jsx)(u.L,{children:Object(v.jsxs)(u.M,{active:E==="".concat(a+1),onClick:function(){return e="".concat(a+1),void(E!==e&&T(e));var e},children:[Object(v.jsx)(g.a,{className:"font-medium-3 me-50"}),Object(v.jsx)("span",{className:"fw-bold",children:e(t.crudLabel)})]})},"navItem_".concat(a+1))}))}),Object(v.jsx)(u.U,{activeTab:E,children:m.extraCrud.map((function(t,a){var n=t.crudName;return Object(v.jsx)(u.V,{tabId:"".concat(a+1),children:Object(v.jsxs)(u.l,{children:[t.crudDescription&&Object(v.jsx)(u.o,{children:Object(v.jsx)(u.s,{tag:"h4",children:e(t.crudDescription)})}),Object(v.jsx)(u.m,{className:"pt-1",children:V["".concat(n,"_comp")]})]})},"tabPane_".concat(a+1))}))})]})]})}):Object(v.jsxs)(u.e,{color:"danger",children:[Object(v.jsx)("h4",{className:"alert-heading",children:e("User not found")}),Object(v.jsxs)("div",{className:"alert-body",children:[e("User with id"),": ",h," ",e("doesn't exist. Check list of all Users"),":"," ",Object(v.jsx)(d.b,{to:"/apps/user/list",children:e("Users List")})]})]}):Object(v.jsx)("div",{className:"app-user-view",children:Object(v.jsx)(u.S,{children:Object(v.jsx)(u.t,{xl:"12",lg:"12",xs:{order:1},md:{order:0,size:5},children:Object(v.jsxs)(u.l,{children:[Object(v.jsx)(u.o,{children:Object(v.jsxs)("h2",{children:[e("Add")," ",e(m.pageTitle)]})}),Object(v.jsx)(u.m,{children:Object(v.jsx)(O.default,{formState:"add",updateDataToApi:W,postDataToApi:B,handleReset:F})})]})})})})}},358:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return o})),a.d(t,"storeName",(function(){return u})),a.d(t,"endpointName",(function(){return l})),a.d(t,"serverSideGrid",(function(){return p})),a.d(t,"detailFromGrid",(function(){return f})),a.d(t,"getAlwaysGrid",(function(){return j})),a.d(t,"getApiAfterPut",(function(){return m})),a.d(t,"getApiAfterPost",(function(){return b})),a.d(t,"getApiAfterDelete",(function(){return O})),a.d(t,"getApiSummaryData",(function(){return g})),a.d(t,"detailPage",(function(){return v})),a.d(t,"deleteSelection",(function(){return h})),a.d(t,"dynamicColumns",(function(){return x})),a.d(t,"dynamicColumnsFilter",(function(){return D})),a.d(t,"dynamicForm",(function(){return y})),a.d(t,"extraCrud",(function(){return S})),a.d(t,"getSummaryData",(function(){return C})),a.d(t,"getDataList",(function(){return L})),a.d(t,"getDataById",(function(){return N})),a.d(t,"resetSelectedData",(function(){return w})),a.d(t,"postData",(function(){return A})),a.d(t,"putData",(function(){return k})),a.d(t,"deleteData",(function(){return E})),a.d(t,"deleteSelectedRowData",(function(){return T})),a.d(t,"setDataById",(function(){return _})),a.d(t,"StoreSlice",(function(){return M}));var n=a(9),r=a(7),c=a.n(r),s=a(18),i=a(56),d=a(44).a.ssoAxiosInterceptor,o="Permission",u="apps_permission",l="api/permission",p=!0,f=!0,j=!1,m=!0,b=!0,O=!0,g=!1,v=!0,h=!1,x=[],D=[{filterLabel:"Role",fieldName:"id_role"}],y=[],S=[{crudName:"permission_menu",crudLabel:"Permission to Menu"},{crudName:"permission_endpoint",crudLabel:"Permission to Endpoint"}],C=Object(s.b)("".concat(l,"/getSummaryData"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,d.get("/".concat(l,"/summary"),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),L=Object(s.b)("".concat(l,"/getDataList"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,d.get("/".concat(l),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data,total:a.data.total});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),N=Object(s.b)("".concat(l,"/getDataById"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,d.get("/".concat(l,"/").concat(t));case 4:return r=e.sent,e.abrupt("return",r.data.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),w=Object(s.b)("".concat(l,"/resetSelectedData"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.abrupt("return",a({}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),A=Object(s.b)("".concat(l,"/postData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,s,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,s=a.rejectWithValue,e.prev=1,e.next=4,d.post("/".concat(l),t);case 4:return o=e.sent,n(w({})),b&&n(L(r()[u].params)),n(Object(i.resetData)({})),e.abrupt("return",o.data);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",s(e.t0.response.data));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()),k=Object(s.b)("".concat(l,"/putData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,s,o,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,s=a.rejectWithValue,o=r()[u].selectedData.id,e.prev=2,e.next=5,d.put("/".concat(l,"/").concat(o),t);case 5:return p=e.sent,n(w({})),m&&(n(L(r()[u].params)),g&&n(C({}))),n(Object(i.resetData)({})),e.abrupt("return",p.data);case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",s(e.t0.response.data));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,a){return e.apply(this,arguments)}}()),E=Object(s.b)("".concat(l,"/deleteData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,s,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,s=a.rejectWithValue,e.prev=1,e.next=4,d.delete("/".concat(l,"/").concat(t));case 4:if(o=e.sent,!O){e.next=9;break}return e.next=8,n(L(r()[u].params));case 8:g&&n(C({}));case 9:return n(Object(i.resetData)({})),e.abrupt("return",o.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",s(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),T=Object(s.b)("".concat(l,"/deleteSelectedRowData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,s,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,s=a.rejectWithValue,e.prev=1,e.next=4,d.delete("/".concat(l),{data:t});case 4:if(o=e.sent,!O){e.next=9;break}return e.next=8,n(L(r()[u].params));case 8:g&&n(C({}));case 9:return n(Object(i.resetData)({})),e.abrupt("return",o.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",s(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),_=Object(s.b)("".concat(l,"/setDataById"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.abrupt("return",n(t));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),M=Object(s.c)({name:u,initialState:{dynamicColumns:x,pageTitle:o,statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,params:{},selectedData:null,dataDropdown:[],statusDetail:0,isLoadingDetail:!1,errorDetail:0,statusAddEdit:0,isLoadingAddEdit:!1,errorAddEdit:0,statusDelete:0,isLoadingDelete:!1,errorDelete:0},reducers:{},extraReducers:function(e){e.addCase(C.pending,(function(e){e.statusSummary="loading",e.isLoadingSummary=!0})).addCase(C.fulfilled,(function(e,t){e.statusSummary="succeeded",e.isLoadingSummary=!1,e.dataSummary=t.payload.data})).addCase(C.rejected,(function(e,t){e.statusSummary="failed",e.isLoadingSummary=!1,e.errorSummary=t.error.message})).addCase(L.pending,(function(e){e.status="loading",e.isLoading=!0})).addCase(L.fulfilled,(function(e,t){e.status="succeeded",e.isLoading=!1,t.payload.data.length>0&&(e.data=t.payload.data,e.dataDropdown=t.payload.data.map((function(e){return{value:e.id,label:e.title,post:!1,put:!1,delete:!1,get:!1}}))),e.params=t.payload.params,e.total=t.payload.total})).addCase(L.rejected,(function(e,t){var a;e.status="failed",e.isLoading=!1,e.error=null===(a=t.error.payload)||void 0===a?void 0:a.message})).addCase(k.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(k.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(k.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(A.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(A.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(A.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(E.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(E.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(E.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(T.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(T.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(T.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(N.pending,(function(e){e.statusDetail="loading",e.isLoadingDetail=!0})).addCase(N.fulfilled,(function(e,t){e.statusDetail="succeeded",e.isLoadingDetail=!1,e.selectedData=t.payload})).addCase(N.rejected,(function(e,t){var a;e.statusDetail="failed",e.isLoadingDetail=!1,e.selectedData=null,e.errorDetail=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(w.rejected,(function(e){e.selectedData=null})).addCase(_.rejected,(function(e,t){e.selectedData=t.payload}))}});t.default=M.reducer},754:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(6),c=a(2),s=a(33),i=(a(169),a(5)),d=a(85),o=(a(63),a(480),a(114),a(34)),u=(a(13),a(135),a(145),a(1258),a(46)),l=a(358),p=a(16),f=a(0);t.default=function(e){var t,a,j,m,b,O,g=e.formState,v=e.updateDataToApi,h=e.postDataToApi,x=e.handleReset,D=Object(d.a)().t,y=(Object(s.g)().id,Object(p.b)(),Object(p.c)((function(e){return e[l.storeName]}))),S=(Object(c.useContext)(o.a).colors,Object(c.useState)("Please Wait")),C=Object(r.a)(S,2),L=(C[0],C[1],Object(u.e)({})),N=L.control,w=(L.setError,L.handleSubmit),A=L.formState.errors;return Object(f.jsx)(i.y,{onSubmit:w("edit"===g?v:h),children:Object(f.jsxs)(i.S,{className:"gy-1 pt-75",children:[Object(f.jsxs)(i.t,{md:12,xs:12,children:[Object(f.jsxs)(i.E,{className:"form-label",for:"title",children:[D("Title"),Object(f.jsx)("span",{className:"text-danger",children:"*"})]}),Object(f.jsx)(u.a,{defaultValue:null!==(t=null===(a=y.selectedData)||void 0===a?void 0:a.title)&&void 0!==t?t:"",control:N,id:"title",name:"title",render:function(e){var t=e.field;return Object(f.jsx)(i.B,Object(n.a)(Object(n.a)({},t),{},{className:A.title?"form-control is-invalid":"form-control",id:"title",invalid:A.title&&!0}))}})]}),Object(f.jsxs)(i.t,{md:12,xs:12,children:[Object(f.jsxs)(i.E,{className:"form-label",for:"description",children:[D("Description"),Object(f.jsx)("span",{className:"text-danger",children:"*"})]}),Object(f.jsx)(u.a,{defaultValue:null!==(j=null===(m=y.selectedData)||void 0===m?void 0:m.description)&&void 0!==j?j:"",control:N,id:"description",name:"description",render:function(e){var t=e.field;return Object(f.jsx)(i.B,Object(n.a)(Object(n.a)({},t),{},{className:A.description?"form-control is-invalid":"form-control",id:"description",invalid:A.description&&!0}))}})]}),Object(f.jsxs)(i.t,{md:12,xs:12,children:[Object(f.jsxs)(i.E,{className:"form-label",for:"subject",children:[D("Subject"),Object(f.jsx)("span",{className:"text-danger",children:"*"})]}),Object(f.jsx)(u.a,{defaultValue:null!==(b=null===(O=y.selectedData)||void 0===O?void 0:O.subject)&&void 0!==b?b:"",control:N,id:"subject",name:"subject",render:function(e){var t=e.field;return Object(f.jsx)(i.B,Object(n.a)(Object(n.a)({},t),{},{className:A.subject?"form-control is-invalid":"form-control",id:"subject",invalid:A.subject&&!0}))}})]}),Object(f.jsxs)(i.t,{xs:12,className:"text-center mt-2 pt-50",children:[Object(f.jsx)(i.i,{type:"submit",className:"me-1",color:"primary",children:D("Submit")}),Object(f.jsx)(i.i,{type:"reset",color:"secondary",outline:!0,onClick:x,children:D("Cancel")})]})]})})}}}]);
//# sourceMappingURL=65.0230928c.chunk.js.map