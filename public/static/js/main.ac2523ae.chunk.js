(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,a,t){e.exports=t(51)},38:function(e,a,t){},41:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(28),c=t.n(s),l=(t(37),t(38),t(3)),i=t.n(l),o=t(14),u=t(8),m=t(9),p=t(12),d=t(10),h=t(11),f=(t(41),t(17)),E=t(15),v=t(22),g=function(e){return function(){var a=Object(o.a)(i.a.mark(function a(t){var n,r,s;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(""!==(n=e).username&&""!==n.pass){a.next=5;break}t({type:"LOGIN_ERROR",data:null}),a.next=12;break;case 5:return a.next=7,fetch("http://localhost:3000/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 7:return r=a.sent,a.next=10,r.json();case 10:s=a.sent,t({type:"LOGIN_STATUS",data:s});case 12:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},b=t(4),N=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",username:"",pass:"",repeat:""},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"handleText",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"sendToRegister",value:function(){this.props.registerAction(this.state)}},{key:"render",value:function(){return r.a.createElement("div",{className:"registerstyle"},r.a.createElement("div",{className:"limiter"},r.a.createElement("div",{className:"container-login100"},r.a.createElement("div",{className:"login100-more"}),r.a.createElement("div",{className:"wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50"},r.a.createElement("form",{className:"login100-form validate-form"}),r.a.createElement("span",{className:"login100-form-title p-b-59"},"Sign Up"),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Name is required"},r.a.createElement("span",{className:"label-input100"},"Full Name"),r.a.createElement("input",{required:!0,onChange:this.handleText.bind(this),className:"input100",type:"text",name:"name",placeholder:"Name..."}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Username is required"},r.a.createElement("span",{className:"label-input100"},"Username"),r.a.createElement("input",{required:!0,onChange:this.handleText.bind(this),className:"input100",type:"text",name:"username",placeholder:"Username..."}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Password is required"},r.a.createElement("span",{className:"label-input100"},"Password"),r.a.createElement("input",{required:!0,onChange:this.handleText.bind(this),className:"input100",type:"password",name:"pass",placeholder:"*************"}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Repeat Password is required"},r.a.createElement("span",{className:"label-input100"},"Repeat Password"),r.a.createElement("input",{required:!0,onChange:this.handleText.bind(this),className:"input100",type:"password",name:"repeat",placeholder:"*************"}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"container-login100-form-btn"},r.a.createElement("div",{className:"wrap-login100-form-btn"},r.a.createElement("div",{className:"login100-form-bgbtn"}),r.a.createElement("button",{onClick:this.sendToRegister.bind(this),className:"login100-form-btn"},"Sign Up"))),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Repeat Password is required"},this.props.msg)))))}}]),a}(n.Component),O=Object(b.b)(function(e){return{msg:e.msg}},function(e){return{registerAction:function(a){return e(function(e){return function(){var a=Object(o.a)(i.a.mark(function a(t){var n,r,s;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(""!==(n=e).name&&""!==n.username&&""!==n.pass&&""!==n.repeat){a.next=6;break}console.log("all mendatory"),t({type:"ALL_INPUT_MANDATORY",data:null}),a.next=18;break;case 6:if(n.pass===n.repeat){a.next=11;break}console.log("The password is incorrect"),t({type:"INCORRECTSECOND_PASS",data:null}),a.next=18;break;case 11:return a.next=13,fetch("http://localhost:3000/register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 13:return r=a.sent,a.next=16,r.json();case 16:s=a.sent,t({type:"REGISTERED",data:s.msg});case 18:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}(a))}}})(N),y=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={username:"",pass:""},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"handleTextforlogin",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"sendToLogin",value:function(){this.props.LoginAction(this.state)}},{key:"render",value:function(){return r.a.createElement("div",{className:"registerstyle"},r.a.createElement("div",{className:"limiter"},r.a.createElement("div",{className:"container-login100"},r.a.createElement("div",{className:"login100-more"}),r.a.createElement("div",{className:"wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50"},r.a.createElement("form",{className:"login100-form validate-form"}),r.a.createElement("span",{className:"login100-form-title p-b-59"},"Login"),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Username is required"},r.a.createElement("span",{className:"label-input100"},"Username"),r.a.createElement("input",{required:!0,onChange:this.handleTextforlogin.bind(this),className:"input100",type:"text",name:"username",placeholder:"Username..."}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Password is required"},r.a.createElement("span",{className:"label-input100"},"Password"),r.a.createElement("input",{required:!0,onChange:this.handleTextforlogin.bind(this),className:"input100",type:"password",name:"pass",placeholder:"*************"}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"container-login100-form-btn"},r.a.createElement("div",{className:"wrap-login100-form-btn"},r.a.createElement("div",{className:"login100-form-bgbtn"}),r.a.createElement("button",{onClick:this.sendToLogin.bind(this),className:"login100-form-btn"},"Login"))),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Repeat Password is required"},this.props.msg)))))}}]),a}(n.Component),w=Object(b.b)(function(e){return{msg:e.msg}},function(e){return{LoginAction:function(a){return e(g(a))}}})(y),j=function(e){function a(){return Object(u.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"sendToLogin",value:function(){this.props.LoginAction(this.state)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"admin page"))}}]),a}(n.Component),k=Object(b.b)(function(e){return{msg:e.msg}},function(e){return{LoginAction:function(){return e(g())}}})(j),x=function(e){function a(){return Object(u.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.DataUser()}},{key:"sendToLogout",value:function(){this.props.Logout()}},{key:"FollowChange",value:function(e,a){!0===a.target.checked?(console.log("checked on"),console.log(e)):console.log("remove checked")}},{key:"render",value:function(){var e=this;if("user"==this.props.role)return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-4"},r.a.createElement("h2",null,"VacationHunter")),r.a.createElement("div",{className:"col-4"},r.a.createElement("h3",null,"Hello ",this.props.clientName)),r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{onClick:this.sendToLogout.bind(this),className:"btn btn-primary"},"Logout")))),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col"},this.props.vacations.map(function(a){return r.a.createElement("div",{className:"card",style:{width:"18rem"}},r.a.createElement("img",{class:"card-img-top",src:a.image}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},a.destination),r.a.createElement("p",{className:"card-text"},a.description),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("p",null,r.a.createElement("label",{className:"fas fa-plane-departure plane-icon"}),a.start_date),r.a.createElement("p",null,r.a.createElement("label",{className:"fas fa-plane-arrival plane-icon"}),a.end_date)),r.a.createElement("li",{className:"list-group-item"},a.price,r.a.createElement("label",{className:"fas fa-dollar-sign dollar-icon"})),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("input",{checked:!1,onChange:e.FollowChange.bind(e,a.id),type:"checkbox"}),r.a.createElement("label",{className:"fas fa-eye eye-icon"},a.followers)))))}))))}}]),a}(n.Component),T=Object(b.b)(function(e){return{role:e.role,clientName:e.clientName,id:e.id,vacations:e.vacations}},function(e){return{Logout:function(){return e(function(){var e=Object(o.a)(i.a.mark(function e(a){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/logout");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a({type:"LOGOUT",data:n});case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}())},DataUser:function(){return e(function(){var e=Object(o.a)(i.a.mark(function e(a){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/user");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a({type:"UserData",data:n});case 8:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}())}}})(x),S=function(e){function a(){return Object(u.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.props.CheckSession();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.props.role?"user"===this.props.role?r.a.createElement("div",null,r.a.createElement(T,null)):"admin"===this.props.role?r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(f.b,{to:"/admin"},"admin")))),r.a.createElement(E.a,{path:"/admin",exact:!0,component:k})))):void 0:r.a.createElement("div",{className:"App"},r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(f.b,{to:"/"},"Login")),r.a.createElement("li",null,r.a.createElement(f.b,{to:"/register"},"Register")))),r.a.createElement(E.a,{path:"/",exact:!0,component:w}),r.a.createElement(E.a,{path:"/register/",component:O}))))}}]),a}(n.Component),C=Object(b.b)(function(e){return{role:e.role}},function(e){return{CheckSession:function(){return e(function(){var e=Object(o.a)(i.a.mark(function e(a){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/checksession");case 2:return t=e.sent,e.next=5,t.json();case 5:!0===(n=e.sent).success?a({type:"CHECK_SESSION",data:n}):a({type:"SESSION_FAILED",data:null});case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}())}}})(S);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L={vacations:[]},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"INCORRECTSECOND_PASS":return Object.assign({},e,{msg:"The password is incorrect"});case"ALL_INPUT_MANDATORY":return Object.assign({},e,{msg:"All inputs are mandatory"});case"LOGIN_ERROR":return Object.assign({},e,{msg:"Username and password are mandetory"});case"REGISTERED":return Object.assign({},e,{msg:a.data});case"LOGIN_STATUS":return Object.assign({},e,{role:a.data.role,clientName:a.data.name,id:a.data.id,userName:a.data.username});case"CHECK_SESSION":return Object.assign({},e,{id:a.data.id,role:a.data.role,clientName:a.data.name,userName:a.data.username});case"SESSION_FAILED":return Object.assign({},e,{role:"",clientName:""});case"LOGOUT":return Object.assign({},e,{role:a.data.role});case"UserData":return Object.assign({},e,{id:a.data.userData.id,role:a.data.userData.role,clientName:a.data.userData.clientName,userName:a.data.userData.userName,vacations:a.data.userData.vacations});default:return e}},R=t(19),D=t(31),U=Object(R.c)(A,Object(R.a)(D.a));c.a.render(r.a.createElement(b.a,{store:U},r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.ac2523ae.chunk.js.map