(this["webpackJsonpkanban-project"]=this["webpackJsonpkanban-project"]||[]).push([[0],{22:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var i=n(3),a=n.n(i),s=n(12),c=n.n(s),r=(n(32),n(21)),o=n(27),l=n(9),d=(n(22),n(16),n(33),n(14)),u=(n(34),n(48)),j=n(59),m=n(50),b=n(51),O=n(52),h=n(53),p=n(54),x=n(49),f=n(55),k=n(2);var v=function(t){var e,n=t.task,a=t.changeTaskStatus,s=t.changeTaskPriority,c=t.onTaskDelete,r=t.editTask,o=Object(i.useState)(!1),v=Object(l.a)(o,2),g=v[0],y=v[1],N=Object(i.useState)(!1),D=Object(l.a)(N,2),S=D[0],T=D[1],C=Object(i.useState)(n.name),E=Object(l.a)(C,2),M=E[0],R=E[1],I=Object(i.useState)(n.taskDescription),P=Object(l.a)(I,2),w=P[0],L=P[1];return Object(k.jsx)("div",{className:"container-fluid",children:Object(k.jsxs)("div",{className:"card",children:[Object(k.jsx)("span",{className:"card-header",children:Object(k.jsxs)(u.a,(e={className:"alert",color:"primary"},Object(d.a)(e,"color",["danger","warning","primary"][n.priority]),Object(d.a)(e,"children",["Priority:",n.priority]),e))}),Object(k.jsxs)("div",{className:"card-body",children:[Object(k.jsxs)("div",{children:[Object(k.jsx)("h5",{className:"card-title",children:n.name}),Object(k.jsx)("p",{className:"card-text",children:n.taskDescription})]}),Object(k.jsx)("hr",{}),Object(k.jsx)("div",{className:"trashIcon",type:"button",onClick:function(){return T(!0)},children:Object(k.jsx)(x.a,{})}),Object(k.jsxs)(j.a,{isOpen:S,children:[Object(k.jsx)(m.a,{children:"Edit Task: "}),Object(k.jsxs)(b.a,{children:[Object(k.jsx)(O.a,{className:"mb-3",type:"text",value:M,onChange:function(t){R(t.target.value)}}),Object(k.jsx)(O.a,{className:"mb-3",type:"text",value:w,onChange:function(t){L(t.target.value)}}),Object(k.jsxs)("select",{className:"form-select","aria-label":"Default select example",children:[Object(k.jsx)("option",{selected:!0,children:"Priority"}),Object(k.jsx)("option",{value:"0",children:"High"}),Object(k.jsx)("option",{value:"1",children:"Medium"}),Object(k.jsx)("option",{value:"2",children:"Low"})]})]}),Object(k.jsxs)(h.a,{children:[Object(k.jsx)(p.a,{className:"ml-2",color:"primary",onClick:function(){r(n.id,M,w),T(!1)},children:"Save"})," ",Object(k.jsx)(p.a,{color:"secondary",onClick:function(){return T(!1)},children:"Cancel"})]})]}),Object(k.jsx)("div",{className:"trashIcon ml-2",type:"button",onClick:function(){return y(!0)},children:Object(k.jsx)(f.a,{})}),Object(k.jsxs)(j.a,{isOpen:g,children:[Object(k.jsx)(m.a,{children:"Are you sure you want to delete?"}),Object(k.jsxs)(b.a,{children:[Object(k.jsx)("h5",{children:n.name}),Object(k.jsx)("p",{children:n.taskDescription})]}),Object(k.jsxs)(h.a,{children:[Object(k.jsx)(p.a,{className:"ml-2",color:"primary",onClick:function(){return c(n.id)},children:"Delete"})," ",Object(k.jsx)(p.a,{color:"secondary",onClick:function(){return y(!1)},children:"Cancel"})]})]})]}),Object(k.jsxs)("div",{className:"card-footer",children:[Object(k.jsxs)("div",{className:"left-right-Btn",children:["TO DO"!==n.status&&Object(k.jsx)("button",{className:"btn btn-outline-dark btn-sm",onClick:function(){return a(n.id,"left")},children:"\u2190"}),"DONE"!==n.status&&Object(k.jsx)("button",{className:"btn btn-outline-dark btn-sm",onClick:function(){return a(n.id,"right")},children:"\u2192"})]}),Object(k.jsxs)("div",{className:"up-down-btn",children:[Object(k.jsx)("button",{className:"btn btn-outline-dark btn-sm ",onClick:function(){return s(n.id,"up")},children:"\u2191"}),Object(k.jsx)("button",{className:"btn btn-outline-dark btn-sm",onClick:function(){return s(n.id,"down")},children:"\u2193"})]})]})]})})},g=n(56);var y=function(t){var e=t.tasks,n=t.status,i=t.changeTaskStatus,a=t.changeTaskPriority,s=t.onTaskDelete,c=t.editTask;return Object(k.jsx)("div",{children:Object(k.jsxs)(g.a,{className:"column",children:[Object(k.jsx)("h5",{children:n}),e.filter((function(t){return t.status===n})).sort((function(t,e){return t.priority-e.priority})).map((function(t){return Object(k.jsx)(v,{task:t,priority:t.priority,changeTaskStatus:i,changeTaskPriority:a,onTaskDelete:s,editTask:c},t.id)}))]})})},N=n(58),D=(n(45),n(57));var S=function(t){var e=t.addNewTask,n=t.priority,a=Object(i.useState)(!1),s=Object(l.a)(a,2),c=s[0],r=s[1],o=Object(i.useState)(!1),d=Object(l.a)(o,2),u=d[0],j=d[1],m=Object(i.useState)(""),b=Object(l.a)(m,2),h=b[0],p=b[1],x=Object(i.useState)(""),f=Object(l.a)(x,2),v=f[0],g=f[1],y=function(){p(""),r(!1),j(!1)};return Object(k.jsx)("div",{className:"App",children:Object(k.jsxs)(D.a,{className:"create-inputs",children:[!c&&Object(k.jsx)("button",{type:"button",className:"btn btn-primary btn-create mb-3",onClick:function(){r(!0)},children:"Create task"}),c&&Object(k.jsxs)("form",{children:[Object(k.jsx)("div",{className:"input-group mb-3",children:Object(k.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter task",onChange:function(t){j(t.target.value.length>4),p(t.target.value)},value:h})}),Object(k.jsx)("div",{className:"input-group mb-3",children:Object(k.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter task description",onChange:function(t){j(t.target.value.length>4),g(t.target.value)},value:v})}),Object(k.jsx)("div",{children:Object(k.jsxs)(O.a,{placeholder:"Hello",type:"select",className:"mb-4",onChange:n,children:[Object(k.jsx)("option",{value:"0",children:"High"}),Object(k.jsx)("option",{value:"1",children:"Medium"}),Object(k.jsx)("option",{value:"2",children:"Low"})]})}),Object(k.jsxs)("div",{className:"create-btn",children:[Object(k.jsx)("button",{type:"submit",className:"btn btn-primary btn-submit",disabled:!u,onClick:function(t){t.preventDefault(),e(h,v,n),y()},children:"Submit"}),Object(k.jsx)("button",{className:"btn btn-primary create-btn",onClick:y,children:"Cancel"})]})]})]})})};var T=function(){var t=[{id:Math.random(),name:"First todo",priority:0,status:"TO DO",taskDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"},{id:Math.random(),name:"Third todo",priority:2,status:"IN PROGRESS",taskDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"},{id:Math.random(),name:"Second todo",priority:1,status:"REVIEW",taskDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"},{id:Math.random(),name:"Fourth todo",priority:0,status:"DONE",taskDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"},{id:Math.random(),name:"Fifth todo",priority:1,status:"TO DO",taskDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"},{id:Math.random(),name:"Sixth todo",priority:1,status:"IN PROGRESS",taskDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}],e=Object(i.useState)(t),n=Object(l.a)(e,2),a=n[0],s=n[1],c=["TO DO","IN PROGRESS","REVIEW","DONE"],d=[{id:Math.random(),title:"TO DO",status:"TO DO"},{id:Math.random(),title:"IN PROGRESS",status:"IN PROGRESS"},{id:Math.random(),title:"REVIEW",status:"REVIEW"},{id:Math.random(),title:"DONE",status:"DONE"}],u=[0,1,2],j=function(t,e){var n=a.map((function(n){return n.id===t&&("right"===e&&(n.status=c[c.indexOf(n.status)+1]),"left"===e&&(n.status=c[c.indexOf(n.status)-1])),n}));s(n)},m=function(e,n){var i=t.map((function(t){return t.id===e&&("up"===n&&(t.priority=u[u.indexOf(t.priority)-1]),"down"===n&&(t.priority=u[u.indexOf(t.priority)+1])),t}));s(i)},b=function(t){console.log(t);var e=a.filter((function(e){return e.id!==t}));s(e)},O=function(t,e,n){console.log(t,e);var i=a.map((function(i){return i.id===t?Object(r.a)(Object(r.a)({},i),{},{name:e,taskDescription:n}):i}));s(i)};return Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{className:"title",children:"Kanban"}),Object(k.jsxs)("div",{class:"container-lg",children:[Object(k.jsx)(S,{addNewTask:function(t,e,n){var i={id:Math.random(),name:t,priority:n,status:"TO DO",taskDescription:e},c=[].concat(Object(o.a)(a),[i]);s(c)}}),Object(k.jsx)("hr",{}),Object(k.jsx)(N.a,{children:d.map((function(t){return Object(k.jsx)(y,{tasks:a,status:t.status,changeTaskStatus:j,changeTaskPriority:m,onTaskDelete:b,editTask:O},t.id)}))})]})]})},C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),i(t),a(t),s(t),c(t)}))};c.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(T,{})}),document.getElementById("root")),C()}},[[46,1,2]]]);
//# sourceMappingURL=main.47787c22.chunk.js.map