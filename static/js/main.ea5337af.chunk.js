(this.webpackJsonpcards=this.webpackJsonpcards||[]).push([[0],{11:function(e,t,n){e.exports={table:"Table_table__3__xi",tableCommon:"Table_tableCommon__2PksJ",tableColumn:"Table_tableColumn__j8Vul",element:"Table_element__28FA6",btn:"Table_btn__4zGgo"}},12:function(e,t,n){e.exports={nav:"Navigation_nav__241z0",wrap:"Navigation_wrap__demD8",listItem:"Navigation_listItem__aBWsF",navElement:"Navigation_navElement__29Vwh",p:"Navigation_p__9Q_7E",navList:"Navigation_navList__z2UR2"}},15:function(e,t,n){e.exports={letterImg:"ConfirmPassword_letterImg__2N3rI",errorImg:"ConfirmPassword_errorImg__3qq5C",heading:"ConfirmPassword_heading__2gXl4"}},16:function(e,t,n){e.exports={mainContainer:"Page_error_404_mainContainer__v4xGI",linkContainer:"Page_error_404_linkContainer__16-JD"}},2:function(e,t,n){e.exports={mainContainer:"Common_mainContainer__1t-zw",contentWrap:"Common_contentWrap__1Axzh",content:"Common_content__UidQH",btn:"Common_btn__1nWkw",inputEmail:"Common_inputEmail__2Um59",inputPassword:"Common_inputPassword__3GoZh",inputCentering:"Common_inputCentering__-eDhT"}},20:function(e,t,n){e.exports={app:"App_app__2aOdL",layout:"App_layout__2S8fS",main:"App_main__24PHL"}},24:function(e,t,n){e.exports={superInput:"CustomInputText_superInput__K8brJ",input:"CustomInputText_input__Ry5T4",errorInput:"CustomInputText_errorInput__2d0Po",error:"CustomInputText_error__3R8jT",inputWrap:"CustomInputText_inputWrap__3zwmg"}},36:function(e,t,n){e.exports={loader:"Preloader_loader__2syPF"}},37:function(e,t,n){e.exports={rememberMeInput:"Login_rememberMeInput__1zYYI"}},38:function(e,t,n){e.exports={btns:"Registrations_btns__HPNCD"}},44:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a,r=n(1),c=n.n(r),s=n(19),i=n.n(s),o=(n(44),n(6)),l=n(7),d=n(4),u=n(3),j=n(20),b=n.n(j),O=n.p+"static/media/error404.688fee4d.gif",m=n(16),p=n.n(m),h=n(0),x=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:p.a.mainContainer,children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:O,alt:"error404",className:p.a.page_404})}),Object(h.jsxs)("div",{className:p.a.linkContainer,children:[" ",Object(h.jsx)(l.b,{to:"/profile",className:p.a.link,children:"Back to home"})]})]})})},_=n(12),f=n.n(_),v=o.c,g=function(e){var t=Object(r.useState)(e),n=Object(d.a)(t,2),a=n[0],c=n[1];return{value:a,handleValue:function(e){return c(e.target.value)},resetValue:function(){return c(e)}}},N={},C=n(5),I=n(35),E=n.n(I).a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),S=function(e){return E.post("auth/login",e)},w=function(){return E.delete("auth/me",{})},P=function(){return E.post("auth/me")},T=function(e){return E.post("auth/register",e)},R={status:"idle",error:null,isInitialized:!1},A=function(e){return{type:"APP/SET_STATUS",status:e}},y={isAuth:!1,error:null},k=function(e){return{type:"LOGIN/SET_AUTH_LOGIN_DATA",isAuth:e}},L=function(e){return{type:"LOGIN/SET_ERROR_MESSAGE",error:e}},G={_id:null,avatar:null,name:null,email:null,rememberMe:!1},W=function(e){return e.login.isAuth},D=function(e){return e.login.error},F=function(e){return e.app.isInitialized},M=function(e){return e.app.status},z=n(24),V=n.n(z),U=Object(r.memo)((function(e){var t=e.placeholder,n=e.typeInput,a=void 0===n?"text":n,r=e.className,c=e.value,s=e.onChange,i=e.name;return Object(h.jsx)("div",{className:V.a.inputWrap,children:Object(h.jsx)("input",{type:a,name:i,value:c,onChange:s,placeholder:t,className:null!==r&&void 0!==r?r:V.a.input,autoComplete:"off",spellCheck:!1,"aria-autocomplete":"list"})})})),H=n(36),Z=n.n(H),J=n.p+"static/media/preloader1.9c1d25d2.gif",K=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:Z.a.loader,src:J,alt:"preloader"})})},B=n(37),$=n.n(B);!function(e){e.REGISTRATION="/registration",e.LOGIN="/login",e.PROFILE="/profile",e.CONFIRM_PASSWORD="/confirmPassword",e.POPUP="/popup",e.CREATE_NEW_PASSWORD="/createNewPassword",e.PAGE_404="/*"}(a||(a={}));var q=n(2),Q=n.n(q),Y=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],s=g(""),i=s.value,j=s.handleValue,b=g(""),O=b.value,m=b.handleValue,p=Object(o.b)(),x=v(W),_=v(D),f=v(M);return x?Object(h.jsx)(u.a,{to:a.PROFILE}):Object(h.jsx)("div",{className:Q.a.mainContainer,children:"loading"===f?Object(h.jsx)(K,{}):Object(h.jsx)("div",{className:Q.a.content,children:Object(h.jsxs)("div",{className:Q.a.contentWrap,children:[Object(h.jsx)("h2",{children:" Login "}),Object(h.jsx)(U,{onChange:j,value:i,placeholder:"Email",typeInput:"text"}),Object(h.jsx)(U,{placeholder:"password",typeInput:"password",value:O,onChange:m}),_?Object(h.jsxs)("div",{style:{color:"red",display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"},children:[" ",_," "]}):"",Object(h.jsxs)("div",{className:$.a.rememberMeInput,children:["remember me",Object(h.jsx)("input",{type:"checkbox",checked:n,onChange:function(e){return c(e.currentTarget.checked)}})]}),Object(h.jsx)("div",{children:Object(h.jsx)(l.b,{to:a.CONFIRM_PASSWORD,children:" Forgot password "})}),Object(h.jsx)("button",{onClick:function(){var e;p((e={email:i,password:O,rememberMe:n},function(t){t(A("loading")),S(e).then((function(){t(k(!0)),t(A("succeeded"))})).catch((function(e){var n=e.response?e.response.data.error:"".concat(e.message,", more details in the console");t(L(n)),t(A("failed"))})).finally((function(){t(A("idle"))}))}))},className:Q.a.btn,children:"Sign In"}),Object(h.jsx)("p",{children:" Do not have an account? "}),Object(h.jsx)(l.b,{to:a.REGISTRATION,children:" Sign Up "})]})})})},X=function(){var e=v(W),t=v(M),n=Object(o.b)();return e?Object(h.jsx)("div",{className:Q.a.mainContainer,children:"loading"===t?Object(h.jsx)(K,{}):Object(h.jsxs)("div",{className:Q.a.content,children:[Object(h.jsx)("h2",{children:" Profile "}),e?Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:Q.a.btn,onClick:function(){n((function(e){e(A("loading")),w().then((function(){e(k(!1)),e(L("")),e(A("idle"))}))}))},children:"Log out"})}):Object(h.jsx)(l.c,{to:a.LOGIN,children:"Login"})]})}):Object(h.jsx)(u.a,{to:a.LOGIN})},ee=n(38),te=n.n(ee),ne=function(e){return E.post("auth/forgot",e)},ae=function(e){return E.post("auth/set-new-password",e)},re=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},ce=function(e){return/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(e)},se=function(){var e=g(""),t=e.value,n=e.handleValue,c=g(""),s=c.value,i=c.handleValue,o=g(""),l=o.value,j=o.handleValue,b=Object(r.useState)(!1),O=Object(d.a)(b,2),m=O[0],p=O[1],x={email:t,password:s};return m?Object(h.jsx)(u.a,{to:a.LOGIN}):Object(h.jsx)("div",{className:Q.a.mainContainer,children:Object(h.jsx)("div",{className:Q.a.content,children:Object(h.jsxs)("div",{className:Q.a.contentWrap,children:[Object(h.jsx)("h2",{children:"Registration"}),Object(h.jsx)(U,{placeholder:"Email",typeInput:"email",onChange:n,value:t,name:"user[email]"}),Object(h.jsx)(U,{placeholder:"Password",typeInput:"password",onChange:i,value:s,name:"user[password]"}),Object(h.jsx)(U,{placeholder:"Confirm Password",typeInput:"password",onChange:j,value:s,name:"user[password]"}),Object(h.jsx)("p",{children:" Have fun! "}),Object(h.jsxs)("div",{className:te.a.btns,children:[Object(h.jsx)("button",{className:Q.a.btn,children:"Cancel"}),Object(h.jsx)("button",{className:Q.a.btn,onClick:function(){s===l&&ce(s)&&re(t)&&T(x).then((function(){p(!0)}))},children:"Create"})]})]})})})},ie=[{id:1,title:"registration",link:a.REGISTRATION},{id:2,title:"login",link:a.LOGIN},{id:3,title:"profile",link:a.PROFILE},{id:4,title:"confirmPassword",link:a.CONFIRM_PASSWORD},{id:5,title:"popup",link:a.POPUP},{id:6,title:"createNewPassword",link:a.CREATE_NEW_PASSWORD},{id:7,title:"page404",link:a.PAGE_404}],oe=function(){return Object(h.jsx)("div",{className:f.a.nav,children:Object(h.jsx)("div",{className:f.a.wrap,children:Object(h.jsx)("div",{className:f.a.navList,children:ie.map((function(e){var t=e.id,n=e.title,a=e.link;return Object(h.jsx)(l.c,{className:f.a.listItem,to:a,children:Object(h.jsx)("div",{className:f.a.navElement,children:n})},t)}))})})})},le={errorValidation:null,errorNetwork:null},de=function(e){return{type:"FORGOT_PASSWORD/SET_VALIDATION_ERROR_MESSAGE",errorValidation:e}},ue=function(e){return{type:"FORGOT_PASSWORD/SET_NETWORK_ERROR_MESSAGE",errorNetwork:e}},je=function(e){return e.errorMessage.errorNetwork},be=function(e){return e.errorMessage.errorValidation},Oe=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(d.a)(c,2),i=s[0],j=s[1],b=Object(o.b)(),O=v(be),m=v(je),p=v(M),x={email:i,from:"test-front-admin <samutic40@gmail.com>",message:"<div style='background-color: #ffd500; \npadding: 15px; \nborder-color: #ff9900; \nwidth: 250px;\nheight: 30px'> \npassword recovery link: <a href='https://Or1ginald.github.io/gameCards/#/createNewPassword/$token$'> recovery link </a></div>"};return n?Object(h.jsx)(u.a,{to:"/popup"}):Object(h.jsx)("div",{className:Q.a.mainContainer,children:"loading"===p?Object(h.jsx)(K,{}):Object(h.jsx)("div",{className:Q.a.content,children:Object(h.jsxs)("div",{className:Q.a.contentWrap,children:[Object(h.jsx)("h2",{children:"Forgot your password?"}),O&&Object(h.jsxs)("span",{style:{color:"red"},children:[" ",O," "]}),m&&Object(h.jsxs)("span",{style:{color:"red"},children:[" ",m," "]}),Object(h.jsx)("div",{className:Q.a.inputCentering,children:Object(h.jsx)("input",{placeholder:"Email",type:"email",className:Q.a.inputEmail,onChange:function(e){j(e.currentTarget.value),b(de("")),b(ue(""))}})}),Object(h.jsx)("p",{children:" Enter your email and we will send you further instructions"}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:Q.a.btn,onClick:function(){re(i)?(b(function(e,t){return function(n){n(A("loading")),ne(e).then((function(){t(!0),n(A("succeeded"))})).catch((function(e){var t=e.response?e.response.data.error:"".concat(e.message,", more details in the console");n(ue(t))}))}}(x,a)),j("")):b(de("invalid email ;-("))},children:"send instructions"})}),Object(h.jsx)("span",{children:"Did you remember your password?"}),Object(h.jsx)(l.b,{to:"/login",children:" Try logging in "})]})})})},me=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(d.a)(c,2),i=s[0],l=s[1],j=Object(o.b)(),b=v(be),O=v(je),m=v(M),p=Object(u.f)().pathname.split("/"),x=p[p.length-1],_={password:i,resetPasswordToken:x};return n?Object(h.jsx)(u.a,{to:"/login"}):Object(h.jsx)("div",{className:Q.a.mainContainer,children:"loading"===m?Object(h.jsx)(K,{}):Object(h.jsx)("div",{className:Q.a.content,children:Object(h.jsxs)("div",{className:Q.a.contentWrap,children:[Object(h.jsx)("h2",{children:"Create new password"}),b&&Object(h.jsxs)("span",{style:{color:"red"},children:[" ",b," "]}),O&&Object(h.jsxs)("span",{style:{color:"red"},children:[" ",O," "]}),Object(h.jsx)("div",{className:Q.a.inputCentering,children:Object(h.jsx)("input",{placeholder:"Password",type:"password",className:Q.a.inputPassword,onChange:function(e){l(e.currentTarget.value),j(de("")),j(ue(""))}})}),Object(h.jsx)("p",{children:" Create new password and we will send you further instructions to email"}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:Q.a.btn,onClick:function(){ce(i)?(j(A("loading")),j(function(e,t){return function(n){ae(e).then((function(){t(!0)})).catch((function(e){var t=e.response?e.response.data.error:"".concat(e.message,", more details in the console");n(ue(t))}))}}(_,a)),j(A("succeeded")),l("")):j(de("invalid password ;-("))},children:"Create new password"})})]})})})},pe=n.p+"static/media/letter.3761fe05.png",he=n(15),xe=n.n(he),_e=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:Q.a.mainContainer,children:Object(h.jsxs)("div",{className:Q.a.content,children:[Object(h.jsx)("img",{className:xe.a.letterImg,src:pe,alt:"letter"}),Object(h.jsxs)("div",{className:Q.a.contentWrap,children:[Object(h.jsx)("h2",{className:xe.a.heading,children:"Check Email"}),Object(h.jsx)("p",{children:"We have sent the Email with instructions to your email "})]})]})})})},fe=(n.p,n(25)),ve=function(){return E.get("cards/pack")},ge=[],Ne=n(11),Ce=n.n(Ne),Ie=function(){var e=Object(o.b)();Object(r.useEffect)((function(){e((function(e){ve().then((function(t){console.log("res.data.cardPacks",t.data.cardPacks),e({type:"FETCH_DECKS",decks:t.data.cardPacks})})).catch((function(e){console.log(e.data)}))}))}),[e]);var t=Object(o.c)((function(e){return e.decks})),n=1e5;return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:Q.a.btn,children:" show dev header"})}),Object(h.jsxs)("div",{className:Ce.a.tableCommon,children:[Object(h.jsxs)("div",{className:Ce.a.tableColumn,children:[Object(h.jsx)("div",{children:"Name"}),t.map((function(e){return Object(h.jsx)("div",{className:Ce.a.element,children:e.user_name},Math.random()*n)}))]}),Object(h.jsxs)("div",{className:Ce.a.tableColumn,children:[Object(h.jsx)("div",{children:"CardsCount"}),t.map((function(e){return Object(h.jsx)("div",{className:Ce.a.element,children:e.cardsCount},Math.random()*n)}))]}),Object(h.jsxs)("div",{className:Ce.a.tableColumn,children:[Object(h.jsx)("div",{children:"Updated"}),t.map((function(e){return Object(h.jsxs)("div",{className:Ce.a.element,children:[e.updated,Object(h.jsx)("button",{className:Ce.a.btn,children:"add"})," ",Object(h.jsx)("button",{className:Ce.a.btn,children:"delete"})]},Math.random()*n)}))]})]})]})},Ee=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(Ie,{})})},Se=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],s=v(F),i=Object(o.b)();if(Object(r.useEffect)((function(){i((function(e){P().then((function(){e(k(!0))})).finally((function(){e({type:"APP/SET_IS_INITIALIZED",isInitialized:!0})}))}))}),[]),!s)return Object(h.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(h.jsx)(K,{})});return Object(h.jsx)("div",{className:b.a.app,children:Object(h.jsxs)("div",{className:b.a.layout,children:[Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:Q.a.btn,onClick:function(){c(!n)},children:"Show menu"})}),!0===n?Object(h.jsx)(oe,{}):Object(h.jsx)("div",{className:f.a.nav}),Object(h.jsx)("div",{className:b.a.main,children:Object(h.jsxs)(u.d,{children:[Object(h.jsx)(u.b,{path:a.LOGIN,element:Object(h.jsx)(Y,{})}),Object(h.jsx)(u.b,{path:a.REGISTRATION,element:Object(h.jsx)(se,{})}),Object(h.jsx)(u.b,{path:a.PROFILE,element:Object(h.jsx)(X,{})}),Object(h.jsx)(u.b,{path:"/*",element:Object(h.jsx)(x,{})}),Object(h.jsx)(u.b,{path:a.CONFIRM_PASSWORD,element:Object(h.jsx)(Oe,{})}),Object(h.jsx)(u.b,{path:a.POPUP,element:Object(h.jsx)(_e,{})}),Object(h.jsx)(u.b,{path:a.CREATE_NEW_PASSWORD,element:Object(h.jsx)(me,{})}),Object(h.jsx)(u.b,{path:"/",element:Object(h.jsx)(Ee,{})})]})})]})})},we=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},Pe=n(21),Te=n(39),Re=Object(Pe.b)({cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;return t.type,e},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN/SET_AUTH_LOGIN_DATA":return Object(C.a)(Object(C.a)({},e),{},{isAuth:t.isAuth});case"LOGIN/SET_ERROR_MESSAGE":return Object(C.a)(Object(C.a)({},e),{},{error:t.error});default:return e}},profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;return"SET_USER_DATA"===t.type?Object(C.a)(Object(C.a)({},e),t.payload):e},errorMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FORGOT_PASSWORD/SET_VALIDATION_ERROR_MESSAGE":return Object(C.a)(Object(C.a)({},e),{},{errorValidation:t.errorValidation});case"FORGOT_PASSWORD/SET_NETWORK_ERROR_MESSAGE":return Object(C.a)(Object(C.a)({},e),{},{errorNetwork:t.errorNetwork});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET_STATUS":return Object(C.a)(Object(C.a)({},e),{},{status:t.status});case"APP/SET_ERROR":return Object(C.a)(Object(C.a)({},e),{},{error:t.error});case"APP/SET_IS_INITIALIZED":return Object(C.a)(Object(C.a)({},e),{},{isInitialized:t.isInitialized});default:return Object(C.a)({},e)}},decks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;return"FETCH_DECKS"===t.type?[].concat(Object(fe.a)(e),Object(fe.a)(t.decks)):e}}),Ae=Object(Pe.c)(Re,Object(Pe.a)(Te.a));window.store=Ae,i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(l.a,{children:Object(h.jsx)(o.a,{store:Ae,children:Object(h.jsx)(Se,{})})})}),document.getElementById("root")),we()}},[[70,1,2]]]);
//# sourceMappingURL=main.ea5337af.chunk.js.map