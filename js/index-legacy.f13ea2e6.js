(function(){"use strict";var e={6610:function(e,t,a){a(6992),a(8674),a(9601),a(7727);var i=a(144),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("v-app-bar",{attrs:{app:"","elevate-on-scroll":"",tile:"",height:"70px"}},[i("v-app-bar-nav-icon",{staticClass:"d-block d-md-none",attrs:{"aria-label":"menu"},on:{click:function(t){e.drawer=!0}}}),i("v-spacer"),i("div",{staticClass:"d-none d-md-flex"},[i("div",{attrs:{"data-aos":"fade-right","data-aos-delay":"100"}},[i("NavButton",{attrs:{to:"/"}},[e._v("Sobre Mi")])],1),i("div",{attrs:{"data-aos":"fade-right","data-aos-delay":"200"}},[i("NavButton",{attrs:{to:"/projects"}},[e._v("Proyectos")])],1)]),i("v-divider",{staticClass:"mx-4 d-none d-md-block",attrs:{vertical:"",inset:""}}),i("SocialButtons",{staticClass:"d-none d-sm-block"}),i("v-divider",{staticClass:"mx-4 d-none d-sm-block",attrs:{vertical:"",inset:""}}),i("v-btn",{staticClass:"mr-0",attrs:{icon:"",link:"","aria-label":"descargar cv",target:"_blank",to:"/assets/cv.pdf",download:"CV_César_Rodríguez.pdf"}},[i("v-icon",[e._v("mdi-download")])],1)],1),i("v-navigation-drawer",{attrs:{fixed:"",temporary:"",width:"100%"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[i("v-toolbar",{attrs:{flat:""}},[i("v-spacer"),i("v-btn",{attrs:{icon:"","aria-label":"cerrar menu"},on:{click:function(t){e.drawer=!1}}},[i("v-icon",[e._v("mdi-close")])],1)],1),e.drawer?i("v-container",{staticClass:"px-15"},[i("v-row",{attrs:{justify:"center",align:"center"}},[i("v-col",[i("div",{staticClass:"nav-profile-image text-center mb-8",attrs:{"data-aos":"fade-right"}},[i("v-avatar",{attrs:{color:"grey darken-4",size:"150"}},[i("div",{staticClass:"banner-image"}),i("v-img",{attrs:{position:"top right",src:a(7285),alt:"profile-image"}})],1)],1),i("NavButton",{attrs:{to:"/",nav:"","data-aos":"fade-right"}},[e._v("Sobre Mi")]),i("NavButton",{attrs:{to:"/projects",nav:"","data-aos":"fade-right","data-aos-delay":"200"}},[e._v("Proyectos")])],1)],1),i("v-spacer"),i("v-row",{attrs:{justify:"center",align:"center"}},[i("v-col",{attrs:{align:"center"}},[i("v-divider",{staticClass:"mb-4",attrs:{"data-aos":"fade-right","data-aos-delay":"0"}}),i("SocialButtons")],1)],1)],1):e._e()],1),i("v-main",[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view")],1)],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-btn",{class:["nav-button",e.nav?"mb-5":""],attrs:{to:e.to,depressed:"",ripple:!1,rounded:"","active-class":"primary no-active",block:e.nav,large:e.nav}},[e._t("default")],2)},r=[],c={name:"NavButton",props:{to:String,nav:Boolean}},l=c,d=a(1001),u=a(3453),p=a.n(u),m=a(680),f=(0,d.Z)(l,s,r,!1,null,null,null),v=f.exports;p()(f,{VBtn:m.Z});var g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"d-flex justify-center"},[a("div",{attrs:{"data-aos":"fade-right","data-aos-delay":"200"}},[a("v-btn",{attrs:{icon:"",href:"https://www.linkedin.com/in/crodriguezg25",target:"_blank","aria-label":"LinkedIn"}},[a("v-icon",[e._v("mdi-linkedin")])],1)],1),a("div",{attrs:{"data-aos":"fade-right","data-aos-delay":"100"}},[a("v-btn",{attrs:{icon:"",href:"https://github.com/CARodriguezG",target:"_blank","aria-label":"Github"}},[a("v-icon",[e._v("mdi-github")])],1)],1),a("div",{attrs:{"data-aos":"fade-right","data-aos-delay":"10"}},[a("v-btn",{attrs:{icon:"",href:"https://es.stackoverflow.com/users/66587/c-rodriguez",target:"_blank","aria-label":"StackOverflow"}},[a("v-icon",[e._v("mdi-stack-overflow")])],1)],1)])])},h=[],b={},C=b,y=a(6428),S=(0,d.Z)(C,g,h,!1,null,null,null),_=S.exports;p()(S,{VBtn:m.Z,VIcon:y.Z});var w={components:{NavButton:v,SocialButtons:_},data:function(){return{publicPath:"/portafolio/",drawer:!1,dialog:!1}},mounted:function(){}},k=w,x=a(7524),V=a(782),I=a(5206),Z=a(6370),B=a(2102),P=a(9846),A=a(1418),L=a(7047),T=a(7877),E=a(5132),j=a(2877),N=a(9762),D=a(6656),$=(0,d.Z)(k,n,o,!1,null,null,null),O=$.exports;p()($,{VApp:x.Z,VAppBar:V.Z,VAppBarNavIcon:I.Z,VAvatar:Z.Z,VBtn:m.Z,VCol:B.Z,VContainer:P.Z,VDivider:A.Z,VIcon:y.Z,VImg:L.Z,VMain:T.Z,VNavigationDrawer:E.Z,VRow:j.Z,VSpacer:N.Z,VToolbar:D.Z});a(1539),a(8783),a(3948);var M=a(8345),R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"px-0 pt-0 pb-15",attrs:{fluid:""}},[a("BannerSection"),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",[a("v-container",{staticClass:"py-7"},[a("CardSection",{attrs:{id:"aboutme",title:"Sobre Mí",icon:"mdi-account"}},[a("div",{staticClass:"px-8 subtitle-1"},[a("p",[e._v("Me apasiona crear software que optimiza y simplifica procesos. He desarrollado aplicaciones utilizando tecnologías y frameworks modernos, destacando mi experiencia con Vue y Nuxt. Además, he trabajado con bases de datos NoSQL, como MongoDB, e implementado soluciones híbridas con Electron.")]),a("p",[e._v("Actualmente, estoy expandiendo mis conocimientos en Vue 3 y Nuxt 3, lo que me permite continuar creando más proyectos.")])])]),a("SkillSection",{attrs:{id:"skills"}}),a("ExperienceSection",{attrs:{id:"experience"}}),a("CoursesSection",{attrs:{id:"courses"}}),a("AwardsSection",{attrs:{id:"awards"}})],1)],1)],1)],1)},J=[],F=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-row",{staticClass:"banner-row",attrs:{"no-gutters":""}},[i("v-col",{staticStyle:{position:"relative"}},[i("div",{staticClass:"banner-image"}),i("v-container",{staticClass:"fill-height px-0 py-15"},[i("v-row",{staticStyle:{"z-index":"1"},attrs:{"no-gutters":""}},[i("v-col",[i("v-container",{staticClass:"fill-height pa-0",attrs:{fluid:""}},[i("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[e.$vuetify.breakpoint.mdAndUp?[i("v-col",{attrs:{cols:"12",md:"5"}},[i("div",{staticClass:"profile-image"},[i("img",{staticStyle:{opacity:"0"},attrs:{width:"100%",height:"auto",src:a(7285),alt:"profile-image"},on:{load:e.animateProfileImage}})])]),i("v-col",{staticClass:"pl-md-6",attrs:{cols:"12",md:"7"}},[i("div",{ref:"greeting",staticClass:"d-inline-block overflow-hidden text-no-wrap text-left pb-5",staticStyle:{opacity:"0"}},[i("h1",{staticClass:"text-hello"},[e._v("Hola,")]),i("h1",{staticClass:"text-name"},[e._v("Soy César Rodríguez.")]),i("div",{staticClass:"mt-5"},[i("v-btn",{attrs:{color:"primary",rounded:""},on:{click:e.readAboutMe}},[e._v("Leer Sobre Mi")])],1)])])]:[i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"text-center"},[i("h1",{ref:"hello",staticClass:"text-hello"},[e._v("¡Hola!")]),i("h1",{ref:"name",staticClass:"text-name"},[e._v("Soy César Rodríguez.")]),i("div",{ref:"button",staticClass:"mt-5"},[i("v-btn",{attrs:{color:"primary",rounded:""},on:{click:e.readAboutMe}},[e._v("Leer Sobre Mi")])],1)])]),i("v-col",{ref:"chevron",staticClass:"mt-15 text-center",attrs:{cols:"12"}},[i("v-btn",{attrs:{icon:"","aria-label":"leer mas"},on:{click:e.readAboutMe}},[i("v-icon",{attrs:{large:""}},[e._v("mdi-chevron-down")])],1)],1)]],2)],1)],1)],1)],1)],1)],1)},z=[],G=(a(8309),{name:"BannerSection",data:function(){return{profileImageLoaded:!1}},mounted:function(){this.$vuetify.breakpoint.mdAndUp||this.animateMobileHeader()},methods:{readAboutMe:function(){this.$vuetify.goTo("#aboutme",{duration:1e3,easing:"easeOutCubic"})},animateProfileImage:function(e){this.$anime.timeline().add({targets:e.target,opacity:[0,1],easing:"easeOutQuad",duration:1e3}).add({targets:e.target,translateX:["50%","0%"],easing:"easeOutQuad",duration:1e3}).add({targets:this.$refs.greeting,width:["0%","100%"],opacity:[0,1],easing:"easeOutQuad",duration:1e3},"-=800")},animateMobileHeader:function(){this.$anime.timeline().add({targets:this.$refs.hello,opacity:[0,1],easing:"easeOutQuad",duration:1e3,delay:500}).add({targets:this.$refs.hello,translateY:["50%","0%"],easing:"easeOutQuad",duration:900},"-=10").add({targets:this.$refs.name,opacity:[0,1],translateY:["-40%","0%"],easing:"easeOutQuad"},"-=900").add({targets:this.$refs.button,opacity:[0,1],translateY:["-100%","0%"],easing:"easeOutQuad"},"-=850").add({targets:this.$refs.chevron,opacity:[0,1],translateY:["-100%","0%"],easing:"easeOutQuad"},"-=800")}},watch:{"$vuetify.breakpoint.mdAndUp":function(e){var t=this;e||this.$nextTick((function(){t.animateMobileHeader()}))}}}),H=G,Q=(0,d.Z)(H,F,z,!1,null,null,null),W=Q.exports;p()(Q,{VBtn:m.Z,VCol:B.Z,VContainer:P.Z,VIcon:y.Z,VRow:j.Z});var q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{"data-aos":"fade-down"}},[a("v-col",[a("v-card",{staticClass:"pa-0",attrs:{elevation:"4"}},[a("v-card-title",{staticClass:"pt-8 px-8 pb-2 justify-center justify-sm-start"},[e.icon?a("v-icon",{attrs:{large:"",left:""}},[e._v(e._s(e.icon))]):e._e(),a("h3",{staticClass:"mb-0"},[e._v(e._s(e.title))])],1),a("v-card-text",{staticClass:"px-0 pb-8"},[e._t("default")],2)],1)],1)],1)},U=[],Y={props:{title:String,icon:String}},K=Y,X=a(2628),ee=a(7118),te=(0,d.Z)(K,q,U,!1,null,null,null),ae=te.exports;p()(te,{VCard:X.Z,VCardText:ee.ZB,VCardTitle:ee.EB,VCol:B.Z,VIcon:y.Z,VRow:j.Z});var ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CardSection",{attrs:{title:"Experiencia",icon:"mdi-account-star"}},[a("h3",{staticClass:"px-8 mb-0 text-center text-sm-left"},[e._v("Selecciona una experiencia para conocer más")]),a("v-slide-group",{staticClass:"py-4",attrs:{"show-arrows":"","center-active":""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.data,(function(t,i){return a("v-slide-item",{key:i,scopedSlots:e._u([{key:"default",fn:function(i){var n=i.active,o=i.toggle;return[a("v-card",{staticClass:"mx-2",attrs:{flat:"",color:n?e.activeItemClass:e.inactiveItemClass,height:"200",width:"200"},on:{click:o}},[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("div",{staticClass:"text-center px-5"},[a("v-icon",{staticClass:"mb-2",attrs:{large:"",color:n?e.activeIconClass:e.inactiveIconClass}},[e._v("mdi-office-building-marker")]),a("h3",{class:n?e.activeTextClass:e.inactiveTextClass},[e._v(e._s(t.business.name))])],1)])],1)],1)]}}],null,!0)})})),1),a("v-expand-transition",[null!=e.itemSelected?a("v-sheet",{staticClass:"px-8",attrs:{tile:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",[a("v-list-item",{staticClass:"pa-0",attrs:{"three-line":""}},[a("v-list-item-content",{staticClass:"pt-0"},[a("v-list-item-title",{staticClass:"text-wrap"},[a("h2",[e._v(e._s(e.itemSelected.role))])]),a("v-list-item-subtitle",[a("h3",[e._v(e._s(e.itemSelected.business.name)+" - "+e._s(e.itemSelected.type))])]),a("v-list-item-subtitle",[e._v(" "+e._s(e.itemSelected.date.start)+" - "+e._s(e.itemSelected.date.end)+" ")]),a("v-list-item-subtitle",[e._v(" "+e._s(e.itemSelected.business.location)+" ")])],1)],1),e.itemSelected.description.length>0?a("v-list-item",{staticClass:"pa-0"},[a("ul",e._l(e.itemSelected.description,(function(t,i){return a("li",{key:i},[e._v(" "+e._s(t)+" ")])})),0)]):e._e(),e.itemSelected.project?a("v-list-item",{staticClass:"px-0 pt-2"},[a("v-btn",{attrs:{color:"primary",rounded:"",depressed:"",block:e.$vuetify.breakpoint.xsOnly,outlined:e.$vuetify.theme.dark,to:"/projects/"+e.itemSelected.project}},[e._v("Ver Proyecto")])],1):e._e()],1)],1)],1):e._e()],1)],1)},ne=[],oe=[{role:"Desarrollador de Software",type:"Profesional Independiente",business:{name:"Atech Soluciones Tecnológicas",location:"Guápiles, Limón, Costa Rica"},date:{start:"2023",end:"Actualidad"},description:["Creación de sistema web y PWA para gestión de boletas de reparación.","Programado en: Javascript.","IDE: Visual Studio Code.","Tecnologías utilizadas: Nuxt, Vuetify, PWA, Sass (framework CSS), NodeJS, Pinia, Supabase (PostgreSQL)."],project:"atech-taller"},{role:"Desarrollador de Software",type:"Profesional Independiente",business:{name:"Tienda de Ropa Balloons",location:"Guápiles, Limón, Costa Rica"},date:{start:"2022",end:"Menos de 1 año"},description:["Creación de sistema de facturación y gestión de inventario.","Programado en: Javascript.","IDE: Visual Studio Code.","Tecnologías utilizadas: Nuxt, Vuetify, Sass (framework CSS), NodeJS, ElectronJS (framework para creación de aplicación híbrida), Vuex, Vuex-Persist (base de datos interna)."],project:"tienda-balloons"},{role:"Desarrollador de Software",type:"Profesional Independiente",business:{name:"Minisuper y Panadería Rosita",location:"Guápiles, Limón, Costa Rica"},date:{start:"2021",end:"2022"},description:["Creación de sistema de facturación y gestión de inventario.","Programado en: Javascript.","IDE: Visual Studio Code.","Tecnologías utilizadas: VueJS, Bootstrap 4, Sass (framework CSS), NodeJS, ExpressJS (como API de comunicación entre la base de datos y la aplicación), ElectronJS (framework para creación de aplicación híbrida), MongoDB (base de datos NoSQL)."],project:"quickstore"},{role:"Diseñador Gráfico",type:"Jornada completa",business:{name:"Sublime Arte y Tecnología S.A.",location:"Guápiles, Limón, Costa Rica"},date:{start:"jul. 2019",end:"oct. 2021"},description:["Diseño de tarjetas, invitaciones, volantes, gafetes, entre otros.","Diseño, uso de mockups e impresión de artes utilizados en la sublimación de camisetas, tazas, llaveros, entre otros."]},{role:"Desarrollador Web",type:"Contrato de Prácticas",business:{name:"ELIM5",location:"Remoto"},date:{start:"abr. 2019",end:"jun. 2019"},description:[]},{role:"Desarrollador de Software",type:"Profesional Independiente",business:{name:"Electroservicios Bonilla",location:"Guápiles, Limón, Costa Rica"},date:{start:"2018",end:"Menos de 1 año"},description:["Creación de sistema básico de ingreso de boletas de reparación y gestión de inventario.","Programado en: Javascript.","IDE: Visual Studio Code.","Tecnologías utilizadas: Bootstrap 4, jQuery, NeDB (como base de datos incrustada)."],project:"electro-servicios-bonilla"},{role:"Desarrollador de Software",type:"Profesional Independiente",business:{name:"Iglesia de Dios Evangelio Completo Aposento Alto",location:"Guápiles, Limón, Costa Rica"},date:{start:"2017",end:"Menos de 1 año"},description:["Creación de sistema básico de facturación y gestión de inventario.","Programado en: Java.","IDE: NetBeans.","Tecnologías utilizadas: Java Swing (biblioteca gráfica para creación de interfaces de usuario en Java)"],project:"aposento-alto"},{role:"Desarrollador de Software",type:"Profesional Independiente",business:{name:"Casa de Empeños La Guapileña",location:"Guápiles, Limón, Costa Rica"},date:{start:"2017",end:"Menos de 1 año"},description:["Creación de sistema básico de gestión de préstamos y empeños.","Programado en: Java.","IDE: NetBeans.","Tecnologías utilizadas: Java Swing (biblioteca gráfica para creación de interfaces de usuario en Java)."],project:"la-guapilena"}],se={components:{CardSection:ae},data:function(){return{selected:null,data:oe}},methods:{},computed:{itemSelected:function(){return null!=this.selected?this.data[this.selected]:null},activeItemClass:function(){return this.$vuetify.theme.dark,"primary"},inactiveItemClass:function(){return this.$vuetify.theme.dark?"grey darken-1":"grey lighten-3"},activeIconClass:function(){return this.$vuetify.theme.dark,"white"},inactiveIconClass:function(){return this.$vuetify.theme.dark?"white":"grey darken-1"},activeTextClass:function(){return this.$vuetify.theme.dark,"white--text"},inactiveTextClass:function(){return this.$vuetify.theme.dark?"white--text":"grey--text text--darken-1"}}},re=se,ce=a(5827),le=a(7620),de=a(5192),ue=a(3385),pe=a(7955),me=a(4820),fe=(0,d.Z)(re,ie,ne,!1,null,"2f55b754",null),ve=fe.exports;p()(fe,{VBtn:m.Z,VCard:X.Z,VCol:B.Z,VContainer:P.Z,VExpandTransition:ce.Fx,VIcon:y.Z,VListItem:le.Z,VListItemContent:de.km,VListItemSubtitle:de.oZ,VListItemTitle:de.V9,VRow:j.Z,VSheet:ue.Z,VSlideGroup:pe.ZP,VSlideItem:me.Z});var ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CardSection",{attrs:{title:"Habilidades",icon:"mdi-account-cog"}},[a("div",{staticClass:"px-8"},[a("v-chip-group",{attrs:{column:""}},e._l(e.data,(function(t,i){return a("v-chip",{key:i},[e._v(" "+e._s(t.name)+" "),t.hasBadge?a("v-tooltip",{attrs:{bottom:"",color:"grey darken-4"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,n=t.attrs;return[a("v-icon",e._g(e._b({staticClass:"mr-0",attrs:{right:""}},"v-icon",n,!1),i),[e._v("mdi-clipboard-check-outline")])]}}],null,!0)},[a("span",[a("v-icon",{attrs:{color:"grey lighten-2"}},[e._v("mdi-clipboard-check-outline")]),e._v(" Evaluación de aptitudes de LinkedIn ")],1)]):e._e()],1)})),1)],1)])},he=[],be=[{name:"HTML5",hasBadge:!0},{name:"CSS3",hasBadge:!0},{name:"Javascript",hasBadge:!0},{name:"PHP",hasBadge:!1},{name:"Java",hasBadge:!1},{name:"NodeJS",hasBadge:!1},{name:"ExpressJS",hasBadge:!1},{name:"ElectronJS",hasBadge:!1},{name:"PWA",hasBadge:!1},{name:"MongoDB",hasBadge:!1},{name:"MySQL",hasBadge:!1},{name:"Bootstrap 4",hasBadge:!1},{name:"Vue 2",hasBadge:!1},{name:"Vue 3",hasBadge:!1},{name:"Vuex",hasBadge:!1},{name:"Pinia",hasBadge:!1},{name:"Nuxt 2",hasBadge:!1},{name:"Nuxt 3",hasBadge:!1},{name:"Sass",hasBadge:!1},{name:"Bootstrap Vue",hasBadge:!1},{name:"Vuetify 2",hasBadge:!1},{name:"jQuery",hasBadge:!1},{name:"Android Studio",hasBadge:!1},{name:"Desarrollo Front End",hasBadge:!0},{name:"Diseño Web",hasBadge:!1},{name:"Photoshop",hasBadge:!1},{name:"Illustrator",hasBadge:!1}],Ce={components:{CardSection:ae},data:function(){return{data:be}}},ye=Ce,Se=a(5424),_e=a(6105),we=a(6053),ke=(0,d.Z)(ye,ge,he,!1,null,null,null),xe=ke.exports;p()(ke,{VChip:Se.Z,VChipGroup:_e.Z,VIcon:y.Z,VTooltip:we.Z});var Ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CardSection",{attrs:{title:"Cursos ("+e.data.length+")",icon:"mdi-certificate"}},[a("h3",{staticClass:"px-8 mb-3 text-center text-sm-left"},[e._v("Cursos y conocimientos")]),a("div",{staticClass:"px-8"},[a("v-list",{staticClass:"pa-0"},[a("v-virtual-scroll",{attrs:{height:"400","item-height":"70",items:e.data},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.item,n=t.index;return[a("v-list-item",{key:n,staticClass:"pl-0"},[a("v-list-item-icon",{staticClass:"mr-2",attrs:{"data--aos":"fade-left"}},[a("v-icon",{attrs:{small:""}},[e._v("mdi-checkbox-blank-circle")])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"subtitle-1 font-weight-bold",attrs:{"data--aos":"fade-left"},domProps:{textContent:e._s(i.name)}}),a("v-list-item-subtitle",{staticClass:"subtitle-2",attrs:{"data--aos":"fade-left"},domProps:{textContent:e._s(i.givenby)}})],1),i.path?a("v-list-item-action",[e.$vuetify.breakpoint.mdAndUp?a("v-btn",{attrs:{rounded:"",outlined:e.$vuetify.theme.dark,depressed:"",color:"primary","data--aos":"fade",href:i.path,target:"_blank"}},[e._v(" Certificado ")]):a("v-btn",{attrs:{icon:"",large:"",outlined:"",color:"primary",href:""+e.publicPath+i.path,target:"_blank"}},[a("v-icon",[e._v("mdi-certificate")])],1)],1):e._e()],1)]}}])})],1)],1)])},Ie=[],Ze=[{name:"CCNA 1 Enrutamiento y Conmutación: Introducción a las Redes",givenby:"Cisco - Fundación Omar Dengo",path:"assets/certificates/cisco/introduccion-redes.pdf"},{name:"IT Essentials: PC Hardware and Software",givenby:"Cisco - Fundación Omar Dengo",path:"assets/certificates/cisco/itessentials.pdf"},{name:"Curso Básico LibreOffice Calc",givenby:"Universidad Técnica Nacional",path:"assets/certificates/utn/libreoffice-calc.pdf"},{name:"Curso Básico LibreOffice Impress",givenby:"Universidad Técnica Nacional",path:"assets/certificates/utn/libreoffice-impress.pdf"},{name:"Curso Básico LibreOffice Writer",givenby:"Universidad Técnica Nacional",path:"assets/certificates/utn/libreoffice-writer.pdf"},{name:"Curso de Introducción al Desarrollo Web: HTML y CSS (1/2)",givenby:"Google Actívate",path:"assets/certificates/google/web-1.pdf"},{name:"Curso de Introducción al Desarrollo Web: HTML y CSS (2/2)",givenby:"Google Actívate",path:"assets/certificates/google/web-2.pdf"},{name:"Introducción a API REST",givenby:"EDTeam",path:"assets/certificates/edteam/api-rest.png"},{name:"Asistente Web - Capacítate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/asistente-web.pdf"},{name:"Curador de Datos - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/curador-datos.pdf"},{name:"Desarrollador Frontend - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/front-end.pdf"},{name:"Desarrollador de Contenido Digital - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/contenido-digital.pdf"},{name:"Diplomado Técnico en Integridad Web - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/integridad-web.pdf"},{name:"Finder - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/finder.pdf"},{name:"Gestor de Imagen Web - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/imagen-web.pdf"},{name:"Introducción a la Programación - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/programacion.pdf"},{name:"Ortografía y Redacción - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/redacccion-ortografia.pdf"},{name:"Protocolos de Atención y Servicio - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/atencion-servicio.pdf"},{name:"Tester - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/tester.pdf"},{name:"Trabajo en Equipo - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/trabajo-equipo.pdf"},{name:"Técnico en Informática (Ofimática) - Capacitate para el empleo",givenby:"INA - Fundación Carlos Slim",path:"assets/certificates/ina/ofimatica.pdf"},{name:"Curso de CSS",givenby:"SoloLearn",path:"assets/certificates/sololearn/css.pdf"},{name:"Curso de Diseño Web Responsivo",givenby:"SoloLearn",path:"assets/certificates/sololearn/responsive.pdf"},{name:"Curso de HTML",givenby:"SoloLearn",path:"assets/certificates/sololearn/html.pdf"},{name:"Curso de Java (práctico y teórico)",givenby:"SoloLearn",path:"assets/certificates/sololearn/java.pdf"},{name:"Curso de JavaScript (práctico y teórico)",givenby:"SoloLearn",path:"assets/certificates/sololearn/javascript.pdf"},{name:"Curso de PHP",givenby:"SoloLearn",path:"assets/certificates/sololearn/php.pdf"},{name:"Curso de SQL (práctico y teórico)",givenby:"SoloLearn",path:"assets/certificates/sololearn/sql.pdf"},{name:"Curso de jQuery",givenby:"SoloLearn",path:"assets/certificates/sololearn/jquery.pdf"},{name:"Introducción a MongoDB - Numpi Cursos",givenby:"Udemy",path:"assets/certificates/udemy/mongodb.pdf"}],Be={components:{CardSection:ae},data:function(){return{publicPath:"/portafolio/",data:Ze}},mounted:function(){}},Pe=Be,Ae=a(6816),Le=a(3099),Te=a(459),Ee=a(5683),je=(0,d.Z)(Pe,Ve,Ie,!1,null,null,null),Ne=je.exports;p()(je,{VBtn:m.Z,VIcon:y.Z,VList:Ae.Z,VListItem:le.Z,VListItemAction:Le.Z,VListItemContent:de.km,VListItemIcon:Te.Z,VListItemSubtitle:de.oZ,VListItemTitle:de.V9,VVirtualScroll:Ee.Z});var De=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CardSection",{attrs:{title:"Reconocimientos ("+e.data.length+")",icon:"mdi-trophy"}},[a("h3",{staticClass:"px-8 mb-3 text-center text-sm-left"},[e._v("Reconocimientos y premios")]),a("div",{staticClass:"px-8"},[a("v-list",{staticClass:"pa-0"},[a("v-virtual-scroll",{attrs:{height:"400","item-height":"70",items:e.data},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.item,n=t.index;return[a("v-list-item",{key:n,staticClass:"pl-0"},[a("v-list-item-icon",{staticClass:"mr-2",attrs:{"data--aos":"fade-left"}},[a("v-icon",{attrs:{small:""}},[e._v("mdi-checkbox-blank-circle")])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"subtitle-1 font-weight-bold",attrs:{"data--aos":"fade-left"},domProps:{textContent:e._s(i.name)}}),a("v-list-item-subtitle",{staticClass:"subtitle-2",attrs:{"data--aos":"fade-left"},domProps:{textContent:e._s(i.date+" - "+i.givenby)}})],1),i.path?a("v-list-item-action",[e.$vuetify.breakpoint.mdAndUp?a("v-btn",{attrs:{rounded:"",outlined:e.$vuetify.theme.dark,depressed:"",color:"primary","data--aos":"fade",href:i.path,target:"_blank"}},[e._v(" Certificado ")]):a("v-btn",{attrs:{icon:"",large:"",outlined:"",color:"primary",href:""+e.publicPath+i.path,target:"_blank"}},[a("v-icon",[e._v("mdi-trophy")])],1)],1):e._e()],1)]}}])})],1)],1)])},$e=[],Oe=[{name:"Liderazgo Transformacional y Habilidades Blandas",givenby:"Fundación Mejoremos Costa Rica",date:"sept. 2021",duration:"30 horas",path:"assets/awards/habilidades-blandas.pdf"},{name:"Primer Promedio Especialidad Informática en Soporte",givenby:"Colegio Técnico Profesional de Pococí",date:"dic. 2015",duration:"",path:"assets/awards/promedio-informatica.pdf"},{name:"Primer Promedio Décimo Año (Premio a la Perseverancia)",givenby:"Colegio Técnico Profesional de Pococí",date:"sept. 2013",duration:"",path:"assets/awards/promedio-decimo.pdf"},{name:"Carrera Ministerial para Equipos de Alabanza Módulos I y II",givenby:"Instituto Visión",date:"may. 2013",duration:"",path:"assets/awards/vision.pdf"},{name:"Primero Promedio Noveno Año",givenby:"Colegio Técnico Profesional de Pococí",date:"dic. 2012",duration:"",path:"assets/awards/promedio-noveno.pdf"},{name:"Emprendimientos Cooperativos Juveniles",givenby:"CENECOOP R.L.",date:"may. 2011",duration:"24 horas",path:"assets/awards/emprendimientos-cooperativos.pdf"},{name:"Taller de Teatro",givenby:"Prof. Karen González Coordinadora Taller de Teatro",date:"ene. 2010",duration:"8 horas",path:"assets/awards/taller-teatro.pdf"}],Me={components:{CardSection:ae},data:function(){return{publicPath:"/portafolio/",data:Oe}},methods:{}},Re=Me,Je=(0,d.Z)(Re,De,$e,!1,null,null,null),Fe=Je.exports;p()(Je,{VBtn:m.Z,VIcon:y.Z,VList:Ae.Z,VListItem:le.Z,VListItemAction:Le.Z,VListItemContent:de.km,VListItemIcon:Te.Z,VListItemSubtitle:de.oZ,VListItemTitle:de.V9,VVirtualScroll:Ee.Z});var ze={name:"HomeView",components:{BannerSection:W,CardSection:ae,ExperienceSection:ve,SkillSection:xe,CoursesSection:Ne,AwardsSection:Fe},data:function(){return{}},mounted:function(){},methods:{onSlideAnimation:function(e){"in"===e.going&&"top"===e.direction&&this.$anime.timeline().add({targets:e.el,autoplay:!1,opacity:[0,1],translateY:["-50%","0%"],duration:800,easing:"easeOutQuad"})}}},Ge=ze,He=(0,d.Z)(Ge,R,J,!1,null,null,null),Qe=He.exports;p()(He,{VCol:B.Z,VContainer:P.Z,VRow:j.Z}),i.Z.use(M.Z);var We=[{path:"/",name:"home",component:Qe},{path:"/projects",name:"projects",component:function(){return a.e(176).then(a.bind(a,4681))}},{path:"/projects/:id",component:function(){return a.e(242).then(a.bind(a,9930))}}],qe=new M.Z({mode:"history",base:"/portafolio/",routes:We}),Ue=qe,Ye=a(5591),Ke=a(1846);i.Z.use(Ye.Z);var Xe=new Ye.Z({theme:{dark:!0,themes:{dark:{primary:Ke.Z.lightBlue.darken1}}}}),et=a(8416),tt=a.n(et);i.Z.use(tt());var at=a(2711),it=a.n(at);it().init({offset:0,delay:0,duration:800,easing:"ease-out-quad",once:!0}),i.Z.config.productionTip=!1,new i.Z({router:Ue,vuetify:Xe,render:function(e){return e(O)}}).$mount("#app")},7285:function(e,t,a){e.exports=a.p+"img/profile5.eaf94410.png"}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,i,n,o){if(!i){var s=1/0;for(d=0;d<e.length;d++){i=e[d][0],n=e[d][1],o=e[d][2];for(var r=!0,c=0;c<i.length;c++)(!1&o||s>=o)&&Object.keys(a.O).every((function(e){return a.O[e](i[c])}))?i.splice(c--,1):(r=!1,o<s&&(s=o));if(r){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[i,n,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,i){return a.f[i](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+{176:"projects",242:"project"}[e]+"-legacy."+{176:"2949b581",242:"51106a9d"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/project.681e096e.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="portafolio:";a.l=function(i,n,o,s){if(e[i])e[i].push(n);else{var r,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==t+o){r=u;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",t+o),r.src=i),e[i]=[n];var p=function(t,a){r.onerror=r.onload=null,clearTimeout(m);var n=e[i];if(delete e[i],r.parentNode&&r.parentNode.removeChild(r),n&&n.forEach((function(e){return e(a)})),t)return t(a)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/portafolio/"}(),function(){var e=function(e,t,a,i){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var o=function(o){if(n.onerror=n.onload=null,"load"===o.type)a();else{var s=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=r,n.parentNode.removeChild(n),i(c)}};return n.onerror=n.onload=o,n.href=t,document.head.appendChild(n),n},t=function(e,t){for(var a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var n=a[i],o=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===e||o===t))return n}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){n=s[i],o=n.getAttribute("data-href");if(o===e||o===t)return n}},i=function(i){return new Promise((function(n,o){var s=a.miniCssF(i),r=a.p+s;if(t(s,r))return n();e(i,r,n,o)}))},n={826:0};a.f.miniCss=function(e,t){var a={242:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=i(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}(),function(){var e={826:0};a.f.j=function(t,i){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else{var o=new Promise((function(a,i){n=e[t]=[a,i]}));i.push(n[2]=o);var s=a.p+a.u(t),r=new Error,c=function(i){if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var o=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;r.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",r.name="ChunkLoadError",r.type=o,r.request=s,n[1](r)}};a.l(s,c,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,o,s=i[0],r=i[1],c=i[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(c)var d=c(a)}for(t&&t(i);l<s.length;l++)o=s[l],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},i=self["webpackChunkportafolio"]=self["webpackChunkportafolio"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(6610)}));i=a.O(i)})();
//# sourceMappingURL=index-legacy.f13ea2e6.js.map