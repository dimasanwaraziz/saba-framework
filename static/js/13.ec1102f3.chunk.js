(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[13,78],{367:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(6),r=a(2),s=a(33),l=a(25),i=(a(168),a(439)),o=a(121),d=a(5),u=a(81),j=a(64),b=(a(753),a(102),a(34)),m=a(13),p=a(82),h=(a(136),a(145),a(1260),a(46)),f=a(188),O=a(16),g=a(47),x=a(11),v=a.n(x),y=a(19),N=a(54),w=a(50),S=a(1251),C=a(1248),_=a(1247),D=a(1199),T=a(0),k=["onChange","maxRows","minRows","style","value"];function P(e){return parseInt(e,10)||0}var R={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"};function E(e){return void 0===e||null===e||0===Object.keys(e).length||0===e.outerHeightStyle&&!e.overflow}var I=r.forwardRef((function(e,t){var a=e.onChange,n=e.maxRows,s=e.minRows,l=void 0===s?1:s,i=e.style,o=e.value,d=Object(N.a)(e,k),u=r.useRef(null!=o).current,j=r.useRef(null),b=Object(S.a)(t,j),m=r.useRef(null),p=r.useRef(0),h=r.useState({outerHeightStyle:0}),f=Object(c.a)(h,2),O=f[0],g=f[1],x=r.useCallback((function(){var t=j.current,a=Object(C.a)(t).getComputedStyle(t);if("0px"===a.width)return{outerHeightStyle:0};var c=m.current;c.style.width=a.width,c.value=t.value||e.placeholder||"x","\n"===c.value.slice(-1)&&(c.value+=" ");var r=a.boxSizing,s=P(a.paddingBottom)+P(a.paddingTop),i=P(a.borderBottomWidth)+P(a.borderTopWidth),o=c.scrollHeight;c.value="x";var d=c.scrollHeight,u=o;return l&&(u=Math.max(Number(l)*d,u)),n&&(u=Math.min(Number(n)*d,u)),{outerHeightStyle:(u=Math.max(u,d))+("border-box"===r?s+i:0),overflow:Math.abs(u-o)<=1}}),[n,l,e.placeholder]),v=function(e,t){var a=t.outerHeightStyle,n=t.overflow;return p.current<20&&(a>0&&Math.abs((e.outerHeightStyle||0)-a)>1||e.overflow!==n)?(p.current+=1,{overflow:n,outerHeightStyle:a}):e},I=r.useCallback((function(){var e=x();E(e)||g((function(t){return v(t,e)}))}),[x]);r.useEffect((function(){var e,t=Object(_.a)((function(){p.current=0,j.current&&function(){var e=x();E(e)||w.flushSync((function(){g((function(t){return v(t,e)}))}))}()})),a=j.current,n=Object(C.a)(a);return n.addEventListener("resize",t),"undefined"!==typeof ResizeObserver&&(e=new ResizeObserver(t)).observe(a),function(){t.clear(),n.removeEventListener("resize",t),e&&e.disconnect()}})),Object(D.a)((function(){I()})),r.useEffect((function(){p.current=0}),[o]);return Object(T.jsxs)(r.Fragment,{children:[Object(T.jsx)("textarea",Object(y.a)({value:o,onChange:function(e){p.current=0,u||I(),a&&a(e)},ref:b,rows:l,style:Object(y.a)({height:O.outerHeightStyle,overflow:O.overflow?"hidden":void 0},i)},d)),Object(T.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:m,tabIndex:-1,style:Object(y.a)({},R,i,{paddingTop:0,paddingBottom:0})})]})})),L=a(17),B=a(259),F=a(260),H=function(e){var t=e.htmlFor;return Object(T.jsxs)(d.E,{className:"form-check-label",htmlFor:t,children:[Object(T.jsx)("span",{className:"switch-icon-left",children:Object(T.jsx)(i.a,{size:14})}),Object(T.jsx)("span",{className:"switch-icon-right",children:Object(T.jsx)(o.a,{size:14})})]})};t.default=function(e){var t,a,i,o,x,y,N,w,S,C=e.show,_=e.setShow,D=e.detailPage,k=e.formState,P=e.setFormState,R=e.currentData,E=void 0===R?null:R,Y=Object(u.a)().t,A=Object(s.g)().id,M=Object(O.b)(),q=Object(O.c)((function(e){return e[f.storeName]})),z=Object(r.useContext)(b.a).colors,V=Object(r.useState)("Please Wait"),U=Object(c.a)(V,2),G=(U[0],U[1]),K=Object(h.e)({}),W=K.control,J=K.setError,Q=K.setValue,Z=K.getValues,X=K.handleSubmit,$=K.formState.errors,ee=Object(r.useState)(E.is_separator),te=Object(c.a)(ee,2),ae=te[0],ne=te[1],ce=Object(r.useState)("feather"),re=Object(c.a)(ce,2),se=re[0],le=re[1],ie=Object(r.useState)(null===E||void 0===E?void 0:E.icon),oe=Object(c.a)(ie,2),de=oe[0],ue=oe[1],je=Object(r.useState)("start"),be=Object(c.a)(je,2),me=be[0],pe=be[1],he=Object(r.useState)(!1),fe=Object(c.a)(he,2),Oe=fe[0],ge=fe[1],xe=function(){le("feather"),pe("start"),ge(!Oe)},ve=function(){le("feather"),pe("bottom"),ge(!Oe)},ye=function(e){Q("icon",e),ue(e)},Ne=function(){M(Object(f.resetSelectedData)())};return Object(T.jsxs)(d.G,{isOpen:C,toggle:function(){Ne(),_(!C)},className:"modal-dialog-centered modal-lg",children:[Object(T.jsxs)(j.a,{blocking:q.isLoadingAddEdit||q.isLoadingDetail,loader:Object(T.jsx)(g.b,{}),children:[Object(T.jsx)(d.J,{className:"bg-transparent",toggle:function(){Ne(),_(!C)}}),Object(T.jsxs)(d.H,{className:"px-sm-5 pt-50 pb-5",children:[Object(T.jsxs)("div",{className:"text-center mb-2",children:[Object(T.jsxs)("h2",{className:"mb-1",children:[Y("edit"===k?"Edit":"Add Sub")," ",Y(f.pageTitle)]}),"edit"!==k&&Object(T.jsxs)("p",{className:"mb-1",children:[Y("Child for ")," ",E?Y(E.title):""]})]}),Object(T.jsx)(d.y,{onSubmit:X("edit"===k?function(e){if(e.is_separator=ae,e.icon=de,e.parent_id&&(e.parent_id.value>=9e3?(e.id_app=e.parent_id.id_app,e.parent_id=null):e.parent_id=e.parent_id.value),Object.values(e).every((function(e){return null!==e}))||null===e.parent_id)if(ae||""!==e.routePath)G("".concat(Y("Updating")," ").concat(Y(f.pageTitle)," ").concat(Y("Detail")," Data")),M(Object(f.putData)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(_(!C),l.b.success("".concat(Y("Successfully Updated")," ").concat(Y(f.pageTitle)),{style:{padding:"16px",color:z.success.main,border:"1px solid ".concat(z.success.main)},iconTheme:{primary:z.success.main}}),D&&M(Object(f.getDataById)(A))):"rejected"===e.meta.requestStatus&&l.b.error(e.payload.message,{style:{padding:"16px",color:z.danger.main,border:"1px solid ".concat(z.danger.main)},iconTheme:{primary:z.danger.main}})}));else for(var t in e){var a;null!==e[t]&&0===(null===(a=e[t])||void 0===a?void 0:a.length)&&J(t,{type:"manual"})}else for(var n in e){var c;0===(null===(c=e[n])||void 0===c?void 0:c.length)&&J(n,{type:"manual"})}}:function(e){if(Object.values(e).every((function(e){return null!==e})))if(ae||""!==e.routePath)G("".concat(Y("Creating a New ".concat(f.pageTitle)))),E.is_app_header?e.parent_id=null:e.parent_id=E.id,e.id_app=E.id_app,e.is_separator=ae,e.icon=de,M(Object(f.postData)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(_(!C),l.b.success("".concat(Y("Successfully Created")," ").concat(Y(f.pageTitle)),{style:{padding:"16px",color:z.success.main,border:"1px solid ".concat(z.success.main)},iconTheme:{primary:z.success.main}}),D&&M(Object(f.getDataById)(A))):"rejected"===e.meta.requestStatus&&l.b.error(e.payload.message,{style:{padding:"16px",color:z.danger.main,border:"1px solid ".concat(z.danger.main)},iconTheme:{primary:z.danger.main}})}));else for(var t in e){var a;null!==e[t]&&0===(null===(a=e[t])||void 0===a?void 0:a.length)&&J(t,{type:"manual"})}else for(var n in e){var c;null!==e[n]&&0===(null===(c=e[n])||void 0===c?void 0:c.length)&&J(n,{type:"manual"})}}),children:Object(T.jsxs)(d.U,{className:"gy-1 pt-75",children:[Object(T.jsxs)(d.t,{md:6,xs:12,children:[Object(T.jsxs)(d.E,{className:"form-label",for:"title",children:[Y("Title"),Object(T.jsx)("span",{className:"text-danger",children:"*"})]}),Object(T.jsx)(h.a,{defaultValue:null!==(t=null===(a=q.selectedData)||void 0===a?void 0:a.title)&&void 0!==t?t:"",control:W,id:"title",name:"title",render:function(e){var t=e.field;return Object(T.jsx)(d.B,Object(n.a)(Object(n.a)({},t),{},{className:$.title?"form-control is-invalid":"form-control",id:"title",invalid:$.title&&!0}))}})]}),!ae&&Object(T.jsxs)(d.t,{md:4,xs:8,className:"text-center",children:[Object(T.jsxs)(d.E,{className:"form-label",for:"icon",children:[Y("Icon"),Object(T.jsx)("span",{className:"text-danger",children:"*"})]}),Object(T.jsx)("div",{}),Object(T.jsx)(h.a,{defaultValue:null!==(i=null===(o=q.selectedData)||void 0===o?void 0:o.icon)&&void 0!==i?i:"",control:W,id:"icon",name:"icon",render:function(e){var t,a,c=e.field;return Object(T.jsxs)(d.C,{children:[Object(T.jsx)(d.B,Object(n.a)(Object(n.a)({},c),{},{className:$.icon?"form-control is-invalid":"form-control",onChange:function(e){var t=e.target.value;c.onChange(t),ue(t)},id:"icon",invalid:$.icon&&!0})),Object(T.jsx)(d.i.Ripple,{className:"btn-icon",outline:!0,color:"secondary",onClick:ve,children:Object(L.renderIcon)(null!==(t=null!==(a=Z().icon)&&void 0!==a?a:de)&&void 0!==t?t:"material:highlight_alt","fw-bold",16)})]})}})]}),Object(T.jsxs)(d.t,{className:" d-grid justify-content-center",md:2,xs:4,children:[Object(T.jsx)(d.E,{className:"form-label",for:"is_separator",children:Y("Separator")}),Object(T.jsxs)("div",{style:{marginTop:"4px"},className:"form-switch form-check-primary mx-auto",children:[Object(T.jsx)(d.B,{type:"switch",defaultChecked:ae,onChange:function(e){!function(e){ne(e.target.checked),e.target.checked}(e)},id:"icon-primary",name:"icon-primary"}),Object(T.jsx)(H,{htmlFor:"icon-primary"})]})]}),Object(T.jsxs)(d.t,{md:6,xs:12,children:[Object(T.jsx)(d.E,{className:"form-label",for:"parent_id",children:Y("Parent Menu")}),Object(T.jsx)(h.a,{defaultValue:null!==(x=q.dataDropdown.filter((function(e){return e.value===("edit"===k?null===E||void 0===E?void 0:E.parent_id:null===E||void 0===E?void 0:E.id)})))&&void 0!==x?x:"",control:W,id:"parent_id",name:"parent_id",render:function(e){var t,a=e.field;return Object(T.jsx)(p.a,Object(n.a)(Object(n.a)({},a),{},{id:"parent_id",theme:m.H,defaultValue:q.dataDropdown.filter((function(e){return e.value===("edit"===k?null===E||void 0===E?void 0:E.parent_id:null===E||void 0===E?void 0:E.id)})),isDisabled:"add"===k,options:q.dataDropdown.filter((function(e){var t;return e.value!==(null===(t=q.selectedData)||void 0===t?void 0:t.id)})).map((function(e){return Object(n.a)(Object(n.a)({},e),{},{label:Y(e.title)})})),className:v()("react-select",{"is-invalid":null===(null===(t=q.selectedData)||void 0===t?void 0:t.parent_id)}),classNamePrefix:"select"}))}})]}),!ae&&Object(T.jsxs)(d.t,{md:6,xs:12,children:[Object(T.jsxs)(d.E,{className:"form-label",for:"subject",children:[Y("Route Path"),Object(T.jsx)("span",{className:"text-danger",children:"*"})]}),Object(T.jsx)(h.a,{defaultValue:null!==(y=null===(N=q.selectedData)||void 0===N?void 0:N.routePath)&&void 0!==y?y:"",control:W,id:"routePath",name:"routePath",render:function(e){var t=e.field;return Object(T.jsx)(d.B,Object(n.a)(Object(n.a)({},t),{},{className:$.routePath?"form-control is-invalid":"form-control",id:"routePath",invalid:$.routePath&&!0}))}})]}),Object(T.jsxs)(d.t,{md:12,xs:12,children:[Object(T.jsx)(d.E,{className:"form-label",for:"description",children:Y("Description")}),Object(T.jsx)(h.a,{defaultValue:null!==(w=null===(S=q.selectedData)||void 0===S?void 0:S.description)&&void 0!==w?w:"",control:W,id:"description",name:"description",render:function(e){var t=e.field;return Object(T.jsx)(I,Object(n.a)(Object(n.a)({},t),{},{className:"form-control",id:"description"}))}})]}),Object(T.jsxs)(d.t,{xs:12,className:"text-center mt-2 pt-50",children:[Object(T.jsx)(d.i,{type:"submit",className:"me-1",color:"primary",children:Y("Submit")}),Object(T.jsx)(d.i,{type:"reset",color:"secondary",outline:!0,onClick:function(){Ne(),P("add"),_(!1)},children:Y("Cancel")})]})]})})]})]}),Object(T.jsxs)(d.O,{direction:me,isOpen:Oe,toggle:xe,children:[Object(T.jsxs)(d.Q,{className:"mb-1 mt-1 me-1",toggle:xe,children:[Y("Select")," ",Y("Icon"),Object(T.jsx)(d.i.Ripple,{className:"ms-2 me-2",color:"primary",outline:"feather"!==se,onClick:function(e){le("feather")},children:"Feather Icon"}),Object(T.jsx)(d.i.Ripple,{color:"primary",outline:"material"!==se,onClick:function(e){le("material")},children:"Material Icon"})]}),Object(T.jsx)(d.P,{className:v()({"my-auto mx-0 flex-grow-0":"start"===me||"end"===me}),children:"feather"===se?Object(T.jsx)(B.default,{setIcon:ye,setCanvasOpen:ge}):Object(T.jsx)(F.default,{setIcon:ye,setCanvasOpen:ge})})]})]})}},773:function(e,t,a){"use strict";a.r(t);var n=a(9),c=a(6),r=a(4),s=a(7),l=a.n(s),i=a(2),o=a(81),d=a(42),u=a(367),j=a(13),b=a(188),m=a(189),p=a(16),h=a(169),f=a.n(h),O=a(170),g=a.n(O),x=a(84),v=a.n(x),y=a(458),N=a(454),w=a(544),S=a(547),C=a(543),_=a(321),D=a(317),T=a(216),k=a(64),P=(a(753),a(34)),R=a(25),E=a(5),I=(a(94),a(105),a(43)),L=a.n(I),B=a(49),F=a.n(B),H=a(87),Y=a(47),A=a(0),M=F()(L.a),q=Object(i.forwardRef)((function(e,t){return Object(A.jsx)("div",{className:"form-check",children:Object(A.jsx)(E.B,Object(r.a)({type:"checkbox",ref:t},e))})})),z=function(e){e.store;var t=e.toggleSidebar,a=e.handlePerPage,n=e.rowsPerPage,c=e.handleFilter,r=e.searchTerm,s=e.selectedRow,l=e.handleDeleteSelected,u=Object(o.a)().t,h=Object(i.useContext)(d.a),f=Object(p.b)(),O=(Object(p.c)((function(e){return e.invoices})),Object(j.q)());return Object(A.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(A.jsxs)(E.U,{children:[Object(A.jsx)(E.t,{xl:"4",className:"d-flex align-items-center p-0",children:Object(A.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(A.jsx)("label",{htmlFor:"rows-per-page",children:u("Show")}),Object(A.jsxs)(E.B,{className:"mx-50",type:"select",id:"rows-per-page",value:n,onChange:a,style:{width:"5rem"},children:[Object(A.jsx)("option",{value:"10",children:"10"}),Object(A.jsx)("option",{value:"25",children:"25"}),Object(A.jsx)("option",{value:"50",children:"50"})]}),Object(A.jsx)("label",{htmlFor:"rows-per-page",children:u("Entries")})]})}),Object(A.jsxs)(E.t,{xl:"8",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[(null===s||void 0===s?void 0:s.length)>0&&h.can("delete",sessionStorage.getItem("current_page_perm"))?Object(A.jsx)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:Object(A.jsxs)(E.i,{className:"delete-users",color:"danger",onClick:l,children:[u("Delete")," ",s.length," ",u("Selected ".concat(b.pageTitle))]})}):null,Object(A.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(A.jsxs)("label",{className:"mb-0",htmlFor:"search-invoice",children:[u("Search"),":"]}),Object(A.jsx)(E.B,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:r,onChange:function(e){return c(e.target.value)}})]}),Object(A.jsxs)("div",{className:"d-flex align-items-center table-header-actions",children:[Object(A.jsxs)(E.ab,{className:"me-1",children:[Object(A.jsxs)(E.x,{color:"secondary",caret:!0,outline:!0,children:[Object(A.jsx)(y.a,{className:"font-small-4 me-50"}),Object(A.jsx)("span",{className:"align-middle",children:u("Export")})]}),Object(A.jsxs)(E.w,{children:[Object(A.jsxs)(E.v,{className:"w-100",onClick:function(){return f(Object(m.getInvoice)({rpt_name:"sample",output_type:"pdf",dataYear:O.dataYear,print:!0,as_attachment:!0,par_UNITKEY:139,par_SAMPLE:"ahh...ini adalah sample parameter"}))},children:[Object(A.jsx)(N.a,{className:"font-small-4 me-50"}),Object(A.jsx)("span",{className:"align-middle",children:u("Print")})]}),Object(A.jsxs)(E.v,{className:"w-100",onClick:function(){return f(Object(m.getInvoice)({rpt_name:"sample",output_type:"pdf",dataYear:O.dataYear,par_UNITKEY:139,par_SAMPLE:"ahh...ini adalah sample parameter"}))},children:[Object(A.jsx)(w.a,{className:"font-small-4 me-50"}),Object(A.jsx)("span",{className:"align-middle",children:"PDF"})]}),Object(A.jsxs)(E.v,{className:"w-100",onClick:function(){return f(Object(m.getInvoice)({rpt_name:"sample",output_type:"xls",dataYear:O.dataYear,as_attachment:!0,par_UNITKEY:139,par_SAMPLE:"ahh...ini adalah sample parameter"}))},children:[Object(A.jsx)(S.a,{className:"font-small-4 me-50"}),Object(A.jsx)("span",{className:"align-middle",children:"Excel"})]}),Object(A.jsxs)(E.v,{className:"w-100",onClick:function(){return f(Object(m.getInvoice)({rpt_name:"sample",output_type:"csv",dataYear:O.dataYear,as_attachment:!0,par_UNITKEY:139,par_SAMPLE:"ahh...ini adalah sample parameter"}))},children:[Object(A.jsx)(C.a,{className:"font-small-4 me-50"}),Object(A.jsx)("span",{className:"align-middle",children:"CSV"})]})]})]}),h.can("post",sessionStorage.getItem("current_page_perm"))?Object(A.jsxs)(E.i,{className:"add-new-user",color:"primary",onClick:t,children:[u("Add New")," ",u(b.pageTitle)]}):null]})]})]})})};t.default=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e[b.storeName]})),a=Object(o.a)().t,s=Object(i.useContext)(d.a),m=Object(i.useContext)(P.a).colors,h=Object(i.useState)("desc"),O=Object(c.a)(h,2),x=O[0],y=O[1],N=Object(i.useState)(""),w=Object(c.a)(N,2),S=w[0],C=w[1],I=Object(i.useState)(1),L=Object(c.a)(I,2),B=L[0],F=L[1],V=Object(i.useState)(null),U=Object(c.a)(V,2),G=U[0],K=U[1],W=Object(i.useState)(10),J=Object(c.a)(W,2),Q=J[0],Z=J[1],X=Object(i.useState)([]),$=Object(c.a)(X,2),ee=$[0],te=$[1],ae=Object(i.useState)(!1),ne=Object(c.a)(ae,2),ce=ne[0],re=ne[1],se=Object(i.useState)(!1),le=Object(c.a)(se,2),ie=le[0],oe=le[1],de=Object(i.useState)(!1),ue=Object(c.a)(de,2),je=ue[0],be=ue[1],me=Object(i.useState)("Please Wait"),pe=Object(c.a)(me,2),he=(pe[0],pe[1]),fe=Object(i.useState)(!1),Oe=Object(c.a)(fe,2),ge=Oe[0],xe=Oe[1],ve=Object(i.useState)(null),ye=Object(c.a)(ve,2),Ne=ye[0],we=ye[1],Se=function(){oe(!ie),xe(!ge),Object(j.G)()},Ce=function(){we("add"),oe(!ie),xe(!ge),Object(j.z)(Se)},_e=function(){var t=Object(n.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.fire({title:"".concat(a("Are you sure?")),text:"".concat(a("You won't be able to revert")," ").concat(a(b.pageTitle),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(a("Yes, Delete")," ").concat(a(b.pageTitle),"!"),cancelButtonText:"".concat(a("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 2:t.sent.value&&(he("".concat(a("Deleting")," Data ").concat(a(b.pageTitle))),be(!0),e(Object(b.deleteData)(n)).then((function(e){"fulfilled"===e.meta.requestStatus?(be(!1),R.b.success("".concat(a("Successfully deleted")," ").concat(a(b.pageTitle)),{style:{padding:"16px",color:m.success.main,border:"1px solid ".concat(m.success.main)},iconTheme:{primary:m.success.main}})):"rejected"===e.meta.requestStatus&&(be(!1),R.b.error(e.payload.message,{style:{padding:"16px",color:m.danger.main,border:"1px solid ".concat(m.danger.main)},iconTheme:{primary:m.danger.main}}))})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),De=function(){var t=Object(n.a)(l.a.mark((function t(){var n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=ee.length,t.next=3,M.fire({title:"".concat(a("Are you sure?")),text:"".concat(a("You will delete")," ").concat(n," ").concat(a("selected data. Deleted data cannot be recovered"),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(a("Yes, Delete")," ").concat(n," ").concat(a(b.pageTitle),"!"),cancelButtonText:"".concat(a("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 3:t.sent.value&&(he("".concat(a("Deleting")," ").concat(n," Data ").concat(a(b.pageTitle))),be(!0),c=ee.map((function(e){return e.id})),e(Object(b.deleteSelectedRowData)({id:c})).then((function(e){"fulfilled"===e.meta.requestStatus?(te([]),re(!ce),be(!1),R.b.success("".concat(a("Successfully deleted")," ").concat(n," ").concat(a(b.pageTitle)),{style:{padding:"16px",color:m.success.main,border:"1px solid ".concat(m.success.main)},iconTheme:{primary:m.success.main}})):"rejected"===e.meta.requestStatus&&(be(!1),R.b.error(e.payload.message,{style:{padding:"16px",color:m.danger.main,border:"1px solid ".concat(m.danger.main)},iconTheme:{primary:m.danger.main}}))})));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Te=Object(i.useCallback)(v()((function(t){e(Object(b.getDataList)({sort_dir:x,search:t,sort:G,page:B,length:Q}))}),500),[]),ke=Object(i.useCallback)((function(e){te(e.selectedRows)}),[]),Pe=[{name:a("Title"),center:!1,sortable:!0,sortField:"title",selector:function(e){return e.title},cell:function(e){return e.title}},{name:a("Description"),center:!1,sortable:!0,sortField:"description",selector:function(e){return e.description},cell:function(e){return e.description}},{name:a("Route Path"),center:!1,sortable:!0,sortField:"routePath",selector:function(e){return e.routePath},cell:function(e){return e.routePath}},{name:a("Actions"),center:!0,width:"140px",cell:function(t){return Object(A.jsxs)("div",{className:"column-action text-center",children:[s.can("delete",sessionStorage.getItem("current_page_perm"))?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(E.i.Ripple,{id:"btn-delete",className:"btn-icon rounded-circle",color:"flat-danger",onClick:function(e){e.preventDefault(),_e(t.id)},children:Object(A.jsx)(_.a,{size:16})}),Object(A.jsx)(E.cb,{placement:"left",target:"btn-delete",children:a("Delete")})]}):null,s.can("update",sessionStorage.getItem("current_page_perm"))?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(E.i.Ripple,{className:"btn-icon rounded-circle",color:"flat-info",id:"btn-edit",onClick:function(n){var c;n.preventDefault(),c=t,we("edit"),b.detailFromGrid?(he("".concat(a("Loading")," ").concat(a("Detail")," ").concat(a("Data")," ").concat(a(b.pageTitle))),be(!0),e(Object(b.setDataById)(c)).then((function(){be(!1),xe(!0)}))):(he("".concat(a("Loading")," ").concat(a("Detail")," ").concat(a("Data")," ").concat(a(b.pageTitle))),be(!0),e(Object(b.getDataById)(c.id)).then((function(e){"rejected"===e.meta.requestStatus?(be(!1),R.b.error(e.payload.message,{style:{padding:"16px",color:m.danger.main,border:"1px solid ".concat(m.danger.main)},iconTheme:{primary:m.danger.main}})):(be(!1),xe(!0))})))},children:Object(A.jsx)(D.a,{size:16})}),Object(A.jsx)(E.cb,{placement:"left",target:"btn-edit",children:a("Edit")})]}):null]})}}],Re=Object(i.useMemo)((function(){return t.isLoading?Pe.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{sortable:!1,cell:function(t){return Object(A.jsx)(H.a,{sx:{bgcolor:m.dark.light},animation:"wave",className:"Actions"===e.name?"ms-2":"",width:"Actions"===e.name?10:"100%",height:40})}})})):Pe.map((function(e){return Object(r.a)({},e)}))}),[t.isLoading,Pe]);return Object(i.useEffect)((function(){(0===t.data.length||!t.isLoading&&b.getAlwaysGrid)&&(he("".concat(a("Loading Data")," ").concat(a(b.pageTitle))),e(Object(b.getDataList)({sort_dir:x,sort:G,search:S,page:B,length:Q})))}),[e,t.data.length,x,G,B]),Object(A.jsxs)(i.Fragment,{children:[Object(A.jsx)(k.a,{blocking:je,loader:Object(A.jsx)(Y.b,{}),children:Object(A.jsx)(E.l,{className:"overflow-hidden",children:Object(A.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(A.jsx)(g.a,{noHeader:!0,subHeader:!0,sortServer:!0,responsive:!0,pagination:!0,paginationServer:!0,paginationTotalRows:t.total,paginationComponent:function(){var a=Number(Math.ceil(t.total/Q));return Object(A.jsx)(f.a,{previousLabel:"",nextLabel:"",pageCount:a||1,activeClassName:"active",forcePage:0!==B?B-1:0,onPageChange:function(t){return function(t){e(Object(b.getDataList)({sort_dir:x,sort:G,search:S,length:Q,page:t.selected+1})),F(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},selectableRows:!0,onSelectedRowsChange:ke,selectableRowsHighlight:!0,clearSelectedRows:ce,selectableRowsComponent:q,noDataComponent:Object(A.jsx)(Y.c,{}),style:{"min-height":"400px"},highlightOnHover:!0,pointerOnHover:!0,columns:Re,onSort:function(t,a){y(a),K(t.sortField),e(Object(b.getDataList)({sort_dir:x,sort:G,search:S,page:B,length:Q}))},sortIcon:Object(A.jsx)(T.a,{}),className:"react-dataTable",data:function(){var e={search:S},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.isLoading?Array(10).fill({}):t.data.length>0?t.data:0===t.data.length&&a?[]:void 0}(),subHeaderComponent:Object(A.jsx)(z,{store:t,searchTerm:S,rowsPerPage:Q,handleFilter:function(e){C(e),Te(e)},handlePerPage:function(t){var a=parseInt(t.currentTarget.value);e(Object(b.getDataList)({sort_dir:x,sort:G,search:S,length:a,page:B})),Z(a)},toggleSidebar:Ce,selectedRow:ee,handleDeleteSelected:De})})})})}),ge&&Object(A.jsx)(u.default,{formState:Ne,show:ge,setShow:Ce,detailPage:!1,setFormState:we})]})}}}]);
//# sourceMappingURL=13.ec1102f3.chunk.js.map