(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[57,26,150],{1207:function(e,t,a){},367:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return c})),a.d(t,"storeName",(function(){return o})),a.d(t,"endpointName",(function(){return l})),a.d(t,"serverSideGrid",(function(){return f})),a.d(t,"detailFromGrid",(function(){return p})),a.d(t,"getAlwaysGrid",(function(){return m})),a.d(t,"getApiAfterPut",(function(){return g})),a.d(t,"getApiAfterPost",(function(){return b})),a.d(t,"getApiAfterDelete",(function(){return v})),a.d(t,"getApiSummaryData",(function(){return D})),a.d(t,"detailPage",(function(){return y})),a.d(t,"disabledAction",(function(){return j})),a.d(t,"isManyToManyGrid",(function(){return h})),a.d(t,"storeToRefreshAfterAll",(function(){return L})),a.d(t,"dynamicColumns",(function(){return A})),a.d(t,"dynamicColumnsFilter",(function(){return O})),a.d(t,"dynamicForm",(function(){return w})),a.d(t,"getSummaryData",(function(){return C})),a.d(t,"getDataList",(function(){return S})),a.d(t,"getDataById",(function(){return x})),a.d(t,"resetSelectedData",(function(){return k})),a.d(t,"postData",(function(){return E})),a.d(t,"putData",(function(){return M})),a.d(t,"deleteData",(function(){return N})),a.d(t,"deleteSelectedRowData",(function(){return _})),a.d(t,"setDataById",(function(){return V})),a.d(t,"StoreSlice",(function(){return W}));var n=a(9),r=a(7),d=a.n(r),u=a(18),i=a(56),s=a(44).a.ssoAxiosInterceptor,c="Menu Permission",o="apps_permission_menu",l="api/permission_menu",f=!0,p=!0,m=!1,g=!0,b=!0,v=!0,D=!1,y=!1,j=["update"],h=!0,L=["apps_permission"],A=[{columnName:"Menu",fieldName:"menu_title"},{columnName:"App",fieldName:"app_name"}],O=[{filterLabel:"App",fieldName:"id_app"}],w=[{fieldName:"id_menu",fieldLabel:"Menu",type:"table",isM2MDefValFromGrid:!0,isMultiSelection:!0,required:!0},{fieldName:"id_permission",fieldLabel:"Permission",type:"dropdown",required:!0}],C=Object(u.b)("".concat(l,"/getSummaryData"),function(){var e=Object(n.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,s.get("/".concat(l,"/summary"),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),S=Object(u.b)("".concat(l,"/getDataList"),function(){var e=Object(n.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]&&t[e]||delete t[e]})),e.next=3,s.get("/".concat(l),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data,total:a.data.total});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=Object(u.b)("".concat(l,"/getDataById"),function(){var e=Object(n.a)(d.a.mark((function e(t,a){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,s.get("/".concat(l,"/").concat(t));case 4:return r=e.sent,e.abrupt("return",r.data.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),k=Object(u.b)("".concat(l,"/resetSelectedData"),function(){var e=Object(n.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.abrupt("return",a({}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),E=Object(u.b)("".concat(l,"/postData"),function(){var e=Object(n.a)(d.a.mark((function e(t,a){var n,r,u,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,u=a.rejectWithValue,e.prev=1,e.next=4,s.post("/".concat(l),t);case 4:return c=e.sent,n(k({})),b&&(n(S(r()[o].params)),null!==L&&console.log(r()[L])),n(Object(i.resetData)({})),e.abrupt("return",c.data);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",u(e.t0.response.data));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()),M=Object(u.b)("".concat(l,"/putData"),function(){var e=Object(n.a)(d.a.mark((function e(t,a){var n,r,u,c,f;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,u=a.rejectWithValue,c=r()[o].selectedData.id,e.prev=2,e.next=5,s.put("/".concat(l,"/").concat(c),t);case 5:return f=e.sent,n(k({})),g&&(n(S(r()[o].params)),D&&n(C({}))),n(Object(i.resetData)({})),e.abrupt("return",f.data);case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",u(e.t0.response.data));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,a){return e.apply(this,arguments)}}()),N=Object(u.b)("".concat(l,"/deleteData"),function(){var e=Object(n.a)(d.a.mark((function e(t,a){var n,r,u,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,u=a.rejectWithValue,e.prev=1,e.next=4,s.delete("/".concat(l,"/").concat(t));case 4:if(c=e.sent,!v){e.next=9;break}return e.next=8,n(S(r()[o].params));case 8:D&&n(C({}));case 9:return n(Object(i.resetData)({})),e.abrupt("return",c.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",u(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),_=Object(u.b)("".concat(l,"/deleteSelectedRowData"),function(){var e=Object(n.a)(d.a.mark((function e(t,a){var n,r,u,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,u=a.rejectWithValue,e.prev=1,e.next=4,s.delete("/".concat(l),{data:t});case 4:if(c=e.sent,!v){e.next=9;break}return e.next=8,n(S(r()[o].params));case 8:D&&n(C({}));case 9:return n(Object(i.resetData)({})),e.abrupt("return",c.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",u(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),V=Object(u.b)("".concat(l,"/setDataById"),function(){var e=Object(n.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.abrupt("return",n(t));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),W=Object(u.c)({name:o,initialState:{dynamicColumns:A,pageTitle:c,statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,params:{},selectedData:null,dataDropdown:[],statusDetail:0,isLoadingDetail:!1,errorDetail:0,statusAddEdit:0,isLoadingAddEdit:!1,errorAddEdit:0,statusDelete:0,isLoadingDelete:!1,errorDelete:0},reducers:{},extraReducers:function(e){e.addCase(C.pending,(function(e){e.statusSummary="loading",e.isLoadingSummary=!0})).addCase(C.fulfilled,(function(e,t){e.statusSummary="succeeded",e.isLoadingSummary=!1,e.dataSummary=t.payload.data})).addCase(C.rejected,(function(e,t){e.statusSummary="failed",e.isLoadingSummary=!1,e.errorSummary=t.error.message})).addCase(S.pending,(function(e){e.status="loading",e.isLoading=!0})).addCase(S.fulfilled,(function(e,t){e.status="succeeded",e.isLoading=!1,e.data=t.payload.data,e.params=t.payload.params,e.total=t.payload.total})).addCase(S.rejected,(function(e,t){var a;e.status="failed",e.isLoading=!1,e.error=null===(a=t.error.payload)||void 0===a?void 0:a.message})).addCase(M.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(M.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(M.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(E.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(E.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(E.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(N.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(N.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(N.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(_.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(_.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(_.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(x.pending,(function(e){e.statusDetail="loading",e.isLoadingDetail=!0})).addCase(x.fulfilled,(function(e,t){e.selectedData=t.payload,e.statusDetail="succeeded",e.isLoadingDetail=!1})).addCase(x.rejected,(function(e,t){var a;e.statusDetail="failed",e.isLoadingDetail=!1,e.selectedData=null,e.errorDetail=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(k.rejected,(function(e){e.selectedData=null})).addCase(V.rejected,(function(e,t){e.selectedData=t.payload}))}});t.default=W.reducer},764:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(16),d=a(81),u=(a(1207),a(13)),i=a(12),s=a.n(i),c=a(82),o=a(367),l=a(0);t.default=function(e){var t,a=e.lookupMode_fieldName,i=void 0===a?"":a,f=e.lookupMode_isMulti,p=void 0!==f&&f,m=e.lookupMode_onChange,g=e.lookupMode_defaultValue,b=(Object(d.a)().t,Object(r.b)()),v=Object(r.c)((function(e){return e[o.storeName]}));return Object(n.useEffect)((function(){(0===v.data.length||!v.isLoading&&o.getAlwaysGrid)&&b(Object(o.getDataList)({}))}),[b,v.data.length]),Object(l.jsx)(n.Fragment,{children:Object(l.jsx)(c.a,{theme:u.H,defaultValue:p?g:v.dataDropdown.filter((function(e){return e.value===g})),isMulti:p,onChange:function(e){return m(e,i)},options:v.dataDropdown,className:s()("react-select",{"is-invalid":null===(null===(t=v.selectedData)||void 0===t?void 0:t.id)}),classNamePrefix:"select"})})}}}]);
//# sourceMappingURL=57.a7ef0451.chunk.js.map