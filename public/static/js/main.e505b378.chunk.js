(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(52),c=t.n(s),l=(t(61),t(62),t(1)),i=t.n(l),o=t(10),m=t(5),d=t(6),u=t(9),p=t(7),h=t(8),v=(t(65),t(16)),b=t(17),f=t(15),E=function(){return function(){var e=Object(o.a)(i.a.mark(function e(a){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/logout");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a({type:"LOGOUT",data:n});case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()},g=function(){return function(){var e=Object(o.a)(i.a.mark(function e(a){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/admindata");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a({type:"ADMIN_DATA",data:n});case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()},N=t(3),y=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",username:"",pass:"",repeat:""},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"handleText",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"sendToRegister",value:function(){this.props.registerAction(this.state)}},{key:"render",value:function(){return r.a.createElement("div",{className:"registerstyle"},r.a.createElement("div",{className:"limiter"},r.a.createElement("div",{className:"container-login100"},r.a.createElement("div",{className:"login100-more"}),r.a.createElement("div",{className:"wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50"},r.a.createElement("form",{className:"login100-form validate-form"}),r.a.createElement("span",{className:"login100-form-title p-b-59"},"Sign Up"),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Name is required"},r.a.createElement("span",{className:"label-input100"},"Full Name"),r.a.createElement("input",{required:!0,onChange:this.handleText.bind(this),className:"input100",type:"text",name:"name",placeholder:"Name..."}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Username is required"},r.a.createElement("span",{className:"label-input100"},"Username"),r.a.createElement("input",{required:!0,onChange:this.handleText.bind(this),className:"input100",type:"text",name:"username",placeholder:"Username..."}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Password is required"},r.a.createElement("span",{className:"label-input100"},"Password"),r.a.createElement("input",{required:!0,onChange:this.handleText.bind(this),className:"input100",type:"password",name:"pass",placeholder:"*************"}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Repeat Password is required"},r.a.createElement("span",{className:"label-input100"},"Repeat Password"),r.a.createElement("input",{required:!0,onChange:this.handleText.bind(this),className:"input100",type:"password",name:"repeat",placeholder:"*************"}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"container-login100-form-btn"},r.a.createElement("div",{className:"wrap-login100-form-btn"},r.a.createElement("div",{className:"login100-form-bgbtn"}),r.a.createElement("button",{onClick:this.sendToRegister.bind(this),className:"login100-form-btn"},"Sign Up"))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("span",{class:"badge badge-warning"},this.props.msg)))))))}}]),a}(n.Component),w=Object(N.b)(function(e){return{msg:e.msg}},function(e){return{registerAction:function(a){return e(function(e){return function(){var a=Object(o.a)(i.a.mark(function a(t){var n,r,s;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(""!==(n=e).name&&""!==n.username&&""!==n.pass&&""!==n.repeat){a.next=6;break}console.log("all mendatory"),t({type:"ALL_INPUT_MANDATORY",data:null}),a.next=18;break;case 6:if(n.pass===n.repeat){a.next=11;break}console.log("The password is incorrect"),t({type:"INCORRECTSECOND_PASS",data:null}),a.next=18;break;case 11:return a.next=13,fetch("/register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 13:return r=a.sent,a.next=16,r.json();case 16:s=a.sent,t({type:"REGISTERED",data:s.msg});case 18:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}(a))}}})(y),O=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={username:"",pass:"",msg:""},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"handleTextforlogin",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"sendToLogin",value:function(){this.props.LoginAction(this.state)}},{key:"render",value:function(){return r.a.createElement("div",{className:"registerstyle"},r.a.createElement("div",{className:"limiter"},r.a.createElement("div",{className:"container-login100"},r.a.createElement("div",{className:"login100-more"}),r.a.createElement("div",{className:"wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50"},r.a.createElement("form",{className:"login100-form validate-form"}),r.a.createElement("span",{className:"login100-form-title p-b-59"},"Login"),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Username is required"},r.a.createElement("span",{className:"label-input100"},"Username"),r.a.createElement("input",{required:!0,onChange:this.handleTextforlogin.bind(this),className:"input100",type:"text",name:"username",placeholder:"Username..."}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Password is required"},r.a.createElement("span",{className:"label-input100"},"Password"),r.a.createElement("input",{required:!0,onChange:this.handleTextforlogin.bind(this),className:"input100",type:"password",name:"pass",placeholder:"*************"}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"container-login100-form-btn"},r.a.createElement("div",{className:"wrap-login100-form-btn"},r.a.createElement("div",{className:"login100-form-bgbtn"}),r.a.createElement("button",{onClick:this.sendToLogin.bind(this),className:"login100-form-btn"},"Login"))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("span",{class:"badge badge-warning"},this.props.msg)))))))}}]),a}(n.Component),j=Object(N.b)(function(e){return{msg:e.msg}},function(e){return{LoginAction:function(a){return e(function(e){return function(){var a=Object(o.a)(i.a.mark(function a(t){var n,r,s;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=e,a.next=3,fetch("/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 3:return r=a.sent,a.next=6,r.json();case 6:s=a.sent,t({type:"LOGIN_STATUS",data:s});case 8:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}(a))}}})(O),k=t(30),x=t.n(k),T=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={destination:"",description:"",image:"",start_date:"",end_date:"",price:"",msg:""},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.dataAdmin(),x()("http://localhost:8888").on("connect",function(){console.log("connected")})}},{key:"sendToDelete",value:function(e,a){this.props.deleteVacation(e)}},{key:"setImgTo64",value:function(e){var a=this,t=e.target.files[0];if("image/jpeg"==t.type){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){a.setState({image:n.result,msg:""})}}else this.setState({msg:"Image must be jpeg type"})}},{key:"handleText",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"sendToUpdate",value:function(){var e={vacationId:this.state.vacationId,destination:this.state.destination,description:this.state.description,start_date:this.state.start_date,end_date:this.state.end_date,price:this.state.price,image:this.state.image};this.props.updateVacation(e),window.$("#edit-modal").modal("hide")}},{key:"updateState",value:function(e,a,t,n,r,s,c){this.setState({vacationId:e,destination:a,description:t,start_date:n,end_date:r,price:s,image:c})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{class:"modal fade",id:"edit-modal",role:"dialog"},r.a.createElement("div",{class:"modal-dialog modal-dialog-scrollable",role:"document"},r.a.createElement("div",{class:"modal-content"},r.a.createElement("div",{class:"modal-header"},r.a.createElement("h5",{class:"modal-title",id:"modalTitle"},"Edit Vacation"),r.a.createElement("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{class:"modal-body"},r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"text",class:"form-control",placeholder:"Destination",name:"destination",onChange:this.handleText.bind(this)}))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"text",class:"form-control",placeholder:"Description",name:"description",onChange:this.handleText.bind(this)}))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"date",class:"form-control",placeholder:"Start Date",name:"start_date",onChange:this.handleText.bind(this)}))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"date",class:"form-control",placeholder:"End Date",name:"end_date",onChange:this.handleText.bind(this)}))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"number",class:"form-control",placeholder:"Price in $",name:"price",onChange:this.handleText.bind(this)}))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"file",class:"form-control",onChange:this.setImgTo64.bind(this)}),r.a.createElement("span",{class:"badge badge-warning"},"jpeg only"))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("span",{class:"badge badge-warning"},this.state.msg)))),r.a.createElement("div",{class:"modal-footer"},r.a.createElement("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Close"),r.a.createElement("button",{type:"button",onClick:this.sendToUpdate.bind(this),class:"btn btn-primary"},"Update")))))),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col"},this.props.adminvacations.map(function(a){return r.a.createElement("div",{key:a.id,className:"card",style:{width:"18rem"}},r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"fas fa-edit edit-icon btn btn-light",onClick:e.updateState.bind(e,a.id,a.destination,a.description,a.start_date,a.end_date,a.price,a.image),"data-toggle":"modal","data-target":"#edit-modal"}),r.a.createElement("button",{type:"button",className:"fas fa-trash-alt btn btn-light",onClick:e.sendToDelete.bind(e,a.id)})),r.a.createElement("img",{src:a.image,className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},a.destination),r.a.createElement("p",{className:"card-text"},a.description),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("p",null,r.a.createElement("label",{className:"fas fa-plane-departure plane-icon"}),a.start_date),r.a.createElement("p",null,r.a.createElement("label",{className:"fas fa-plane-arrival plane-icon"}),a.end_date)),r.a.createElement("li",{className:"list-group-item"},a.price,r.a.createElement("label",{className:"fas fa-dollar-sign dollar-icon"})),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("label",{className:"fas fa-eye eye-icon"},a.followers)))))}))))}}]),a}(n.Component),C=Object(N.b)(function(e){return{adminvacations:e.adminvacations,id:e.id,role:e.role,clientName:e.clientName,userName:e.userName}},function(e){return{dataAdmin:function(){return e(g())},deleteVacation:function(a){return e(function(e){return function(){var a=Object(o.a)(i.a.mark(function a(t){var n,r;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("/deletevacation?vacationId=".concat(e));case 2:return n=a.sent,a.next=5,n.json();case 5:r=a.sent,t({type:"DELETED_VACATION",data:r});case 7:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}(a))},updateVacation:function(a){return e(function(e){return function(){var a=Object(o.a)(i.a.mark(function a(t){var n,r;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("/admindata",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 2:return n=a.sent,a.next=5,n.json();case 5:r=a.sent,t({type:"UPDATED_VACATION",data:r});case 7:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}(a))}}})(T),A=t(98),D=function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.dataAdmin(),this.createChart()}},{key:"createChart",value:function(){for(var e=this.props.adminvacations.filter(function(e){return 0!=e.followers}),a=[],t=[],n=0;n<e.length;n++)a.push("".concat(e[n].destination," ID:").concat(e[n].id)),t.push(e[n].followers);var r=document.getElementById("myChart").getContext("2d");new A(r,{type:"bar",data:{labels:a,datasets:[{label:"Followers",data:t,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"row mt-3"},r.a.createElement("canvas",{id:"myChart",width:"600",height:"600",className:"canvas"}))}}]),a}(n.Component),S=Object(N.b)(function(e){return{adminvacations:e.adminvacations}},function(e){return{dataAdmin:function(){return e(g())}}})(D),_=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={destination:"",description:"",image:"",start_date:"",end_date:"",price:"",msg:""},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"setImgTo64",value:function(e){var a=this,t=e.target.files[0];if("image/jpeg"==t.type){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){a.setState({image:n.result,msg:""})}}else this.setState({msg:"Image must be jpeg type"})}},{key:"sendToLogout",value:function(){this.props.logout()}},{key:"handleText",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"uploadVacation",value:function(){""===this.state.image||""===this.state.destination||""===this.state.description||""===this.state.price||""===this.state.start_date?this.setState({msg:"All inputs are required"}):(this.props.UploadVacation(this.state),window.$("#uploadModal").modal("hide"))}},{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{class:"modal fade",id:"uploadModal",role:"dialog"},r.a.createElement("div",{class:"modal-dialog modal-dialog-scrollable",role:"document"},r.a.createElement("div",{class:"modal-content"},r.a.createElement("div",{class:"modal-header"},r.a.createElement("h5",{class:"modal-title",id:"modalTitle"},"Add Vacation "),r.a.createElement("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{class:"modal-body"},r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"text",class:"form-control",placeholder:"Destination",name:"destination",onChange:this.handleText.bind(this)}))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"text",class:"form-control",placeholder:"Description",name:"description",onChange:this.handleText.bind(this)}))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"date",class:"form-control",placeholder:"Start Date",name:"start_date",onChange:this.handleText.bind(this)}))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"date",class:"form-control",placeholder:"End Date",name:"end_date",onChange:this.handleText.bind(this)}))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"number",class:"form-control",placeholder:"Price in $",name:"price",onChange:this.handleText.bind(this)}))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"file",class:"form-control",onChange:this.setImgTo64.bind(this)}),r.a.createElement("span",{class:"badge badge-warning"},"jpeg only"))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("span",{class:"badge badge-warning"},this.state.msg)))),r.a.createElement("div",{class:"modal-footer"},r.a.createElement("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Close"),r.a.createElement("button",{type:"button",onClick:this.uploadVacation.bind(this),class:"btn btn-primary"},"Upload"))))),r.a.createElement("div",{className:"col-4"},r.a.createElement("h2",null,"Hello ",this.props.clientName),r.a.createElement("span",{class:"badge badge-primary"},"Admin")),r.a.createElement("div",{className:"col-8"},r.a.createElement("button",{className:"btn-nav btn-links"},r.a.createElement(v.b,{className:"btn btn-primary",to:"/allvacations"},"Vacations")),r.a.createElement("button",{type:"button",class:"btn btn-primary","data-toggle":"modal","data-target":"#uploadModal"},"Add vacation"),r.a.createElement("button",{className:"btn-nav btn-links"},r.a.createElement(v.b,{className:"btn btn-primary",to:"/reports"},"Reports")),r.a.createElement("button",{onClick:this.sendToLogout.bind(this),className:"btn-nav btn btn-links btn-primary"},"Logout")),r.a.createElement(b.a,{exact:!0,path:"/",component:C}),r.a.createElement(b.a,{path:"/allvacations",component:C}),r.a.createElement(b.a,{path:"/reports",component:S})))}}]),a}(n.Component),L=Object(N.b)(function(e){return{userName:e.userName,clientName:e.clientName}},function(e){return{UploadVacation:function(a){return e(function(e){return function(){var a=Object(o.a)(i.a.mark(function a(t){var n,r;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(e),a.next=3,fetch("/admindata",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});case 3:return n=a.sent,a.next=6,n.json();case 6:r=a.sent,t({type:"UPLOADED_VACATION",data:r});case 8:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}(a))},logout:function(){return e(E())}}})(_),U=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={checkedOn:!0,checkedOff:!1},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=window.location.protocol.concat("//").concat(window.location.hostname)+":8888";this.props.DataUser(),x()(a).on("vacationsChange",function(a){e.props.DataUser()})}},{key:"sendToLogout",value:function(){this.props.Logout()}},{key:"FollowChange",value:function(e,a){!0===a.target.checked?(console.log("checked on"),console.log(e),this.props.AddFollow(e)):this.props.RemoveFollow(e)}},{key:"render",value:function(){var e=this;if("user"==this.props.role)return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-4"},r.a.createElement("h2",null,"VacationHunter")),r.a.createElement("div",{className:"col-4"},r.a.createElement("h3",null,"Hello ",this.props.clientName)),r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{onClick:this.sendToLogout.bind(this),className:"btn btn-primary"},"Logout")))),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col"},this.props.vacationOnFollow.map(function(a){return r.a.createElement("div",{className:"card",style:{width:"18rem"}},r.a.createElement("img",{class:"card-img-top",src:a.image}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},a.destination),r.a.createElement("p",{className:"card-text"},a.description),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("p",null,r.a.createElement("label",{className:"fas fa-plane-departure plane-icon"}),a.start_date),r.a.createElement("p",null,r.a.createElement("label",{className:"fas fa-plane-arrival plane-icon"}),a.end_date)),r.a.createElement("li",{className:"list-group-item"},a.price,r.a.createElement("label",{className:"fas fa-dollar-sign dollar-icon"})),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("lable",null,"Follow:"),r.a.createElement("input",{onChange:e.FollowChange.bind(e,a.id),checked:e.state.checkedOn,type:"checkbox"}),r.a.createElement("label",{className:"fas fa-eye eye-icon"},a.followers)))))}),this.props.vacationsUnFollow.map(function(a){return r.a.createElement("div",{className:"card",style:{width:"18rem"}},r.a.createElement("img",{class:"card-img-top",src:a.image}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},a.destination),r.a.createElement("p",{className:"card-text"},a.description),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("p",null,r.a.createElement("label",{className:"fas fa-plane-departure plane-icon"}),a.start_date),r.a.createElement("p",null,r.a.createElement("label",{className:"fas fa-plane-arrival plane-icon"}),a.end_date)),r.a.createElement("li",{className:"list-group-item"},a.price,r.a.createElement("label",{className:"fas fa-dollar-sign dollar-icon"})),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("lable",null,"Follow:"),r.a.createElement("input",{onChange:e.FollowChange.bind(e,a.id),checked:e.state.checkedOff,type:"checkbox"}),r.a.createElement("label",{className:"fas fa-eye eye-icon"},a.followers)))))}))))}}]),a}(n.Component),I=Object(N.b)(function(e){return{role:e.role,clientName:e.clientName,id:e.id,userName:e.userName,vacations:e.vacations,vacationOnFollow:e.vacationOnFollow,vacationsUnFollow:e.vacationsUnFollow}},function(e){return{Logout:function(){return e(E())},DataUser:function(){return e(function(){var e=Object(o.a)(i.a.mark(function e(a){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/user");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a({type:"UserData",data:n});case 8:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}())},AddFollow:function(a){return e((t=a,function(){var e=Object(o.a)(i.a.mark(function e(a){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/addfollow?vacationId=".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,a({type:"ADD_FOLLOW",data:r});case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()));var t},RemoveFollow:function(a){return e((t=a,function(){var e=Object(o.a)(i.a.mark(function e(a){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/removefollow?vacationId=".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,a({type:"REMOVE_FOLLOW",data:r});case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()));var t}}})(U),F=function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.props.CheckSession();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.props.role?"user"===this.props.role?r.a.createElement("div",null,r.a.createElement(I,null)):"admin"===this.props.role?r.a.createElement("div",{className:"container"},r.a.createElement(L,null)):void 0:r.a.createElement("div",{className:"App"},r.a.createElement(v.a,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light ml-auto"},r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{class:"navbar-nav ml-auto"},r.a.createElement("a",{class:"nav-item nav-link btn"},r.a.createElement(v.b,{to:"/"},"Login")),r.a.createElement("a",{class:"nav-item nav-link btn"},r.a.createElement(v.b,{to:"/register"},"Register"))))),r.a.createElement(b.a,{path:"/",exact:!0,component:j}),r.a.createElement(b.a,{path:"/register/",component:w}))))}}]),a}(n.Component),R=Object(N.b)(function(e){return{role:e.role}},function(e){return{CheckSession:function(){return e(function(){var e=Object(o.a)(i.a.mark(function e(a){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/checksession");case 2:return t=e.sent,e.next=5,t.json();case 5:!0===(n=e.sent).success?a({type:"CHECK_SESSION",data:n}):a({type:"SESSION_FAILED",data:null});case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}())}}})(F);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P={vacationOnFollow:[],vacationsUnFollow:[],adminvacations:[]},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"INCORRECTSECOND_PASS":return Object.assign({},e,{msg:"The password is incorrect"});case"ALL_INPUT_MANDATORY":return Object.assign({},e,{msg:"All inputs are mandatory"});case"REGISTERED":return Object.assign({},e,{msg:a.data});case"LOGIN_STATUS":return Object.assign({},e,{role:a.data.role,clientName:a.data.name,id:a.data.id,userName:a.data.username,msg:a.data.msg});case"CHECK_SESSION":return Object.assign({},e,{id:a.data.id,role:a.data.role,clientName:a.data.name,userName:a.data.username});case"SESSION_FAILED":return Object.assign({},e,{role:"",clientName:""});case"LOGOUT":return Object.assign({},e,{role:a.data.role,id:a.data.id,clientName:a.data.clientName,userName:a.data.userName,vacationOnFollow:[],vacationsUnFollow:[],adminvacations:[]});case"UserData":case"ADD_FOLLOW":case"REMOVE_FOLLOW":return Object.assign({},e,{id:a.data.id,role:a.data.role,clientName:a.data.clientName,userName:a.data.userName,vacationOnFollow:a.data.vacationsOnFollow,vacationsUnFollow:a.data.vacationsUnFollow});case"ADMIN_DATA":return Object.assign({},e,{id:a.data.id,role:a.data.role,clientName:a.data.clientName,userName:a.data.username,adminvacations:a.data.adminvacations});case"UPLOADED_VACATION":case"DELETED_VACATION":case"UPDATED_VACATION":return Object.assign({},e,{adminvacations:a.data.adminvacations});default:return e}},M=t(23),q=t(55),W=Object(M.c)(V,Object(M.a)(q.a));c.a.render(r.a.createElement(N.a,{store:W},r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,a,t){e.exports=t(106)},62:function(e,a,t){},65:function(e,a,t){},95:function(e,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.e505b378.chunk.js.map