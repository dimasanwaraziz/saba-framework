(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[123,24,84,85,86,132,170],{1237:function(e,t,a){!function(e){"use strict";var t="undefined"!==typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},a={weekdays:{shorthand:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],longhand:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]},months:{shorthand:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],longhand:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]},firstDayOfWeek:1,ordinal:function(){return""},time_24hr:!0,rangeSeparator:" - "};t.l10ns.id=a;var n=t.l10ns;e.Indonesian=a,e.default=n,Object.defineProperty(e,"__esModule",{value:!0})}(t)},355:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return u})),a.d(t,"storeName",(function(){return o})),a.d(t,"endpointName",(function(){return l})),a.d(t,"serverSideGrid",(function(){return p})),a.d(t,"detailFromGrid",(function(){return f})),a.d(t,"getAlwaysGrid",(function(){return m})),a.d(t,"getApiAfterPut",(function(){return b})),a.d(t,"getApiAfterPost",(function(){return j})),a.d(t,"getApiAfterDelete",(function(){return v})),a.d(t,"getApiSummaryData",(function(){return g})),a.d(t,"detailPage",(function(){return D})),a.d(t,"deleteSelection",(function(){return h})),a.d(t,"dynamicColumns",(function(){return O})),a.d(t,"dynamicColumnsFilter",(function(){return y})),a.d(t,"dynamicForm",(function(){return x})),a.d(t,"extraCrud",(function(){return S})),a.d(t,"getSummaryData",(function(){return w})),a.d(t,"getDataList",(function(){return A})),a.d(t,"getDataById",(function(){return L})),a.d(t,"resetSelectedData",(function(){return C})),a.d(t,"postData",(function(){return k})),a.d(t,"putData",(function(){return E})),a.d(t,"deleteData",(function(){return N})),a.d(t,"deleteSelectedRowData",(function(){return J})),a.d(t,"setDataById",(function(){return V})),a.d(t,"StoreSlice",(function(){return W}));var n=a(9),r=a(7),i=a.n(r),d=a(18),s=a(56),c=a(44).a.ssoAxiosInterceptor,u="Permission",o="apps_permission",l="api/permission",p=!0,f=!0,m=!1,b=!0,j=!0,v=!0,g=!1,D=!0,h=!1,O=[],y=[{filterLabel:"Role",fieldName:"id_role"}],x=[],S=[{crudName:"permission_menu",crudLabel:"Permission to Menu"},{crudName:"permission_endpoint",crudLabel:"Permission to Endpoint"}],w=Object(d.b)("".concat(l,"/getSummaryData"),function(){var e=Object(n.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,c.get("/".concat(l,"/summary"),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),A=Object(d.b)("".concat(l,"/getDataList"),function(){var e=Object(n.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,c.get("/".concat(l),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data,total:a.data.total});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),L=Object(d.b)("".concat(l,"/getDataById"),function(){var e=Object(n.a)(i.a.mark((function e(t,a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,c.get("/".concat(l,"/").concat(t));case 4:return r=e.sent,e.abrupt("return",r.data.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),C=Object(d.b)("".concat(l,"/resetSelectedData"),function(){var e=Object(n.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.abrupt("return",a({}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),k=Object(d.b)("".concat(l,"/postData"),function(){var e=Object(n.a)(i.a.mark((function e(t,a){var n,r,d,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,d=a.rejectWithValue,e.prev=1,e.next=4,c.post("/".concat(l),t);case 4:return u=e.sent,n(C({})),j&&n(A(r()[o].params)),n(Object(s.resetData)({})),e.abrupt("return",u.data);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",d(e.t0.response.data));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()),E=Object(d.b)("".concat(l,"/putData"),function(){var e=Object(n.a)(i.a.mark((function e(t,a){var n,r,d,u,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,d=a.rejectWithValue,u=r()[o].selectedData.id,e.prev=2,e.next=5,c.put("/".concat(l,"/").concat(u),t);case 5:return p=e.sent,n(C({})),b&&(n(A(r()[o].params)),g&&n(w({}))),n(Object(s.resetData)({})),e.abrupt("return",p.data);case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",d(e.t0.response.data));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,a){return e.apply(this,arguments)}}()),N=Object(d.b)("".concat(l,"/deleteData"),function(){var e=Object(n.a)(i.a.mark((function e(t,a){var n,r,d,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,d=a.rejectWithValue,e.prev=1,e.next=4,c.delete("/".concat(l,"/").concat(t));case 4:if(u=e.sent,!v){e.next=9;break}return e.next=8,n(A(r()[o].params));case 8:g&&n(w({}));case 9:return n(Object(s.resetData)({})),e.abrupt("return",u.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",d(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),J=Object(d.b)("".concat(l,"/deleteSelectedRowData"),function(){var e=Object(n.a)(i.a.mark((function e(t,a){var n,r,d,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,d=a.rejectWithValue,e.prev=1,e.next=4,c.delete("/".concat(l),{data:t});case 4:if(u=e.sent,!v){e.next=9;break}return e.next=8,n(A(r()[o].params));case 8:g&&n(w({}));case 9:return n(Object(s.resetData)({})),e.abrupt("return",u.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",d(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),V=Object(d.b)("".concat(l,"/setDataById"),function(){var e=Object(n.a)(i.a.mark((function e(t,a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.abrupt("return",n(t));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),W=Object(d.c)({name:o,initialState:{dynamicColumns:O,pageTitle:u,statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,params:{},selectedData:null,dataDropdown:[],statusDetail:0,isLoadingDetail:!1,errorDetail:0,statusAddEdit:0,isLoadingAddEdit:!1,errorAddEdit:0,statusDelete:0,isLoadingDelete:!1,errorDelete:0},reducers:{},extraReducers:function(e){e.addCase(w.pending,(function(e){e.statusSummary="loading",e.isLoadingSummary=!0})).addCase(w.fulfilled,(function(e,t){e.statusSummary="succeeded",e.isLoadingSummary=!1,e.dataSummary=t.payload.data})).addCase(w.rejected,(function(e,t){e.statusSummary="failed",e.isLoadingSummary=!1,e.errorSummary=t.error.message})).addCase(A.pending,(function(e){e.status="loading",e.isLoading=!0})).addCase(A.fulfilled,(function(e,t){e.status="succeeded",e.isLoading=!1,t.payload.data.length>0&&(e.data=t.payload.data,e.dataDropdown=t.payload.data.map((function(e){return{value:e.id,label:e.title,post:!1,put:!1,delete:!1,get:!1}}))),e.params=t.payload.params,e.total=t.payload.total})).addCase(A.rejected,(function(e,t){var a;e.status="failed",e.isLoading=!1,e.error=null===(a=t.error.payload)||void 0===a?void 0:a.message})).addCase(E.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(E.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(E.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(k.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(k.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(k.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(N.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(N.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(N.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(J.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(J.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(J.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(L.pending,(function(e){e.statusDetail="loading",e.isLoadingDetail=!0})).addCase(L.fulfilled,(function(e,t){e.statusDetail="succeeded",e.isLoadingDetail=!1,e.selectedData=t.payload})).addCase(L.rejected,(function(e,t){var a;e.statusDetail="failed",e.isLoadingDetail=!1,e.selectedData=null,e.errorDetail=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(C.rejected,(function(e){e.selectedData=null})).addCase(V.rejected,(function(e,t){e.selectedData=t.payload}))}});t.default=W.reducer},747:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(6),i=a(2),d=a(33),s=(a(169),a(5)),c=a(78),u=(a(64),a(256),a(114),a(34)),o=(a(13),a(135),a(145),a(1237),a(46)),l=a(355),p=a(16),f=a(0);t.default=function(e){var t,a,m,b,j,v,g=e.formState,D=e.updateDataToApi,h=e.postDataToApi,O=e.handleReset,y=Object(c.a)().t,x=(Object(d.g)().id,Object(p.b)(),Object(p.c)((function(e){return e[l.storeName]}))),S=(Object(i.useContext)(u.a).colors,Object(i.useState)("Please Wait")),w=Object(r.a)(S,2),A=(w[0],w[1],Object(o.e)({})),L=A.control,C=(A.setError,A.handleSubmit),k=A.formState.errors;return Object(f.jsx)(s.y,{onSubmit:C("edit"===g?D:h),children:Object(f.jsxs)(s.S,{className:"gy-1 pt-75",children:[Object(f.jsxs)(s.t,{md:12,xs:12,children:[Object(f.jsxs)(s.E,{className:"form-label",for:"title",children:[y("Title"),Object(f.jsx)("span",{className:"text-danger",children:"*"})]}),Object(f.jsx)(o.a,{defaultValue:null!==(t=null===(a=x.selectedData)||void 0===a?void 0:a.title)&&void 0!==t?t:"",control:L,id:"title",name:"title",render:function(e){var t=e.field;return Object(f.jsx)(s.B,Object(n.a)(Object(n.a)({},t),{},{className:k.title?"form-control is-invalid":"form-control",id:"title",invalid:k.title&&!0}))}})]}),Object(f.jsxs)(s.t,{md:12,xs:12,children:[Object(f.jsxs)(s.E,{className:"form-label",for:"description",children:[y("Description"),Object(f.jsx)("span",{className:"text-danger",children:"*"})]}),Object(f.jsx)(o.a,{defaultValue:null!==(m=null===(b=x.selectedData)||void 0===b?void 0:b.description)&&void 0!==m?m:"",control:L,id:"description",name:"description",render:function(e){var t=e.field;return Object(f.jsx)(s.B,Object(n.a)(Object(n.a)({},t),{},{className:k.description?"form-control is-invalid":"form-control",id:"description",invalid:k.description&&!0}))}})]}),Object(f.jsxs)(s.t,{md:12,xs:12,children:[Object(f.jsxs)(s.E,{className:"form-label",for:"subject",children:[y("Subject"),Object(f.jsx)("span",{className:"text-danger",children:"*"})]}),Object(f.jsx)(o.a,{defaultValue:null!==(j=null===(v=x.selectedData)||void 0===v?void 0:v.subject)&&void 0!==j?j:"",control:L,id:"subject",name:"subject",render:function(e){var t=e.field;return Object(f.jsx)(s.B,Object(n.a)(Object(n.a)({},t),{},{className:k.subject?"form-control is-invalid":"form-control",id:"subject",invalid:k.subject&&!0}))}})]}),Object(f.jsxs)(s.t,{xs:12,className:"text-center mt-2 pt-50",children:[Object(f.jsx)(s.i,{type:"submit",className:"me-1",color:"primary",children:y("Submit")}),Object(f.jsx)(s.i,{type:"reset",color:"secondary",outline:!0,onClick:O,children:y("Cancel")})]})]})})}}}]);
//# sourceMappingURL=123.be369dbc.chunk.js.map