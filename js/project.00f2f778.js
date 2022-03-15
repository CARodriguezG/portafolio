"use strict";(self["webpackChunkportafolio"]=self["webpackChunkportafolio"]||[]).push([[242],{2500:function(e,t){t["Z"]=[{id:"aposento-alto",name:"Aposento Alto Librería",url:"/assets/projects/aposentoalto",category:"Gestión de inventario y facturación",assets:["1.png","2.png","3.png","4.png"],description:["Sistema básico de facturación y gestión de inventario.","Programado en: Java.","IDE: NetBeans.","Tecnologías utilizadas: Java Swing (biblioteca gráfica para creación de interfaces de usuario en Java)"],pending:!1},{id:"tienda-balloons",name:"Balloons",url:"/assets/projects/balloons",category:"Gestión de inventario y facturación",assets:["1.png","2.png","3.png","4.png"],description:["Sistema de facturación y gestión de inventario.","Programado en: Javascript.","IDE: Visual Studio Code.","Tecnologías utilizadas: Nuxt, Vuetify, Sass (framework CSS), NodeJS, ElectronJS (framework para creación de aplicación híbrida), Vuex, Vuex-Persist (base de datos interna)."],pending:!1},{id:"calculadora-consumo",name:"Calculadora de Consumo",url:"/assets/projects/calculadoraconsumo",category:"Utilidades",assets:["1.png","2.png","3.png"],description:["Calculadora de consumo enérgetico mensual.","Programado en: PHP y Javascript.","IDE: Visual Studio Code.","Tecnologías utilizadas: XAMPP (como intérprete de PHP)."],pending:!1},{id:"electro-servicios-bonilla",name:"Electroservicios Bonilla",url:"/assets/projects/electroservicios",category:"Gestión de inventario y facturación",assets:["1.png","2.png","3.png","4.png","5.png"],description:["Sistema básico de ingreso de boletas de reparación y gestión de inventario.","Programado en: Javascript.","IDE: Visual Studio Code.","Tecnologías utilizadas: Bootstrap 4, jQuery, NeDB (como base de datos incrustada)."],pending:!1},{id:"la-guapilena",name:"Casa de Empeños La Guapileña",url:"/assets/projects/laguapilena",category:"Gestión de inventario y facturación",assets:["1.png","2.png","3.png"],description:["Sistema básico de gestión de préstamos y empeños.","Programado en: Java.","IDE: NetBeans.","Tecnologías utilizadas: Java Swing (biblioteca gráfica para creación de interfaces de usuario en Java)."],pending:!1},{id:"quickstore",name:"Quickstore",url:"/assets/projects/quickstore",category:"Gestión de inventario y facturación",assets:["1.png","2.png","3.png","4.png","5.png","6.png","7.png"],description:["Sistema de facturación y gestión de inventario.","Programado en: Javascript.","IDE: Visual Studio Code.","Tecnologías utilizadas: VueJS, Bootstrap 4, Sass (framework CSS), NodeJS, ExpressJS (como API de comunicación entre la base de datos y la aplicación), ElectronJS (framework para creación de aplicación híbrida), MongoDB (base de datos NoSQL)."],pending:!1},{id:"space-survival",name:"Space Survival",url:"/assets/projects/spacesurvival",category:"Juegos",assets:["1.png","2.png","3.png","4.png","5.mp4"],description:["Videojuego inspirado en Space Survival y Asteroids.","Programado en: Java.","IDE: NetBeans.","Tecnologías utilizadas: 2D Graphics y Java AWT Painting (utilizando el método #paintComponent)"],pending:!0},{id:"sublime-pos",name:"SublimePOS",url:"/assets/projects/sublimepos",category:"Gestión de inventario",assets:["1.png","2.png","3.png","4.png","5.png"],description:["Panel de administración de inventario.","Programado en: PHP.","IDE: Visual Studio Code.","Tecnologías utilizadas: XAMPP (como software de gestión de base de datos MySQL e intérprete de PHP)."],pending:!0}]},5205:function(e,t,i){i.r(t),i.d(t,{default:function(){return Q}});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{staticClass:"pb-15"},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",[i("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:e.breadcrumb}})],1)],1),i("v-row",[i("v-col",[i("v-list-item",{staticClass:"pa-0",attrs:{"two-line":""}},[i("v-list-item-content",{staticClass:"pa-0"},[i("v-list-item-title",{staticClass:"text-h6 text-wrap"},[e._v(" Proyecto: "+e._s(e.data.name)+" ")]),i("v-list-item-subtitle",{staticClass:"text-h7 text-wrap mb-4 mb-sm-0"},[e._v(" Categoría: "+e._s(e.data.category)+" ")])],1)],1),i("h4",[e._v("Descripción del proyecto:")]),e.data.description.length>0?i("v-list-item",{staticClass:"pa-0"},[i("ul",e._l(e.data.description,(function(t,s){return i("li",{key:s},[e._v(" "+e._s(t)+" ")])})),0)]):e._e(),i("v-list-item",{staticClass:"pa-0"},[i("v-chip",{attrs:{color:e.data.pending?"red":"green"}},[i("b",{staticClass:"white--text"},[e._v(e._s(e.data.pending?"Proyecto sin finalizar":"Proyecto Finalizado"))])])],1)],1)],1),e.$vuetify.breakpoint.smAndUp?i("v-row",[i("v-col",[i("v-carousel",{staticClass:"carousel",attrs:{continuous:!1,height:"100%"},on:{change:e.onSlideChange},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},e._l(e.data.assets,(function(t,s){return i("v-carousel-item",{key:s},[e.isImage(t)?[i("v-img",{staticStyle:{height:"90%"},attrs:{contain:"",src:e.data.url+"/"+t},on:{click:function(i){return e.previewImage(e.data.url+"/"+t)}}})]:e.isVideo(t)?[i("video",{ref:"video",refInFor:!0,staticStyle:{height:"90%"},attrs:{src:e.data.url+"/"+t,controls:""}})]:e._e()],2)})),1)],1)],1):i("v-row",e._l(e.data.assets,(function(t,s){return i("v-col",{key:s,attrs:{cols:"12"}},[e.isImage(t)?[i("v-img",{attrs:{src:e.data.url+"/"+t},on:{click:function(i){return e.previewImage(e.data.url+"/"+t)}}})]:e.isVideo(t)?[i("video",{attrs:{src:e.data.url+"/"+t,controls:""}})]:e._e()],2)})),1),i("v-dialog",{attrs:{"content-class":"assets-preview",scrollable:""},model:{value:e.preview.show,callback:function(t){e.$set(e.preview,"show",t)},expression:"preview.show"}},[i("v-card",{attrs:{light:"",color:"transparent"}},[i("v-toolbar",{attrs:{flat:"",color:"transparent"}},[i("v-spacer"),i("v-btn",{attrs:{text:"",icon:"",color:"white"},on:{click:function(t){e.preview.show=!1}}},[i("v-icon",[e._v("mdi-close")])],1)],1),i("v-card-text",{staticClass:"pa-0"},[i("div",{staticClass:"fill-height"},[i("v-img",{staticClass:"fill-height",attrs:{contain:"",src:e.preview.url}})],1)])],1)],1)],1)},n=[],a=i(2500),r={data:()=>({data:{},model:0,preview:{show:!1,url:""}}),beforeMount(){var e=a.Z.find((e=>e.id===this.$route.params.id));if("undefined"===typeof e)return this.$router.push("/projects");this.data=e},methods:{getAssetType(e){var t=e.split(".");switch(t[1]){case"png":return"image";case"mp4":return"video"}},isImage(e){return"image"===this.getAssetType(e)},isVideo(e){return"video"===this.getAssetType(e)},onSlideChange(){this.$refs.video&&this.$refs.video.forEach((e=>{e.pause(),e.currentTime=0}))},previewImage(e){this.preview.url=e,this.preview.show=!0}},computed:{breadcrumb(){return[{text:"Proyectos",exact:!0,to:"/projects"},{text:this.data.name,disabled:!0}]}}},o=r,l=i(1001),c=i(3453),d=i.n(c),h=i(6505),u=i(3325),p=(0,u.Z)(h.Z).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes(){return{"v-breadcrumbs__item":!0,[this.activeClass]:this.disabled}}},render(e){const{tag:t,data:i}=this.generateRouteLink();return e("li",[e(t,{...i,attrs:{...i.attrs,"aria-current":this.isActive&&this.isLink?"page":void 0}},this.$slots.default)])}}),m=i(4589),v=(0,m.Ji)("v-breadcrumbs__divider","li"),g=i(8085),w=(0,u.Z)(g.Z).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:()=>[]},large:Boolean},computed:{classes(){return{"v-breadcrumbs--large":this.large,...this.themeClasses}}},methods:{genDivider(){return this.$createElement(v,this.$slots.divider?this.$slots.divider:this.divider)},genItems(){const e=[],t=!!this.$scopedSlots.item,i=[];for(let s=0;s<this.items.length;s++){const n=this.items[s];i.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(p,{key:i.join("."),props:n},[n.text])),s<this.items.length-1&&e.push(this.genDivider())}return e}},render(e){const t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}}),f=i(680),y=i(2628),b=i(7118),C=i(5500),T=f.Z,x=i(172),I=i(4333),S=I.y.extend({name:"v-window",directives:{Touch:C.Z},provide(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive(){return this.transitionCount>0},classes(){return{...I.y.options.computed.classes.call(this),"v-window--show-arrows-on-hover":this.showArrowsOnHover}},computedTransition(){if(!this.isBooted)return"";const e=this.vertical?"y":"x",t=this.internalReverse?!this.isReverse:this.isReverse,i=t?"-reverse":"";return`v-window-${e}${i}-transition`},hasActiveItems(){return Boolean(this.items.find((e=>!e.disabled)))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex(((e,t)=>this.internalValue===this.getValue(e,t)))},internalReverse(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex(e,t){this.isReverse=this.updateReverse(e,t)}},mounted(){window.requestAnimationFrame((()=>this.isBooted=!0))},methods:{genDefaultSlot(){return this.$slots.default},genContainer(){const e=[this.genDefaultSlot()];return this.showArrows&&e.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},e)},genIcon(e,t,i){var s,n,a;const r={click:e=>{e.stopPropagation(),this.changedByDelimiters=!0,i()}},o={"aria-label":this.$vuetify.lang.t(`$vuetify.carousel.${e}`)},l=null!=(s=null==(n=(a=this.$scopedSlots)[e])?void 0:n.call(a,{on:r,attrs:o}))?s:[this.$createElement(T,{props:{icon:!0},attrs:o,on:r},[this.$createElement(x.Z,{props:{large:!0}},t)])];return this.$createElement("div",{staticClass:`v-window__${e}`},l)},genControlIcons(){const e=[],t=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&t&&"string"===typeof t){const i=this.genIcon("prev",t,this.prev);i&&e.push(i)}const i=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&i&&"string"===typeof i){const t=this.genIcon("next",i,this.next);t&&e.push(t)}return e},getNextIndex(e){const t=(e+1)%this.items.length,i=this.items[t];return i.disabled?this.getNextIndex(t):t},getPrevIndex(e){const t=(e+this.items.length-1)%this.items.length,i=this.items[t];return i.disabled?this.getPrevIndex(t):t},next(){if(!this.hasActiveItems||!this.hasNext)return;const e=this.getNextIndex(this.internalIndex),t=this.items[e];this.internalValue=this.getValue(t,e)},prev(){if(!this.hasActiveItems||!this.hasPrev)return;const e=this.getPrevIndex(this.internalIndex),t=this.items[e];this.internalValue=this.getValue(t,e)},updateReverse(e,t){const i=this.items.length,s=i-1;return i<=2?e<t:e===s&&0===t||(0!==e||t!==s)&&e<t}},render(e){const t={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){const e=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:e=>{e.stopPropagation()},start:e=>{e.stopPropagation()}};t.directives.push({name:"touch",value:e})}return e("div",t,[this.genContainer()])}}),$=i(8159),V=I.y.extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return I.y.options.computed.classes.call(this)}},methods:{genData:I.y.options.methods.genData}}),B=i(1824),P=S.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>e>0},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide(){return{parentTheme:this.theme}},data(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes(){return{...S.options.computed.classes.call(this),"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical}},isDark(){return this.dark||!this.light},isVertical(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height(e,t){e!==t&&e&&(this.internalHeight=e)},cycle(e){e?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created(){this.$attrs.hasOwnProperty("hide-controls")&&(0,B.fK)("hide-controls",':show-arrows="false"',this)},mounted(){this.startTimeout()},methods:{genControlIcons(){return this.isVertical?null:S.options.methods.genControlIcons.call(this)},genDelimiters(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems(){const e=this.items.length,t=[];for(let i=0;i<e;i++){const s=this.$createElement(T,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(x.Z,{props:{size:18}},this.delimiterIcon)]);t.push(s)}return this.$createElement(V,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:e=>{this.internalValue=e}}},t)},genProgress(){return this.$createElement($.Z,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render(e){const t=S.options.render.call(this,e);return t.data.style=`height: ${(0,m.kb)(this.height)};`,this.hideDelimiters||t.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&t.children.push(this.genProgress()),t}}),_=i(8625),D=i(7352);const k=(0,u.Z)(_.Z,(0,D.d)("windowGroup","v-window-item","v-window"));var A=k.extend().extend().extend({name:"v-window-item",directives:{Touch:C.Z},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=(0,m.kb)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(e){this.inTransition&&this.$nextTick((()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=(0,m.kb)(e.clientHeight))}))}},render(e){return e("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((()=>[this.genWindowItem()])))}}),E=i(7047);const Z=(0,u.Z)(A,h.Z);var G=Z.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot(){return[this.$createElement(E.Z,{staticClass:"v-carousel__item",props:{...this.$attrs,height:this.windowGroup.internalHeight},on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},(0,m.z9)(this))]},genWindowItem(){const{tag:e,data:t}=this.generateRouteLink();return t.staticClass="v-window-item",t.directives.push({name:"show",value:this.isActive}),this.$createElement(e,t,this.genDefaultSlot())}}}),J=i(5424),H=i(2102),j=i(9846),N=i(914),L=i(6428),z=i(7620),R=i(5192),q=i(2877),O=i(9762),M=i(6656),F=(0,l.Z)(o,s,n,!1,null,null,null),Q=F.exports;d()(F,{VBreadcrumbs:w,VBtn:f.Z,VCard:y.Z,VCardText:b.ZB,VCarousel:P,VCarouselItem:G,VChip:J.Z,VCol:H.Z,VContainer:j.Z,VDialog:N.Z,VIcon:L.Z,VImg:E.Z,VListItem:z.Z,VListItemContent:R.km,VListItemSubtitle:R.oZ,VListItemTitle:R.V9,VRow:q.Z,VSpacer:O.Z,VToolbar:M.Z})}}]);
//# sourceMappingURL=project.00f2f778.js.map