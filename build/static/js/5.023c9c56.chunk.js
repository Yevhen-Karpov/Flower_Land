(this.webpackJsonpflower_shop=this.webpackJsonpflower_shop||[]).push([[5],{136:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"h",(function(){return j})),n.d(t,"g",(function(){return d})),n.d(t,"e",(function(){return g})),n.d(t,"a",(function(){return _})),n.d(t,"c",(function(){return v})),n.d(t,"f",(function(){return w})),n.d(t,"b",(function(){return y}));var a=n(31),r=n(40),c=n(137),s=n(44),i=n(36),u=n.n(i),o=n(38);u.a.defaults.baseURL="https://flowers-gallery.herokuapp.com";var l=function(){function e(){Object(c.a)(this,e)}return Object(s.a)(e,[{key:"signIn",value:function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){var n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post("/api/auth/login",t);case 3:return n=e.sent,r=n.data,n.status<300&&g(),e.abrupt("return",r.payload);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(r.a)(Object(a.a)().mark((function e(){var t;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/api/auth/logout");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"signUp",value:function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){var n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post("/api/auth/register",t);case 3:return n=e.sent,r=n.data,e.abrupt("return",r.payload.user);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getCurrentUser",value:function(){var e=Object(r.a)(Object(a.a)().mark((function e(){var t,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/api/auth/current");case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()}]),e}();new l;function p(){return b.apply(this,arguments)}function b(){return(b=Object(r.a)(Object(a.a)().mark((function e(){var t,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/api/achimenes");case 3:return t=e.sent,n=t.data,console.log(n.data.result),e.abrupt("return",n.data.result);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function j(){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(Object(a.a)().mark((function e(){var t,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/api/violets");case 3:return t=e.sent,n=t.data,console.log(n.data.result),e.abrupt("return",n.data.result);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function d(){return f.apply(this,arguments)}function f(){return(f=Object(r.a)(Object(a.a)().mark((function e(){var t,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/api/gerans");case 3:return t=e.sent,n=t.data,console.log(n.data.result),e.abrupt("return",n.data.result);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function g(){return m.apply(this,arguments)}function m(){return(m=Object(r.a)(Object(a.a)().mark((function e(){var t,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/api/collections");case 3:return t=e.sent,n=t.data,console.log(n.data.result),e.abrupt("return",n.data.result);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function _(e){return O.apply(this,arguments)}function O(){return(O=Object(r.a)(Object(a.a)().mark((function e(t){var n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post("/api/collections",t);case 3:return n=e.sent,r=n.data,console.log(r),o.b.success("\u041a\u0432\u0456\u0442\u043a\u0430 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0434\u043e\u0434\u0430\u043d\u0430 \u0434\u043e \u043a\u043e\u043b\u0435\u043a\u0446\u0456\u0457"),e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),o.b.error("\u041a\u0432\u0456\u0442\u043a\u0430 \u0432\u0436\u0435 \u0454 \u0432 \u043a\u043e\u043b\u0435\u043a\u0446\u0456\u0457"),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=Object(r.a)(Object(a.a)().mark((function e(t){var n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.delete("/api/collections/".concat(t));case 3:return n=e.sent,r=n.data,console.log(r),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function w(){return P.apply(this,arguments)}function P(){return(P=Object(r.a)(Object(a.a)().mark((function e(){var t,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/api/comments");case 3:return t=e.sent,n=t.data,console.log(n.data.result),e.abrupt("return",n.data.result);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function y(e){return k.apply(this,arguments)}function k(){return k=Object(r.a)(Object(a.a)().mark((function e(t){var n,r,c,s=arguments;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:function(){},e.prev=1,e.next=4,u.a.post("/api/comments",t);case 4:return r=e.sent,c=r.data,r.status<300&&n(),console.log(c),e.abrupt("return",c);case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,12]])}))),k.apply(this,arguments)}},138:function(e,t,n){"use strict";n(1);var a=n(139),r=n.n(a),c=n(23),s=n(2);t.a=function(e){for(var t=e.itemsPerPage,n=e.totalItems,a=e.paginate,i=e.nextPage,u=e.prevPage,o=[],l=1;l<=Math.ceil(n/t);l++)o.push(l);return Object(s.jsxs)("div",{className:r.a.wrapper,children:[Object(s.jsx)("button",{type:"button",className:r.a.btn,onClick:u,children:Object(s.jsx)(c.a,{})}),Object(s.jsx)("ul",{className:r.a.paginationWrap,children:o.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)("button",{type:"button",className:r.a.btn,onClick:function(){return a(e)},children:e})},e)}))}),Object(s.jsx)("button",{type:"button",className:r.a.btn,onClick:i,children:Object(s.jsx)(c.b,{})})]})}},139:function(e,t,n){e.exports={wrapper:"Pagination_wrapper__2_cwm",paginationWrap:"Pagination_paginationWrap__2Z06N",btn:"Pagination_btn__FdIvo"}},140:function(e,t,n){e.exports={container:"AchimenesPage_container__1h_V9",title:"AchimenesPage_title__3VFIn",text:"AchimenesPage_text__2jxbx",wrapper:"AchimenesPage_wrapper__2Yki3",img:"AchimenesPage_img__3Db-G",name:"AchimenesPage_name__1J5cT",card:"AchimenesPage_card__3TIcu",cardView:"AchimenesPage_cardView__yzTUm",cardItem:"AchimenesPage_cardItem__2ev-k",nameItem:"AchimenesPage_nameItem__1H6n3",descr:"AchimenesPage_descr__1gAhV",cardDescr:"AchimenesPage_cardDescr__sGR57",button:"AchimenesPage_button__20_xl",price:"AchimenesPage_price__2JbO3",span:"AchimenesPage_span__1MyR-",span1:"AchimenesPage_span1__1nBZb"}},158:function(e,t,n){e.exports={container:"VioletsPage_container__1sjxR",title:"VioletsPage_title__1m-6X",text:"VioletsPage_text__3Pll2",wrapper:"VioletsPage_wrapper__1UGTl",img:"VioletsPage_img__30L2P",name:"VioletsPage_name__3ujBE",card:"VioletsPage_card__2Rggi",span1:"VioletsPage_span1__3dNBz"}},167:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var a=n(6),r=n(1),c=n(11),s=n(8),i=n(143),u=n(136),o=n(138),l=n(14),p=n(38),b=n(29),j=n(140),h=n.n(j),d=n(2);function f(e){var t=e.violets,n=Object(l.c)(b.a.getIsLoggedIn),s=Object(r.useState)(null),i=Object(a.a)(s,2),o=i[0],j=i[1],f=Object(c.g)().violetId,g=t.find((function(e){return e._id===f}));Object(r.useEffect)((function(){n&&Object(u.e)().then(j)}),[n]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:h.a.cardView,children:[Object(d.jsx)("div",{className:h.a.cardItem,children:Object(d.jsx)("img",{src:g.imgUrl,alt:g.title,className:h.a.img})}),Object(d.jsxs)("div",{className:h.a.cardDescr,children:[Object(d.jsx)("h2",{className:h.a.nameItem,children:g.title}),Object(d.jsx)("p",{className:h.a.descr,children:g.descr}),Object(d.jsxs)("p",{className:h.a.price,children:[Object(d.jsx)("span",{className:h.a.span,children:"\u041d\u0430\u044f\u0432\u043d\u0456\u0441\u0442\u044c: "}),g.status]}),Object(d.jsx)("button",{className:h.a.button,onClick:function(){window.history.back()},children:"\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044c \u0434\u043e \u043a\u043e\u043b\u0435\u043a\u0446\u0456\u0457"}),n&&Object(d.jsx)("button",{className:h.a.button,onClick:function(){o.find((function(e){return e.title===g.title}))?p.b.error("\u0426\u044f \u043a\u0432\u0456\u0442\u043a\u0430 \u0432\u0436\u0435 \u0454 \u0443 \u0432\u0430\u0448\u0456\u0439 \u043a\u043e\u043b\u0435\u043a\u0446\u0456\u0457"):Object(u.a)({imgUrl:g.imgUrl,title:g.title})},children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0434\u043e \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0457 \u043a\u043e\u043b\u0435\u043a\u0446\u0456\u0457"})]})]})]})}var g=n(158),m=n.n(g);function _(){var e=Object(c.h)(),t=e.url,n=e.path,l=Object(r.useState)([]),p=Object(a.a)(l,2),b=p[0],j=p[1],h=Object(r.useState)(1),g=Object(a.a)(h,2),_=g[0],O=g[1],v=Object(r.useState)(10),x=Object(a.a)(v,1)[0];Object(r.useEffect)((function(){Object(u.h)().then(j),i.animateScroll.scrollMore(400)}),[]);var w=_*x,P=w-x,y=b.slice(P,w);return Object(d.jsxs)("div",{className:m.a.container,children:[Object(d.jsx)("h1",{className:m.a.title,children:"\u0424\u0456\u0430\u043b\u043a\u0438"}),Object(d.jsx)("p",{className:m.a.text,children:"\u0424\u0456\u0430\u043b\u043a\u0430 (Viola) \u2014 \u0440\u0456\u0434 \u043a\u0432\u0456\u0442\u043a\u043e\u0432\u0438\u0445 \u0440\u043e\u0441\u043b\u0438\u043d \u0440\u043e\u0434\u0438\u043d\u0438 \u0444\u0456\u0430\u043b\u043a\u043e\u0432\u0438\u0445, \u0449\u043e \u043c\u0456\u0441\u0442\u0438\u0442\u044c \u0432\u0456\u0434 200\u2014500 \u0432\u0438\u0434\u0456\u0432 \u0443 \u0432\u0441\u044c\u043e\u043c\u0443 \u0441\u0432\u0456\u0442\u0456. \u0424\u0456\u0430\u043b\u043a\u0438 \u0437\u0430\u0437\u0432\u0438\u0447\u0430\u0439 \u0440\u043e\u0441\u0442\u0443\u0442\u044c \u0443 \u0432\u043e\u043b\u043e\u0433\u0438\u0445 \u0456 \u0437\u043b\u0435\u0433\u043a\u0430 \u0437\u0430\u0442\u0456\u043d\u0435\u043d\u0438\u0445 \u0443\u043c\u043e\u0432\u0430\u0445. \u041a\u0456\u043c\u043d\u0430\u0442\u043d\u0430 \u0444\u0456\u0430\u043b\u043a\u0430 - \u043e\u0434\u043d\u0430 \u0437 \u043d\u0430\u0439\u0443\u043b\u044e\u0431\u043b\u0435\u043d\u0456\u0448\u0438\u0445 \u043a\u0456\u043c\u043d\u0430\u0442\u043d\u0438\u0445 \u043a\u0432\u0456\u0442\u0456\u0432 \u0443 \u0431\u0430\u0433\u0430\u0442\u044c\u043e\u0445 \u0441\u0430\u0434\u0456\u0432\u043d\u0438\u043a\u0456\u0432. \u0417\u0430\u0432\u0434\u044f\u043a\u0438 \u0440\u0456\u0437\u043d\u043e\u043c\u0430\u043d\u0456\u0442\u043d\u043e\u0441\u0442\u0456 \u0437\u0430\u0431\u0430\u0440\u0432\u043b\u0435\u043d\u044c \u0456 \u0434\u043e\u0441\u0442\u0430\u0442\u043d\u0456\u0439 \u043f\u0440\u043e\u0441\u0442\u043e\u0442\u0456 \u0443 \u0434\u043e\u0433\u043b\u044f\u0434\u0456 \u0446\u0456 \u043a\u0432\u0456\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u044e\u0442\u044c\u0441\u044f \u0432\u0435\u043b\u0438\u0447\u0435\u0437\u043d\u043e\u044e \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456\u0441\u0442\u044e. \u0417\u0430 \u043e\u043f\u0438\u0441\u043e\u043c \u043a\u0456\u043c\u043d\u0430\u0442\u043d\u0456 \u0444\u0456\u0430\u043b\u043a\u0438 \u0441\u0445\u043e\u0436\u0456 \u043c\u0456\u0436 \u0441\u043e\u0431\u043e\u044e, \u043e\u0434\u043d\u0430\u043a, \u0454 \u0440\u044f\u0434 \u0432\u0456\u0434\u043c\u0456\u043d\u043d\u043e\u0441\u0442\u0435\u0439. \u0412 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c\u0443 \u0446\u0435 \u0441\u0442\u043e\u0441\u0443\u0454\u0442\u044c\u0441\u044f \u0432\u0456\u0434\u0442\u0456\u043d\u043a\u0456\u0432 \u0441\u0443\u0446\u0432\u0456\u0442\u044c \u0456 \u0444\u043e\u0440\u043c\u0438 \u043b\u0438\u0441\u0442\u044f. \u0420\u043e\u0441\u043b\u0438\u043d\u0430 \u044f\u0432\u043b\u044f\u0454 \u0441\u043e\u0431\u043e\u044e \u0440\u043e\u0437\u0435\u0442\u043a\u0443 \u0437 \u043b\u0438\u0441\u0442\u044f, \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u0435 \u0441\u0442\u0435\u0431\u043b\u043e, \u0443 \u044f\u043a\u043e\u0433\u043e \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0454. \u0412 \u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0456 \u0444\u043e\u0440\u043c\u0443\u044e\u0442\u044c\u0441\u044f \u043d\u0435\u0432\u0435\u043b\u0438\u043a\u0456 \u043a\u0432\u0456\u0442\u043a\u0438, \u0444\u043e\u0440\u043c\u0430 \u0457\u0445 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u043f\u0440\u043e\u0441\u0442\u043e\u044e \u0430\u0431\u043e \u0445\u0438\u043c\u0435\u0440\u043d\u043e\u044e. \u0417\u0430\u0431\u0430\u0440\u0432\u043b\u0435\u043d\u043d\u044f \u043f\u0435\u043b\u044e\u0441\u0442\u043e\u043a \u0456 \u043b\u0438\u0441\u0442\u044f \u0440\u0456\u0437\u043d\u043e\u043c\u0430\u043d\u0456\u0442\u043d\u0435. \u0420\u043e\u0437\u0435\u0442\u043a\u0430 \u043f\u043e \u0444\u043e\u0440\u043c\u0456 \u0440\u0456\u0437\u043d\u0438\u0442\u044c\u0441\u044f \u0432\u0456\u0434 \u043f\u0440\u043e\u0441\u0442\u043e\u0457 \u0434\u043e \u0434\u0443\u0436\u0435 \u043c\u0430\u0445\u0440\u043e\u0432\u043e\u0457. \u042f\u043a\u0449\u043e \u0437\u0430 \u0444\u0456\u0430\u043b\u043a\u0430\u043c\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0434\u043e\u0433\u043b\u044f\u0434\u0430\u0442\u0438, \u0442\u043e \u0432\u043e\u043d\u0438 \u043d\u0435 \u043f\u0440\u0438\u043d\u0435\u0441\u0443\u0442\u044c \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e \u043d\u0456\u044f\u043a\u0438\u0445 \u0442\u0443\u0440\u0431\u043e\u0442 \u0441\u0432\u043e\u0454\u043c\u0443 \u0432\u043b\u0430\u0441\u043d\u0438\u043a\u043e\u0432\u0456. \u0411\u0430\u0433\u0430\u0442\u043e \u043a\u0432\u0456\u0442\u043d\u0438\u043a\u0430\u0440\u0456\u0432 \u0437\u0431\u0438\u0440\u0430\u044e\u0442\u044c \u0446\u0456\u043b\u0456 \u043a\u043e\u043b\u0435\u043a\u0446\u0456\u0457 \u0446\u0438\u0445 \u0435\u0444\u0435\u043a\u0442\u043d\u0438\u0445 \u043a\u0432\u0456\u0442\u043e\u0447\u043e\u043a, \u0442\u0430\u043a \u044f\u043a \u0440\u0456\u0437\u043d\u043e\u0432\u0438\u0434\u0456\u0432 \u0456 \u0441\u043e\u0440\u0442\u0456\u0432 \u0457\u0445 \u0456\u0441\u043d\u0443\u0454 \u0432\u0435\u043b\u0438\u043a\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c. \u041d\u0435\u0437\u0432\u0430\u0436\u0430\u044e\u0447\u0438 \u043d\u0430 \u0442\u0435, \u0449\u043e \u0432 \u043a\u043e\u043b\u0435\u043a\u0446\u0456\u0457 \u043c\u043e\u0436\u0435 \u043d\u0430\u043b\u0456\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044f \u0432\u0435\u043b\u0438\u043a\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0435\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0456\u0432, \u0434\u043e\u0433\u043b\u044f\u0434\u0430\u0442\u0438 \u0437\u0430 \u043d\u0438\u043c\u0438 \u0434\u043e\u0441\u0438\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u043e. \u0421\u043f\u0440\u0430\u0432\u0430 \u0432 \u0442\u043e\u043c\u0443, \u0449\u043e \u0434\u043e\u0433\u043b\u044f\u0434\u0430\u0442\u0438 \u0437\u0430 \u043d\u0438\u043c\u0438 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u043e\u0434\u043d\u0430\u043a\u043e\u0432\u043e, \u0430 \u0446\u0435, \u0431\u0435\u0437\u0443\u043c\u043e\u0432\u043d\u043e, \u0440\u043e\u0431\u0438\u0442\u044c \u0436\u0438\u0442\u0442\u044f \xab\u043a\u043e\u043b\u0435\u043a\u0446\u0456\u043e\u043d\u0435\u0440\u0430\xbb, \u0442\u0430 \u0439 \u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e \u043a\u0432\u0456\u0442\u043d\u0438\u043a\u0430\u0440\u044f \u043d\u0430\u0431\u0430\u0433\u0430\u0442\u043e \u043b\u0435\u0433\u0448\u0438\u043c."}),Object(d.jsxs)("h2",{className:m.a.title,children:["\u0414\u0435\u044f\u043a\u0456 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u043a\u0432\u0456\u0442\u0456\u0432 \u0443 \u043a\u043e\u043b\u0435\u043a\u0446\u0456\u0457 \u043c\u043e\u0436\u0443\u0442\u044c \u043d\u0435 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0442\u0438 \u043d\u0430\u044f\u0432\u043d\u0438\u043c, \u0430 \u0454 \u043b\u0438\u0448\u0435 \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u043e\u043c \u0446\u0432\u0456\u0442\u0456\u043d\u043d\u044f \u0434\u0430\u043d\u043e\u0433\u043e \u0441\u043e\u0440\u0442\u0443.",Object(d.jsx)("span",{className:m.a.span1,children:"\u0429\u043e\u0431 \u0434\u0456\u0437\u043d\u0430\u0442\u0438\u0441\u044c \u0434\u043e\u043a\u043b\u0430\u0434\u043d\u0456\u0448\u0435, \u043d\u0430\u0442\u0438\u0441\u043d\u0438 \u043d\u0430 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f."})]}),b&&Object(d.jsx)("ul",{className:m.a.wrapper,children:y.map((function(e){return Object(d.jsx)("li",{className:m.a.card,onClick:function(){return i.animateScroll.scrollMore(600)},children:Object(d.jsxs)(s.b,{to:"".concat(t,"/").concat(e._id),style:{textDecoration:"none"},children:[Object(d.jsx)("img",{src:e.imgUrl,alt:e.title,className:m.a.img}),Object(d.jsx)("p",{className:m.a.name,children:e.title})]})},e._id)}))}),Object(d.jsx)(o.a,{itemsPerPage:x,totalItems:b.length,paginate:function(e){return O(e)},nextPage:function(){return O((function(e){return e+1}))},prevPage:function(){return O((function(e){return e-1}))}}),Object(d.jsx)(c.b,{path:"".concat(n,"/:violetId"),children:b&&Object(d.jsx)(f,{violets:b})})]})}}}]);
//# sourceMappingURL=5.023c9c56.chunk.js.map