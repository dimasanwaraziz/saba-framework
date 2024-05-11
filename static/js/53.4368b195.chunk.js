(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[53,24,66,84,85,86,123,132,170],{1258:function(e,t,a){!function(e){"use strict";var t="undefined"!==typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},a={weekdays:{shorthand:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],longhand:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]},months:{shorthand:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],longhand:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]},firstDayOfWeek:1,ordinal:function(){return""},time_24hr:!0,rangeSeparator:" - "};t.l10ns.id=a;var n=t.l10ns;e.Indonesian=a,e.default=n,Object.defineProperty(e,"__esModule",{value:!0})}(t)},358:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return o})),a.d(t,"storeName",(function(){return u})),a.d(t,"endpointName",(function(){return l})),a.d(t,"serverSideGrid",(function(){return p})),a.d(t,"detailFromGrid",(function(){return f})),a.d(t,"getAlwaysGrid",(function(){return m})),a.d(t,"getApiAfterPut",(function(){return b})),a.d(t,"getApiAfterPost",(function(){return j})),a.d(t,"getApiAfterDelete",(function(){return g})),a.d(t,"getApiSummaryData",(function(){return v})),a.d(t,"detailPage",(function(){return O})),a.d(t,"deleteSelection",(function(){return h})),a.d(t,"dynamicColumns",(function(){return y})),a.d(t,"dynamicColumnsFilter",(function(){return D})),a.d(t,"dynamicForm",(function(){return x})),a.d(t,"extraCrud",(function(){return S})),a.d(t,"getSummaryData",(function(){return w})),a.d(t,"getDataList",(function(){return A})),a.d(t,"getDataById",(function(){return C})),a.d(t,"resetSelectedData",(function(){return L})),a.d(t,"postData",(function(){return N})),a.d(t,"putData",(function(){return E})),a.d(t,"deleteData",(function(){return k})),a.d(t,"deleteSelectedRowData",(function(){return T})),a.d(t,"setDataById",(function(){return J})),a.d(t,"StoreSlice",(function(){return P}));var n=a(9),r=a(7),c=a.n(r),i=a(18),s=a(56),d=a(44).a.ssoAxiosInterceptor,o="Permission",u="apps_permission",l="api/permission",p=!0,f=!0,m=!1,b=!0,j=!0,g=!0,v=!1,O=!0,h=!1,y=[],D=[{filterLabel:"Role",fieldName:"id_role"}],x=[],S=[{crudName:"permission_menu",crudLabel:"Permission to Menu"},{crudName:"permission_endpoint",crudLabel:"Permission to Endpoint"}],w=Object(i.b)("".concat(l,"/getSummaryData"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,d.get("/".concat(l,"/summary"),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),A=Object(i.b)("".concat(l,"/getDataList"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,d.get("/".concat(l),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data,total:a.data.total});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),C=Object(i.b)("".concat(l,"/getDataById"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,d.get("/".concat(l,"/").concat(t));case 4:return r=e.sent,e.abrupt("return",r.data.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),L=Object(i.b)("".concat(l,"/resetSelectedData"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.abrupt("return",a({}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),N=Object(i.b)("".concat(l,"/postData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,i=a.rejectWithValue,e.prev=1,e.next=4,d.post("/".concat(l),t);case 4:return o=e.sent,n(L({})),j&&n(A(r()[u].params)),n(Object(s.resetData)({})),e.abrupt("return",o.data);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",i(e.t0.response.data));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()),E=Object(i.b)("".concat(l,"/putData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,i,o,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,i=a.rejectWithValue,o=r()[u].selectedData.id,e.prev=2,e.next=5,d.put("/".concat(l,"/").concat(o),t);case 5:return p=e.sent,n(L({})),b&&(n(A(r()[u].params)),v&&n(w({}))),n(Object(s.resetData)({})),e.abrupt("return",p.data);case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",i(e.t0.response.data));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,a){return e.apply(this,arguments)}}()),k=Object(i.b)("".concat(l,"/deleteData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,i=a.rejectWithValue,e.prev=1,e.next=4,d.delete("/".concat(l,"/").concat(t));case 4:if(o=e.sent,!g){e.next=9;break}return e.next=8,n(A(r()[u].params));case 8:v&&n(w({}));case 9:return n(Object(s.resetData)({})),e.abrupt("return",o.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",i(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),T=Object(i.b)("".concat(l,"/deleteSelectedRowData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,i=a.rejectWithValue,e.prev=1,e.next=4,d.delete("/".concat(l),{data:t});case 4:if(o=e.sent,!g){e.next=9;break}return e.next=8,n(A(r()[u].params));case 8:v&&n(w({}));case 9:return n(Object(s.resetData)({})),e.abrupt("return",o.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",i(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),J=Object(i.b)("".concat(l,"/setDataById"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.abrupt("return",n(t));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),P=Object(i.c)({name:u,initialState:{dynamicColumns:y,pageTitle:o,statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,params:{},selectedData:null,dataDropdown:[],statusDetail:0,isLoadingDetail:!1,errorDetail:0,statusAddEdit:0,isLoadingAddEdit:!1,errorAddEdit:0,statusDelete:0,isLoadingDelete:!1,errorDelete:0},reducers:{},extraReducers:function(e){e.addCase(w.pending,(function(e){e.statusSummary="loading",e.isLoadingSummary=!0})).addCase(w.fulfilled,(function(e,t){e.statusSummary="succeeded",e.isLoadingSummary=!1,e.dataSummary=t.payload.data})).addCase(w.rejected,(function(e,t){e.statusSummary="failed",e.isLoadingSummary=!1,e.errorSummary=t.error.message})).addCase(A.pending,(function(e){e.status="loading",e.isLoading=!0})).addCase(A.fulfilled,(function(e,t){e.status="succeeded",e.isLoading=!1,t.payload.data.length>0&&(e.data=t.payload.data,e.dataDropdown=t.payload.data.map((function(e){return{value:e.id,label:e.title,post:!1,put:!1,delete:!1,get:!1}}))),e.params=t.payload.params,e.total=t.payload.total})).addCase(A.rejected,(function(e,t){var a;e.status="failed",e.isLoading=!1,e.error=null===(a=t.error.payload)||void 0===a?void 0:a.message})).addCase(E.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(E.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(E.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(N.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(N.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(N.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(k.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(k.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(k.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(T.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(T.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(T.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(C.pending,(function(e){e.statusDetail="loading",e.isLoadingDetail=!0})).addCase(C.fulfilled,(function(e,t){e.statusDetail="succeeded",e.isLoadingDetail=!1,e.selectedData=t.payload})).addCase(C.rejected,(function(e,t){var a;e.statusDetail="failed",e.isLoadingDetail=!1,e.selectedData=null,e.errorDetail=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(L.rejected,(function(e){e.selectedData=null})).addCase(J.rejected,(function(e,t){e.selectedData=t.payload}))}});t.default=P.reducer},371:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(6),c=a(2),i=a(34),s=a(24),d=(a(169),a(5)),o=a(85),u=a(64),l=(a(752),a(104),a(33)),p=(a(13),a(135),a(145),a(1258),a(46),a(47)),f=a(358),m=a(16),b=a(753),j=a(0);t.default=function(e){var t=e.show,a=e.setShow,g=e.detailPage,v=e.formState,O=e.setFormState,h=Object(o.a)().t,y=(Object(i.g)().id,Object(m.b)()),D=Object(m.c)((function(e){return e[f.storeName]})),x=Object(c.useContext)(l.a).colors,S=Object(c.useState)("Please Wait"),w=Object(r.a)(S,2),A=(w[0],w[1]);function C(e){return Object.keys(e).sort().reduce((function(t,a){return t[a]=e[a],t}),{})}function L(){return y(Object(f.resetSelectedData)()),O("add"),a(!1)}return g?null:Object(j.jsx)(d.G,{isOpen:t,toggle:function(){L(),a(!t)},className:"modal-dialog-centered modal-lg",children:Object(j.jsxs)(u.a,{blocking:D.isLoadingAddEdit||D.isLoadingDetail,loader:Object(j.jsx)(p.b,{}),children:[Object(j.jsx)(d.J,{className:"bg-transparent",toggle:function(){L(),a(!t)}}),Object(j.jsxs)(d.H,{className:"px-sm-5 pt-50 pb-5",children:[Object(j.jsx)("div",{className:"text-center mb-2",children:Object(j.jsxs)("h2",{className:"mb-1",children:[h("edit"===v?"Edit":"Add")," ",h(f.pageTitle)]})}),Object(j.jsx)(b.default,{formState:v,updateDataToApi:function(e){if(function(e){if("edit"===v){var t=Object(n.a)({},C(D.selectedData));for(var a in delete t.id,t)a in e||delete t[a];return JSON.stringify(C(t))!==JSON.stringify(C(e))}return!0}(e))if(Object.values(e).every((function(e){return null!==e&&""!==e})))A("".concat(h("Updating")," ").concat(h(f.pageTitle)," ").concat(h("Detail")," Data")),y(Object(f.putData)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(a(!t),s.b.success("".concat(h("Successfully Updated")," ").concat(h(f.pageTitle)),{style:{padding:"16px",color:x.success.main,border:"1px solid ".concat(x.success.main)},iconTheme:{primary:x.success.main}})):"rejected"===e.meta.requestStatus&&s.b.error(e.payload.message,{style:{padding:"16px",color:x.danger.main,border:"1px solid ".concat(x.danger.main)},iconTheme:{primary:x.danger.main}})}));else for(var r in e){var c;0===(null===(c=e[r])||void 0===c?void 0:c.length)&&setError(r,{type:"manual"})}else Object(s.b)("".concat(h("You haven't changed anything")),{icon:"\ud83d\udc4f"})},postDataToApi:function(e){if(Object.values(e).every((function(e){return null!==e&&""!==e})))A("".concat(h("Creating a New ".concat(f.pageTitle)))),y(Object(f.postData)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(a(!t),s.b.success("".concat(h("Successfully Created")," ").concat(h(f.pageTitle)),{style:{padding:"16px",color:x.success.main,border:"1px solid ".concat(x.success.main)},iconTheme:{primary:x.success.main}})):"rejected"===e.meta.requestStatus&&s.b.error(e.payload.message,{style:{padding:"16px",color:x.danger.main,border:"1px solid ".concat(x.danger.main)},iconTheme:{primary:x.danger.main}})}));else for(var n in e){var r;null!==e[n]&&0===(null===(r=e[n])||void 0===r?void 0:r.length)&&setError(n,{type:"manual"})}},handleReset:L})]})]})})}},753:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(6),c=a(2),i=a(34),s=(a(169),a(5)),d=a(85),o=(a(64),a(752),a(104),a(33)),u=(a(13),a(135),a(145),a(1258),a(46)),l=a(358),p=a(16),f=a(0);t.default=function(e){var t,a,m,b,j,g,v=e.formState,O=e.updateDataToApi,h=e.postDataToApi,y=e.handleReset,D=Object(d.a)().t,x=(Object(i.g)().id,Object(p.b)(),Object(p.c)((function(e){return e[l.storeName]}))),S=(Object(c.useContext)(o.a).colors,Object(c.useState)("Please Wait")),w=Object(r.a)(S,2),A=(w[0],w[1],Object(u.e)({})),C=A.control,L=(A.setError,A.handleSubmit),N=A.formState.errors;return Object(f.jsx)(s.y,{onSubmit:L("edit"===v?O:h),children:Object(f.jsxs)(s.S,{className:"gy-1 pt-75",children:[Object(f.jsxs)(s.t,{md:12,xs:12,children:[Object(f.jsxs)(s.E,{className:"form-label",for:"title",children:[D("Title"),Object(f.jsx)("span",{className:"text-danger",children:"*"})]}),Object(f.jsx)(u.a,{defaultValue:null!==(t=null===(a=x.selectedData)||void 0===a?void 0:a.title)&&void 0!==t?t:"",control:C,id:"title",name:"title",render:function(e){var t=e.field;return Object(f.jsx)(s.B,Object(n.a)(Object(n.a)({},t),{},{className:N.title?"form-control is-invalid":"form-control",id:"title",invalid:N.title&&!0}))}})]}),Object(f.jsxs)(s.t,{md:12,xs:12,children:[Object(f.jsxs)(s.E,{className:"form-label",for:"description",children:[D("Description"),Object(f.jsx)("span",{className:"text-danger",children:"*"})]}),Object(f.jsx)(u.a,{defaultValue:null!==(m=null===(b=x.selectedData)||void 0===b?void 0:b.description)&&void 0!==m?m:"",control:C,id:"description",name:"description",render:function(e){var t=e.field;return Object(f.jsx)(s.B,Object(n.a)(Object(n.a)({},t),{},{className:N.description?"form-control is-invalid":"form-control",id:"description",invalid:N.description&&!0}))}})]}),Object(f.jsxs)(s.t,{md:12,xs:12,children:[Object(f.jsxs)(s.E,{className:"form-label",for:"subject",children:[D("Subject"),Object(f.jsx)("span",{className:"text-danger",children:"*"})]}),Object(f.jsx)(u.a,{defaultValue:null!==(j=null===(g=x.selectedData)||void 0===g?void 0:g.subject)&&void 0!==j?j:"",control:C,id:"subject",name:"subject",render:function(e){var t=e.field;return Object(f.jsx)(s.B,Object(n.a)(Object(n.a)({},t),{},{className:N.subject?"form-control is-invalid":"form-control",id:"subject",invalid:N.subject&&!0}))}})]}),Object(f.jsxs)(s.t,{xs:12,className:"text-center mt-2 pt-50",children:[Object(f.jsx)(s.i,{type:"submit",className:"me-1",color:"primary",children:D("Submit")}),Object(f.jsx)(s.i,{type:"reset",color:"secondary",outline:!0,onClick:y,children:D("Cancel")})]})]})})}}}]);
//# sourceMappingURL=53.4368b195.chunk.js.map