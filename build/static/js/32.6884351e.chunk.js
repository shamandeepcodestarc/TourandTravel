(this.webpackJsonpreactlaravel=this.webpackJsonpreactlaravel||[]).push([[32],{2397:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return C}));var r=t(35),l=t(37),n=t(16),s=t(15),o=t(18),m=t(17),c=t(19),i=t(0),d=t.n(i),u=t(180),h=t(181),E=t(176),p=t(178),g=t(188),v=t(189),b=t(190),w=t(191),F=t(94),f=(t(66),t(25)),k=t(28),C=(t(46),function(e){function a(){var e;return Object(n.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).validateNumber=function(e){var a=e||window.event;if("paste"===a.type)t=a.clipboardData.getData("text/plain");else{var t=a.keyCode||a.which;t=String.fromCharCode(t)}/[0-9]|\./.test(t)||(a.returnValue=!1,a.preventDefault&&a.preventDefault())},e.onChangehandler=function(a){a.preventDefault();var t=a.target,n=t.name,s=t.value,o=(t.checked,e.state),m=o.Form,c=o.FormErrors;e.setState({Form:m},(function(){if(Object.keys(c).includes(n)){var a={};if("password"===n){var t=e.state.Form["password"===n],o=e.validateField(n,s,t);a=Object(l.a)({},c,Object(r.a)({},n,o)),!o&&t&&(a.password=null)}else{var m=e.validateField(n,"language"===n?e.state.Form.language:s);a=Object(l.a)({},c,Object(r.a)({},n,m))}e.setState({FormErrors:a})}}))},e.validateField=function(e,a,t){var r=null;switch(e){case"name":a||(r="Please enter Name.");break;case"email":a?/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)||(r="Please enter valid Email."):r="Please enter Email.";break;case"password":a||(r="Please enter password.");8!==a.length&&(r="Password at least 10 character")}return r},e.validateForm=function(e,a,t){var r={};return Object.keys(a).map((function(a){var l=null;"paswsword"===a&&(l=e["password"===a]);var n=t(a,e[a],l);n&&(r[a]=n)})),r},e.onSignInHandler=function(){var a=e.state,t=a.Form,r=a.FormErrors,n=e.validateForm(t,r,e.validateField);if(0!==Object.keys(n).length)return e.setState({FormErrors:Object(l.a)({},r,{},n)}),!1;console.log("Data: ",t)},e.state={Form:{name:"",email:"",password:""},FormErrors:{name:null,email:null,password:null}},e}return Object(c.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=localStorage.getItem("role"),a=localStorage.getItem("IsLoggedIn");return e||a?d.a.createElement(k.Redirect,{to:"/DashboardDefault"}):d.a.createElement(i.Fragment,null,d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement(u.a,null,d.a.createElement(h.a,{md:"4"}),d.a.createElement(h.a,{md:"4"},d.a.createElement(E.a,{className:"card-box mb-5"},d.a.createElement(p.a,null,d.a.createElement("h1",{className:"text-center"},"Register"),d.a.createElement(g.a,{className:"containers"},d.a.createElement(v.a,null,d.a.createElement(b.a,{htmlFor:"exampleEmail"},"Name"),d.a.createElement(w.a,{type:"text",name:"name",id:"exampleName",placeholder:"please enter the name",value:g.a.username,onChange:this.onChangehandler,onBlur:this.onChangehandler}),this.state.FormErrors.name&&d.a.createElement("span",{className:"err",style:{color:"red"}},this.state.FormErrors.name)),d.a.createElement(v.a,null,d.a.createElement(b.a,{htmlFor:"exampleEmail"},"Email"),d.a.createElement(w.a,{type:"email",name:"email",id:"exampleEmail",placeholder:"please enter your email",value:g.a.email,onChange:this.onChangehandler,onBlur:this.onChangehandler}),this.state.FormErrors.email&&d.a.createElement("span",{className:"err",style:{color:"red"}},this.state.FormErrors.email)),d.a.createElement(v.a,null,d.a.createElement(b.a,{htmlFor:"examplePassword"},"Password"),d.a.createElement(w.a,{type:"password",name:"password",id:"examplePassword",placeholder:"please enter the password",value:g.a.password,onChange:this.onChangehandler,onBlur:this.onChangehandler}),this.state.FormErrors.password&&d.a.createElement("span",{className:"err",style:{color:"red"}},this.state.FormErrors.password)),d.a.createElement("p",{className:"text-danger"},this.state.errMsg),d.a.createElement("center",null,d.a.createElement(F.a,{className:"m-2",color:"second",onClick:this.onSignInHandler},"sign up"))),d.a.createElement("center",null,d.a.createElement(u.a,null,d.a.createElement(h.a,{md:"4"}),d.a.createElement(F.a,{color:"link",className:"m-2 btn-link-warning"},d.a.createElement("span",null,d.a.createElement(f.Link,{to:"/sign-in"},"back to  login"))))))))))}}]),a}(i.Component))}}]);
//# sourceMappingURL=32.6884351e.chunk.js.map