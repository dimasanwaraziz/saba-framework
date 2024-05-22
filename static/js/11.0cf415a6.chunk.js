(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[11,24,66,132],{358:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return l})),a.d(t,"storeName",(function(){return d})),a.d(t,"endpointName",(function(){return u})),a.d(t,"serverSideGrid",(function(){return m})),a.d(t,"detailFromGrid",(function(){return p})),a.d(t,"getAlwaysGrid",(function(){return b})),a.d(t,"getApiAfterPut",(function(){return f})),a.d(t,"getApiAfterPost",(function(){return j})),a.d(t,"getApiAfterDelete",(function(){return g})),a.d(t,"getApiSummaryData",(function(){return h})),a.d(t,"detailPage",(function(){return O})),a.d(t,"deleteSelection",(function(){return x})),a.d(t,"dynamicColumns",(function(){return v})),a.d(t,"dynamicColumnsFilter",(function(){return y})),a.d(t,"dynamicForm",(function(){return D})),a.d(t,"extraCrud",(function(){return w})),a.d(t,"getSummaryData",(function(){return S})),a.d(t,"getDataList",(function(){return C})),a.d(t,"getDataById",(function(){return N})),a.d(t,"resetSelectedData",(function(){return L})),a.d(t,"postData",(function(){return A})),a.d(t,"putData",(function(){return T})),a.d(t,"deleteData",(function(){return k})),a.d(t,"deleteSelectedRowData",(function(){return E})),a.d(t,"setDataById",(function(){return F})),a.d(t,"StoreSlice",(function(){return _}));var n=a(9),r=a(7),c=a.n(r),i=a(18),s=a(56),o=a(44).a.ssoAxiosInterceptor,l="Permission",d="apps_permission",u="api/permission",m=!0,p=!0,b=!1,f=!0,j=!0,g=!0,h=!1,O=!0,x=!1,v=[],y=[{filterLabel:"Role",fieldName:"id_role"}],D=[],w=[{crudName:"permission_menu",crudLabel:"Permission to Menu"},{crudName:"permission_endpoint",crudLabel:"Permission to Endpoint"}],S=Object(i.b)("".concat(u,"/getSummaryData"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,o.get("/".concat(u,"/summary"),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),C=Object(i.b)("".concat(u,"/getDataList"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,o.get("/".concat(u),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data,total:a.data.total});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),N=Object(i.b)("".concat(u,"/getDataById"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,o.get("/".concat(u,"/").concat(t));case 4:return r=e.sent,e.abrupt("return",r.data.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),L=Object(i.b)("".concat(u,"/resetSelectedData"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.abrupt("return",a({}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),A=Object(i.b)("".concat(u,"/postData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,i,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,i=a.rejectWithValue,e.prev=1,e.next=4,o.post("/".concat(u),t);case 4:return l=e.sent,n(L({})),j&&n(C(r()[d].params)),n(Object(s.resetData)({})),e.abrupt("return",l.data);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",i(e.t0.response.data));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()),T=Object(i.b)("".concat(u,"/putData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,i,l,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,i=a.rejectWithValue,l=r()[d].selectedData.id,e.prev=2,e.next=5,o.put("/".concat(u,"/").concat(l),t);case 5:return m=e.sent,n(L({})),f&&(n(C(r()[d].params)),h&&n(S({}))),n(Object(s.resetData)({})),e.abrupt("return",m.data);case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",i(e.t0.response.data));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,a){return e.apply(this,arguments)}}()),k=Object(i.b)("".concat(u,"/deleteData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,i,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,i=a.rejectWithValue,e.prev=1,e.next=4,o.delete("/".concat(u,"/").concat(t));case 4:if(l=e.sent,!g){e.next=9;break}return e.next=8,n(C(r()[d].params));case 8:h&&n(S({}));case 9:return n(Object(s.resetData)({})),e.abrupt("return",l.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",i(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),E=Object(i.b)("".concat(u,"/deleteSelectedRowData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,i,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,i=a.rejectWithValue,e.prev=1,e.next=4,o.delete("/".concat(u),{data:t});case 4:if(l=e.sent,!g){e.next=9;break}return e.next=8,n(C(r()[d].params));case 8:h&&n(S({}));case 9:return n(Object(s.resetData)({})),e.abrupt("return",l.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",i(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),F=Object(i.b)("".concat(u,"/setDataById"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.abrupt("return",n(t));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),_=Object(i.c)({name:d,initialState:{dynamicColumns:v,pageTitle:l,statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,params:{},selectedData:null,dataDropdown:[],statusDetail:0,isLoadingDetail:!1,errorDetail:0,statusAddEdit:0,isLoadingAddEdit:!1,errorAddEdit:0,statusDelete:0,isLoadingDelete:!1,errorDelete:0},reducers:{},extraReducers:function(e){e.addCase(S.pending,(function(e){e.statusSummary="loading",e.isLoadingSummary=!0})).addCase(S.fulfilled,(function(e,t){e.statusSummary="succeeded",e.isLoadingSummary=!1,e.dataSummary=t.payload.data})).addCase(S.rejected,(function(e,t){e.statusSummary="failed",e.isLoadingSummary=!1,e.errorSummary=t.error.message})).addCase(C.pending,(function(e){e.status="loading",e.isLoading=!0})).addCase(C.fulfilled,(function(e,t){e.status="succeeded",e.isLoading=!1,t.payload.data.length>0&&(e.data=t.payload.data,e.dataDropdown=t.payload.data.map((function(e){return{value:e.id,label:e.title,post:!1,put:!1,delete:!1,get:!1}}))),e.params=t.payload.params,e.total=t.payload.total})).addCase(C.rejected,(function(e,t){var a;e.status="failed",e.isLoading=!1,e.error=null===(a=t.error.payload)||void 0===a?void 0:a.message})).addCase(T.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(T.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(T.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(A.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(A.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(A.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(k.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(k.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(k.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(E.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(E.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(E.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(N.pending,(function(e){e.statusDetail="loading",e.isLoadingDetail=!0})).addCase(N.fulfilled,(function(e,t){e.statusDetail="succeeded",e.isLoadingDetail=!1,e.selectedData=t.payload})).addCase(N.rejected,(function(e,t){var a;e.statusDetail="failed",e.isLoadingDetail=!1,e.selectedData=null,e.errorDetail=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(L.rejected,(function(e){e.selectedData=null})).addCase(F.rejected,(function(e,t){e.selectedData=t.payload}))}});t.default=_.reducer},371:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(6),c=a(2),i=a(33),s=a(25),o=(a(168),a(5)),l=a(81),d=a(64),u=(a(753),a(102),a(34)),m=(a(13),a(136),a(145),a(1260),a(46),a(47)),p=a(358),b=a(16),f=a(754),j=a(0);t.default=function(e){var t=e.show,a=e.setShow,g=e.detailPage,h=e.formState,O=e.setFormState,x=Object(l.a)().t,v=(Object(i.g)().id,Object(b.b)()),y=Object(b.c)((function(e){return e[p.storeName]})),D=Object(c.useContext)(u.a).colors,w=Object(c.useState)("Please Wait"),S=Object(r.a)(w,2),C=(S[0],S[1]);function N(e){return Object.keys(e).sort().reduce((function(t,a){return t[a]=e[a],t}),{})}function L(){return v(Object(p.resetSelectedData)()),O("add"),a(!1)}return g?null:Object(j.jsx)(o.G,{isOpen:t,toggle:function(){L(),a(!t)},className:"modal-dialog-centered modal-lg",children:Object(j.jsxs)(d.a,{blocking:y.isLoadingAddEdit||y.isLoadingDetail,loader:Object(j.jsx)(m.b,{}),children:[Object(j.jsx)(o.J,{className:"bg-transparent",toggle:function(){L(),a(!t)}}),Object(j.jsxs)(o.H,{className:"px-sm-5 pt-50 pb-5",children:[Object(j.jsx)("div",{className:"text-center mb-2",children:Object(j.jsxs)("h2",{className:"mb-1",children:[x("edit"===h?"Edit":"Add")," ",x(p.pageTitle)]})}),Object(j.jsx)(f.default,{formState:h,updateDataToApi:function(e){if(function(e){if("edit"===h){var t=Object(n.a)({},N(y.selectedData));for(var a in delete t.id,t)a in e||delete t[a];return JSON.stringify(N(t))!==JSON.stringify(N(e))}return!0}(e))if(Object.values(e).every((function(e){return null!==e&&""!==e})))C("".concat(x("Updating")," ").concat(x(p.pageTitle)," ").concat(x("Detail")," Data")),v(Object(p.putData)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(a(!t),s.b.success("".concat(x("Successfully Updated")," ").concat(x(p.pageTitle)),{style:{padding:"16px",color:D.success.main,border:"1px solid ".concat(D.success.main)},iconTheme:{primary:D.success.main}})):"rejected"===e.meta.requestStatus&&s.b.error(e.payload.message,{style:{padding:"16px",color:D.danger.main,border:"1px solid ".concat(D.danger.main)},iconTheme:{primary:D.danger.main}})}));else for(var r in e){var c;0===(null===(c=e[r])||void 0===c?void 0:c.length)&&setError(r,{type:"manual"})}else Object(s.b)("".concat(x("You haven't changed anything")),{icon:"\ud83d\udc4f"})},postDataToApi:function(e){if(Object.values(e).every((function(e){return null!==e&&""!==e})))C("".concat(x("Creating a New ".concat(p.pageTitle)))),v(Object(p.postData)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(a(!t),s.b.success("".concat(x("Successfully Created")," ").concat(x(p.pageTitle)),{style:{padding:"16px",color:D.success.main,border:"1px solid ".concat(D.success.main)},iconTheme:{primary:D.success.main}})):"rejected"===e.meta.requestStatus&&s.b.error(e.payload.message,{style:{padding:"16px",color:D.danger.main,border:"1px solid ".concat(D.danger.main)},iconTheme:{primary:D.danger.main}})}));else for(var n in e){var r;null!==e[n]&&0===(null===(r=e[n])||void 0===r?void 0:r.length)&&setError(n,{type:"manual"})}},handleReset:L})]})]})})}},754:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(6),c=a(2),i=a(33),s=(a(168),a(5)),o=a(81),l=(a(64),a(753),a(102),a(34)),d=(a(13),a(136),a(145),a(1260),a(46)),u=a(358),m=a(16),p=a(0);t.default=function(e){var t,a,b,f,j,g,h=e.formState,O=e.updateDataToApi,x=e.postDataToApi,v=e.handleReset,y=Object(o.a)().t,D=(Object(i.g)().id,Object(m.b)(),Object(m.c)((function(e){return e[u.storeName]}))),w=(Object(c.useContext)(l.a).colors,Object(c.useState)("Please Wait")),S=Object(r.a)(w,2),C=(S[0],S[1],Object(d.e)({})),N=C.control,L=(C.setError,C.handleSubmit),A=C.formState.errors;return Object(p.jsx)(s.y,{onSubmit:L("edit"===h?O:x),children:Object(p.jsxs)(s.U,{className:"gy-1 pt-75",children:[Object(p.jsxs)(s.t,{md:12,xs:12,children:[Object(p.jsxs)(s.E,{className:"form-label",for:"title",children:[y("Title"),Object(p.jsx)("span",{className:"text-danger",children:"*"})]}),Object(p.jsx)(d.a,{defaultValue:null!==(t=null===(a=D.selectedData)||void 0===a?void 0:a.title)&&void 0!==t?t:"",control:N,id:"title",name:"title",render:function(e){var t=e.field;return Object(p.jsx)(s.B,Object(n.a)(Object(n.a)({},t),{},{className:A.title?"form-control is-invalid":"form-control",id:"title",invalid:A.title&&!0}))}})]}),Object(p.jsxs)(s.t,{md:12,xs:12,children:[Object(p.jsxs)(s.E,{className:"form-label",for:"description",children:[y("Description"),Object(p.jsx)("span",{className:"text-danger",children:"*"})]}),Object(p.jsx)(d.a,{defaultValue:null!==(b=null===(f=D.selectedData)||void 0===f?void 0:f.description)&&void 0!==b?b:"",control:N,id:"description",name:"description",render:function(e){var t=e.field;return Object(p.jsx)(s.B,Object(n.a)(Object(n.a)({},t),{},{className:A.description?"form-control is-invalid":"form-control",id:"description",invalid:A.description&&!0}))}})]}),Object(p.jsxs)(s.t,{md:12,xs:12,children:[Object(p.jsxs)(s.E,{className:"form-label",for:"subject",children:[y("Subject"),Object(p.jsx)("span",{className:"text-danger",children:"*"})]}),Object(p.jsx)(d.a,{defaultValue:null!==(j=null===(g=D.selectedData)||void 0===g?void 0:g.subject)&&void 0!==j?j:"",control:N,id:"subject",name:"subject",render:function(e){var t=e.field;return Object(p.jsx)(s.B,Object(n.a)(Object(n.a)({},t),{},{className:A.subject?"form-control is-invalid":"form-control",id:"subject",invalid:A.subject&&!0}))}})]}),Object(p.jsxs)(s.t,{xs:12,className:"text-center mt-2 pt-50",children:[Object(p.jsx)(s.i,{type:"submit",className:"me-1",color:"primary",children:y("Submit")}),Object(p.jsx)(s.i,{type:"reset",color:"secondary",outline:!0,onClick:v,children:y("Cancel")})]})]})})}},774:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(9),c=a(6),i=a(4),s=a(7),o=a.n(s),l=a(2),d=a(11),u=a.n(d),m=a(33),p=a(30),b=a(81),f=a(42),j=a(371),g=a(13),h=a(147),O=a(358),x=(a(189),a(16)),v=a(169),y=a.n(v),D=a(170),w=a.n(D),S=a(84),C=a.n(S),N=a(216),L=a(47),A=a(64),T=(a(753),a(34)),k=a(25),E=a(5),F=(a(94),a(105),a(43)),_=a.n(F),P=a(49),B=a.n(P),M=a(87),R=(a(95),a(0)),V=B()(_.a),G=Object(l.forwardRef)((function(e,t){return Object(R.jsx)("div",{className:"form-check",children:Object(R.jsx)(E.B,Object(i.a)({type:"checkbox",ref:t},e))})})),I=function(e){e.store;var t=e.handleAddEdit,n=e.handlePerPage,r=e.rowsPerPage,i=e.handleFilter,s=e.searchTerm,o=(e.selectedRow,e.handleDeleteSelected,e.handleFiltersChange),d=(e.filtersCustomAdd,Object(b.a)().t),u=Object(l.useContext)(f.a),m=Object(x.b)(),p=Object(x.c)((function(e){return e})),j=Object(l.useState)({}),g=Object(c.a)(j,2),h=g[0],v=g[1],y=Object(l.useState)({}),D=Object(c.a)(y,2),w=D[0],S=(D[1],function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t="filter_".concat(t),a)if(w[t]){var n=w[t].indexOf(e);-1!==n?w[t].splice(n,1):w[t].push(e)}else w[t]=[e];else w[t]=e;return o(w[t],t)});return Object(l.useEffect)((function(){for(var e={},t=function(t){var n,r,c,i,s,o=O.dynamicColumnsFilter[t].fieldName,d=O.dynamicColumnsFilter[t].fieldName.replaceAll("id_","");w["filter_".concat(o)]=null;var u=Object(l.lazy)((function(){return a(1264)("./".concat(d))}));e["".concat(d,"_comp")]=Object(R.jsx)(u,{lookupMode:!0,lookupMode_fieldName:o,lookupMode_dropdown:!0,lookupMode_isMulti:null!==(n=O.dynamicColumnsFilter[t].isMultiSelection)&&void 0!==n&&n,lookupMode_onChange:S,lookupMode_defaultValue:null!==(r=O.dynamicColumnsFilter[t])&&void 0!==r&&r.isM2MDefValFromGrid?p[O.storeName].data.map((function(e){return e[o]})):null!==(c=p[O.storeName])&&void 0!==c&&c.selectedData?p[O.storeName].selectedData[o]:"",lookupMode_isM2MDefValFromGrid:null!==(i=null===(s=O.dynamicColumnsFilter[t])||void 0===s?void 0:s.isM2MDefValFromGrid)&&void 0!==i&&i})},n=0;n<O.dynamicColumnsFilter.length;n++)t(n);v(e)}),[m,w]),Object(R.jsxs)(E.U,{className:"text-nowrap w-100 my-75 g-0 permission-header",children:[Object(R.jsx)(E.t,{xs:12,lg:4,className:"d-flex align-items-center",children:Object(R.jsxs)("div",{className:"d-flex align-items-center justify-content-center justify-content-lg-start",children:[Object(R.jsx)("label",{htmlFor:"rows-per-page",children:d("Show")}),Object(R.jsxs)(E.B,{className:"mx-50",type:"select",id:"rows-per-page",value:r,onChange:n,style:{width:"5rem"},children:[Object(R.jsx)("option",{value:"10",children:"10"}),Object(R.jsx)("option",{value:"25",children:"25"}),Object(R.jsx)("option",{value:"50",children:"50"})]}),Object(R.jsx)("label",{htmlFor:"rows-per-page",children:d("Entries")})]})}),Object(R.jsx)(E.t,{xs:12,lg:8,children:Object(R.jsxs)("div",{className:"d-flex align-items-center justify-content-lg-end justify-content-start flex-md-nowrap flex-wrap mt-lg-0 mt-1",children:[Object(R.jsxs)("div",{className:"d-flex align-items-center me-1",children:[Object(R.jsxs)("label",{className:"mb-0",htmlFor:"search-invoice",children:[d("Search"),":"]}),Object(R.jsx)(E.B,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:s,onChange:function(e){return i(e.target.value)}})]}),O.dynamicColumnsFilter.map((function(e,t){var a=e.fieldName.replaceAll("id_","");return Object(R.jsx)("div",{className:"mt-50 width-300 me-1 mt-sm-0 mt-1",children:Object(R.jsx)(l.Suspense,{fallback:Object(R.jsx)("div",{children:"Loading..."}),children:h["".concat(a,"_comp")]})},a)})),u.can("post",sessionStorage.getItem("current_page_perm"))?Object(R.jsxs)(E.i,{className:"add-permission mt-sm-0 mt-1",color:"primary",onClick:t,children:[d("Add New")," ",d(O.pageTitle)]}):null]})})]})};t.default=function(e){var t=e.filtersCustomAdd,a=Object(x.b)(),s=Object(x.c)((function(e){return e[O.storeName]})),d=Object(b.a)().t,v=(Object(l.useContext)(f.a),Object(l.useContext)(T.a).colors),D=Object(l.useState)("desc"),S=Object(c.a)(D,2),F=S[0],_=S[1],P=Object(l.useState)(""),B=Object(c.a)(P,2),W=B[0],q=B[1],H=Object(l.useState)(1),z=Object(c.a)(H,2),J=z[0],Y=z[1],U=Object(l.useState)("id"),K=Object(c.a)(U,2),Q=K[0],X=K[1],Z=Object(l.useState)(10),$=Object(c.a)(Z,2),ee=$[0],te=$[1],ae=Object(l.useState)([]),ne=Object(c.a)(ae,2),re=ne[0],ce=ne[1],ie=Object(l.useState)(null!==t&&void 0!==t?t:{}),se=Object(c.a)(ie,2),oe=se[0],le=(se[1],Object(l.useState)(!1)),de=Object(c.a)(le,2),ue=de[0],me=de[1],pe=Object(l.useState)(!1),be=Object(c.a)(pe,2),fe=be[0],je=be[1],ge=Object(l.useState)(!1),he=Object(c.a)(ge,2),Oe=he[0],xe=he[1],ve=Object(l.useState)("Please Wait"),ye=Object(c.a)(ve,2),De=(ye[0],ye[1]),we=Object(l.useState)(!1),Se=Object(c.a)(we,2),Ce=Se[0],Ne=Se[1],Le=Object(l.useState)(null),Ae=Object(c.a)(Le,2),Te=Ae[0],ke=Ae[1],Ee=Object(m.f)(),Fe=Object(m.e)(),_e={Viewer:"light-info",Editor:"light-success",Manager:"light-warning",Administrator:"light-primary","restricted-user":"light-danger"},Pe=function(e){e.id?ke("add"):ke("edit"),O.detailPage?e.id?Ee("".concat(Fe.pathname,"/edit/").concat(e.id)):a(Object(O.resetSelectedData)({})).then((function(e){Ee("".concat(Fe.pathname,"/add"))})):O.detailFromGrid?(De("".concat(d("Loading")," ").concat(d("Detail")," ").concat(d("Data")," ").concat(d(O.pageTitle))),xe(!0),a(Object(O.setDataById)(e)).then((function(){xe(!1),Ne(!0)}))):(De("".concat(d("Loading")," ").concat(d("Detail")," ").concat(d("Data")," ").concat(d(O.pageTitle))),xe(!0),a(Object(O.getDataById)(e.id)).then((function(e){"rejected"===e.meta.requestStatus?(xe(!1),k.b.error(e.payload.message,{style:{padding:"16px",color:v.danger.main,border:"1px solid ".concat(v.danger.main)},iconTheme:{primary:v.danger.main}})):(xe(!1),Ne(!0))})))},Be=function(){je(!fe),Ne(!Ce),Object(g.G)()},Me=function(){var e=Object(r.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.fire({title:"".concat(d("Are you sure?")),text:"".concat(d("You won't be able to revert")," ").concat(d(O.pageTitle),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(d("Yes, Delete")," ").concat(d(O.pageTitle),"!"),cancelButtonText:"".concat(d("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 2:e.sent.value&&(De("".concat(d("Deleting")," Data ").concat(d(O.pageTitle))),xe(!0),a(Object(O.deleteData)(t)).then((function(e){"fulfilled"===e.meta.requestStatus?(xe(!1),k.b.success("".concat(d("Successfully deleted")," ").concat(d(O.pageTitle)),{style:{padding:"16px",color:v.success.main,border:"1px solid ".concat(v.success.main)},iconTheme:{primary:v.success.main}})):"rejected"===e.meta.requestStatus&&(xe(!1),k.b.error(e.payload.message,{style:{padding:"16px",color:v.danger.main,border:"1px solid ".concat(v.danger.main)},iconTheme:{primary:v.danger.main}}))})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Re=function(){var e=Object(r.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=re.length,e.next=3,V.fire({title:"".concat(d("Are you sure?")),text:"".concat(d("You will delete")," ").concat(t," ").concat(d("selected data. Deleted data cannot be recovered"),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(d("Yes, Delete")," ").concat(t," ").concat(d(O.pageTitle),"!"),cancelButtonText:"".concat(d("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 3:e.sent.value&&(De("".concat(d("Deleting")," ").concat(t," Data ").concat(d(O.pageTitle))),xe(!0),n=re.map((function(e){return e.id})),a(Object(O.deleteSelectedRowData)({id:n})).then((function(e){"fulfilled"===e.meta.requestStatus?(ce([]),me(!ue),xe(!1),k.b.success("".concat(d("Successfully deleted")," ").concat(t," ").concat(d(O.pageTitle)),{style:{padding:"16px",color:v.success.main,border:"1px solid ".concat(v.success.main)},iconTheme:{primary:v.success.main}})):"rejected"===e.meta.requestStatus&&(xe(!1),k.b.error(e.payload.message,{style:{padding:"16px",color:v.danger.main,border:"1px solid ".concat(v.danger.main)},iconTheme:{primary:v.danger.main}}))})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ve=Object(l.useCallback)(C()((function(e){a(Object(O.getDataList)(Object(i.a)({sort_dir:F,search:e,sort:Q,page:J,length:ee},oe)))}),500),[]),Ge=Object(l.useCallback)((function(e){ce(e.selectedRows)}),[]),Ie=[{when:function(e){return Array.isArray(e)},classNames:["d-table"]}],We=[].concat(Object(n.a)(s.dynamicColumns.map((function(e){return{name:e.columnName,sortField:e.fieldName,center:!1,wrap:!0,grow:0,sortable:!0,width:"250px",selector:function(t){return t[e.fieldName]},cell:function(t){return renderCell(t,e)}}}))),[{name:d("Title"),center:!1,sortable:!0,wrap:!0,width:"350px",sortField:"title",selector:function(e){return e.title},cell:function(e){var t=e.title,a=e.description?e.description:"";return Object(R.jsx)("div",{className:"d-flex justify-content-left align-items-center",children:Object(R.jsxs)("div",{className:"d-flex flex-column",children:[Object(R.jsx)("h6",{className:"user-name text-truncate mb-0",children:t}),Object(R.jsx)("small",{className:"text-truncate text-muted mb-0",children:a})]})})}},{name:d("Assigned To"),sortable:!1,wrap:!1,grow:2,width:"300px",cell:function(e){var t=e.assignedTo;return t?t.map((function(e,a){var n=t[t.length-1]===a;return Object(R.jsx)(p.b,{to:"/apps/roles",className:u()({"me-50":!n}),children:Object(R.jsx)(E.f,{pill:!0,color:_e[e],style:{marginTop:"2px"},className:"text-capitalize",children:null===e||void 0===e?void 0:e.replace("-"," ")})},"".concat(e,"-").concat(a))})):null}},{name:d("Apps"),center:!1,sortable:!1,wrap:!0,width:"200px",cell:function(e){var t=e.appsName;return t?t.map((function(e,a){var n=t[t.length-1]===a;return Object(R.jsx)(p.b,{to:"/apps/app",className:u()({"me-50":!n}),children:Object(R.jsx)(E.f,{pill:!0,color:_e[e],className:"text-capitalize",children:e.replace("-"," ")})},"".concat(e,"-").concat(a))})):null}},{name:d("Resources"),center:!1,sortable:!1,width:"160px",selector:function(e){return e.menuCount},cell:function(e){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(p.b,{to:"/apps/permission_menu",className:"me-50",children:Object(R.jsxs)(E.f,{pill:!0,color:"light-info",className:"text-capitalize",children:[e.menuCount," ",d("Menu")]})},"table-field-count-menu"),Object(R.jsx)(p.b,{to:"/apps/permission_endpoint",children:Object(R.jsxs)(E.f,{pill:!0,color:"light-warning",className:"text-capitalize",children:[e.endpointCount," ",d("Endpoint")]})},"table-field-count-endpoint")]})}},{name:d("Actions"),center:!0,width:"140px",cell:function(e){return Object(R.jsx)(h.a,{row:e,handleDelete:Me,handleEdit:Pe,storeName:O.storeName})}}]),qe=Object(l.useMemo)((function(){return s.isLoading?We.map((function(e){return Object(i.a)(Object(i.a)({name:d(e.name)},e),{},{sortable:!1,cell:function(t){return"Actions"===e.name?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(M.a,{sx:{bgcolor:v.dark.light},animation:"wave",className:"ms-2 me-1",width:30,height:40}),Object(R.jsx)(M.a,{sx:{bgcolor:v.dark.light},animation:"wave",width:30,height:40})]}):Object(R.jsx)(M.a,{sx:{bgcolor:v.dark.light},animation:"wave",width:"100%",height:40})}})})):We.map((function(e){return Object(i.a)({name:d(e.name)},e)}))}),[s.isLoading,We]);return Object(l.useEffect)((function(){0!==s.data.length&&!O.getAlwaysGrid||s.isLoading||(De("".concat(d("Loading Data")," ").concat(d(O.pageTitle))),a(Object(O.getDataList)(Object(i.a)({sort_dir:F,sort:Q,search:W,page:J,length:ee},oe))))}),[a,s.data.length,F,Q,J]),Object(R.jsxs)(l.Fragment,{children:[Object(R.jsx)(A.a,{blocking:Oe,loader:Object(R.jsx)(L.b,{}),children:Object(R.jsx)(E.l,{className:"overflow-hidden",children:Object(R.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(R.jsx)(w.a,{noHeader:!0,subHeader:!0,sortServer:!0,responsive:!0,pagination:!0,paginationServer:!0,paginationTotalRows:s.total,paginationComponent:function(){var e=Number(Math.ceil(s.total/ee));return Object(R.jsx)(y.a,{previousLabel:"",nextLabel:"",pageCount:e||1,activeClassName:"active",forcePage:0!==J?J-1:0,onPageChange:function(e){return function(e){a(Object(O.getDataList)(Object(i.a)({sort_dir:F,sort:Q,search:W,length:ee,page:e.selected+1},oe))),Y(e.selected+1)}(e)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},selectableRows:O.deleteSelection,onSelectedRowsChange:Ge,selectableRowsHighlight:!0,clearSelectedRows:ue,selectableRowsComponent:G,noDataComponent:Object(R.jsx)(L.c,{}),style:{"min-height":"400px"},highlightOnHover:!0,pointerOnHover:!0,columns:qe,conditionalRowStyles:Ie,onSort:function(e,t){_(t),X(e.sortField),a(Object(O.getDataList)(Object(i.a)({sort_dir:F,sort:Q,search:W,page:J,length:ee},oe)))},sortIcon:Object(R.jsx)(N.a,{}),className:"react-dataTable",data:function(){var e={search:W},t=Object.keys(e).some((function(t){return e[t].length>0}));return s.isLoading?Array(10).fill({}):s.data.length>0?s.data:0===s.data.length&&t?[]:void 0}(),subHeaderComponent:Object(R.jsx)(I,{store:s,searchTerm:W,rowsPerPage:ee,handleFilter:function(e){q(e),Ve(e)},handlePerPage:function(e){var t=parseInt(e.currentTarget.value);a(Object(O.getDataList)(Object(i.a)({sort_dir:F,sort:Q,search:W,length:t,page:J},oe))),te(t)},handleAddEdit:Pe,selectedRow:re,handleDeleteSelected:Re,handleFiltersChange:function(e,t){oe[t]=e,a(Object(O.getDataList)(Object(i.a)({sort_dir:F,sort:Q,search:W,page:J,length:ee},oe)))},filtersCustomAdd:t})})})})}),Ce&&Object(R.jsx)(j.default,{formState:Te,show:Ce,setShow:function(){ke("add"),je(!fe),Ne(!Ce),Object(g.z)(Be)},detailPage:O.detailPage,setFormState:ke})]})}}}]);
//# sourceMappingURL=11.0cf415a6.chunk.js.map