(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[44,145,154],{1203:function(e,t,a){},375:function(e,t,a){"use strict";a.r(t);var n=a(6),c=a(2),o=a(16),l=a(81),i=a(756),s=a(760),r=a(5),d=a(190),u=a(1202),m=(a(1203),a(262)),b=a(359),g=a(87),j=a(0);t.default=function(e){var t,a,p=e.lookupMode,f=void 0!==p&&p,h=e.lookupMode_fieldName,O=void 0===h?"":h,x=e.lookupMode_dropdown,v=void 0!==x&&x,w=e.lookupMode_isMulti,N=void 0!==w&&w,y=e.lookupMode_onChange,S=e.lookupMode_defaultValue,k=(e.lookupMode_isM2MDefValFromGrid,Object(l.a)().t),_=Object(o.b)(),D=Object(o.c)((function(e){return e[b.storeName]})),M=Object(c.useState)(""),C=Object(n.a)(M,2),T=C[0];C[1];Object(c.useEffect)((function(){var e;b.getApiSummaryData&&(0===(null===(e=D.dataSummary)||void 0===e?void 0:e.length)||!D.isLoadingSummary&&b.getAlwaysGrid)&&_(Object(b.getSummaryData)({}))}),[_,null===(t=D.dataSummary)||void 0===t?void 0:t.length]);var L=["primary","success","warning","danger","info","secondary"];return v?Object(j.jsx)(s.default,{lookupMode_fieldName:O,lookupMode_onChange:y,lookupMode_defaultValue:S,lookupMode_isMulti:N,lookupMode_isM2MDefValFromGrid:!0}):Object(j.jsxs)(c.Fragment,{children:[Object(j.jsx)("div",{className:"content-header row",children:!f&&Object(j.jsx)(m.a,{title:k(b.pageTitle),data:[{title:k("App Setting")},{title:k(b.pageTitle)}]})}),Object(j.jsxs)("div",{className:"app-user-list",children:[!f&&b.getApiSummaryData&&Object(j.jsx)(r.U,{children:null===(a=D.dataSummary)||void 0===a?void 0:a.map((function(e,t){var a;return Object(j.jsx)(r.t,{children:Object(j.jsx)(d.a,{color:L[t],statTitle:"".concat(k(e.title)),icon:e.icon?Object(j.jsx)(u.a,{baseClassName:"material-icons-outlined",fontSize:"20",children:e.icon}):Object(j.jsx)(u.a,{baseClassName:"material-icons-outlined",fontSize:"20",children:"lightbulb"}),renderStats:D.isLoadingSummary?Object(j.jsx)(g.a,{sx:{bgcolor:"#eef2f8"},animation:"wave",height:25,width:40,className:"fw-bolder mb-75"}):Object(j.jsx)("h3",{className:"fw-bolder mb-75",children:null!==(a=e.count_format)&&void 0!==a?a:e.count})})},t)}))}),Object(j.jsx)(i.default,{searchString:T,lookupMode:f,lookupMode_fieldName:O,lookupMode_defaultValue:S,lookupMode_onChange:y,lookupMode_isMulti:N,lookupMode_isM2MDefValFromGrid:!0})]})]})}},756:function(e,t,a){"use strict";a.r(t);var n=a(15),c=a(9),o=a(6),l=a(4),i=a(7),s=a.n(i),r=a(2),d=a(81),u=a(42),m=a(369),b=a(13),g=a(359),j=(a(189),a(16)),p=a(169),f=a.n(p),h=a(170),O=a.n(h),x=a(84),v=a.n(x),w=a(216),N=a(64),y=a(753),S=a(34),k=a(25),_=a(5),D=a(36),M=(a(94),a(105),a(43)),C=a.n(M),T=a(49),L=a.n(T),F=a(87),A=a(95),B=a.n(A),P=a(147),R=a(47),Y=a(1291),H=a.n(Y),V=a(1292),G=a.n(V),q=a(0),E=L()(C.a),I=Object(r.forwardRef)((function(e,t){return Object(q.jsx)("div",{className:"form-check",children:Object(q.jsx)(_.B,Object(l.a)({type:"checkbox",ref:t},e))})})),z=function(e){e.store;var t=e.toggleSidebar,a=e.handlePerPage,n=e.rowsPerPage,c=e.handleFilter,o=e.searchTerm,l=e.selectedRow,i=e.handleDeleteSelected,s=Object(d.a)().t,m=Object(r.useContext)(u.a);Object(j.b)(),Object(j.c)((function(e){return e.invoices})),Object(b.q)();return Object(q.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(q.jsxs)(_.U,{children:[Object(q.jsx)(_.t,{xl:"4",className:"d-flex align-items-center p-0",children:Object(q.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(q.jsx)("label",{htmlFor:"rows-per-page",children:s("Show")}),Object(q.jsxs)(_.B,{className:"mx-50",type:"select",id:"rows-per-page",value:n,onChange:a,style:{width:"5rem"},children:[Object(q.jsx)("option",{value:"10",children:"10"}),Object(q.jsx)("option",{value:"25",children:"25"}),Object(q.jsx)("option",{value:"50",children:"50"})]}),Object(q.jsx)("label",{htmlFor:"rows-per-page",children:s("Entries")})]})}),Object(q.jsxs)(_.t,{xl:"8",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[(null===l||void 0===l?void 0:l.length)>0&&m.can("delete",sessionStorage.getItem("current_page_perm"))?Object(q.jsx)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:Object(q.jsxs)(_.i,{className:"delete-users",color:"danger",onClick:i,children:[s("Delete")," ",l.length," ",s("Selected ".concat(g.pageTitle))]})}):null,Object(q.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(q.jsxs)("label",{className:"mb-0",htmlFor:"search-invoice",children:[s("Search"),":"]}),Object(q.jsx)(_.B,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:o,onChange:function(e){return c(e.target.value)}})]}),Object(q.jsx)("div",{className:"d-flex align-items-center table-header-actions",children:m.can("post",sessionStorage.getItem("current_page_perm"))?Object(q.jsxs)(_.i,{className:"add-new-user",color:"primary",onClick:t,children:[s("Add New")," ",s(g.pageTitle)]}):null})]})]})})};t.default=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e[g.storeName]})),a=Object(d.a)().t,i=(Object(r.useContext)(u.a),Object(r.useContext)(S.a).colors),p=Object(r.useState)("desc"),h=Object(o.a)(p,2),x=h[0],M=h[1],C=Object(r.useState)(""),T=Object(o.a)(C,2),L=T[0],A=T[1],Y=Object(r.useState)(1),V=Object(o.a)(Y,2),Q=V[0],Z=V[1],J=Object(r.useState)("id"),U=Object(o.a)(J,2),W=U[0],X=U[1],K=Object(r.useState)(10),$=Object(o.a)(K,2),ee=$[0],te=$[1],ae=Object(r.useState)([]),ne=Object(o.a)(ae,2),ce=ne[0],oe=ne[1],le=Object(r.useState)(!1),ie=Object(o.a)(le,2),se=ie[0],re=ie[1],de=Object(r.useState)(!1),ue=Object(o.a)(de,2),me=ue[0],be=ue[1],ge=Object(r.useState)(!1),je=Object(o.a)(ge,2),pe=je[0],fe=je[1],he=Object(r.useState)("Please Wait"),Oe=Object(o.a)(he,2),xe=(Oe[0],Oe[1]),ve=Object(r.useState)(!1),we=Object(o.a)(ve,2),Ne=we[0],ye=we[1],Se=Object(r.useState)(null),ke=Object(o.a)(Se,2),_e=ke[0],De=ke[1],Me=function(t){De("edit"),g.detailFromGrid?(xe("".concat(a("Loading")," ").concat(a("Detail")," ").concat(a("Data")," ").concat(a(g.pageTitle))),fe(!0),e(Object(g.setDataById)(t)).then((function(){fe(!1),ye(!0)}))):(xe("".concat(a("Loading")," ").concat(a("Detail")," ").concat(a("Data")," ").concat(a(g.pageTitle))),fe(!0),e(Object(g.getDataById)(t.id)).then((function(e){"rejected"===e.meta.requestStatus?(fe(!1),k.b.error(e.payload.message,{style:{padding:"16px",color:i.danger.main,border:"1px solid ".concat(i.danger.main)},iconTheme:{primary:i.danger.main}})):(fe(!1),ye(!0))})))},Ce=function(){be(!me),ye(!Ne),Object(b.G)()},Te=function(){De("add"),be(!me),ye(!Ne),Object(b.z)(Ce)},Le=function(){var t=Object(c.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.fire({title:"".concat(a("Are you sure?")),text:"".concat(a("You won't be able to revert")," ").concat(a(g.pageTitle),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(a("Yes, Delete")," ").concat(a(g.pageTitle),"!"),cancelButtonText:"".concat(a("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 2:t.sent.value&&(xe("".concat(a("Deleting")," Data ").concat(a(g.pageTitle))),fe(!0),e(Object(g.deleteData)(n)).then((function(e){"fulfilled"===e.meta.requestStatus?(fe(!1),k.b.success("".concat(a("Successfully deleted")," ").concat(a(g.pageTitle)),{style:{padding:"16px",color:i.success.main,border:"1px solid ".concat(i.success.main)},iconTheme:{primary:i.success.main}})):"rejected"===e.meta.requestStatus&&(fe(!1),k.b.error(e.payload.message,{style:{padding:"16px",color:i.danger.main,border:"1px solid ".concat(i.danger.main)},iconTheme:{primary:i.danger.main}}))})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Fe=function(){var t=Object(c.a)(s.a.mark((function t(){var n,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=ce.length,t.next=3,E.fire({title:"".concat(a("Are you sure?")),text:"".concat(a("You will delete")," ").concat(n," ").concat(a("selected data. Deleted data cannot be recovered"),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(a("Yes, Delete")," ").concat(n," ").concat(a(g.pageTitle),"!"),cancelButtonText:"".concat(a("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 3:t.sent.value&&(xe("".concat(a("Deleting")," ").concat(n," Data ").concat(a(g.pageTitle))),fe(!0),c=ce.map((function(e){return e.id})),e(Object(g.deleteSelectedRowData)({id:c})).then((function(e){"fulfilled"===e.meta.requestStatus?(oe([]),re(!se),fe(!1),k.b.success("".concat(a("Successfully deleted")," ").concat(n," ").concat(a(g.pageTitle)),{style:{padding:"16px",color:i.success.main,border:"1px solid ".concat(i.success.main)},iconTheme:{primary:i.success.main}})):"rejected"===e.meta.requestStatus&&(fe(!1),k.b.error(e.payload.message,{style:{padding:"16px",color:i.danger.main,border:"1px solid ".concat(i.danger.main)},iconTheme:{primary:i.danger.main}}))})));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Ae=Object(r.useCallback)(v()((function(t){e(Object(g.getDataList)({sort_dir:x,search:t,sort:W,page:Q,length:ee}))}),500),[]),Be=Object(r.useCallback)((function(e){oe(e.selectedRows)}),[]),Pe={python:"https://logos-download.com/wp-content/uploads/2016/10/Python_logo_wordmark.png",javascript:"https://javascriptsu.files.wordpress.com/2020/12/js.jpg",react:"https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png",angular:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQgREvN-e1uVZXVDc2w_zLeey0Li4buQ26gF0ZmCYxaBMoybo4uQTncS3Z5WxHRyZNfA&usqp=CAU",flask:"https://miro.medium.com/max/1079/1*nvtdCw77Al6LgV8wt_ma6Q.png"},Re=[{name:a("App Name"),sortField:"name",center:!1,sortable:!0,selector:function(e){return e.name},cell:function(e){var t,a;return Object(q.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[null!==(t=e.logo)&&void 0!==t&&t.appLogo?Object(q.jsx)(D.a,{className:"me-1",img:null===e||void 0===e||null===(a=e.logo)||void 0===a?void 0:a.appLogo,width:"32",height:"32",imgHeight:"25",imgWidth:"30",color:"light-primary"}):e.is_uploading?Object(q.jsx)(y.a,{size:"sm",color:"primary"}):Object(q.jsx)(D.a,{initials:!0,className:"me-1",color:"light-primary",content:e.name||"John Doe"}),Object(q.jsxs)("div",{className:"d-flex flex-column",children:[Object(q.jsx)("span",{className:"fw-bolder",children:e.name}),Object(q.jsx)("small",{className:"text-truncate text-muted mb-0",children:e.code})]})]})}},{name:a("App Type"),center:!1,sortable:!1,selector:function(e){return e.info.appType},cell:function(e){var t,a;return Object(q.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:["service"===(null===e||void 0===e||null===(t=e.info)||void 0===t?void 0:t.appType)?Object(q.jsx)(H.a,{className:"me-1",sixe:32}):Object(q.jsx)(G.a,{className:"me-1",sixe:32}),Object(q.jsx)("div",{className:"d-flex flex-column",children:Object(q.jsx)("span",{className:"fw-bolder",children:null===e||void 0===e||null===(a=e.info)||void 0===a?void 0:a.appType})})]})}},{name:a("Framework"),center:!1,sortable:!1,selector:function(e){return e.info.programming_language.main_language},cell:function(e){var t,a,n,c,o,l,i,s;return Object(q.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[Pe[null===e||void 0===e||null===(t=e.info)||void 0===t||null===(a=t.programming_language)||void 0===a?void 0:a.main_language]&&Object(q.jsx)("img",{className:"me-1",src:Pe[null===e||void 0===e||null===(n=e.info)||void 0===n||null===(c=n.programming_language)||void 0===c?void 0:c.main_language],height:"18"}),Pe[null===e||void 0===e||null===(o=e.info)||void 0===o||null===(l=o.programming_language)||void 0===l?void 0:l.framework]&&Object(q.jsx)("img",{className:"me-1",src:Pe[null===e||void 0===e||null===(i=e.info)||void 0===i||null===(s=i.programming_language)||void 0===s?void 0:s.framework],height:"18"})]})}}].concat(Object(n.a)(t.dynamicColumns.map((function(e){return{name:e.columnName,sortField:e.fieldName,center:!1,sortable:!0,selector:function(t){return t[e.fieldName]},cell:function(t){return function(e,t){var a=e[t.fieldName],n=t.dataFormat;if(n&&n.includes(":")){var c=n.split(":"),o=c[0],l=c[1],i=e[t.fieldName];return"date"===o&&(i=B()(a).format("DD MMM YYYY"),l&&(i=B()(a).format(l))),"datetime"===o&&(i=B()(a).format("DD MMM YYYY HH:mm"),l&&(i=B()(a).format(l))),i}return e[t.fieldName]}(t,e)}}}))),[{name:a("Actions"),center:!0,width:"140px",cell:function(e){return Object(q.jsx)(P.a,{row:e,handleDelete:Le,handleEdit:Me,storeName:g.storeName})}}]),Ye=Object(r.useMemo)((function(){return t.isLoading?Re.map((function(e){return Object(l.a)(Object(l.a)({name:a(e.name)},e),{},{sortable:!1,cell:function(t){return Object(q.jsx)(F.a,{sx:{bgcolor:i.dark.light},animation:"wave",className:"Actions"===e.name?"ms-2":"",width:"Actions"===e.name?10:"100%",height:40})}})})):Re.map((function(e){return Object(l.a)({name:a(e.name)},e)}))}),[t.isLoading,Re]);return Object(r.useEffect)((function(){(0===t.data.length||!t.isLoading&&g.getAlwaysGrid)&&(xe("".concat(a("Loading Data")," ").concat(a(g.pageTitle))),e(Object(g.getDataList)({sort_dir:x,sort:W,search:L,page:Q,length:ee})))}),[e,t.data.length,x,W,Q]),Object(q.jsxs)(r.Fragment,{children:[Object(q.jsx)(N.a,{blocking:pe,loader:Object(q.jsx)(R.b,{}),children:Object(q.jsx)(_.l,{className:"overflow-hidden",children:Object(q.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(q.jsx)(O.a,{noHeader:!0,subHeader:!0,sortServer:!0,responsive:!0,pagination:!0,paginationServer:!0,paginationTotalRows:t.total,paginationComponent:function(){var a=Number(Math.ceil(t.total/ee));return Object(q.jsx)(f.a,{previousLabel:"",nextLabel:"",pageCount:a||1,activeClassName:"active",forcePage:0!==Q?Q-1:0,onPageChange:function(t){return function(t){e(Object(g.getDataList)({sort_dir:x,sort:W,search:L,length:ee,page:t.selected+1})),Z(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},selectableRows:!0,onSelectedRowsChange:Be,selectableRowsHighlight:!0,clearSelectedRows:se,selectableRowsComponent:I,noDataComponent:Object(q.jsx)(R.c,{}),style:{"min-height":"400px"},highlightOnHover:!0,pointerOnHover:!0,columns:Ye,onSort:function(t,a){M(a),X(t.sortField),e(Object(g.getDataList)({sort_dir:x,sort:W,search:L,page:Q,length:ee}))},sortIcon:Object(q.jsx)(w.a,{}),className:"react-dataTable",data:function(){var e={search:L},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.isLoading?Array(10).fill({}):t.data.length>0?t.data:0===t.data.length&&a?[]:void 0}(),subHeaderComponent:Object(q.jsx)(z,{store:t,searchTerm:L,rowsPerPage:ee,handleFilter:function(e){A(e),Ae(e)},handlePerPage:function(t){var a=parseInt(t.currentTarget.value);e(Object(g.getDataList)({sort_dir:x,sort:W,search:L,length:a,page:Q})),te(a)},toggleSidebar:Te,selectedRow:ce,handleDeleteSelected:Fe})})})})}),Ne&&Object(q.jsx)(m.default,{formState:_e,show:Ne,setShow:Te,detailPage:!1,setFormState:De})]})}},760:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(16),o=a(81),l=(a(1203),a(13)),i=a(11),s=a.n(i),r=a(82),d=a(359),u=a(0);t.default=function(e){var t,a=e.lookupMode_fieldName,i=void 0===a?"":a,m=e.lookupMode_isMulti,b=void 0!==m&&m,g=e.lookupMode_onChange,j=e.lookupMode_defaultValue,p=Object(o.a)().t,f=Object(c.b)(),h=Object(c.c)((function(e){return e[d.storeName]}));return Object(n.useEffect)((function(){(0===h.data.length||!h.isLoading&&d.getAlwaysGrid)&&f(Object(d.getDataList)({}))}),[f,h.data.length]),Object(u.jsx)(n.Fragment,{children:Object(u.jsx)(r.a,{theme:l.H,defaultValue:b?j:h.dataDropdown.filter((function(e){return e.value===j})),placeholder:"".concat(p("Filter")," ").concat(p(d.pageTitle),"..."),isMulti:b,onChange:function(e){return g(e.value,i)},options:h.dataDropdown,className:s()("react-select",{"is-invalid":null===(null===(t=h.selectedData)||void 0===t?void 0:t.id)}),classNamePrefix:"select"})})}}}]);
//# sourceMappingURL=44.8b392d97.chunk.js.map