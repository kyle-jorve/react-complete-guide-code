(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,n){e.exports={header:"MainNavigation_header__37I-S",logo:"MainNavigation_logo__2G0ZB",nav:"MainNavigation_nav__2QFxU",active:"MainNavigation_active__CrCL0"}},14:function(e,t,n){"use strict";var r=n(27),c=n.n(r),a=n(0);t.a=function(){return Object(a.jsx)("div",{className:c.a.spinner})}},18:function(e,t,n){e.exports={list:"QuoteList_list__1AtEd",sorting:"QuoteList_sorting__3I7kt"}},19:function(e,t,n){"use strict";var r=n(11),c=n(5),a=n(9),s=n(21),o=n(1);function u(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(o.useReducer)(u,{status:t?"pending":null,data:null,error:null}),i=Object(s.a)(n,2),j=i[0],l=i[1],d=Object(o.useCallback)(function(){var t=Object(a.a)(Object(c.a)().mark((function t(n){var r;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:r=t.sent,l({type:"SUCCESS",responseData:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),l({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(r.a)({sendRequest:d},j)}},20:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return p}));var r=n(5),c=n(11),a=n(9),s="https://react-udemy-course-c204b-default-rtdb.firebaseio.com/";function o(){return u.apply(this,arguments)}function u(){return(u=Object(a.a)(Object(r.a)().mark((function e(){var t,n,a,o,u;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(o in a=[],n)u=Object(c.a)({id:o},n[o]),a.push(u);return e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(e){return j.apply(this,arguments)}function j(){return(j=Object(a.a)(Object(r.a)().mark((function e(t){var n,a,o;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(a=e.sent,n.ok){e.next=8;break}throw new Error(a.message||"Could not fetch quote.");case 8:return o=Object(c.a)({id:t},a),e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=Object(a.a)(Object(r.a)().mark((function e(t){var n,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return h.apply(this,arguments)}function h(){return(h=Object(a.a)(Object(r.a)().mark((function e(t){var n,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:c.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=Object(a.a)(Object(r.a)().mark((function e(t){var n,a,o,u,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(a=e.sent,n.ok){e.next=8;break}throw new Error(a.message||"Could not get comments.");case 8:for(u in o=[],a)i=Object(c.a)({id:u},a[u]),o.push(i);return e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},23:function(e,t,n){e.exports={main:"Layout_main__2vsE4"}},26:function(e,t,n){e.exports={item:"QuoteItem_item__2zZiC"}},27:function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__3WDIm"}},28:function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__2Zx-w"}},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(22),c=n.n(r),a=n(8),s=n(1),o=n.n(s),u=n(2),i=n(23),j=n.n(i),l=n(12),d=n.n(l),b=n(0);var h=function(){return Object(b.jsxs)("header",{className:d.a.header,children:[Object(b.jsx)("div",{className:d.a.logo,children:"Some Quotes"}),Object(b.jsx)("nav",{className:d.a.nav,children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(a.c,{to:"/quotes",activeClassName:d.a.active,children:"All Quotes"})}),Object(b.jsx)("li",{children:Object(b.jsx)(a.c,{to:"/new-quote",activeClassName:d.a.active,children:"Add Quote"})})]})})]})};var p=function(e){return Object(b.jsxs)(s.Fragment,{children:[Object(b.jsx)(h,{}),Object(b.jsx)("main",{className:j.a.main,children:e.children})]})},f=n(26),x=n.n(f),O=function(e){return Object(b.jsxs)("li",{className:x.a.item,children:[Object(b.jsxs)("figure",{children:[Object(b.jsx)("blockquote",{children:Object(b.jsx)("p",{children:e.text.substring(0,60)})}),Object(b.jsx)("figcaption",{children:e.author})]}),Object(b.jsx)(a.b,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},m=n(18),v=n.n(m);var g=function(e){var t,n,r=Object(u.h)(),c=Object(u.i)(),a="asc"===new URLSearchParams(c.search).get("sort"),o=(t=e.quotes,n=a,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(b.jsxs)(s.Fragment,{children:[Object(b.jsxs)("div",{className:"".concat(v.a.sorting," title-row"),children:[Object(b.jsx)("h1",{children:"All Quotes"}),Object(b.jsxs)("button",{onClick:function(){r.replace({pathname:c.pathname,search:"?sort=".concat(a?"desc":"asc")})},children:["Sort (",a?"Desc":"Asc",")"]})]}),Object(b.jsx)("ul",{className:v.a.list,children:o.map((function(e){return Object(b.jsx)(O,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},w=n(14),_=n(28),y=n.n(_),N=function(){return Object(b.jsxs)("div",{className:y.a.noquotes,children:[Object(b.jsx)("p",{children:"No quotes found!"}),Object(b.jsx)(a.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})},q=n(19),k=n(20);var S=function(){var e=Object(q.a)(k.d,!0),t=e.sendRequest,n=e.status,r=e.data,c=e.error;return Object(s.useEffect)((function(){t()}),[t]),"pending"===n?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(w.a,{})}):c?Object(b.jsx)("p",{className:"centered focused",children:c}):"completed"!==n||r&&0!==r.length?Object(b.jsx)(s.Fragment,{children:Object(b.jsx)(g,{quotes:r})}):Object(b.jsx)(N,{})},C=o.a.lazy((function(){return n.e(4).then(n.bind(null,56))})),E=o.a.lazy((function(){return n.e(3).then(n.bind(null,55))})),R=o.a.lazy((function(){return n.e(5).then(n.bind(null,54))}));var Q=function(){return Object(b.jsx)(p,{children:Object(b.jsx)(s.Suspense,{fallback:Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(w.a,{})}),children:Object(b.jsxs)(u.e,{children:[Object(b.jsx)(u.c,{path:"/",exact:!0,children:Object(b.jsx)(u.b,{to:"/quotes"})}),Object(b.jsx)(u.c,{path:"/quotes",exact:!0,children:Object(b.jsx)(S,{})}),Object(b.jsx)(u.c,{path:"/quotes/:quoteID",children:Object(b.jsx)(E,{})}),Object(b.jsx)(u.c,{path:"/new-quote",children:Object(b.jsx)(C,{})}),Object(b.jsx)(u.c,{path:"*",children:Object(b.jsx)(R,{})})]})})})};n(45);c.a.createRoot(document.getElementById("root")).render(Object(b.jsx)(a.a,{children:Object(b.jsx)(Q,{})}))}},[[46,1,2]]]);
//# sourceMappingURL=main.5b7b5354.chunk.js.map