(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[39,44,84,85,86,130,145,154,170],{1204:function(e,t,a){},1261:function(e,t,a){!function(e){"use strict";var t="undefined"!==typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},a={weekdays:{shorthand:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],longhand:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]},months:{shorthand:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],longhand:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]},firstDayOfWeek:1,ordinal:function(){return""},time_24hr:!0,rangeSeparator:" - "};t.l10ns.id=a;var n=t.l10ns;e.Indonesian=a,e.default=n,Object.defineProperty(e,"__esModule",{value:!0})}(t)},376:function(e,t,a){"use strict";a.r(t);var n=a(6),c=a(2),o=a(16),l=a(81),i=a(757),r=a(761),s=a(5),d=a(190),u=a(1203),m=(a(1204),a(263)),b=a(360),g=a(87),j=a(0);t.default=function(e){var t,a,p=e.lookupMode,f=void 0!==p&&p,h=e.lookupMode_fieldName,O=void 0===h?"":h,x=e.lookupMode_dropdown,v=void 0!==x&&x,w=e.lookupMode_isMulti,y=void 0!==w&&w,N=e.lookupMode_onChange,S=e.lookupMode_defaultValue,k=(e.lookupMode_isM2MDefValFromGrid,Object(l.a)().t),M=Object(o.b)(),_=Object(o.c)((function(e){return e[b.storeName]})),D=Object(c.useState)(""),C=Object(n.a)(D,2),T=C[0];C[1];Object(c.useEffect)((function(){var e;b.getApiSummaryData&&(0===(null===(e=_.dataSummary)||void 0===e?void 0:e.length)||!_.isLoadingSummary&&b.getAlwaysGrid)&&M(Object(b.getSummaryData)({}))}),[M,null===(t=_.dataSummary)||void 0===t?void 0:t.length]);var L=["primary","success","warning","danger","info","secondary"];return v?Object(j.jsx)(r.default,{lookupMode_fieldName:O,lookupMode_onChange:N,lookupMode_defaultValue:S,lookupMode_isMulti:y,lookupMode_isM2MDefValFromGrid:!0}):Object(j.jsxs)(c.Fragment,{children:[Object(j.jsx)("div",{className:"content-header row",children:!f&&Object(j.jsx)(m.a,{title:k(b.pageTitle),data:[{title:k("App Setting")},{title:k(b.pageTitle)}]})}),Object(j.jsxs)("div",{className:"app-user-list",children:[!f&&b.getApiSummaryData&&Object(j.jsx)(s.U,{children:null===(a=_.dataSummary)||void 0===a?void 0:a.map((function(e,t){var a;return Object(j.jsx)(s.t,{children:Object(j.jsx)(d.a,{color:L[t],statTitle:"".concat(k(e.title)),icon:e.icon?Object(j.jsx)(u.a,{baseClassName:"material-icons-outlined",fontSize:"20",children:e.icon}):Object(j.jsx)(u.a,{baseClassName:"material-icons-outlined",fontSize:"20",children:"lightbulb"}),renderStats:_.isLoadingSummary?Object(j.jsx)(g.a,{sx:{bgcolor:"#eef2f8"},animation:"wave",height:25,width:40,className:"fw-bolder mb-75"}):Object(j.jsx)("h3",{className:"fw-bolder mb-75",children:null!==(a=e.count_format)&&void 0!==a?a:e.count})})},t)}))}),Object(j.jsx)(i.default,{searchString:T,lookupMode:f,lookupMode_fieldName:O,lookupMode_defaultValue:S,lookupMode_onChange:N,lookupMode_isMulti:y,lookupMode_isM2MDefValFromGrid:!0})]})]})}},757:function(e,t,a){"use strict";a.r(t);var n=a(15),c=a(9),o=a(6),l=a(4),i=a(7),r=a.n(i),s=a(2),d=a(81),u=a(42),m=a(370),b=a(13),g=a(360),j=(a(189),a(16)),p=a(169),f=a.n(p),h=a(170),O=a.n(h),x=a(84),v=a.n(x),w=a(240),y=a(64),N=a(754),S=a(34),k=a(25),M=a(5),_=a(36),D=(a(94),a(105),a(43)),C=a.n(D),T=a(49),L=a.n(T),A=a(87),F=a(95),B=a.n(F),R=a(147),P=a(47),Y=a(1292),H=a.n(Y),J=a(1293),V=a.n(J),G=a(0),q=L()(C.a),I=Object(s.forwardRef)((function(e,t){return Object(G.jsx)("div",{className:"form-check",children:Object(G.jsx)(M.B,Object(l.a)({type:"checkbox",ref:t},e))})})),E=function(e){e.store;var t=e.toggleSidebar,a=e.handlePerPage,n=e.rowsPerPage,c=e.handleFilter,o=e.searchTerm,l=e.selectedRow,i=e.handleDeleteSelected,r=Object(d.a)().t,m=Object(s.useContext)(u.a);Object(j.b)(),Object(j.c)((function(e){return e.invoices})),Object(b.q)();return Object(G.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(G.jsxs)(M.U,{children:[Object(G.jsx)(M.t,{xl:"4",className:"d-flex align-items-center p-0",children:Object(G.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(G.jsx)("label",{htmlFor:"rows-per-page",children:r("Show")}),Object(G.jsxs)(M.B,{className:"mx-50",type:"select",id:"rows-per-page",value:n,onChange:a,style:{width:"5rem"},children:[Object(G.jsx)("option",{value:"10",children:"10"}),Object(G.jsx)("option",{value:"25",children:"25"}),Object(G.jsx)("option",{value:"50",children:"50"})]}),Object(G.jsx)("label",{htmlFor:"rows-per-page",children:r("Entries")})]})}),Object(G.jsxs)(M.t,{xl:"8",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[(null===l||void 0===l?void 0:l.length)>0&&m.can("delete",sessionStorage.getItem("current_page_perm"))?Object(G.jsx)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:Object(G.jsxs)(M.i,{className:"delete-users",color:"danger",onClick:i,children:[r("Delete")," ",l.length," ",r("Selected ".concat(g.pageTitle))]})}):null,Object(G.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(G.jsxs)("label",{className:"mb-0",htmlFor:"search-invoice",children:[r("Search"),":"]}),Object(G.jsx)(M.B,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:o,onChange:function(e){return c(e.target.value)}})]}),Object(G.jsx)("div",{className:"d-flex align-items-center table-header-actions",children:m.can("post",sessionStorage.getItem("current_page_perm"))?Object(G.jsxs)(M.i,{className:"add-new-user",color:"primary",onClick:t,children:[r("Add New")," ",r(g.pageTitle)]}):null})]})]})})};t.default=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e[g.storeName]})),a=Object(d.a)().t,i=(Object(s.useContext)(u.a),Object(s.useContext)(S.a).colors),p=Object(s.useState)("desc"),h=Object(o.a)(p,2),x=h[0],D=h[1],C=Object(s.useState)(""),T=Object(o.a)(C,2),L=T[0],F=T[1],Y=Object(s.useState)(1),J=Object(o.a)(Y,2),z=J[0],Q=J[1],W=Object(s.useState)("id"),Z=Object(o.a)(W,2),U=Z[0],K=Z[1],X=Object(s.useState)(10),$=Object(o.a)(X,2),ee=$[0],te=$[1],ae=Object(s.useState)([]),ne=Object(o.a)(ae,2),ce=ne[0],oe=ne[1],le=Object(s.useState)(!1),ie=Object(o.a)(le,2),re=ie[0],se=ie[1],de=Object(s.useState)(!1),ue=Object(o.a)(de,2),me=ue[0],be=ue[1],ge=Object(s.useState)(!1),je=Object(o.a)(ge,2),pe=je[0],fe=je[1],he=Object(s.useState)("Please Wait"),Oe=Object(o.a)(he,2),xe=(Oe[0],Oe[1]),ve=Object(s.useState)(!1),we=Object(o.a)(ve,2),ye=we[0],Ne=we[1],Se=Object(s.useState)(null),ke=Object(o.a)(Se,2),Me=ke[0],_e=ke[1],De=function(t){_e("edit"),g.detailFromGrid?(xe("".concat(a("Loading")," ").concat(a("Detail")," ").concat(a("Data")," ").concat(a(g.pageTitle))),fe(!0),e(Object(g.setDataById)(t)).then((function(){fe(!1),Ne(!0)}))):(xe("".concat(a("Loading")," ").concat(a("Detail")," ").concat(a("Data")," ").concat(a(g.pageTitle))),fe(!0),e(Object(g.getDataById)(t.id)).then((function(e){"rejected"===e.meta.requestStatus?(fe(!1),k.b.error(e.payload.message,{style:{padding:"16px",color:i.danger.main,border:"1px solid ".concat(i.danger.main)},iconTheme:{primary:i.danger.main}})):(fe(!1),Ne(!0))})))},Ce=function(){be(!me),Ne(!ye),Object(b.G)()},Te=function(){_e("add"),be(!me),Ne(!ye),Object(b.z)(Ce)},Le=function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q.fire({title:"".concat(a("Are you sure?")),text:"".concat(a("You won't be able to revert")," ").concat(a(g.pageTitle),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(a("Yes, Delete")," ").concat(a(g.pageTitle),"!"),cancelButtonText:"".concat(a("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 2:t.sent.value&&(xe("".concat(a("Deleting")," Data ").concat(a(g.pageTitle))),fe(!0),e(Object(g.deleteData)(n)).then((function(e){"fulfilled"===e.meta.requestStatus?(fe(!1),k.b.success("".concat(a("Successfully deleted")," ").concat(a(g.pageTitle)),{style:{padding:"16px",color:i.success.main,border:"1px solid ".concat(i.success.main)},iconTheme:{primary:i.success.main}})):"rejected"===e.meta.requestStatus&&(fe(!1),k.b.error(e.payload.message,{style:{padding:"16px",color:i.danger.main,border:"1px solid ".concat(i.danger.main)},iconTheme:{primary:i.danger.main}}))})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Ae=function(){var t=Object(c.a)(r.a.mark((function t(){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=ce.length,t.next=3,q.fire({title:"".concat(a("Are you sure?")),text:"".concat(a("You will delete")," ").concat(n," ").concat(a("selected data. Deleted data cannot be recovered"),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(a("Yes, Delete")," ").concat(n," ").concat(a(g.pageTitle),"!"),cancelButtonText:"".concat(a("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 3:t.sent.value&&(xe("".concat(a("Deleting")," ").concat(n," Data ").concat(a(g.pageTitle))),fe(!0),c=ce.map((function(e){return e.id})),e(Object(g.deleteSelectedRowData)({id:c})).then((function(e){"fulfilled"===e.meta.requestStatus?(oe([]),se(!re),fe(!1),k.b.success("".concat(a("Successfully deleted")," ").concat(n," ").concat(a(g.pageTitle)),{style:{padding:"16px",color:i.success.main,border:"1px solid ".concat(i.success.main)},iconTheme:{primary:i.success.main}})):"rejected"===e.meta.requestStatus&&(fe(!1),k.b.error(e.payload.message,{style:{padding:"16px",color:i.danger.main,border:"1px solid ".concat(i.danger.main)},iconTheme:{primary:i.danger.main}}))})));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Fe=Object(s.useCallback)(v()((function(t){e(Object(g.getDataList)({sort_dir:x,search:t,sort:U,page:z,length:ee}))}),500),[]),Be=Object(s.useCallback)((function(e){oe(e.selectedRows)}),[]),Re={python:"https://logos-download.com/wp-content/uploads/2016/10/Python_logo_wordmark.png",javascript:"https://javascriptsu.files.wordpress.com/2020/12/js.jpg",react:"https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png",angular:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQgREvN-e1uVZXVDc2w_zLeey0Li4buQ26gF0ZmCYxaBMoybo4uQTncS3Z5WxHRyZNfA&usqp=CAU",flask:"https://miro.medium.com/max/1079/1*nvtdCw77Al6LgV8wt_ma6Q.png"},Pe=[{name:a("App Name"),sortField:"name",center:!1,sortable:!0,selector:function(e){return e.name},cell:function(e){var t,a;return Object(G.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[null!==(t=e.logo)&&void 0!==t&&t.appLogo?Object(G.jsx)(_.a,{className:"me-1",img:null===e||void 0===e||null===(a=e.logo)||void 0===a?void 0:a.appLogo,width:"32",height:"32",imgHeight:"25",imgWidth:"30",color:"light-primary"}):e.is_uploading?Object(G.jsx)(N.a,{size:"sm",color:"primary"}):Object(G.jsx)(_.a,{initials:!0,className:"me-1",color:"light-primary",content:e.name||"John Doe"}),Object(G.jsxs)("div",{className:"d-flex flex-column",children:[Object(G.jsx)("span",{className:"fw-bolder",children:e.name}),Object(G.jsx)("small",{className:"text-truncate text-muted mb-0",children:e.code})]})]})}},{name:a("App Type"),center:!1,sortable:!1,selector:function(e){return e.info.appType},cell:function(e){var t,a;return Object(G.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:["service"===(null===e||void 0===e||null===(t=e.info)||void 0===t?void 0:t.appType)?Object(G.jsx)(H.a,{className:"me-1",sixe:32}):Object(G.jsx)(V.a,{className:"me-1",sixe:32}),Object(G.jsx)("div",{className:"d-flex flex-column",children:Object(G.jsx)("span",{className:"fw-bolder",children:null===e||void 0===e||null===(a=e.info)||void 0===a?void 0:a.appType})})]})}},{name:a("Framework"),center:!1,sortable:!1,selector:function(e){return e.info.programming_language.main_language},cell:function(e){var t,a,n,c,o,l,i,r;return Object(G.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[Re[null===e||void 0===e||null===(t=e.info)||void 0===t||null===(a=t.programming_language)||void 0===a?void 0:a.main_language]&&Object(G.jsx)("img",{className:"me-1",src:Re[null===e||void 0===e||null===(n=e.info)||void 0===n||null===(c=n.programming_language)||void 0===c?void 0:c.main_language],height:"18"}),Re[null===e||void 0===e||null===(o=e.info)||void 0===o||null===(l=o.programming_language)||void 0===l?void 0:l.framework]&&Object(G.jsx)("img",{className:"me-1",src:Re[null===e||void 0===e||null===(i=e.info)||void 0===i||null===(r=i.programming_language)||void 0===r?void 0:r.framework],height:"18"})]})}}].concat(Object(n.a)(t.dynamicColumns.map((function(e){return{name:e.columnName,sortField:e.fieldName,center:!1,sortable:!0,selector:function(t){return t[e.fieldName]},cell:function(t){return function(e,t){var a=e[t.fieldName],n=t.dataFormat;if(n&&n.includes(":")){var c=n.split(":"),o=c[0],l=c[1],i=e[t.fieldName];return"date"===o&&(i=B()(a).format("DD MMM YYYY"),l&&(i=B()(a).format(l))),"datetime"===o&&(i=B()(a).format("DD MMM YYYY HH:mm"),l&&(i=B()(a).format(l))),i}return e[t.fieldName]}(t,e)}}}))),[{name:a("Actions"),center:!0,width:"140px",cell:function(e){return Object(G.jsx)(R.a,{row:e,handleDelete:Le,handleEdit:De,storeName:g.storeName})}}]),Ye=Object(s.useMemo)((function(){return t.isLoading?Pe.map((function(e){return Object(l.a)(Object(l.a)({name:a(e.name)},e),{},{sortable:!1,cell:function(t){return Object(G.jsx)(A.a,{sx:{bgcolor:i.dark.light},animation:"wave",className:"Actions"===e.name?"ms-2":"",width:"Actions"===e.name?10:"100%",height:40})}})})):Pe.map((function(e){return Object(l.a)({name:a(e.name)},e)}))}),[t.isLoading,Pe]);return Object(s.useEffect)((function(){(0===t.data.length||!t.isLoading&&g.getAlwaysGrid)&&(xe("".concat(a("Loading Data")," ").concat(a(g.pageTitle))),e(Object(g.getDataList)({sort_dir:x,sort:U,search:L,page:z,length:ee})))}),[e,t.data.length,x,U,z]),Object(G.jsxs)(s.Fragment,{children:[Object(G.jsx)(y.a,{blocking:pe,loader:Object(G.jsx)(P.b,{}),children:Object(G.jsx)(M.l,{className:"overflow-hidden",children:Object(G.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(G.jsx)(O.a,{noHeader:!0,subHeader:!0,sortServer:!0,responsive:!0,pagination:!0,paginationServer:!0,paginationTotalRows:t.total,paginationComponent:function(){var a=Number(Math.ceil(t.total/ee));return Object(G.jsx)(f.a,{previousLabel:"",nextLabel:"",pageCount:a||1,activeClassName:"active",forcePage:0!==z?z-1:0,onPageChange:function(t){return function(t){e(Object(g.getDataList)({sort_dir:x,sort:U,search:L,length:ee,page:t.selected+1})),Q(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},selectableRows:!0,onSelectedRowsChange:Be,selectableRowsHighlight:!0,clearSelectedRows:re,selectableRowsComponent:I,noDataComponent:Object(G.jsx)(P.c,{}),style:{"min-height":"400px"},highlightOnHover:!0,pointerOnHover:!0,columns:Ye,onSort:function(t,a){D(a),K(t.sortField),e(Object(g.getDataList)({sort_dir:x,sort:U,search:L,page:z,length:ee}))},sortIcon:Object(G.jsx)(w.a,{}),className:"react-dataTable",data:function(){var e={search:L},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.isLoading?Array(10).fill({}):t.data.length>0?t.data:0===t.data.length&&a?[]:void 0}(),subHeaderComponent:Object(G.jsx)(E,{store:t,searchTerm:L,rowsPerPage:ee,handleFilter:function(e){F(e),Fe(e)},handlePerPage:function(t){var a=parseInt(t.currentTarget.value);e(Object(g.getDataList)({sort_dir:x,sort:U,search:L,length:a,page:z})),te(a)},toggleSidebar:Te,selectedRow:ce,handleDeleteSelected:Ae})})})})}),ye&&Object(G.jsx)(m.default,{formState:Me,show:ye,setShow:Te,detailPage:!1,setFormState:_e})]})}},761:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(16),o=a(81),l=(a(1204),a(13)),i=a(11),r=a.n(i),s=a(82),d=a(360),u=a(0);t.default=function(e){var t,a=e.lookupMode_fieldName,i=void 0===a?"":a,m=e.lookupMode_isMulti,b=void 0!==m&&m,g=e.lookupMode_onChange,j=e.lookupMode_defaultValue,p=Object(o.a)().t,f=Object(c.b)(),h=Object(c.c)((function(e){return e[d.storeName]}));return Object(n.useEffect)((function(){(0===h.data.length||!h.isLoading&&d.getAlwaysGrid)&&f(Object(d.getDataList)({}))}),[f,h.data.length]),Object(u.jsx)(n.Fragment,{children:Object(u.jsx)(s.a,{theme:l.H,defaultValue:b?j:h.dataDropdown.filter((function(e){return e.value===j})),placeholder:"".concat(p("Filter")," ").concat(p(d.pageTitle),"..."),isMulti:b,onChange:function(e){return g(e.value,i)},options:h.dataDropdown,className:r()("react-select",{"is-invalid":null===(null===(t=h.selectedData)||void 0===t?void 0:t.id)}),classNamePrefix:"select"})})}}}]);
//# sourceMappingURL=39.093aaa7e.chunk.js.map