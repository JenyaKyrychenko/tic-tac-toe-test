(this["webpackJsonpiteam-test"]=this["webpackJsonpiteam-test"]||[]).push([[0],{15:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a(6),s=a.n(r),n=(a(15),a(3)),o="STEP_FIRST_PLAYER",l="ADD_FIRST_NAME",i="STEP_SECOND_PLAYER",d="ADD_SECOND_NAME",j="firstPlayer",m=a(1),u=function(e){var t=e.x,a=e.y,r=e.player,s=e.nextStep,o=Object(c.useState)(""),l=Object(n.a)(o,2),i=l[0],d=l[1];return i?Object(m.jsx)("div",{className:"cell",children:i===j?Object(m.jsxs)("div",{className:"cross",children:[Object(m.jsx)("span",{className:"cross__left"}),Object(m.jsx)("span",{className:"cross__right"})]}):Object(m.jsx)("div",{className:"zero",children:Object(m.jsx)("span",{className:"zero__ring"})})}):Object(m.jsx)("div",{onClick:function(){d(r),s(t,a,r)},className:"cell"})},b=a(2),p=a(4),O=function(e){for(var t in e)if(3===e[t].length&&t!==e.name&&t!==e.score)return e.score=parseInt(e.score)+1,console.log(e.steps),{name:e.name,score:e.score,topX:[],middleX:[],bottomX:[],leftY:[],middleY:[],rightY:[],leftDiagonal:[],rightDiagonal:[],win:t};return e},f=function(e,t,a){return 0===e&&a.topX.push(e),1===e&&a.middleX.push(e),2===e&&a.bottomX.push(e),0===t&&a.leftY.push(t),1===t&&a.middleY.push(t),2===t&&a.rightY.push(t),(0===e&&0===t||1===e&&1===t||2===e&&2===t)&&a.leftDiagonal.push("x"),(0===e&&2===t||1===e&&1===t||2===e&&0===t)&&a.rightDiagonal.push("x"),a},h=localStorage.getItem("firstPlayerScore"),y={name:localStorage.getItem("firstPlayerName")||"X",score:h||0,topX:[],middleX:[],bottomX:[],leftY:[],middleY:[],rightY:[],leftDiagonal:[],rightDiagonal:[],steps:0},g=localStorage.getItem("secondPlayerScore"),x={name:localStorage.getItem("secondPlayerName")||"O",score:g||0,topX:[],middleX:[],bottomX:[],leftY:[],middleY:[],rightY:[],leftDiagonal:[],rightDiagonal:[]},S=function(){var e=Object(c.useState)(j),t=Object(n.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(0),p=Object(n.a)(s,2),O=p[0],f=p[1],h=Object(b.b)(),y=Object(b.c)((function(e){return e.firstPlayer})),g=Object(b.c)((function(e){return e.secondPlayer}));(y.win||g.win)&&(window.location.reload(),localStorage.setItem("firstPlayerScore",y.score),localStorage.setItem("secondPlayerScore",g.score));var x=function(e,t,a){a===j?(h({type:o,payload:{x:e,y:t}}),r("secondPlayer")):(h(function(e){return{type:i,payload:e}}({x:e,y:t})),r(j)),f(O+1)};return 9!==O||y.win||g.win||(window.location.reload(),alert("\u041d\u0438\u0447\u044c\u044f!")),Object(c.useEffect)((function(){if(!localStorage.getItem("firstPlayerScore")){var e=prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0438\u0433\u0440\u043e\u043a\u0430:"),t=prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u0438\u0433\u0440\u043e\u043a\u0430:");localStorage.setItem("firstPlayerName",e),localStorage.setItem("secondPlayerName",t),h({type:l,payload:{name:e||"X"}}),h(function(e){return{type:d,payload:e}}({name:t||"O"}))}}),[h]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"game-field",children:[[["","",""],["","",""],["","",""]].map((function(e,t){return e.map((function(e,c){return Object(m.jsx)(u,{player:a,nextStep:x,x:t,y:c},t+""+c)}))})),Object(m.jsx)("span",{className:"border-top"}),Object(m.jsx)("span",{className:"border-left"}),Object(m.jsx)("span",{className:"border-right"}),Object(m.jsx)("span",{className:"border-bottom"}),Object(m.jsx)("span",{className:"win ".concat(y.win," ").concat(g.win)})]})})},N=function(){var e=Object(c.useState)(!0),t=Object(n.a)(e,2),a=t[0],r=t[1],s=Object(b.c)((function(e){return e.firstPlayer})),o=Object(b.c)((function(e){return e.secondPlayer}));return Object(m.jsxs)("div",{className:"score",children:[Object(m.jsx)("h2",{onClick:function(){r(!a)},className:"score__title",children:"Score"}),Object(m.jsx)("div",{className:"first-player",children:Object(m.jsxs)("h3",{className:"first-player__score",children:[s.name,": ",s.score]})}),Object(m.jsx)("div",{className:"second-player",children:Object(m.jsxs)("h3",{className:"second-player__score",children:[o.name,": ",o.score]})})]})},v=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{onClick:function(){window.location.reload(),localStorage.clear()},children:"Reset Score"}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(S,{}),Object(m.jsx)(N,{})]})]})},P=a(5),_=Object(P.combineReducers)({firstPlayer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:e.steps=e.steps+1;var a=t.payload.x,c=t.payload.y,r=f(a,c,e),s=O(r);return s;case l:return Object(p.a)(Object(p.a)({},e),{},{name:t.payload.name});default:return e}},secondPlayer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:var a=t.payload.x,c=t.payload.y,r=f(a,c,e),s=O(r);return s;case d:return Object(p.a)(Object(p.a)({},e),{},{name:t.payload.name});default:return e}}}),w=a(10),D=Object(P.createStore)(_,Object(w.composeWithDevTools)());s.a.render(Object(m.jsx)(b.a,{store:D,children:Object(m.jsx)(v,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.98e33f7f.chunk.js.map