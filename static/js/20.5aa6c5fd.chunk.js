(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[20,27],{360:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return o})),a.d(t,"storeName",(function(){return l})),a.d(t,"endpointName",(function(){return p})),a.d(t,"serverSideGrid",(function(){return f})),a.d(t,"detailFromGrid",(function(){return m})),a.d(t,"getAlwaysGrid",(function(){return b})),a.d(t,"getApiAfterPut",(function(){return j})),a.d(t,"getApiAfterPost",(function(){return g})),a.d(t,"getApiAfterDelete",(function(){return v})),a.d(t,"getApiSummaryData",(function(){return O})),a.d(t,"detailPage",(function(){return y})),a.d(t,"getSummaryData",(function(){return h})),a.d(t,"getDataList",(function(){return D})),a.d(t,"getDataById",(function(){return x})),a.d(t,"resetSelectedData",(function(){return S})),a.d(t,"postData",(function(){return w})),a.d(t,"putData",(function(){return L})),a.d(t,"deleteData",(function(){return C})),a.d(t,"deleteSelectedRowData",(function(){return A})),a.d(t,"setDataById",(function(){return E})),a.d(t,"resetData",(function(){return N})),a.d(t,"StoreSlice",(function(){return k}));var n=a(9),r=a(7),c=a.n(r),s=a(18),d=a(44),i=a(56),u=d.a.ssoAxiosInterceptor,o="Role",l="apps_role",p="api/role",f=!1,m=!1,b=!1,j=!0,g=!0,v=!0,O=!0,y=!0,h=Object(s.b)("".concat(p,"/getSummaryData"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,u.get("/".concat(p,"/summary"),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),D=Object(s.b)("".concat(p,"/getDataList"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,u.get("/".concat(p),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data,total:a.data.total});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=Object(s.b)("".concat(p,"/getDataById"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,u.get("/".concat(p,"/").concat(t));case 4:return r=e.sent,e.abrupt("return",r.data.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),S=Object(s.b)("".concat(p,"/resetSelectedData"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.abrupt("return",a({}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=Object(s.b)("".concat(p,"/postData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,s,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,s=a.rejectWithValue,e.prev=1,e.next=4,u.post("/".concat(p),t);case 4:return d=e.sent,n(S({})),g&&n(D(r()[l].params)),n(Object(i.resetData)({})),e.abrupt("return",d.data);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",s(e.t0.response.data));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()),L=Object(s.b)("".concat(p,"/putData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,s,d,o,f;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,s=a.getState,d=a.rejectWithValue,o=null!==(n=t.id)&&void 0!==n?n:s()[l].selectedData.id,t.name=s()[l].selectedData.name,e.prev=3,e.next=6,u.put("/".concat(p,"/").concat(o),t);case 6:return f=e.sent,r(S({})),j&&(r(D(s()[l].params)),O&&r(h({}))),r(Object(i.resetData)({})),e.abrupt("return",f.data);case 13:return e.prev=13,e.t0=e.catch(3),e.abrupt("return",d(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t,a){return e.apply(this,arguments)}}()),C=Object(s.b)("".concat(p,"/deleteData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,s,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,s=a.rejectWithValue,e.prev=1,e.next=4,u.delete("/".concat(p,"/").concat(t));case 4:if(d=e.sent,!v){e.next=9;break}return e.next=8,n(D(r()[l].params));case 8:O&&n(h({}));case 9:return n(Object(i.resetData)({})),e.abrupt("return",d.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",s(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),A=Object(s.b)("".concat(p,"/deleteSelectedRowData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,s,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,s=a.rejectWithValue,e.prev=1,e.next=4,u.delete("/".concat(p),{data:t});case 4:if(d=e.sent,!v){e.next=9;break}return e.next=8,n(D(r()[l].params));case 8:O&&n(h({}));case 9:return n(Object(i.resetData)({})),e.abrupt("return",d.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",s(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),E=Object(s.b)("".concat(p,"/setDataById"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.abrupt("return",n(t));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),N=Object(s.b)("".concat(p,"/resetData"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.abrupt("return",a({}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),k=Object(s.c)({name:l,initialState:{pageTitle:o,statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,params:{},selectedData:null,dataDropdown:[],statusDetail:0,isLoadingDetail:!1,errorDetail:0,statusAddEdit:0,isLoadingAddEdit:!1,errorAddEdit:0,statusDelete:0,isLoadingDelete:!1,errorDelete:0},reducers:{},extraReducers:function(e){e.addCase(h.pending,(function(e){e.statusSummary="loading",e.isLoadingSummary=!0})).addCase(h.fulfilled,(function(e,t){e.statusSummary="succeeded",e.isLoadingSummary=!1,e.dataSummary=t.payload.data})).addCase(h.rejected,(function(e,t){e.statusSummary="failed",e.isLoadingSummary=!1,e.errorSummary=t.error.message})).addCase(D.pending,(function(e){e.status="loading",e.isLoading=!0})).addCase(D.fulfilled,(function(e,t){e.status="succeeded",e.isLoading=!1,t.payload.data.length>0&&(e.data=t.payload.data,e.dataDropdown=t.payload.data.map((function(e){return{value:e.id,label:"".concat(e.name)}})),e.selectedData={value:t.payload.data[0].id,label:"".concat(t.payload.data[0].name)}),e.params=t.payload.params,e.total=t.payload.total})).addCase(D.rejected,(function(e,t){var a;e.status="failed",e.isLoading=!1,e.error=null===(a=t.error.payload)||void 0===a?void 0:a.message})).addCase(L.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(L.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(L.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(w.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(w.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(w.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(C.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(C.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(C.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(A.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(A.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(A.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(x.pending,(function(e){e.statusDetail="loading",e.isLoadingDetail=!0})).addCase(x.fulfilled,(function(e,t){e.statusDetail="succeeded",e.isLoadingDetail=!1,e.selectedData=t.payload})).addCase(x.rejected,(function(e,t){var a;e.statusDetail="failed",e.isLoadingDetail=!1,e.selectedData=null,e.errorDetail=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(S.rejected,(function(e){e.selectedData=null})).addCase(E.rejected,(function(e,t){e.selectedData=t.payload})).addCase(N.rejected,(function(e){e.data=[],e.dataSummary=[]}))}});t.default=k.reducer},373:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(6),c=a(480),s=a(63),d=a(34),i=(a(145),a(114),a(2)),u=a(46),o=a(24),l=a(85),p=a(33),f=a(5),m=a(360),b=a(16),j=a(0);t.default=function(e){var t,a,g,v,O=e.show,y=e.setShow,h=e.detailPage,D=e.formState,x=e.setFormState,S=Object(l.a)().t,w=Object(p.g)().id,L=Object(b.b)(),C=Object(b.c)((function(e){return e[m.storeName]})),A=Object(i.useContext)(d.a).colors,E=Object(i.useState)(null),N=Object(r.a)(E,2),k=(N[0],N[1],Object(i.useState)("Please Wait")),T=Object(r.a)(k,2),V=T[0],W=T[1],B=Object(u.e)({}),I=B.control,J=B.setError,P=B.handleSubmit,q=B.formState.errors,G=function(){return Object(j.jsxs)(i.Fragment,{children:[Object(j.jsx)(c.a,{}),Object(j.jsxs)(f.r,{className:"mb-0 mt-1",children:[S(V),"..."]})]})};function R(e){return Object.keys(e).sort().reduce((function(t,a){return t[a]=e[a],t}),{})}var F=function(){L(Object(m.resetSelectedData)())};return Object(j.jsx)(f.G,{isOpen:O,toggle:function(){F(),y(!O)},className:"modal-dialog-centered modal-lg",children:Object(j.jsxs)(s.a,{blocking:C.isLoadingAddEdit||C.isLoadingDetail,loader:Object(j.jsx)(G,{}),children:[Object(j.jsx)(f.J,{className:"bg-transparent",toggle:function(){F(),y(!O)}}),Object(j.jsxs)(f.H,{className:"px-sm-5 pt-50 pb-5",children:[Object(j.jsx)("div",{className:"text-center mb-2",children:Object(j.jsxs)("h2",{className:"mb-1",children:[S("edit"===D?"Edit":"Add")," ",S(m.pageTitle)]})}),Object(j.jsx)(f.y,{onSubmit:P("edit"===D?function(e){if(function(e){if("edit"===D){var t=Object(n.a)({},R(C.selectedData));for(var a in delete t.id,t)a in e||delete t[a];return JSON.stringify(R(t))!==JSON.stringify(R(e))}return!0}(e))if(Object.values(e).every((function(e){return null!==e&&""!==e})))W("".concat(S("Updating")," ").concat(S(m.pageTitle)," ").concat(S("Detail")," Data")),L(Object(m.putData)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(y(!O),o.b.success("".concat(S("Successfully Updated")," ").concat(S(m.pageTitle)),{style:{padding:"16px",color:A.success.main,border:"1px solid ".concat(A.success.main)},iconTheme:{primary:A.success.main}}),h&&L(Object(m.getDataById)(w))):"rejected"===e.meta.requestStatus&&o.b.error(e.payload.message,{style:{padding:"16px",color:A.danger.main,border:"1px solid ".concat(A.danger.main)},iconTheme:{primary:A.danger.main}})}));else for(var t in e){var a;0===(null===(a=e[t])||void 0===a?void 0:a.length)&&J(t,{type:"manual"})}else Object(o.b)("".concat(S("You haven't changed anything")),{icon:"\ud83d\udc4f"})}:function(e){if(Object.values(e).every((function(e){return null!==e&&""!==e})))W("".concat(S("Creating a New ".concat(m.pageTitle)))),L(Object(m.postData)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(y(!O),o.b.success("".concat(S("Successfully Created")," ").concat(S(m.pageTitle)),{style:{padding:"16px",color:A.success.main,border:"1px solid ".concat(A.success.main)},iconTheme:{primary:A.success.main}}),h&&L(Object(m.getDataById)(w))):"rejected"===e.meta.requestStatus&&o.b.error(e.payload.message,{style:{padding:"16px",color:A.danger.main,border:"1px solid ".concat(A.danger.main)},iconTheme:{primary:A.danger.main}})}));else for(var t in e){var a;null!==e[t]&&0===(null===(a=e[t])||void 0===a?void 0:a.length)&&J(t,{type:"manual"})}}),children:Object(j.jsxs)(f.S,{className:"gy-1 pt-75",children:[Object(j.jsxs)(f.t,{md:12,xs:12,children:[Object(j.jsxs)(f.E,{className:"form-label",for:"name",children:[S("Name"),Object(j.jsx)("span",{className:"text-danger",children:"*"})]}),Object(j.jsx)(u.a,{defaultValue:null!==(t=null===(a=C.selectedData)||void 0===a?void 0:a.name)&&void 0!==t?t:"",control:I,id:"name",name:"name",render:function(e){var t=e.field;return Object(j.jsx)(f.B,Object(n.a)(Object(n.a)({},t),{},{className:q.name?"form-control is-invalid":"form-control",id:"name",invalid:q.name&&!0}))}})]}),Object(j.jsxs)(f.t,{md:12,xs:12,children:[Object(j.jsxs)(f.E,{className:"form-label",for:"description",children:[S("Description"),Object(j.jsx)("span",{className:"text-danger",children:"*"})]}),Object(j.jsx)(u.a,{defaultValue:null!==(g=null===(v=C.selectedData)||void 0===v?void 0:v.description)&&void 0!==g?g:"",control:I,id:"description",name:"description",render:function(e){var t=e.field;return Object(j.jsx)(f.B,Object(n.a)(Object(n.a)({},t),{},{className:q.description?"form-control is-invalid":"form-control",id:"description",invalid:q.description&&!0}))}})]}),Object(j.jsxs)(f.t,{xs:12,className:"text-center mt-2 pt-50",children:[Object(j.jsx)(f.i,{type:"submit",className:"me-1",color:"primary",children:S("Submit")}),Object(j.jsx)(f.i,{type:"reset",color:"secondary",outline:!0,onClick:function(){F(),x("add"),y(!1)},children:S("Cancel")})]})]})})]})]})})}}}]);
//# sourceMappingURL=20.5aa6c5fd.chunk.js.map