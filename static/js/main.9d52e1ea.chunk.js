(this["webpackJsonpbasic-app"]=this["webpackJsonpbasic-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(6),r=a.n(c),o=(a(13),a(14),a(4)),l=a.n(o),i=a(7),j=a(2),u=a(5),d=a(8),m=a(0),p=function(){var e,t,a=Object(n.useState)({name:"",email:"",phone:"",address:"",message:""}),s=Object(d.a)(a,2),c=s[0],r=s[1],o=function(a){e=a.target.name,t=a.target.value,r(Object(u.a)(Object(u.a)({},c),{},Object(j.a)({},e,t)))},p=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n,s,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=c.name,n=c.email,s=c.phone,o=c.address,i=c.message,!(a&&n&&s&&o&&i)){e.next=9;break}return e.next=5,fetch("https://reactyobetubeform-default-rtdb.firebaseio.com/yobetubeform.json",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,email:n,phone:s,address:o,message:i})});case 5:e.sent&&(r({name:"",email:"",phone:"",address:"",message:""}),alert("Data Stored Successfully")),e.next=10;break;case 9:alert("please fill all the data");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"wrap_contact",children:[Object(m.jsx)("h1",{children:"Contact Us form Connect With firebase"}),Object(m.jsxs)("form",{method:"POST",children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Name"}),Object(m.jsx)("input",{type:"text",name:"name",value:c.name,placeholder:"Enter your name",autocomplete:"off",onChange:o}),Object(m.jsx)("span",{className:"focus-input"})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Email"}),Object(m.jsx)("input",{type:"text",name:"email",value:c.email,placeholder:"Enter your email",autocomplete:"off",onChange:o}),Object(m.jsx)("span",{className:"focus-input"})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Mobile No"}),Object(m.jsx)("input",{type:"text",name:"phone",value:c.phone,placeholder:"Enter your phone no",autocomplete:"off",onChange:o}),Object(m.jsx)("span",{className:"focus-input"})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Address"}),Object(m.jsx)("input",{type:"text",name:"address",value:c.address,placeholder:"Enter your Address",autocomplete:"off",onChange:o}),Object(m.jsx)("span",{className:"focus-input"})]}),Object(m.jsxs)("div",{className:"form-group textArea",children:[Object(m.jsx)("label",{children:"Address"}),Object(m.jsx)("textarea",{name:"message",value:c.message,placeholder:"Enter your Address",autocomplete:"off",onChange:o}),Object(m.jsx)("span",{className:"focus-input"})]}),Object(m.jsx)("button",{onClick:p,children:"Submit"})]})]})})})};var b=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(p,{})})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(b,{})}),document.getElementById("root")),h()}},[[17,1,2]]]);
//# sourceMappingURL=main.9d52e1ea.chunk.js.map