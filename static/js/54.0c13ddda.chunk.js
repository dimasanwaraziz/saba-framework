(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[54,149],{1207:function(e,t,o){},380:function(e,t,o){"use strict";o.r(t);var a=o(6),l=o(2),i=o(16),d=o(81),n=o(775),u=o(764),r=o(5),s=o(190),c=o(1202),f=(o(1207),o(262)),m=o(365),p=o(87),b=o(0);t.default=function(e){var t,o,j=e.filtersCustomAdd,M=void 0===j?{}:j,g=e.lookupMode,h=void 0!==g&&g,k=e.lookupMode_fieldName,v=void 0===k?"":k,O=e.lookupMode_dropdown,_=void 0!==O&&O,x=e.lookupMode_isMulti,w=void 0!==x&&x,N=e.lookupMode_onChange,S=e.lookupMode_defaultValue,y=e.lookupMode_isM2MDefValFromGrid,D=e.lookupMode_defaultFilter,C=Object(d.a)().t,V=Object(i.b)(),A=Object(i.c)((function(e){return e[m.storeName]})),F=Object(l.useState)(""),G=Object(a.a)(F,2);G[0],G[1];Object(l.useEffect)((function(){var e;m.getApiSummaryData&&(0===(null===(e=A.dataSummary)||void 0===e?void 0:e.length)||!A.isLoadingSummary&&m.getAlwaysGrid)&&V(Object(m.getSummaryData)({}))}),[V,null===(t=A.dataSummary)||void 0===t?void 0:t.length]);var L=["primary","success","warning","danger","info","secondary"];return _?Object(b.jsx)(u.default,{lookupMode_fieldName:v,lookupMode_onChange:N,lookupMode_defaultValue:S,lookupMode_isMulti:w,lookupMode_isM2MDefValFromGrid:y}):Object(b.jsxs)(l.Fragment,{children:[Object(b.jsx)("div",{className:"content-header row",children:!h&&Object(b.jsx)(f.a,{title:C(m.pageTitle),data:[{title:C("App Setting")},{title:C(m.pageTitle)}]})}),Object(b.jsxs)("div",{className:"app-user-list",children:[m.getApiSummaryData&&!h&&Object(b.jsx)(r.U,{children:null===(o=A.dataSummary)||void 0===o?void 0:o.map((function(e,t){var o;return Object(b.jsx)(r.t,{children:Object(b.jsx)(s.a,{color:L[t],statTitle:"".concat(C(e.title)),icon:e.icon?Object(b.jsx)(c.a,{baseClassName:"material-icons-outlined",fontSize:"20",children:e.icon}):Object(b.jsx)(c.a,{baseClassName:"material-icons-outlined",fontSize:"20",children:"lightbulb"}),renderStats:A.isLoadingSummary?Object(b.jsx)(p.a,{sx:{bgcolor:"#eef2f8"},animation:"wave",height:25,width:40,className:"fw-bolder mb-75"}):Object(b.jsx)("h3",{className:"fw-bolder mb-75",children:null!==(o=e.count_format)&&void 0!==o?o:e.count})})})}))}),Object(b.jsx)(n.default,{filtersCustomAdd:M,lookupMode:h,lookupMode_fieldName:v,lookupMode_defaultValue:S,lookupMode_onChange:N,lookupMode_isMulti:w,lookupMode_isM2MDefValFromGrid:y,lookupMode_defaultFilter:D})]})]})}},764:function(e,t,o){"use strict";o.r(t);var a=o(2),l=o(16),i=o(81),d=(o(1207),o(13)),n=o(11),u=o.n(n),r=o(82),s=o(365),c=o(0);t.default=function(e){var t,o=e.lookupMode_fieldName,n=void 0===o?"":o,f=e.lookupMode_isMulti,m=void 0!==f&&f,p=e.lookupMode_onChange,b=e.lookupMode_defaultValue,j=(Object(i.a)().t,Object(l.b)()),M=Object(l.c)((function(e){return e[s.storeName]}));return Object(a.useEffect)((function(){(0===M.data.length||!M.isLoading&&s.getAlwaysGrid)&&j(Object(s.getDataList)({}))}),[j,M.data.length]),Object(c.jsx)(a.Fragment,{children:Object(c.jsx)(r.a,{theme:d.H,defaultValue:m?b:M.dataDropdown.filter((function(e){return e.value===b})),isMulti:m,onChange:function(e){return p(e,n)},options:M.dataDropdown,className:u()("react-select",{"is-invalid":null===(null===(t=M.selectedData)||void 0===t?void 0:t.id)}),classNamePrefix:"select"})})}}}]);
//# sourceMappingURL=54.0c13ddda.chunk.js.map