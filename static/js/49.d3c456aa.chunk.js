(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[49,23,146],{1202:function(t,e,a){},361:function(t,e,a){"use strict";a.r(e),a.d(e,"pageTitle",(function(){return s})),a.d(e,"storeName",(function(){return o})),a.d(e,"endpointName",(function(){return l})),a.d(e,"serverSideGrid",(function(){return f})),a.d(e,"detailFromGrid",(function(){return p})),a.d(e,"getAlwaysGrid",(function(){return m})),a.d(e,"getApiAfterPut",(function(){return g})),a.d(e,"getApiAfterPost",(function(){return b})),a.d(e,"getApiAfterDelete",(function(){return v})),a.d(e,"getApiSummaryData",(function(){return D})),a.d(e,"detailPage",(function(){return y})),a.d(e,"deleteSelection",(function(){return j})),a.d(e,"disabledAction",(function(){return h})),a.d(e,"isManyToManyGrid",(function(){return L})),a.d(e,"storeToRefreshAfterAll",(function(){return O})),a.d(e,"isTreeLayout",(function(){return w})),a.d(e,"dynamicColumns",(function(){return A})),a.d(e,"dynamicColumnsFilter",(function(){return x})),a.d(e,"dynamicForm",(function(){return C})),a.d(e,"extraCrud",(function(){return S})),a.d(e,"getSummaryData",(function(){return k})),a.d(e,"getDataList",(function(){return E})),a.d(e,"setDataList",(function(){return N})),a.d(e,"getDataById",(function(){return V})),a.d(e,"resetSelectedData",(function(){return W})),a.d(e,"postData",(function(){return _})),a.d(e,"putData",(function(){return M})),a.d(e,"deleteData",(function(){return R})),a.d(e,"deleteSelectedRowData",(function(){return G})),a.d(e,"setDataById",(function(){return I})),a.d(e,"StoreSlice",(function(){return T}));var n=a(9),r=a(7),d=a.n(r),u=a(18),i=a(56),c=a(44).a.ssoAxiosInterceptor,s="Endpoint",o="apps_endpoint",l="api/endpoint",f=!0,p=!0,m=!1,g=!0,b=!0,v=!0,D=!1,y=!0,j=!1,h=[],L=!0,O=[],w=!1,A=[{columnName:"Url",fieldName:"url_path",minWidth:"350px"}],x=[{filterLabel:"App",fieldName:"id_app"}],C=[{fieldName:"url_path",fieldLabel:"Url",type:"text",required:!0},{fieldName:"id_app",fieldLabel:"App",type:"dropdown",required:!0,datafromStore:"app"}],S=[],k=Object(u.b)("".concat(l,"/getSummaryData"),function(){var t=Object(n.a)(d.a.mark((function t(e){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Object.keys(e).forEach((function(t){null!==e[t]&&""!==e[t]||delete e[t]})),t.next=3,c.get("/".concat(l,"/summary"),{params:e});case 3:return a=t.sent,t.abrupt("return",{params:e,data:a.data.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),E=Object(u.b)("".concat(l,"/getDataList"),function(){var t=Object(n.a)(d.a.mark((function t(e){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Object.keys(e).forEach((function(t){null!==e[t]&&""!==e[t]||delete e[t]})),t.next=3,c.get("/".concat(l),{params:e});case 3:return a=t.sent,t.abrupt("return",{params:e,data:a.data.data,total:a.data.total});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),N=Object(u.b)("".concat(l,"/setDataList"),function(){var t=Object(n.a)(d.a.mark((function t(e,a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.rejectWithValue,t.abrupt("return",n(e));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),V=Object(u.b)("".concat(l,"/getDataById"),function(){var t=Object(n.a)(d.a.mark((function t(e,a){var n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.rejectWithValue,t.prev=1,t.next=4,c.get("/".concat(l,"/").concat(e));case 4:return r=t.sent,t.abrupt("return",r.data.data);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",n(t.t0.response.data));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,a){return t.apply(this,arguments)}}()),W=Object(u.b)("".concat(l,"/resetSelectedData"),function(){var t=Object(n.a)(d.a.mark((function t(e){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.rejectWithValue,t.abrupt("return",a({}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),_=Object(u.b)("".concat(l,"/postData"),function(){var t=Object(n.a)(d.a.mark((function t(e,a){var n,r,u,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.getState,u=a.rejectWithValue,t.prev=1,t.next=4,c.post("/".concat(l),e);case 4:return s=t.sent,n(W({})),b&&n(E(r()[o].params)),n(Object(i.resetData)({})),t.abrupt("return",s.data);case 11:return t.prev=11,t.t0=t.catch(1),t.abrupt("return",u(t.t0.response.data));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a){return t.apply(this,arguments)}}()),M=Object(u.b)("".concat(l,"/putData"),function(){var t=Object(n.a)(d.a.mark((function t(e,a){var n,r,u,s,f,p,m;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.dispatch,u=a.getState,s=a.rejectWithValue,f=null!==(n=e.id)&&void 0!==n?n:u()[o].selectedData.id,(p=e.notReload)&&delete e.notReload,t.prev=4,t.next=7,c.put("/".concat(l,"/").concat(f),e);case 7:if(m=t.sent,r(W({})),!g||p){t.next=13;break}return t.next=12,r(E(u()[o].params));case 12:D&&r(k({}));case 13:return r(Object(i.resetData)({})),t.abrupt("return",m.data);case 17:return t.prev=17,t.t0=t.catch(4),t.abrupt("return",s(t.t0.response.data));case 20:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(e,a){return t.apply(this,arguments)}}()),R=Object(u.b)("".concat(l,"/deleteData"),function(){var t=Object(n.a)(d.a.mark((function t(e,a){var n,r,u,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.getState,u=a.rejectWithValue,t.prev=1,t.next=4,c.delete("/".concat(l,"/").concat(e));case 4:if(s=t.sent,!v){t.next=9;break}return t.next=8,n(E(r()[o].params));case 8:D&&n(k({}));case 9:return n(Object(i.resetData)({})),t.abrupt("return",s.data);case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",u(t.t0.response.data));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,a){return t.apply(this,arguments)}}()),G=Object(u.b)("".concat(l,"/deleteSelectedRowData"),function(){var t=Object(n.a)(d.a.mark((function t(e,a){var n,r,u,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.dispatch,r=a.getState,u=a.rejectWithValue,t.prev=1,t.next=4,c.delete("/".concat(l),{data:e});case 4:if(s=t.sent,!v){t.next=9;break}return t.next=8,n(E(r()[o].params));case 8:D&&n(k({}));case 9:return n(Object(i.resetData)({})),t.abrupt("return",s.data);case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",u(t.t0.response.data));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,a){return t.apply(this,arguments)}}()),I=Object(u.b)("".concat(l,"/setDataById"),function(){var t=Object(n.a)(d.a.mark((function t(e,a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.rejectWithValue,t.abrupt("return",n(e));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),T=Object(u.c)({name:o,initialState:{pageTitle:s,dynamicColumns:A,statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,params:{},selectedData:null,dataDropdown:[],statusDetail:0,isLoadingDetail:!1,errorDetail:0,statusAddEdit:0,isLoadingAddEdit:!1,errorAddEdit:0,statusDelete:0,isLoadingDelete:!1,errorDelete:0},reducers:{},extraReducers:function(t){t.addCase(k.pending,(function(t){t.statusSummary="loading",t.isLoadingSummary=!0})).addCase(k.fulfilled,(function(t,e){t.statusSummary="succeeded",t.isLoadingSummary=!1,t.dataSummary=e.payload.data})).addCase(k.rejected,(function(t,e){t.statusSummary="failed",t.isLoadingSummary=!1,t.errorSummary=e.error.message})).addCase(E.pending,(function(t){t.status="loading",t.isLoading=!0})).addCase(E.fulfilled,(function(t,e){t.data=e.payload.data,t.params=e.payload.params,t.total=e.payload.total,t.dataDropdown=e.payload.data.map((function(t){return{value:t.id,label:t.title}})),t.status="succeeded",t.isLoading=!1})).addCase(E.rejected,(function(t,e){var a;t.status="failed",t.isLoading=!1,t.error=null===(a=e.error.payload)||void 0===a?void 0:a.message})).addCase(M.pending,(function(t){t.statusAddEdit="loading",t.isLoadingAddEdit=!0})).addCase(M.fulfilled,(function(t){t.statusAddEdit="succeeded",t.isLoadingAddEdit=!1})).addCase(M.rejected,(function(t,e){var a;t.statusAddEdit="failed",t.isLoadingAddEdit=!1,t.errorAddEdit=null===(a=e.payload)||void 0===a?void 0:a.message})).addCase(_.pending,(function(t){t.statusAddEdit="loading",t.isLoadingAddEdit=!0})).addCase(_.fulfilled,(function(t){t.statusAddEdit="succeeded",t.isLoadingAddEdit=!1})).addCase(_.rejected,(function(t,e){var a;t.statusAddEdit="failed",t.isLoadingAddEdit=!1,t.errorAddEdit=null===(a=e.payload)||void 0===a?void 0:a.message})).addCase(R.pending,(function(t){t.statusDelete="loading",t.isLoadingDelete=!0})).addCase(R.fulfilled,(function(t){t.statusDelete="succeeded",t.isLoadingDelete=!1})).addCase(R.rejected,(function(t,e){var a;t.statusDelete="failed",t.isLoadingDelete=!1,t.errorDelete=null===(a=e.payload)||void 0===a?void 0:a.message})).addCase(G.pending,(function(t){t.statusDelete="loading",t.isLoadingDelete=!0})).addCase(G.fulfilled,(function(t){t.statusDelete="succeeded",t.isLoadingDelete=!1})).addCase(G.rejected,(function(t,e){var a;t.statusDelete="failed",t.isLoadingDelete=!1,t.errorDelete=null===(a=e.payload)||void 0===a?void 0:a.message})).addCase(V.pending,(function(t){t.statusDetail="loading",t.isLoadingDetail=!0})).addCase(V.fulfilled,(function(t,e){t.statusDetail="succeeded",t.isLoadingDetail=!1,t.selectedData=e.payload})).addCase(V.rejected,(function(t,e){var a;t.statusDetail="failed",t.isLoadingDetail=!1,t.selectedData=null,t.errorDetail=null===(a=e.payload)||void 0===a?void 0:a.message})).addCase(W.rejected,(function(t){t.selectedData=null})).addCase(N.rejected,(function(t,e){t.data=e.payload})).addCase(I.rejected,(function(t,e){t.selectedData=e.payload}))}});e.default=T.reducer},761:function(t,e,a){"use strict";a.r(e);var n=a(2),r=a(16),d=a(85),u=(a(1202),a(13)),i=a(12),c=a.n(i),s=a(78),o=a(361),l=a(0);e.default=function(t){var e,a=t.lookupMode_fieldName,i=void 0===a?"":a,f=t.lookupMode_isMulti,p=void 0!==f&&f,m=t.lookupMode_onChange,g=t.lookupMode_defaultValue,b=(Object(d.a)().t,Object(r.b)()),v=Object(r.c)((function(t){return t[o.storeName]}));return Object(n.useEffect)((function(){(0===v.data.length||!v.isLoading&&o.getAlwaysGrid)&&b(Object(o.getDataList)({}))}),[b,v.data.length]),Object(l.jsx)(n.Fragment,{children:Object(l.jsx)(s.a,{theme:u.H,defaultValue:p?g:v.dataDropdown.filter((function(t){return t.value===g})),isMulti:p,onChange:function(t){return m(t,i)},options:v.dataDropdown,className:c()("react-select",{"is-invalid":null===(null===(e=v.selectedData)||void 0===e?void 0:e.id)}),classNamePrefix:"select"})})}}}]);
//# sourceMappingURL=49.d3c456aa.chunk.js.map