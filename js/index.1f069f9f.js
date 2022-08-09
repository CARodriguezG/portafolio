(function(){"use strict";var e={8455:function(e,t,a){var i=a(144),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("v-app-bar",{attrs:{app:"","elevate-on-scroll":"",tile:"",height:"70px"}},[i("v-app-bar-nav-icon",{staticClass:"d-block d-md-none",attrs:{"aria-label":"menu"},on:{click:function(t){e.drawer=!0}}}),i("v-spacer"),i("div",{staticClass:"d-none d-md-flex"},[i("div",{attrs:{"data-aos":"fade-right","data-aos-delay":"100"}},[i("NavButton",{attrs:{to:"/"}},[e._v("Sobre Mi")])],1),i("div",{attrs:{"data-aos":"fade-right","data-aos-delay":"200"}},[i("NavButton",{attrs:{to:"/projects"}},[e._v("Proyectos")])],1)]),i("v-divider",{staticClass:"mx-4 d-none d-md-block",attrs:{vertical:"",inset:""}}),i("SocialButtons",{staticClass:"d-none d-sm-block"}),i("v-divider",{staticClass:"mx-4 d-none d-sm-block",attrs:{vertical:"",inset:""}}),i("v-dialog",{attrs:{width:"700",scrollable:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,s=t.attrs;return[i("v-btn",e._g(e._b({staticClass:"mr-0",attrs:{icon:"","aria-label":"descargar cv"}},"v-btn",s,!1),a),[i("v-icon",[e._v("mdi-download")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"text-h5"},[i("v-icon",{attrs:{left:""}},[e._v("mdi-download")]),e._v(" Descargar CV ")],1),i("v-card-text",{staticClass:"mt-2"},[i("v-sheet",[i("v-row",[i("v-col",{attrs:{sm:"6"}},[i("v-card",{staticClass:"overflow-hidden",attrs:{elevation:"4"}},[i("a",{attrs:{href:e.publicPath+"assets/files/cv_light.pdf",download:"CV_César_Rodríguez.pdf",target:"_blank"}},[i("v-img",{attrs:{src:a(2977)}})],1)])],1),i("v-col",{attrs:{sm:"6"}},[i("v-card",{staticClass:"overflow-hidden",attrs:{elevation:"4"}},[i("a",{attrs:{href:e.publicPath+"/assets/files/cv_dark.pdf",download:"CV_César_Rodríguez.pdf",target:"_blank"}},[i("v-img",{attrs:{src:a(8693)}})],1)])],1)],1)],1)],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cerrar ")])],1)],1)],1)],1),i("v-navigation-drawer",{attrs:{fixed:"",temporary:"",width:"100%"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[i("v-toolbar",{attrs:{flat:""}},[i("v-spacer"),i("v-btn",{attrs:{icon:"","aria-label":"cerrar menu"},on:{click:function(t){e.drawer=!1}}},[i("v-icon",[e._v("mdi-close")])],1)],1),e.drawer?i("v-container",{staticClass:"px-15"},[i("v-row",{attrs:{justify:"center",align:"center"}},[i("v-col",[i("div",{staticClass:"nav-profile-image text-center mb-8",attrs:{"data-aos":"fade-right"}},[i("v-avatar",{attrs:{color:"grey darken-4",size:"150"}},[i("div",{staticClass:"banner-image"}),i("v-img",{attrs:{position:"top right",src:a(9),alt:"profile-image"}})],1)],1),i("NavButton",{attrs:{to:"/",nav:"","data-aos":"fade-right"}},[e._v("Sobre Mi")]),i("NavButton",{attrs:{to:"/projects",nav:"","data-aos":"fade-right","data-aos-delay":"200"}},[e._v("Proyectos")])],1)],1),i("v-spacer"),i("v-row",{attrs:{justify:"center",align:"center"}},[i("v-col",{attrs:{align:"center"}},[i("v-divider",{staticClass:"mb-4",attrs:{"data-aos":"fade-right","data-aos-delay":"0"}}),i("SocialButtons")],1)],1)],1):e._e()],1),i("v-main",[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view")],1)],1)],1)},n=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-btn",{class:["nav-button",e.nav?"mb-5":""],attrs:{to:e.to,depressed:"",ripple:!1,rounded:"","active-class":"primary no-active",block:e.nav,large:e.nav}},[e._t("default")],2)},r=[],l={name:"NavButton",props:{to:String,nav:Boolean}},c=l,d=a(1001),u=a(3453),p=a.n(u),m=a(680),v=(0,d.Z)(c,o,r,!1,null,null,null),f=v.exports;p()(v,{VBtn:m.Z});var g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"d-flex justify-center"},[a("div",{attrs:{"data-aos":"fade-right","data-aos-delay":"200"}},[a("v-btn",{attrs:{icon:"",href:"https://www.linkedin.com/in/crodriguezg25",target:"_blank","aria-label":"LinkedIn"}},[a("v-icon",[e._v("mdi-linkedin")])],1)],1),a("div",{attrs:{"data-aos":"fade-right","data-aos-delay":"100"}},[a("v-btn",{attrs:{icon:"",href:"https://github.com/CARodriguezG",target:"_blank","aria-label":"Github"}},[a("v-icon",[e._v("mdi-github")])],1)],1),a("div",{attrs:{"data-aos":"fade-right","data-aos-delay":"10"}},[a("v-btn",{attrs:{icon:"",href:"https://es.stackoverflow.com/users/66587/c-rodriguez",target:"_blank","aria-label":"StackOverflow"}},[a("v-icon",[e._v("mdi-stack-overflow")])],1)],1)])])},h=[],b={},C=b,y=a(6428),S=(0,d.Z)(C,g,h,!1,null,null,null),_=S.exports;p()(S,{VBtn:m.Z,VIcon:y.Z});var k={components:{NavButton:f,SocialButtons:_},data:()=>({publicPath:"/portafolio/",drawer:!1,dialog:!1}),mounted(){}},w=k,x=a(7524),V=a(782),I=a(5206),Z=a(6370),B=a(2628),L=a(7118),P=a(2102),A=a(9846),j=a(914),E=a(1418),T=a(7047),N=a(7877),D=a(5132),$=a(2877),M=a(3385),O=a(9762),J=a(6656),R=(0,d.Z)(w,s,n,!1,null,null,null),F=R.exports;p()(R,{VApp:x.Z,VAppBar:V.Z,VAppBarNavIcon:I.Z,VAvatar:Z.Z,VBtn:m.Z,VCard:B.Z,VCardActions:L.h7,VCardText:L.ZB,VCardTitle:L.EB,VCol:P.Z,VContainer:A.Z,VDialog:j.Z,VDivider:E.Z,VIcon:y.Z,VImg:T.Z,VMain:N.Z,VNavigationDrawer:D.Z,VRow:$.Z,VSheet:M.Z,VSpacer:O.Z,VToolbar:J.Z});var z=a(8345),Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"px-0 pt-0 pb-15",attrs:{fluid:""}},[a("BannerSection"),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",[a("v-container",{staticClass:"py-7"},[a("CardSection",{attrs:{id:"aboutme",title:"Sobre Mí",icon:"mdi-account"}},[a("div",{staticClass:"px-8 subtitle-1"},[a("p",[e._v("Me apasiona crear software y herramientas que agilicen, automaticen y faciliten los procesos que a veces nos toman horas de trabajo realizar.")]),a("p",[e._v("Me he dedicado a mejorar mis habilidades con el uso de las nuevas tecnologías usando frameworks como "),a("SkillLink",{attrs:{to:"https://vuejs.org/"}},[e._v("VueJS")]),e._v(" (principalmente), "),a("SkillLink",{attrs:{to:"https://jquery.com/"}},[e._v("jQuery")]),e._v(", "),a("SkillLink",{attrs:{to:"https://getbootstrap.com/"}},[e._v("Bootstrap 4")]),e._v(", bases de datos NoSQL con "),a("SkillLink",{attrs:{to:"https://www.mongodb.com/"}},[e._v("MongoDB")]),e._v(" y creando aplicaciones híbridas utilizando "),a("SkillLink",{attrs:{to:"https://nodejs.org/"}},[e._v("NodeJS")]),e._v(", "),a("SkillLink",{attrs:{to:"https://expressjs.com/"}},[e._v("ExpressJS")]),e._v(" y "),a("SkillLink",{attrs:{to:"https://www.electronjs.org/"}},[e._v("ElectronJS")]),e._v(". ")],1)])]),a("SkillSection",{attrs:{id:"skills"}}),a("ExperienceSection",{attrs:{id:"experience"}}),a("CoursesSection",{attrs:{id:"courses"}}),a("AwardsSection",{attrs:{id:"awards"}})],1)],1)],1)],1)},G=[],H=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-row",{staticClass:"banner-row",attrs:{"no-gutters":""}},[i("v-col",{staticStyle:{position:"relative"}},[i("div",{staticClass:"banner-image"}),i("v-container",{staticClass:"fill-height px-0 py-15"},[i("v-row",{staticStyle:{"z-index":"1"},attrs:{"no-gutters":""}},[i("v-col",[i("v-container",{staticClass:"fill-height pa-0",attrs:{fluid:""}},[i("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[e.$vuetify.breakpoint.mdAndUp?[i("v-col",{attrs:{cols:"12",md:"5"}},[i("div",{staticClass:"profile-image"},[i("img",{staticStyle:{opacity:"0"},attrs:{width:"100%",height:"auto",src:a(2865),alt:"profile-image"},on:{load:e.animateProfileImage}})])]),i("v-col",{staticClass:"pl-md-6",attrs:{cols:"12",md:"7"}},[i("div",{ref:"greeting",staticClass:"d-inline-block overflow-hidden text-no-wrap text-left pb-5",staticStyle:{opacity:"0"}},[i("h1",{staticClass:"text-hello"},[e._v("Hola,")]),i("h1",{staticClass:"text-name"},[e._v("Soy César Rodríguez.")]),i("div",{staticClass:"mt-5"},[i("v-btn",{attrs:{color:"primary",rounded:""},on:{click:e.readAboutMe}},[e._v("Leer Sobre Mi")])],1)])])]:[i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"text-center"},[i("h1",{ref:"hello",staticClass:"text-hello"},[e._v("¡Hola!")]),i("h1",{ref:"name",staticClass:"text-name"},[e._v("Soy César Rodríguez.")]),i("div",{ref:"button",staticClass:"mt-5"},[i("v-btn",{attrs:{color:"primary",rounded:""},on:{click:e.readAboutMe}},[e._v("Leer Sobre Mi")])],1)])]),i("v-col",{ref:"chevron",staticClass:"mt-15 text-center",attrs:{cols:"12"}},[i("v-btn",{attrs:{icon:"","aria-label":"leer mas"},on:{click:e.readAboutMe}},[i("v-icon",{attrs:{large:""}},[e._v("mdi-chevron-down")])],1)],1)]],2)],1)],1)],1)],1)],1)],1)},q=[],U={name:"BannerSection",data:()=>({profileImageLoaded:!1}),mounted(){this.$vuetify.breakpoint.mdAndUp||this.animateMobileHeader()},methods:{readAboutMe(){this.$vuetify.goTo("#aboutme",{duration:1e3,easing:"easeOutCubic"})},animateProfileImage(e){this.$anime.timeline().add({targets:e.target,opacity:[0,1],easing:"easeOutQuad",duration:1e3}).add({targets:e.target,translateX:["50%","0%"],easing:"easeOutQuad",duration:1e3}).add({targets:this.$refs.greeting,width:["0%","100%"],opacity:[0,1],easing:"easeOutQuad",duration:1e3},"-=800")},animateMobileHeader(){this.$anime.timeline().add({targets:this.$refs.hello,opacity:[0,1],easing:"easeOutQuad",duration:1e3,delay:500}).add({targets:this.$refs.hello,translateY:["50%","0%"],easing:"easeOutQuad",duration:900},"-=10").add({targets:this.$refs.name,opacity:[0,1],translateY:["-40%","0%"],easing:"easeOutQuad"},"-=900").add({targets:this.$refs.button,opacity:[0,1],translateY:["-100%","0%"],easing:"easeOutQuad"},"-=850").add({targets:this.$refs.chevron,opacity:[0,1],translateY:["-100%","0%"],easing:"easeOutQuad"},"-=800")}},watch:{"$vuetify.breakpoint.mdAndUp"(e){e||this.$nextTick((()=>{this.animateMobileHeader()}))}}},W=U,Y=(0,d.Z)(W,H,q,!1,null,null,null),K=Y.exports;p()(Y,{VBtn:m.Z,VCol:P.Z,VContainer:A.Z,VIcon:y.Z,VRow:$.Z});var X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{"data-aos":"fade-down"}},[a("v-col",[a("v-card",{staticClass:"pa-0",attrs:{elevation:"4"}},[a("v-card-title",{staticClass:"pt-8 px-8 pb-2 justify-center justify-sm-start"},[e.icon?a("v-icon",{attrs:{large:"",left:""}},[e._v(e._s(e.icon))]):e._e(),a("h3",{staticClass:"mb-0"},[e._v(e._s(e.title))])],1),a("v-card-text",{staticClass:"px-0 pb-8"},[e._t("default")],2)],1)],1)],1)},ee=[],te={props:{title:String,icon:String}},ae=te,ie=(0,d.Z)(ae,X,ee,!1,null,null,null),se=ie.exports;p()(ie,{VCard:B.Z,VCardText:L.ZB,VCardTitle:L.EB,VCol:P.Z,VIcon:y.Z,VRow:$.Z});var ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CardSection",{attrs:{title:"Experiencia",icon:"mdi-account-star"}},[a("h3",{staticClass:"px-8 mb-0 text-center text-sm-left"},[e._v("Selecciona una experiencia para conocer más")]),a("v-slide-group",{staticClass:"py-4",attrs:{"show-arrows":"","center-active":""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.data,(function(t,i){return a("v-slide-item",{key:i,scopedSlots:e._u([{key:"default",fn:function(i){var s=i.active,n=i.toggle;return[a("v-card",{staticClass:"mx-2",attrs:{flat:"",color:s?e.activeItemClass:e.inactiveItemClass,height:"200",width:"200"},on:{click:n}},[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("div",{staticClass:"text-center px-5"},[a("v-icon",{staticClass:"mb-2",attrs:{large:"",color:s?e.activeIconClass:e.inactiveIconClass}},[e._v("mdi-office-building-marker")]),a("h3",{class:s?e.activeTextClass:e.inactiveTextClass},[e._v(e._s(t.business.name))])],1)])],1)],1)]}}],null,!0)})})),1),a("v-expand-transition",[null!=e.itemSelected?a("v-sheet",{staticClass:"px-8",attrs:{tile:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",[a("v-list-item",{staticClass:"pa-0",attrs:{"three-line":""}},[a("v-list-item-content",{staticClass:"pt-0"},[a("v-list-item-title",{staticClass:"text-wrap"},[a("h2",[e._v(e._s(e.itemSelected.role))])]),a("v-list-item-subtitle",[a("h3",[e._v(e._s(e.itemSelected.business.name)+" - "+e._s(e.itemSelected.type))])]),a("v-list-item-subtitle",[e._v(" "+e._s(e.itemSelected.date.start)+" - "+e._s(e.itemSelected.date.end)+" ")]),a("v-list-item-subtitle",[e._v(" "+e._s(e.itemSelected.business.location)+" ")])],1)],1),e.itemSelected.description.length>0?a("v-list-item",{staticClass:"pa-0"},[a("ul",e._l(e.itemSelected.description,(function(t,i){return a("li",{key:i},[e._v(" "+e._s(t)+" ")])})),0)]):e._e(),e.itemSelected.project?a("v-list-item",{staticClass:"px-0 pt-2"},[a("v-btn",{attrs:{color:"primary",rounded:"",depressed:"",block:e.$vuetify.breakpoint.xsOnly,outlined:e.$vuetify.theme.dark,to:"/projects/"+e.itemSelected.project}},[e._v("Ver Proyecto")])],1):e._e()],1)],1)],1):e._e()],1)],1)},oe=[],re=[{role:"Desarrollador de Software",type:"Profesional Independiente",business:{name:"Tienda de Ropa Balloons",location:"Guápiles, Limón, Costa Rica"},date:{start:"2022",end:"Menos de 1 año"},description:["Creación de sistema de facturación y gestión de inventario.","Programado en: Javascript.","IDE: Visual Studio Code.","Tecnologías utilizadas: Nuxt, Vuetify, Sass (framework CSS), NodeJS, ElectronJS (framework para creación de aplicación híbrida), Vuex, Vuex-Persist (base de datos interna)."],project:"tienda-balloons"},{role:"Desarrollador de Software",type:"Profesional Independiente",business:{name:"Minisuper y Panadería Rosita",location:"Guápiles, Limón, Costa Rica"},date:{start:"2022",end:"Menos de 1 año"},description:["Creación de sistema de facturación y gestión de inventario.","Programado en: Javascript.","IDE: Visual Studio Code.","Tecnologías utilizadas: VueJS, Bootstrap 4, Sass (framework CSS), NodeJS, ExpressJS (como API de comunicación entre la base de datos y la aplicación), ElectronJS (framework para creación de aplicación híbrida), MongoDB (base de datos NoSQL)."],project:"quickstore"},{role:"Diseñador Gráfico",type:"Jornada completa",business:{name:"Sublime Arte y Tecnología S.A.",location:"Guápiles, Limón, Costa Rica"},date:{start:"jul. 2019",end:"oct. 2021"},description:["Diseño de tarjetas, invitaciones, volantes, gafetes, entre otros.","Diseño, uso de mockups e impresión de artes utilizados en la sublimación de camisetas, tazas, llaveros, entre otros."]},{role:"Desarrollador Web",type:"Contrato de Prácticas",business:{name:"ELIM5",location:"Remoto"},date:{start:"abr. 2019",end:"jun. 2019"},description:[]},{role:"Desarrollador de Software",type:"Profesional Independiente",business:{name:"Electroservicios Bonilla",location:"Guápiles, Limón, Costa Rica"},date:{start:"2018",end:"Menos de 1 año"},description:["Creación de sistema básico de ingreso de boletas de reparación y gestión de inventario.","Programado en: Javascript.","IDE: Visual Studio Code.","Tecnologías utilizadas: Bootstrap 4, jQuery, NeDB (como base de datos incrustada)."],project:"electro-servicios-bonilla"},{role:"Desarrollador de Software",type:"Profesional Independiente",business:{name:"Iglesia de Dios Evangelio Completo Aposento Alto",location:"Guápiles, Limón, Costa Rica"},date:{start:"2017",end:"Menos de 1 año"},description:["Creación de sistema básico de facturación y gestión de inventario.","Programado en: Java.","IDE: NetBeans.","Tecnologías utilizadas: Java Swing (biblioteca gráfica para creación de interfaces de usuario en Java)"],project:"aposento-alto"},{role:"Desarrollador de Software",type:"Profesional Independiente",business:{name:"Casa de Empeños La Guapileña",location:"Guápiles, Limón, Costa Rica"},date:{start:"2017",end:"Menos de 1 año"},description:["Creación de sistema básico de gestión de préstamos y empeños.","Programado en: Java.","IDE: NetBeans.","Tecnologías utilizadas: Java Swing (biblioteca gráfica para creación de interfaces de usuario en Java)."],project:"la-guapilena"}],le={components:{CardSection:se},data:()=>({selected:null,data:re}),methods:{},computed:{itemSelected(){return null!=this.selected?this.data[this.selected]:null},activeItemClass(){return this.$vuetify.theme.dark,"primary"},inactiveItemClass(){return this.$vuetify.theme.dark?"grey darken-1":"grey lighten-3"},activeIconClass(){return this.$vuetify.theme.dark,"white"},inactiveIconClass(){return this.$vuetify.theme.dark?"white":"grey darken-1"},activeTextClass(){return this.$vuetify.theme.dark,"white--text"},inactiveTextClass(){return this.$vuetify.theme.dark?"white--text":"grey--text text--darken-1"}}},ce=le,de=a(5827),ue=a(7620),pe=a(5192),me=a(7955),ve=a(4820),fe=(0,d.Z)(ce,ne,oe,!1,null,"2f55b754",null),ge=fe.exports;p()(fe,{VBtn:m.Z,VCard:B.Z,VCol:P.Z,VContainer:A.Z,VExpandTransition:de.Fx,VIcon:y.Z,VListItem:ue.Z,VListItemContent:pe.km,VListItemSubtitle:pe.oZ,VListItemTitle:pe.V9,VRow:$.Z,VSheet:M.Z,VSlideGroup:me.ZP,VSlideItem:ve.Z});var he=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CardSection",{attrs:{title:"Habilidades",icon:"mdi-account-cog"}},[a("div",{staticClass:"px-8"},[a("v-chip-group",{attrs:{column:""}},e._l(e.data,(function(t,i){return a("v-chip",{key:i},[e._v(" "+e._s(t.name)+" "),t.hasBadge?a("v-tooltip",{attrs:{bottom:"",color:"grey darken-4"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,s=t.attrs;return[a("v-icon",e._g(e._b({staticClass:"mr-0",attrs:{right:""}},"v-icon",s,!1),i),[e._v("mdi-clipboard-check-outline")])]}}],null,!0)},[a("span",[a("v-icon",{attrs:{color:"grey lighten-2"}},[e._v("mdi-clipboard-check-outline")]),e._v(" Evaluación de aptitudes de LinkedIn ")],1)]):e._e()],1)})),1)],1)])},be=[],Ce=[{name:"HTML5",hasBadge:!0},{name:"CSS3",hasBadge:!0},{name:"Javascript",hasBadge:!0},{name:"PHP",hasBadge:!1},{name:"Java",hasBadge:!1},{name:"NodeJS",hasBadge:!1},{name:"ExpressJS",hasBadge:!1},{name:"ElectronJS",hasBadge:!1},{name:"MongoDB",hasBadge:!1},{name:"MySQL",hasBadge:!1},{name:"Bootstrap 4",hasBadge:!1},{name:"Vue",hasBadge:!1},{name:"Vuex",hasBadge:!1},{name:"Nuxt",hasBadge:!1},{name:"Sass",hasBadge:!1},{name:"Bootstrap Vue",hasBadge:!1},{name:"Vuetify",hasBadge:!1},{name:"jQuery",hasBadge:!1},{name:"Android Studio",hasBadge:!1},{name:"Desarrollo Front End",hasBadge:!0},{name:"Diseño Web",hasBadge:!1},{name:"Photoshop",hasBadge:!1},{name:"Illustrator",hasBadge:!1}],ye={components:{CardSection:se},data:()=>({data:Ce})},Se=ye,_e=a(5424),ke=a(6105),we=a(6053),xe=(0,d.Z)(Se,he,be,!1,null,null,null),Ve=xe.exports;p()(xe,{VChip:_e.Z,VChipGroup:ke.Z,VIcon:y.Z,VTooltip:we.Z});var Ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CardSection",{attrs:{title:"Cursos ("+e.data.length+")",icon:"mdi-certificate"}},[a("h3",{staticClass:"px-8 mb-3 text-center text-sm-left"},[e._v("Cursos y conocimientos")]),a("div",{staticClass:"px-8"},[a("v-list",{staticClass:"pa-0"},[a("v-virtual-scroll",{attrs:{height:"400","item-height":"70",items:e.data},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.item,s=t.index;return[a("v-list-item",{key:s,staticClass:"pl-0"},[a("v-list-item-icon",{staticClass:"mr-2",attrs:{"data--aos":"fade-left"}},[a("v-icon",{attrs:{small:""}},[e._v("mdi-checkbox-blank-circle")])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"subtitle-1 font-weight-bold",attrs:{"data--aos":"fade-left"},domProps:{textContent:e._s(i.name)}}),a("v-list-item-subtitle",{staticClass:"subtitle-2",attrs:{"data--aos":"fade-left"},domProps:{textContent:e._s(i.givenby)}})],1),i.path?a("v-list-item-action",[e.$vuetify.breakpoint.mdAndUp?a("v-btn",{attrs:{rounded:"",outlined:e.$vuetify.theme.dark,depressed:"",color:"primary","data--aos":"fade",href:i.path,target:"_blank"}},[e._v(" Certificado ")]):a("v-btn",{attrs:{icon:"",large:"",outlined:"",color:"primary",href:""+e.publicPath+i.path,target:"_blank"}},[a("v-icon",[e._v("mdi-certificate")])],1)],1):e._e()],1)]}}])})],1)],1)])},Ze=[],Be=[{name:"CCNA 1 Enrutamiento y Conmutación: Introducción a las Redes",givenby:"Cisco - Fundación Omar Dengo",path:"assets/certificates/cisco/introduccion-redes.pdf"},{name:"IT Essentials: PC Hardware and Software",givenby:"Cisco - Fundación Omar Dengo",path:"assets/certificates/cisco/itessentials.pdf"},{name:"Curso Básico LibreOffice Calc",givenby:"Universidad Técnica Nacional",path:"assets/certificates/utn/libreoffice-calc.pdf"},{name:"Curso Básico LibreOffice Impress",givenby:"Universidad Técnica Nacional",path:"assets/certificates/utn/libreoffice-impress.pdf"},{name:"Curso Básico LibreOffice Writer",givenby:"Universidad Técnica Nacional",path:"assets/certificates/utn/libreoffice-writer.pdf"},{name:"Curso de Introducción al Desarrollo Web: HTML y CSS (1/2)",givenby:"Google Actívate",path:"assets/certificates/google/web-1.pdf"},{name:"Curso de Introducción al Desarrollo Web: HTML y CSS (2/2)",givenby:"Google Actívate",path:"assets/certificates/google/web-2.pdf"},{name:"Introducción a API REST",givenby:"EDTeam",path:"assets/certificates/edteam/api-rest.png"},{name:"Asistente Web - Capacítate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/asistente-web.pdf"},{name:"Curador de Datos - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/curador-datos.pdf"},{name:"Desarrollador Frontend - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/front-end.pdf"},{name:"Desarrollador de Contenido Digital - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/contenido-digital.pdf"},{name:"Diplomado Técnico en Integridad Web - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/integridad-web.pdf"},{name:"Finder - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/finder.pdf"},{name:"Gestor de Imagen Web - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/imagen-web.pdf"},{name:"Introducción a la Programación - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/programacion.pdf"},{name:"Ortografía y Redacción - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/redacccion-ortografia.pdf"},{name:"Protocolos de Atención y Servicio - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/atencion-servicio.pdf"},{name:"Tester - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/tester.pdf"},{name:"Trabajo en Equipo - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/trabajo-equipo.pdf"},{name:"Técnico en Informática (Ofimática) - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/ofimatica.pdf"},{name:"Curso de CSS",givenby:"SoloLearn",path:"assets/certificates/sololearn/css.pdf"},{name:"Curso de Diseño Web Responsivo",givenby:"SoloLearn",path:"assets/certificates/sololearn/responsive.pdf"},{name:"Curso de HTML",givenby:"SoloLearn",path:"assets/certificates/sololearn/html.pdf"},{name:"Curso de Java (práctico y teórico)",givenby:"SoloLearn",path:"assets/certificates/sololearn/java.pdf"},{name:"Curso de JavaScript (práctico y teórico)",givenby:"SoloLearn",path:"assets/certificates/sololearn/javascript.pdf"},{name:"Curso de PHP",givenby:"SoloLearn",path:"assets/certificates/sololearn/php.pdf"},{name:"Curso de SQL (práctico y teórico)",givenby:"SoloLearn",path:"assets/certificates/sololearn/sql.pdf"},{name:"Curso de jQuery",givenby:"SoloLearn",path:"assets/certificates/sololearn/jquery.pdf"},{name:"Introducción a MongoDB - Numpi Cursos",givenby:"Udemy",path:"assets/certificates/udemy/mongodb.pdf"}],Le={components:{CardSection:se},data:()=>({publicPath:"/portafolio/",data:Be}),mounted(){}},Pe=Le,Ae=a(6816),je=a(3099),Ee=a(459),Te=a(5683),Ne=(0,d.Z)(Pe,Ie,Ze,!1,null,null,null),De=Ne.exports;p()(Ne,{VBtn:m.Z,VIcon:y.Z,VList:Ae.Z,VListItem:ue.Z,VListItemAction:je.Z,VListItemContent:pe.km,VListItemIcon:Ee.Z,VListItemSubtitle:pe.oZ,VListItemTitle:pe.V9,VVirtualScroll:Te.Z});var $e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CardSection",{attrs:{title:"Reconocimientos ("+e.data.length+")",icon:"mdi-trophy"}},[a("h3",{staticClass:"px-8 mb-3 text-center text-sm-left"},[e._v("Reconocimientos y premios")]),a("div",{staticClass:"px-8"},[a("v-list",{staticClass:"pa-0"},[a("v-virtual-scroll",{attrs:{height:"400","item-height":"70",items:e.data},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.item,s=t.index;return[a("v-list-item",{key:s,staticClass:"pl-0"},[a("v-list-item-icon",{staticClass:"mr-2",attrs:{"data--aos":"fade-left"}},[a("v-icon",{attrs:{small:""}},[e._v("mdi-checkbox-blank-circle")])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"subtitle-1 font-weight-bold",attrs:{"data--aos":"fade-left"},domProps:{textContent:e._s(i.name)}}),a("v-list-item-subtitle",{staticClass:"subtitle-2",attrs:{"data--aos":"fade-left"},domProps:{textContent:e._s(i.date+" - "+i.givenby)}})],1),i.path?a("v-list-item-action",[e.$vuetify.breakpoint.mdAndUp?a("v-btn",{attrs:{rounded:"",outlined:e.$vuetify.theme.dark,depressed:"",color:"primary","data--aos":"fade",href:i.path,target:"_blank"}},[e._v(" Certificado ")]):a("v-btn",{attrs:{icon:"",large:"",outlined:"",color:"primary",href:""+e.publicPath+i.path,target:"_blank"}},[a("v-icon",[e._v("mdi-trophy")])],1)],1):e._e()],1)]}}])})],1)],1)])},Me=[],Oe=[{name:"Liderazgo Transformacional y Habilidades Blandas",givenby:"Fundación Mejoremos Costa Rica",date:"sept. 2021",duration:"30 horas",path:"assets/awards/habilidades-blandas.pdf"},{name:"Primer Promedio Especialidad Informática en Soporte",givenby:"Colegio Técnico Profesional de Pococí",date:"dic. 2015",duration:"",path:"assets/awards/promedio-informatica.pdf"},{name:"Primer Promedio Décimo Año (Premio a la Perseverancia)",givenby:"Colegio Técnico Profesional de Pococí",date:"sept. 2013",duration:"",path:"assets/awards/promedio-decimo.pdf"},{name:"Carrera Ministerial para Equipos de Alabanza Módulos I y II",givenby:"Instituto Visión",date:"may. 2013",duration:"",path:"assets/awards/vision.pdf"},{name:"Primero Promedio Noveno Año",givenby:"Colegio Técnico Profesional de Pococí",date:"dic. 2012",duration:"",path:"assets/awards/promedio-noveno.pdf"},{name:"Emprendimientos Cooperativos Juveniles",givenby:"CENECOOP R.L.",date:"may. 2011",duration:"24 horas",path:"assets/awards/emprendimientos-cooperativos.pdf"},{name:"Taller de Teatro",givenby:"Prof. Karen González Coordinadora Taller de Teatro",date:"ene. 2010",duration:"8 horas",path:"assets/awards/taller-teatro.pdf"}],Je={components:{CardSection:se},data:()=>({publicPath:"/portafolio/",data:Oe}),methods:{}},Re=Je,Fe=(0,d.Z)(Re,$e,Me,!1,null,null,null),ze=Fe.exports;p()(Fe,{VBtn:m.Z,VIcon:y.Z,VList:Ae.Z,VListItem:ue.Z,VListItemAction:je.Z,VListItemContent:pe.km,VListItemIcon:Ee.Z,VListItemSubtitle:pe.oZ,VListItemTitle:pe.V9,VVirtualScroll:Te.Z});var Qe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"primary--text",attrs:{href:e.to,target:"_blank"}},[a("b",[e._t("default")],2)])},Ge=[],He={props:["to"]},qe=He,Ue=(0,d.Z)(qe,Qe,Ge,!1,null,"ffd7d2da",null),We=Ue.exports,Ye={name:"HomeView",components:{BannerSection:K,CardSection:se,ExperienceSection:ge,SkillSection:Ve,CoursesSection:De,AwardsSection:ze,SkillLink:We},data:()=>({}),mounted(){},methods:{onSlideAnimation(e){"in"===e.going&&"top"===e.direction&&this.$anime.timeline().add({targets:e.el,autoplay:!1,opacity:[0,1],translateY:["-50%","0%"],duration:800,easing:"easeOutQuad"})}}},Ke=Ye,Xe=(0,d.Z)(Ke,Q,G,!1,null,null,null),et=Xe.exports;p()(Xe,{VCol:P.Z,VContainer:A.Z,VRow:$.Z}),i.Z.use(z.Z);const tt=[{path:"/",name:"home",component:et},{path:"/projects",name:"projects",component:()=>a.e(176).then(a.bind(a,4681))},{path:"/projects/:id",component:()=>a.e(242).then(a.bind(a,5542))}],at=new z.Z({mode:"history",base:"/portafolio/",routes:tt});var it=at,st=a(1910),nt=a(1846);i.Z.use(st.Z);var ot=new st.Z({theme:{dark:!0,themes:{dark:{primary:nt.Z.lightBlue.darken1}}}}),rt=a(8416),lt=a.n(rt);i.Z.use(lt());var ct=a(2711),dt=a.n(ct);dt().init({offset:0,delay:0,duration:800,easing:"ease-out-quad",once:!0}),i.Z.config.productionTip=!1,new i.Z({router:it,vuetify:ot,render:e=>e(F)}).$mount("#app")},8693:function(e,t,a){e.exports=a.p+"img/cv-dark.f913e35b.png"},2977:function(e,t,a){e.exports=a.p+"img/cv-light.a385e43e.png"},9:function(e,t,a){e.exports=a.p+"img/profile2.e0cc4ec4.png"},2865:function(e,t,a){e.exports=a.p+"img/profile3.b8a0c72e.png"}},t={};function a(i){var s=t[i];if(void 0!==s)return s.exports;var n=t[i]={exports:{}};return e[i].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,i,s,n){if(!i){var o=1/0;for(d=0;d<e.length;d++){i=e[d][0],s=e[d][1],n=e[d][2];for(var r=!0,l=0;l<i.length;l++)(!1&n||o>=n)&&Object.keys(a.O).every((function(e){return a.O[e](i[l])}))?i.splice(l--,1):(r=!1,n<o&&(o=n));if(r){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[i,s,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,i){return a.f[i](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+{176:"projects",242:"project"}[e]+"."+{176:"38b07c55",242:"3eba6346"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/project.dcf334cb.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="portafolio:";a.l=function(i,s,n,o){if(e[i])e[i].push(s);else{var r,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==t+n){r=u;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",t+n),r.src=i),e[i]=[s];var p=function(t,a){r.onerror=r.onload=null,clearTimeout(m);var s=e[i];if(delete e[i],r.parentNode&&r.parentNode.removeChild(r),s&&s.forEach((function(e){return e(a)})),t)return t(a)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/portafolio/"}(),function(){var e=function(e,t,a,i){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var n=function(n){if(s.onerror=s.onload=null,"load"===n.type)a();else{var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=r,s.parentNode.removeChild(s),i(l)}};return s.onerror=s.onload=n,s.href=t,document.head.appendChild(s),s},t=function(e,t){for(var a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],n=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(n===e||n===t))return s}var o=document.getElementsByTagName("style");for(i=0;i<o.length;i++){s=o[i],n=s.getAttribute("data-href");if(n===e||n===t)return s}},i=function(i){return new Promise((function(s,n){var o=a.miniCssF(i),r=a.p+o;if(t(o,r))return s();e(i,r,s,n)}))},s={826:0};a.f.miniCss=function(e,t){var a={242:1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=i(e).then((function(){s[e]=0}),(function(t){throw delete s[e],t})))}}(),function(){var e={826:0};a.f.j=function(t,i){var s=a.o(e,t)?e[t]:void 0;if(0!==s)if(s)i.push(s[2]);else{var n=new Promise((function(a,i){s=e[t]=[a,i]}));i.push(s[2]=n);var o=a.p+a.u(t),r=new Error,l=function(i){if(a.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var n=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;r.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",r.name="ChunkLoadError",r.type=n,r.request=o,s[1](r)}};a.l(o,l,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,n,o=i[0],r=i[1],l=i[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(s in r)a.o(r,s)&&(a.m[s]=r[s]);if(l)var d=l(a)}for(t&&t(i);c<o.length;c++)n=o[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},i=self["webpackChunkportafolio"]=self["webpackChunkportafolio"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(8455)}));i=a.O(i)})();
//# sourceMappingURL=index.1f069f9f.js.map