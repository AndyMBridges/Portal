(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{69:function(n,e,r){"use strict";r.d(e,"a",function(){return p}),r.d(e,"b",function(){return m}),r.d(e,"e",function(){return f}),r.d(e,"d",function(){return b}),r.d(e,"c",function(){return g}),r.d(e,"f",function(){return h});var t=r(5),a=r(6),o=r(81);function i(){var n=Object(t.a)(["\n  color: ",";\n  font-size: .8rem;\n"]);return i=function(){return n},n}function u(){var n=Object(t.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 0 auto;\n    background: #FFF;\n    width: 100%;\n    text-align: left;\n"]);return u=function(){return n},n}function c(){var n=Object(t.a)(["\n    width: 100%;\n    height: 40px;\n    border: ",";\n    background-color: #fff;\n    margin-top: 1rem;\n    padding: 0 1rem;\n    border-radius: 3px;\n"]);return c=function(){return n},n}function l(){var n=Object(t.a)(["\n    display: flex;\n    flex-direction: column;\n    color: #14233c;\n    font-size: 0.8em;\n    margin: 0.5em 0;\n    position: relative;\n    width: 100%;\n"]);return l=function(){return n},n}function d(){var n=Object(t.a)(["\n    height: 40px;\n    width: 100%;\n    color: #FFF;\n    border-radius: 3px;\n    background-color: #4d5870;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n    font-size: .8rem;\n    text-transform: uppercase;\n    margin-top: 1rem;\n    border: 0;\n    cursor: pointer;\n    transition: .2s linear;\n    &:hover {\n        background-color: #3d4658;\n    }\n"]);return d=function(){return n},n}function s(){var n=Object(t.a)(["\n    height: 40px;\n    width: 100%;\n    color: #FFF;\n    border-radius: 3px;\n    background-color: #005E85;\n    margin: 1rem auto 0 auto;\n    border: 0;\n    font-size: .8rem;\n    text-transform: uppercase;\n    max-width: 700px;\n    cursor: pointer;\n    transition: .2s linear;\n    &:hover {\n      background-color: #008dbd;\n    }\n"]);return s=function(){return n},n}var p=a.b.button(s()),m=Object(a.b)(o.a)(d()),f=a.b.label(l()),b=a.b.input(c(),function(n){return n.border||"1px solid #ccc"}),g=a.b.form(u()),h=a.b.p(i(),function(n){return n.color||"#4d4d4d"})},82:function(n,e,r){"use strict";r.r(e);var t=r(31),a=r(32),o=r(35),i=r(33),u=r(36),c=r(5),l=r(0),d=r.n(l),s=r(16),p=r(6),m=r(70),f=r(11),b=r(34),g=r(69);function h(){var n=Object(c.a)(["\n    background: #FFF;\n    margin: 0 auto;\n    max-width: 360px;\n    width: 100%;\n    padding: 2rem;\n    border-radius: 3px;\n"]);return h=function(){return n},n}var w=p.b.div(h()),v=function(n){function e(){return Object(t.a)(this,e),Object(o.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(u.a)(e,n),Object(a.a)(e,[{key:"goToApp",value:function(){return d.a.createElement("div",{className:"goToApp"},d.a.createElement("p",null,"Already logged in"),d.a.createElement(g.b,{to:"/apps"},"Go to app"))}},{key:"render",value:function(){var n=this,e=!(!this.props.getLogin.payload||null===this.props.getLogin.payload.token);return d.a.createElement(w,{className:"login"},d.a.createElement("h1",null,"Login"),e?this.goToApp():d.a.createElement(m.a,{initialValues:{email:"",password:""},validate:function(n){var e={};return n.email?/\S+@\S+\.\S+/.test(n.email)||(e.email="Invalid email address"):e.email="Email is required",n.password?n.password.length<4&&(e.password="Password must be 4 characters"):e.password="A password is required",e},onSubmit:function(e){n.props.login(e)},render:function(e){e.isSubmitting;var r=e.errors,t=e.values,a=e.handleChange,o=e.handleBlur,i=e.handleSubmit;return d.a.createElement(g.c,{onSubmit:i},d.a.createElement(g.e,null,"Email *",d.a.createElement(g.d,{onChange:a,onBlur:o,value:t.email,border:r.email&&"1px solid red",type:"email",name:"email",placeholder:"Email"}),r.email&&d.a.createElement(g.f,{color:"red"},r.email)),d.a.createElement(g.e,null,"Password *",d.a.createElement(g.d,{onChange:a,onBlur:o,value:t.password,border:r.password&&"1px solid red",type:"password",name:"password",placeholder:"Password"}),r.password&&d.a.createElement(g.f,{color:"red"},r.password)),d.a.createElement(g.a,{disabled:r.email||r.password,type:"submit"},"Submit"),n.props.getLogin.error&&d.a.createElement(g.f,{color:"red"},"Incorrect details"))}}))}}]),e}(l.Component);e.default=Object(s.b)(function(n){return{getLogin:b.a.getLogin(n)}},function(n){return{login:function(e){return n(Object(f.c)(e))},logout:function(){return n(Object(f.d)())}}})(v)}}]);
//# sourceMappingURL=LoginChunk.555ecac2.chunk.js.map