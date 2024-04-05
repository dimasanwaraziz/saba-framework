(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[40,46,64,84,85,86,147,170],{1182:function(e,t,a){},1237:function(e,t,a){!function(e){"use strict";var t="undefined"!==typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},a={weekdays:{shorthand:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],longhand:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]},months:{shorthand:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],longhand:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]},firstDayOfWeek:1,ordinal:function(){return""},time_24hr:!0,rangeSeparator:" - "};t.l10ns.id=a;var n=t.l10ns;e.Indonesian=a,e.default=n,Object.defineProperty(e,"__esModule",{value:!0})}(t)},374:function(e,t,a){"use strict";a.r(t);var n=a(6),c=a(2),o=a(16),i=a(78),r=(a(766),a(751)),l=a(755),s=a(5),d=a(219),u=a(1179),b=(a(1182),a(263)),p=a(189),h=a(83),m=a(0);t.default=function(e){var t,a,j=e.lookupMode,f=void 0!==j&&j,g=e.lookupMode_fieldName,O=void 0===g?"":g,x=e.lookupMode_dropdown,v=void 0!==x&&x,_=e.lookupMode_isMulti,y=void 0!==_&&_,k=e.lookupMode_onChange,S=e.lookupMode_defaultValue,M=(e.lookupMode_isM2MDefValFromGrid,Object(i.a)().t),D=Object(o.b)(),w=Object(o.c)((function(e){return e[p.storeName]})),N=Object(c.useState)(""),C=Object(n.a)(N,2),T=C[0],F=C[1];Object(c.useEffect)((function(){var e;p.getApiSummaryData&&(0===(null===(e=w.dataSummary)||void 0===e?void 0:e.length)||!w.isLoadingSummary&&p.getAlwaysGrid)&&D(Object(p.getSummaryData)({}))}),[D,null===(t=w.dataSummary)||void 0===t?void 0:t.length]);var A=["primary","success","warning","danger","info","secondary"];return v?Object(m.jsx)(l.default,{lookupMode_fieldName:O,lookupMode_onChange:k,lookupMode_defaultValue:S,lookupMode_isMulti:y,lookupMode_isM2MDefValFromGrid:!0}):Object(m.jsxs)(c.Fragment,{children:[Object(m.jsxs)("div",{className:"content-header row",children:[!f&&Object(m.jsx)(b.a,{title:M(p.pageTitle),data:[{title:M("App Setting")},{title:M(p.pageTitle)}]}),Object(m.jsx)("div",{className:"content-header-right text-md-end col-md col-12 mb-2 ",children:Object(m.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(m.jsxs)("label",{className:"mb-0",htmlFor:"search-invoice",children:[M("Search"),":"]}),Object(m.jsx)(s.B,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:T,onChange:function(e){return t=e.target.value,void F(t);var t}})]})})]}),Object(m.jsxs)("div",{className:"app-user-list",children:[!f&&p.getApiSummaryData&&Object(m.jsx)(s.S,{children:null===(a=w.dataSummary)||void 0===a?void 0:a.map((function(e,t){var a;return Object(m.jsx)(s.t,{children:Object(m.jsx)(d.a,{color:A[t],statTitle:"".concat(M(e.title)),icon:e.icon?Object(m.jsx)(u.a,{baseClassName:"material-icons-outlined",fontSize:"20",children:e.icon}):Object(m.jsx)(u.a,{baseClassName:"material-icons-outlined",fontSize:"20",children:"lightbulb"}),renderStats:w.isLoadingSummary?Object(m.jsx)(h.a,{sx:{bgcolor:"#eef2f8"},animation:"wave",height:25,width:40,className:"fw-bolder mb-75"}):Object(m.jsx)("h3",{className:"fw-bolder mb-75",children:null!==(a=e.count_format)&&void 0!==a?a:e.count})})})}))}),Object(m.jsx)(r.default,{searchString:T,lookupMode:f,lookupMode_fieldName:O,lookupMode_defaultValue:S,lookupMode_onChange:k,lookupMode_isMulti:y,lookupMode_isM2MDefValFromGrid:!0})]})]})}},751:function(e,t,a){"use strict";a.r(t);var n=a(9),c=a(6),o=a(7),i=a.n(o),r=a(2),l=a(78),s=a(42),d=a(364),u=a(13),b=a(189),p=a(17),h=(a(190),a(16)),m=(a(170),a(171),a(84),a(241)),j=a(316),f=a(320),g=a(64),O=(a(256),a(34)),x=a(24),v=a(5),_=a(43),y=a.n(_),k=a(49),S=a.n(k),M=(a(94),a(103),a(220)),D=a(47),w=a(0),N=S()(y.a);t.default=function(e){var t=e.searchString,a=e.lookupMode,o=e.lookupMode_fieldName,_=e.lookupMode_defaultValue,y=e.lookupMode_onChange,k=e.lookupMode_isMulti,S=e.lookupMode_isM2MDefValFromGrid,C=Object(h.b)(),T=Object(h.c)((function(e){return e[b.storeName]})),F=Object(l.a)().t,A=Object(r.useState)(!1),L=Object(c.a)(A,2),J=L[0],V=L[1],B=Object(r.useContext)(s.a),G=Object(r.useState)(!1),I=Object(c.a)(G,2),E=(I[0],I[1]),P=Object(r.useState)("Please Wait"),z=Object(c.a)(P,2),R=(z[0],z[1]),q=Object(r.useState)(!1),W=Object(c.a)(q,2),Z=W[0],K=W[1],Q=Object(r.useState)(null),U=Object(c.a)(Q,2),Y=U[0],H=U[1],X=Object(r.useState)(null),$=Object(c.a)(X,2),ee=$[0],te=$[1],ae=Object(r.useState)(0),ne=Object(c.a)(ae,2),ce=ne[0],oe=ne[1],ie=Object(r.useState)(null),re=Object(c.a)(ie,2),le=(re[0],re[1]),se=Object(r.useContext)(O.a).colors,de=function(){var e=Object(n.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.fire({title:"".concat(F("Are you sure?")),text:"".concat(F("You won't be able to revert")," ").concat(F(b.pageTitle),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(F("Yes, Delete")," ").concat(F(b.pageTitle),"!"),cancelButtonText:"".concat(F("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 2:e.sent.value&&(R("".concat(F("Deleting")," Data ").concat(F(b.pageTitle))),E(!0),C(Object(b.deleteData)(t)).then((function(e){"fulfilled"===e.meta.requestStatus?(E(!1),x.b.success("".concat(F("Successfully deleted")," ").concat(F(b.pageTitle)),{style:{padding:"16px",color:se.success.main,border:"1px solid ".concat(se.success.main)},iconTheme:{primary:se.success.main}})):"rejected"===e.meta.requestStatus&&(E(!1),x.b.error(e.payload.message,{style:{padding:"16px",color:se.danger.main,border:"1px solid ".concat(se.danger.main)},iconTheme:{primary:se.danger.main}}))})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;te(e),H("add"),V(!J),K(!Z),Object(u.z)(be)},be=function(){V(!J),K(!Z),Object(u.G)()},pe=function(e){C(Object(b.setDataList)(e))},he=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];R("".concat(F("Updating")," ").concat(F(b.pageTitle)," Data")),t&&(e.notReload=!0);var a=e.title;C(Object(b.putData)(e,t)).then((function(e){"fulfilled"===e.meta.requestStatus?x.b.success("".concat(F("Successfully Updated")," ").concat(F(b.pageTitle)," ").concat(a),{style:{padding:"16px",color:se.success.main,border:"1px solid ".concat(se.success.main)},iconTheme:{primary:se.success.main}}):"rejected"===e.meta.requestStatus&&x.b.error(e.payload.message,{style:{padding:"16px",color:se.danger.main,border:"1px solid ".concat(se.danger.main)},iconTheme:{primary:se.danger.main}})}))},me=function(e,t){var a=JSON.parse(JSON.stringify(t));a.forEach((function t(a){e.includes(a.id)&&(a.checked=!0,a.hidden=!0),Array.isArray(a.children)&&a.children.forEach(t)})),C(Object(b.setDataList)(a))};return Object(r.useEffect)((function(){(0===T.data.length||!T.isLoading&&b.getAlwaysGrid)&&(R("".concat(F("Loading Data")," ").concat(F(b.pageTitle))),C(Object(b.getDataList)({})).then((function(e){a&&S&&me(_,e.payload.data)}))),T.data,T.data.length>0&&S&&a&&me(_,T.data)}),[T.data]),Object(w.jsxs)(r.Fragment,{children:[Object(w.jsx)(g.a,{blocking:T.isLoading,loader:Object(w.jsx)(D.b,{}),children:Object(w.jsx)(v.l,{className:"overflow-hidden",children:Object(w.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(w.jsx)("div",{style:{height:a?350:800,margin:a?10:20},children:Object(w.jsx)(M.a,{treeData:T.data,onChange:pe,onMoveNode:a?null:function(e){e.treeData;var t=e.node,a=e.nextParentNode,n=(e.prevPath,e.prevTreeIndex,e.nextPath,e.nextTreeIndex),c={id:t.id,title:t.title,parent_id:null!==a&&void 0!==a&&a.is_app_header?null:a.id,index:null!==n&&void 0!==n?n:1};he(c,!0)},canDrag:!a&&function(e){var t;return null===(t=e.node)||void 0===t||!t.is_app_header},searchMethod:function(e){var t=e.node,a=e.searchQuery,n=t.title.toLowerCase(),c=F(t.title).toLowerCase();return a&&n.indexOf(a)>-1||a&&c.indexOf(a)>-1},searchQuery:t,searchFocusOffset:ce,searchFinishCallback:function(e){le(e.length),oe(e.length>0?ce%e.length:0)},maxDepth:4,generateNodeProps:function(e){var t,n=e.node;e.path;return{style:{fontSize:n.is_app_header?"16px":"14px",fontWeight:n.is_app_header?"bold":"normal"},title:Object(w.jsxs)(r.Fragment,{children:[n.is_app_header?Object(w.jsx)("img",{className:"me-1",src:n.logo,width:"30",height:"25"}):n.is_separator?null:n.icon?Object(w.jsxs)("div",{children:[Object(p.renderIcon)(n.icon,"",24)," "]}):Object(w.jsx)("div",{style:{fontWeight:n.is_app_header?"bold":400},children:F(n.title)}),Object(w.jsx)("div",{style:{paddingLeft:n.is_app_header?0:10,fontWeight:n.is_app_header||n.is_separator?"bold":400,textTransform:n.is_separator?"uppercase":"",color:n.is_separator?"#a6a4b0":"inherit"},children:F(n.title)})]}),buttons:[B.can("post",sessionStorage.getItem("current_page_perm"))&&!a?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(v.i.Ripple,{className:"btn-icon rounded-circle",color:"flat-primary",id:"btn-edit",onClick:function(e){ue(n)},children:Object(w.jsx)(m.a,{size:16})}),Object(w.jsx)(v.Z,{placement:"left",target:"btn-edit",children:F("Add Child")})]}):null,!B.can("update",sessionStorage.getItem("current_page_perm"))||a||n.is_app_header?null:Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(v.i.Ripple,{className:"btn-icon rounded-circle",color:"flat-info",id:"btn-edit",onClick:function(e){var t;e.preventDefault(),te(t=n),H("edit"),b.detailFromGrid?(R("".concat(F("Loading")," ").concat(F("Detail")," ").concat(F("Data")," ").concat(F(b.pageTitle))),E(!0),C(Object(b.setDataById)(t)).then((function(){E(!1),K(!0)}))):(R("".concat(F("Loading")," ").concat(F("Detail")," ").concat(F("Data")," ").concat(F(b.pageTitle))),E(!0),C(Object(b.getDataById)(t.id)).then((function(e){"rejected"===e.meta.requestStatus?(E(!1),x.b.error(e.payload.message,{style:{padding:"16px",color:se.danger.main,border:"1px solid ".concat(se.danger.main)},iconTheme:{primary:se.danger.main}})):(E(!1),K(!0))})))},children:Object(w.jsx)(j.a,{size:16})}),Object(w.jsx)(v.Z,{placement:"left",target:"btn-edit",children:F("Edit")})]}),B.can("delete",sessionStorage.getItem("current_page_perm"))&&!a&&!n.is_app_header&&!(null!==(t=n.children)&&void 0!==t&&t.length)>0?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(v.i.Ripple,{id:"btn-delete",className:"btn-icon rounded-circle",color:"flat-danger",onClick:function(e){e.preventDefault(),de(n.id)},children:Object(w.jsx)(f.a,{size:16})}),Object(w.jsx)(v.Z,{placement:"left",target:"btn-delete",children:F("Delete")})]}):null,a&&!n.is_app_header?Object(w.jsx)("div",{className:n.hidden?"form-check form-check-secondary":"form-check form-check-primary",children:Object(w.jsx)(v.B,{disabled:n.hidden,defaultChecked:n.checked,onChange:function(e){return function(e,t,a,n){var c=JSON.parse(JSON.stringify(T.data));return c.forEach((function a(n){n.id===t&&(n.checked=e.target.checked),Array.isArray(n.children)&&n.children.forEach(a)})),pe(c),y(t,a,n)}(e,n.id,o,k)},type:"checkbox",id:"checkbox-".concat(n.id)})}):null]}}})})})})}),Z&&Object(w.jsx)(d.default,{formState:Y,show:Z,setShow:ue,detailPage:!1,setFormState:H,currentData:ee})]})}},755:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(16),o=a(78),i=(a(1182),a(13)),r=a(12),l=a.n(r),s=a(79),d=a(189),u=a(0);t.default=function(e){var t,a=e.lookupMode_fieldName,r=void 0===a?"":a,b=e.lookupMode_isMulti,p=void 0!==b&&b,h=e.lookupMode_onChange,m=e.lookupMode_defaultValue,j=(Object(o.a)().t,Object(c.b)()),f=Object(c.c)((function(e){return e[d.storeName]}));return Object(n.useEffect)((function(){(0===f.data.length||!f.isLoading&&d.getAlwaysGrid)&&j(Object(d.getDataList)({}))}),[j,f.data.length]),Object(u.jsx)(n.Fragment,{children:Object(u.jsx)(s.a,{theme:i.H,defaultValue:p?m:f.dataDropdown.filter((function(e){return e.value===m})),isMulti:p,onChange:function(e){return h(e,r)},options:f.dataDropdown,className:l()("react-select",{"is-invalid":null===(null===(t=f.selectedData)||void 0===t?void 0:t.id)}),classNamePrefix:"select"})})}}}]);
//# sourceMappingURL=40.a8c7d499.chunk.js.map