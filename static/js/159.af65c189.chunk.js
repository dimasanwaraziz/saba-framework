(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[159],{804:function(e,s,a){"use strict";a.r(s);var r=a(4),n=a(6),c=a(2),t=a(44),i=a(1300),l=a(46),o=a(1301),d=a(556),m=a(121),j=a(518),b=a(239),u=a(5),O=a(478),x=a(81),f=a(25),h=a(36),v=a(96),p=a(64),g=a(85),w=a(0),N=function(e){var s=e.x,a=e.name,r=e.message;return Object(w.jsxs)("div",{className:"d-flex",children:[Object(w.jsx)("div",{className:"me-1",children:Object(w.jsx)(h.a,{size:"sm",color:"info",icon:Object(w.jsx)(d.a,{size:12})})}),Object(w.jsxs)("div",{className:"d-flex flex-column",children:[Object(w.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(w.jsx)("h6",{children:a}),Object(w.jsx)(m.a,{size:12,className:"cursor-pointer",onClick:function(){return f.b.dismiss(s.id)}})]}),Object(w.jsx)("span",{children:r})]})]})},k=function(e){var s=e.x,a=e.name,r=e.message;return Object(w.jsxs)("div",{className:"d-flex",children:[Object(w.jsx)("div",{className:"me-1",children:Object(w.jsx)(h.a,{size:"sm",color:"danger",icon:Object(w.jsx)(j.a,{size:12})})}),Object(w.jsxs)("div",{className:"d-flex flex-column",children:[Object(w.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(w.jsx)("h6",{children:a}),Object(w.jsx)(m.a,{size:12,className:"cursor-pointer",onClick:function(){return f.b.dismiss(s.id)}})]}),Object(w.jsx)("span",{children:r})]})]})},y={email:"",username:"",password:"",confirmPassword:""};s.default=function(e){var s=e.stepper,a=Object(x.a)().t,d=(Object(g.a)().skin,Object(c.useState)(!1)),m=Object(n.a)(d,2),j=m[0],h=m[1],_=Object(c.useState)(null),z=Object(n.a)(_,2),P=(z[0],z[1]),S=Object(c.useState)(null),U=Object(n.a)(S,2),E=(U[0],U[1]),q=i.a().shape({username:i.c().required("Username is required").min(4,"Username must be at least 4 characters").max(15,"Username cannot exceed 15 characters").matches(/^[a-zA-Z0-9_]+$/,"Username can only contain letters, numbers, and underscores"),email:i.c().email().required(),password:i.c().required(),confirmPassword:i.c().required().oneOf([i.b("password"),null],a("Passwords must match"))}),F=Object(l.e)({defaultValues:y,resolver:Object(o.a)(q)}),B=F.control,C=F.handleSubmit,I=F.formState.errors;return Object(w.jsx)(p.a,{blocking:j,loader:Object(w.jsx)(v.a,{}),children:Object(w.jsxs)(c.Fragment,{children:[Object(w.jsxs)("div",{className:"content-header mb-2",children:[Object(w.jsx)("h2",{className:"fw-bolder mb-75",children:a("Account Information")}),Object(w.jsxs)("span",{children:['"',a("Enter your email password details"),'"']})]}),Object(w.jsxs)(u.y,{onSubmit:C((function(e){if(Object.values(e).every((function(e){return e.length>0}))){var n=Object(r.a)({},e);null!==localStorage.getItem("dev")&&(n.device_id=localStorage.getItem("dev"),delete n.confirmPassword),h(!0),t.a.register(n).then((function(e){var r=e.data;h(!1),E(null===r||void 0===r?void 0:r.message),sessionStorage.setItem("register_token",null===r||void 0===r?void 0:r.register_token),Object(f.b)((function(e){return Object(w.jsx)(N,{x:e,name:a("Successfully"),message:null===r||void 0===r?void 0:r.message})})),s.next()})).catch((function(e){var s,r;h(!1);var n,c,t="".concat(a("Failed. Please check your email and password and make sure your account is registered correctly. Contact our support team if needed."));["email_taken","username_taken","email_await"].includes(null===(s=e.response)||void 0===s||null===(r=s.data)||void 0===r?void 0:r.error_reason)&&(t=null===(n=e.response)||void 0===n||null===(c=n.data)||void 0===c?void 0:c.message);P(t),Object(f.b)((function(e){return Object(w.jsx)(k,{x:e,name:a("Register Failed"),message:t})}))}))}})),children:[Object(w.jsxs)(u.U,{children:[Object(w.jsxs)(u.t,{md:"6",className:"mb-1",children:[Object(w.jsx)(u.E,{className:"form-label",for:"email",children:"Email"}),Object(w.jsx)(l.a,{control:B,id:"email",name:"email",render:function(e){var s=e.field;return Object(w.jsx)(u.B,Object(r.a)({type:"email",placeholder:"john.doe@email.com",invalid:I.email&&!0},s))}}),I.email&&Object(w.jsx)(u.z,{children:I.email.message})]}),Object(w.jsxs)(u.t,{md:"6",className:"mb-1",children:[Object(w.jsx)(u.E,{className:"form-label",for:"username",children:"Username"}),Object(w.jsx)(l.a,{id:"username",name:"username",control:B,render:function(e){var s=e.field;return Object(w.jsx)(u.B,Object(r.a)({placeholder:"johndoe",invalid:I.username&&!0},s))}}),I.username&&Object(w.jsx)(u.z,{children:I.username.message})]})]}),Object(w.jsxs)(u.U,{children:[Object(w.jsxs)("div",{className:"form-password-toggle col-md-6 mb-1",children:[Object(w.jsx)(l.a,{id:"password",name:"password",control:B,render:function(e){var s=e.field;return Object(w.jsx)(O.a,Object(r.a)({label:a("Password"),htmlFor:"password",className:"input-group-merge",invalid:I.password&&!0},s))}}),I.password&&Object(w.jsx)(u.z,{children:I.password.message})]}),Object(w.jsxs)("div",{className:"form-password-toggle col-md-6 mb-1",children:[Object(w.jsx)(l.a,{control:B,id:"confirmPassword",name:"confirmPassword",render:function(e){var s=e.field;return Object(w.jsx)(O.a,Object(r.a)({label:a("Confirm Password"),htmlFor:"confirmPassword",className:"input-group-merge",invalid:I.confirmPassword&&!0},s))}}),I.confirmPassword&&Object(w.jsx)(u.z,{children:I.confirmPassword.message})]})]}),Object(w.jsxs)(u.U,{children:[Object(w.jsxs)(u.t,{md:"6",className:"mb-1",children:[Object(w.jsx)(u.E,{className:"form-label",for:"name",children:a("Name")}),Object(w.jsx)(l.a,{id:"name",name:"name",control:B,render:function(e){var s=e.field;return Object(w.jsx)(u.B,Object(r.a)({placeholder:"John",invalid:I.name&&!0},s))}}),I.name&&Object(w.jsx)(u.z,{children:I.name.message})]}),Object(w.jsxs)(u.t,{md:"6",className:"mb-1",children:[Object(w.jsx)(u.E,{className:"form-label",for:"mobile_number",children:a("Mobile Number")}),Object(w.jsx)(l.a,{id:"mobile_number",name:"mobile_number",control:B,render:function(e){var s=e.field;return Object(w.jsx)(u.B,Object(r.a)({type:"number",id:"phone",name:"mobile_number",placeholder:"(472) 765-3654",invalid:I.mobile_number&&!0},s))}}),I.mobile_number&&Object(w.jsx)(u.z,{children:I.mobile_number.message})]})]}),Object(w.jsx)("div",{className:"d-flex justify-content-end mt-2",children:Object(w.jsxs)(u.i,{type:"submit",color:"primary",className:"btn-next",children:[Object(w.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:a("Next")}),Object(w.jsx)(b.a,{size:14,className:"align-middle ms-sm-25 ms-0"})]})})]})]})})}}}]);
//# sourceMappingURL=159.af65c189.chunk.js.map