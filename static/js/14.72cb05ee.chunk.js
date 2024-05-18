(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[14,24],{359:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return d})),a.d(t,"storeName",(function(){return u})),a.d(t,"endpointName",(function(){return l})),a.d(t,"serverSideGrid",(function(){return p})),a.d(t,"detailFromGrid",(function(){return m})),a.d(t,"getAlwaysGrid",(function(){return f})),a.d(t,"getApiAfterPut",(function(){return b})),a.d(t,"getApiAfterPost",(function(){return g})),a.d(t,"getApiAfterDelete",(function(){return j})),a.d(t,"getApiSummaryData",(function(){return h})),a.d(t,"detailPage",(function(){return O})),a.d(t,"deleteSelection",(function(){return v})),a.d(t,"dynamicColumns",(function(){return x})),a.d(t,"dynamicColumnsFilter",(function(){return D})),a.d(t,"dynamicForm",(function(){return y})),a.d(t,"extraCrud",(function(){return w})),a.d(t,"getSummaryData",(function(){return S})),a.d(t,"getDataList",(function(){return C})),a.d(t,"getDataById",(function(){return L})),a.d(t,"resetSelectedData",(function(){return k})),a.d(t,"postData",(function(){return N})),a.d(t,"putData",(function(){return A})),a.d(t,"deleteData",(function(){return T})),a.d(t,"deleteSelectedRowData",(function(){return _})),a.d(t,"setDataById",(function(){return E})),a.d(t,"StoreSlice",(function(){return M}));var n=a(9),r=a(7),c=a.n(r),s=a(18),i=a(56),o=a(44).a.ssoAxiosInterceptor,d="Permission",u="apps_permission",l="api/permission",p=!0,m=!0,f=!1,b=!0,g=!0,j=!0,h=!1,O=!0,v=!1,x=[],D=[{filterLabel:"Role",fieldName:"id_role"}],y=[],w=[{crudName:"permission_menu",crudLabel:"Permission to Menu"},{crudName:"permission_endpoint",crudLabel:"Permission to Endpoint"}],S=Object(s.b)("".concat(l,"/getSummaryData"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,o.get("/".concat(l,"/summary"),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),C=Object(s.b)("".concat(l,"/getDataList"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,o.get("/".concat(l),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data,total:a.data.total});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),L=Object(s.b)("".concat(l,"/getDataById"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,o.get("/".concat(l,"/").concat(t));case 4:return r=e.sent,e.abrupt("return",r.data.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),k=Object(s.b)("".concat(l,"/resetSelectedData"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.abrupt("return",a({}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),N=Object(s.b)("".concat(l,"/postData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,s,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,s=a.rejectWithValue,e.prev=1,e.next=4,o.post("/".concat(l),t);case 4:return d=e.sent,n(k({})),g&&n(C(r()[u].params)),n(Object(i.resetData)({})),e.abrupt("return",d.data);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",s(e.t0.response.data));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()),A=Object(s.b)("".concat(l,"/putData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,s,d,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,s=a.rejectWithValue,d=r()[u].selectedData.id,e.prev=2,e.next=5,o.put("/".concat(l,"/").concat(d),t);case 5:return p=e.sent,n(k({})),b&&(n(C(r()[u].params)),h&&n(S({}))),n(Object(i.resetData)({})),e.abrupt("return",p.data);case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",s(e.t0.response.data));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,a){return e.apply(this,arguments)}}()),T=Object(s.b)("".concat(l,"/deleteData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,s,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,s=a.rejectWithValue,e.prev=1,e.next=4,o.delete("/".concat(l,"/").concat(t));case 4:if(d=e.sent,!j){e.next=9;break}return e.next=8,n(C(r()[u].params));case 8:h&&n(S({}));case 9:return n(Object(i.resetData)({})),e.abrupt("return",d.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",s(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),_=Object(s.b)("".concat(l,"/deleteSelectedRowData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,s,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,s=a.rejectWithValue,e.prev=1,e.next=4,o.delete("/".concat(l),{data:t});case 4:if(d=e.sent,!j){e.next=9;break}return e.next=8,n(C(r()[u].params));case 8:h&&n(S({}));case 9:return n(Object(i.resetData)({})),e.abrupt("return",d.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",s(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),E=Object(s.b)("".concat(l,"/setDataById"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.abrupt("return",n(t));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),M=Object(s.c)({name:u,initialState:{dynamicColumns:x,pageTitle:d,statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,params:{},selectedData:null,dataDropdown:[],statusDetail:0,isLoadingDetail:!1,errorDetail:0,statusAddEdit:0,isLoadingAddEdit:!1,errorAddEdit:0,statusDelete:0,isLoadingDelete:!1,errorDelete:0},reducers:{},extraReducers:function(e){e.addCase(S.pending,(function(e){e.statusSummary="loading",e.isLoadingSummary=!0})).addCase(S.fulfilled,(function(e,t){e.statusSummary="succeeded",e.isLoadingSummary=!1,e.dataSummary=t.payload.data})).addCase(S.rejected,(function(e,t){e.statusSummary="failed",e.isLoadingSummary=!1,e.errorSummary=t.error.message})).addCase(C.pending,(function(e){e.status="loading",e.isLoading=!0})).addCase(C.fulfilled,(function(e,t){e.status="succeeded",e.isLoading=!1,t.payload.data.length>0&&(e.data=t.payload.data,e.dataDropdown=t.payload.data.map((function(e){return{value:e.id,label:e.title,post:!1,put:!1,delete:!1,get:!1}}))),e.params=t.payload.params,e.total=t.payload.total})).addCase(C.rejected,(function(e,t){var a;e.status="failed",e.isLoading=!1,e.error=null===(a=t.error.payload)||void 0===a?void 0:a.message})).addCase(A.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(A.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(A.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(N.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(N.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(N.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(T.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(T.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(T.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(_.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(_.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(_.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(L.pending,(function(e){e.statusDetail="loading",e.isLoadingDetail=!0})).addCase(L.fulfilled,(function(e,t){e.statusDetail="succeeded",e.isLoadingDetail=!1,e.selectedData=t.payload})).addCase(L.rejected,(function(e,t){var a;e.statusDetail="failed",e.isLoadingDetail=!1,e.selectedData=null,e.errorDetail=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(k.rejected,(function(e){e.selectedData=null})).addCase(E.rejected,(function(e,t){e.selectedData=t.payload}))}});t.default=M.reducer},774:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(9),c=a(6),s=a(4),i=a(7),o=a.n(i),d=a(2),u=a(81),l=a(42),p=a(380),m=a(13),f=a(366),b=a(360),g=(a(189),a(16)),j=a(169),h=a.n(j),O=a(170),v=a.n(O),x=a(84),D=a.n(x),y=a(216),w=a(64),S=(a(752),a(33)),C=a(25),L=a(5),k=(a(94),a(105),a(43)),N=a.n(k),A=a(49),T=a.n(A),_=a(87),E=a(95),M=a.n(E),F=a(147),B=a(359),P=a(47),R=a(0),I=T()(N.a),Y=Object(d.forwardRef)((function(e,t){return Object(R.jsx)("div",{className:"form-check",children:Object(R.jsx)(L.B,Object(s.a)({type:"checkbox",ref:t},e))})})),V=function(e){e.store;var t=e.toggleSidebar,a=e.handlePerPage,n=e.rowsPerPage,r=e.handleFilter,c=e.searchTerm,s=e.selectedRow,i=e.handleDeleteSelected,o=e.handleFiltersChange,p=e.lookupMode,b=e.lookupMode_defaultFilter,j=Object(u.a)().t,h=Object(d.useContext)(l.a),O=Object(g.b)(),v=(Object(g.c)((function(e){return e.invoices})),Object(m.q)(),Object(g.c)((function(e){return e})));return Object(d.useEffect)((function(){0!==v.apps_permission.data.length&&v.apps_permission.isLoading||O(Object(B.getDataList)({}))}),[O]),Object(R.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(R.jsxs)(L.U,{children:[Object(R.jsx)(L.t,{xl:"4",className:"d-flex align-items-center p-0",children:!p&&Object(R.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(R.jsx)("label",{htmlFor:"rows-per-page",children:j("Show")}),Object(R.jsxs)(L.B,{className:"mx-50",type:"select",id:"rows-per-page",value:n,onChange:a,style:{width:"5rem"},children:[Object(R.jsx)("option",{value:"10",children:"10"}),Object(R.jsx)("option",{value:"25",children:"25"}),Object(R.jsx)("option",{value:"50",children:"50"})]}),Object(R.jsx)("label",{htmlFor:"rows-per-page",children:j("Entries")})]})}),Object(R.jsxs)(L.t,{xl:"8",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[(null===s||void 0===s?void 0:s.length)>0&&h.can("delete",sessionStorage.getItem("current_page_perm"))?Object(R.jsx)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:Object(R.jsxs)(L.i,{className:"delete-users",color:"danger",onClick:i,children:[j("Delete")," ",s.length," ",j("Selected ".concat(f.pageTitle))]})}):null,Object(R.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(R.jsxs)("label",{className:"mb-0",htmlFor:"search-invoice",children:[j("Search"),":"]}),Object(R.jsx)(L.B,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:c,onChange:function(e){return r(e.target.value)}})]}),b?null:Object(R.jsx)("div",{className:"mt-50 width-200 me-1 mt-sm-0 mt-1",children:Object(R.jsxs)(L.B,{type:"select",name:"select",onChange:function(e){return o(e.target.value,"filter_id_permission")},children:[Object(R.jsxs)("option",{value:"",children:[j("Select")," ",j("Permission")]}),v.apps_permission.data.map((function(e,t){return Object(R.jsx)("option",{value:e.id,children:e.title},e.id)}))]})}),Object(R.jsx)("div",{className:"d-flex align-items-center table-header-actions",children:h.can("post",sessionStorage.getItem("current_page_perm"))?Object(R.jsxs)(L.i,{className:"add-new-user",color:"primary",onClick:t,children:[j("Add New")," ",j(f.pageTitle)]}):null})]})]})})};t.default=function(e){e.filtersCustomAdd;var t=e.lookupMode,a=(e.lookupMode_fieldName,e.lookupMode_dropdown,e.lookupMode_isMulti,e.lookupMode_onChange,e.lookupMode_defaultValue,e.lookupMode_isM2MDefValFromGrid,e.lookupMode_defaultFilter),i=Object(g.b)(),j=Object(g.c)((function(e){return e[f.storeName]})),O=Object(g.c)((function(e){return e.apps_app})),x=Object(u.a)().t,k=(Object(d.useContext)(l.a),Object(d.useContext)(S.a).colors),N=Object(d.useState)("desc"),A=Object(c.a)(N,2),T=A[0],E=A[1],B=Object(d.useState)(""),H=Object(c.a)(B,2),W=H[0],G=H[1],q=Object(d.useState)(1),J=Object(c.a)(q,2),z=J[0],U=J[1],K=Object(d.useState)("id"),Q=Object(c.a)(K,2),X=Q[0],Z=Q[1],$=Object(d.useState)(10),ee=Object(c.a)($,2),te=ee[0],ae=ee[1],ne=Object(d.useState)([]),re=Object(c.a)(ne,2),ce=re[0],se=re[1],ie=Object(d.useState)(null!==a&&void 0!==a?a:{}),oe=Object(c.a)(ie,2),de=oe[0],ue=(oe[1],Object(d.useState)(!1)),le=Object(c.a)(ue,2),pe=le[0],me=le[1],fe=Object(d.useState)(!1),be=Object(c.a)(fe,2),ge=be[0],je=be[1],he=Object(d.useState)(!1),Oe=Object(c.a)(he,2),ve=Oe[0],xe=Oe[1],De=Object(d.useState)("Please Wait"),ye=Object(c.a)(De,2),we=(ye[0],ye[1]),Se=Object(d.useState)(!1),Ce=Object(c.a)(Se,2),Le=Ce[0],ke=Ce[1],Ne=Object(d.useState)(null),Ae=Object(c.a)(Ne,2),Te=Ae[0],_e=Ae[1],Ee=function(e){_e("edit"),f.detailFromGrid?(we("".concat(x("Loading")," ").concat(x("Detail")," ").concat(x("Data")," ").concat(x(f.pageTitle))),xe(!0),i(Object(f.setDataById)(e)).then((function(){0!==O.data.length||O.isLoading?(xe(!1),ke(!0)):i(Object(b.getDataList)({})).then((function(e){xe(!1),ke(!0)}))}))):(we("".concat(x("Loading")," ").concat(x("Detail")," ").concat(x("Data")," ").concat(x(f.pageTitle))),xe(!0),i(Object(f.getDataById)(e.id)).then((function(e){"rejected"===e.meta.requestStatus?(xe(!1),C.b.error(e.payload.message,{style:{padding:"16px",color:k.danger.main,border:"1px solid ".concat(k.danger.main)},iconTheme:{primary:k.danger.main}})):(xe(!1),ke(!0))})))},Me=function(){je(!ge),ke(!Le),Object(m.G)()},Fe=function(){_e("add"),je(!ge),ke(!Le),Object(m.z)(Me)},Be=function(){var e=Object(r.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.fire({title:"".concat(x("Are you sure?")),text:"".concat(x("You won't be able to revert")," ").concat(x(f.pageTitle),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(x("Yes, Delete")," ").concat(x(f.pageTitle),"!"),cancelButtonText:"".concat(x("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 2:e.sent.value&&(we("".concat(x("Deleting")," Data ").concat(x(f.pageTitle))),xe(!0),i(Object(f.deleteData)(t)).then((function(e){"fulfilled"===e.meta.requestStatus?(xe(!1),C.b.success("".concat(x("Successfully deleted")," ").concat(x(f.pageTitle)),{style:{padding:"16px",color:k.success.main,border:"1px solid ".concat(k.success.main)},iconTheme:{primary:k.success.main}})):"rejected"===e.meta.requestStatus&&(xe(!1),C.b.error(e.payload.message,{style:{padding:"16px",color:k.danger.main,border:"1px solid ".concat(k.danger.main)},iconTheme:{primary:k.danger.main}}))})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Pe=function(){var e=Object(r.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=ce.length,e.next=3,I.fire({title:"".concat(x("Are you sure?")),text:"".concat(x("You will delete")," ").concat(t," ").concat(x("selected data. Deleted data cannot be recovered"),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(x("Yes, Delete")," ").concat(t," ").concat(x(f.pageTitle),"!"),cancelButtonText:"".concat(x("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 3:e.sent.value&&(we("".concat(x("Deleting")," ").concat(t," Data ").concat(x(f.pageTitle))),xe(!0),a=ce.map((function(e){return e.id})),i(Object(f.deleteSelectedRowData)({id:a})).then((function(e){"fulfilled"===e.meta.requestStatus?(se([]),me(!pe),xe(!1),C.b.success("".concat(x("Successfully deleted")," ").concat(t," ").concat(x(f.pageTitle)),{style:{padding:"16px",color:k.success.main,border:"1px solid ".concat(k.success.main)},iconTheme:{primary:k.success.main}})):"rejected"===e.meta.requestStatus&&(xe(!1),C.b.error(e.payload.message,{style:{padding:"16px",color:k.danger.main,border:"1px solid ".concat(k.danger.main)},iconTheme:{primary:k.danger.main}}))})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Re=Object(d.useCallback)(D()((function(e){i(Object(f.getDataList)(Object(s.a)({sort_dir:T,search:e,sort:X,page:z,length:te},de)))}),500),[]),Ie=Object(d.useCallback)((function(e){se(e.selectedRows)}),[]),Ye=[].concat(Object(n.a)(j.dynamicColumns.map((function(e){return{name:e.columnName,sortField:e.fieldName,center:!1,sortable:!0,selector:function(t){return t[e.fieldName]},cell:function(t){return function(e,t){var a=e[t.fieldName],n=t.dataFormat;if(n&&n.includes(":")){var r=n.split(":"),c=r[0],s=r[1],i=e[t.fieldName];return"date"===c&&(i=M()(a).format("DD MMM YYYY"),s&&(i=M()(a).format(s))),"datetime"===c&&(i=M()(a).format("DD MMM YYYY HH:mm"),s&&(i=M()(a).format(s))),i}return e[t.fieldName]}(t,e)}}}))),[{name:x("Actions"),center:!0,width:"140px",cell:function(e){return Object(R.jsx)(F.a,{disabledAction:f.disabledAction,row:e,handleDelete:Be,handleEdit:Ee})}}]),Ve=Object(d.useMemo)((function(){return j.isLoading?Ye.map((function(e){return Object(s.a)(Object(s.a)({name:x(e.name)},e),{},{sortable:!1,cell:function(t){return"Actions"===e.name?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(_.a,{sx:{bgcolor:k.dark.light},animation:"wave",className:"ms-2 me-1",width:30,height:40}),Object(R.jsx)(_.a,{sx:{bgcolor:k.dark.light},animation:"wave",width:30,height:40})]}):Object(R.jsx)(_.a,{sx:{bgcolor:k.dark.light},animation:"wave",width:"100%",height:40})}})})):Ye.map((function(e){return Object(s.a)({name:x(e.name)},e)}))}),[j.isLoading,Ye]);return Object(d.useEffect)((function(){(0===j.data.length||!j.isLoading&&f.getAlwaysGrid||a)&&(we("".concat(x("Loading Data")," ").concat(x(f.pageTitle))),i(Object(f.getDataList)(Object(s.a)({sort_dir:T,sort:X,search:W,page:z,length:te},de))))}),[i,T,X,z,de]),Object(R.jsxs)(d.Fragment,{children:[Object(R.jsx)(w.a,{blocking:ve,loader:Object(R.jsx)(P.b,{}),children:Object(R.jsx)(L.l,{className:"overflow-hidden",children:Object(R.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(R.jsx)(v.a,{noHeader:!0,subHeader:!0,sortServer:!0,responsive:!0,pagination:!0,paginationServer:!0,paginationTotalRows:j.total,paginationComponent:function(){var e=Number(Math.ceil(j.total/te));return Object(R.jsx)(h.a,{previousLabel:"",nextLabel:"",pageCount:e||1,activeClassName:"active",forcePage:0!==z?z-1:0,onPageChange:function(e){return function(e){i(Object(f.getDataList)({sort_dir:T,sort:X,search:W,length:te,page:e.selected+1})),U(e.selected+1)}(e)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},selectableRows:!0,onSelectedRowsChange:Ie,selectableRowsHighlight:!0,clearSelectedRows:pe,selectableRowsComponent:Y,noDataComponent:Object(R.jsx)(P.c,{}),style:{"min-height":"400px"},highlightOnHover:!0,pointerOnHover:!0,columns:Ve,onSort:function(e,t){E(t),Z(e.sortField),i(Object(f.getDataList)(Object(s.a)({sort_dir:T,sort:X,search:W,page:z,length:te},de)))},sortIcon:Object(R.jsx)(y.a,{}),className:"react-dataTable",data:function(){var e={search:W},t=Object.keys(e).some((function(t){return e[t].length>0}));return j.isLoading?Array(10).fill({}):j.data.length>0?j.data:0===j.data.length&&t?[]:void 0}(),subHeaderComponent:Object(R.jsx)(V,{store:j,searchTerm:W,rowsPerPage:te,handleFilter:function(e){G(e),Re(e)},handlePerPage:function(e){var t=parseInt(e.currentTarget.value);i(Object(f.getDataList)(Object(s.a)({sort_dir:T,sort:X,search:W,length:t,page:z},de))),ae(t)},toggleSidebar:Fe,selectedRow:ce,handleDeleteSelected:Pe,handleFiltersChange:function(e,t){de[t]=parseInt(e),i(Object(f.getDataList)(Object(s.a)({sort_dir:T,sort:X,search:W,page:z,length:te},de)))},lookupMode:t,lookupMode_defaultFilter:a})})})})}),Le&&Object(R.jsx)(p.default,{formState:Te,show:Le,setShow:Fe,detailPage:!1,setFormState:_e})]})}}}]);
//# sourceMappingURL=14.72cb05ee.chunk.js.map