(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[7,22,31],{356:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return o})),a.d(t,"storeName",(function(){return l})),a.d(t,"endpointName",(function(){return p})),a.d(t,"serverSideGrid",(function(){return f})),a.d(t,"detailFromGrid",(function(){return m})),a.d(t,"getAlwaysGrid",(function(){return b})),a.d(t,"getApiAfterPut",(function(){return g})),a.d(t,"getApiAfterPost",(function(){return j})),a.d(t,"getApiAfterDelete",(function(){return v})),a.d(t,"getApiSummaryData",(function(){return D})),a.d(t,"detailPage",(function(){return y})),a.d(t,"dynamicColumns",(function(){return h})),a.d(t,"dynamicForm",(function(){return O})),a.d(t,"getSummaryData",(function(){return x})),a.d(t,"getDataList",(function(){return S})),a.d(t,"getDataById",(function(){return C})),a.d(t,"resetSelectedData",(function(){return w})),a.d(t,"postData",(function(){return L})),a.d(t,"putData",(function(){return A})),a.d(t,"deleteData",(function(){return E})),a.d(t,"deleteSelectedRowData",(function(){return k})),a.d(t,"setDataById",(function(){return N})),a.d(t,"pushCurrentdata",(function(){return V})),a.d(t,"putCurrentdata",(function(){return I})),a.d(t,"updateCurrentdata",(function(){return W})),a.d(t,"StoreSlice",(function(){return _}));var n=a(9),r=a(7),c=a.n(r),d=a(18),i=a(70),u=a(56),s=a(44).a.ssoAxiosInterceptor,o="App",l="apps_app",p="api/app",f=!0,m=!0,b=!1,g=!1,j=!1,v=!0,D=!0,y=!0,h=[],O=[],x=Object(d.b)("".concat(p,"/getSummaryData"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,s.get("/".concat(p,"/summary"),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),S=Object(d.b)("".concat(p,"/getDataList"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,s.get("/".concat(p),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data,total:a.data.total});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),C=Object(d.b)("".concat(p,"/getDataById"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,s.get("/".concat(p,"/").concat(t));case 4:return r=e.sent,e.abrupt("return",r.data.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),w=Object(d.b)("".concat(p,"/resetSelectedData"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.abrupt("return",a({}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),L=Object(d.b)("".concat(p,"/postData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,d,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,d=a.rejectWithValue,e.prev=1,e.next=4,s.post("/".concat(p),t);case 4:return i=e.sent,n(w({})),n(j?S(r()[l].params):V(i.data)),n(Object(u.resetData)({})),e.abrupt("return",i.data);case 11:return e.prev=11,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",d(e.t0.response.data));case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()),A=Object(d.b)("".concat(p,"/putData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,d,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,d=a.rejectWithValue,i=r()[l].selectedData.id,e.prev=2,e.next=5,s.put("/".concat(p,"/").concat(i),t);case 5:return o=e.sent,n(w({})),g?(n(S(r()[l].params)),D&&n(x({}))):n(I(o.data)),n(Object(u.resetData)({})),e.abrupt("return",o.data);case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",d(e.t0.response.data));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,a){return e.apply(this,arguments)}}()),E=Object(d.b)("".concat(p,"/deleteData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,d,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,d=a.rejectWithValue,e.prev=1,e.next=4,s.delete("/".concat(p,"/").concat(t));case 4:if(i=e.sent,!v){e.next=9;break}return e.next=8,n(S(r()[l].params));case 8:D&&n(x({}));case 9:return n(Object(u.resetData)({})),e.abrupt("return",i.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",d(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),k=Object(d.b)("".concat(p,"/deleteSelectedRowData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,d,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,d=a.rejectWithValue,e.prev=1,e.next=4,s.delete("/".concat(p),{data:t});case 4:if(i=e.sent,!v){e.next=9;break}return e.next=8,n(S(r()[l].params));case 8:D&&n(x({}));case 9:return n(Object(u.resetData)({})),e.abrupt("return",i.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",d(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),N=Object(d.b)("".concat(p,"/setDataById"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.abrupt("return",n(t));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),V=Object(d.b)("".concat(p,"/pushCurrentdata"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.abrupt("return",t);case 5:return e.prev=5,e.t0=e.catch(1),e.abrupt("return",n(e.t0.response.data));case 8:case"end":return e.stop()}}),e,null,[[1,5]])})));return function(t,a){return e.apply(this,arguments)}}()),I=Object(d.b)("".concat(p,"/putCurrentdata"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.abrupt("return",t);case 5:return e.prev=5,e.t0=e.catch(1),e.abrupt("return",n(e.t0.response.data));case 8:case"end":return e.stop()}}),e,null,[[1,5]])})));return function(t,a){return e.apply(this,arguments)}}()),W=Object(d.b)("".concat(p,"/updateCurrentdata"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.abrupt("return",t);case 5:return e.prev=5,e.t0=e.catch(1),e.abrupt("return",n(e.t0.response.data));case 8:case"end":return e.stop()}}),e,null,[[1,5]])})));return function(t,a){return e.apply(this,arguments)}}()),_=Object(d.c)({name:l,initialState:{dynamicColumns:h,pageTitle:o,statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,params:{},selectedData:null,dataDropdown:[],statusDetail:0,isLoadingDetail:!1,errorDetail:0,statusAddEdit:0,isLoadingAddEdit:!1,errorAddEdit:0,statusDelete:0,isLoadingDelete:!1,errorDelete:0},reducers:{},extraReducers:function(e){e.addCase(x.pending,(function(e){e.statusSummary="loading",e.isLoadingSummary=!0})).addCase(x.fulfilled,(function(e,t){e.statusSummary="succeeded",e.isLoadingSummary=!1,e.dataSummary=t.payload.data})).addCase(x.rejected,(function(e,t){e.statusSummary="failed",e.isLoadingSummary=!1,e.errorSummary=t.error.message})).addCase(S.pending,(function(e){e.status="loading",e.isLoading=!0})).addCase(S.fulfilled,(function(e,t){e.status="succeeded",e.isLoading=!1,t.payload.data.length>0&&(e.data=t.payload.data,e.dataDropdown=t.payload.data.map((function(e){return{value:e.id,label:"".concat(e.name)}}))),e.params=t.payload.params,e.total=t.payload.total})).addCase(S.rejected,(function(e,t){var a;e.status="failed",e.isLoading=!1,e.error=null===(a=t.error.payload)||void 0===a?void 0:a.message})).addCase(A.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(A.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(A.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(L.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(L.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(L.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(E.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(E.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(E.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(k.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(k.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(k.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(C.pending,(function(e){e.statusDetail="loading",e.isLoadingDetail=!0})).addCase(C.fulfilled,(function(e,t){e.statusDetail="succeeded",e.isLoadingDetail=!1,e.selectedData=t.payload})).addCase(C.rejected,(function(e,t){var a;e.statusDetail="failed",e.isLoadingDetail=!1,e.selectedData=null,e.errorDetail=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(w.rejected,(function(e){e.selectedData=null})).addCase(N.rejected,(function(e,t){e.selectedData=t.payload})).addCase(V.fulfilled,(function(e,t){e.data.unshift(t.payload.data)})).addCase(I.fulfilled,(function(e,t){var a=Object(i.a)(e).data.findIndex((function(e){return e.id===parseInt(t.payload.data.id)}));-1!==a&&(e.data[a]=t.payload.data)})).addCase(W.fulfilled,(function(e,t){var a=Object(i.a)(e).data.findIndex((function(e){return e.id===parseInt(t.payload.id)}));-1!==a&&(e.data[a].logo.appLogo=t.payload.file)}))}});t.default=_.reducer},365:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return s})),a.d(t,"storeName",(function(){return o})),a.d(t,"endpointName",(function(){return l})),a.d(t,"serverSideGrid",(function(){return p})),a.d(t,"detailFromGrid",(function(){return f})),a.d(t,"getAlwaysGrid",(function(){return m})),a.d(t,"getApiAfterPut",(function(){return b})),a.d(t,"getApiAfterPost",(function(){return g})),a.d(t,"getApiAfterDelete",(function(){return j})),a.d(t,"getApiSummaryData",(function(){return v})),a.d(t,"detailPage",(function(){return D})),a.d(t,"dynamicColumns",(function(){return y})),a.d(t,"dynamicForm",(function(){return h})),a.d(t,"getSummaryData",(function(){return O})),a.d(t,"getDataList",(function(){return x})),a.d(t,"getDataById",(function(){return S})),a.d(t,"resetSelectedData",(function(){return C})),a.d(t,"postData",(function(){return w})),a.d(t,"putData",(function(){return L})),a.d(t,"deleteData",(function(){return A})),a.d(t,"deleteSelectedRowData",(function(){return E})),a.d(t,"setDataById",(function(){return k})),a.d(t,"StoreSlice",(function(){return N}));var n=a(9),r=a(7),c=a.n(r),d=a(18),i=a(56),u=a(44).a.ssoAxiosInterceptor,s="Unit Domain",o="apps_unit_app",l="api/unit_app",p=!0,f=!0,m=!1,b=!0,g=!0,j=!0,v=!1,D=!0,y=[],h=[],O=Object(d.b)("".concat(l,"/getSummaryData"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,u.get("/".concat(l,"/summary"),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=Object(d.b)("".concat(l,"/getDataList"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,u.get("/".concat(l),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data,total:a.data.total});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),S=Object(d.b)("".concat(l,"/getDataById"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,u.get("/".concat(l,"/").concat(t));case 4:return r=e.sent,e.abrupt("return",r.data.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),C=Object(d.b)("".concat(l,"/resetSelectedData"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.abrupt("return",a({}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=Object(d.b)("".concat(l,"/postData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,d,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,d=a.rejectWithValue,e.prev=1,e.next=4,u.post("/".concat(l),t);case 4:return s=e.sent,n(C({})),g&&n(x(r()[o].params)),n(Object(i.resetData)({})),e.abrupt("return",s.data);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",d(e.t0.response.data));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()),L=Object(d.b)("".concat(l,"/putData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,d,s,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,d=a.rejectWithValue,s=r()[o].selectedData.id,e.prev=2,e.next=5,u.put("/".concat(l,"/").concat(s),t);case 5:return p=e.sent,n(C({})),b&&(n(x(r()[o].params)),v&&n(O({}))),n(Object(i.resetData)({})),e.abrupt("return",p.data);case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",d(e.t0.response.data));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,a){return e.apply(this,arguments)}}()),A=Object(d.b)("".concat(l,"/deleteData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,d,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,d=a.rejectWithValue,e.prev=1,e.next=4,u.delete("/".concat(l,"/").concat(t));case 4:if(s=e.sent,!j){e.next=9;break}return e.next=8,n(x(r()[o].params));case 8:v&&n(O({}));case 9:return n(Object(i.resetData)({})),e.abrupt("return",s.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",d(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),E=Object(d.b)("".concat(l,"/deleteSelectedRowData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,d,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,d=a.rejectWithValue,e.prev=1,e.next=4,u.delete("/".concat(l),{data:t});case 4:if(s=e.sent,!j){e.next=9;break}return e.next=8,n(x(r()[o].params));case 8:v&&n(O({}));case 9:return n(Object(i.resetData)({})),e.abrupt("return",s.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",d(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),k=Object(d.b)("".concat(l,"/setDataById"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.abrupt("return",n(t));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),N=Object(d.c)({name:o,initialState:{dynamicColumns:y,pageTitle:s,statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,params:{},selectedData:null,dataDropdown:[],statusDetail:0,isLoadingDetail:!1,errorDetail:0,statusAddEdit:0,isLoadingAddEdit:!1,errorAddEdit:0,statusDelete:0,isLoadingDelete:!1,errorDelete:0},reducers:{},extraReducers:function(e){e.addCase(O.pending,(function(e){e.statusSummary="loading",e.isLoadingSummary=!0})).addCase(O.fulfilled,(function(e,t){e.statusSummary="succeeded",e.isLoadingSummary=!1,e.dataSummary=t.payload.data})).addCase(O.rejected,(function(e,t){e.statusSummary="failed",e.isLoadingSummary=!1,e.errorSummary=t.error.message})).addCase(x.pending,(function(e){e.status="loading",e.isLoading=!0})).addCase(x.fulfilled,(function(e,t){e.status="succeeded",e.isLoading=!1,t.payload.data.length>0&&(e.data=t.payload.data),e.params=t.payload.params,e.total=t.payload.total})).addCase(x.rejected,(function(e,t){var a;e.status="failed",e.isLoading=!1,e.error=null===(a=t.error.payload)||void 0===a?void 0:a.message})).addCase(L.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(L.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(L.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(w.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(w.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(w.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(A.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(A.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(A.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(E.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(E.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(E.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(S.pending,(function(e){e.statusDetail="loading",e.isLoadingDetail=!0})).addCase(S.fulfilled,(function(e,t){e.selectedData=t.payload,e.statusDetail="succeeded",e.isLoadingDetail=!1})).addCase(S.rejected,(function(e,t){var a;e.statusDetail="failed",e.isLoadingDetail=!1,e.selectedData=null,e.errorDetail=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(C.rejected,(function(e){e.selectedData=null})).addCase(k.rejected,(function(e,t){e.selectedData=t.payload}))}});t.default=N.reducer},367:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(6),c=a(2),d=a(33),i=a(24),u=(a(169),a(5)),s=a(78),o=a(64),l=(a(256),a(114),a(34)),p=a(13),f=a(79),m=(a(135),a(145),a(1237),a(46)),b=a(365),g=a(356),j=a(16),v=a(12),D=a.n(v),y=a(47),h=a(0);t.default=function(e){var t,a,v,O,x=e.show,S=e.setShow,C=e.detailPage,w=e.formState,L=e.setFormState,A=Object(s.a)().t,E=Object(d.g)().id,k=Object(j.b)(),N=Object(j.c)((function(e){return e[b.storeName]})),V=Object(j.c)((function(e){return e.apps_app})),I=Object(j.c)((function(e){return e.units})),W=Object(c.useState)(N.selectedData),_=Object(r.a)(W,2),T=_[0],B=(_[1],Object(c.useContext)(l.a).colors),P=Object(c.useState)("Please Wait"),G=Object(r.a)(P,2),R=(G[0],G[1]),F=Object(c.useState)(null),J=Object(r.a)(F,2),q=J[0],U=J[1],H=Object(c.useState)([]),M=Object(r.a)(H,2),Y=M[0],z=M[1],K=Object(c.useState)({}),Q=Object(r.a)(K,2),X=Q[0],Z=Q[1],$=Object(m.e)({}),ee=$.control,te=$.setError,ae=$.handleSubmit,ne=$.formState.errors,re=function(){k(Object(b.resetSelectedData)())};return Object(c.useEffect)((function(){0!==V.data.length&&V.isLoading||k(Object(g.getDataList)({})),U(V.dataDropdown.filter((function(e){var t;return e.value===(null===(t=N.selectedData)||void 0===t?void 0:t.id_app)})));var e=I.dataDropdown.filter((function(e){return""!==e.value}));z(e),Z(e.filter((function(e){var t;return e.value===(null===(t=N.selectedData)||void 0===t?void 0:t.id_unit)})))}),[]),Object(h.jsx)(u.G,{isOpen:x,toggle:function(){re(),S(!x)},className:"modal-dialog-centered modal-lg",children:Object(h.jsxs)(o.a,{blocking:N.isLoadingAddEdit||N.isLoadingDetail,loader:Object(h.jsx)(y.b,{}),children:[Object(h.jsx)(u.J,{className:"bg-transparent",toggle:function(){re(),S(!x)}}),Object(h.jsxs)(u.H,{className:"px-sm-5 pt-50 pb-5",children:[Object(h.jsx)("div",{className:"text-center mb-2",children:Object(h.jsxs)("h2",{className:"mb-1",children:[A("edit"===w?"Edit":"Add")," ",A(b.pageTitle)]})}),Object(h.jsx)(u.y,{onSubmit:ae("edit"===w?function(e){if(e.id_unit=X.value,e.id_app=q.value,function(e){if("edit"===w){var t=Object(n.a)({},Object(p.I)(N.selectedData));for(var a in delete t.id,t)a in e||delete t[a];return JSON.stringify(Object(p.I)(t))!==JSON.stringify(Object(p.I)(e))}return!0}(e))if(Object.values(e).every((function(e){return null!==e&&""!==e})))R("".concat(A("Updating")," ").concat(A(b.pageTitle)," ").concat(A("Detail")," Data")),k(Object(b.putData)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(S(!x),i.b.success("".concat(A("Successfully Updated")," ").concat(A(b.pageTitle)),{style:{padding:"16px",color:B.success.main,border:"1px solid ".concat(B.success.main)},iconTheme:{primary:B.success.main}}),C&&k(Object(b.getDataById)(E))):"rejected"===e.meta.requestStatus&&i.b.error(e.payload.message,{style:{padding:"16px",color:B.danger.main,border:"1px solid ".concat(B.danger.main)},iconTheme:{primary:B.danger.main}})}));else for(var t in e){var a;0===(null===(a=e[t])||void 0===a?void 0:a.length)&&te(t,{type:"manual"})}else Object(i.b)("".concat(A("You haven't changed anything")),{icon:"\ud83d\udc4f"})}:function(e){if(Object.values(e).every((function(e){return null!==e&&""!==e})))e.id_unit=X,e.id_app=q,delete e.description,R("".concat(A("Creating a New ".concat(b.pageTitle)))),k(Object(b.postData)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(S(!x),i.b.success("".concat(A("Successfully Created")," ").concat(A(b.pageTitle)),{style:{padding:"16px",color:B.success.main,border:"1px solid ".concat(B.success.main)},iconTheme:{primary:B.success.main}}),C&&k(Object(b.getDataById)(E))):"rejected"===e.meta.requestStatus&&i.b.error(e.payload.message,{style:{padding:"16px",color:B.danger.main,border:"1px solid ".concat(B.danger.main)},iconTheme:{primary:B.danger.main}})}));else for(var t in e){var a;null!==e[t]&&0===(null===(a=e[t])||void 0===a?void 0:a.length)&&te(t,{type:"manual"})}}),children:Object(h.jsxs)(u.S,{className:"gy-1 pt-75",children:[Object(h.jsxs)(u.t,{md:12,xs:12,children:[Object(h.jsxs)(u.E,{className:"form-label",for:"domain",children:[A("Domain Address"),Object(h.jsx)("span",{className:"text-danger",children:"*"})]}),Object(h.jsx)(m.a,{defaultValue:null!==(t=null===(a=N.selectedData)||void 0===a?void 0:a.domain)&&void 0!==t?t:"",control:ee,id:"domain",name:"domain",render:function(e){var t=e.field;return Object(h.jsx)(u.B,Object(n.a)(Object(n.a)({},t),{},{className:ne.domain?"form-control is-invalid":"form-control",id:"domain",invalid:ne.domain&&!0}))}})]}),Object(h.jsxs)(u.t,{md:12,xs:12,children:[Object(h.jsx)(u.E,{className:"form-label",for:"id_app",children:A("App")}),Object(h.jsx)(f.a,{id:"id_app",theme:p.H,defaultValue:V.dataDropdown.filter((function(e){return e.value===(null===T||void 0===T?void 0:T.id_app)})),onChange:function(e){U(e.value)},options:V.dataDropdown,className:D()("react-select",{"is-invalid":null===q}),classNamePrefix:"select"})]}),Object(h.jsxs)(u.t,{md:12,xs:12,children:[Object(h.jsx)(u.E,{className:"form-label",for:"id_unit",children:A("Unit")}),Object(h.jsx)(f.a,{id:"id_unit",isClearable:!1,theme:p.H,closeMenuOnSelect:!0,defaultValue:I.dataDropdown.filter((function(e){return e.value===(null===T||void 0===T?void 0:T.id_unit)})),onChange:function(e){var t;t=e,console.log(t),Z(t.value)},options:Y,className:"react-select",classNamePrefix:"select"})]}),Object(h.jsxs)(u.t,{md:12,xs:12,children:[Object(h.jsx)(u.E,{className:"form-label",for:"description",children:A("Description")}),Object(h.jsx)(m.a,{defaultValue:null!==(v=null===(O=N.selectedData)||void 0===O?void 0:O.description)&&void 0!==v?v:"",control:ee,id:"description",name:"description",render:function(e){var t=e.field;return Object(h.jsx)(u.B,Object(n.a)(Object(n.a)({},t),{},{className:ne.domain?"form-control is-invalid":"form-control",type:"textarea",id:"description",invalid:ne.description&&!0}))}})]}),Object(h.jsxs)(u.t,{xs:12,className:"text-center mt-2 pt-50",children:[Object(h.jsx)(u.i,{type:"submit",className:"me-1",color:"primary",children:A("Submit")}),Object(h.jsx)(u.i,{type:"reset",color:"secondary",outline:!0,onClick:function(){re(),L("add"),S(!1)},children:A("Cancel")})]})]})})]})]})})}}}]);
//# sourceMappingURL=7.52739b88.chunk.js.map