(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[177,81],{1589:function(t,n,e){"use strict";e.r(n);var a=e(9),o=e(15),r=e(7),c=e.n(r),i=e(2),l=(e(1365),e(33)),u=e(578),s=e(302),d=e(13),p=e(680),b=e(483),f=e(104),m=e(267),v=e(0),g=Object(i.lazy)((function(){return Promise.all([e.e(0),e.e(62)]).then(e.bind(null,834))})),h=Object(i.lazy)((function(){return Promise.all([e.e(0),e.e(72)]).then(e.bind(null,835))})),y=Object(i.lazy)((function(){return Promise.all([e.e(0),e.e(71)]).then(e.bind(null,820))})),j=Object(i.lazy)((function(){return Promise.all([e.e(0),e.e(63)]).then(e.bind(null,836))})),x=function(t){t.loading;var n,e,a,r=Object(s.a)().layout,c=Object(p.b)(r),i=function(){var t=Object(d.q)();return t?Object(d.m)(t.role_name):"/login"},x=function(){return window.location.href="/website/naxos/saba.html",Object(v.jsx)(v.Fragment,{})},O=Object(l.i)([{path:"/",index:!0,element:Object(v.jsx)(l.a,{replace:!0,to:i()})},{path:"/login",element:Object(v.jsx)(u.a,{}),children:[{path:"/login",element:Object(v.jsxs)(b.b,{clientId:"1096092734184-n0tcl5abejf0s0r2t4fmoi3qf4fhen76.apps.googleusercontent.com",children:[Object(v.jsx)(y,{})," "]})}]},{path:"/error",element:Object(v.jsx)(u.a,{}),children:[{path:"/error",element:Object(v.jsx)(g,{})},{path:"/error/403",element:Object(v.jsx)(j,{})}]},{path:"/public",element:Object(v.jsx)(x,{})},{path:"*",element:Object(v.jsx)(u.a,{}),children:[{path:"*",element:Object(v.jsx)(f.a,{})}]}].concat(Object(o.a)(c))),w=Object(l.i)([{path:"/",index:!0,element:Object(v.jsx)(l.a,{replace:!0,to:i()})},{path:"/login",element:Object(v.jsx)(u.a,{}),children:[{path:"/login",element:Object(v.jsxs)(b.b,{clientId:"1096092734184-n0tcl5abejf0s0r2t4fmoi3qf4fhen76.apps.googleusercontent.com",children:[Object(v.jsx)(y,{})," "]})}]},{path:"/auth/not-auth",element:Object(v.jsx)(u.a,{}),children:[{path:"/auth/not-auth",element:Object(v.jsx)(j,{})}]},{path:"/error",element:Object(v.jsx)(u.a,{}),children:[{path:"/error",element:Object(v.jsx)(h,{})},{path:"/error/403",element:Object(v.jsx)(j,{})}]},{path:"/public",element:Object(v.jsx)(x,{})},{path:"*",element:Object(v.jsx)(u.a,{}),children:[{path:"*",element:Object(v.jsx)(f.a,{})}]}].concat(Object(o.a)(c)));return(null===(n=m.a.getState())||void 0===n||null===(e=n.my_menu)||void 0===e||null===(a=e.dataMyMenu)||void 0===a?void 0:a.length)>0?O:w},O=e(16),w=e(233),k=e(117);function _(t){t=t.replace("#","");var n=parseInt(t.substring(0,2),16),e=parseInt(t.substring(2,4),16),a=parseInt(t.substring(4,6),16);return"".concat(n,", ").concat(e,", ").concat(a)}function U(t,n,e){if(/^#([0-9a-f]{3}){1,2}$/i.test(t)){var a=function(t){var n=parseInt(t,16);return[n>>16&255,n>>8&255,255&n]}(t=t.substring(1));t="rgb(".concat(a.join(", "),")")}var o=t.match(/\d+/g),r=parseInt(o[0]),c=parseInt(o[1]),i=parseInt(o[2]);return r=Math.floor(r*(100-n)/100),c=Math.floor(c*(100-n)/100),i=Math.floor(i*(100-n)/100),e?"".concat(r,", ").concat(c,", ").concat(i):"rgb(".concat(r,", ").concat(c,", ").concat(i,")")}var I=5,S=10,T=20,D=function(t){console.log("replace root style begin...");var n=document.documentElement.style;n.setProperty("--bs-primary-rgb","".concat(t)),n.setProperty("--primary-color","".concat(t)),console.log("replace root style end..."),console.log("replace head style begin...");!function(t){t=t.replace("#","");var n=parseInt(t.substring(0,2),16),e=parseInt(t.substring(2,4),16),a=parseInt(t.substring(4,6),16);"rgb(".concat(n,", ").concat(e,", ").concat(a,")")}(t);var e=_(t),a=document.createElement("style");a.textContent="\n  :root { \n    --primary-color: ".concat(t," !important;\n    --bs-primary-rgb: ").concat(t," !important;\n  }\n\n  /* BTN-PRIMARY */\n  .btn-primary {\n    border-color: ").concat(t," !important;\n    background-color: ").concat(t," !important;\n  }\n  .btn-primary:focus,\n  .btn-primary:active,\n  .btn-primary.active {\n    background-color: ").concat(U(e,I)," !important;\n  }\n  .btn-primary:hover:not(.disabled):not(:disabled) {\n    box-shadow: 0 8px 25px -8px rgba(").concat(e,", 1);\n  }   \n\n  /* BTN-GRADIENT */\n  .btn-gradient-primary {\n    background-image: linear-gradient(47deg, ").concat(t,", ").concat(U(e,S),");\n  }\n  .btn-gradient-primary:focus,.btn-gradient-primary:active,.btn-gradient-primary.active {\n    background-image: linear-gradient(47deg, ").concat(U(e,S),", ").concat(t,") !important;\n  }\n  .dark-layout.btn-gradient-primary {\n    background-image: linear-gradient(47deg, ").concat(U(e,S),", ").concat(t,");\n  }\n\n  /* BTN-OUTLINE */\n  .btn-outline-primary {\n    border: 1px solid ").concat(t," !important;\n    color: ").concat(t,";\n  }\n  .btn-outline-primary:hover:not(.disabled):not(:disabled) {\n    background-color: rgba(").concat(e,", 0.04) !important;\n    color: ").concat(t,";\n  }\n  .btn-outline-primary:not(:disabled):not(.disabled):focus {\n    background-color: rgba(").concat(e,", 0.2) !important;\n    color: ").concat(t,";\n  }\n  .btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .btn-outline-primary:not(:disabled):not(.disabled):focus {\n      background-color: rgba(").concat(e,", 0.2) !important;\n      color: ").concat(t,";\n  }\n\n  /* BTN-FLAT */\n  .btn-flat-primary {\n    color: ").concat(t,";\n  }\n  .btn-flat-primary:hover {\n    color: ").concat(t,";\n  }\n  .btn-flat-primary:hover:not(.disabled):not(:disabled) {\n    background-color: rgba(").concat(e,", 0.12);\n  }\n  .btn-flat-primary:active,\n  .btn-flat-primary.active,\n  .btn-flat-primary:focus {\n    background-color: rgba(").concat(e,", 0.2);\n    color: ").concat(t,";\n  }\n\n  /* BTN-RELIEF */\n  .btn-relief-primary {\n    background-color: ").concat(t,";\n  }\n  \n  .btn-relief-primary:active,\n  .btn-relief-primary.active,\n  .btn-relief-primary:focus {\n    background-color: ").concat(U(e,I)," !important;\n  }\n\n  .btn-relief-primary:hover:not(.disabled):not(:disabled) {\n    background-color: ").concat(t,";\n  }\n\n  /* PAGINATION */\n  .page-item.active .page-link {\n    background-color: ").concat(t,";\n}\n\n  /* MENU */\n  .vertical-layout .main-menu .navigation a.active {\n      background: linear-gradient(118deg, ").concat(t,", rgba(").concat(e,", 0.7));\n      box-shadow: 0 0 10px 1px rgba(").concat(e,", 0.7);\n  }\n  .main-menu.menu-dark .navigation > li ul .active {\n    background: linear-gradient(118deg, ").concat(t,", rgba(").concat(e,", 0.7));\n    box-shadow: 0 0 10px 1px rgba(").concat(e,", 0.7);\n  }\n\n  /* COMMON */\n  a {\n    color: ").concat(t,";\n  }\n\n  .nav-link {\n    color: ").concat(t,";\n  }\n\n  .text-primary {\n    color: rgba(").concat(e,", 1) !important;\n  }\n\n  .bg-primary {\n    background-color: rgba(").concat(e,", 1) !important;\n  }\n\n  .bg-light-primary:not(.avatar) {\n    background: rgba(").concat(U(t,T,!0),", 0.12) !important;\n    color: ").concat(t," !important;\n}\n  \n  .customizer .customizer-toggle {\n    background: ").concat(t,";\n  }\n\n  .dropdown.show.dropdown-item.active:hover {\n    color: ").concat(t,";\n  }\n\n  .dropdown-item.active, .dropdown-item:active {\n    background-color: ").concat(t,";\n}\n\n  .nav-link:after {\n    background: linear-gradient(30deg, rgba(").concat(t,", 1), rgba(").concat(t,", 0.5)) !important;\n  }\n  .nav-link.active {\n    color: ").concat(t,";\n  }\n  .avatar.bg-light-primary {\n    color: ").concat(t," !important;\n  }\n  .form-check-input:checked {\n    background-color: ").concat(t,";\n    border-color: ").concat(t,";\n  }\n  .alert-primary {\n    background: rgba(").concat(e,", 0.12) !important;\n    color: ").concat(t," !important;\n  }\n  .nav-tabs .nav-link.active {\n    position: relative;\n    color: ").concat(t,";\n  }\n  .nav-tabs .nav-link:after {\n    background: linear-gradient(30deg,").concat(t,",rgba(").concat(e,",.5))!important;\n  }\n  .dark-layout .nav-tabs .nav-item .nav-link.active, .dark-layout .nav-pills .nav-item .nav-link.active, .dark-layout .nav-tabs.nav-justified .nav-item .nav-link.active {\n    color: ").concat(t,";\n  }\n\n  .fc .fc-toolbar .fc-button-group .fc-button-primary:not(.fc-prev-button):not(.fc-next-button) {\n    border-color: ").concat(t," !important;\n    color: ").concat(t," !important;\n  }\n  .fc .fc-toolbar .fc-button-group .fc-button-primary:not(.fc-prev-button):not(.fc-next-button).fc-button-active, .fc .fc-toolbar .fc-button-group .fc-button-primary:not(.fc-prev-button):not(.fc-next-button):hover {\n    background-color: rgba(").concat(e,", 0.2) !important;\n    border-color: ").concat(t," !important;\n    color: ").concat(t," !important;\n  }\n\n  .select__menu .select__menu-list .select__option--is-focused,\n  .react-select__menu .react-select__menu-list .react-select__option--is-focused {\n    background-color: rgba(").concat(e,", 0.12) !important;\n    color: ").concat(t," !important;\n  }\n\n  .select__menu .select__menu-list .select__option--is-selected,\n  .react-select__menu .react-select__menu-list .react-select__option--is-selected {\n    background-color: ").concat(t," !important;\n    color: #fff !important;\n  }\n"),document.head.appendChild(a),console.log("replace head style end...")},C=e(17),A=e(764),M=e(43),E=e.n(M),N=e(183),L=e(1366),B=e(480),P=e(44),R=e(101),q=P.a.ssoAxiosInterceptor,z=Object.keys(L).filter((function(t){return"fas"!==t&&"prefix"!==t})).map((function(t){return L[t]}));N.b.add.apply(N.b,Object(o.a)(z));n.default=function(){var t=Object(O.b)(),n=Object(i.useRef)(!1),e=Object(l.f)();function o(){return r.apply(this,arguments)}function r(){return r=Object(a.a)(c.a.mark((function t(){var n,e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=JSON.parse(null!==(n=sessionStorage.getItem("serversList"))&&void 0!==n?n:"[]"),t.next=3,Promise.all(null===e||void 0===e?void 0:e.map(function(){var t=Object(a.a)(c.a.mark((function t(n){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(n,{method:"HEAD"});case 3:return e=t.sent,t.abrupt("return",e.ok);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}()));case 3:case"end":return t.stop()}}),t)}))),r.apply(this,arguments)}Object(i.useEffect)((function(){if(null!==Object(d.x)()&&"/error"!==window.location.pathname&&"/public"!==window.location.pathname){var t=null,n=function(){var n=new Date;if(document.hidden)localStorage.setItem("inactive",Date.parse(n)/1e3),clearInterval(t);else{var e=localStorage.getItem("inactive"),a=parseInt(e,10),r=new Date(1e3*a),c=Math.abs(n.getTime()-r.getTime())/1e3;c>=15?(console.log("Fetching data after ".concat(c," seconds of inactivity")),m.a.dispatch(Object(k.e)({unread_count:1})).then((function(t){if(null!==t&&void 0!==t&&t.payload){var n,e,a=null!==(n=null===t||void 0===t||null===(e=t.payload[0])||void 0===e?void 0:e.count_unread)&&void 0!==n?n:0;if(a){var r=a>0&&a<=20?"(".concat(a,")"):"(20+)";document.title="".concat(r," ").concat(document.title.replaceAll(r,"")),o()}}}))):t=setInterval((function(){var e=Math.abs(n.getTime()-r.getTime())/1e3;e>=15&&(console.log("Fetching data after ".concat(e," seconds of inactivity")),m.a.dispatch(Object(k.e)({unread_count:1})).then((function(t){if(null!==t&&void 0!==t&&t.payload){var n,e,a=null!==(n=null===t||void 0===t||null===(e=t.payload[0])||void 0===e?void 0:e.count_unread)&&void 0!==n?n:0;if(a){var r=a>0&&a<=20?"(".concat(a,")"):"(20+)";document.title="".concat(r," ").concat(document.title.replaceAll(r,""))}o()}})),clearInterval(t))}),1e3)}};return document.addEventListener("visibilitychange",n),function(){clearInterval(t),document.removeEventListener("visibilitychange",n)}}}),[]);var u=function(){var n=Object(a.a)(c.a.mark((function n(){var e,a,o,r,i,l,u,s,p,b,f,m,v,g,h,y,j,x,O,w;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null===(e=Object(d.q)())||void 0===e||!e.isDeveloper){n.next=21;break}return n.prev=2,o=B.a,r=o.slice(0,4),i=o.slice(4,6),l=o.slice(6,8),u=o.slice(9,11),s=o.slice(11,13),p="".concat(r,"-").concat(i,"-").concat(l,"T").concat(u,":").concat(s,":00.000Z"),b=new Date(p),n.next=13,q({method:"post",url:"/fe_ver"});case 13:f=n.sent,(m=null===f||void 0===f||null===(a=f.data)||void 0===a?void 0:a.data)&&(v=null===m||void 0===m?void 0:m.date,g=null===v||void 0===v?void 0:v.replace(/:\d{2}Z$/,":00Z"),h=new Date(g),y=new Date(h.getTime()+252e5),j=y.toISOString(),x="".concat(j.slice(0,10).replace(/-/g,""),"-").concat(j.slice(11,16).replace(":","")),O=new Date(j),(w=function(){return(O-b)/1e3/60>5}())&&t(Object(R.b)({state:w,lastVer:x,currentVer:o}))),n.next=21;break;case 18:n.prev=18,n.t0=n.catch(2),console.error(n.t0);case 21:case"end":return n.stop()}}),n,null,[[2,18]])})));return function(){return n.apply(this,arguments)}}();return Object(i.useEffect)((function(){return n.current||(navigator.onLine?"/public"!==window.location.pathname&&t(Object(w.b)({})).then((function(t){var n;if("rejected"===(null===t||void 0===t||null===(n=t.meta)||void 0===n?void 0:n.requestStatus))console.error("Not Registered"),E.a.fire({icon:"error",title:"Connection Failed!",text:"There is a problem connecting to the server or this app is not yet registered with Saba Official.",confirmButtonText:"Refresh",customClass:{confirmButton:"btn btn-primary"}}).then((function(t){t.isConfirmed&&location.reload()}));else{var a,o,r,c,i,l,s,p,b,f,v,g,h,y,j,x,O,w=null===(a=t.payload)||void 0===a||null===(o=a.app)||void 0===o?void 0:o.logo;if(null!==w&&void 0!==w&&w.favicon||null!==(r=t.payload)&&void 0!==r&&null!==(c=r.unit)&&void 0!==c&&null!==(i=c.unit_app_attributes)&&void 0!==i&&i.favicon)document.getElementById("favicon").href=null!==(y=null===(j=t.payload)||void 0===j||null===(x=j.unit)||void 0===x||null===(O=x.unit_app_attributes)||void 0===O?void 0:O.favicon)&&void 0!==y?y:w.favicon;var U,I,S,T,M,N,L,B=null!==(l=null===(s=t.payload)||void 0===s||null===(p=s.unit)||void 0===p||null===(b=p.unit_app_attributes)||void 0===b||null===(f=b.layout)||void 0===f?void 0:f.primaryColor)&&void 0!==l?l:null===(v=t.payload)||void 0===v||null===(g=v.app)||void 0===g||null===(h=g.setting)||void 0===h?void 0:h.primaryColor;if(B&&(D(B),setTimeout((function(){!function(t){console.log("replace head style late begin...");var n=_(t),e=document.createElement("style");e.textContent="\n      .fc .fc-toolbar .fc-button-group .fc-button-primary:not(.fc-prev-button):not(.fc-next-button).fc-button-active, .fc .fc-toolbar .fc-button-group .fc-button-primary:not(.fc-prev-button):not(.fc-next-button):hover {\n        background-color: rgba(".concat(n,", 0.2) !important;\n        border-color: ").concat(t," !important;\n        color: ").concat(t," !important;\n      }\n    "),document.head.appendChild(e),console.log("replace head style late end...")}(B)}),500)),"/error"!==window.location.pathname)if(null!==Object(d.x)())m.a.dispatch(Object(C.getAppMenu)({})).then((function(t){var n;"rejected"!==(null===t||void 0===t||null===(n=t.meta)||void 0===n?void 0:n.requestStatus)?(m.a.dispatch(Object(A.getUnits)({})),setTimeout((function(){m.a.dispatch(Object(k.e)({unread_count:1})).then((function(t){if(null!==t&&void 0!==t&&t.payload){var n,e,a=null!==(n=null===t||void 0===t||null===(e=t.payload[0])||void 0===e?void 0:e.count_unread)&&void 0!==n?n:0;if(a){var o=a>0&&a<=20?"(".concat(a,")"):"(20+)";document.title="".concat(o," ").concat(document.title.replaceAll(o,""))}}}))}),2e3),setTimeout((function(){u()}),8e3)):(localStorage.setItem("lastUrl",window.location.href),e("/error"))}));else if("/login"===window.location.pathname&&-1===(null===(U=window.location.pathname)||void 0===U?void 0:U.indexOf("/public"))||"/reset-password"===window.location.pathname||"/forgot-password"===window.location.pathname||"/register"===window.location.pathname)"/reset-password"===window.location.pathname?e(window.location.pathname+window.location.search):"/forgot-password"===window.location.pathname?e("/forgot-password"):"/register"===window.location.pathname&&(null!==(I=t.payload)&&void 0!==I&&null!==(S=I.app)&&void 0!==S&&null!==(T=S.setting)&&void 0!==T&&T.enable_registration||null!==(M=t.payload)&&void 0!==M&&null!==(N=M.unit)&&void 0!==N&&null!==(L=N.unit_app_attributes)&&void 0!==L&&L.enable_registration)?e("/register"):e("/login");else e("/login")}})):(console.error("Offline"),E.a.fire({icon:"error",title:"You are not connected to internet",text:"Please check your connection to the internet.",confirmButtonText:"Refresh",customClass:{confirmButton:"btn btn-primary"}}).then((function(t){t.isConfirmed&&location.reload()})))),function(){n.current=!0}}),[]),Object(v.jsx)(i.Suspense,{fallback:Object(v.jsx)(f.a,{}),children:Object(v.jsx)(x,{})})}},764:function(t,n,e){"use strict";e.r(n),e.d(n,"setUnitSelectedDropdown",(function(){return d})),e.d(n,"getUnits",(function(){return p})),e.d(n,"getUnit",(function(){return b})),e.d(n,"addUnit",(function(){return f})),e.d(n,"deleteUnit",(function(){return m})),e.d(n,"MyUnitsSlice",(function(){return v}));var a=e(4),o=e(9),r=e(7),c=e.n(r),i=e(18),l=e(44),u=e(13),s={value:"",label:"Select Unit"},d=Object(i.b)("Units/setUnitSelectedDropdown",(function(t){return t})),p=Object(i.b)("Units/getUnits",function(){var t=Object(o.a)(c.a.mark((function t(n,e){var a,o,r,i,s,d;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.rejectWithValue,n.flat_mode=!0,null===Object(u.x)()){t.next=38;break}return t.next=5,JSON.parse(localStorage.getItem("userData")).member_of;case 5:if(t.t1=o=t.sent,t.t0=null!==t.t1,!t.t0){t.next=9;break}t.t0=void 0!==o;case 9:if(!t.t0){t.next=13;break}t.t2=o,t.next=14;break;case 13:t.t2=[];case 14:if(!((r=t.t2).length>0)){t.next=28;break}if(i=!1,r.some((function(t){return t.children_count>0}))&&(i=!0),!i){t.next=25;break}return t.next=21,l.a.ssoAxiosInterceptor.get("/api/unit",{params:n});case 21:return s=t.sent,t.abrupt("return",{params:n,data:s.data.data,total:s.data.total});case 25:return t.abrupt("return",{data:r});case 26:t.next=38;break;case 28:return t.prev=28,t.next=31,l.a.ssoAxiosInterceptor.get("/api/unit",{params:n});case 31:return d=t.sent,t.abrupt("return",{params:n,data:d.data.data,total:d.data.total});case 35:return t.prev=35,t.t3=t.catch(28),t.abrupt("return",a(t.t3.response.data));case 38:case"end":return t.stop()}}),t,null,[[28,35]])})));return function(n,e){return t.apply(this,arguments)}}()),b=Object(i.b)("Units/getUnit",function(){var t=Object(o.a)(c.a.mark((function t(n){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get("/api/unit/".concat(n));case 2:return e=t.sent,t.abrupt("return",e.data.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()),f=Object(i.b)("Units/addUnit",function(){var t=Object(o.a)(c.a.mark((function t(n,e){var a,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.dispatch,o=e.getState,t.next=3,axios.post("/api/unit",n);case 3:return t.next=5,a(p(o().units.params));case 5:return t.next=7,a(getAllUnit());case 7:return t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()),m=Object(i.b)("Units/deleteUnit",function(){var t=Object(o.a)(c.a.mark((function t(n,e){var a,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.dispatch,o=e.getState,t.next=3,axios.delete("/apps/unit",{id:n});case 3:return t.next=5,a(p(o().units.params));case 5:return t.next=7,a(getAllUnit());case 7:return t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()),v=Object(i.c)({name:"Units",initialState:{crudTitle:"Unit",statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,dataDropdown:[],selectedUnit:{},selectedUnitMulti:[]},reducers:{setUnitSelected:function(t,n){return console.log("setUnitSelected"),Object(a.a)(Object(a.a)({},t),{},{selectedUnit:n.payload})},resetAll:function(t){t.data=[],t.dataDropdown=[],t.total=1,t.selectedUnit=null,t.selectedUnitMulti=null}},extraReducers:function(t){t.addCase(d.fulfilled,(function(t,n){return console.log("setUnitSelectedDropdown"),Object(a.a)(Object(a.a)({},t),{},{selectedUnit:n.payload})})).addCase(p.pending,(function(t){t.status="loading",t.isLoading=!0})).addCase(p.fulfilled,(function(t,n){var e,a;(t.status="succeeded",t.isLoading=!1,null!==(e=n.payload)&&void 0!==e&&e.data)&&(t.data=n.payload.data,t.dataDropdown=n.payload.data.map((function(t){return{value:t.id,label:t.name}})),t.dataDropdown.unshift(s),null!==(a=n.payload)&&void 0!==a&&a.total&&(t.total=n.payload.total),t.selectedUnit=t.dataDropdown[0])})).addCase(p.rejected,(function(t,n){t.status="failed",t.isLoading=!1,t.error=n.error.message})).addCase(b.fulfilled,(function(t,n){t.selectedUnit=n.payload}))}});n.default=v.reducer}}]);
//# sourceMappingURL=177.6188a6ab.chunk.js.map