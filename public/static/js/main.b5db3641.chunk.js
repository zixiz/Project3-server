(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(51)},38:function(e,t,a){},41:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),c=a.n(s),i=(a(37),a(38),a(2)),l=a.n(i),o=a(14),u=a(8),m=a(9),p=a(12),d=a(10),h=a(11),f=(a(41),a(17)),v=a(15),E=a(22),b=function(e){return function(){var t=Object(o.a)(l.a.mark(function t(a){var n,r,s;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==(n=e).username&&""!==n.pass){t.next=5;break}a({type:"LOGIN_ERROR",data:null}),t.next=12;break;case 5:return t.next=7,fetch("http://localhost:3000/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 7:return r=t.sent,t.next=10,r.json();case 10:s=t.sent,a({type:"LOGIN_STATUS",data:s});case 12:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},g=a(4),N=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",username:"",pass:"",repeat:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"handleText",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"sendToRegister",value:function(){this.props.registerAction(this.state)}},{key:"render",value:function(){return r.a.createElement("div",{className:"registerstyle"},r.a.createElement("div",{className:"limiter"},r.a.createElement("div",{className:"container-login100"},r.a.createElement("div",{className:"login100-more"}),r.a.createElement("div",{className:"wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50"},r.a.createElement("form",{className:"login100-form validate-form"}),r.a.createElement("span",{className:"login100-form-title p-b-59"},"Sign Up"),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Name is required"},r.a.createElement("span",{className:"label-input100"},"Full Name"),r.a.createElement("input",{required:!0,onChange:this.handleText.bind(this),className:"input100",type:"text",name:"name",placeholder:"Name..."}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Username is required"},r.a.createElement("span",{className:"label-input100"},"Username"),r.a.createElement("input",{required:!0,onChange:this.handleText.bind(this),className:"input100",type:"text",name:"username",placeholder:"Username..."}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Password is required"},r.a.createElement("span",{className:"label-input100"},"Password"),r.a.createElement("input",{required:!0,onChange:this.handleText.bind(this),className:"input100",type:"password",name:"pass",placeholder:"*************"}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Repeat Password is required"},r.a.createElement("span",{className:"label-input100"},"Repeat Password"),r.a.createElement("input",{required:!0,onChange:this.handleText.bind(this),className:"input100",type:"password",name:"repeat",placeholder:"*************"}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"container-login100-form-btn"},r.a.createElement("div",{className:"wrap-login100-form-btn"},r.a.createElement("div",{className:"login100-form-bgbtn"}),r.a.createElement("button",{onClick:this.sendToRegister.bind(this),className:"login100-form-btn"},"Sign Up"))),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Repeat Password is required"},this.props.msg)))))}}]),t}(n.Component),O=Object(g.b)(function(e){return{msg:e.msg}},function(e){return{registerAction:function(t){return e(function(e){return function(){var t=Object(o.a)(l.a.mark(function t(a){var n,r,s;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==(n=e).name&&""!==n.username&&""!==n.pass&&""!==n.repeat){t.next=6;break}console.log("all mendatory"),a({type:"ALL_INPUT_MANDATORY",data:null}),t.next=18;break;case 6:if(n.pass===n.repeat){t.next=11;break}console.log("The password is incorrect"),a({type:"INCORRECTSECOND_PASS",data:null}),t.next=18;break;case 11:return t.next=13,fetch("http://localhost:3000/register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 13:return r=t.sent,t.next=16,r.json();case 16:s=t.sent,a({type:"REGISTERED",data:s.msg});case 18:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(N),w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",pass:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"handleTextforlogin",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"sendToLogin",value:function(){this.props.LoginAction(this.state)}},{key:"render",value:function(){return r.a.createElement("div",{className:"registerstyle"},r.a.createElement("div",{className:"limiter"},r.a.createElement("div",{className:"container-login100"},r.a.createElement("div",{className:"login100-more"}),r.a.createElement("div",{className:"wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50"},r.a.createElement("form",{className:"login100-form validate-form"}),r.a.createElement("span",{className:"login100-form-title p-b-59"},"Login"),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Username is required"},r.a.createElement("span",{className:"label-input100"},"Username"),r.a.createElement("input",{required:!0,onChange:this.handleTextforlogin.bind(this),className:"input100",type:"text",name:"username",placeholder:"Username..."}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Password is required"},r.a.createElement("span",{className:"label-input100"},"Password"),r.a.createElement("input",{required:!0,onChange:this.handleTextforlogin.bind(this),className:"input100",type:"password",name:"pass",placeholder:"*************"}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"container-login100-form-btn"},r.a.createElement("div",{className:"wrap-login100-form-btn"},r.a.createElement("div",{className:"login100-form-bgbtn"}),r.a.createElement("button",{onClick:this.sendToLogin.bind(this),className:"login100-form-btn"},"Login"))),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Repeat Password is required"},this.props.msg)))))}}]),t}(n.Component),j=Object(g.b)(function(e){return{msg:e.msg}},function(e){return{LoginAction:function(t){return e(b(t))}}})(w),y=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"sendToLogin",value:function(){this.props.LoginAction(this.state)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"admin page"))}}]),t}(n.Component),x=Object(g.b)(function(e){return{msg:e.msg}},function(e){return{LoginAction:function(){return e(b())}}})(y),k=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.DataUser()}},{key:"sendToLogout",value:function(){this.props.Logout()}},{key:"render",value:function(){if("user"==this.props.role)return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-4"},r.a.createElement("h2",null,"VacationHunter")),r.a.createElement("div",{className:"col-4"},r.a.createElement("h3",null,"Hello ",this.props.clientName)),r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{onClick:this.sendToLogout.bind(this),className:"btn btn-primary"},"Logout")))),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col"})))}}]),t}(n.Component),T=Object(g.b)(function(e){return{role:e.role,clientName:e.clientName,id:e.id,userName:e.userName,vacations:e.vacations,vacationOnFollow:e.vacationOnFollow,vacationsUnFollow:e.vacationsUnFollow}},function(e){return{Logout:function(){return e(function(){var e=Object(o.a)(l.a.mark(function e(t){var a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/logout");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t({type:"LOGOUT",data:n});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},DataUser:function(){return e(function(){var e=Object(o.a)(l.a.mark(function e(t){var a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/user");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t({type:"UserData",data:n});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},AddFollow:function(t){return e((a=t,function(){var e=Object(o.a)(l.a.mark(function e(t){var n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/addfollow?vacationId=".concat(a));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,t({type:"ADD_FOLLOW",data:r});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()));var a}}})(k),S=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.props.CheckSession();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.props.role?"user"===this.props.role?r.a.createElement("div",null,r.a.createElement(T,null)):"admin"===this.props.role?r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(f.b,{to:"/admin"},"admin")))),r.a.createElement(v.a,{path:"/admin",exact:!0,component:x})))):void 0:r.a.createElement("div",{className:"App"},r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(f.b,{to:"/"},"Login")),r.a.createElement("li",null,r.a.createElement(f.b,{to:"/register"},"Register")))),r.a.createElement(v.a,{path:"/",exact:!0,component:j}),r.a.createElement(v.a,{path:"/register/",component:O}))))}}]),t}(n.Component),L=Object(g.b)(function(e){return{role:e.role}},function(e){return{CheckSession:function(){return e(function(){var e=Object(o.a)(l.a.mark(function e(t){var a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/checksession");case 2:return a=e.sent,e.next=5,a.json();case 5:!0===(n=e.sent).success?t({type:"CHECK_SESSION",data:n}):t({type:"SESSION_FAILED",data:null});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}}})(S);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C={vacationOnFollow:[],vacationsUnFollow:[]},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCORRECTSECOND_PASS":return Object.assign({},e,{msg:"The password is incorrect"});case"ALL_INPUT_MANDATORY":return Object.assign({},e,{msg:"All inputs are mandatory"});case"LOGIN_ERROR":return Object.assign({},e,{msg:"Username and password are mandetory"});case"REGISTERED":return Object.assign({},e,{msg:t.data});case"LOGIN_STATUS":return Object.assign({},e,{role:t.data.role,clientName:t.data.name,id:t.data.id,userName:t.data.username});case"CHECK_SESSION":return Object.assign({},e,{id:t.data.id,role:t.data.role,clientName:t.data.name,userName:t.data.username});case"SESSION_FAILED":return Object.assign({},e,{role:"",clientName:""});case"LOGOUT":return Object.assign({},e,{role:t.data.role});case"UserData":return Object.assign({},e,{id:t.data.id,role:t.data.role,clientName:t.data.clientName,userName:t.data.userName,vacationOnFollow:t.data.vacationsOnFollow,vacationsUnFollow:t.data.vacationsUnFollow});default:return e}},U=a(19),R=a(31),I=Object(U.c)(A,Object(U.a)(R.a));c.a.render(r.a.createElement(g.a,{store:I},r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.b5db3641.chunk.js.map