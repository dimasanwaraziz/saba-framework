(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[28],{373:function(t,e,a){"use strict";a.r(e),a.d(e,"pageTitle",(function(){return s})),a.d(e,"storeName",(function(){return o})),a.d(e,"endpointName",(function(){return l})),a.d(e,"serverSideGrid",(function(){return p})),a.d(e,"detailFromGrid",(function(){return f})),a.d(e,"getAlwaysGrid",(function(){return m})),a.d(e,"getApiAfterPut",(function(){return g})),a.d(e,"getApiAfterPost",(function(){return D})),a.d(e,"getApiAfterDelete",(function(){return v})),a.d(e,"getApiSummaryData",(function(){return b})),a.d(e,"detailPage",(function(){return y})),a.d(e,"dynamicColumns",(function(){return j})),a.d(e,"dynamicForm",(function(){return h})),a.d(e,"getSummaryData",(function(){return L})),a.d(e,"getDataList",(function(){return w})),a.d(e,"getDataById",(function(){return S})),a.d(e,"resetSelectedData",(function(){return A})),a.d(e,"postData",(function(){return C})),a.d(e,"putData",(function(){return O})),a.d(e,"deleteData",(function(){return x})),a.d(e,"deleteSelectedRowData",(function(){return E})),a.d(e,"setDataById",(function(){return k})),a.d(e,"StoreSlice",(function(){return N}));var n=a(9),r=a(7),d=a.n(r),u=a(18),c=a(56),i=a(44).a.ssoAxiosInterceptor,s="Role Permission",o="apps_role_permission",l="api/role_permission",p=!0,f=!0,m=!1,g=!0,D=!0,v=!0,b=!1,y=!0,j=[{columnName:"Name",fieldName:"name"},{columnName:"Code",fieldName:"code"}],h=[],L=Object(u.b)("".concat(l,"/getSummaryData"),function(){var t=Object(n.a)(d.a.mark((function t(e){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Object.keys(e).forEach((function(t){null!==e[t]&&""!==e[t]||delete e[t]})),t.next=3,i.get("/".concat(l,"/summary"),{params:e});case 3:return a=t.sent,t.abrupt("return",{params:e,data:a.data.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),w=Object(u.b)("".concat(l,"/getDataList"),function(){var t=Object(n.a)(d.a.mark((function t(e){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Object.keys(e).forEach((function(t){null!==e[t]&&""!==e[t]||delete e[t]})),t.next=3,i.get("/".concat(l),{params:e});case 3:return a=t.sent,t.abrupt("return",{params:e,data:a.data.data,total:a.data.total});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),S=Object(u.b)("".concat(l,"/getDataById"),function(){var t=Object(n.a)(d.a.mark((function t(e,a){var n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.rejectWithValue,t.prev=1,t.next=4,i.get("/".concat(l,"/").concat(e));case 4:return r=t.sent,t.abrupt("return",r.data.data);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",n(t.t0.response.data));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,a){return t.apply(this,arguments)}}()),A=Object(u.b)("".concat(l,"/resetSelectedData"),function(){var t=Object(n.a)(d.a.mark((function t(e){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.rejectWithValue,t.abrupt("return",a({}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),C=Object(u.b)("".concat(l,"/postData"),function(){var t=Object(n.a)(d.a.mark((function t(e,a){var n,r,u,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.getState,u=a.rejectWithValue,t.prev=1,t.next=4,i.post("/".concat(l),e);case 4:return s=t.sent,n(A({})),D&&n(w(r()[o].params)),n(Object(c.resetData)({})),t.abrupt("return",s.data);case 11:return t.prev=11,t.t0=t.catch(1),t.abrupt("return",u(t.t0.response.data));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a){return t.apply(this,arguments)}}()),O=Object(u.b)("".concat(l,"/putData"),function(){var t=Object(n.a)(d.a.mark((function t(e,a){var n,r,u,s,p;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.getState,u=a.rejectWithValue,s=r()[o].selectedData.id,t.prev=2,t.next=5,i.put("/".concat(l,"/").concat(s),e);case 5:return p=t.sent,n(A({})),g&&(n(w(r()[o].params)),b&&n(L({}))),n(Object(c.resetData)({})),t.abrupt("return",p.data);case 12:return t.prev=12,t.t0=t.catch(2),t.abrupt("return",u(t.t0.response.data));case 15:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e,a){return t.apply(this,arguments)}}()),x=Object(u.b)("".concat(l,"/deleteData"),function(){var t=Object(n.a)(d.a.mark((function t(e,a){var n,r,u,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.getState,u=a.rejectWithValue,t.prev=1,t.next=4,i.delete("/".concat(l,"/").concat(e));case 4:if(s=t.sent,!v){t.next=9;break}return t.next=8,n(w(r()[o].params));case 8:b&&n(L({}));case 9:return n(Object(c.resetData)({})),t.abrupt("return",s.data);case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",u(t.t0.response.data));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,a){return t.apply(this,arguments)}}()),E=Object(u.b)("".concat(l,"/deleteSelectedRowData"),function(){var t=Object(n.a)(d.a.mark((function t(e,a){var n,r,u,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.getState,u=a.rejectWithValue,t.prev=1,t.next=4,i.delete("/".concat(l),{data:e});case 4:if(s=t.sent,!v){t.next=9;break}return t.next=8,n(w(r()[o].params));case 8:b&&n(L({}));case 9:return n(Object(c.resetData)({})),t.abrupt("return",s.data);case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",u(t.t0.response.data));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,a){return t.apply(this,arguments)}}()),k=Object(u.b)("".concat(l,"/setDataById"),function(){var t=Object(n.a)(d.a.mark((function t(e,a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.rejectWithValue,t.abrupt("return",n(e));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),N=Object(u.c)({name:o,initialState:{dynamicColumns:j,pageTitle:s,statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,params:{},selectedData:null,dataDropdown:[],statusDetail:0,isLoadingDetail:!1,errorDetail:0,statusAddEdit:0,isLoadingAddEdit:!1,errorAddEdit:0,statusDelete:0,isLoadingDelete:!1,errorDelete:0},reducers:{},extraReducers:function(t){t.addCase(L.pending,(function(t){t.statusSummary="loading",t.isLoadingSummary=!0})).addCase(L.fulfilled,(function(t,e){t.statusSummary="succeeded",t.isLoadingSummary=!1,t.dataSummary=e.payload.data})).addCase(L.rejected,(function(t,e){t.statusSummary="failed",t.isLoadingSummary=!1,t.errorSummary=e.error.message})).addCase(w.pending,(function(t){t.status="loading",t.isLoading=!0})).addCase(w.fulfilled,(function(t,e){t.status="succeeded",t.isLoading=!1,e.payload.data.length>0&&(t.data=e.payload.data,t.dataDropdown=e.payload.data.map((function(t){return{value:t.id,label:"".concat(t.name)}})),t.selectedData=e.payload.data[0]),t.params=e.payload.params,t.total=e.payload.total})).addCase(w.rejected,(function(t,e){var a;t.status="failed",t.isLoading=!1,t.error=null===(a=e.error.payload)||void 0===a?void 0:a.message})).addCase(O.pending,(function(t){t.statusAddEdit="loading",t.isLoadingAddEdit=!0})).addCase(O.fulfilled,(function(t){t.statusAddEdit="succeeded",t.isLoadingAddEdit=!1})).addCase(O.rejected,(function(t,e){var a;t.statusAddEdit="failed",t.isLoadingAddEdit=!1,t.errorAddEdit=null===(a=e.payload)||void 0===a?void 0:a.message})).addCase(C.pending,(function(t){t.statusAddEdit="loading",t.isLoadingAddEdit=!0})).addCase(C.fulfilled,(function(t){t.statusAddEdit="succeeded",t.isLoadingAddEdit=!1})).addCase(C.rejected,(function(t,e){var a;t.statusAddEdit="failed",t.isLoadingAddEdit=!1,t.errorAddEdit=null===(a=e.payload)||void 0===a?void 0:a.message})).addCase(x.pending,(function(t){t.statusDelete="loading",t.isLoadingDelete=!0})).addCase(x.fulfilled,(function(t){t.statusDelete="succeeded",t.isLoadingDelete=!1})).addCase(x.rejected,(function(t,e){var a;t.statusDelete="failed",t.isLoadingDelete=!1,t.errorDelete=null===(a=e.payload)||void 0===a?void 0:a.message})).addCase(E.pending,(function(t){t.statusDelete="loading",t.isLoadingDelete=!0})).addCase(E.fulfilled,(function(t){t.statusDelete="succeeded",t.isLoadingDelete=!1})).addCase(E.rejected,(function(t,e){var a;t.statusDelete="failed",t.isLoadingDelete=!1,t.errorDelete=null===(a=e.payload)||void 0===a?void 0:a.message})).addCase(S.pending,(function(t){t.statusDetail="loading",t.isLoadingDetail=!0})).addCase(S.fulfilled,(function(t,e){t.statusDetail="succeeded",t.isLoadingDetail=!1,t.selectedData=e.payload})).addCase(S.rejected,(function(t,e){var a;t.statusDetail="failed",t.isLoadingDetail=!1,t.selectedData=null,t.errorDetail=null===(a=e.payload)||void 0===a?void 0:a.message})).addCase(A.rejected,(function(t){t.selectedData=null})).addCase(k.rejected,(function(t,e){t.selectedData=e.payload}))}});e.default=N.reducer}}]);
//# sourceMappingURL=28.091d8f9d.chunk.js.map