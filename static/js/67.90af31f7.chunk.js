(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[67,20,27],{358:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return d})),a.d(t,"storeName",(function(){return u})),a.d(t,"endpointName",(function(){return m})),a.d(t,"serverSideGrid",(function(){return p})),a.d(t,"detailFromGrid",(function(){return b})),a.d(t,"getAlwaysGrid",(function(){return j})),a.d(t,"getApiAfterPut",(function(){return f})),a.d(t,"getApiAfterPost",(function(){return g})),a.d(t,"getApiAfterDelete",(function(){return h})),a.d(t,"getApiSummaryData",(function(){return O})),a.d(t,"detailPage",(function(){return x})),a.d(t,"getSummaryData",(function(){return v})),a.d(t,"getDataList",(function(){return y})),a.d(t,"getDataById",(function(){return D})),a.d(t,"resetSelectedData",(function(){return S})),a.d(t,"postData",(function(){return w})),a.d(t,"putData",(function(){return N})),a.d(t,"deleteData",(function(){return C})),a.d(t,"deleteSelectedRowData",(function(){return L})),a.d(t,"setDataById",(function(){return k})),a.d(t,"resetData",(function(){return T})),a.d(t,"StoreSlice",(function(){return A}));var n=a(9),c=a(7),r=a.n(c),s=a(18),i=a(44),o=a(56),l=i.a.ssoAxiosInterceptor,d="Role",u="apps_role",m="api/role",p=!1,b=!1,j=!1,f=!0,g=!0,h=!0,O=!0,x=!0,v=Object(s.b)("".concat(m,"/getSummaryData"),function(){var e=Object(n.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,l.get("/".concat(m,"/summary"),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),y=Object(s.b)("".concat(m,"/getDataList"),function(){var e=Object(n.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,l.get("/".concat(m),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data,total:a.data.total});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),D=Object(s.b)("".concat(m,"/getDataById"),function(){var e=Object(n.a)(r.a.mark((function e(t,a){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,l.get("/".concat(m,"/").concat(t));case 4:return c=e.sent,e.abrupt("return",c.data.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),S=Object(s.b)("".concat(m,"/resetSelectedData"),function(){var e=Object(n.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.abrupt("return",a({}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=Object(s.b)("".concat(m,"/postData"),function(){var e=Object(n.a)(r.a.mark((function e(t,a){var n,c,s,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,c=a.getState,s=a.rejectWithValue,e.prev=1,e.next=4,l.post("/".concat(m),t);case 4:return i=e.sent,n(S({})),g&&n(y(c()[u].params)),n(Object(o.resetData)({})),e.abrupt("return",i.data);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",s(e.t0.response.data));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()),N=Object(s.b)("".concat(m,"/putData"),function(){var e=Object(n.a)(r.a.mark((function e(t,a){var n,c,s,i,d,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.dispatch,s=a.getState,i=a.rejectWithValue,d=null!==(n=t.id)&&void 0!==n?n:s()[u].selectedData.id,t.name=s()[u].selectedData.name,e.prev=3,e.next=6,l.put("/".concat(m,"/").concat(d),t);case 6:return p=e.sent,c(S({})),f&&(c(y(s()[u].params)),O&&c(v({}))),c(Object(o.resetData)({})),e.abrupt("return",p.data);case 13:return e.prev=13,e.t0=e.catch(3),e.abrupt("return",i(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t,a){return e.apply(this,arguments)}}()),C=Object(s.b)("".concat(m,"/deleteData"),function(){var e=Object(n.a)(r.a.mark((function e(t,a){var n,c,s,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,c=a.getState,s=a.rejectWithValue,e.prev=1,e.next=4,l.delete("/".concat(m,"/").concat(t));case 4:if(i=e.sent,!h){e.next=9;break}return e.next=8,n(y(c()[u].params));case 8:O&&n(v({}));case 9:return n(Object(o.resetData)({})),e.abrupt("return",i.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",s(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),L=Object(s.b)("".concat(m,"/deleteSelectedRowData"),function(){var e=Object(n.a)(r.a.mark((function e(t,a){var n,c,s,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,c=a.getState,s=a.rejectWithValue,e.prev=1,e.next=4,l.delete("/".concat(m),{data:t});case 4:if(i=e.sent,!h){e.next=9;break}return e.next=8,n(y(c()[u].params));case 8:O&&n(v({}));case 9:return n(Object(o.resetData)({})),e.abrupt("return",i.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",s(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),k=Object(s.b)("".concat(m,"/setDataById"),function(){var e=Object(n.a)(r.a.mark((function e(t,a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.abrupt("return",n(t));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),T=Object(s.b)("".concat(m,"/resetData"),function(){var e=Object(n.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.abrupt("return",a({}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),A=Object(s.c)({name:u,initialState:{pageTitle:d,statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,params:{},selectedData:null,dataDropdown:[],statusDetail:0,isLoadingDetail:!1,errorDetail:0,statusAddEdit:0,isLoadingAddEdit:!1,errorAddEdit:0,statusDelete:0,isLoadingDelete:!1,errorDelete:0},reducers:{},extraReducers:function(e){e.addCase(v.pending,(function(e){e.statusSummary="loading",e.isLoadingSummary=!0})).addCase(v.fulfilled,(function(e,t){e.statusSummary="succeeded",e.isLoadingSummary=!1,e.dataSummary=t.payload.data})).addCase(v.rejected,(function(e,t){e.statusSummary="failed",e.isLoadingSummary=!1,e.errorSummary=t.error.message})).addCase(y.pending,(function(e){e.status="loading",e.isLoading=!0})).addCase(y.fulfilled,(function(e,t){e.status="succeeded",e.isLoading=!1,t.payload.data.length>0&&(e.data=t.payload.data,e.dataDropdown=t.payload.data.map((function(e){return{value:e.id,label:"".concat(e.name)}})),e.selectedData={value:t.payload.data[0].id,label:"".concat(t.payload.data[0].name)}),e.params=t.payload.params,e.total=t.payload.total})).addCase(y.rejected,(function(e,t){var a;e.status="failed",e.isLoading=!1,e.error=null===(a=t.error.payload)||void 0===a?void 0:a.message})).addCase(N.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(N.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(N.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(w.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(w.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(w.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(C.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(C.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(C.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(L.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(L.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(L.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(D.pending,(function(e){e.statusDetail="loading",e.isLoadingDetail=!0})).addCase(D.fulfilled,(function(e,t){e.statusDetail="succeeded",e.isLoadingDetail=!1,e.selectedData=t.payload})).addCase(D.rejected,(function(e,t){var a;e.statusDetail="failed",e.isLoadingDetail=!1,e.selectedData=null,e.errorDetail=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(S.rejected,(function(e){e.selectedData=null})).addCase(k.rejected,(function(e,t){e.selectedData=t.payload})).addCase(T.rejected,(function(e){e.data=[],e.dataSummary=[]}))}});t.default=A.reducer},371:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(6),r=a(257),s=a(63),i=a(34),o=(a(145),a(114),a(2)),l=a(46),d=a(24),u=a(78),m=a(33),p=a(5),b=a(358),j=a(16),f=a(0);t.default=function(e){var t,a,g,h,O=e.show,x=e.setShow,v=e.detailPage,y=e.formState,D=e.setFormState,S=Object(u.a)().t,w=Object(m.g)().id,N=Object(j.b)(),C=Object(j.c)((function(e){return e[b.storeName]})),L=Object(o.useContext)(i.a).colors,k=Object(o.useState)(null),T=Object(c.a)(k,2),A=(T[0],T[1],Object(o.useState)("Please Wait")),E=Object(c.a)(A,2),_=E[0],B=E[1],I=Object(l.e)({}),P=I.control,F=I.setError,Y=I.handleSubmit,R=I.formState.errors,W=function(){return Object(f.jsxs)(o.Fragment,{children:[Object(f.jsx)(r.a,{}),Object(f.jsxs)(p.r,{className:"mb-0 mt-1",children:[S(_),"..."]})]})};function V(e){return Object.keys(e).sort().reduce((function(t,a){return t[a]=e[a],t}),{})}var q=function(){N(Object(b.resetSelectedData)())};return Object(f.jsx)(p.G,{isOpen:O,toggle:function(){q(),x(!O)},className:"modal-dialog-centered modal-lg",children:Object(f.jsxs)(s.a,{blocking:C.isLoadingAddEdit||C.isLoadingDetail,loader:Object(f.jsx)(W,{}),children:[Object(f.jsx)(p.J,{className:"bg-transparent",toggle:function(){q(),x(!O)}}),Object(f.jsxs)(p.H,{className:"px-sm-5 pt-50 pb-5",children:[Object(f.jsx)("div",{className:"text-center mb-2",children:Object(f.jsxs)("h2",{className:"mb-1",children:[S("edit"===y?"Edit":"Add")," ",S(b.pageTitle)]})}),Object(f.jsx)(p.y,{onSubmit:Y("edit"===y?function(e){if(function(e){if("edit"===y){var t=Object(n.a)({},V(C.selectedData));for(var a in delete t.id,t)a in e||delete t[a];return JSON.stringify(V(t))!==JSON.stringify(V(e))}return!0}(e))if(Object.values(e).every((function(e){return null!==e&&""!==e})))B("".concat(S("Updating")," ").concat(S(b.pageTitle)," ").concat(S("Detail")," Data")),N(Object(b.putData)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(x(!O),d.b.success("".concat(S("Successfully Updated")," ").concat(S(b.pageTitle)),{style:{padding:"16px",color:L.success.main,border:"1px solid ".concat(L.success.main)},iconTheme:{primary:L.success.main}}),v&&N(Object(b.getDataById)(w))):"rejected"===e.meta.requestStatus&&d.b.error(e.payload.message,{style:{padding:"16px",color:L.danger.main,border:"1px solid ".concat(L.danger.main)},iconTheme:{primary:L.danger.main}})}));else for(var t in e){var a;0===(null===(a=e[t])||void 0===a?void 0:a.length)&&F(t,{type:"manual"})}else Object(d.b)("".concat(S("You haven't changed anything")),{icon:"\ud83d\udc4f"})}:function(e){if(Object.values(e).every((function(e){return null!==e&&""!==e})))B("".concat(S("Creating a New ".concat(b.pageTitle)))),N(Object(b.postData)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(x(!O),d.b.success("".concat(S("Successfully Created")," ").concat(S(b.pageTitle)),{style:{padding:"16px",color:L.success.main,border:"1px solid ".concat(L.success.main)},iconTheme:{primary:L.success.main}}),v&&N(Object(b.getDataById)(w))):"rejected"===e.meta.requestStatus&&d.b.error(e.payload.message,{style:{padding:"16px",color:L.danger.main,border:"1px solid ".concat(L.danger.main)},iconTheme:{primary:L.danger.main}})}));else for(var t in e){var a;null!==e[t]&&0===(null===(a=e[t])||void 0===a?void 0:a.length)&&F(t,{type:"manual"})}}),children:Object(f.jsxs)(p.S,{className:"gy-1 pt-75",children:[Object(f.jsxs)(p.t,{md:12,xs:12,children:[Object(f.jsxs)(p.E,{className:"form-label",for:"name",children:[S("Name"),Object(f.jsx)("span",{className:"text-danger",children:"*"})]}),Object(f.jsx)(l.a,{defaultValue:null!==(t=null===(a=C.selectedData)||void 0===a?void 0:a.name)&&void 0!==t?t:"",control:P,id:"name",name:"name",render:function(e){var t=e.field;return Object(f.jsx)(p.B,Object(n.a)(Object(n.a)({},t),{},{className:R.name?"form-control is-invalid":"form-control",id:"name",invalid:R.name&&!0}))}})]}),Object(f.jsxs)(p.t,{md:12,xs:12,children:[Object(f.jsxs)(p.E,{className:"form-label",for:"description",children:[S("Description"),Object(f.jsx)("span",{className:"text-danger",children:"*"})]}),Object(f.jsx)(l.a,{defaultValue:null!==(g=null===(h=C.selectedData)||void 0===h?void 0:h.description)&&void 0!==g?g:"",control:P,id:"description",name:"description",render:function(e){var t=e.field;return Object(f.jsx)(p.B,Object(n.a)(Object(n.a)({},t),{},{className:R.description?"form-control is-invalid":"form-control",id:"description",invalid:R.description&&!0}))}})]}),Object(f.jsxs)(p.t,{xs:12,className:"text-center mt-2 pt-50",children:[Object(f.jsx)(p.i,{type:"submit",className:"me-1",color:"primary",children:S("Submit")}),Object(f.jsx)(p.i,{type:"reset",color:"secondary",outline:!0,onClick:function(){q(),D("add"),x(!1)},children:S("Cancel")})]})]})})]})]})})}},783:function(e,t,a){"use strict";a.r(t);var n=a(9),c=a(6),r=a(4),s=a(7),i=a.n(s),o=a(13),l=a(42),d=a(84),u=a.n(d),m=a(2),p=a(171),b=a.n(p),j=a(454),f=a(450),g=a(542),h=a(545),O=a(541),x=a(321),v=a(317),y=a(214),D=a(78),S=a(170),w=a.n(S),N=a(16),C=a(190),L=a(371),k=a(358),T=a(63),A=a(34),E=a(24),_=a(5),B=a(83),I=a(47),P=(a(94),a(103),a(43)),F=a.n(P),Y=a(49),R=a.n(Y),W=a(0),V=R()(F.a),q=Object(m.forwardRef)((function(e,t){return Object(W.jsx)("div",{className:"form-check",children:Object(W.jsx)(_.B,Object(r.a)({type:"checkbox",ref:t},e))})})),G=function(e){e.store;var t=e.toggleSidebar,a=e.handlePerPage,n=e.rowsPerPage,c=e.handleFilter,r=e.searchTerm,s=e.selectedRow,i=e.handleDeleteSelected,d=Object(D.a)().t,u=Object(m.useContext)(l.a),p=Object(N.b)(),b=(Object(N.c)((function(e){return e.invoices})),Object(o.q)());return Object(W.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(W.jsxs)(_.S,{children:[Object(W.jsx)(_.t,{xl:"4",className:"d-flex align-items-center p-0",children:Object(W.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(W.jsx)("label",{htmlFor:"rows-per-page",children:d("Show")}),Object(W.jsxs)(_.B,{className:"mx-50",type:"select",id:"rows-per-page",value:n,onChange:a,style:{width:"5rem"},children:[Object(W.jsx)("option",{value:"10",children:"10"}),Object(W.jsx)("option",{value:"25",children:"25"}),Object(W.jsx)("option",{value:"50",children:"50"})]}),Object(W.jsx)("label",{htmlFor:"rows-per-page",children:d("Entries")})]})}),Object(W.jsxs)(_.t,{xl:"8",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[(null===s||void 0===s?void 0:s.length)>0&&u.can("delete",sessionStorage.getItem("current_page_perm"))?Object(W.jsx)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:Object(W.jsxs)(_.i,{className:"delete-users",color:"danger",onClick:i,children:[d("Delete")," ",s.length," ",d("Selected ".concat(k.pageTitle))]})}):null,Object(W.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(W.jsxs)("label",{className:"mb-0",htmlFor:"search-invoice",children:[d("Search"),":"]}),Object(W.jsx)(_.B,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:r,onChange:function(e){return c(e.target.value)}})]}),Object(W.jsxs)("div",{className:"d-flex align-items-center table-header-actions",children:[Object(W.jsxs)(_.Y,{className:"me-1",children:[Object(W.jsxs)(_.x,{color:"secondary",caret:!0,outline:!0,children:[Object(W.jsx)(j.a,{className:"font-small-4 me-50"}),Object(W.jsx)("span",{className:"align-middle",children:d("Export")})]}),Object(W.jsxs)(_.w,{children:[Object(W.jsxs)(_.v,{className:"w-100",onClick:function(){return p(Object(C.getInvoice)({rpt_name:"sample",output_type:"pdf",dataYear:b.dataYear,print:!0,as_attachment:!0,par_UNITKEY:139,par_SAMPLE:"ahh...ini adalah sample parameter"}))},children:[Object(W.jsx)(f.a,{className:"font-small-4 me-50"}),Object(W.jsx)("span",{className:"align-middle",children:d("Print")})]}),Object(W.jsxs)(_.v,{className:"w-100",onClick:function(){return p(Object(C.getInvoice)({rpt_name:"sample",output_type:"pdf",dataYear:b.dataYear,par_UNITKEY:139,par_SAMPLE:"ahh...ini adalah sample parameter"}))},children:[Object(W.jsx)(g.a,{className:"font-small-4 me-50"}),Object(W.jsx)("span",{className:"align-middle",children:"PDF"})]}),Object(W.jsxs)(_.v,{className:"w-100",onClick:function(){return p(Object(C.getInvoice)({rpt_name:"sample",output_type:"xls",dataYear:b.dataYear,as_attachment:!0,par_UNITKEY:139,par_SAMPLE:"ahh...ini adalah sample parameter"}))},children:[Object(W.jsx)(h.a,{className:"font-small-4 me-50"}),Object(W.jsx)("span",{className:"align-middle",children:"Excel"})]}),Object(W.jsxs)(_.v,{className:"w-100",onClick:function(){return p(Object(C.getInvoice)({rpt_name:"sample",output_type:"csv",dataYear:b.dataYear,as_attachment:!0,par_UNITKEY:139,par_SAMPLE:"ahh...ini adalah sample parameter"}))},children:[Object(W.jsx)(O.a,{className:"font-small-4 me-50"}),Object(W.jsx)("span",{className:"align-middle",children:"CSV"})]})]})]}),u.can("post",sessionStorage.getItem("current_page_perm"))?Object(W.jsxs)(_.i,{className:"add-new-user",color:"primary",onClick:t,children:[d("Add New")," ",d(k.pageTitle)]}):null]})]})]})})};t.default=function(){var e=Object(N.b)(),t=Object(N.c)((function(e){return e[k.storeName]})),a=Object(D.a)().t,r=Object(m.useContext)(l.a),s=Object(m.useContext)(A.a).colors,d=Object(m.useState)("desc"),p=Object(c.a)(d,2),j=p[0],f=p[1],g=Object(m.useState)(""),h=Object(c.a)(g,2),O=h[0],S=h[1],C=Object(m.useState)(1),P=Object(c.a)(C,2),F=P[0],Y=P[1],R=Object(m.useState)("id"),H=Object(c.a)(R,2),M=H[0],U=H[1],J=Object(m.useState)(10),K=Object(c.a)(J,2),z=K[0],Z=K[1],Q=Object(m.useState)([]),X=Object(c.a)(Q,2),$=X[0],ee=X[1],te=Object(m.useState)(!1),ae=Object(c.a)(te,2),ne=ae[0],ce=ae[1],re=Object(m.useState)(!1),se=Object(c.a)(re,2),ie=se[0],oe=se[1],le=Object(m.useState)(!1),de=Object(c.a)(le,2),ue=de[0],me=de[1],pe=Object(m.useState)("Please Wait"),be=Object(c.a)(pe,2),je=(be[0],be[1]),fe=Object(m.useState)(!1),ge=Object(c.a)(fe,2),he=ge[0],Oe=ge[1],xe=Object(m.useState)(null),ve=Object(c.a)(xe,2),ye=ve[0],De=ve[1],Se=function(){oe(!ie),Oe(!he),Object(o.G)()},we=function(){De("add"),oe(!ie),Oe(!he),Object(o.z)(Se)},Ne=function(){var t=Object(n.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V.fire({title:"".concat(a("Are you sure?")),text:"".concat(a("You won't be able to revert")," ").concat(a(k.pageTitle),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(a("Yes, Delete")," ").concat(a(k.pageTitle),"!"),cancelButtonText:"".concat(a("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 2:t.sent.value&&(je("".concat(a("Deleting")," Data ").concat(a(k.pageTitle))),me(!0),e(Object(k.deleteData)(n)).then((function(e){"fulfilled"===e.meta.requestStatus?(me(!1),E.b.success("".concat(a("Successfully deleted")," ").concat(a(k.pageTitle)),{style:{padding:"16px",color:s.success.main,border:"1px solid ".concat(s.success.main)},iconTheme:{primary:s.success.main}})):"rejected"===e.meta.requestStatus&&(me(!1),E.b.error(e.payload.message,{style:{padding:"16px",color:s.danger.main,border:"1px solid ".concat(s.danger.main)},iconTheme:{primary:s.danger.main}}))})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Ce=function(){var t=Object(n.a)(i.a.mark((function t(){var n,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=$.length,t.next=3,V.fire({title:"".concat(a("Are you sure?")),text:"".concat(a("You will delete")," ").concat(n," ").concat(a("selected data. Deleted data cannot be recovered"),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(a("Yes, Delete")," ").concat(n," ").concat(a(k.pageTitle),"!"),cancelButtonText:"".concat(a("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 3:t.sent.value&&(je("".concat(a("Deleting")," ").concat(n," Data ").concat(a(k.pageTitle))),me(!0),c=$.map((function(e){return e.id})),e(Object(k.deleteSelectedRowData)({id:c})).then((function(e){"fulfilled"===e.meta.requestStatus?(ee([]),ce(!ne),me(!1),E.b.success("".concat(a("Successfully deleted")," ").concat(n," ").concat(a(k.pageTitle)),{style:{padding:"16px",color:s.success.main,border:"1px solid ".concat(s.success.main)},iconTheme:{primary:s.success.main}})):"rejected"===e.meta.requestStatus&&(me(!1),E.b.error(e.payload.message,{style:{padding:"16px",color:s.danger.main,border:"1px solid ".concat(s.danger.main)},iconTheme:{primary:s.danger.main}}))})));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Le=Object(m.useCallback)(u()((function(t){e(Object(k.getDataList)({sort_dir:j,search:t,sort:M,page:F,length:z}))}),500),[]),ke=Object(m.useCallback)((function(e){ee(e.selectedRows)}),[]),Te=[{name:a("Name"),center:!1,sortable:!0,sortField:"name",selector:function(e){return e.name},cell:function(e){return e.name}},{name:a("Description"),center:!1,sortable:!0,sortField:"description",selector:function(e){return e.description},cell:function(e){return e.description}},{name:a("Actions"),center:!0,width:"140px",cell:function(t){return Object(W.jsxs)("div",{className:"column-action text-center",children:[r.can("delete",sessionStorage.getItem("current_page_perm"))?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(_.i.Ripple,{id:"btn-delete",className:"btn-icon rounded-circle",color:"flat-danger",onClick:function(e){e.preventDefault(),Ne(t.id)},children:Object(W.jsx)(x.a,{size:16})}),Object(W.jsx)(_.Z,{placement:"left",target:"btn-delete",children:a("Delete")})]}):null,r.can("update",sessionStorage.getItem("current_page_perm"))?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(_.i.Ripple,{className:"btn-icon rounded-circle",color:"flat-info",id:"btn-edit",onClick:function(n){var c;n.preventDefault(),c=t,De("edit"),k.detailFromGrid?(je("".concat(a("Loading")," ").concat(a("Detail")," ").concat(a("Data")," ").concat(a(k.pageTitle))),me(!0),e(Object(k.setDataById)(c)).then((function(){me(!1),Oe(!0)}))):(je("".concat(a("Loading")," ").concat(a("Detail")," ").concat(a("Data")," ").concat(a(k.pageTitle))),me(!0),e(Object(k.getDataById)(c.id)).then((function(e){"rejected"===e.meta.requestStatus?(me(!1),E.b.error(e.payload.message,{style:{padding:"16px",color:s.danger.main,border:"1px solid ".concat(s.danger.main)},iconTheme:{primary:s.danger.main}})):(me(!1),Oe(!0))})))},children:Object(W.jsx)(v.a,{size:16})}),Object(W.jsx)(_.Z,{placement:"left",target:"btn-edit",children:a("Edit")})]}):null]})}}],Ae=Object(m.useMemo)((function(){return t.isLoading?Te.map((function(e){return{name:e.name,center:e.center,sortable:!1,minWidth:e.minWidth,width:e.width,right:e.right,cell:function(t){return Object(W.jsx)(B.a,{sx:{bgcolor:s.dark.light},animation:"wave",className:"Actions"===e.name?"ms-2":"",width:"Actions"===e.name?10:"100%",height:40})}}})):Te.map((function(e){return{name:e.name,center:e.center,sortable:e.sortable,minWidth:e.minWidth,width:e.width,sortField:e.sortField,right:e.right,selector:e.selector,cell:e.cell}}))}),[t.isLoading,Te]);return Object(m.useEffect)((function(){(0===t.data.length||!t.isLoading&&k.getAlwaysGrid)&&(je("".concat(a("Loading Data")," ").concat(a(k.pageTitle))),e(Object(k.getDataList)({sort_dir:j,sort:M,search:O,page:F,length:z})))}),[e,t.data.length,j,M,F]),Object(W.jsxs)(m.Fragment,{children:[Object(W.jsx)(T.a,{blocking:ue,loader:Object(W.jsx)(I.b,{}),children:Object(W.jsx)(_.l,{className:"overflow-hidden",children:Object(W.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(W.jsx)(b.a,{noHeader:!0,subHeader:!0,sortServer:!0,responsive:!0,pagination:!0,paginationServer:!0,paginationTotalRows:t.total,paginationComponent:function(){var a=Number(Math.ceil(t.total/z));return Object(W.jsx)(w.a,{previousLabel:"",nextLabel:"",pageCount:a||1,activeClassName:"active",forcePage:0!==F?F-1:0,onPageChange:function(t){return function(t){e(Object(k.getDataList)({sort_dir:j,sort:M,search:O,length:z,page:t.selected+1})),Y(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},selectableRows:!0,onSelectedRowsChange:ke,clearSelectedRows:ne,selectableRowsComponent:q,noDataComponent:Object(W.jsx)(I.c,{}),style:{"min-height":"400px"},highlightOnHover:!0,pointerOnHover:!0,columns:Ae,onSort:function(t,a){f(a),U(t.sortField),e(Object(k.getDataList)({sort_dir:j,sort:M,search:O,page:F,length:z}))},sortIcon:Object(W.jsx)(y.a,{}),className:"react-dataTable",data:function(){var e={search:O},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.isLoading?Array(10).fill({}):t.data.length>0?t.data:0===t.data.length&&a?[]:void 0}(),subHeaderComponent:Object(W.jsx)(G,{store:t,searchTerm:O,rowsPerPage:z,handleFilter:function(e){S(e),Le(e)},handlePerPage:function(t){var a=parseInt(t.currentTarget.value);e(Object(k.getDataList)({sort_dir:j,sort:M,search:O,length:a,page:F})),Z(a)},toggleSidebar:we,selectedRow:$,handleDeleteSelected:Ce})})})})}),he&&Object(W.jsx)(L.default,{formState:ye,show:he,setShow:we,detailPage:!1,setFormState:De})]})}}}]);
//# sourceMappingURL=67.90af31f7.chunk.js.map