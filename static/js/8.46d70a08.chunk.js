(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[8],{1327:function(e,t,n){"use strict";var c=n(6),a=n(2),i=n(5),r=n(78),l=n(85),s=n(13),o=(n(168),n(16)),u=(n(46),n(0));t.a=function(e){var t,n=e.parentChange,d=e.colMode,j=void 0!==d&&d,b=e.colSize,m=void 0===b?6:b,f=e.initialValue,h=void 0===f||f,O=e.colClassName,p=void 0===O?"":O,x=Object(l.a)().t,v=(Object(s.q)(),Object(o.b)()),g=Object(o.c)((function(e){return e.units})),E=Object(a.useState)([]),y=Object(c.a)(E,2),w=y[0],N=y[1],S=Object(a.useState)(h?{value:"",label:"".concat(x("Select")," ").concat(x("Unit"))}:{}),C=Object(c.a)(S,2),V=C[0],R=C[1],P=function(e,t){R(e),"function"===typeof t&&t(e)};return Object(a.useEffect)((function(){var e=h?g.dataDropdown:g.dataDropdown.filter((function(e){return""!==e.value}));N(e),R(h?g.selectedUnit:e[0])}),[v,g.dataDropdown]),(null===(t=g.data)||void 0===t?void 0:t.length)>1?j?Object(u.jsxs)(i.t,{md:"".concat(m),className:p,children:[Object(u.jsx)(i.E,{className:"",for:"plan-select",children:x("Unit")}),Object(u.jsx)(r.a,{theme:s.H,isClearable:!1,className:"react-select",classNamePrefix:"select",options:w,value:V,onChange:function(e){P(e,n)},getOptionLabel:function(e){return e.code?"".concat(e.code," ").concat(e.label):"".concat(e.label)}})]}):Object(u.jsx)(i.l,{children:Object(u.jsx)(i.m,{children:Object(u.jsxs)(i.S,{children:[Object(u.jsx)(i.E,{className:"",for:"plan-select",children:x("Unit")}),Object(u.jsx)(r.a,{theme:s.H,isClearable:!1,className:"react-select",classNamePrefix:"select",options:w,value:V,onChange:function(e){P(e,n)},getOptionLabel:function(e){return e.code?"".concat(e.code," ").concat(e.label):"".concat(e.label)}})]})})}):null}},783:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n(6),i=n(7),r=n.n(i),l=n(2),s=n.n(l),o=n(33),u=n(5),d=n(441),j=n(4),b=n(27),m=n(274),f=n(36),h=n(19),O=n(1257),p=n(53),x=n(62),v=n(584),g=(n(3),n(462));function E(e,t){var n=Object.create(null);return e&&l.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&Object(l.isValidElement)(e)?t(e):e}(e)})),n}function y(e,t,n){return null!=n[t]?n[t]:e.props[t]}function w(e,t,n){var c=E(e.children),a=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var c,a=Object.create(null),i=[];for(var r in e)r in t?i.length&&(a[r]=i,i=[]):i.push(r);var l={};for(var s in t){if(a[s])for(c=0;c<a[s].length;c++){var o=a[s][c];l[a[s][c]]=n(o)}l[s]=n(s)}for(c=0;c<i.length;c++)l[i[c]]=n(i[c]);return l}(t,c);return Object.keys(a).forEach((function(i){var r=a[i];if(Object(l.isValidElement)(r)){var s=i in t,o=i in c,u=t[i],d=Object(l.isValidElement)(u)&&!u.props.in;!o||s&&!d?o||!s||d?o&&s&&Object(l.isValidElement)(u)&&(a[i]=Object(l.cloneElement)(r,{onExited:n.bind(null,r),in:u.props.in,exit:y(r,"exit",e),enter:y(r,"enter",e)})):a[i]=Object(l.cloneElement)(r,{in:!1}):a[i]=Object(l.cloneElement)(r,{onExited:n.bind(null,r),in:!0,exit:y(r,"exit",e),enter:y(r,"enter",e)})}})),a}var N=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},S=function(e){function t(t,n){var c,a=(c=e.call(this,t,n)||this).handleExited.bind(Object(x.a)(c));return c.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},c}Object(v.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,c,a=t.children,i=t.handleExited;return{children:t.firstRender?(n=e,c=i,E(n.children,(function(e){return Object(l.cloneElement)(e,{onExited:c.bind(null,e),in:!0,appear:y(e,"appear",n),enter:y(e,"enter",n),exit:y(e,"exit",n)})}))):w(e,a,i),firstRender:!1}},n.handleExited=function(e,t){var n=E(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=Object(h.a)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,c=Object(p.a)(e,["component","childFactory"]),a=this.state.contextValue,i=N(this.state.children).map(n);return delete c.appear,delete c.enter,delete c.exit,null===t?s.a.createElement(g.a.Provider,{value:a},i):s.a.createElement(g.a.Provider,{value:a},s.a.createElement(t,c,i))},t}(s.a.Component);S.propTypes={},S.defaultProps={component:"div",childFactory:function(e){return e}};var C=S,V=(n(59),n(391),n(130),n(50),n(159),["in","onExited","appear","enter","exit"]),R=function(e){return function(t){t.in,t.onExited,t.appear,t.enter,t.exit;var n=Object(b.a)(t,V);return l.createElement(e,n)}},P=["component","duration","in","onExited"],M=function(e){var t=e.component,n=e.duration,c=void 0===n?1:n,a=e.in;e.onExited;var i=Object(b.a)(e,P),r=Object(l.useRef)(null),s={entering:{opacity:0},entered:{opacity:1,transition:"opacity ".concat(c,"ms")},exiting:{opacity:0},exited:{opacity:0}};return l.createElement(O.a,{mountOnEnter:!0,unmountOnExit:!0,in:a,timeout:c,nodeRef:r},(function(e){var n={style:Object(j.a)({},s[e]),ref:r};return l.createElement(t,Object(h.a)({innerProps:n},i))}))},k=function(e){var t=e.children,n=e.in,c=e.onExited,i=Object(l.useRef)(null),r=Object(l.useState)("auto"),s=Object(a.a)(r,2),o=s[0],u=s[1];Object(l.useEffect)((function(){var e=i.current;if(e){var t=window.requestAnimationFrame((function(){return u(e.getBoundingClientRect().width)}));return function(){return window.cancelAnimationFrame(t)}}}),[]);var d=function(e){switch(e){default:return{width:o};case"exiting":return{width:0,transition:"width ".concat(260,"ms ease-out")};case"exited":return{width:0}}};return l.createElement(O.a,{enter:!1,mountOnEnter:!0,unmountOnExit:!0,in:n,onExited:function(){var e=i.current;e&&(null===c||void 0===c||c(e))},timeout:260,nodeRef:i},(function(e){return l.createElement("div",{ref:i,style:Object(j.a)({overflow:"hidden",whiteSpace:"nowrap"},d(e))},t)}))},_=["in","onExited"],U=function(e){return function(t){var n=t.in,c=t.onExited,a=Object(b.a)(t,_);return l.createElement(k,{in:n,onExited:c},l.createElement(e,Object(h.a)({cropWithEllipsis:n},a)))}},D=function(e){return function(t){return l.createElement(M,Object(h.a)({component:e,duration:t.isMulti?260:1},t))}},z=function(e){return function(t){return l.createElement(M,Object(h.a)({component:e},t))}},A=["component"],F=["children"],B=function(e){var t=e.component,n=Object(b.a)(e,A),c=Y(n);return l.createElement(C,Object(h.a)({component:t},c))},Y=function(e){var t=e.children,n=Object(b.a)(e,F),c=n.isMulti,i=n.hasValue,r=n.innerProps,s=n.selectProps,o=s.components,u=s.controlShouldRenderValue,d=Object(l.useState)(c&&u&&i),m=Object(a.a)(d,2),f=m[0],h=m[1],O=Object(l.useState)(!1),p=Object(a.a)(O,2),x=p[0],v=p[1];Object(l.useEffect)((function(){i&&!f&&h(!0)}),[i,f]),Object(l.useEffect)((function(){x&&!i&&f&&h(!1),v(!1)}),[x,i,f]);var g=function(){return v(!0)},E=Object(j.a)(Object(j.a)({},r),{},{style:Object(j.a)(Object(j.a)({},null===r||void 0===r?void 0:r.style),{},{display:c&&i||f?"flex":"grid"})});return Object(j.a)(Object(j.a)({},n),{},{innerProps:E,children:l.Children.toArray(t).map((function(e){if(c&&l.isValidElement(e)){if(e.type===o.MultiValue)return l.cloneElement(e,{onExited:g});if(e.type===o.Placeholder&&f)return null}return e}))})},I=function(e){return function(t){return t.isMulti?l.createElement(B,Object(h.a)({component:e},t)):l.createElement(C,Object(h.a)({component:e},t))}},L=["Input","MultiValue","Placeholder","SingleValue","ValueContainer"],q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(f.f)({components:e}),n=t.Input,c=t.MultiValue,a=t.Placeholder,i=t.SingleValue,r=t.ValueContainer,l=Object(b.a)(t,L);return Object(j.a)({Input:R(n),MultiValue:U(c),Placeholder:D(a),SingleValue:z(i),ValueContainer:I(r)},l)},H=q(),J=(H.Input,H.MultiValue,H.Placeholder,H.SingleValue,H.ValueContainer,Object(m.a)(q),n(43)),T=n.n(J),Z=n(49),G=n.n(Z),W=n(37),K=(n(1327),n(374)),Q=(n(94),n(115)),X=n.n(Q),$=(n(114),n(85)),ee=n(362),te=(n(755),n(16)),ne=(n(63),n(480),n(34)),ce=n(1350),ae=n(489),ie=n(509),re=n(1609),le=n(0),se={3:180,6:90,8:-90},oe={editor:"light-info",admin:"light-danger",author:"light-warning",maintainer:"light-success",subscriber:"light-primary"},ue={active:"light-success",pending:"light-warning",inactive:"light-secondary"},de=G()(T.a);t.default=function(){var e=Object(l.useState)(!1),t=Object(a.a)(e,2),n=t[0],i=t[1],s=Object(l.useState)([]),j=Object(a.a)(s,2),b=(j[0],j[1],Object($.a)().t),m=Object(o.g)().id,f=Object(te.b)(),h=Object(te.c)((function(e){return e.users})),O=(Object(l.useContext)(ne.a).colors,h.selectedUser),p=Object(l.useState)(null),x=Object(a.a)(p,2),v=x[0],g=x[1],E=Object(l.useState)(!1),y=Object(a.a)(E,2),w=y[0],N=y[1],S=Object(l.useState)({x:0,y:0}),C=Object(a.a)(S,2),V=C[0],R=C[1],P=Object(l.useState)(0),M=Object(a.a)(P,2),k=M[0],_=M[1],U=Object(l.useState)(1),D=Object(a.a)(U,2),z=D[0],A=D[1],F=Object(l.useState)(null),B=Object(a.a)(F,2),Y=(B[0],B[1]),I=Object(l.useRef)(null),L=function(){I.current.click()},q=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,c,a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files[0],e.next=3,J(n);case 3:return c=e.sent,e.next=6,Object(ce.getOrientation)(n);case 6:if(a=e.sent,!(i=se[a])){e.next=12;break}return e.next=11,Object(ae.b)(c,i);case 11:c=e.sent;case 12:g(c),N(!0);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=Object(l.useCallback)((function(e,t){Y(t)}),[]);function J(e){return new Promise((function(t){var n=new FileReader;n.addEventListener("load",(function(){return t(n.result)}),!1),n.readAsDataURL(e)}))}return Object(l.useEffect)((function(){}),[f]),Object(le.jsxs)(l.Fragment,{children:[Object(le.jsx)(u.l,{children:Object(le.jsxs)(u.m,{children:[Object(le.jsx)("div",{className:"user-avatar-section",children:Object(le.jsxs)("div",{className:"d-flex align-items-center flex-column",children:[null!==O&&O.avatar?Object(le.jsx)("img",{height:"110",width:"110",alt:"user-avatar",src:O.avatar,className:"img-fluid rounded mt-3 mb-2"}):Object(le.jsxs)(l.Fragment,{children:[Object(le.jsxs)("div",{style:{marginLeft:"36px"},children:[Object(le.jsx)(W.a,{initials:!0,color:"light-primary",className:"mt-3 mb-2",content:O.name,contentStyles:{borderRadius:0,fontSize:"calc(48px)",width:"100%",height:"100%"},style:{borderRadius:"110px",height:"110px",width:"110px"}}),Object(le.jsx)(u.i.Ripple,{style:{position:"relative",right:"36px",bottom:"-50px"},className:"btn-icon",color:"flat-secondary",onClick:L,children:Object(le.jsx)(d.a,{size:20})})]}),Object(le.jsx)("input",{type:"file",id:"file",ref:I,style:{display:"none"},onChange:q})]}),Object(le.jsx)("div",{className:"d-flex flex-column align-items-center text-center",children:Object(le.jsxs)("div",{className:"user-info",children:[Object(le.jsx)("h4",{children:null!==O?O.name:"Amry Maftuh"}),null!==O?Object(le.jsx)(u.f,{color:oe[O.role_name],className:"text-capitalize",children:O.role_name}):null]})})]})}),Object(le.jsx)("h4",{className:"fw-bolder border-bottom pb-50 mb-1 my-3 pt-75",children:b("Details")}),Object(le.jsx)("div",{className:"info-container",children:null!==O?Object(le.jsxs)("ul",{className:"list-unstyled",children:[Object(le.jsxs)("li",{className:"mb-75",children:[Object(le.jsxs)("span",{className:"fw-bolder me-25",children:[b("Username"),":"]}),Object(le.jsx)("span",{children:O.username})]}),Object(le.jsxs)("li",{className:"mb-75",children:[Object(le.jsxs)("span",{className:"fw-bolder me-25",children:[b("Email"),":"]}),Object(le.jsx)("span",{children:O.email})]}),Object(le.jsxs)("li",{className:"mb-75",children:[Object(le.jsxs)("span",{className:"fw-bolder me-25",children:[b("Status"),":"]}),Object(le.jsx)(u.f,{className:"text-capitalize",color:ue[O.is_active?"active":"inactive"],children:O.is_active?b("active"):b("inactive")})]}),Object(le.jsxs)("li",{className:"mb-75",children:[Object(le.jsxs)("span",{className:"fw-bolder me-25",children:[b("Role"),":"]}),Object(le.jsx)("span",{className:"text-capitalize",children:O.role_name})]}),Object(le.jsxs)("li",{className:"mb-75",children:[Object(le.jsxs)("span",{className:"fw-bolder me-25",children:[b("Unit"),":"]}),null!==O.member_of?O.member_of.map((function(e,t){return Object(le.jsx)(u.f,{className:"text-capitalize ms-1",color:"light-warning",pill:!0,children:e.name},t)})):""]}),Object(le.jsxs)("li",{className:"mb-75",children:[Object(le.jsxs)("span",{className:"fw-bolder me-25",children:[b("Contact"),":"]}),Object(le.jsx)("span",{children:O.phone})]}),Object(le.jsxs)("li",{className:"mb-75",children:[Object(le.jsxs)("span",{className:"fw-bolder me-25",children:[b("Joined Date"),":"]}),Object(le.jsx)("span",{children:X()(O.joined_date).locale("id").format("DD MMMM YYYY")})]})]}):null}),Object(le.jsxs)("div",{className:"d-flex justify-content-center pt-2",children:[Object(le.jsx)(u.i,{color:"primary",onClick:function(){return i(!0)},children:b("Edit")}),Object(le.jsx)(u.i,{className:"ms-1",color:O.is_active?"danger":"primary",outline:!0,onClick:function(){return e=O.is_active?"inactive":"active",de.fire({title:"".concat(b("Are you sure?")),text:"".concat(b("You won't be able to revert user!")),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(O.is_active?b("Yes, Suspend user!"):b("Yes, Activate user!")),cancelButtonText:"".concat(b("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then((function(t){if(t.value){var n={id:m,status:e};f(Object(ee.updateUser)(n)).then((function(e){"fulfilled"===e.meta.requestStatus?de.fire({icon:"success",title:"".concat(O.is_active?b("Suspended!"):b("Activate!")),text:"".concat(O.is_active?b("User has been suspended."):b("User has been activated"),"."),customClass:{confirmButton:"btn btn-success"}}):"rejected"===e.meta.requestStatus&&de.fire({icon:"error",title:"".concat(b("Cancelled!")),text:"".concat(b("Something went wrong"),"."),customClass:{confirmButton:"btn btn-success"}})}))}}));var e},children:O.is_active?b("Suspended"):b("Activate")})]})]})}),Object(le.jsx)(K.default,{show:n,setShow:i,detailPage:!0}),Object(le.jsxs)(u.G,{isOpen:w,toggle:function(){return N(!w)},className:"modal-dialog-centered modal-lg",children:[Object(le.jsx)(u.J,{className:"bg-transparent",toggle:function(){return N(!w)}}),Object(le.jsx)(u.H,{className:"px-sm-5 pt-50 pb-5",children:Object(le.jsx)("div",{className:"crop-container-user",children:Object(le.jsx)(ie.a,{image:v,crop:V,rotation:k,zoom:z,aspect:1,cropShape:"round",showGrid:!1,onCropChange:R,onRotationChange:_,onCropComplete:H,onZoomChange:A,restrictPosition:!1,cropSize:{width:"250px",height:"250px"}})})}),Object(le.jsx)(u.H,{className:"",children:Object(le.jsxs)(u.S,{children:[Object(le.jsx)(u.t,{md:6,children:Object(le.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[Object(le.jsx)("div",{style:{width:"95px"},className:"d-flex flex-column me-1",children:Object(le.jsx)("span",{children:b("Zoom")})}),Object(le.jsx)(re.a,{value:z,min:1,max:3,step:.1,"aria-labelledby":"Zoom",onChange:function(e,t){return A(t)}})]})}),Object(le.jsx)(u.t,{md:6,children:Object(le.jsxs)("div",{className:"d-flex justify-content-left align-items-center  mb-1",children:[Object(le.jsx)("div",{style:{width:"95px"},className:"d-flex flex-column me-1",children:Object(le.jsx)("span",{children:b("Rotation")})}),Object(le.jsx)(re.a,{value:k,min:0,max:360,step:1,"aria-labelledby":"Rotation",onChange:function(e,t){return _(t)}})]})})]})}),Object(le.jsx)(u.I,{children:Object(le.jsx)(u.i,{color:"primary",outline:!0,children:b("Upload")})})]})]})}}}]);
//# sourceMappingURL=8.46d70a08.chunk.js.map