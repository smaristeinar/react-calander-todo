(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{21:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(13),a=n.n(o),s=(n(21),n(16)),i=n(7),l=n(3),d=n(2),u=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(d.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};u.defaultProps={color:"steelblue",text:"button"};var j=u,b=function(e){var t=e.onAdd,n=e.showAddTask,c=e.onPrint;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:"Task Tracker"}),Object(d.jsx)(j,{onClick:t,color:n?"red":"green",text:n?"Close":"Add"}),Object(d.jsx)(j,{onClick:c,color:"blue",text:"Show all"})]})},f=(n(23),n(15)),O=function(e){var t=e.task,n=e.onDelete,c=e.onReminde;return Object(d.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(d.jsxs)("h3",{children:[t.text,Object(d.jsx)(f.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(d.jsxs)("p",{children:["date: ",t.day]})]})},m=function(e){var t=e.tasks,n=e.onDelete,c=e.onReminde;e.date,e.seeAll;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(O,{task:e,onDelete:n,onReminde:c},e.id)}))})},h=function(e){var t=e.onAdd,n=e.date,r=Object(c.useState)(""),o=Object(l.a)(r,2),a=o[0],s=o[1],i=Object(c.useState)(!1),u=Object(l.a)(i,2),j=u[0],b=u[1];return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,reminder:j}),s(""),b(!1)):alert("Pleas add a task")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Task"}),Object(d.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(d.jsx)("div",{className:"form-controle",children:Object(d.jsx)("p",{children:"Selected Date: ".concat(n)})}),Object(d.jsxs)("div",{className:"form-control form-control-check",children:[Object(d.jsx)("label",{children:"Set Reminder"}),Object(d.jsx)("input",{type:"checkbox",checked:j,value:j,onChange:function(e){return b(e.currentTarget.checked)}})]}),Object(d.jsx)("input",{className:"btn btn-block",type:"submit",value:"Save Task"})]})},x=n(14),k=(n(26),n(4)),g=n.n(k);var v=function(){var e=Object(c.useState)(new Date),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(!1),a=Object(l.a)(o,2),u=a[0],j=a[1],f=Object(c.useState)(!0),O=Object(l.a)(f,2),k=O[0],v=O[1],S=Object(c.useState)((function(){return localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]})),p=Object(l.a)(S,2),C=p[0],N=p[1];Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(C))}),[C]);var y="MMM Do YYYY",D=function(e){N(C.filter((function(t){return t.id!==e})))},T=function(e){N(C.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t}))),localStorage.setItem("todos",JSON.stringify(C))};return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(b,{onPrint:function(){return v(!0),void console.log(g()(n).format("MMM Do YYYY"))},onAdd:function(){return j(!u)},showAddTask:u}),Object(d.jsx)(x.a,{className:"container calander",onChange:function(e){r(e)},value:n,onClickDay:function(){v(!1)},tileContent:function(e){var t=e.date;if(null!=C&&C.find((function(e){return e.day===g()(t).format(y)})))return Object(d.jsx)("div",{className:"calanderToDoMarker2",children:Object(d.jsx)("p",{className:"calanderToDoMarker",children:C.filter((function(e){return e.day===g()(t).format(y)})).length})})}}),u&&Object(d.jsx)(h,{date:g()(n).format(y),onAdd:function(e){console.log(e);var t=C.length+1,c=g()(n).format(y),r=Object(i.a)({id:t,day:c},e);N([].concat(Object(s.a)(C),[r])),localStorage.setItem("todos",JSON.stringify(C))}}),k&&C.length>0?Object(d.jsx)(m,{tasks:C,onDelete:D,onReminde:T}):k?"no tasks to show":Object(d.jsx)(m,{tasks:C.filter((function(e){return e.day===g()(n).format(y)})),onDelete:D,onReminde:T})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),S()}},[[29,1,2]]]);
//# sourceMappingURL=main.ffe243a8.chunk.js.map