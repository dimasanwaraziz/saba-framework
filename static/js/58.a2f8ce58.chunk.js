(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[58,27,151],{1209:function(t,e,a){},360:function(t,e,a){"use strict";a.r(e),a.d(e,"pageTitle",(function(){return o})),a.d(e,"storeName",(function(){return l})),a.d(e,"endpointName",(function(){return p})),a.d(e,"serverSideGrid",(function(){return f})),a.d(e,"detailFromGrid",(function(){return m})),a.d(e,"getAlwaysGrid",(function(){return g})),a.d(e,"getApiAfterPut",(function(){return v})),a.d(e,"getApiAfterPost",(function(){return b})),a.d(e,"getApiAfterDelete",(function(){return D})),a.d(e,"getApiSummaryData",(function(){return j})),a.d(e,"detailPage",(function(){return y})),a.d(e,"getSummaryData",(function(){return h})),a.d(e,"getDataList",(function(){return O})),a.d(e,"getDataById",(function(){return w})),a.d(e,"resetSelectedData",(function(){return L})),a.d(e,"postData",(function(){return S})),a.d(e,"putData",(function(){return A})),a.d(e,"deleteData",(function(){return x})),a.d(e,"deleteSelectedRowData",(function(){return C})),a.d(e,"setDataById",(function(){return k})),a.d(e,"resetData",(function(){return E})),a.d(e,"StoreSlice",(function(){return V}));var n=a(9),r=a(7),d=a.n(r),u=a(18),c=a(44),i=a(56),s=c.a.ssoAxiosInterceptor,o="Role",l="apps_role",p="api/role",f=!1,m=!1,g=!1,v=!0,b=!0,D=!0,j=!0,y=!0,h=Object(u.b)("".concat(p,"/getSummaryData"),function(){var t=Object(n.a)(d.a.mark((function t(e){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Object.keys(e).forEach((function(t){null!==e[t]&&""!==e[t]||delete e[t]})),t.next=3,s.get("/".concat(p,"/summary"),{params:e});case 3:return a=t.sent,t.abrupt("return",{params:e,data:a.data.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),O=Object(u.b)("".concat(p,"/getDataList"),function(){var t=Object(n.a)(d.a.mark((function t(e){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Object.keys(e).forEach((function(t){null!==e[t]&&""!==e[t]||delete e[t]})),t.next=3,s.get("/".concat(p),{params:e});case 3:return a=t.sent,t.abrupt("return",{params:e,data:a.data.data,total:a.data.total});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),w=Object(u.b)("".concat(p,"/getDataById"),function(){var t=Object(n.a)(d.a.mark((function t(e,a){var n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.rejectWithValue,t.prev=1,t.next=4,s.get("/".concat(p,"/").concat(e));case 4:return r=t.sent,t.abrupt("return",r.data.data);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",n(t.t0.response.data));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,a){return t.apply(this,arguments)}}()),L=Object(u.b)("".concat(p,"/resetSelectedData"),function(){var t=Object(n.a)(d.a.mark((function t(e){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.rejectWithValue,t.abrupt("return",a({}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),S=Object(u.b)("".concat(p,"/postData"),function(){var t=Object(n.a)(d.a.mark((function t(e,a){var n,r,u,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.getState,u=a.rejectWithValue,t.prev=1,t.next=4,s.post("/".concat(p),e);case 4:return c=t.sent,n(L({})),b&&n(O(r()[l].params)),n(Object(i.resetData)({})),t.abrupt("return",c.data);case 11:return t.prev=11,t.t0=t.catch(1),t.abrupt("return",u(t.t0.response.data));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a){return t.apply(this,arguments)}}()),A=Object(u.b)("".concat(p,"/putData"),function(){var t=Object(n.a)(d.a.mark((function t(e,a){var n,r,u,c,o,f;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.dispatch,u=a.getState,c=a.rejectWithValue,o=null!==(n=e.id)&&void 0!==n?n:u()[l].selectedData.id,e.name=u()[l].selectedData.name,t.prev=3,t.next=6,s.put("/".concat(p,"/").concat(o),e);case 6:return f=t.sent,r(L({})),v&&(r(O(u()[l].params)),j&&r(h({}))),r(Object(i.resetData)({})),t.abrupt("return",f.data);case 13:return t.prev=13,t.t0=t.catch(3),t.abrupt("return",c(t.t0.response.data));case 16:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(e,a){return t.apply(this,arguments)}}()),x=Object(u.b)("".concat(p,"/deleteData"),function(){var t=Object(n.a)(d.a.mark((function t(e,a){var n,r,u,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.getState,u=a.rejectWithValue,t.prev=1,t.next=4,s.delete("/".concat(p,"/").concat(e));case 4:if(c=t.sent,!D){t.next=9;break}return t.next=8,n(O(r()[l].params));case 8:j&&n(h({}));case 9:return n(Object(i.resetData)({})),t.abrupt("return",c.data);case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",u(t.t0.response.data));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,a){return t.apply(this,arguments)}}()),C=Object(u.b)("".concat(p,"/deleteSelectedRowData"),function(){var t=Object(n.a)(d.a.mark((function t(e,a){var n,r,u,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.getState,u=a.rejectWithValue,t.prev=1,t.next=4,s.delete("/".concat(p),{data:e});case 4:if(c=t.sent,!D){t.next=9;break}return t.next=8,n(O(r()[l].params));case 8:j&&n(h({}));case 9:return n(Object(i.resetData)({})),t.abrupt("return",c.data);case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",u(t.t0.response.data));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,a){return t.apply(this,arguments)}}()),k=Object(u.b)("".concat(p,"/setDataById"),function(){var t=Object(n.a)(d.a.mark((function t(e,a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.rejectWithValue,t.abrupt("return",n(e));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),E=Object(u.b)("".concat(p,"/resetData"),function(){var t=Object(n.a)(d.a.mark((function t(e){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.rejectWithValue,t.abrupt("return",a({}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),V=Object(u.c)({name:l,initialState:{pageTitle:o,statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,params:{},selectedData:null,dataDropdown:[],statusDetail:0,isLoadingDetail:!1,errorDetail:0,statusAddEdit:0,isLoadingAddEdit:!1,errorAddEdit:0,statusDelete:0,isLoadingDelete:!1,errorDelete:0},reducers:{},extraReducers:function(t){t.addCase(h.pending,(function(t){t.statusSummary="loading",t.isLoadingSummary=!0})).addCase(h.fulfilled,(function(t,e){t.statusSummary="succeeded",t.isLoadingSummary=!1,t.dataSummary=e.payload.data})).addCase(h.rejected,(function(t,e){t.statusSummary="failed",t.isLoadingSummary=!1,t.errorSummary=e.error.message})).addCase(O.pending,(function(t){t.status="loading",t.isLoading=!0})).addCase(O.fulfilled,(function(t,e){t.status="succeeded",t.isLoading=!1,e.payload.data.length>0&&(t.data=e.payload.data,t.dataDropdown=e.payload.data.map((function(t){return{value:t.id,label:"".concat(t.name)}})),t.selectedData={value:e.payload.data[0].id,label:"".concat(e.payload.data[0].name)}),t.params=e.payload.params,t.total=e.payload.total})).addCase(O.rejected,(function(t,e){var a;t.status="failed",t.isLoading=!1,t.error=null===(a=e.error.payload)||void 0===a?void 0:a.message})).addCase(A.pending,(function(t){t.statusAddEdit="loading",t.isLoadingAddEdit=!0})).addCase(A.fulfilled,(function(t){t.statusAddEdit="succeeded",t.isLoadingAddEdit=!1})).addCase(A.rejected,(function(t,e){var a;t.statusAddEdit="failed",t.isLoadingAddEdit=!1,t.errorAddEdit=null===(a=e.payload)||void 0===a?void 0:a.message})).addCase(S.pending,(function(t){t.statusAddEdit="loading",t.isLoadingAddEdit=!0})).addCase(S.fulfilled,(function(t){t.statusAddEdit="succeeded",t.isLoadingAddEdit=!1})).addCase(S.rejected,(function(t,e){var a;t.statusAddEdit="failed",t.isLoadingAddEdit=!1,t.errorAddEdit=null===(a=e.payload)||void 0===a?void 0:a.message})).addCase(x.pending,(function(t){t.statusDelete="loading",t.isLoadingDelete=!0})).addCase(x.fulfilled,(function(t){t.statusDelete="succeeded",t.isLoadingDelete=!1})).addCase(x.rejected,(function(t,e){var a;t.statusDelete="failed",t.isLoadingDelete=!1,t.errorDelete=null===(a=e.payload)||void 0===a?void 0:a.message})).addCase(C.pending,(function(t){t.statusDelete="loading",t.isLoadingDelete=!0})).addCase(C.fulfilled,(function(t){t.statusDelete="succeeded",t.isLoadingDelete=!1})).addCase(C.rejected,(function(t,e){var a;t.statusDelete="failed",t.isLoadingDelete=!1,t.errorDelete=null===(a=e.payload)||void 0===a?void 0:a.message})).addCase(w.pending,(function(t){t.statusDetail="loading",t.isLoadingDetail=!0})).addCase(w.fulfilled,(function(t,e){t.statusDetail="succeeded",t.isLoadingDetail=!1,t.selectedData=e.payload})).addCase(w.rejected,(function(t,e){var a;t.statusDetail="failed",t.isLoadingDetail=!1,t.selectedData=null,t.errorDetail=null===(a=e.payload)||void 0===a?void 0:a.message})).addCase(L.rejected,(function(t){t.selectedData=null})).addCase(k.rejected,(function(t,e){t.selectedData=e.payload})).addCase(E.rejected,(function(t){t.data=[],t.dataSummary=[]}))}});e.default=V.reducer},777:function(t,e,a){"use strict";a.r(e);var n=a(2),r=a(16),d=a(81),u=(a(1209),a(13)),c=(a(11),a(82)),i=a(360),s=a(0);e.default=function(t){var e=t.lookupMode_fieldName,a=void 0===e?"":e,o=t.lookupMode_isMulti,l=void 0!==o&&o,p=t.lookupMode_onChange,f=t.lookupMode_defaultValue,m=(t.errorState,Object(d.a)().t,Object(r.b)()),g=Object(r.c)((function(t){return t[i.storeName]}));return Object(n.useEffect)((function(){(0===g.data.length||!g.isLoading&&i.getAlwaysGrid)&&m(Object(i.getDataList)({}))}),[m,g.data.length]),Object(s.jsx)(n.Fragment,{children:Object(s.jsx)(c.a,{theme:u.H,defaultValue:l?f:g.dataDropdown.filter((function(t){return t.value===f})),isMulti:l,onChange:function(t){return p(t.value,a)},options:g.dataDropdown,className:"react-select",classNamePrefix:"select"})})}}}]);
//# sourceMappingURL=58.a2f8ce58.chunk.js.map