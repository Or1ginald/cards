(this.webpackJsonpcards=this.webpackJsonpcards||[]).push([[0],{12:function(e,t,n){e.exports={nav:"Navigation_nav__241z0",wrap:"Navigation_wrap__demD8",listItem:"Navigation_listItem__aBWsF",navElement:"Navigation_navElement__29Vwh",p:"Navigation_p__9Q_7E",navList:"Navigation_navList__z2UR2"}},14:function(e,t,n){e.exports={tableSidebar:"tableSidebar_tableSidebar__1ePGn",buttonsContainer:"tableSidebar_buttonsContainer__2EO7u",header3:"tableSidebar_header3__OUEJn",pickBlock:"tableSidebar_pickBlock__2eBNj"}},16:function(e,t,n){e.exports={letterImg:"ConfirmPassword_letterImg__2N3rI",errorImg:"ConfirmPassword_errorImg__3qq5C",heading:"ConfirmPassword_heading__2gXl4"}},17:function(e,t,n){e.exports={mainContainer:"Page_error_404_mainContainer__v4xGI",linkContainer:"Page_error_404_linkContainer__16-JD"}},21:function(e,t,n){e.exports={app:"App_app__2aOdL",layout:"App_layout__2S8fS",main:"App_main__24PHL"}},26:function(e,t,n){e.exports={inputWrap:"CustomInputText_inputWrap__3zwmg",input:"CustomInputText_input__Ry5T4"}},3:function(e,t,n){e.exports={mainContainer:"Common_mainContainer__1t-zw",contentWrap:"Common_contentWrap__1Axzh",content:"Common_content__UidQH",btn:"Common_btn__1nWkw",inputEmail:"Common_inputEmail__2Um59",inputPassword:"Common_inputPassword__3GoZh",inputCentering:"Common_inputCentering__-eDhT",avatar:"Common_avatar__2jZRp"}},37:function(e,t,n){e.exports={loader:"Preloader_loader__2syPF"}},38:function(e,t,n){e.exports={rememberMeInput:"Login_rememberMeInput__1zYYI"}},39:function(e,t,n){e.exports={btns:"Registrations_btns__HPNCD"}},40:function(e,t,n){e.exports={range:"Range_range__2Bftj"}},41:function(e,t,n){e.exports={button:"CustomButton_button__Urnfr"}},47:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a,c=n(1),r=n.n(c),i=n(20),s=n.n(i),o=(n(47),n(6)),l=n(7),d=n(5),u=n(2),j=n(21),b=n.n(j),O=n.p+"static/media/error404.688fee4d.gif",h=n(17),p=n.n(h),m=n(0),_=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:p.a.mainContainer,children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:O,alt:"error404",className:p.a.page_404})}),Object(m.jsxs)("div",{className:p.a.linkContainer,children:[" ",Object(m.jsx)(l.b,{to:"/profile",className:p.a.link,children:"Back to home"})]})]})})},f=n(12),x=n.n(f),v=o.c,g=function(e){var t=Object(c.useState)(e),n=Object(d.a)(t,2),a=n[0],r=n[1];return{value:a,handleValue:function(e){return r(e.target.value)},resetValue:function(){return r(e)}}},N={},S=n(4),C=n(36),E=n.n(C).a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),T=function(e){return E.post("auth/login",e)},k=function(){return E.delete("auth/me",{})},I=function(){return E.post("auth/me")},P=function(e){return E.post("auth/register",e)},w={status:"idle",error:null,isInitialized:!1},A=function(e){return{type:"APP/SET_STATUS",status:e}},R={errorValidation:null,errorNetwork:null},y=function(e){return{type:"FORGOT_PASSWORD/SET_VALIDATION_ERROR_MESSAGE",errorValidation:e}},D=function(e){return{type:"FORGOT_PASSWORD/SET_NETWORK_ERROR_MESSAGE",errorNetwork:e}},G={isAuth:!1,error:null},U=function(e){return{type:"LOGIN/SET_AUTH_LOGIN_DATA",isAuth:e}},F={profile:{_id:null,avatar:null,name:"",email:null,rememberMe:!1}},L=function(e){return e.login.isAuth},M=function(e){return e.app.isInitialized},W=function(e){return e.app.status},V=n(26),z=n.n(V),B=Object(c.memo)((function(e){var t=e.placeholder,n=e.typeInput,a=void 0===n?"text":n,c=e.className,r=e.value,i=e.onChange,s=e.name;return Object(m.jsx)("div",{className:z.a.inputWrap,children:Object(m.jsx)("input",{size:40,type:a,name:s,value:r,onChange:i,placeholder:t,className:null!==c&&void 0!==c?c:z.a.input,autoComplete:"off",spellCheck:!1,"aria-autocomplete":"list"})})})),H=function(e){return e.errorMessage.errorNetwork},K=function(e){return e.errorMessage.errorValidation},Z=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},J=function(e){return/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(e)},$=n(37),Q=n.n($),q=n.p+"static/media/preloader1.9c1d25d2.gif",X=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:Q.a.loader,src:q,alt:"preloader"})})},Y=n(38),ee=n.n(Y);!function(e){e.REGISTRATION="/registration",e.LOGIN="/login",e.PROFILE="/profile",e.CONFIRM_PASSWORD="/confirmPassword/*",e.POPUP="/popup",e.CREATE_NEW_PASSWORD="/createNewPassword/:token",e.PAGE_404="/*"}(a||(a={}));var te=n(3),ne=n.n(te),ae=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],i=g(""),s=i.value,j=i.handleValue,b=i.resetValue,O=g(""),h=O.value,p=O.handleValue,_=O.resetValue,f=Object(o.b)(),x=v(L),N=v(W),S=v(K),C=v(H);return x?Object(m.jsx)(u.a,{to:a.PROFILE}):Object(m.jsx)("div",{className:ne.a.mainContainer,children:"loading"===N?Object(m.jsx)(X,{}):Object(m.jsx)("div",{className:ne.a.content,children:Object(m.jsxs)("div",{className:ne.a.contentWrap,children:[Object(m.jsx)("h2",{children:" Login "}),S&&Object(m.jsxs)("span",{style:{color:"red"},children:[" ",S," "]}),C&&Object(m.jsxs)("span",{style:{color:"red"},children:[" ",C," "]}),Object(m.jsx)(B,{onChange:j,value:s,placeholder:"Email",typeInput:"text"}),Object(m.jsx)(B,{placeholder:"password",typeInput:"password",value:h,onChange:p}),Object(m.jsxs)("div",{className:ee.a.rememberMeInput,children:["remember me",Object(m.jsx)("input",{type:"checkbox",checked:n,onChange:function(e){return r(e.currentTarget.checked)}})]}),Object(m.jsx)("div",{children:Object(m.jsx)(l.b,{to:a.CONFIRM_PASSWORD,children:" Forgot password "})}),Object(m.jsx)("button",{onClick:function(){if(!J(h)||!Z(s))return f(y("invalid data ;-(")),void setTimeout((function(){f(y(""))}),2e3);var e;J(h)&&Z(s)&&(f((e={email:s,password:h,rememberMe:n},function(t){t(A("loading")),T(e).then((function(){t(U(!0)),t(A("succeeded"))})).catch((function(e){t(A("succeeded"));var n=e.response?e.response.data.error:"".concat(e.message,", more details in the console");t(D(n)),setTimeout((function(){t(D(""))}),2e3)})).finally((function(){t(A("idle"))}))})),b(""),_(""),f(A("succeeded")))},className:ne.a.btn,children:"Sign In"}),Object(m.jsx)("p",{children:" Do not have an account? "}),Object(m.jsx)(l.b,{to:a.REGISTRATION,children:" Sign Up "})]})})})},ce=n.p+"static/media/103781_profile_edit_user_icon.4f216192.png",re=function(e){var t=e.avatar,n=e.name,c=e.onClickLogOut,r=e.isAuthUser,i=e.activateEditMode,s=e.deactivateEditMode,o=e.editMode,d=e.email;return Object(m.jsxs)("div",{className:ne.a.content,children:[Object(m.jsx)("h2",{children:" Profile "}),Object(m.jsx)("img",{alt:"avatar_image",className:ne.a.avatar,src:null!==t?t:ce}),!o&&Object(m.jsxs)("div",{children:[Object(m.jsxs)("span",{children:["Nickname: ",n]}),Object(m.jsx)("div",{onDoubleClick:i,onBlur:s,children:d})]}),r?Object(m.jsxs)("div",{children:[n,Object(m.jsx)("button",{className:ne.a.btn,onClick:c,children:"Log out"})]}):Object(m.jsx)(l.c,{to:a.LOGIN,children:"Login"})]})},ie=function(){var e=Object(o.c)((function(e){return e.profilePage.profile})),t=Object(c.useState)(!1),n=Object(d.a)(t,2),r=n[0],i=n[1],s=Object(o.b)(),l=v(L),j=v(W);return l?Object(m.jsx)("div",{className:ne.a.mainContainer,children:"loading"===j?Object(m.jsx)(X,{}):Object(m.jsx)(re,{email:e.email,editMode:r,activateEditMode:function(){return i(!0)},deactivateEditMode:function(){i(!1)},name:e.name,avatar:e.avatar,isAuthUser:l,onClickLogOut:function(){s((function(e){e(A("loading")),k().then((function(){e(U(!1)),e({type:"LOGIN/SET_ERROR_MESSAGE",error:""}),e(A("idle"))}))}))}})}):Object(m.jsx)(u.a,{to:a.LOGIN})},se=function(e){return E.post("auth/forgot",e)},oe=function(e){return E.post("auth/set-new-password",e)},le={isFetching:!1,isSignUp:!1},de=function(e){return{type:"REGISTRATION/IS_FETCHING",isFetching:e}},ue=n(39),je=n.n(ue),be=function(e){var t=e.email,n=e.handleEmail,a=e.errorValid,c=e.errorNetwork,r=e.password,i=e.confirmPassword,s=e.handlePassword,o=e.handleConfirmPassword,l=e.onSendButtonClick,d=e.onCancelButtonClick,u=e.isFetching;return Object(m.jsx)("div",{className:ne.a.mainContainer,children:Object(m.jsx)("div",{className:ne.a.content,children:Object(m.jsxs)("div",{className:ne.a.contentWrap,children:[Object(m.jsx)("h2",{children:"Registration"}),Object(m.jsxs)("span",{style:{color:"red"},children:[" ",a," "]}),Object(m.jsxs)("span",{style:{color:"red"},children:[" ",c," "]}),Object(m.jsx)(B,{placeholder:"Email",typeInput:"email",onChange:n,value:t,name:"user[email]"}),Object(m.jsx)(B,{placeholder:"Password",typeInput:"password",onChange:s,value:r,name:"user[password]"}),Object(m.jsx)(B,{placeholder:"Confirm Password",typeInput:"password",onChange:o,value:i,name:"user[password]"}),Object(m.jsx)("p",{children:" Have fun! "}),Object(m.jsxs)("div",{className:je.a.btns,children:[Object(m.jsx)(we,{title:"Cancel",onClick:d}),Object(m.jsx)(we,{title:"Create",onClick:l,disabled:u})]})]})})})},Oe=function(){var e=g(""),t=e.value,n=e.handleValue,c=e.resetValue,r=g(""),i=r.value,s=r.handleValue,l=r.resetValue,d=g(""),j=d.value,b=d.handleValue,O=d.resetValue,h=Object(o.c)((function(e){return e.signUp.isFetching})),p=Object(o.c)((function(e){return e.signUp.isSignUp})),_=v(K),f=v(H),x=Object(o.b)(),N={email:t,password:i};return p?Object(m.jsx)(u.a,{to:a.LOGIN}):Object(m.jsx)(be,{email:t,password:i,confirmPassword:j,handleEmail:n,handlePassword:s,handleConfirmPassword:b,isFetching:h,onSendButtonClick:function(){var e;i===j&&null!==i&&null!==j&&J(i)&&Z(t)||(x(y("invalid data ;-(")),setTimeout((function(){x(y(""))}),1e3)),J(i)&&Z(t)&&(x((e=N,function(t){t(de(!0)),t(A("loading")),P(e).then((function(){t({type:"REGISTRATION/IS_SIGNUP_SUCCESSFUL",isSignUpSuccessful:!0}),t(A("succeeded"))})).catch((function(e){t(A("succeeded"));var n=e.response?e.response.data.error:"".concat(e.message,", more details in the console");t(D(n)),setTimeout((function(){t(D(""))}),2e3)})).finally((function(){t(de(!1))}))})),l(""),c(""),O(""))},onCancelButtonClick:function(){c(""),l(""),O("")},errorValid:_,errorNetwork:f})},he=[{id:1,title:"registration",link:a.REGISTRATION},{id:2,title:"login",link:a.LOGIN},{id:3,title:"profile",link:a.PROFILE},{id:4,title:"confirmPassword",link:a.CONFIRM_PASSWORD},{id:5,title:"popup",link:a.POPUP},{id:6,title:"createNewPassword",link:a.CREATE_NEW_PASSWORD},{id:7,title:"page404",link:a.PAGE_404}],pe=function(){return Object(m.jsx)("div",{className:x.a.nav,children:Object(m.jsx)("div",{className:x.a.wrap,children:Object(m.jsx)("div",{className:x.a.navList,children:he.map((function(e){var t=e.id,n=e.title,a=e.link;return Object(m.jsx)(l.c,{className:x.a.listItem,to:a,children:Object(m.jsx)("div",{className:x.a.navElement,children:n})},t)}))})})})},me=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],r=g(""),i=r.value,s=r.handleValue,j=r.resetValue,b=Object(o.b)(),O=v(K),h=v(H),p=v(W),_={email:i,from:"test-front-admin <samutic40@gmail.com>",message:"<div style='background-color: #ffd500; \npadding: 15px; \nborder-color: #ff9900; \nwidth: 250px;\nheight: 30px'> \npassword recovery link: <a href='https://or1ginald.github.io/gameCards/#/createNewPassword/$token$'> recovery link </a></div>"};return n?Object(m.jsx)(u.a,{to:"/popup"}):Object(m.jsx)("div",{className:ne.a.mainContainer,children:"loading"===p?Object(m.jsx)(X,{}):Object(m.jsx)("div",{className:ne.a.content,children:Object(m.jsxs)("div",{className:ne.a.contentWrap,children:[Object(m.jsx)("h2",{children:"Forgot your password?"}),O&&Object(m.jsxs)("span",{style:{color:"red"},children:[" ",O," "]}),h&&Object(m.jsxs)("span",{style:{color:"red"},children:[" ",h," "]}),Object(m.jsx)("div",{className:ne.a.inputCentering,children:Object(m.jsx)(B,{placeholder:"Email",typeInput:"email",onChange:s,value:i})}),Object(m.jsx)("p",{children:" Enter your email and we will send you further instructions"}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:ne.a.btn,onClick:function(){Z(i)?(b(function(e,t){return function(n){n(A("loading")),se(e).then((function(){t(!0),n(A("succeeded"))})).catch((function(e){n(A("succeeded"));var t=e.response?e.response.data.error:"".concat(e.message,", more details in the console");n(D(t)),setTimeout((function(){n(D(""))}),2e3)}))}}(_,a)),j("")):(b(y("invalid email ;-(")),setTimeout((function(){b(y(""))}),2e3))},children:"send instructions"})}),Object(m.jsx)("span",{children:"Did you remember your password?"}),Object(m.jsx)(l.b,{to:"/login",children:" Try logging in "})]})})})},_e=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],r=g(""),i=r.value,s=r.handleValue,l=r.resetValue,j=Object(o.b)(),b=v(K),O=v(H),h=v(W),p=Object(u.h)().token,_={password:i,resetPasswordToken:p};return n?Object(m.jsx)(u.a,{to:"/login"}):Object(m.jsx)("div",{className:ne.a.mainContainer,children:"loading"===h?Object(m.jsx)(X,{}):Object(m.jsx)("div",{className:ne.a.content,children:Object(m.jsxs)("div",{className:ne.a.contentWrap,children:[Object(m.jsx)("h2",{children:"Create new password"}),b&&Object(m.jsxs)("span",{style:{color:"red"},children:[" ",b," "]}),O&&Object(m.jsxs)("span",{style:{color:"red"},children:[" ",O," "]}),Object(m.jsx)("div",{className:ne.a.inputCentering,children:Object(m.jsx)(B,{placeholder:"Password",typeInput:"password",onChange:s,value:i})}),Object(m.jsx)("p",{children:" Create new password and we will send you further instructions to email"}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:ne.a.btn,onClick:function(){J(i)?(j(A("loading")),j(function(e,t){return function(n){oe(e).then((function(){t(!0)})).catch((function(e){var t=e.response?e.response.data.error:"".concat(e.message,", more details in the console");n(D(t)),setTimeout((function(){n(D(""))}),2e3)}))}}(_,a)),j(A("succeeded")),l("")):(j(y("invalid password ;-(")),setTimeout((function(){j(y(""))}),2e3))},children:"Create new password"})})]})})})},fe=n.p+"static/media/letter.3761fe05.png",xe=n(16),ve=n.n(xe),ge=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:ne.a.mainContainer,children:Object(m.jsxs)("div",{className:ne.a.content,children:[Object(m.jsx)("img",{className:ve.a.letterImg,src:fe,alt:"letter"}),Object(m.jsxs)("div",{className:ne.a.contentWrap,children:[Object(m.jsx)("h2",{className:ve.a.heading,children:"Check Email"}),Object(m.jsx)("p",{children:"We have sent the Email with instructions to your email "})]})]})})})},Ne=(n.p,n(40)),Se=n.n(Ne),Ce=function(){var e=Object(c.useState)(0),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)("div",{children:[n,Object(m.jsx)("input",{type:"range",onChange:function(e){a(+e.currentTarget.value)},value:n,className:Se.a.range})]})},Ee=n(14),Te=n.n(Ee),ke=r.a.memo((function(){return Object(m.jsxs)("div",{className:Te.a.tableSidebar,children:[Object(m.jsxs)("div",{className:Te.a.pickBlock,children:[Object(m.jsx)("h3",{className:Te.a.header3,children:"Show cards packs"}),Object(m.jsxs)("div",{className:Te.a.buttonsContainer,children:[Object(m.jsx)(we,{title:"My",onClick:function(){}}),Object(m.jsx)(we,{title:"All",onClick:function(){}})]})]}),Object(m.jsxs)("div",{className:Te.a.pickBlock,children:[Object(m.jsx)("div",{children:"Number of cards"}),Object(m.jsx)(Ce,{})]})]})})),Ie=n(41),Pe=n.n(Ie),we=r.a.memo((function(e){var t=e.onClick,n=e.title,a=e.disabled;return Object(m.jsx)("button",{className:Pe.a.button,onClick:function(){t()},disabled:a,children:n})})),Ae=n(22),Re=function(){return E.get("cards/pack")},ye=function(e){return E.post("cards/pack",{cardsPack:e})},De=function(e){return E.delete("cards/pack/?id=".concat(e))},Ge=function(e){return E.put("cards/pack",{cardsPack:e})},Ue=[],Fe=r.a.memo((function(e){var t=Object(c.useState)(!1),n=Object(d.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(e.value),s=Object(d.a)(i,2),l=s[0],u=s[1],j=Object(o.b)();return a?Object(m.jsx)("textarea",{value:l,onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){j(function(e,t){return function(n){n(A("loading")),Ge({_id:t}).then((function(){n(function(e,t){return{type:"UPDATE_DECK",title:e,id:t}}(e,t)),n(A("succeeded"))})).catch((function(e){n(A("succeeded"));var t=e.response?e.response.data.error:"".concat(e.message,", more details in the console");n(D(t))}))}}(l,e.id)),r(!1)}}):Object(m.jsx)("span",{onDoubleClick:function(){r(!0),u(e.value)},children:e.value})})),Le=n(8),Me=n.n(Le),We=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(o.b)(),i=v(H),s=v(W),l=v((function(e){return e.decks}));Object(c.useEffect)((function(){r((function(e){e(A("loading")),Re().then((function(t){e({type:"FETCH_DECKS",decks:t.data.cardPacks}),e(A("succeeded"))})).catch((function(t){e(A("succeeded"));var n=t.response?t.response.data.error:"".concat(t.message,", more details in the console");e(D(n))}))}))}),[r]);var u=function(e){r(function(e){return function(t){t(A("loading")),De(e).then((function(){t(function(e){return{type:"REMOVE_DECK",id:e}}(e)),t(A("succeeded"))})).catch((function(e){t(A("succeeded"));var n=e.response?e.response.data.error:"".concat(e.message,", more details in the console");t(D(n))}))}}(e)),r(D(""))};return Object(m.jsxs)("div",{className:Me.a.wrapper,children:[Object(m.jsx)(ke,{}),"loading"===s?Object(m.jsx)(X,{}):Object(m.jsx)("div",{className:Me.a.rightBlock,children:Object(m.jsxs)("div",{className:Me.a.decks,children:[Object(m.jsx)("h3",{style:{fontSize:"1.1em"},children:" Packs list "}),Object(m.jsxs)("div",{className:Me.a.searchInputSection,children:[Object(m.jsx)("input",{className:Me.a.inputSearch,id:"decks",placeholder:"Search",type:"search"}),Object(m.jsx)("textarea",{className:Me.a.textArea,placeholder:"name pack",value:n,onChange:function(e){a(e.currentTarget.value)}}),Object(m.jsx)("button",{className:ne.a.btn,onClick:function(){var e;r((e={name:n},function(t){t(A("loading")),ye(e).then((function(e){var n=e.data.newCardsPack;t(function(e){return{type:"ADD_DECK",deck:e}}(n)),t(A("succeeded"))})).catch((function(e){t(A("succeeded"));var n=e.response?e.response.data.error:"".concat(e.message,", more details in the console");t(D(n))}))})),a("")},children:"Add new pack"})]}),Object(m.jsxs)("div",{className:Me.a.tableCommon,children:[Object(m.jsxs)("div",{className:Me.a.element,children:[Object(m.jsx)("div",{className:Me.a.elementPartOne,style:{fontSize:"16px"},children:"Name"}),Object(m.jsx)("div",{className:Me.a.elementPartTwo,style:{fontSize:"16px"},children:"CardsCount"}),Object(m.jsx)("div",{className:Me.a.elementPartThree,style:{fontSize:"16px"},children:"Updated"})]}),Object(m.jsxs)("div",{className:Me.a.tableRow,children:[i&&Object(m.jsxs)("span",{style:{color:"red"},children:[" ",i," "]}),l.map((function(e){return Object(m.jsxs)("div",{className:Me.a.element,children:[Object(m.jsx)("div",{className:Me.a.elementPartOne,children:Object(m.jsx)(Fe,{value:e.name,id:e._id})}),Object(m.jsx)("div",{className:Me.a.elementPartTwo,children:e.cardsCount}),Object(m.jsx)("div",{className:Me.a.elementPartThree,children:e.updated}),Object(m.jsx)("button",{className:Me.a.btn,children:"update"}),Object(m.jsx)("button",{className:Me.a.btn,onClick:function(){return u(e._id)},children:"delete"})]},1e5*Math.random())}))]})]})]})})]})},Ve=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(We,{})})},ze=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],i=v(M),s=Object(o.b)();if(Object(c.useEffect)((function(){s((function(e){I().then((function(){e(U(!0))})).finally((function(){e({type:"APP/SET_IS_INITIALIZED",isInitialized:!0})}))}))}),[]),!i)return Object(m.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(m.jsx)(X,{})});return Object(m.jsx)("div",{className:b.a.app,children:Object(m.jsxs)("div",{className:b.a.layout,children:[Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:ne.a.btn,onClick:function(){r(!n)},children:"Show menu"})}),n?Object(m.jsx)(pe,{}):Object(m.jsx)("div",{className:x.a.nav}),Object(m.jsx)("div",{className:b.a.main,children:Object(m.jsxs)(u.d,{children:[Object(m.jsx)(u.b,{path:a.LOGIN,element:Object(m.jsx)(ae,{})}),Object(m.jsx)(u.b,{path:a.REGISTRATION,element:Object(m.jsx)(Oe,{})}),Object(m.jsx)(u.b,{path:a.PROFILE,element:Object(m.jsx)(ie,{})}),Object(m.jsx)(u.b,{path:a.PAGE_404,element:Object(m.jsx)(_,{})}),Object(m.jsx)(u.b,{path:a.CONFIRM_PASSWORD,element:Object(m.jsx)(me,{})}),Object(m.jsx)(u.b,{path:a.POPUP,element:Object(m.jsx)(ge,{})}),Object(m.jsx)(u.b,{path:a.CREATE_NEW_PASSWORD,element:Object(m.jsx)(_e,{})}),Object(m.jsx)(u.b,{path:"/",element:Object(m.jsx)(Ve,{})})]})})]})})},Be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},He=n(23),Ke=n(42),Ze=Object(He.b)({cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;return t.type,e},signUp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTRATION/IS_FETCHING":return Object(S.a)(Object(S.a)({},e),{},{isFetching:t.isFetching});case"REGISTRATION/IS_SIGNUP_SUCCESSFUL":return Object(S.a)(Object(S.a)({},e),{},{isSignUp:t.isSignUpSuccessful});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN/SET_AUTH_LOGIN_DATA":return Object(S.a)(Object(S.a)({},e),{},{isAuth:t.isAuth});case"LOGIN/SET_ERROR_MESSAGE":return Object(S.a)(Object(S.a)({},e),{},{error:t.error});default:return e}},profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(S.a)(Object(S.a)({},e),t.payload);case"SET_USER_PROFILE":return Object(S.a)(Object(S.a)({},e),{},{profile:Object(S.a)(Object(S.a)({},e.profile),t.profile)});default:return e}},errorMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FORGOT_PASSWORD/SET_VALIDATION_ERROR_MESSAGE":return Object(S.a)(Object(S.a)({},e),{},{errorValidation:t.errorValidation});case"FORGOT_PASSWORD/SET_NETWORK_ERROR_MESSAGE":return Object(S.a)(Object(S.a)({},e),{},{errorNetwork:t.errorNetwork});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET_STATUS":return Object(S.a)(Object(S.a)({},e),{},{status:t.status});case"APP/SET_ERROR":return Object(S.a)(Object(S.a)({},e),{},{error:t.error});case"APP/SET_IS_INITIALIZED":return Object(S.a)(Object(S.a)({},e),{},{isInitialized:t.isInitialized});default:return Object(S.a)({},e)}},decks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DECKS":return[].concat(Object(Ae.a)(e),Object(Ae.a)(t.decks));case"REMOVE_DECK":return e.filter((function(e){return e._id!==t.id}));case"ADD_DECK":return[Object(S.a)({},t.deck)].concat(Object(Ae.a)(e));case"UPDATE_DECK":return e.map((function(e){return e._id===t.id?Object(S.a)(Object(S.a)({},e),{},{name:t.title}):e}));default:return e}}}),Je=Object(He.c)(Ze,Object(He.a)(Ke.a));window.store=Je,s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(l.a,{children:Object(m.jsx)(o.a,{store:Je,children:Object(m.jsx)(ze,{})})})}),document.getElementById("root")),Be()},8:function(e,t,n){e.exports={wrapper:"Table_wrapper__Q6n57",leftBlock:"Table_leftBlock__1RTP-",btns:"Table_btns__gIZA8",rightBlock:"Table_rightBlock__2kslH",decks:"Table_decks__1krzl",element:"Table_element__28FA6",elementPart:"Table_elementPart__aB51_",tableCaption:"Table_tableCaption__16t_c",captionElement:"Table_captionElement__3xb70",btn:"Table_btn__4zGgo",searchInputSection:"Table_searchInputSection__297PX",inputSearch:"Table_inputSearch__1zU9D",textArea:"Table_textArea__3jdnU",elementPartOne:"Table_elementPartOne__2mrK7",elementPartTwo:"Table_elementPartTwo__3rphb",elementPartThree:"Table_elementPartThree__2wUEF"}}},[[73,1,2]]]);
//# sourceMappingURL=main.4d8f0ebf.chunk.js.map