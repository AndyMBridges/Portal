(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,n,t){e.exports=t.p+"static/media/loading.a516b9f8.svg"},50:function(e,n,t){e.exports=t(70)},70:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(20),i=t.n(o),c=t(9),u=t(10),s=t(40),l=t(34),p=t(41),d=t(47),m=t(6),f=t(7),h=t.n(f),g=t(11),b="https://guarded-thicket-22918.herokuapp.com",E={"Content-Type":"application/json",Accept:"application/json",Host:b},v={APP_LOAD_REQUEST:"APP_LOAD_REQUEST",APP_LOAD_SUCCESS:"APP_LOAD_SUCCESS",APP_LOAD_FAILURE:"APP_LOAD_FAILURE"},O=function(){return fetch("".concat(b,"/apps"),{method:"GET",headers:Object(m.a)({},E,{Authorization:localStorage.getItem("token")})})};var S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case v.APP_LOAD_REQUEST:return Object(m.a)({},e,{loading:!0});case v.APP_LOAD_SUCCESS:return{items:n.data,loading:!1};case v.APP_LOAD_FAILURE:return{error:n.error};default:return e}},A={USERS_LOAD_REQUEST:"USERS_LOAD_REQUEST",USERS_LOAD_SUCCESS:"USERS_LOAD_SUCCESS",USERS_LOAD_FAILURE:"USERS_LOAD_FAILURE"},y=function(e,n){var t=void 0===n?"".concat(b,"/apps/").concat(e,"/users"):"".concat(b,"/apps/").concat(e,"/users").concat(n);return fetch(t,{method:"GET",headers:Object(m.a)({},E,{Authorization:localStorage.getItem("token")})})};var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case A.USERS_LOAD_REQUEST:return Object(m.a)({},e,{loading:!0});case A.USERS_LOAD_SUCCESS:return{items:n.data,loading:!1};case A.USERS_LOAD_FAILURE:return{error:n.error};default:return e}},x=t(42),U=t.n(x)()(),j="LOGIN_REQUEST",_="LOGIN_SUCCESS",k="LOGIN_FAILURE",P="CLEAR_TOKEN",L=function(e){return fetch("".concat(b,"/login"),function(e){var n=e.email,t=e.password;return{method:"POST",body:JSON.stringify({email:n,password:t,expiry:"180s"}),headers:E}}(e))},C=function(e){return function(){var n=Object(g.a)(h.a.mark(function n(t){var r,a;return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(b,"/"),{method:"GET",headers:Object(m.a)({},E,{Authorization:e})});case 3:return r=n.sent,n.next=6,r.json();case 6:a=n.sent,t({type:_,token:e,tokenExpiry:a.token.exp}),localStorage.setItem("token",e),localStorage.setItem("tokenExpiry",a.token.exp),U.push("/apps"),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),t({type:k,error:n.t0});case 16:case"end":return n.stop()}},n,this,[[0,13]])}));return function(e){return n.apply(this,arguments)}}()},R=function(e){U.push("/"),localStorage.removeItem("token"),localStorage.removeItem("tokenExpiry"),e({type:P})},D=function(){return function(e){R(e)}},T={token:null,tokenExpiry:null},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{payload:T},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case j:return Object(m.a)({},e,{loading:!0});case _:return Object(m.a)({},e,{payload:{token:n.token,tokenExpiry:n.tokenExpiry},loading:!1});case k:return Object(m.a)({},e,{error:n.error,loading:!1});case P:return{payload:T};default:return e}},I=Object(c.c)({apps:S,users:w,login:F}),N=t(12),Q=t(13),z=t(15),B=t(14),G=t(16),W=t(73),H=t(75),J=t(74),M=t(48),V=t(72),q=function(e){var n=e.component,t=Object(M.a)(e,["component"]);return a.a.createElement(J.a,Object.assign({},t,{render:function(e){return localStorage.getItem("token")?a.a.createElement(n,e):a.a.createElement(V.a,{to:{pathname:"/",state:{from:e.location}}})}}))},X=function(e){return function(e){return e||{}}(e).login||{}},K=t(23),$=function(e){return function(e){return e||{}}(e).apps||{}},Y={UPDATE_APP_REQUEST:"UPDATE_APP_REQUEST",UPDATE_APP_SUCCESS:"UPDATE_APP_SUCCESS",UPDATE_APP_FAILURE:"UPDATE_APP_FAILURE"},Z=function(e,n){return fetch("".concat(b,"/apps/").concat(e),function(e){return{method:"PUT",body:JSON.stringify({name:e}),headers:Object(m.a)({},E,{Authorization:localStorage.getItem("token")})}}(n))};var ee=t(3),ne=t(4),te=t(44),re=t.n(te);function ae(){var e=Object(ee.a)(["\n    margin: 0 auto;\n"]);return ae=function(){return e},e}var oe=ne.b.img(ae()),ie=function(){return a.a.createElement(oe,{src:re.a,alt:"Loading"})},ce=t(71);function ue(){var e=Object(ee.a)(["\n  color: ",";\n  font-size: .8rem;\n"]);return ue=function(){return e},e}function se(){var e=Object(ee.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 0 auto;\n    background: #FFF;\n    width: 100%;\n    text-align: left;\n"]);return se=function(){return e},e}function le(){var e=Object(ee.a)(["\n    width: 100%;\n    height: 40px;\n    border: ",";\n    background-color: #fff;\n    margin-top: 1rem;\n    padding: 0 1rem;\n    border-radius: 3px;\n"]);return le=function(){return e},e}function pe(){var e=Object(ee.a)(["\n    height: 40px;\n    width: 100%;\n    color: #FFF;\n    border-radius: 3px;\n    background-color: #4d5870;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n    font-size: .8rem;\n    text-transform: uppercase;\n    margin-top: 1rem;\n    border: 0;\n    cursor: pointer;\n    transition: .2s linear;\n    &:hover {\n        background-color: #3d4658;\n    }\n"]);return pe=function(){return e},e}function de(){var e=Object(ee.a)(["\n    height: 40px;\n    width: 100%;\n    color: #FFF;\n    border-radius: 3px;\n    background-color: #005E85;\n    margin: 1rem auto 0 auto;\n    border: 0;\n    font-size: .8rem;\n    text-transform: uppercase;\n    cursor: pointer;\n    max-width: 600px;\n    transition: .2s linear;\n    &:hover {\n      background-color: #008dbd;\n    }\n"]);return de=function(){return e},e}var me=ne.b.button(de()),fe=Object(ne.b)(ce.a)(pe()),he=ne.b.input(le(),function(e){return e.border||"1px solid #ccc"}),ge=ne.b.form(se()),be=ne.b.p(ue(),function(e){return e.color||"#4d4d4d"});function Ee(){var e=Object(ee.a)(["\n    background-color: #FFF;\n    border-radius: 3px; \n    display: grid;\n    padding: 1rem;\n    text-align: center;\n    max-width: 100%;\n    margin: 1rem 0;\n    @media (min-width: 768px) {\n        margin: 1rem;\n    }\n"]);return Ee=function(){return e},e}function ve(){var e=Object(ee.a)(["\n    display: grid;\n    grid-template-columns: 100%;\n\n    @media (min-width: 768px) {\n        grid-template-columns: 50% 50%;\n    }\n    @media (min-width: 1024px) {\n        grid-template-columns: 33% 33% 33%;\n    }\n"]);return ve=function(){return e},e}function Oe(){var e=Object(ee.a)(["\n    margin: 0 auto;\n    width: 100%;\n"]);return Oe=function(){return e},e}function Se(){var e=Object(ee.a)(["\n    text-align:center;\n    color: #FFF;\n    margin-bottom: 1rem;\n    text-transform: uppercase;\n"]);return Se=function(){return e},e}function Ae(){var e=Object(ee.a)(["\n\n    * {\n        box-sizing: border-box;\n    }\n\n    body {\n        background: #14233c;\n        margin: 0;\n        padding: 0;\n        font-family: Helvetica Neue,Helvetica,Arial,sans-serif; \n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n\n        h1, h2 {\n            margin: 0 auto 1rem auto;\n            color: #14233c;\n            text-align: center;\n            text-transform: uppercase;\n        }\n\n        h2 {\n            margin: 1rem 0 0;\n        }\n\n        .wrapper {\n            margin: 0 auto;\n            max-width: 1100px;\n        }\n\n        .main {\n            padding: 2rem;\n            text-align: center;\n        }\n    }"]);return Ae=function(){return e},e}var ye=Object(ne.a)(Ae()),we=ne.b.h1(Se()),xe=ne.b.img(Oe()),Ue=ne.b.div(ve()),je=ne.b.div(Ee()),_e=function(e){function n(){return Object(N.a)(this,n),Object(z.a)(this,Object(B.a)(n).apply(this,arguments))}return Object(G.a)(n,e),Object(Q.a)(n,[{key:"componentDidMount",value:function(){this.props.loadApp()}},{key:"updateClick",value:function(e,n){this.props.updateApp(e,n),this.props.loadApp()}},{key:"renderApp",value:function(e){var n=this,t=e.id,r=e.logo,o=e.name;return a.a.createElement(je,{key:t},r&&a.a.createElement(xe,{src:r,alt:o}),o&&a.a.createElement("h2",null,o),a.a.createElement(K.a,{initialValues:{name:""},validate:function(e){var n={};return e.name||(n.name="Enter new app name"),n},onSubmit:function(e){n.updateClick(t,e.name)},render:function(e){var n=e.errors,t=e.values,r=e.handleChange,o=e.handleBlur,i=e.handleSubmit;return a.a.createElement(ge,{onSubmit:i},a.a.createElement(he,{onChange:r,onBlur:o,value:t.name,border:n.name&&"1px solid red",type:"text",name:"name",placeholder:"Update app name"}),n.name&&a.a.createElement(be,{color:"red"},n.name),a.a.createElement(me,{type:"submit"},"Update app name"))}}),a.a.createElement(fe,{to:"/apps/".concat(t)},"View app users"))}},{key:"render",value:function(){var e=this,n=this.props.getApps;return a.a.createElement("div",null,a.a.createElement(we,null,"Apps"),n&&n.items?a.a.createElement(Ue,null,n.items.map(function(n){return e.renderApp(n)})):a.a.createElement(ie,null))}}]),n}(r.Component),ke=Object(u.b)(function(e){return{getApps:$(e),getLogin:X(e)}},function(e){return{loadApp:function(){return e(function(){var e=Object(g.a)(h.a.mark(function e(n){var t,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:v.APP_LOAD_REQUEST}),e.prev=1,e.next=4,O();case 4:return t=e.sent,e.next=7,t.json();case 7:r=e.sent,n({data:r.apps,type:v.APP_LOAD_SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),n({error:e.t0,type:v.APP_LOAD_FAILURE});case 14:case"end":return e.stop()}},e,this,[[1,11]])}));return function(n){return e.apply(this,arguments)}}())},updateApp:function(n,t){return e(function(e,n){return function(){var t=Object(g.a)(h.a.mark(function t(r){var a,o;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:Y.UPDATE_APP_REQUEST}),t.prev=1,t.next=4,Z(e,n);case 4:return a=t.sent,t.next=7,a.json();case 7:o=t.sent,r({data:o,type:Y.UPDATE_APP_SUCCESS}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),r({error:t.t0,type:Y.UPDATE_APP_FAILURE});case 14:case"end":return t.stop()}},t,this,[[1,11]])}));return function(e){return t.apply(this,arguments)}}()}(n,t))}}})(_e);function Pe(){var e=Object(ee.a)(["\n    background: #FFF;\n    margin: 0 auto;\n    max-width: 360px;\n    width: 100%;\n    padding: 2rem;\n    border-radius: 3px;\n"]);return Pe=function(){return e},e}function Le(){var e=Object(ee.a)(["\n    display: flex;\n    flex-direction: column;\n    color: #14233c;\n    font-size: 0.8em;\n    margin: 0.5em 0;\n    position: relative;\n    width: 100%;\n"]);return Le=function(){return e},e}var Ce=ne.b.label(Le()),Re=ne.b.div(Pe()),De=function(e){function n(){return Object(N.a)(this,n),Object(z.a)(this,Object(B.a)(n).apply(this,arguments))}return Object(G.a)(n,e),Object(Q.a)(n,[{key:"goToApp",value:function(){return a.a.createElement("div",{className:"goToApp"},a.a.createElement("p",null,"Already logged in"),a.a.createElement(fe,{to:"/apps"},"Go to app"))}},{key:"render",value:function(){var e=this,n=!(!this.props.getLogin.payload||null===this.props.getLogin.payload.token);return a.a.createElement(Re,{className:"login"},a.a.createElement("h1",null,"Login"),n?this.goToApp():a.a.createElement(K.a,{initialValues:{email:"",password:""},validate:function(e){var n={};return e.email?/\S+@\S+\.\S+/.test(e.email)||(n.email="Invalid email address"):n.email="Email is required",e.password?e.password.length<4&&(n.password="Password must be 4 characters"):n.password="A password is required",n},onSubmit:function(n){e.props.login(n)},render:function(n){n.isSubmitting;var t=n.errors,r=n.values,o=n.handleChange,i=n.handleBlur,c=n.handleSubmit;return a.a.createElement(ge,{onSubmit:c},a.a.createElement(Ce,null,"Email *",a.a.createElement(he,{onChange:o,onBlur:i,value:r.email,border:t.email&&"1px solid red",type:"email",name:"email",placeholder:"Email"}),t.email&&a.a.createElement(be,{color:"red"},t.email)),a.a.createElement(Ce,null,"Password *",a.a.createElement(he,{onChange:o,onBlur:i,value:r.password,border:t.password&&"1px solid red",type:"password",name:"password",placeholder:"Password"}),t.password&&a.a.createElement(be,{color:"red"},t.password)),a.a.createElement(me,{disabled:t.email||t.password,type:"submit"},"Submit"),e.props.getLogin.error&&a.a.createElement(be,{color:"red"},"Incorrect details"))}}))}}]),n}(r.Component),Te=Object(u.b)(function(e){return{getLogin:X(e)}},function(e){return{login:function(n){return e(function(e){return function(){var n=Object(g.a)(h.a.mark(function n(t){var r,a;return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:j,data:e}),n.prev=1,n.next=4,L(e);case 4:return r=n.sent,n.next=7,r.json();case 7:!(a=n.sent).accessToken||a.error?t({type:k,error:a.error}):t(C(a.accessToken)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),t({type:k,error:n.t0});case 14:case"end":return n.stop()}},n,this,[[1,11]])}));return function(e){return n.apply(this,arguments)}}()}(n))},logout:function(){return e(D())}}})(De),Fe=function(e){return function(e){return e||{}}(e).users||{}};function Ie(){var e=Object(ee.a)(["\n    margin: 1rem auto;\n    color: #00a0d6;\n"]);return Ie=function(){return e},e}var Ne=ne.b.a(Ie()),Qe=function(e){function n(){var e,t;Object(N.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(z.a)(this,(e=Object(B.a)(n)).call.apply(e,[this].concat(a)))).state={moreUsers:!1},t.getUsers=function(){var e=t.state.moreUsers?"":"?offset=25";t.setState({moreUsers:!t.state.moreUsers}),t.props.loadAppUsers(t.props.match.params.appId,e)},t}return Object(G.a)(n,e),Object(Q.a)(n,[{key:"componentDidMount",value:function(){this.props.loadAppUsers(this.props.match.params.appId,"")}},{key:"renderUser",value:function(e){var n=e.id,t=e.name,r=e.email,o=e.avatar;return a.a.createElement(je,{key:n},a.a.createElement("h2",null,t),a.a.createElement(Ne,{href:"mailto:".concat(r)},r),o&&a.a.createElement(xe,{src:o,alt:t}))}},{key:"render",value:function(){var e=this,n=this.props.getUsers;return a.a.createElement("div",null,a.a.createElement(we,null,"Users"),n&&n.items?a.a.createElement("div",null,a.a.createElement(Ue,null,n.items.map(function(n){return e.renderUser(n)})),a.a.createElement(me,{onClick:this.getUsers},this.state.moreUsers?"Previous users":"Next users")):a.a.createElement(ie,null))}}]),n}(r.Component),ze=Object(u.b)(function(e){return{getUsers:Fe(e),getLogin:X(e)}},function(e){return{loadAppUsers:function(n,t){return e(function(e,n){return function(){var t=Object(g.a)(h.a.mark(function t(r){var a,o;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:A.USERS_LOAD_REQUEST}),t.prev=1,t.next=4,y(e,n);case 4:return a=t.sent,t.next=7,a.json();case 7:o=t.sent,r({data:o.users,type:A.USERS_LOAD_SUCCESS}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),r({error:t.t0,type:A.USERS_LOAD_FAILURE});case 14:case"end":return t.stop()}},t,this,[[1,11]])}));return function(e){return t.apply(this,arguments)}}()}(n,t))}}})(Qe);function Be(){var e=Object(ee.a)(["\n    color: #FFF;\n    transition: .2s linear;\n    &:hover {\n        color: #00a0d6;\n    }\n    &:first-child {\n        margin-right: 1rem;\n    }\n"]);return Be=function(){return e},e}function Ge(){var e=Object(ee.a)(["\n    display: flex;\n    align-items: center;\n"]);return Ge=function(){return e},e}function We(){var e=Object(ee.a)(["\n    padding: 2rem;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    @media (min-width: 768px) {\n        margin: 0 1rem;\n    }\n"]);return We=function(){return e},e}function He(){var e=Object(ee.a)(["\n    height: 40px;\n    padding: 0 1rem;\n    font-size: .8rem;\n    text-transform: uppercase;\n    color: #FFF;\n    border-radius: 3px;\n    background-color: #00a0d6;\n    border: 0;\n    cursor: pointer;\n    transition: .2s linear;\n    &:hover {\n        background-color: #008dbd;\n    }\n"]);return He=function(){return e},e}var Je=ne.b.button(He()),Me=ne.b.header(We()),Ve=ne.b.div(Ge()),qe=Object(ne.b)(ce.a)(Be()),Xe=function(e){var n=e.logout;return a.a.createElement(Me,null,a.a.createElement(Ve,null,a.a.createElement(qe,{to:"/"},"Home"),a.a.createElement(qe,{to:"/apps"},"Apps")),a.a.createElement(Je,{onClick:n},"Logout"))},Ke=function(e){function n(){var e,t;Object(N.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(z.a)(this,(e=Object(B.a)(n)).call.apply(e,[this].concat(a)))).handleLogout=function(){t.props.logout()},t}return Object(G.a)(n,e),Object(Q.a)(n,[{key:"render",value:function(){var e=!(!this.props.getLogin.payload||null===this.props.getLogin.payload.token);return a.a.createElement("div",{className:"wrapper"},a.a.createElement(ye,null),a.a.createElement(W.a,{history:U},a.a.createElement("div",null,e&&a.a.createElement(Xe,{logout:this.handleLogout}),a.a.createElement("div",{className:"main"},a.a.createElement(H.a,null,a.a.createElement(q,{exact:!0,path:"/apps",component:ke}),a.a.createElement(q,{path:"/apps/:appId",component:ze}),a.a.createElement(J.a,{path:"/",component:Te}))))))}}]),n}(r.Component),$e=Object(u.b)(function(e){return{getLogin:X(e)}},function(e){return{logout:function(){return e(D())}}})(Ke),Ye=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ze(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}t.d(n,"store",function(){return rn}),t.d(n,"persistor",function(){return an});var en=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,nn={key:"root",storage:d.a},tn=Object(l.a)(nn,I),rn=Object(c.e)(tn,en(Object(c.a)(function(e){return function(n){return function(t){var r=localStorage.getItem("tokenExpiry");parseInt(r)<Math.floor(Date.now()/1e3)&&(localStorage.clear(),e.dispatch(R),n(t)),n(t)}}},s.a))),an=Object(l.b)(rn);i.a.render(a.a.createElement(u.a,{store:rn},a.a.createElement(p.a,{persistor:an},a.a.createElement($e,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat(".","/service-worker.js");Ye?(function(e,n){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ze(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Ze(n,e)})}}()}},[[50,2,1]]]);
//# sourceMappingURL=main.42195971.chunk.js.map