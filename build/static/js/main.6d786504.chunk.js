(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{125:function(e,a,t){},131:function(e,a){},132:function(e,a){},133:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),o=t.n(l),c=t(14),i=t.n(c),s=t(26),m=t(12),u=t(93),p=t(89),d=t(189),E=t(190),f=t(195),h=t(191),b=t(44),g=t.n(b),w=t(42),y=t(31),v=t(13),x=t(35),O=(t(125),function(e){return console.log("set user to: ",e.name),{type:"USER_SET",payload:e}}),j=t(88),k=t.n(j),N=t(164),S=t(53),C=t(192),L=t(166),A=t(169),I=t(172),D=t(167),P=t(168),T=t(170),z=t(171),W=t(36),B=t.n(W),M=Object(p.a)((function(e){return{content:{flexGrow:1},link:{color:e.palette.secondary.main,textDecoration:"underline"},field:{width:"20vw",minWidth:"250px"},error:{color:e.palette.error.main}}}));function Z(e){var a=Object(n.useState)(""),t=Object(m.a)(a,2),l=t[0],o=t[1],c=Object(n.useState)(""),u=Object(m.a)(c,2),p=u[0],d=u[1],E=Object(n.useState)(!1),f=Object(m.a)(E,2),h=f[0],b=f[1],g=Object(n.useState)(!1),w=Object(m.a)(g,2),y=w[0],x=w[1],O=Object(n.useState)(!1),j=Object(m.a)(O,2),W=j[0],Z=j[1],R=M(),U=function(){var a=Object(s.a)(i.a.mark((function a(t){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),b(!0),!B.a.validate(l)||""===p){a.next=10;break}return a.next=5,e.tryLogin(l,p);case 5:return(n=a.sent)||x(!0),a.abrupt("return",n);case 10:return a.abrupt("return",!1);case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("main",{className:R.content},r.a.createElement("form",null,r.a.createElement(N.a,{style:{minHeight:"100vh",textAlign:"center"},container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement("img",{alt:"logo",src:k.a,width:160}),r.a.createElement("br",null),r.a.createElement(N.a,{item:!0},r.a.createElement(S.a,{style:{padding:2,fontWeight:900,fontSize:50}},"Log in to Lorelines")),r.a.createElement(N.a,{item:!0},r.a.createElement(C.a,{className:R.field,error:h&&""===l||h&&!B.a.validate(l),helperText:h&&""===l?"this field cannot be empty":h&&!B.a.validate(l)?"invalid email address":"",name:"email",label:"Email",type:"email",variant:"outlined",margin:"normal",autoComplete:"off",InputProps:{startAdornment:r.a.createElement(L.a,{position:"start"},r.a.createElement(D.a,{color:"secondary"}))},value:l,onChange:function(e){return o(e.target.value)}})),r.a.createElement(N.a,{item:!0},r.a.createElement(C.a,{className:R.field,error:h&&""===p,helperText:h&&""===p?"this field cannot be empty":"",name:"password",label:"Password",variant:"outlined",margin:"normal",type:W?"text":"password",autoComplete:"off",InputProps:{startAdornment:r.a.createElement(L.a,{position:"start"},r.a.createElement(P.a,{color:"secondary"})),endAdornment:r.a.createElement(L.a,{position:"end"},r.a.createElement(A.a,{"aria-label":"toggle password visibility",onClick:function(){return Z(!W)},onMouseDown:function(e){return e.preventDefault()}},W?r.a.createElement(T.a,null):r.a.createElement(z.a,null)))},value:p,onChange:function(e){return d(e.target.value)}})),y&&r.a.createElement(N.a,{item:!0},r.a.createElement(S.a,{className:R.error,style:{padding:5,fontSize:16}},"an incorrect email or password was provided",r.a.createElement("br",null),"please try again")),r.a.createElement(N.a,{item:!0},r.a.createElement(I.a,{style:{marginTop:16,padding:5,fontSize:22,borderRadius:"50px",width:"260px"},type:"submit",color:"primary",variant:"contained",onClick:function(){var e=Object(s.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},"Log in")),r.a.createElement(N.a,{item:!0},r.a.createElement(S.a,{style:{padding:5,fontSize:16}},"I forgot"," ",r.a.createElement(v.b,{className:R.link,to:"/forgot"},"my password"))),r.a.createElement(N.a,{item:!0},r.a.createElement(S.a,{style:{padding:30,fontSize:20}},"Don't have a Lorelines account?"," ",r.a.createElement(v.b,{className:R.link,to:"/register"},"Click here"))))))}var R=t(16),U=t(19),G=t(3),H=t(22),_=t(173),J=t(175),X=t(176),K=t(174),$=t(177),q=Object(p.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},toolbar:Object(U.a)({display:"flex",alignItems:"center",justifyContent:"flex-end"},e.mixins.toolbar),logo:Object(R.a)({fill:"#fff",height:35},e.breakpoints.up("md"),{height:50}),orange:{fill:e.palette.primary.main},logoutButton:{color:e.palette.primary.main,backgroundColor:"white",fontSize:14,fontWeight:"bolder",marginLeft:"auto",marginRight:0,"&:hover":{backgroundColor:"#303030",color:e.palette.primary.main}},logoutIcon:{marginLeft:"auto",marginRight:0}}}));function F(e){var a=q(),t=Object(H.a)(),n=Object(_.a)(t.breakpoints.up("md"));return r.a.createElement("div",{className:a.root},r.a.createElement(J.a,{position:"fixed",className:Object(G.a)(a.appBar,Object(R.a)({},a.appBarShift,e.drawerOpen))},r.a.createElement(X.a,null,r.a.createElement(A.a,{color:"inherit","aria-label":"open drawer",onClick:function(){return e.setDrawerOpen(!0)},edge:"start",className:Object(G.a)(a.menuButton,e.drawerOpen&&a.hide)},r.a.createElement($.a,null)),r.a.createElement("svg",{className:a.logo,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 41.17 41.17"},r.a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},r.a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},r.a.createElement("circle",{className:"cls-1",cx:"20.58",cy:"20.58",r:"20.58"}),r.a.createElement("path",{className:a.orange,d:"M16.76,13.22a.46.46,0,0,0,.74-.12l1.21-2.4a1.51,1.51,0,0,0-.91-2.11A1.55,1.55,0,0,0,16,9.43l-.86,1.71a.46.46,0,0,0,.09.54Z"}),r.a.createElement("path",{className:a.orange,d:"M13.08,16.61a.47.47,0,0,0-.75.13L5.46,30.47a1.51,1.51,0,0,0,1.15,2.16,1.54,1.54,0,0,0,1.57-.87l6.53-13.07a.47.47,0,0,0-.09-.54Z"}),r.a.createElement("path",{className:a.orange,d:"M34.56,8.53A1.55,1.55,0,0,0,33,9.41L26.46,22.48a.46.46,0,0,0,.09.53l1.54,1.54a.46.46,0,0,0,.75-.12L35.71,10.7A1.51,1.51,0,0,0,34.56,8.53Z"}),r.a.createElement("path",{className:a.orange,d:"M24.41,28a.46.46,0,0,0-.75.12l-1.2,2.4a1.51,1.51,0,0,0,.91,2.11,1.55,1.55,0,0,0,1.81-.84L26,30a.46.46,0,0,0-.09-.54Z"}),r.a.createElement("path",{className:a.orange,d:"M10.81,8.68a1.51,1.51,0,0,0-2.13,2.13L30.36,32.48a1.5,1.5,0,0,0,2.12-2.12Z"})))),r.a.createElement("svg",{className:a.logo,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 168.56 43.24"},r.a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},r.a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},r.a.createElement("path",{className:"cls-1",d:"M21.74,35.33c-6.19,0-11.95,4-15.55,4-.72,0-.92-.48-.92-1C5.27,27.81,21.54,4.2,31.73,4.2c1.28,0,1.8.52,1.8,1.35,0,3.28-8.11,11.31-13.31,11.31-.76,0-.92-.68-1.28-.68s-.36.84-.36,1.08c0,2.56,1.92,3.12,3.88,3.12,6.27,0,15.78-10.19,15.78-16.14C38.24,1.76,36.61,0,32.37,0,15.71,0,0,29.41,0,39c0,2.64,2.76,4.2,5.63,4.2,6.44,0,11.11-3,16.59-3a1.94,1.94,0,0,0,2-2A2.57,2.57,0,0,0,21.74,35.33Z"}),r.a.createElement("path",{className:"cls-1",d:"M88.64,36.53c-1.12,0-1.6.52-2.6.52-1.68,0-2.32-1.6-2.32-4a25.51,25.51,0,0,1,.64-5.12C93.15,25.42,99,18.1,99,13.19c0-2.72-1.76-4.68-5.84-4.68-5.83,0-11.86,9.23-14.14,17.87l-1.68.24a.77.77,0,0,0-.38.1c-.62-.9-2.08-1.5-4.66-1.5a13.2,13.2,0,0,0-7.6,2.42,5.59,5.59,0,0,1-2.31.81c-2.83,0-.72-2.51-4.15-2.51s-7.48,5.11-8,5.11h0c-.08,0-.12-.08-.12-.2a12.1,12.1,0,0,0,.88-3.92c0-.91-.28-1.63-1.12-1.63C48,25.3,44,29.41,39.36,29.41h0a8.15,8.15,0,0,1-8,7.16c-1.36,0-1.76-.76-1.76-1.6,0-3.76,5.92-6,10.91-6.4.64-.2,1.32-1.75,1.32-2.87,0-.64-.2-1.12-.76-1.16s-.88,0-1.32,0c-8.35,0-15,6.87-15,11.63,0,2.55,1.92,4.47,6.43,4.47,5.44,0,11.19-3.39,11.51-7.59A5.54,5.54,0,0,0,46,30.53a1.21,1.21,0,0,1,.36,1c0,1.76-1.8,6.51-1.8,7.27,0,1,1.6,1.36,3.24,1.36,1.87,0,2-1.16,2.83-2.2,1-1.63,4.2-6.39,6-6.39.8,0,1.24.84,2.32.84a6.74,6.74,0,0,0,1.74-.26,7.57,7.57,0,0,0-.86,3.34c0,2.87,2.19,5.27,7.43,5.27,4.39,0,9.11-2,9.11-4.71,0-.6-.44-1-1.24-1-1.48,0-2.4,1.72-5.31,1.72-3.48,0-3.48-1-3.48-1,5.33-.66,10.1-4.33,10.84-7.15a2,2,0,0,0,.91.19h.32a21.72,21.72,0,0,0-.4,4.12c0,4.56,1.76,7.91,6.11,7.91,2.28,0,5.36-1.44,5.36-3.31C89.48,36.81,89.32,36.53,88.64,36.53ZM91.2,12.27c1,0,1.59,1,1.59,2.44,0,2.63-2,6.91-7.51,9.63C87.08,18.26,89.92,12.27,91.2,12.27ZM66,32.69c-.32,0-.4-.16-.4-.4,0-1.88,3.24-4,4.88-4,.56,0,1.11.12,1.11.6C71.61,30.33,68,32.69,66,32.69Z"}),r.a.createElement("path",{className:"cls-1",d:"M101.23,35.05c-1.16,0-.92.84-2.48.84s-2.32-1.32-2.32-2.8c0-1.64,1.68-5.24,1.68-5.88a.75.75,0,0,0-.84-.71,13.7,13.7,0,0,0-4.12,1.11c-1.15,1.76-1.91,6.44-1.91,8.56,0,3.11,2.23,4.31,4.59,4.31,3.12,0,6.72-2.08,6.72-4.51A1.22,1.22,0,0,0,101.23,35.05Z"}),r.a.createElement("path",{className:"cls-1",d:"M162.61,28.89a27.75,27.75,0,0,0-4,.32,5.25,5.25,0,0,0-5-3.95c-5.48,0-14.79,11.71-20.38,11.71-1.44,0-1.64-.64-1.64-1a.49.49,0,0,1,0-.2c5.79-.72,11-5,11-7.88,0-1.51-1.44-2.67-5-2.67-6.41,0-11.31,4.63-12.25,8.81-1,.29-3.2,1.58-4.69,1.58-1,0-1-.84-1-1.28,0-1.32.72-2.12.72-3.6s-1.36-1.92-2.76-1.92c-3,0-7.55,3.68-8.19,3.68a.33.33,0,0,1-.32-.36c0-.6.84-2.12.84-3.44,0-1.16-.68-2.15-3.16-2.15C101,26.54,101,30,101,30c0,.72.36,1.48,1.08,1.48s1.55-.64,2.47-.64a1.44,1.44,0,0,1,1.64,1.52c0,1.76-1.8,5-1.8,6.23,0,1,1.08,1.36,1.88,1.36a2.5,2.5,0,0,0,1.56-.56c.56-.48,5.4-5,6.24-5s.83.4.83,1c0,3,.12,4.47,2.6,4.47a13.56,13.56,0,0,0,7.86-3.05c.61,2.24,2.86,3.93,7.25,3.93,8.51,0,16.5-10.95,19.06-10.95a3.34,3.34,0,0,1,2,.56c-4.84,1.52-9,4-9,7.2,0,1.55,1.44,2.71,4.63,2.71,6.88,0,9.79-4.51,9.79-8.59v0c2.68.24,5.44,1.2,5.44,3.32,0,.4-.08.72-.08,1s.2.4.48.4c1.12,0,3.71-1.68,3.71-3.6S166.61,28.89,162.61,28.89Zm-31.69,3.4c0-1.88,3.24-4,4.87-4,.56,0,1.12.12,1.12.6,0,1.44-3.63,3.8-5.59,3.8C131,32.69,130.92,32.53,130.92,32.29Zm20.34,3.48c-.68,0-1-.36-1-.8,0-1.48,2-2.6,4.36-3.12a3.33,3.33,0,0,1,.12.88C154.78,34.25,153.66,35.77,151.26,35.77Z"})))),r.a.createElement((function(){return n?r.a.createElement(I.a,{className:a.logoutButton,onClick:e.logout},"Log Out"):r.a.createElement(A.a,{className:a.logoutIcon,onClick:e.logout},r.a.createElement(K.a,null))}),null))),r.a.createElement("div",{className:a.toolbar}))}var Q=t(194),V=t(179),Y=t(165),ee=t(180),ae=t(181),te=t(183),ne=t(178),re=t(182),le=t(184),oe=t(185),ce=t(186),ie=t(187),se=t(188),me=Object(p.a)((function(e){return{drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{overflowX:"hidden",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(R.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:58},e.breakpoints.up("sm"),{width:58}),toolbar:Object(U.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),link:{color:e.palette.secondary.main,textDecoration:"underline"}}}));function ue(e){var a,t,n=me();return r.a.createElement("div",null,r.a.createElement(Q.a,{variant:"permanent",className:Object(G.a)(n.drawer,(a={},Object(R.a)(a,n.drawerOpen,e.drawerOpen),Object(R.a)(a,n.drawerClose,!e.drawerOpen),a)),classes:{paper:Object(G.a)((t={},Object(R.a)(t,n.drawerOpen,e.drawerOpen),Object(R.a)(t,n.drawerClose,!e.drawerOpen),t))},open:e.drawerOpen},r.a.createElement("div",{className:n.toolbar},r.a.createElement(A.a,{onClick:function(){return e.setDrawerOpen(!1)}},r.a.createElement(ne.a,{color:"secondary"}))),r.a.createElement(V.a,null),r.a.createElement(Y.a,null,r.a.createElement(v.b,{className:n.link,to:"/app/account"},r.a.createElement(ee.a,{button:!0,key:"Account"},r.a.createElement(ae.a,null,r.a.createElement(re.a,{color:"secondary"})),r.a.createElement(te.a,{primary:"Account"}))),r.a.createElement(v.b,{className:n.link,to:"/app/lorelines"},r.a.createElement(ee.a,{button:!0,key:"Lorelines"},r.a.createElement(ae.a,null,r.a.createElement(le.a,{color:"secondary"})),r.a.createElement(te.a,{primary:"Lorelines"})))),r.a.createElement(V.a,null),r.a.createElement(Y.a,null,r.a.createElement(v.b,{className:n.link,to:"/app/new"},r.a.createElement(ee.a,{button:!0,key:"New Custom Entity"},r.a.createElement(ae.a,null,r.a.createElement(oe.a,{color:"secondary"})),r.a.createElement(te.a,{primary:"New Custom Entity"})))),r.a.createElement(V.a,null),r.a.createElement(Y.a,null,r.a.createElement(v.b,{className:n.link,to:"/app/timeline"},r.a.createElement(ee.a,{button:!0,key:"Timeline"},r.a.createElement(ae.a,null,r.a.createElement(ce.a,{color:"secondary"})),r.a.createElement(te.a,{primary:"Timeline"}))),r.a.createElement(v.b,{className:n.link,to:"/app/directory"},r.a.createElement(ee.a,{button:!0,key:"Directory"},r.a.createElement(ae.a,null,r.a.createElement(ie.a,{color:"secondary"})),r.a.createElement(te.a,{primary:"Directory"})))),r.a.createElement(V.a,null),r.a.createElement(Y.a,null,r.a.createElement(v.b,{className:n.link,to:"/app/about"},r.a.createElement(ee.a,{button:!0,key:"About Lorelines"},r.a.createElement(ae.a,null,r.a.createElement(se.a,{color:"secondary"})),r.a.createElement(te.a,{primary:"About Lorelines"}))))))}var pe=t(66),de=t.n(pe),Ee=t(67),fe=t.n(Ee),he=t(69),be=t.n(he),ge=t(68),we=t.n(ge),ye=Object(p.a)({list:{width:250},fullList:{width:"auto"}});function ve(){var e=ye(),a=r.a.useState({right:!1}),t=Object(m.a)(a,2);t[0],t[1];return r.a.createElement("main",{className:e.root},r.a.createElement(N.a,{style:{height:"70vh",width:"70vw",textAlign:"center"},direction:"row",justify:"center",alignItems:"center",container:!0},r.a.createElement(N.a,{item:!0},r.a.createElement(S.a,null,"Canvas and Drag/Drop Components in progress"))),r.a.createElement("div",null,r.a.createElement(Q.a,{className:e.drawer,variant:"permanent",anchor:"right"},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(Y.a,null,r.a.createElement(ee.a,{button:!0,key:"Event Node"},r.a.createElement(ae.a,null,r.a.createElement(de.a,{color:"secondary"})),r.a.createElement(te.a,{primary:"Event Node"})),r.a.createElement(ee.a,{button:!0,key:"Branching Event Node"},r.a.createElement(ae.a,null,r.a.createElement(fe.a,{color:"secondary"})),r.a.createElement(te.a,{primary:"Branching Node"})),r.a.createElement(ee.a,{button:!0,key:"Teather"},r.a.createElement(ae.a,null,r.a.createElement(we.a,{color:"secondary"})),r.a.createElement(te.a,{primary:"Teather"})),r.a.createElement(V.a,null),r.a.createElement(ee.a,{button:!0,key:"Warp Node"},r.a.createElement(ae.a,null,r.a.createElement(be.a,{color:"secondary"})),r.a.createElement(te.a,{primary:"Warp Node"}))))))}var xe=Object(p.a)((function(e){return{root:{flexGrow:1},link:{color:e.palette.secondary.main,textDecoration:"underline"}}})),Oe=Object(w.b)((function(e){return{user:e.user}}))((function(e){var a=xe();return e.user?r.a.createElement("main",{className:a.root},r.a.createElement(N.a,{style:{height:"70vh",width:"70vw",textAlign:"left"},direction:"column",justify:"center",alignItems:"center",container:!0},r.a.createElement(N.a,{item:!0},r.a.createElement(S.a,null,"Hello, ",e.user.name||"null",", this is your account view")),r.a.createElement(N.a,{item:!0},r.a.createElement(S.a,null,"Email: ",e.user.email||"null")))):r.a.createElement("h2",null,"NULL")}));var je=t(92),ke=t.n(je),Ne=Object(p.a)((function(e){return{root:{flexGrow:1},link:{color:e.palette.secondary.main,textDecoration:"underline"}}}));function Se(){var e=Ne();return r.a.createElement("main",null,r.a.createElement(N.a,{className:e.root,style:{minHeight:"90vh",textAlign:"center"},container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(N.a,{item:!0,xs:3}),r.a.createElement(N.a,{item:!0,xs:6},r.a.createElement(S.a,{style:{fontSize:14}},"Lorelines.com is the junior project of the Oregon Institute of Technology students:"),r.a.createElement(S.a,{style:{fontWeight:500,fontSize:20}},"Justin Boehnen, Evan Clark, Seth Ray, and Isaac Medlin"),r.a.createElement(S.a,{style:{fontSize:14}},"Also Known As..."),r.a.createElement(S.a,{style:{padding:20,fontWeight:600,fontSize:30}},"JESI"),r.a.createElement(S.a,{style:{fontSize:14}},"We hope that our little piece of software helps you build something huge.")),r.a.createElement(N.a,{item:!0,xs:3})))}var Ce=Object(p.a)((function(e){return{content:{flexGrow:1},link:{color:e.palette.secondary.main,textDecoration:"underline"},field:{width:"20vw",minWidth:"250px"},error:{color:e.palette.error.main}}}));function Le(e){var a,t=Ce(),l=Object(n.useState)(""),o=Object(m.a)(l,2),c=o[0],u=(o[1],Object(n.useState)(!1)),p=Object(m.a)(u,2),d=p[0],E=p[1],f=Object(n.useState)(!1),h=Object(m.a)(f,2),b=(h[0],h[1]),g=r.a.useState({loreLineName:""}),w=Object(m.a)(g,2),y=w[0],v=w[1],x=function(){var a=Object(s.a)(i.a.mark((function a(t){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),E(!0),""===c){a.next=10;break}return a.next=5,e.tryLorelineAdd(c);case 5:return(n=a.sent)||b(!0),a.abrupt("return",n);case 10:return a.abrupt("return",!1);case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("main",{className:t.root},r.a.createElement("form",null,r.a.createElement("div",{width:"100vw"},r.a.createElement(N.a,{container:!0,direction:"row",justify:"center",allignment:"center"},r.a.createElement(N.a,{item:!0},r.a.createElement(S.a,{style:{marginTop:25,marginInlineStart:20,marginBottom:25,fontSize:22,borderRadius:"50px",width:"150px"},varient:"contained",color:"primary"},"Add Loreline:")),r.a.createElement(N.a,{item:!0},r.a.createElement(C.a,{error:d&&""===c,helperText:d&&""===c?"This field cannot be empty!":"",className:t.field,name:"LorelineName",label:"Loreline Name:",variant:"outlined",margin:"normal",autoComplete:"off",value:y.loreLineName,onChange:(a="loreLineName",function(e){v(Object(U.a)({},y,Object(R.a)({},a,e.target.value)))})})),r.a.createElement(N.a,{item:!0},r.a.createElement(I.a,{style:{maxWidth:"90px",maxHeight:"55px",minWidth:"90px",minHeight:"55px",marginInlineStart:10,marginTop:16,padding:5,fontSize:15,borderRadius:"50px",width:"150px"},type:"submit",color:"primary",variant:"contained",onClick:function(){var e=Object(s.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},"Submit")))),r.a.createElement(V.a,null),r.a.createElement(S.a,null,"Working on saving lorelines to database")))}var Ae=Object(p.a)((function(e){return{root:{display:"flex"},box:{width:"100px",height:"100px",borderStyle:"solid",borderWidth:"2px 2px 2px 2px",backgroundColor:"red"}}}));function Ie(e){var a=Object(n.useState)(!1),t=Object(m.a)(a,2),l=t[0],o=t[1],c=function(){var e=Object(s.a)(i.a.mark((function e(a){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.post("https://lorelines-expressapi.herokuapp.com/api/lorelines",{LorelineName:a});case 3:return t=e.sent,t.data,e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}(),u=Ae();return r.a.createElement("div",null,!e.auth&&r.a.createElement(x.a,{to:"/"}),r.a.createElement(F,{logout:e.logout,drawerOpen:l,setDrawerOpen:o}),r.a.createElement("div",{className:u.root},r.a.createElement(ue,{drawerOpen:l,setDrawerOpen:o}),r.a.createElement(x.b,{path:"/app/account"},r.a.createElement(Oe,null)),r.a.createElement(x.b,{path:"/app/lorelines"},r.a.createElement(Le,{tryLorelineAdd:c})),r.a.createElement(x.b,{path:"/app/new",render:function(){return r.a.createElement("div",{className:u.box})}}),r.a.createElement(x.b,{path:"/app/timeline"},r.a.createElement(ve,null)),r.a.createElement(x.b,{path:"/app/directory"},r.a.createElement(ke.a,null)),r.a.createElement(x.b,{path:"/app/about"},r.a.createElement(Se,null))))}var De=Object(p.a)((function(e){return{root:{flexGrow:1},field:{width:"23vw",minWidth:"250px"},link:{color:e.palette.secondary.main,textDecoration:"underline"},error:{color:e.palette.error.main}}}));function Pe(e){var a=De(),t=r.a.useState({name:"",email:"",confirmEmail:"",password:"",confirmPassword:"",showPassword:!1,showConfirmPassword:!1,submitAttempted:!1,emailExists:!1}),n=Object(m.a)(t,2),l=n[0],o=n[1],c=function(e){return function(a){o(Object(U.a)({},l,Object(R.a)({},e,a.target.value)))}},i=function(e){e.preventDefault()};return r.a.createElement("main",{className:a.root},r.a.createElement("form",null,r.a.createElement(N.a,{style:{minHeight:"100vh",textAlign:"center"},direction:"column",justify:"center",alignItems:"center",container:!0},r.a.createElement(N.a,{item:!0},r.a.createElement(S.a,{style:{padding:2,fontWeight:"bold",fontSize:42}},"Create a new Lorelines account")),l.emailExists&&r.a.createElement(N.a,{item:!0},r.a.createElement(S.a,{className:a.error,style:{padding:5,fontSize:16}},"a user with that email already exists")),r.a.createElement(N.a,{item:!0},r.a.createElement(C.a,{className:a.field,name:"name",label:"Name",margin:"normal",value:l.name,onChange:c("name"),error:l.submitAttempted&&""===l.name,helperText:l.submitAttempted&&""===l.name?"this field cannot be empty":""})),r.a.createElement(N.a,{item:!0},r.a.createElement(C.a,{className:a.field,name:"email",label:"Email",margin:"normal",value:l.email,onChange:c("email"),error:l.submitAttempted&&""===l.email||l.submitAttempted&&!1===B.a.validate(l.email),helperText:l.submitAttempted&&""===l.email?"this field cannot be empty":l.submitAttempted&&!1===B.a.validate(l.email)?"invalid email address":""})),r.a.createElement(N.a,{item:!0},r.a.createElement(C.a,{className:a.field,name:"confirmEmail",label:"Confirm Email",margin:"normal",value:l.confirmEmail,onChange:c("confirmEmail"),error:l.email!==l.confirmEmail||l.submitAttempted&&""===l.confirmEmail,helperText:l.submitAttempted&&""===l.confirmEmail?"this field cannot be empty":l.email!==l.confirmEmail?"emails do not match":""})),r.a.createElement(N.a,{item:!0},r.a.createElement(C.a,{className:a.field,name:"pass",label:"Password",margin:"normal",type:l.showPassword?"text":"password",value:l.password,onChange:c("password"),error:l.submitAttempted&&""===l.password,helperText:l.submitAttempted&&""===l.password?"this field cannot be empty":"",InputProps:{endAdornment:r.a.createElement(L.a,{position:"end"},r.a.createElement(A.a,{"aria-label":"toggle password visibility",onClick:function(){o(Object(U.a)({},l,{showPassword:!l.showPassword}))},onMouseDown:i},l.showPassword?r.a.createElement(T.a,null):r.a.createElement(z.a,null)))}})),r.a.createElement(N.a,{item:!0},r.a.createElement(C.a,{className:a.field,name:"confirmpass",label:"Confirm Password",margin:"normal",type:l.showConfirmPassword?"text":"password",value:l.confirmpassword,onChange:c("confirmPassword"),error:l.password!==l.confirmPassword||l.submitAttempted&&""===l.confirmPassword,helperText:l.submitAttempted&&""===l.confirmPassword?"this field cannot be empty":l.password!==l.confirmPassword?"passwords do not match":"",InputProps:{endAdornment:r.a.createElement(L.a,{position:"end"},r.a.createElement(A.a,{"aria-label":"toggle password visibility",onClick:function(){o(Object(U.a)({},l,{showConfirmPassword:!l.showConfirmPassword}))},onMouseDown:i},l.showConfirmPassword?r.a.createElement(T.a,null):r.a.createElement(z.a,null)))}})),r.a.createElement(N.a,{item:!0},r.a.createElement(I.a,{style:{marginTop:16,padding:5,fontSize:22,borderRadius:"50px",width:"260px"},type:"submit",color:"primary",variant:"contained",onClick:function(a){if(a.preventDefault(),o(Object(U.a)({},l,{submitAttempted:!0})),!0===B.a.validate(l.email)&&l.email===l.confirmEmail&&""!==l.password&&l.password===l.confirmPassword){var t=!e.createUser(l.name,l.email,l.password);t&&console.log("email exists"),o(Object(U.a)({},l,{emailExists:t}))}}},"Submit")),r.a.createElement(N.a,{item:!0},r.a.createElement(S.a,{style:{padding:5,fontSize:16}},r.a.createElement(v.b,{className:a.link,to:"/"},"Go back"))))))}var Te=Object(p.a)((function(e){return{root:{flexGrow:1},link:{color:e.palette.secondary.main,textDecoration:"underline"}}}));function ze(){var e=Te();return r.a.createElement("main",{className:e.root},r.a.createElement(N.a,{style:{minHeight:"100vh",textAlign:"center"},direction:"column",justify:"center",alignItems:"center",container:!0},r.a.createElement(N.a,{item:!0},r.a.createElement(S.a,null,"Thank you for creating a Lorelines account")),r.a.createElement(N.a,{item:!0},r.a.createElement(S.a,null,r.a.createElement(v.b,{className:e.link,to:"/"},"return to login")))))}var We=Object(p.a)((function(e){return{root:{flexGrow:1},link:{color:e.palette.secondary.main,textDecoration:"underline"}}}));function Be(){var e=We();return r.a.createElement("main",{className:e.root},r.a.createElement(N.a,{style:{height:"100vh",textAlign:"center"},direction:"column",justify:"center",alignItems:"center",container:!0},r.a.createElement(N.a,{item:!0},r.a.createElement(S.a,null,"oof that sucks")),r.a.createElement(N.a,{item:!0},r.a.createElement(S.a,null,r.a.createElement(v.b,{className:e.link,to:"/"},"return to login")))))}var Me=t(128),Ze=Object(u.a)({palette:{primary:{main:"#f78d1e",contrastText:"#fff"},drawer:{main:"#d9d9d9",text:"#fff",icons:"#000"},secondary:{main:"#000"},error:{main:"#ff0000"}}}),Re=Object(u.a)({palette:{primary:{main:"#f78d1e",contrastText:"#fff"},drawer:{main:"#222",text:"#fff",icons:"#fff"},secondary:{main:"#fff"},error:{main:"#ff0000"},type:"dark"}}),Ue=Object(p.a)((function(e){return{root:{display:"flex"},center:{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"center"},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),Ge=Object(w.b)((function(e){return Object(y.a)({setUser:O},e)}))((function(e){var a=Object(n.useState)(!1),t=Object(m.a)(a,2),l=t[0],o=t[1],c=Object(n.useState)(!1),u=Object(m.a)(c,2),p=u[0],b=u[1],w=Object(n.useState)("dark"),y=Object(m.a)(w,2),O=y[0],j=(y[1],Ue());Object(n.useEffect)((function(){var a=localStorage.getItem("token");a&&g.a.put("https://lorelines-expressapi.herokuapp.com/api/users/token",{token:a}).then((function(a){localStorage.setItem("token",a.data),e.setUser(Me(a.data)),b(!0)})).catch((function(e){return console.log(e)}))}));var k=function(){var a=Object(s.a)(i.a.mark((function a(t,n){var r,l;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,o(!0),a.next=4,g.a.post("https://lorelines-expressapi.herokuapp.com/api/users/token",{email:t,password:n});case 4:return r=a.sent,l=r.data,localStorage.setItem("token",l),o(!1),e.setUser(Me(l)),b(!0),a.abrupt("return",!0);case 13:return a.prev=13,a.t0=a.catch(0),o(!1),a.abrupt("return",!1);case 17:case"end":return a.stop()}}),a,null,[[0,13]])})));return function(e,t){return a.apply(this,arguments)}}(),N=function(){var a=Object(s.a)(i.a.mark((function a(t,n,r){var l,c;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,o(!0),a.next=4,g.a.post("https://lorelines-expressapi.herokuapp.com/api/users",{name:t,email:n,password:r});case 4:return l=a.sent,c=l.data,localStorage.setItem("token",c),o(!1),e.setUser(Me(c)),b(!0),a.abrupt("return",!0);case 13:return a.prev=13,a.t0=a.catch(0),o(!1),a.abrupt("return",!1);case 17:case"end":return a.stop()}}),a,null,[[0,13]])})));return function(e,t,n){return a.apply(this,arguments)}}();return r.a.createElement(d.a,{theme:"dark"===O?Re:Ze},r.a.createElement(E.a,null),r.a.createElement(v.a,null,r.a.createElement("div",{className:j.root},r.a.createElement(f.a,{className:j.backdrop,open:l},r.a.createElement(h.a,{color:"inherit"})),p&&r.a.createElement(x.a,{to:"/app"}),r.a.createElement(x.b,{path:"/app"},r.a.createElement(Ie,{logout:function(){localStorage.removeItem("token"),b(!1)},auth:p})),r.a.createElement(x.b,{exact:!0,path:"/"},r.a.createElement(Z,{className:j.center,tryLogin:k})),r.a.createElement(x.b,{path:"/forgot",component:Be}),r.a.createElement(x.b,{exact:!0,path:"/register"},r.a.createElement(Pe,{createUser:N})),r.a.createElement(x.b,{path:"/register/confirm",component:ze}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(131),t(132);var He=Object(y.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_SET":return a.payload}return e}}),_e=Object(y.c)(He);o.a.render(r.a.createElement(w.a,{store:_e},r.a.createElement(Ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},88:function(e,a,t){e.exports=t.p+"static/media/logo.e2142875.svg"},92:function(e,a){},98:function(e,a,t){e.exports=t(133)}},[[98,1,2]]]);
//# sourceMappingURL=main.6d786504.chunk.js.map