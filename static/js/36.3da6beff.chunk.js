(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[36,162,163,164,165,166,167,168,169],{1533:function(e,s,t){},393:function(e,s,t){"use strict";t.r(s);var c=t(6),a=t(2),i=t(39),n=t.n(i),l=t(63),r=t(263),j=t(5),d=t(811),m=t(807),o=t(812),b=t(809),x=t(814),h=t(810),u=t(813),O=t(808),f=(t(1533),t(0));s.default=function(){var e=Object(a.useState)(null),s=Object(c.a)(e,2),t=s[0],i=s[1],p=Object(a.useState)(!1),N=Object(c.a)(p,2),g=N[0],v=N[1];return Object(a.useEffect)((function(){n.a.get("/profile/data").then((function(e){return i(e.data)}))}),[]),Object(f.jsxs)(a.Fragment,{children:[Object(f.jsx)(r.a,{title:"Profile",data:[{title:"Pages"},{title:"Profile"}]}),null!==t?Object(f.jsxs)("div",{id:"user-profile",children:[Object(f.jsx)(j.S,{children:Object(f.jsx)(j.t,{sm:"12",children:Object(f.jsx)(b.default,{data:t.header})})}),Object(f.jsxs)("section",{id:"profile-info",children:[Object(f.jsxs)(j.S,{children:[Object(f.jsxs)(j.t,{lg:{size:3,order:1},sm:{size:12},xs:{order:2},children:[Object(f.jsx)(m.default,{data:t.userAbout}),Object(f.jsx)(u.default,{data:t.suggestedPages}),Object(f.jsx)(x.default,{data:t.twitterFeeds})]}),Object(f.jsx)(j.t,{lg:{size:6,order:2},sm:{size:12},xs:{order:1},children:Object(f.jsx)(o.default,{data:t.post})}),Object(f.jsxs)(j.t,{lg:{size:3,order:3},sm:{size:12},xs:{order:3},children:[Object(f.jsx)(h.default,{data:t.latestPhotos}),Object(f.jsx)(O.default,{data:t.suggestions}),Object(f.jsx)(d.default,{data:t.polls})]})]}),Object(f.jsx)(j.S,{children:Object(f.jsx)(j.t,{className:"text-center",sm:"12",children:Object(f.jsx)(j.i,{color:"primary",className:"border-0 mb-1 profile-load-more",size:"sm",onClick:function(){v(!0),setTimeout((function(){v(!1)}),2e3)},children:Object(f.jsx)(l.a,{blocking:g,overlayColor:"rgba(255,255,255, .5)",children:Object(f.jsx)("span",{children:" Load More"})})})})})]})]}):null]})}},807:function(e,s,t){"use strict";t.r(s);var c=t(5),a=t(0);s.default=function(e){var s=e.data;return Object(a.jsx)(c.l,{children:Object(a.jsxs)(c.m,{children:[Object(a.jsx)("h5",{className:"mb-75",children:"About"}),Object(a.jsx)(c.r,{children:s.about}),Object(a.jsxs)("div",{className:"mt-2",children:[Object(a.jsx)("h5",{className:"mb-75",children:"Joined:"}),Object(a.jsx)(c.r,{children:s.joined})]}),Object(a.jsxs)("div",{className:"mt-2",children:[Object(a.jsx)("h5",{className:"mb-75",children:"Lives:"}),Object(a.jsx)(c.r,{children:s.lives})]}),Object(a.jsxs)("div",{className:"mt-2",children:[Object(a.jsx)("h5",{className:"mb-75",children:"Email:"}),Object(a.jsx)(c.r,{children:s.email})]}),Object(a.jsxs)("div",{className:"mt-2",children:[Object(a.jsx)("h5",{className:"mb-75",children:"Website:"}),Object(a.jsx)(c.r,{children:s.website})]})]})})}},808:function(e,s,t){"use strict";t.r(s);var c=t(37),a=t(12),i=t.n(a),n=t(579),l=t(5),r=t(0);s.default=function(e){var s=e.data;return Object(r.jsx)(l.l,{children:Object(r.jsxs)(l.m,{children:[Object(r.jsx)("h5",{children:"Suggestions"}),s.map((function(e,s){return Object(r.jsxs)("div",{className:i()("d-flex justify-content-start align-items-center",{"mt-2":0===s,"mt-1":0!==s}),children:[Object(r.jsx)(c.a,{className:"me-75",img:e.avatar,imgHeight:"40",imgWidth:"40"}),Object(r.jsxs)("div",{className:"profile-user-info",children:[Object(r.jsx)("h6",{className:"mb-0",children:e.name}),Object(r.jsx)("small",{className:"text-muted",children:e.mutualFriend})]}),Object(r.jsx)("div",{className:"ms-auto",children:Object(r.jsx)(l.i,{className:"btn-icon",color:"primary",size:"sm",children:Object(r.jsx)(n.a,{size:14})})})]},s)}))]})})}},809:function(e,s,t){"use strict";t.r(s);var c=t(6),a=t(2),i=t(523),n=t(565),l=t(445),r=t(444),j=t(582),d=t(441),m=t(5),o=t(0);s.default=function(e){var s=e.data,t=Object(a.useState)(!1),b=Object(c.a)(t,2),x=b[0],h=b[1];return Object(o.jsxs)(m.l,{className:"profile-header mb-2",children:[Object(o.jsx)(m.p,{src:s.coverImg,alt:"User Profile Image",top:!0}),Object(o.jsx)("div",{className:"position-relative",children:Object(o.jsxs)("div",{className:"profile-img-container d-flex align-items-center",children:[Object(o.jsx)("div",{className:"profile-img",children:Object(o.jsx)("img",{className:"rounded img-fluid",src:s.avatar,alt:"Card image"})}),Object(o.jsxs)("div",{className:"profile-title ms-3",children:[Object(o.jsx)("h2",{className:"text-white",children:s.name}),Object(o.jsx)("p",{className:"text-white",children:s.designation})]})]})}),Object(o.jsx)("div",{className:"profile-header-nav",children:Object(o.jsxs)(m.N,{container:!1,className:"justify-content-end justify-content-md-between w-100",expand:"md",light:!0,children:[Object(o.jsx)(m.i,{color:"",className:"btn-icon navbar-toggler",onClick:function(){return h(!x)},children:Object(o.jsx)(i.a,{size:21})}),Object(o.jsx)(m.u,{isOpen:x,navbar:!0,children:Object(o.jsxs)("div",{className:"profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0",children:[Object(o.jsxs)(m.K,{className:"mb-0",pills:!0,children:[Object(o.jsx)(m.L,{children:Object(o.jsxs)(m.M,{className:"fw-bold",active:!0,children:[Object(o.jsx)("span",{className:"d-none d-md-block",children:"Feed"}),Object(o.jsx)(n.a,{className:"d-block d-md-none",size:14})]})}),Object(o.jsx)(m.L,{children:Object(o.jsxs)(m.M,{className:"fw-bold",children:[Object(o.jsx)("span",{className:"d-none d-md-block",children:"About"}),Object(o.jsx)(l.a,{className:"d-block d-md-none",size:14})]})}),Object(o.jsx)(m.L,{children:Object(o.jsxs)(m.M,{className:"fw-bold",children:[Object(o.jsx)("span",{className:"d-none d-md-block",children:"Photos"}),Object(o.jsx)(r.a,{className:"d-block d-md-none",size:14})]})}),Object(o.jsx)(m.L,{children:Object(o.jsxs)(m.M,{className:"fw-bold",children:[Object(o.jsx)("span",{className:"d-none d-md-block",children:"Friends"}),Object(o.jsx)(j.a,{className:"d-block d-md-none",size:14})]})})]}),Object(o.jsxs)(m.i,{color:"primary",children:[Object(o.jsx)(d.a,{className:"d-block d-md-none",size:14}),Object(o.jsx)("span",{className:"fw-bold d-none d-md-block",children:"Edit"})]})]})})]})})]})}},810:function(e,s,t){"use strict";t.r(s);var c=t(5),a=t(0);s.default=function(e){var s=e.data;return Object(a.jsx)(c.l,{children:Object(a.jsxs)(c.m,{children:[Object(a.jsx)("h5",{className:"mb-0",children:"Latest Photos"}),Object(a.jsx)(c.S,{children:s.map((function(e,s){return Object(a.jsx)(c.t,{md:"4",xs:"6",className:"profile-latest-img",children:Object(a.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(a.jsx)("img",{className:"img-fluid rounded",src:e.img,alt:"latest-photo"})})},s)}))})]})})}},811:function(e,s,t){"use strict";t.r(s);var c=t(2),a=t(12),i=t.n(a),n=t(37),l=t(5),r=t(0);s.default=function(e){var s=e.data;return Object(r.jsx)(l.l,{children:Object(r.jsxs)(l.m,{children:[Object(r.jsx)("h5",{className:"mb-1",children:"Polls"}),Object(r.jsx)(l.r,{className:"mb-0",children:"Who is the best actor in Marvel Cinematic Universe?"}),s.map((function(e,s){return Object(r.jsxs)("div",{className:"profile-polls-info mt-2",children:[Object(r.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(r.jsxs)("div",{className:"form-check",children:[Object(r.jsx)(l.B,{type:"radio",name:"polls",id:"radio-".concat(e.name.toLowerCase())}),Object(r.jsx)(l.E,{className:"form-check-label",for:"radio-".concat(e.name.toLowerCase()),children:e.name})]}),Object(r.jsx)("div",{className:"text-end",children:e.result})]}),Object(r.jsx)(l.R,{className:"my-50",value:e.result.replace("%"," ").trim()}),Object(r.jsx)("div",{className:i()("avatar-group",{"mt-1":s>0,"my-1":0===s}),children:e.votedUser.map((function(e){return Object(r.jsxs)(c.Fragment,{children:[Object(r.jsx)(n.a,{imgWidth:"26",imgHeight:"26",img:e.img,className:"pull-up",id:e.username.toLowerCase().split(" ").join("-")}),Object(r.jsx)(l.Z,{target:e.username.toLowerCase().split(" ").join("-"),placement:"top",children:e.username})]},e.username)}))})]},e.name)}))]})})}},812:function(e,s,t){"use strict";t.r(s);var c=t(2),a=t(37),i=t(12),n=t.n(i),l=t(549),r=t(447),j=t(568),d=t(5),m=t(0);s.default=function(e){return e.data.map((function(e){return Object(m.jsx)(d.l,{className:"post",children:Object(m.jsxs)(d.m,{children:[Object(m.jsxs)("div",{className:"d-flex justify-content-start align-items-center mb-1",children:[Object(m.jsx)(a.a,{className:"me-1",img:e.avatar,imgHeight:"50",imgWidth:"50"}),Object(m.jsxs)("div",{className:"profile-user-info",children:[Object(m.jsx)("h6",{className:"mb-0",children:e.username}),Object(m.jsx)("small",{className:"text-muted",children:e.postTime})]})]}),Object(m.jsx)(d.r,{children:e.postText}),e.postImg?Object(m.jsx)("img",{src:e.postImg,alt:e.username,className:"img-fluid rounded mb-75"}):e.postVid?Object(m.jsx)("iframe",{src:"https://www.youtube.com/embed/6stlCkUDG_s",className:"w-100 rounded height-250 mb-50 border-0"}):null,Object(m.jsxs)(d.S,{className:"d-flex justify-content-start align-items-center flex-wrap pb-50 post-actions",children:[Object(m.jsxs)(d.t,{className:"d-flex justify-content-between justify-content-sm-start mb-2",sm:"6",children:[Object(m.jsxs)("div",{className:"d-flex align-items-center text-muted text-nowrap cursor-pointer",children:[Object(m.jsx)(l.a,{size:18,className:n()("me-50",{"profile-likes":!0===e.youLiked})}),Object(m.jsx)("span",{children:e.likes})]}),Object(m.jsxs)("div",{className:"d-flex align-items-center",children:[Object(m.jsx)("div",{className:"avatar-group ms-1",children:e.likedUsers.map((function(e){return Object(m.jsxs)(c.Fragment,{children:[Object(m.jsx)(a.a,{className:"pull-up",img:e.avatar,id:e.username.toLowerCase().split(" ").join("-"),imgHeight:"26",imgWidth:"26"}),Object(m.jsx)(d.Z,{target:e.username.toLowerCase().split(" ").join("-"),placement:"top",children:e.username})]},e.username)}))}),Object(m.jsxs)("a",{href:"/",className:"text-muted text-nowrap ms-50",onClick:function(e){return e.preventDefault()},children:["+",e.likedCount," more"]})]})]}),Object(m.jsxs)(d.t,{className:"d-flex justify-content-between justify-content-sm-end align-items-center mb-2",sm:"6",children:[Object(m.jsxs)("a",{href:"/",className:"text-nowrap",onClick:function(e){return e.preventDefault()},children:[Object(m.jsx)(r.a,{size:18,className:"text-body me-50"}),Object(m.jsx)("span",{className:"text-muted me-1",children:e.comments})]}),Object(m.jsxs)("a",{href:"/",className:"text-nowrap share-post",onClick:function(e){return e.preventDefault()},children:[Object(m.jsx)(j.a,{size:18,className:"text-body mx-50"}),Object(m.jsx)("span",{className:"text-muted me-1",children:e.share})]})]})]}),e.detailedComments.map((function(e){return Object(m.jsxs)("div",{className:"d-flex align-items-start mb-1",children:[Object(m.jsx)(a.a,{img:e.avatar,className:"mt-25 me-75",imgHeight:"34",imgWidth:"34"}),Object(m.jsxs)("div",{className:"profile-user-info w-100",children:[Object(m.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(m.jsx)("h6",{className:"mb-0",children:e.username}),Object(m.jsxs)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(m.jsx)(l.a,{size:18,className:n()("text-body",{"profile-likes":!0===e.youLiked})}),Object(m.jsx)("span",{className:"align-middle ms-25 text-muted",children:e.commentsLikes})]})]}),Object(m.jsx)("small",{children:e.comment})]})]},e.username)})),Object(m.jsxs)("fieldset",{className:"form-label-group mb-50",children:[Object(m.jsx)(d.E,{className:"form-check-label",for:"add-comment-".concat(e.username),children:"Add Comment"}),Object(m.jsx)(d.B,{id:"add-comment-".concat(e.username),type:"textarea",rows:"3",placeholder:"Add Comment"})]}),Object(m.jsx)(d.i,{color:"primary",size:"sm",children:"Post Comment"})]})},e.username)}))}},813:function(e,s,t){"use strict";t.r(s);var c=t(12),a=t.n(c),i=t(458),n=t(37),l=t(5),r=t(0);s.default=function(e){var s=e.data;return Object(r.jsx)(l.l,{children:Object(r.jsxs)(l.m,{className:"profile-suggestion",children:[Object(r.jsx)("h5",{className:"mb-2",children:"Suggested Pages"}),s.map((function(e,t){return Object(r.jsxs)("div",{className:a()("d-flex justify-content-start align-items-center",{"mb-1":t!==s.length-1}),children:[Object(r.jsx)(n.a,{className:"me-1",img:e.avatar,imgHeight:40,imgWidth:40}),Object(r.jsxs)("div",{className:"profile-user-info",children:[Object(r.jsx)("h6",{className:"mb-0",children:e.username}),Object(r.jsx)("small",{className:"text-muted",children:e.subtitle})]}),Object(r.jsx)("div",{className:"profile-star ms-auto",children:Object(r.jsx)(i.a,{size:18,className:a()("cursor-pointer",{"profile-favorite":!0===e.favorite})})})]},t)}))]})})}},814:function(e,s,t){"use strict";t.r(s);var c=t(37),a=t(12),i=t.n(a),n=t(531),l=t(458),r=t(5),j=t(0);s.default=function(e){var s=e.data;return Object(j.jsx)(r.l,{children:Object(j.jsxs)(r.m,{children:[Object(j.jsx)("h5",{children:"Twitter Feeds"}),s.map((function(e,s){return Object(j.jsxs)("div",{className:i()("profile-twitter-feed",{"mt-1":0===s,"mt-2":0!==s}),children:[Object(j.jsxs)("div",{className:"d-flex justify-content-start align-items-center mb-1",children:[Object(j.jsx)(c.a,{className:"me-1",img:e.imgUrl,imgHeight:"40",imgWidth:"40"}),Object(j.jsxs)("div",{className:"profile-user-info",children:[Object(j.jsx)("h6",{className:"mb-0",children:e.title}),Object(j.jsxs)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(j.jsxs)("small",{className:"text-muted",children:["@",e.id]}),Object(j.jsx)(n.a,{size:14})]})]}),Object(j.jsx)("div",{className:"profile-star ms-auto",children:Object(j.jsx)(l.a,{size:18,className:i()("cursor-pointer",{"profile-favorite":!0===e.favorite})})})]}),Object(j.jsx)(r.r,{className:"mb-50",children:e.desc}),Object(j.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(j.jsx)("small",{children:e.tags})})]},s)}))]})})}}}]);
//# sourceMappingURL=36.3da6beff.chunk.js.map