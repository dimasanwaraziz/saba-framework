(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[138],{1333:function(e,a,t){"use strict";var i=t(156);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t(157)),l=t(0),c=(0,n.default)((0,l.jsx)("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.22 0 .41.1.55.25.12.13.2.31.2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5.14-.15.33-.25.55-.25zM19 19H5V5h14v14zM12 6c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-6 6.47V18h12v-1.53c0-2.5-3.97-3.58-6-3.58s-6 1.07-6 3.58zM8.31 16c.69-.56 2.38-1.12 3.69-1.12s3.01.56 3.69 1.12H8.31z"}),"AssignmentIndOutlined");a.default=c},800:function(e,a,t){"use strict";t.r(a);var i=t(4),n=t(10),l=t(9),c=t(6),s=t(7),r=t.n(s),d=t(36),o=t(64),j=t(148),m=t(47),u=t(14),b=(t(146),t(102),t(2)),g=t(185),v=t(556),O=t(582),h=t(538),p=t(82),x=t(65),f=t.n(x),y=t(16),N=t(33),D=t(5),T=t(1333),S=t.n(T),_=t(490),k=t.n(_),w=t(34),M=t(57),R=t(77),I=t(13),z=t(25),A=t(37),C=t(79),E=t(99),L=t(44),P=t(0),F=(L.a.ssoAxiosInterceptor,L.a.hrAxiosInterceptor),H={pagination:{clickable:!0},autoplay:{delay:5500,disableOnInteraction:!1},slideToClickedSlide:!0};a.default=function(){var e=Object(p.a)().t,a=Object(y.c)((function(e){return e.dynamicStore})),t=Object(y.c)((function(e){return e.dynamic_temp_state})),s=Object(y.b)(),x=Object(N.f)(),T="TrainingEmployee_assignForMe",_="TrainingEmployee/assignment",L=Object(b.useContext)(w.a).colors,V=Object(b.useState)(!0),q=Object(c.a)(V,2),U=(q[0],q[1],Object(b.useState)(!1)),J=Object(c.a)(U,2),W=J[0],Y=J[1],G=Object(b.useState)("Please Wait"),B=Object(c.a)(G,2),K=B[0],Q=B[1],X=Object(b.useState)(!1),Z=Object(c.a)(X,2),$=Z[0],ee=Z[1],ae=Object(b.useState)([]),te=Object(c.a)(ae,2),ie=te[0],ne=te[1],le=Object(b.useState)(null),ce=Object(c.a)(le,2),se=ce[0],re=ce[1],de=Object(b.useState)(!1),oe=Object(c.a)(de,2),je=oe[0],me=oe[1],ue=function(){me(!je)},be=function(e){var a,t,i,n,l="";if(null!==e&&void 0!==e&&null!==(a=e.payload)&&void 0!==a&&null!==(t=a.error)&&void 0!==t&&t.errors){var c,s,r=null===e||void 0===e||null===(c=e.payload)||void 0===c||null===(s=c.error)||void 0===s?void 0:s.errors;for(var d in null===e||void 0===e||null===(o=e.payload)||void 0===o||null===(j=o.error)||void 0===j?void 0:j.errors){var o,j;l="".concat(l," - ").concat(r[d],"\n")}}return z.b.error("".concat(null===(i=e.payload)||void 0===i||null===(n=i.error)||void 0===n?void 0:n.message," \n \n ").concat(l),{style:{padding:"16px",color:L.danger.main,border:"1px solid ".concat(L.danger.main)},iconTheme:{primary:L.danger.main}})},ge=function(){var e=Object(l.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ue(),a="Id_Manager",t.data[a]||$){e.next=9;break}return ee(!0),"DepartmentManager",e.next=7,F.get("DepartmentManager").then((function(e){var t,i=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data;ne(i),ee(!1),s(Object(R.b)(Object(n.a)({},a,i)))}));case 7:e.next=12;break;case 9:ee(!0),ne(t.data[a]),ee(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(b.useEffect)((function(){var e,t,i;a.pageData[T]&&(0!==(null===(e=a.pageData[T])||void 0===e||null===(t=e.data)||void 0===t?void 0:t.length)||null!==(i=a.pageData[T])&&void 0!==i&&i.isLoading)||s(Object(u.i)({storeName:T,endpointName:_,baseUrl:"hr",type:"for_me",Id_AttendingState:0}))}),[]);var ve,Oe,he,pe,xe,fe,ye,Ne,De,Te,Se=function(e){var a=A.o.Option,t=A.o.SingleValue;return{components:{SingleValue:function(e){return Object(P.jsxs)(t,Object(i.a)(Object(i.a)({},e),{},{children:[Object(P.jsx)("img",{src:e.data.img,style:{height:"30px",width:"30px",borderRadius:"10%",marginRight:"10px"}}),e.data.label," ",Object(P.jsxs)("small",{children:["(",e.data.position,")"]})]}))},Option:function(e){return Object(P.jsxs)(a,Object(i.a)(Object(i.a)({},e),{},{children:[Object(P.jsx)("img",{src:e.data.img,style:{height:"30px",width:"30px",borderRadius:"10%",marginRight:"10px"}}),e.data.label," ",Object(P.jsxs)("small",{children:["(",e.data.position,")"]})]}))}}}},_e={lastDay:"[Yesterday]",sameDay:"[Today]",nextDay:"[Tomorrow]",lastWeek:"[last] dddd",nextWeek:"dddd",sameElse:"L"},ke=["primary","success","danger","warning","info","secondary"],we=function(e){return e.toUpperCase()};return null!==(ve=a.pageData[T])&&void 0!==ve&&ve.isLoading?Object(P.jsx)(D.t,{lg:"12",xs:"12",children:Object(P.jsxs)(D.l,{style:{minHeight:"200px"},children:[Object(P.jsx)(D.o,{children:Object(P.jsxs)("div",{className:"d-flex align-items-center",children:[Object(P.jsx)(k.a,{className:"user-timeline-title-icon me-1"}),Object(P.jsx)(D.s,{tag:"h4",children:e("Recommended Training")})]})}),Object(P.jsx)(o.a,{blocking:!0,loader:Object(P.jsx)(m.b,{}),children:Object(P.jsx)(D.m,{})})]})}):(null===(Oe=a.pageData[T])||void 0===Oe||null===(he=Oe.data)||void 0===he?void 0:he.length)>0?Object(P.jsx)(D.t,{lg:"12",xs:"12",children:Object(P.jsxs)(D.l,{children:[Object(P.jsx)(D.o,{children:Object(P.jsxs)("div",{className:"d-flex align-items-center",children:[Object(P.jsx)(k.a,{className:"user-timeline-title-icon me-1"}),Object(P.jsx)(D.s,{tag:"h4",children:null!==(pe=a.pageData[T])&&void 0!==pe&&null!==(xe=pe.data[0])&&void 0!==xe&&xe.isManager?e("Recommended Training For Your Staff"):e("Recommended Training For You")}),(null===(fe=a.pageData[T])||void 0===fe||null===(ye=fe.data)||void 0===ye?void 0:ye.length)>1&&Object(P.jsx)(D.f,{className:"ms-1",tag:"div",color:"info",pill:!0,children:null===(Ne=a.pageData[T])||void 0===Ne||null===(De=Ne.data)||void 0===De?void 0:De.length})]})}),Object(P.jsx)(D.m,{className:"px-0 pb-0",children:Object(P.jsx)(E.a,Object(i.a)(Object(i.a)({},H),{},{children:null===(Te=a.pageData[T])||void 0===Te?void 0:Te.data.map((function(a){var t,n,l,c,r,o,m,b,p,y,N,k;return Object(P.jsx)(E.b,{children:Object(P.jsxs)(D.l,{className:"card-developer-meetup cursor-pointer",children:[Object(P.jsx)("div",{className:"meetup-img-wrapper rounded-top text-center",children:Object(P.jsx)("img",{src:null!==a&&void 0!==a&&null!==(t=a.TrainingData)&&void 0!==t&&t.Image?a.TrainingData.Image:j.a,height:"170"})}),Object(P.jsxs)(D.m,{children:[Object(P.jsxs)("div",{className:"meetup-header d-flex align-items-center",children:[Object(P.jsxs)("div",{className:"meetup-day",children:[Object(P.jsx)("h6",{className:"mb-0",children:Object(P.jsx)(f.a,{filter:we,format:"ddd",children:null===a||void 0===a||null===(n=a.TrainingData)||void 0===n?void 0:n.StartDate})}),Object(P.jsx)("h3",{className:"mb-0",children:Object(P.jsx)(f.a,{format:"DD",children:null===a||void 0===a||null===(l=a.TrainingData)||void 0===l?void 0:l.StartDate})})]}),Object(P.jsxs)("div",{className:"my-auto text-truncate",children:[Object(P.jsx)(D.s,{tag:"h4",className:"mb-25",children:null===a||void 0===a||null===(c=a.TrainingData)||void 0===c?void 0:c.Name}),Object(P.jsx)(D.r,{className:"mb-0",children:null===a||void 0===a||null===(r=a.TrainingData)||void 0===r?void 0:r.Description})]})]}),Object(P.jsxs)("div",{className:"d-flex",children:[Object(P.jsx)(d.a,{color:"light-primary",className:"rounded me-1",icon:Object(P.jsx)(g.a,{size:18})}),Object(P.jsxs)("div",{children:[Object(P.jsx)("h6",{className:"mb-0",children:Object(P.jsx)(f.a,{calendar:_e,children:null===a||void 0===a||null===(o=a.TrainingData)||void 0===o?void 0:o.StartDate})}),Object(P.jsx)("small",{children:Object(P.jsx)(f.a,{format:"[Start at] LT",children:null===a||void 0===a||null===(m=a.TrainingData)||void 0===m?void 0:m.StartDate})})]})]}),null!==a&&void 0!==a&&null!==(b=a.TrainingData)&&void 0!==b&&b.IsOnline?Object(P.jsxs)("div",{className:"d-flex mt-2",children:[Object(P.jsx)(d.a,{color:"light-primary",className:"rounded me-1",icon:Object(P.jsx)(O.a,{size:18})}),Object(P.jsxs)("div",{className:"align-items-center align-middle my-auto",children:[Object(P.jsx)("h6",{className:"mb-0",children:e("Online Training")}),(null===a||void 0===a||null===(y=a.TrainingData)||void 0===y?void 0:y.LinkRef)&&Object(P.jsx)("small",{children:null!==a&&void 0!==a&&null!==(N=a.TrainingData)&&void 0!==N&&N.LinkRef?null===a||void 0===a||null===(k=a.TrainingData)||void 0===k?void 0:k.LinkRef:"The link will be sent before the event starts"})]})]}):Object(P.jsxs)("div",{className:"d-flex mt-2",children:[Object(P.jsx)(d.a,{color:"light-primary",className:"rounded me-1",icon:Object(P.jsx)(v.a,{size:18})}),Object(P.jsx)("div",{className:"align-items-center align-middle my-auto",children:Object(P.jsx)("small",{children:null===a||void 0===a||null===(p=a.TrainingData)||void 0===p?void 0:p.Address})})]}),(null===a||void 0===a?void 0:a.FunctionalPosition)&&Object(P.jsxs)("div",{className:"d-flex mt-2",children:[Object(P.jsx)(d.a,{color:"light-primary",className:"rounded me-1",icon:Object(P.jsx)(h.a,{size:18})}),Object(P.jsx)("div",{className:"align-items-center align-middle my-auto",children:a.FunctionalPosition.map((function(e,a){var t;return Object(P.jsx)(D.f,{color:"light-".concat(null!==(t=ke[a])&&void 0!==t?t:"primary"),children:null===e||void 0===e?void 0:e.name},"badge_".concat(a))}))})]}),null!==a&&void 0!==a&&a.isManager?Object(P.jsx)(D.t,{className:"d-grid mt-2",sm:"12",children:Object(P.jsxs)(D.i.Ripple,{onClick:function(e){x("/dyn_pages/hr/training/edit/".concat(a.Id_Training,"/training_employee"))},color:"gradient-primary",children:[Object(P.jsx)(S.a,{size:14}),Object(P.jsx)("span",{className:"align-middle ms-25",children:e("Assign to Staff")})]})}):Object(P.jsxs)(D.t,{className:"d-grid mt-2",sm:"12",children:[Object(P.jsx)(D.i.Ripple,{onClick:ge,color:"gradient-primary",children:e("Follow")}),Object(P.jsxs)(D.G,{isOpen:je,toggle:ue,className:"modal-dialog-centered",children:[Object(P.jsx)(D.J,{toggle:ue,children:e("Manager Approval Required")}),Object(P.jsxs)(D.H,{children:[Object(P.jsx)(D.e,{color:"primary",children:Object(P.jsx)("div",{className:"alert-body",children:e("Please select your manager to approve your participation in this training")})}),Object(P.jsx)(D.t,{className:"mt-1",md:"12",sm:"12",children:Object(P.jsx)(C.a,Object(i.a)(Object(i.a)({},Se()),{},{placeholder:e("Choose Manager"),isLoading:$,theme:I.H,className:"react-select",classNamePrefix:"select",onChange:re,options:ie.map((function(e){return{label:e.Employee_Name,value:e.Id_Employee,img:null===e||void 0===e?void 0:e.Employee_PhotoPath,position:null===e||void 0===e?void 0:e.PositionName}})),isClearable:!1}))})]}),Object(P.jsx)(D.I,{children:W?Object(P.jsxs)(D.i.Ripple,{color:"primary",children:[Object(P.jsx)(D.V,{color:"white",size:"sm",type:"grow"}),Object(P.jsx)("span",{className:"ms-50",children:K})]}):Object(P.jsx)(D.i,{disabled:!se,color:"primary",onClick:function(t){var i;t.preventDefault(),i={id:null===a||void 0===a?void 0:a.Id_Training,manager_id:se.value},Y(!0),Q("Sending Training Request to Manager"),i.storeName=T,i.endpointName=_,i.baseUrl="hr",i.callback_page=window.location.href,s(Object(u.n)(i)).then((function(a){"fulfilled"===a.meta.requestStatus?s(Object(u.i)({storeName:T,endpointName:_,baseUrl:"hr",type:"for_me",Id_AttendingState:0})).then((function(a){Y(!1),ue(),z.b.success("".concat(e("Successfully Sending Training Request to Manager"),"}"),{style:{padding:"16px",color:L.success.main,border:"1px solid ".concat(L.success.main)},iconTheme:{primary:L.success.main}})})).then((function(e){s(Object(u.i)({storeName:"TrainingEmployee_assignToMe",endpointName:"TrainingEmployee/assignment",baseUrl:"hr",type:"to_me",Id_AttendingState:1})),setTimeout((function(){s(Object(M.getDataList)({}))}),8e3)})):"rejected"===a.meta.requestStatus&&(Y(!1),be(a))})).catch((function(e){Y(!1),be(e)}))},outline:!0,children:e("Apply to Manager")})})]})]})]})]})},"swiper_".concat(a.id))}))}))})]})}):null}}}]);
//# sourceMappingURL=138.5ef079f8.chunk.js.map