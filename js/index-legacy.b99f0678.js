(function(){"use strict";var t={3533:function(t,e,a){a(6992),a(8674),a(9601),a(7727);var i=a(144),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-app-bar",{attrs:{app:"","elevate-on-scroll":"",tile:"",height:"70px"}},[i("v-app-bar-nav-icon",{staticClass:"d-block d-md-none",attrs:{"aria-label":"menu"},on:{click:function(e){t.drawer=!0}}}),i("v-spacer"),i("div",{staticClass:"d-none d-md-flex"},[i("div",{attrs:{"data-aos":"fade-right","data-aos-delay":"100"}},[i("NavButton",{attrs:{to:"/"}},[t._v("Sobre Mi")])],1),i("div",{attrs:{"data-aos":"fade-right","data-aos-delay":"200"}},[i("NavButton",{attrs:{to:"/projects"}},[t._v("Proyectos")])],1)]),i("v-divider",{staticClass:"mx-4 d-none d-md-block",attrs:{vertical:"",inset:""}}),i("SocialButtons",{staticClass:"d-none d-sm-block"}),i("v-divider",{staticClass:"mx-4 d-none d-sm-block",attrs:{vertical:"",inset:""}}),i("v-dialog",{attrs:{width:"700",scrollable:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"mr-0",attrs:{icon:"","aria-label":"descargar cv"}},"v-btn",n,!1),a),[i("v-icon",[t._v("mdi-download")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"text-h5"},[i("v-icon",{attrs:{left:""}},[t._v("mdi-download")]),t._v(" Descargar CV ")],1),i("v-card-text",{staticClass:"mt-2"},[i("v-sheet",[i("v-row",[i("v-col",{attrs:{sm:"6"}},[i("v-card",{staticClass:"overflow-hidden",attrs:{elevation:"4"}},[i("a",{attrs:{href:t.publicPath+"assets/files/cv_light.pdf",download:"CV_César_Rodríguez.pdf",target:"_blank"}},[i("v-img",{attrs:{src:a(2977)}})],1)])],1),i("v-col",{attrs:{sm:"6"}},[i("v-card",{staticClass:"overflow-hidden",attrs:{elevation:"4"}},[i("a",{attrs:{href:t.publicPath+"/assets/files/cv_dark.pdf",download:"CV_César_Rodríguez.pdf",target:"_blank"}},[i("v-img",{attrs:{src:a(8693)}})],1)])],1)],1)],1)],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Cerrar ")])],1)],1)],1)],1),i("v-navigation-drawer",{attrs:{fixed:"",temporary:"",width:"100%"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-toolbar",{attrs:{flat:""}},[i("v-spacer"),i("v-btn",{attrs:{icon:"","aria-label":"cerrar menu"},on:{click:function(e){t.drawer=!1}}},[i("v-icon",[t._v("mdi-close")])],1)],1),t.drawer?i("v-container",{staticClass:"px-15"},[i("v-row",{attrs:{justify:"center",align:"center"}},[i("v-col",[i("div",{staticClass:"nav-profile-image text-center mb-8",attrs:{"data-aos":"fade-right"}},[i("v-avatar",{attrs:{color:"grey darken-4",size:"150"}},[i("div",{staticClass:"banner-image"}),i("v-img",{attrs:{position:"top right",src:a(9),alt:"profile-image"}})],1)],1),i("NavButton",{attrs:{to:"/",nav:"","data-aos":"fade-right"}},[t._v("Sobre Mi")]),i("NavButton",{attrs:{to:"/projects",nav:"","data-aos":"fade-right","data-aos-delay":"200"}},[t._v("Proyectos")])],1)],1),i("v-spacer"),i("v-row",{attrs:{justify:"center",align:"center"}},[i("v-col",{attrs:{align:"center"}},[i("v-divider",{staticClass:"mb-4",attrs:{"data-aos":"fade-right","data-aos-delay":"0"}}),i("SocialButtons")],1)],1)],1):t._e()],1),i("v-main",[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view")],1)],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{class:["nav-button",t.nav?"mb-5":""],attrs:{to:t.to,depressed:"",ripple:!1,rounded:"","active-class":"primary no-active",block:t.nav,large:t.nav}},[t._t("default")],2)},r=[],c={name:"NavButton",props:{to:String,nav:Boolean}},l=c,d=a(1001),u=a(3453),p=a.n(u),m=a(680),v=(0,d.Z)(l,o,r,!1,null,null,null),f=v.exports;p()(v,{VBtn:m.Z});var g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex justify-center"},[a("div",{attrs:{"data-aos":"fade-right","data-aos-delay":"200"}},[a("v-btn",{attrs:{icon:"",href:"https://www.linkedin.com/in/crodriguezg25",target:"_blank","aria-label":"LinkedIn"}},[a("v-icon",[t._v("mdi-linkedin")])],1)],1),a("div",{attrs:{"data-aos":"fade-right","data-aos-delay":"100"}},[a("v-btn",{attrs:{icon:"",href:"https://github.com/CARodriguezG",target:"_blank","aria-label":"Github"}},[a("v-icon",[t._v("mdi-github")])],1)],1),a("div",{attrs:{"data-aos":"fade-right","data-aos-delay":"10"}},[a("v-btn",{attrs:{icon:"",href:"https://es.stackoverflow.com/users/66587/c-rodriguez",target:"_blank","aria-label":"StackOverflow"}},[a("v-icon",[t._v("mdi-stack-overflow")])],1)],1)])])},h=[],b={},C=b,y=a(6428),S=(0,d.Z)(C,g,h,!1,null,null,null),_=S.exports;p()(S,{VBtn:m.Z,VIcon:y.Z});var k={components:{NavButton:f,SocialButtons:_},data:function(){return{publicPath:"/portafolio/",drawer:!1,dialog:!1}},mounted:function(){}},w=k,x=a(7524),V=a(782),I=a(5206),Z=a(6370),B=a(2628),L=a(7118),P=a(2102),A=a(9846),j=a(914),E=a(1418),T=a(7047),N=a(7877),D=a(5132),$=a(2877),M=a(3385),O=a(9762),J=a(6656),R=(0,d.Z)(w,n,s,!1,null,null,null),F=R.exports;p()(R,{VApp:x.Z,VAppBar:V.Z,VAppBarNavIcon:I.Z,VAvatar:Z.Z,VBtn:m.Z,VCard:B.Z,VCardActions:L.h7,VCardText:L.ZB,VCardTitle:L.EB,VCol:P.Z,VContainer:A.Z,VDialog:j.Z,VDivider:E.Z,VIcon:y.Z,VImg:T.Z,VMain:N.Z,VNavigationDrawer:D.Z,VRow:$.Z,VSheet:M.Z,VSpacer:O.Z,VToolbar:J.Z});a(1539),a(8783),a(3948);var z=a(8345),Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"px-0 pt-0 pb-15",attrs:{fluid:""}},[a("BannerSection"),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",[a("v-container",{staticClass:"py-7"},[a("CardSection",{attrs:{id:"aboutme",title:"Sobre Mí",icon:"mdi-account"}},[a("div",{staticClass:"px-8 subtitle-1"},[a("p",[t._v("Me apasiona crear software y herramientas que agilicen, automaticen y faciliten los procesos que a veces nos toman horas de trabajo realizar.")]),a("p",[t._v("Me he dedicado a mejorar mis habilidades con el uso de las nuevas tecnologías usando frameworks como "),a("SkillLink",{attrs:{to:"https://vuejs.org/"}},[t._v("VueJS")]),t._v(" (principalmente), "),a("SkillLink",{attrs:{to:"https://jquery.com/"}},[t._v("jQuery")]),t._v(", "),a("SkillLink",{attrs:{to:"https://getbootstrap.com/"}},[t._v("Bootstrap 4")]),t._v(", bases de datos NoSQL con "),a("SkillLink",{attrs:{to:"https://www.mongodb.com/"}},[t._v("MongoDB")]),t._v(" y creando aplicaciones híbridas utilizando "),a("SkillLink",{attrs:{to:"https://nodejs.org/"}},[t._v("NodeJS")]),t._v(", "),a("SkillLink",{attrs:{to:"https://expressjs.com/"}},[t._v("ExpressJS")]),t._v(" y "),a("SkillLink",{attrs:{to:"https://www.electronjs.org/"}},[t._v("ElectronJS")]),t._v(". ")],1)])]),a("SkillSection",{attrs:{id:"skills"}}),a("ExperienceSection",{attrs:{id:"experience"}}),a("CoursesSection",{attrs:{id:"courses"}}),a("AwardsSection",{attrs:{id:"awards"}})],1)],1)],1)],1)},G=[],H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{staticClass:"banner-row",attrs:{"no-gutters":""}},[i("v-col",{staticStyle:{position:"relative"}},[i("div",{staticClass:"banner-image"}),i("v-container",{staticClass:"fill-height px-0 py-15"},[i("v-row",{staticStyle:{"z-index":"1"},attrs:{"no-gutters":""}},[i("v-col",[i("v-container",{staticClass:"fill-height pa-0",attrs:{fluid:""}},[i("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[t.$vuetify.breakpoint.mdAndUp?[i("v-col",{attrs:{cols:"12",md:"5"}},[i("div",{staticClass:"profile-image"},[i("img",{staticStyle:{opacity:"0"},attrs:{width:"100%",height:"auto",src:a(2123),alt:"profile-image"},on:{load:t.animateProfileImage}})])]),i("v-col",{staticClass:"pl-md-6",attrs:{cols:"12",md:"7"}},[i("div",{ref:"greeting",staticClass:"d-inline-block overflow-hidden text-no-wrap text-left pb-5",staticStyle:{opacity:"0"}},[i("h1",{staticClass:"text-hello"},[t._v("Hola,")]),i("h1",{staticClass:"text-name"},[t._v("Soy César Rodríguez.")]),i("div",{staticClass:"mt-5"},[i("v-btn",{attrs:{color:"primary",rounded:""},on:{click:t.readAboutMe}},[t._v("Leer Sobre Mi")])],1)])])]:[i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"text-center"},[i("h1",{ref:"hello",staticClass:"text-hello"},[t._v("¡Hola!")]),i("h1",{ref:"name",staticClass:"text-name"},[t._v("Soy César Rodríguez.")]),i("div",{ref:"button",staticClass:"mt-5"},[i("v-btn",{attrs:{color:"primary",rounded:""},on:{click:t.readAboutMe}},[t._v("Leer Sobre Mi")])],1)])]),i("v-col",{ref:"chevron",staticClass:"mt-15 text-center",attrs:{cols:"12"}},[i("v-btn",{attrs:{icon:"","aria-label":"leer mas"},on:{click:t.readAboutMe}},[i("v-icon",{attrs:{large:""}},[t._v("mdi-chevron-down")])],1)],1)]],2)],1)],1)],1)],1)],1)],1)},q=[],U=(a(8309),{name:"BannerSection",data:function(){return{profileImageLoaded:!1}},mounted:function(){this.$vuetify.breakpoint.mdAndUp||this.animateMobileHeader()},methods:{readAboutMe:function(){this.$vuetify.goTo("#aboutme",{duration:1e3,easing:"easeOutCubic"})},animateProfileImage:function(t){this.$anime.timeline().add({targets:t.target,opacity:[0,1],easing:"easeOutQuad",duration:1e3}).add({targets:t.target,translateX:["50%","0%"],easing:"easeOutQuad",duration:1e3}).add({targets:this.$refs.greeting,width:["0%","100%"],opacity:[0,1],easing:"easeOutQuad",duration:1e3},"-=800")},animateMobileHeader:function(){this.$anime.timeline().add({targets:this.$refs.hello,opacity:[0,1],easing:"easeOutQuad",duration:1e3,delay:500}).add({targets:this.$refs.hello,translateY:["50%","0%"],easing:"easeOutQuad",duration:900},"-=10").add({targets:this.$refs.name,opacity:[0,1],translateY:["-40%","0%"],easing:"easeOutQuad"},"-=900").add({targets:this.$refs.button,opacity:[0,1],translateY:["-100%","0%"],easing:"easeOutQuad"},"-=850").add({targets:this.$refs.chevron,opacity:[0,1],translateY:["-100%","0%"],easing:"easeOutQuad"},"-=800")}},watch:{"$vuetify.breakpoint.mdAndUp":function(t){var e=this;t||this.$nextTick((function(){e.animateMobileHeader()}))}}}),W=U,Y=(0,d.Z)(W,H,q,!1,null,null,null),K=Y.exports;p()(Y,{VBtn:m.Z,VCol:P.Z,VContainer:A.Z,VIcon:y.Z,VRow:$.Z});var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{"data-aos":"fade-down"}},[a("v-col",[a("v-card",{staticClass:"pa-0",attrs:{elevation:"4"}},[a("v-card-title",{staticClass:"pt-8 px-8 pb-2 justify-center justify-sm-start"},[t.icon?a("v-icon",{attrs:{large:"",left:""}},[t._v(t._s(t.icon))]):t._e(),a("h3",{staticClass:"mb-0"},[t._v(t._s(t.title))])],1),a("v-card-text",{staticClass:"px-0 pb-8"},[t._t("default")],2)],1)],1)],1)},tt=[],et={props:{title:String,icon:String}},at=et,it=(0,d.Z)(at,X,tt,!1,null,null,null),nt=it.exports;p()(it,{VCard:B.Z,VCardText:L.ZB,VCardTitle:L.EB,VCol:P.Z,VIcon:y.Z,VRow:$.Z});var st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("CardSection",{attrs:{title:"Experiencia",icon:"mdi-account-star"}},[a("h3",{staticClass:"px-8 mb-0 text-center text-sm-left"},[t._v("Selecciona una experiencia para conocer más")]),a("v-slide-group",{staticClass:"py-4",attrs:{"show-arrows":"","center-active":""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},t._l(t.data,(function(e,i){return a("v-slide-item",{key:i,scopedSlots:t._u([{key:"default",fn:function(i){var n=i.active,s=i.toggle;return[a("v-card",{staticClass:"mx-2",attrs:{flat:"",color:n?t.activeItemClass:t.inactiveItemClass,height:"200",width:"200"},on:{click:s}},[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("div",{staticClass:"text-center px-5"},[a("v-icon",{staticClass:"mb-2",attrs:{large:"",color:n?t.activeIconClass:t.inactiveIconClass}},[t._v("mdi-office-building-marker")]),a("h3",{class:n?t.activeTextClass:t.inactiveTextClass},[t._v(t._s(e.business.name))])],1)])],1)],1)]}}],null,!0)})})),1),a("v-expand-transition",[null!=t.itemSelected?a("v-sheet",{staticClass:"px-8",attrs:{tile:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",[a("v-list-item",{staticClass:"pa-0",attrs:{"three-line":""}},[a("v-list-item-content",{staticClass:"pt-0"},[a("v-list-item-title",{staticClass:"text-wrap"},[a("h2",[t._v(t._s(t.itemSelected.role))])]),a("v-list-item-subtitle",[a("h3",[t._v(t._s(t.itemSelected.business.name)+" - "+t._s(t.itemSelected.type))])]),a("v-list-item-subtitle",[t._v(" "+t._s(t.itemSelected.date.start)+" - "+t._s(t.itemSelected.date.end)+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s(t.itemSelected.business.location)+" ")])],1)],1),t.itemSelected.description.length>0?a("v-list-item",{staticClass:"pa-0"},[a("ul",t._l(t.itemSelected.description,(function(e,i){return a("li",{key:i},[t._v(" "+t._s(e)+" ")])})),0)]):t._e(),t.itemSelected.project?a("v-list-item",{staticClass:"px-0 pt-2"},[a("v-btn",{attrs:{color:"primary",rounded:"",depressed:"",block:t.$vuetify.breakpoint.xsOnly,outlined:t.$vuetify.theme.dark,to:"/projects/"+t.itemSelected.project}},[t._v("Ver Proyecto")])],1):t._e()],1)],1)],1):t._e()],1)],1)},ot=[],rt=[{role:"Desarrollador de Software",type:"Profesional Independiente",business:{name:"Tienda de Ropa Balloons",location:"Guápiles, Limón, Costa Rica"},date:{start:"2022",end:"Menos de 1 año"},description:["Creación de sistema de facturación y gestión de inventario.","Programado en: Javascript.","IDE: Visual Studio Code.","Tecnologías utilizadas: Nuxt, Vuetify, Sass (framework CSS), NodeJS, ElectronJS (framework para creación de aplicación híbrida), Vuex, Vuex-Persist (base de datos interna)."],project:"tienda-balloons"},{role:"Desarrollador de Software",type:"Profesional Independiente",business:{name:"Minisuper y Panadería Rosita",location:"Guápiles, Limón, Costa Rica"},date:{start:"2021",end:"2022"},description:["Creación de sistema de facturación y gestión de inventario.","Programado en: Javascript.","IDE: Visual Studio Code.","Tecnologías utilizadas: VueJS, Bootstrap 4, Sass (framework CSS), NodeJS, ExpressJS (como API de comunicación entre la base de datos y la aplicación), ElectronJS (framework para creación de aplicación híbrida), MongoDB (base de datos NoSQL)."],project:"quickstore"},{role:"Diseñador Gráfico",type:"Jornada completa",business:{name:"Sublime Arte y Tecnología S.A.",location:"Guápiles, Limón, Costa Rica"},date:{start:"jul. 2019",end:"oct. 2021"},description:["Diseño de tarjetas, invitaciones, volantes, gafetes, entre otros.","Diseño, uso de mockups e impresión de artes utilizados en la sublimación de camisetas, tazas, llaveros, entre otros."]},{role:"Desarrollador Web",type:"Contrato de Prácticas",business:{name:"ELIM5",location:"Remoto"},date:{start:"abr. 2019",end:"jun. 2019"},description:[]},{role:"Desarrollador de Software",type:"Profesional Independiente",business:{name:"Electroservicios Bonilla",location:"Guápiles, Limón, Costa Rica"},date:{start:"2018",end:"Menos de 1 año"},description:["Creación de sistema básico de ingreso de boletas de reparación y gestión de inventario.","Programado en: Javascript.","IDE: Visual Studio Code.","Tecnologías utilizadas: Bootstrap 4, jQuery, NeDB (como base de datos incrustada)."],project:"electro-servicios-bonilla"},{role:"Desarrollador de Software",type:"Profesional Independiente",business:{name:"Iglesia de Dios Evangelio Completo Aposento Alto",location:"Guápiles, Limón, Costa Rica"},date:{start:"2017",end:"Menos de 1 año"},description:["Creación de sistema básico de facturación y gestión de inventario.","Programado en: Java.","IDE: NetBeans.","Tecnologías utilizadas: Java Swing (biblioteca gráfica para creación de interfaces de usuario en Java)"],project:"aposento-alto"},{role:"Desarrollador de Software",type:"Profesional Independiente",business:{name:"Casa de Empeños La Guapileña",location:"Guápiles, Limón, Costa Rica"},date:{start:"2017",end:"Menos de 1 año"},description:["Creación de sistema básico de gestión de préstamos y empeños.","Programado en: Java.","IDE: NetBeans.","Tecnologías utilizadas: Java Swing (biblioteca gráfica para creación de interfaces de usuario en Java)."],project:"la-guapilena"}],ct={components:{CardSection:nt},data:function(){return{selected:null,data:rt}},methods:{},computed:{itemSelected:function(){return null!=this.selected?this.data[this.selected]:null},activeItemClass:function(){return this.$vuetify.theme.dark,"primary"},inactiveItemClass:function(){return this.$vuetify.theme.dark?"grey darken-1":"grey lighten-3"},activeIconClass:function(){return this.$vuetify.theme.dark,"white"},inactiveIconClass:function(){return this.$vuetify.theme.dark?"white":"grey darken-1"},activeTextClass:function(){return this.$vuetify.theme.dark,"white--text"},inactiveTextClass:function(){return this.$vuetify.theme.dark?"white--text":"grey--text text--darken-1"}}},lt=ct,dt=a(5827),ut=a(7620),pt=a(5192),mt=a(7955),vt=a(4820),ft=(0,d.Z)(lt,st,ot,!1,null,"2f55b754",null),gt=ft.exports;p()(ft,{VBtn:m.Z,VCard:B.Z,VCol:P.Z,VContainer:A.Z,VExpandTransition:dt.Fx,VIcon:y.Z,VListItem:ut.Z,VListItemContent:pt.km,VListItemSubtitle:pt.oZ,VListItemTitle:pt.V9,VRow:$.Z,VSheet:M.Z,VSlideGroup:mt.ZP,VSlideItem:vt.Z});var ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("CardSection",{attrs:{title:"Habilidades",icon:"mdi-account-cog"}},[a("div",{staticClass:"px-8"},[a("v-chip-group",{attrs:{column:""}},t._l(t.data,(function(e,i){return a("v-chip",{key:i},[t._v(" "+t._s(e.name)+" "),e.hasBadge?a("v-tooltip",{attrs:{bottom:"",color:"grey darken-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a("v-icon",t._g(t._b({staticClass:"mr-0",attrs:{right:""}},"v-icon",n,!1),i),[t._v("mdi-clipboard-check-outline")])]}}],null,!0)},[a("span",[a("v-icon",{attrs:{color:"grey lighten-2"}},[t._v("mdi-clipboard-check-outline")]),t._v(" Evaluación de aptitudes de LinkedIn ")],1)]):t._e()],1)})),1)],1)])},bt=[],Ct=[{name:"HTML5",hasBadge:!0},{name:"CSS3",hasBadge:!0},{name:"Javascript",hasBadge:!0},{name:"PHP",hasBadge:!1},{name:"Java",hasBadge:!1},{name:"NodeJS",hasBadge:!1},{name:"ExpressJS",hasBadge:!1},{name:"ElectronJS",hasBadge:!1},{name:"MongoDB",hasBadge:!1},{name:"MySQL",hasBadge:!1},{name:"Bootstrap 4",hasBadge:!1},{name:"Vue",hasBadge:!1},{name:"Vuex",hasBadge:!1},{name:"Nuxt",hasBadge:!1},{name:"Sass",hasBadge:!1},{name:"Bootstrap Vue",hasBadge:!1},{name:"Vuetify",hasBadge:!1},{name:"jQuery",hasBadge:!1},{name:"Android Studio",hasBadge:!1},{name:"Desarrollo Front End",hasBadge:!0},{name:"Diseño Web",hasBadge:!1},{name:"Photoshop",hasBadge:!1},{name:"Illustrator",hasBadge:!1}],yt={components:{CardSection:nt},data:function(){return{data:Ct}}},St=yt,_t=a(5424),kt=a(6105),wt=a(6053),xt=(0,d.Z)(St,ht,bt,!1,null,null,null),Vt=xt.exports;p()(xt,{VChip:_t.Z,VChipGroup:kt.Z,VIcon:y.Z,VTooltip:wt.Z});var It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("CardSection",{attrs:{title:"Cursos ("+t.data.length+")",icon:"mdi-certificate"}},[a("h3",{staticClass:"px-8 mb-3 text-center text-sm-left"},[t._v("Cursos y conocimientos")]),a("div",{staticClass:"px-8"},[a("v-list",{staticClass:"pa-0"},[a("v-virtual-scroll",{attrs:{height:"400","item-height":"70",items:t.data},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.item,n=e.index;return[a("v-list-item",{key:n,staticClass:"pl-0"},[a("v-list-item-icon",{staticClass:"mr-2",attrs:{"data--aos":"fade-left"}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-checkbox-blank-circle")])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"subtitle-1 font-weight-bold",attrs:{"data--aos":"fade-left"},domProps:{textContent:t._s(i.name)}}),a("v-list-item-subtitle",{staticClass:"subtitle-2",attrs:{"data--aos":"fade-left"},domProps:{textContent:t._s(i.givenby)}})],1),i.path?a("v-list-item-action",[t.$vuetify.breakpoint.mdAndUp?a("v-btn",{attrs:{rounded:"",outlined:t.$vuetify.theme.dark,depressed:"",color:"primary","data--aos":"fade",href:i.path,target:"_blank"}},[t._v(" Certificado ")]):a("v-btn",{attrs:{icon:"",large:"",outlined:"",color:"primary",href:""+t.publicPath+i.path,target:"_blank"}},[a("v-icon",[t._v("mdi-certificate")])],1)],1):t._e()],1)]}}])})],1)],1)])},Zt=[],Bt=[{name:"CCNA 1 Enrutamiento y Conmutación: Introducción a las Redes",givenby:"Cisco - Fundación Omar Dengo",path:"assets/certificates/cisco/introduccion-redes.pdf"},{name:"IT Essentials: PC Hardware and Software",givenby:"Cisco - Fundación Omar Dengo",path:"assets/certificates/cisco/itessentials.pdf"},{name:"Curso Básico LibreOffice Calc",givenby:"Universidad Técnica Nacional",path:"assets/certificates/utn/libreoffice-calc.pdf"},{name:"Curso Básico LibreOffice Impress",givenby:"Universidad Técnica Nacional",path:"assets/certificates/utn/libreoffice-impress.pdf"},{name:"Curso Básico LibreOffice Writer",givenby:"Universidad Técnica Nacional",path:"assets/certificates/utn/libreoffice-writer.pdf"},{name:"Curso de Introducción al Desarrollo Web: HTML y CSS (1/2)",givenby:"Google Actívate",path:"assets/certificates/google/web-1.pdf"},{name:"Curso de Introducción al Desarrollo Web: HTML y CSS (2/2)",givenby:"Google Actívate",path:"assets/certificates/google/web-2.pdf"},{name:"Introducción a API REST",givenby:"EDTeam",path:"assets/certificates/edteam/api-rest.png"},{name:"Asistente Web - Capacítate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/asistente-web.pdf"},{name:"Curador de Datos - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/curador-datos.pdf"},{name:"Desarrollador Frontend - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/front-end.pdf"},{name:"Desarrollador de Contenido Digital - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/contenido-digital.pdf"},{name:"Diplomado Técnico en Integridad Web - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/integridad-web.pdf"},{name:"Finder - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/finder.pdf"},{name:"Gestor de Imagen Web - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/imagen-web.pdf"},{name:"Introducción a la Programación - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/programacion.pdf"},{name:"Ortografía y Redacción - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/redacccion-ortografia.pdf"},{name:"Protocolos de Atención y Servicio - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/atencion-servicio.pdf"},{name:"Tester - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/tester.pdf"},{name:"Trabajo en Equipo - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/trabajo-equipo.pdf"},{name:"Técnico en Informática (Ofimática) - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/ofimatica.pdf"},{name:"Curso de CSS",givenby:"SoloLearn",path:"assets/certificates/sololearn/css.pdf"},{name:"Curso de Diseño Web Responsivo",givenby:"SoloLearn",path:"assets/certificates/sololearn/responsive.pdf"},{name:"Curso de HTML",givenby:"SoloLearn",path:"assets/certificates/sololearn/html.pdf"},{name:"Curso de Java (práctico y teórico)",givenby:"SoloLearn",path:"assets/certificates/sololearn/java.pdf"},{name:"Curso de JavaScript (práctico y teórico)",givenby:"SoloLearn",path:"assets/certificates/sololearn/javascript.pdf"},{name:"Curso de PHP",givenby:"SoloLearn",path:"assets/certificates/sololearn/php.pdf"},{name:"Curso de SQL (práctico y teórico)",givenby:"SoloLearn",path:"assets/certificates/sololearn/sql.pdf"},{name:"Curso de jQuery",givenby:"SoloLearn",path:"assets/certificates/sololearn/jquery.pdf"},{name:"Introducción a MongoDB - Numpi Cursos",givenby:"Udemy",path:"assets/certificates/udemy/mongodb.pdf"}],Lt={components:{CardSection:nt},data:function(){return{publicPath:"/portafolio/",data:Bt}},mounted:function(){}},Pt=Lt,At=a(6816),jt=a(3099),Et=a(459),Tt=a(5683),Nt=(0,d.Z)(Pt,It,Zt,!1,null,null,null),Dt=Nt.exports;p()(Nt,{VBtn:m.Z,VIcon:y.Z,VList:At.Z,VListItem:ut.Z,VListItemAction:jt.Z,VListItemContent:pt.km,VListItemIcon:Et.Z,VListItemSubtitle:pt.oZ,VListItemTitle:pt.V9,VVirtualScroll:Tt.Z});var $t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("CardSection",{attrs:{title:"Reconocimientos ("+t.data.length+")",icon:"mdi-trophy"}},[a("h3",{staticClass:"px-8 mb-3 text-center text-sm-left"},[t._v("Reconocimientos y premios")]),a("div",{staticClass:"px-8"},[a("v-list",{staticClass:"pa-0"},[a("v-virtual-scroll",{attrs:{height:"400","item-height":"70",items:t.data},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.item,n=e.index;return[a("v-list-item",{key:n,staticClass:"pl-0"},[a("v-list-item-icon",{staticClass:"mr-2",attrs:{"data--aos":"fade-left"}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-checkbox-blank-circle")])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"subtitle-1 font-weight-bold",attrs:{"data--aos":"fade-left"},domProps:{textContent:t._s(i.name)}}),a("v-list-item-subtitle",{staticClass:"subtitle-2",attrs:{"data--aos":"fade-left"},domProps:{textContent:t._s(i.date+" - "+i.givenby)}})],1),i.path?a("v-list-item-action",[t.$vuetify.breakpoint.mdAndUp?a("v-btn",{attrs:{rounded:"",outlined:t.$vuetify.theme.dark,depressed:"",color:"primary","data--aos":"fade",href:i.path,target:"_blank"}},[t._v(" Certificado ")]):a("v-btn",{attrs:{icon:"",large:"",outlined:"",color:"primary",href:""+t.publicPath+i.path,target:"_blank"}},[a("v-icon",[t._v("mdi-trophy")])],1)],1):t._e()],1)]}}])})],1)],1)])},Mt=[],Ot=[{name:"Liderazgo Transformacional y Habilidades Blandas",givenby:"Fundación Mejoremos Costa Rica",date:"sept. 2021",duration:"30 horas",path:"assets/awards/habilidades-blandas.pdf"},{name:"Primer Promedio Especialidad Informática en Soporte",givenby:"Colegio Técnico Profesional de Pococí",date:"dic. 2015",duration:"",path:"assets/awards/promedio-informatica.pdf"},{name:"Primer Promedio Décimo Año (Premio a la Perseverancia)",givenby:"Colegio Técnico Profesional de Pococí",date:"sept. 2013",duration:"",path:"assets/awards/promedio-decimo.pdf"},{name:"Carrera Ministerial para Equipos de Alabanza Módulos I y II",givenby:"Instituto Visión",date:"may. 2013",duration:"",path:"assets/awards/vision.pdf"},{name:"Primero Promedio Noveno Año",givenby:"Colegio Técnico Profesional de Pococí",date:"dic. 2012",duration:"",path:"assets/awards/promedio-noveno.pdf"},{name:"Emprendimientos Cooperativos Juveniles",givenby:"CENECOOP R.L.",date:"may. 2011",duration:"24 horas",path:"assets/awards/emprendimientos-cooperativos.pdf"},{name:"Taller de Teatro",givenby:"Prof. Karen González Coordinadora Taller de Teatro",date:"ene. 2010",duration:"8 horas",path:"assets/awards/taller-teatro.pdf"}],Jt={components:{CardSection:nt},data:function(){return{publicPath:"/portafolio/",data:Ot}},methods:{}},Rt=Jt,Ft=(0,d.Z)(Rt,$t,Mt,!1,null,null,null),zt=Ft.exports;p()(Ft,{VBtn:m.Z,VIcon:y.Z,VList:At.Z,VListItem:ut.Z,VListItemAction:jt.Z,VListItemContent:pt.km,VListItemIcon:Et.Z,VListItemSubtitle:pt.oZ,VListItemTitle:pt.V9,VVirtualScroll:Tt.Z});var Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"primary--text",attrs:{href:t.to,target:"_blank"}},[a("b",[t._t("default")],2)])},Gt=[],Ht={props:["to"]},qt=Ht,Ut=(0,d.Z)(qt,Qt,Gt,!1,null,"ffd7d2da",null),Wt=Ut.exports,Yt={name:"HomeView",components:{BannerSection:K,CardSection:nt,ExperienceSection:gt,SkillSection:Vt,CoursesSection:Dt,AwardsSection:zt,SkillLink:Wt},data:function(){return{}},mounted:function(){},methods:{onSlideAnimation:function(t){"in"===t.going&&"top"===t.direction&&this.$anime.timeline().add({targets:t.el,autoplay:!1,opacity:[0,1],translateY:["-50%","0%"],duration:800,easing:"easeOutQuad"})}}},Kt=Yt,Xt=(0,d.Z)(Kt,Q,G,!1,null,null,null),te=Xt.exports;p()(Xt,{VCol:P.Z,VContainer:A.Z,VRow:$.Z}),i.Z.use(z.Z);var ee=[{path:"/",name:"home",component:te},{path:"/projects",name:"projects",component:function(){return a.e(176).then(a.bind(a,4681))}},{path:"/projects/:id",component:function(){return a.e(242).then(a.bind(a,5542))}}],ae=new z.Z({mode:"history",base:"/portafolio/",routes:ee}),ie=ae,ne=a(5591),se=a(1846);i.Z.use(ne.Z);var oe=new ne.Z({theme:{dark:!0,themes:{dark:{primary:se.Z.lightBlue.darken1}}}}),re=a(8416),ce=a.n(re);i.Z.use(ce());var le=a(2711),de=a.n(le);de().init({offset:0,delay:0,duration:800,easing:"ease-out-quad",once:!0}),i.Z.config.productionTip=!1,new i.Z({router:ie,vuetify:oe,render:function(t){return t(F)}}).$mount("#app")},8693:function(t,e,a){t.exports=a.p+"img/cv-dark.f913e35b.png"},2977:function(t,e,a){t.exports=a.p+"img/cv-light.a385e43e.png"},9:function(t,e,a){t.exports=a.p+"img/profile2.e0cc4ec4.png"},2123:function(t,e,a){t.exports=a.p+"img/profile4.e09def41.png"}},e={};function a(i){var n=e[i];if(void 0!==n)return n.exports;var s=e[i]={exports:{}};return t[i].call(s.exports,s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,i,n,s){if(!i){var o=1/0;for(d=0;d<t.length;d++){i=t[d][0],n=t[d][1],s=t[d][2];for(var r=!0,c=0;c<i.length;c++)(!1&s||o>=s)&&Object.keys(a.O).every((function(t){return a.O[t](i[c])}))?i.splice(c--,1):(r=!1,s<o&&(o=s));if(r){t.splice(d--,1);var l=n();void 0!==l&&(e=l)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[i,n,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,i){return a.f[i](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+{176:"projects",242:"project"}[t]+"-legacy."+{176:"48e6ddd1",242:"50510e49"}[t]+".js"}}(),function(){a.miniCssF=function(t){return"css/project.dcf334cb.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="portafolio:";a.l=function(i,n,s,o){if(t[i])t[i].push(n);else{var r,c;if(void 0!==s)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==e+s){r=u;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",e+s),r.src=i),t[i]=[n];var p=function(e,a){r.onerror=r.onload=null,clearTimeout(m);var n=t[i];if(delete t[i],r.parentNode&&r.parentNode.removeChild(r),n&&n.forEach((function(t){return t(a)})),e)return e(a)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/portafolio/"}(),function(){var t=function(t,e,a,i){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var s=function(s){if(n.onerror=n.onload=null,"load"===s.type)a();else{var o=s&&("load"===s.type?"missing":s.type),r=s&&s.target&&s.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=r,n.parentNode.removeChild(n),i(c)}};return n.onerror=n.onload=s,n.href=e,document.head.appendChild(n),n},e=function(t,e){for(var a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var n=a[i],s=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(s===t||s===e))return n}var o=document.getElementsByTagName("style");for(i=0;i<o.length;i++){n=o[i],s=n.getAttribute("data-href");if(s===t||s===e)return n}},i=function(i){return new Promise((function(n,s){var o=a.miniCssF(i),r=a.p+o;if(e(o,r))return n();t(i,r,n,s)}))},n={826:0};a.f.miniCss=function(t,e){var a={242:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=i(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}(),function(){var t={826:0};a.f.j=function(e,i){var n=a.o(t,e)?t[e]:void 0;if(0!==n)if(n)i.push(n[2]);else{var s=new Promise((function(a,i){n=t[e]=[a,i]}));i.push(n[2]=s);var o=a.p+a.u(e),r=new Error,c=function(i){if(a.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var s=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;r.message="Loading chunk "+e+" failed.\n("+s+": "+o+")",r.name="ChunkLoadError",r.type=s,r.request=o,n[1](r)}};a.l(o,c,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,s,o=i[0],r=i[1],c=i[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(c)var d=c(a)}for(e&&e(i);l<o.length;l++)s=o[l],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(d)},i=self["webpackChunkportafolio"]=self["webpackChunkportafolio"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(3533)}));i=a.O(i)})();
//# sourceMappingURL=index-legacy.b99f0678.js.map