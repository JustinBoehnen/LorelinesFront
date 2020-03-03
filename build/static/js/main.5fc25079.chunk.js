(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{110:function(e,t,a){e.exports=a(143)},137:function(e,t,a){},143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),i=a.n(o),l=a(11),c=a.n(l),s=a(26),m=a(39),u=a(40),d=a(42),p=a(41),h=a(43),E=a(103),f=a(208),g=a(209),w=a(215),b=a(210),y=a(27),v=a.n(y),O=a(31),x=a(25),j=a(14),k=a(45),N=(a(137),function(e){return console.log("set user to: ",e.name),{type:"USER_SET",payload:e}}),S=function(e){return{type:"LORELINE_CHANGED",payload:e}},C=function(e){return{type:"SET_LOADING",payload:e}},D=function(e){return{type:"SET_WINDOW_WIDTH",payload:e}},L=function(e){return{type:"SET_WINDOW_HEIGHT",payload:e}},I=a(22),A=a(93),T=a.n(A),W=a(94),P=a(175),_=a(37),z=a(211),M=a(179),H=a(182),G=a(185),B=a(180),R=a(181),U=a(183),Z=a(184),J=a(46),X=a.n(J),F=Object(W.a)((function(e){return{content:{flexGrow:1},link:{color:e.palette.secondary.main,textDecoration:"underline"},field:{width:"20vw",minWidth:"250px"},error:{color:e.palette.error.main}}}));function K(e){var t=Object(n.useState)(""),a=Object(I.a)(t,2),o=a[0],i=a[1],l=Object(n.useState)(""),m=Object(I.a)(l,2),u=m[0],d=m[1],p=Object(n.useState)(!1),h=Object(I.a)(p,2),E=h[0],f=h[1],g=Object(n.useState)(!1),w=Object(I.a)(g,2),b=w[0],y=w[1],v=Object(n.useState)(!1),O=Object(I.a)(v,2),x=O[0],k=O[1],N=F(),S=function(){var t=Object(s.a)(c.a.mark((function t(a){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),f(!0),!X.a.validate(o)||""===u){t.next=10;break}return t.next=5,e.tryLogin(o,u);case 5:return(n=t.sent)||y(!0),t.abrupt("return",n);case 10:return t.abrupt("return",!1);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("main",{className:N.content},r.a.createElement("form",null,r.a.createElement(P.a,{style:{minHeight:"100vh",textAlign:"center"},container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement("img",{alt:"logo",src:T.a,width:160}),r.a.createElement("br",null),r.a.createElement(P.a,{item:!0},r.a.createElement(_.a,{style:{padding:2,fontWeight:900,fontSize:50}},"Log in to Lorelines")),r.a.createElement(P.a,{item:!0},r.a.createElement(z.a,{className:N.field,error:E&&""===o||E&&!X.a.validate(o),helperText:E&&""===o?"this field cannot be empty":E&&!X.a.validate(o)?"invalid email address":"",name:"email",label:"Email",type:"email",variant:"outlined",margin:"normal",autoComplete:"off",InputProps:{startAdornment:r.a.createElement(M.a,{position:"start"},r.a.createElement(B.a,{color:"secondary"}))},value:o,onChange:function(e){return i(e.target.value)}})),r.a.createElement(P.a,{item:!0},r.a.createElement(z.a,{className:N.field,error:E&&""===u,helperText:E&&""===u?"this field cannot be empty":"",name:"password",label:"Password",variant:"outlined",margin:"normal",type:x?"text":"password",autoComplete:"off",InputProps:{startAdornment:r.a.createElement(M.a,{position:"start"},r.a.createElement(R.a,{color:"secondary"})),endAdornment:r.a.createElement(M.a,{position:"end"},r.a.createElement(H.a,{"aria-label":"toggle password visibility",onClick:function(){return k(!x)},onMouseDown:function(e){return e.preventDefault()}},x?r.a.createElement(U.a,null):r.a.createElement(Z.a,null)))},value:u,onChange:function(e){return d(e.target.value)}})),b&&r.a.createElement(P.a,{item:!0},r.a.createElement(_.a,{className:N.error,style:{padding:5,fontSize:16}},"an incorrect email or password was provided",r.a.createElement("br",null),"please try again")),r.a.createElement(P.a,{item:!0},r.a.createElement(G.a,{style:{marginTop:16,padding:5,fontSize:22,borderRadius:"50px",width:"260px"},type:"submit",color:"primary",variant:"contained",onClick:function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},"Log in")),r.a.createElement(P.a,{item:!0},r.a.createElement(_.a,{style:{padding:5,fontSize:16}},"I forgot"," ",r.a.createElement(j.b,{className:N.link,to:"/forgot"},"my password"))),r.a.createElement(P.a,{item:!0},r.a.createElement(_.a,{style:{padding:30,fontSize:20}},"Don't have a Lorelines account?"," ",r.a.createElement(j.b,{className:N.link,to:"/register"},"Click here"))))))}var V=a(48),Y=a(20),$=a(36),q=a(3),Q=a(24),ee=a(186),te=a(188),ae=a(189),ne=a(187),re=a(190),oe=Object(W.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},toolbar:Object($.a)({display:"flex",alignItems:"center",justifyContent:"flex-end"},e.mixins.toolbar),logo:Object(Y.a)({fill:"#fff",height:35},e.breakpoints.up("md"),{height:50}),orange:{fill:e.palette.primary.main},logoutButton:{color:e.palette.primary.main,backgroundColor:"white",fontSize:14,fontWeight:"bolder",marginLeft:"auto",marginRight:0,"&:hover":{backgroundColor:"#303030",color:e.palette.primary.main}},logoutIcon:{marginLeft:"auto",marginRight:0}}}));function ie(e){var t=oe(),a=Object(Q.a)(),n=Object(ee.a)(a.breakpoints.up("md"));return r.a.createElement("div",{className:t.root},r.a.createElement(te.a,{position:"fixed",className:Object(q.a)(t.appBar,Object(Y.a)({},t.appBarShift,e.drawerOpen))},r.a.createElement(ae.a,null,r.a.createElement(H.a,{color:"inherit","aria-label":"open drawer",onClick:function(){return e.setDrawerOpen(!0)},edge:"start",className:Object(q.a)(t.menuButton,e.drawerOpen&&t.hide)},r.a.createElement(re.a,null)),r.a.createElement("svg",{className:t.logo,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 41.17 41.17"},r.a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},r.a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},r.a.createElement("circle",{className:"cls-1",cx:"20.58",cy:"20.58",r:"20.58"}),r.a.createElement("path",{className:t.orange,d:"M16.76,13.22a.46.46,0,0,0,.74-.12l1.21-2.4a1.51,1.51,0,0,0-.91-2.11A1.55,1.55,0,0,0,16,9.43l-.86,1.71a.46.46,0,0,0,.09.54Z"}),r.a.createElement("path",{className:t.orange,d:"M13.08,16.61a.47.47,0,0,0-.75.13L5.46,30.47a1.51,1.51,0,0,0,1.15,2.16,1.54,1.54,0,0,0,1.57-.87l6.53-13.07a.47.47,0,0,0-.09-.54Z"}),r.a.createElement("path",{className:t.orange,d:"M34.56,8.53A1.55,1.55,0,0,0,33,9.41L26.46,22.48a.46.46,0,0,0,.09.53l1.54,1.54a.46.46,0,0,0,.75-.12L35.71,10.7A1.51,1.51,0,0,0,34.56,8.53Z"}),r.a.createElement("path",{className:t.orange,d:"M24.41,28a.46.46,0,0,0-.75.12l-1.2,2.4a1.51,1.51,0,0,0,.91,2.11,1.55,1.55,0,0,0,1.81-.84L26,30a.46.46,0,0,0-.09-.54Z"}),r.a.createElement("path",{className:t.orange,d:"M10.81,8.68a1.51,1.51,0,0,0-2.13,2.13L30.36,32.48a1.5,1.5,0,0,0,2.12-2.12Z"})))),r.a.createElement("svg",{className:t.logo,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 168.56 43.24"},r.a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},r.a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},r.a.createElement("path",{className:"cls-1",d:"M21.74,35.33c-6.19,0-11.95,4-15.55,4-.72,0-.92-.48-.92-1C5.27,27.81,21.54,4.2,31.73,4.2c1.28,0,1.8.52,1.8,1.35,0,3.28-8.11,11.31-13.31,11.31-.76,0-.92-.68-1.28-.68s-.36.84-.36,1.08c0,2.56,1.92,3.12,3.88,3.12,6.27,0,15.78-10.19,15.78-16.14C38.24,1.76,36.61,0,32.37,0,15.71,0,0,29.41,0,39c0,2.64,2.76,4.2,5.63,4.2,6.44,0,11.11-3,16.59-3a1.94,1.94,0,0,0,2-2A2.57,2.57,0,0,0,21.74,35.33Z"}),r.a.createElement("path",{className:"cls-1",d:"M88.64,36.53c-1.12,0-1.6.52-2.6.52-1.68,0-2.32-1.6-2.32-4a25.51,25.51,0,0,1,.64-5.12C93.15,25.42,99,18.1,99,13.19c0-2.72-1.76-4.68-5.84-4.68-5.83,0-11.86,9.23-14.14,17.87l-1.68.24a.77.77,0,0,0-.38.1c-.62-.9-2.08-1.5-4.66-1.5a13.2,13.2,0,0,0-7.6,2.42,5.59,5.59,0,0,1-2.31.81c-2.83,0-.72-2.51-4.15-2.51s-7.48,5.11-8,5.11h0c-.08,0-.12-.08-.12-.2a12.1,12.1,0,0,0,.88-3.92c0-.91-.28-1.63-1.12-1.63C48,25.3,44,29.41,39.36,29.41h0a8.15,8.15,0,0,1-8,7.16c-1.36,0-1.76-.76-1.76-1.6,0-3.76,5.92-6,10.91-6.4.64-.2,1.32-1.75,1.32-2.87,0-.64-.2-1.12-.76-1.16s-.88,0-1.32,0c-8.35,0-15,6.87-15,11.63,0,2.55,1.92,4.47,6.43,4.47,5.44,0,11.19-3.39,11.51-7.59A5.54,5.54,0,0,0,46,30.53a1.21,1.21,0,0,1,.36,1c0,1.76-1.8,6.51-1.8,7.27,0,1,1.6,1.36,3.24,1.36,1.87,0,2-1.16,2.83-2.2,1-1.63,4.2-6.39,6-6.39.8,0,1.24.84,2.32.84a6.74,6.74,0,0,0,1.74-.26,7.57,7.57,0,0,0-.86,3.34c0,2.87,2.19,5.27,7.43,5.27,4.39,0,9.11-2,9.11-4.71,0-.6-.44-1-1.24-1-1.48,0-2.4,1.72-5.31,1.72-3.48,0-3.48-1-3.48-1,5.33-.66,10.1-4.33,10.84-7.15a2,2,0,0,0,.91.19h.32a21.72,21.72,0,0,0-.4,4.12c0,4.56,1.76,7.91,6.11,7.91,2.28,0,5.36-1.44,5.36-3.31C89.48,36.81,89.32,36.53,88.64,36.53ZM91.2,12.27c1,0,1.59,1,1.59,2.44,0,2.63-2,6.91-7.51,9.63C87.08,18.26,89.92,12.27,91.2,12.27ZM66,32.69c-.32,0-.4-.16-.4-.4,0-1.88,3.24-4,4.88-4,.56,0,1.11.12,1.11.6C71.61,30.33,68,32.69,66,32.69Z"}),r.a.createElement("path",{className:"cls-1",d:"M101.23,35.05c-1.16,0-.92.84-2.48.84s-2.32-1.32-2.32-2.8c0-1.64,1.68-5.24,1.68-5.88a.75.75,0,0,0-.84-.71,13.7,13.7,0,0,0-4.12,1.11c-1.15,1.76-1.91,6.44-1.91,8.56,0,3.11,2.23,4.31,4.59,4.31,3.12,0,6.72-2.08,6.72-4.51A1.22,1.22,0,0,0,101.23,35.05Z"}),r.a.createElement("path",{className:"cls-1",d:"M162.61,28.89a27.75,27.75,0,0,0-4,.32,5.25,5.25,0,0,0-5-3.95c-5.48,0-14.79,11.71-20.38,11.71-1.44,0-1.64-.64-1.64-1a.49.49,0,0,1,0-.2c5.79-.72,11-5,11-7.88,0-1.51-1.44-2.67-5-2.67-6.41,0-11.31,4.63-12.25,8.81-1,.29-3.2,1.58-4.69,1.58-1,0-1-.84-1-1.28,0-1.32.72-2.12.72-3.6s-1.36-1.92-2.76-1.92c-3,0-7.55,3.68-8.19,3.68a.33.33,0,0,1-.32-.36c0-.6.84-2.12.84-3.44,0-1.16-.68-2.15-3.16-2.15C101,26.54,101,30,101,30c0,.72.36,1.48,1.08,1.48s1.55-.64,2.47-.64a1.44,1.44,0,0,1,1.64,1.52c0,1.76-1.8,5-1.8,6.23,0,1,1.08,1.36,1.88,1.36a2.5,2.5,0,0,0,1.56-.56c.56-.48,5.4-5,6.24-5s.83.4.83,1c0,3,.12,4.47,2.6,4.47a13.56,13.56,0,0,0,7.86-3.05c.61,2.24,2.86,3.93,7.25,3.93,8.51,0,16.5-10.95,19.06-10.95a3.34,3.34,0,0,1,2,.56c-4.84,1.52-9,4-9,7.2,0,1.55,1.44,2.71,4.63,2.71,6.88,0,9.79-4.51,9.79-8.59v0c2.68.24,5.44,1.2,5.44,3.32,0,.4-.08.72-.08,1s.2.4.48.4c1.12,0,3.71-1.68,3.71-3.6S166.61,28.89,162.61,28.89Zm-31.69,3.4c0-1.88,3.24-4,4.87-4,.56,0,1.12.12,1.12.6,0,1.44-3.63,3.8-5.59,3.8C131,32.69,130.92,32.53,130.92,32.29Zm20.34,3.48c-.68,0-1-.36-1-.8,0-1.48,2-2.6,4.36-3.12a3.33,3.33,0,0,1,.12.88C154.78,34.25,153.66,35.77,151.26,35.77Z"})))),r.a.createElement((function(){return n?r.a.createElement(G.a,{className:t.logoutButton,onClick:e.logout},"Log Out"):r.a.createElement(H.a,{className:t.logoutIcon,onClick:e.logout},r.a.createElement(ne.a,null))}),null))),r.a.createElement("div",{className:t.toolbar}))}var le=a(214),ce=a(192),se=a(178),me=a(193),ue=a(194),de=a(196),pe=a(191),he=a(195),Ee=a(197),fe=a(198),ge=a(199),we=a(200),be=a(201),ye=Object(W.a)((function(e){return{drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{overflowX:"hidden",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(Y.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:58},e.breakpoints.up("sm"),{width:58}),toolbar:Object($.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),link:{color:e.palette.secondary.main,textDecoration:"underline"}}}));function ve(e){var t,a,n=ye();return r.a.createElement("div",null,r.a.createElement(le.a,{variant:"permanent",className:Object(q.a)(n.drawer,(t={},Object(Y.a)(t,n.drawerOpen,e.drawerOpen),Object(Y.a)(t,n.drawerClose,!e.drawerOpen),t)),classes:{paper:Object(q.a)((a={},Object(Y.a)(a,n.drawerOpen,e.drawerOpen),Object(Y.a)(a,n.drawerClose,!e.drawerOpen),a))},open:e.drawerOpen},r.a.createElement("div",{className:n.toolbar},r.a.createElement(H.a,{onClick:function(){return e.setDrawerOpen(!1)}},r.a.createElement(pe.a,{color:"secondary"}))),r.a.createElement(ce.a,null),r.a.createElement(se.a,null,r.a.createElement(j.b,{className:n.link,to:"/app/account"},r.a.createElement(me.a,{button:!0,key:"Account"},r.a.createElement(ue.a,null,r.a.createElement(he.a,{color:"secondary"})),r.a.createElement(de.a,{primary:"Account"}))),r.a.createElement(j.b,{className:n.link,to:"/app/lorelines"},r.a.createElement(me.a,{button:!0,key:"Lorelines"},r.a.createElement(ue.a,null,r.a.createElement(Ee.a,{color:"secondary"})),r.a.createElement(de.a,{primary:"Lorelines"})))),r.a.createElement(ce.a,null),r.a.createElement(se.a,null,r.a.createElement(j.b,{className:n.link,to:"/app/new"},r.a.createElement(me.a,{button:!0,key:"New Custom Entity"},r.a.createElement(ue.a,null,r.a.createElement(fe.a,{color:"secondary"})),r.a.createElement(de.a,{primary:"New Custom Entity"})))),r.a.createElement(ce.a,null),r.a.createElement(se.a,null,r.a.createElement(j.b,{className:n.link,to:"/app/timeline"},r.a.createElement(me.a,{button:!0,key:"Timeline"},r.a.createElement(ue.a,null,r.a.createElement(ge.a,{color:"secondary"})),r.a.createElement(de.a,{primary:"Timeline"}))),r.a.createElement(j.b,{className:n.link,to:"/app/directory"},r.a.createElement(me.a,{button:!0,key:"Directory"},r.a.createElement(ue.a,null,r.a.createElement(we.a,{color:"secondary"})),r.a.createElement(de.a,{primary:"Directory"})))),r.a.createElement(ce.a,null),r.a.createElement(se.a,null,r.a.createElement(j.b,{className:n.link,to:"/app/about"},r.a.createElement(me.a,{button:!0,key:"About Lorelines"},r.a.createElement(ue.a,null,r.a.createElement(be.a,{color:"secondary"})),r.a.createElement(de.a,{primary:"About Lorelines"}))))))}var Oe=a(97),xe=a.n(Oe),je=a(98),ke=a.n(je),Ne=a(100),Se=a.n(Ne),Ce=a(99),De=a.n(Ce),Le=Object(W.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},drawer:{width:120,flexShrink:0},drawerPaper:{width:120},content:{flexGrow:1,padding:e.spacing(3)},toolbar:e.mixins.toolbar}}));function Ie(){var e=Le();return r.a.createElement("main",{className:e.root},r.a.createElement(P.a,{style:{height:"70vh",width:"70vw",textAlign:"center"},direction:"row",justify:"center",alignItems:"center",container:!0},r.a.createElement(P.a,{item:!0},r.a.createElement(_.a,null,"Canvas and Drag/Drop Components in progress"))),r.a.createElement("div",null,r.a.createElement(le.a,{className:e.drawer,variant:"permanent",anchor:"right"},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(se.a,null,r.a.createElement(me.a,{button:!0,key:"Event Node"},r.a.createElement(ue.a,null,r.a.createElement(xe.a,{color:"secondary"})),r.a.createElement(de.a,{primary:"Event Node"})),r.a.createElement(me.a,{button:!0,key:"Branching Event Node"},r.a.createElement(ue.a,null,r.a.createElement(ke.a,{color:"secondary"})),r.a.createElement(de.a,{primary:"Branching Node"})),r.a.createElement(me.a,{button:!0,key:"Tether"},r.a.createElement(ue.a,null,r.a.createElement(De.a,{color:"secondary"})),r.a.createElement(de.a,{primary:"Tether"})),r.a.createElement(ce.a,null),r.a.createElement(me.a,{button:!0,key:"Warp Node"},r.a.createElement(ue.a,null,r.a.createElement(Se.a,{color:"secondary"})),r.a.createElement(de.a,{primary:"Warp Node"}))))))}var Ae=Object(W.a)((function(e){return{root:{flexGrow:1},link:{color:e.palette.secondary.main,textDecoration:"underline"}}})),Te=Object(O.b)((function(e){return{user:e.user,window:e.window}}))((function(e){var t=Ae();return r.a.createElement("main",{className:t.root},r.a.createElement(P.a,{style:{height:"70vh",textAlign:"left"},direction:"column",justify:"center",alignItems:"center",container:!0},r.a.createElement(P.a,{item:!0},r.a.createElement(_.a,null,"Hello, ",e.user.name||"null",", this is your account view")),r.a.createElement(P.a,{item:!0},r.a.createElement(_.a,null,"Email: ",e.user.email||"null"),r.a.createElement(_.a,null,"Lorelines: ",r.a.createElement("b",null,"3/5")),r.a.createElement(_.a,null,"Member Since: 12/02/19"))))}));var We=a(204),Pe=a(202),_e=a(203),ze=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={open:{},entities:[]},a.handleClick=function(e){return function(){a.setState(Object(Y.a)({},e,!a.state[e]))}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://lorelines-expressapi.herokuapp.com/api/lorelines/".concat(this.props.lorelineId,"/directory/")).then((function(t){var a=t.data;e.setState({entities:a})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(se.a,null,this.state.entities.map((function(t){var a=e.state[t.id]||!1;return r.a.createElement("div",{key:t.id},r.a.createElement(me.a,{button:!0,onClick:e.handleClick(t.id)},r.a.createElement(de.a,{primary:t.name}),a?r.a.createElement(Pe.a,null):r.a.createElement(_e.a,null)),r.a.createElement(We.a,{in:a,timeout:"auto",unmountOnExit:!0},r.a.createElement(se.a,{component:"div",disablePadding:!0},t.instances.map((function(e){return r.a.createElement(me.a,{key:e.id,button:!0},r.a.createElement(_.a,null,e.name))})))))})))}}]),t}(n.Component);var Me=Object(O.b)((function(e){return{entities:e.entities,lorelineId:e.lorelineId}}))(ze),He=Object(W.a)((function(e){return{root:{display:"flex"},drawer:{width:120,flexShrink:0},drawerPaper:{width:120},content:{flexGrow:1,padding:e.spacing(3)},toolbar:e.mixins.toolbar}}));function Ge(e){var t=He();return r.a.createElement("main",{className:t.root},r.a.createElement("div",null,r.a.createElement(le.a,{className:t.drawer,variant:"permanent",anchor:"right"},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(Me,null))))}var Be=Object(W.a)((function(e){return{root:{flexGrow:1},link:{color:e.palette.secondary.main,textDecoration:"underline"}}}));function Re(){var e=Be();return r.a.createElement("main",null,r.a.createElement(P.a,{className:e.root,style:{textAlign:"center"},container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(P.a,{item:!0,xs:3}),r.a.createElement(P.a,{item:!0,xs:6},r.a.createElement(_.a,{style:{fontSize:14}},"Lorelines.com is the junior project of the Oregon Institute of Technology students:"),r.a.createElement(_.a,{style:{fontWeight:500,fontSize:20,color:"#f78d1e"}},"Justin Boehnen, Evan Clark, Seth Ray, and Isaac Medlin"),r.a.createElement(_.a,{style:{fontSize:14}},"Also Known As..."),r.a.createElement(_.a,{style:{padding:20,fontWeight:600,fontSize:80}},"JESI")),r.a.createElement(P.a,{item:!0,xs:3})))}var Ue=a(213),Ze=a(205),Je=a(206),Xe=a(207),Fe=a(101),Ke=a.n(Fe),Ve=Object(W.a)((function(e){return{content:{flexGrow:1},link:{color:e.palette.secondary.main,textDecoration:"underline"},field:{width:"20vw",minWidth:"250px"},error:{color:e.palette.error.main}}})),Ye=Object(O.b)((function(e){return{user:e.user}}),(function(e){return Object(x.b)({setLoreline:S},e)}))((function(e){var t=Ve(),a=r.a.useState(!1),o=Object(I.a)(a,2),i=o[0],l=o[1],m=Object(n.useState)(""),u=Object(I.a)(m,2),d=u[0],p=u[1],h=Object(n.useState)(!1),E=Object(I.a)(h,2),f=E[0],g=E[1],w=Object(n.useState)(!1),b=Object(I.a)(w,2),y=(b[0],b[1]),O=Object(n.useState)([]),x=Object(I.a)(O,2),j=x[0],k=x[1],N=r.a.useState({loreLineName:""}),S=Object(I.a)(N,2),C=(S[0],S[1],function(){var t=Object(s.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get("https://lorelines-expressapi.herokuapp.com/api/users/".concat(e.user.id,"/lorelines"));case 3:a=t.sent,k(a.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}());Object(n.useEffect)((function(){C()}),[]);var D=function(e,t){"clickaway"!==t&&l(!1)},L=function(){var t=Object(s.a)(c.a.mark((function t(a){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),g(!0),""===d){t.next=14;break}return t.next=5,e.tryLorelineAdd(d);case 5:return n=t.sent,p(""),g(!1),C(),l(!0),n||y(!0),t.abrupt("return",n);case 14:return t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("main",{className:t.root},r.a.createElement("form",null,r.a.createElement("div",{width:"100vw"},r.a.createElement(P.a,{container:!0,direction:"row",justify:"center",allignment:"center"},r.a.createElement(P.a,{item:!0},r.a.createElement(_.a,{style:{marginTop:25,marginInlineStart:20,marginBottom:25,fontSize:22,borderRadius:"50px",width:"150px"},varient:"contained",color:"primary"},"Add Loreline:")),r.a.createElement(P.a,{item:!0},r.a.createElement(z.a,{error:f&&""===d,helperText:f&&""===d?"This field cannot be empty!":"",className:t.field,name:"LorelineName",label:"Loreline Name:",variant:"outlined",margin:"normal",autoComplete:"off",value:d,onChange:function(e){return p(e.target.value)}})),r.a.createElement(P.a,{item:!0},r.a.createElement(G.a,{style:{maxWidth:"90px",maxHeight:"55px",minWidth:"90px",minHeight:"55px",marginInlineStart:10,marginTop:16,padding:5,fontSize:15,borderRadius:"50px"},type:"submit",color:"primary",variant:"contained",onClick:function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},"Submit"),r.a.createElement(Ue.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:i,autoHideDuration:6e3,onClose:D,message:"Loreline Added",action:r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{size:"small","aria-label":"close",color:"inherit",onClick:D},r.a.createElement(Ke.a,{fontSize:"small"})))})))),r.a.createElement(ce.a,null),r.a.createElement(_.a,{style:{marginInlineStart:20,fontSize:20},color:"primary"},"My Lorelines:"),r.a.createElement("div",{className:t.root},r.a.createElement(P.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center"},j.map((function(t){return r.a.createElement(P.a,{item:!0,key:j.indexOf(t)},r.a.createElement(Ze.a,{style:{margin:10,width:250,height:140}},r.a.createElement(Je.a,{onClick:function(){e.setLoreline(t._id)}},r.a.createElement(Xe.a,{title:"".concat(t.name),subheader:"Last Modified: ".concat(Date(t.modified))}))))}))))))}));var $e=a(176),qe=(r.a.Component,function(){return{root:{display:"flex"},box:{width:"100px",height:"100px",borderStyle:"solid",borderWidth:"2px 2px 2px 2px",backgroundColor:"red"},drawer:{openWidth:240,closedWidth:58},topBar:{height:64}}}),Qe=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).toggleDrawer=function(e){a.state.drawerOpen=e,a.updateWindowDimensions()},a.tryLorelineAdd=function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.post("https://lorelines-expressapi.herokuapp.com/api/users/".concat(a.props.user.id,"/lorelines"),{name:t});case 3:return n=e.sent,n.data,e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),a.state={drawerOpen:!1,width:0,height:0},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(V.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.state.drawerOpen?this.state.width=window.innerWidth-240:this.state.width=window.innerWidth-58,this.state.height=window.innerHeight-64,this.props.setWindowWidth(this.state.width),this.props.setWindowHeight(this.state.height),console.log(this.state.width),console.log(this.state.height)}},{key:"render",value:function(){return r.a.createElement("div",null,!this.props.auth&&r.a.createElement(k.a,{to:"/"}),r.a.createElement(ie,{logout:this.props.logout,drawerOpen:this.state.drawerOpen,setDrawerOpen:this.toggleDrawer}),r.a.createElement("div",{className:qe.root},r.a.createElement(ve,{drawerOpen:this.state.drawerOpen,setDrawerOpen:this.toggleDrawer}),r.a.createElement("div",{width:this.props.window.width/3,height:this.props.window.height/3,style:{marginLeft:this.state.drawerOpen?240:58,marginTop:64}},r.a.createElement(k.b,{path:"/app/account"},r.a.createElement(Te,null)),r.a.createElement(k.b,{path:"/app/lorelines"},r.a.createElement(Ye,{tryLorelineAdd:this.tryLorelineAdd})),r.a.createElement(k.b,{path:"/app/new"},r.a.createElement("h1",null,"Hello, World")),r.a.createElement(k.b,{path:"/app/timeline"},r.a.createElement(Ie,null)),r.a.createElement(k.b,{path:"/app/directory"},r.a.createElement(Ge,null)),r.a.createElement(k.b,{path:"/app/about"},r.a.createElement(Re,null)))))}}]),t}(n.Component);var et=Object(O.b)((function(e){return{user:e.user,window:e.window}}),(function(e){return Object(x.b)({setWindowWidth:D,setWindowHeight:L},e)}))(Qe),tt=Object(W.a)((function(e){return{root:{flexGrow:1},field:{width:"23vw",minWidth:"250px"},link:{color:e.palette.secondary.main,textDecoration:"underline"},error:{color:e.palette.error.main}}}));function at(e){var t=tt(),a=r.a.useState({name:"",email:"",confirmEmail:"",password:"",confirmPassword:"",showPassword:!1,showConfirmPassword:!1,submitAttempted:!1,emailExists:!1}),n=Object(I.a)(a,2),o=n[0],i=n[1],l=function(e){return function(t){i(Object($.a)({},o,Object(Y.a)({},e,t.target.value)))}},c=function(e){e.preventDefault()};return r.a.createElement("main",{className:t.root},r.a.createElement("form",null,r.a.createElement(P.a,{style:{minHeight:"100vh",textAlign:"center"},direction:"column",justify:"center",alignItems:"center",container:!0},r.a.createElement(P.a,{item:!0},r.a.createElement(_.a,{style:{padding:2,fontWeight:"bold",fontSize:42}},"Create a new Lorelines account")),o.emailExists&&r.a.createElement(P.a,{item:!0},r.a.createElement(_.a,{className:t.error,style:{padding:5,fontSize:16}},"a user with that email already exists")),r.a.createElement(P.a,{item:!0},r.a.createElement(z.a,{className:t.field,name:"name",label:"Name",margin:"normal",value:o.name,onChange:l("name"),error:o.submitAttempted&&""===o.name,helperText:o.submitAttempted&&""===o.name?"this field cannot be empty":""})),r.a.createElement(P.a,{item:!0},r.a.createElement(z.a,{className:t.field,name:"email",label:"Email",margin:"normal",value:o.email,onChange:l("email"),error:o.submitAttempted&&""===o.email||o.submitAttempted&&!1===X.a.validate(o.email),helperText:o.submitAttempted&&""===o.email?"this field cannot be empty":o.submitAttempted&&!1===X.a.validate(o.email)?"invalid email address":""})),r.a.createElement(P.a,{item:!0},r.a.createElement(z.a,{className:t.field,name:"confirmEmail",label:"Confirm Email",margin:"normal",value:o.confirmEmail,onChange:l("confirmEmail"),error:o.email!==o.confirmEmail||o.submitAttempted&&""===o.confirmEmail,helperText:o.submitAttempted&&""===o.confirmEmail?"this field cannot be empty":o.email!==o.confirmEmail?"emails do not match":""})),r.a.createElement(P.a,{item:!0},r.a.createElement(z.a,{className:t.field,name:"pass",label:"Password",margin:"normal",type:o.showPassword?"text":"password",value:o.password,onChange:l("password"),error:o.submitAttempted&&""===o.password,helperText:o.submitAttempted&&""===o.password?"this field cannot be empty":"",InputProps:{endAdornment:r.a.createElement(M.a,{position:"end"},r.a.createElement(H.a,{"aria-label":"toggle password visibility",onClick:function(){i(Object($.a)({},o,{showPassword:!o.showPassword}))},onMouseDown:c},o.showPassword?r.a.createElement(U.a,null):r.a.createElement(Z.a,null)))}})),r.a.createElement(P.a,{item:!0},r.a.createElement(z.a,{className:t.field,name:"confirmpass",label:"Confirm Password",margin:"normal",type:o.showConfirmPassword?"text":"password",value:o.confirmpassword,onChange:l("confirmPassword"),error:o.password!==o.confirmPassword||o.submitAttempted&&""===o.confirmPassword,helperText:o.submitAttempted&&""===o.confirmPassword?"this field cannot be empty":o.password!==o.confirmPassword?"passwords do not match":"",InputProps:{endAdornment:r.a.createElement(M.a,{position:"end"},r.a.createElement(H.a,{"aria-label":"toggle password visibility",onClick:function(){i(Object($.a)({},o,{showConfirmPassword:!o.showConfirmPassword}))},onMouseDown:c},o.showConfirmPassword?r.a.createElement(U.a,null):r.a.createElement(Z.a,null)))}})),r.a.createElement(P.a,{item:!0},r.a.createElement(G.a,{style:{marginTop:16,padding:5,fontSize:22,borderRadius:"50px",width:"260px"},type:"submit",color:"primary",variant:"contained",onClick:function(t){if(t.preventDefault(),i(Object($.a)({},o,{submitAttempted:!0})),!0===X.a.validate(o.email)&&o.email===o.confirmEmail&&""!==o.password&&o.password===o.confirmPassword){var a=!e.createUser(o.name,o.email,o.password);a&&console.log("email exists"),i(Object($.a)({},o,{emailExists:a}))}}},"Submit")),r.a.createElement(P.a,{item:!0},r.a.createElement(_.a,{style:{padding:5,fontSize:16}},r.a.createElement(j.b,{className:t.link,to:"/"},"Go back"))))))}var nt=Object(W.a)((function(e){return{root:{flexGrow:1},link:{color:e.palette.secondary.main,textDecoration:"underline"}}}));function rt(){var e=nt();return r.a.createElement("main",{className:e.root},r.a.createElement(P.a,{style:{minHeight:"100vh",textAlign:"center"},direction:"column",justify:"center",alignItems:"center",container:!0},r.a.createElement(P.a,{item:!0},r.a.createElement(_.a,null,"Thank you for creating a Lorelines account")),r.a.createElement(P.a,{item:!0},r.a.createElement(_.a,null,r.a.createElement(j.b,{className:e.link,to:"/"},"return to login")))))}var ot=Object(W.a)((function(e){return{root:{flexGrow:1},link:{color:e.palette.secondary.main,textDecoration:"underline"}}}));function it(){var e=ot();return r.a.createElement("main",{className:e.root},r.a.createElement(P.a,{style:{height:"100vh",textAlign:"center"},direction:"column",justify:"center",alignItems:"center",container:!0},r.a.createElement(P.a,{item:!0},r.a.createElement(_.a,null,"oof that sucks")),r.a.createElement(P.a,{item:!0},r.a.createElement(_.a,null,r.a.createElement(j.b,{className:e.link,to:"/"},"return to login")))))}var lt=a(140),ct=Object(E.a)({palette:{primary:{main:"#f78d1e",contrastText:"#fff"},drawer:{main:"#d9d9d9",text:"#fff",icons:"#000"},secondary:{main:"#000"},error:{main:"#ff0000"}}}),st={dark:Object(E.a)({palette:{primary:{main:"#f78d1e",contrastText:"#fff"},drawer:{main:"#222",text:"#fff",icons:"#fff"},secondary:{main:"#fff"},error:{main:"#ff0000"},type:"dark"}}),light:ct},mt=function(e){return{root:{display:"flex"},center:{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"center"},backdrop:{zIndex:1e3,color:"#fff"}}},ut=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).tryLogin=function(){var e=Object(s.a)(c.a.mark((function e(t,n){var r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.setState.loading=!0,e.next=4,v.a.post("https://lorelines-expressapi.herokuapp.com/api/users/token",{email:t,password:n});case 4:return r=e.sent,o=r.data,localStorage.setItem("token",o),a.setState({loading:!1,auth:!0}),a.props.setUser(lt(o)),e.abrupt("return",!0);case 12:return e.prev=12,e.t0=e.catch(0),a.setState.loading=!1,e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a){return e.apply(this,arguments)}}(),a.createUser=function(){var e=Object(s.a)(c.a.mark((function e(t,n,r){var o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.setState.loading=!0,e.next=4,v.a.post("https://lorelines-expressapi.herokuapp.com/api/users",{name:t,email:n,password:r});case 4:return o=e.sent,i=o.data,localStorage.setItem("token",i),a.setState.auth=!0,a.props.setLoading(!1),e.abrupt("return",!0);case 12:return e.prev=12,e.t0=e.catch(0),a.setState.loading=!1,e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a,n){return e.apply(this,arguments)}}(),a.logout=function(){localStorage.removeItem("token"),a.setState({auth:!1,userData:null}),console.log("LOGGING OUT")},a.state={auth:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("MOUNTED 1");var t=localStorage.getItem("token");t&&v.a.put("https://lorelines-expressapi.herokuapp.com/api/users/token",{token:t}).then((function(t){localStorage.setItem("token",t.data),e.setState({auth:!0,userData:lt(t.data)});var a=lt(t.data);e.props.setUser({id:a.id,name:a.name,email:a.email}),console.log(e.state.userData)})).catch((function(e){return console.log(e)})),console.log("MOUNTED 2")}},{key:"render",value:function(){return r.a.createElement(f.a,{theme:st[this.props.colorTheme]},r.a.createElement(g.a,null),r.a.createElement(j.a,null,r.a.createElement("div",{className:mt.root},r.a.createElement(w.a,{className:mt.backdrop,open:this.props.loading},r.a.createElement(b.a,{color:"inherit"})),this.state.auth&&r.a.createElement(k.a,{to:"/app"}),r.a.createElement(k.b,{path:"/app"},r.a.createElement(et,{logout:this.logout,auth:this.state.auth})),r.a.createElement(k.b,{exact:!0,path:"/"},r.a.createElement(K,{className:mt.center,tryLogin:this.tryLogin})),r.a.createElement(k.b,{path:"/forgot",component:it}),r.a.createElement(k.b,{exact:!0,path:"/register"},r.a.createElement(at,{createUser:this.createUser})),r.a.createElement(k.b,{path:"/register/confirm",component:rt}))))}}]),t}(n.Component);var dt=Object(O.b)((function(e){return{user:e.user,loading:e.loading,colorTheme:e.colorTheme}}),(function(e){return Object(x.b)({setUser:N,setLoading:C},e)}))(ut);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pt=a(102),ht=Object(x.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_SET":return t.payload}return e},directory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DIRECTORY_CHANGED":return t.payload}return e},window:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{width:100,height:100},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WINDOW_HEIGHT":return{width:e.width,height:t.payload};case"SET_WINDOW_WIDTH":return{width:t.payload,height:e.height}}return e},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADING":return t.payload}return e},colorTheme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"dark",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_THEME":return t.payload}return e},lorelineId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LORELINE_CHANGED":return t.payload}return e}}),Et=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.d,ft=Object(x.e)(ht,Et(Object(x.a)(pt.a)));i.a.render(r.a.createElement(O.a,{store:ft},r.a.createElement(dt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},93:function(e,t,a){e.exports=a.p+"static/media/logo.e2142875.svg"}},[[110,1,2]]]);
//# sourceMappingURL=main.5fc25079.chunk.js.map