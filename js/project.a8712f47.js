"use strict";(self["webpackChunkportafolio"]=self["webpackChunkportafolio"]||[]).push([[242],{2500:function(t,e){e["Z"]=[{id:"atech",name:"Atech Soluciones Tecnológicas",url:"assets/projects/atech",category:"Gestión de órdenes",assets:["1.png","2.png","3.png","4.png","5.png","0.png"],description:["Creación de sistema web y PWA para gestión de boletas de reparación.","Programado en: Javascript.","IDE: Visual Studio Code.","Tecnologías utilizadas: Nuxt, Vuetify, PWA, Sass (framework CSS), NodeJS, Firebase (NoSQL).","* Actualmente estoy actualizando a Vue 3, Vuetify 3, Nuxt 3, Pinia, Supabase (PostgreSQL)."],pending:!1,date:"2023-2024"},{id:"aposento-alto",name:"Aposento Alto Librería",url:"assets/projects/aposentoalto",category:"Gestión de inventario y facturación",assets:["1.png","2.png","3.png","4.png"],description:["Sistema básico de facturación y gestión de inventario.","Programado en: Java.","IDE: NetBeans.","Tecnologías utilizadas: Java Swing (biblioteca gráfica para creación de interfaces de usuario en Java)"],pending:!1,date:"2017"},{id:"tienda-balloons",name:"Balloons",url:"assets/projects/balloons",category:"Gestión de inventario y facturación",assets:["1.png","2.png","3.png","4.png"],description:["Sistema de facturación y gestión de inventario.","Programado en: Javascript.","IDE: Visual Studio Code.","Tecnologías utilizadas: Nuxt, Vuetify, Sass (framework CSS), NodeJS, ElectronJS (framework para creación de aplicación híbrida), Vuex, Vuex-Persist (base de datos interna).","Utiliza Github para la gestión de versiones"],pending:!1,date:"2022"},{id:"calculadora-consumo",name:"Calculadora de Consumo",url:"assets/projects/calculadoraconsumo",category:"Utilidades",assets:["1.png","2.png","3.png"],description:["Calculadora de consumo enérgetico mensual.","Programado en: PHP y Javascript.","IDE: Visual Studio Code.","Tecnologías utilizadas: XAMPP (como intérprete de PHP)."],pending:!1,date:"2019"},{id:"electro-servicios-bonilla",name:"Electroservicios Bonilla",url:"assets/projects/electroservicios",category:"Gestión de inventario y facturación",assets:["1.png","2.png","3.png","4.png","5.png"],description:["Sistema básico de ingreso de boletas de reparación y gestión de inventario.","Programado en: Javascript.","IDE: Visual Studio Code.","Tecnologías utilizadas: Bootstrap 4, jQuery, NeDB (como base de datos incrustada)."],pending:!1,date:"2018"},{id:"la-guapilena",name:"Casa de Empeños La Guapileña",url:"assets/projects/laguapilena",category:"Gestión de inventario y facturación",assets:["1.png","2.png","3.png"],description:["Sistema básico de gestión de préstamos y empeños.","Programado en: Java.","IDE: NetBeans.","Tecnologías utilizadas: Java Swing (biblioteca gráfica para creación de interfaces de usuario en Java)."],pending:!1,date:"2017"},{id:"quickstore",name:"Quickstore",url:"assets/projects/quickstore",category:"Gestión de inventario y facturación",assets:["1.png","2.png","3.png","4.png","5.png","6.png","7.png"],description:["Sistema de facturación y gestión de inventario.","Programado en: Javascript.","IDE: Visual Studio Code.","Tecnologías utilizadas: VueJS, Bootstrap 4, Sass (framework CSS), NodeJS, ExpressJS (como API de comunicación entre la base de datos y la aplicación), ElectronJS (framework para creación de aplicación híbrida), MongoDB (base de datos NoSQL).","Cuenta con una aplicación cliente para instalar en varias computadoras y acceder a la misma base de datos."],pending:!1,date:"2021"},{id:"space-survival",name:"Space Survival",url:"assets/projects/spacesurvival",category:"Juegos",assets:["1.png","2.png","3.png","4.png","5.mp4"],description:["Videojuego inspirado en Space Survival y Asteroids.","Programado en: Java.","IDE: NetBeans.","Tecnologías utilizadas: 2D Graphics y Java AWT Painting (utilizando el método #paintComponent)"],pending:!0,date:"2018"},{id:"sublime-pos",name:"SublimePOS",url:"assets/projects/sublimepos",category:"Gestión de inventario",assets:["1.png","2.png","3.png","4.png","5.png"],description:["Panel de administración de inventario.","Programado en: PHP.","IDE: Visual Studio Code.","Tecnologías utilizadas: XAMPP (como software de gestión de base de datos MySQL e intérprete de PHP)."],pending:!0,date:"2020"}]},9930:function(t,e,i){i.r(e),i.d(e,{default:function(){return nt}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"pb-15"},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",[i("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumb}})],1)],1),i("v-row",[i("v-col",[i("v-list-item",{staticClass:"pa-0",attrs:{"two-line":""}},[i("v-list-item-content",{staticClass:"pa-0"},[i("v-list-item-title",{staticClass:"text-h6 text-wrap"},[t._v(" Proyecto: "+t._s(t.data.name)+" ")]),i("v-list-item-subtitle",{staticClass:"text-h7 text-wrap mb-4 mb-sm-0"},[t._v(" Categoría: "+t._s(t.data.category)+" ")])],1)],1),i("h4",[t._v("Descripción del proyecto:")]),t.data.description.length>0?i("v-list-item",{staticClass:"pa-0"},[i("ul",t._l(t.data.description,(function(e,s){return i("li",{key:s},[t._v(" "+t._s(e)+" ")])})),0)]):t._e(),i("v-list-item",{staticClass:"pa-0"},[i("v-chip",{attrs:{color:t.data.pending?"red":"green"}},[i("b",{staticClass:"white--text"},[t._v(t._s(t.data.pending?"Proyecto sin finalizar":"Proyecto Finalizado"))])])],1)],1)],1),t.$vuetify.breakpoint.smAndUp?i("v-row",[i("v-col",[i("v-carousel",{staticClass:"carousel",attrs:{continuous:!1,height:"100%"},on:{change:t.onSlideChange},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.data.assets,(function(e,s){return i("v-carousel-item",{key:s},[t.isImage(e)?[i("v-img",{staticStyle:{height:"90%"},attrs:{contain:"",src:""+t.publicPath+t.data.url+"/"+e},on:{click:function(i){return t.previewImage(""+t.publicPath+t.data.url+"/"+e)}}})]:t.isVideo(e)?[i("video",{ref:"video",refInFor:!0,staticStyle:{height:"90%"},attrs:{src:""+t.publicPath+t.data.url+"/"+e,controls:""}})]:t._e()],2)})),1)],1)],1):i("v-row",t._l(t.data.assets,(function(e,s){return i("v-col",{key:s,attrs:{cols:"12"}},[t.isImage(e)?[i("v-img",{attrs:{src:""+t.publicPath+t.data.url+"/"+e},on:{click:function(i){return t.previewImage(""+t.publicPath+t.data.url+"/"+e)}}})]:t.isVideo(e)?[i("video",{attrs:{src:""+t.publicPath+t.data.url+"/"+e,controls:""}})]:t._e()],2)})),1),i("v-dialog",{attrs:{"content-class":"assets-preview",scrollable:""},model:{value:t.preview.show,callback:function(e){t.$set(t.preview,"show",e)},expression:"preview.show"}},[i("v-card",{attrs:{light:"",color:"transparent"}},[i("v-toolbar",{attrs:{flat:"",color:"transparent"}},[i("v-spacer"),i("v-btn",{attrs:{text:"",icon:"",color:"white"},on:{click:function(e){t.preview.show=!1}}},[i("v-icon",[t._v("mdi-close")])],1)],1),i("v-card-text",{staticClass:"pa-0"},[i("div",{staticClass:"fill-height"},[i("v-img",{staticClass:"fill-height",attrs:{contain:"",src:t.preview.url}})],1)])],1)],1)],1)},n=[],a=i(2500),o={data:()=>({publicPath:"/portafolio/",data:{},model:0,preview:{show:!1,url:""}}),beforeMount(){var t=a.Z.find((t=>t.id===this.$route.params.id));if("undefined"===typeof t)return this.$router.push("/projects");this.data=t},methods:{getAssetType(t){var e=t.split(".");switch(e[1]){case"png":return"image";case"mp4":return"video"}},isImage(t){return"image"===this.getAssetType(t)},isVideo(t){return"video"===this.getAssetType(t)},onSlideChange(){this.$refs.video&&this.$refs.video.forEach((t=>{t.pause(),t.currentTime=0}))},previewImage(t){this.preview.url=t,this.preview.show=!0}},computed:{breadcrumb(){return[{text:"Proyectos",exact:!0,to:"/projects"},{text:this.data.name,disabled:!0}]}}},r=o,l=i(1001),c=i(3453),d=i.n(c),h=i(6505),u=i(3325),p=(0,u.Z)(h.Z).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes(){return{"v-breadcrumbs__item":!0,[this.activeClass]:this.disabled}}},render(t){const{tag:e,data:i}=this.generateRouteLink();return t("li",[t(e,{...i,attrs:{...i.attrs,"aria-current":this.isActive&&this.isLink?"page":void 0}},this.$slots.default)])}}),m=i(4589),v=(0,m.Ji)("v-breadcrumbs__divider","li"),g=i(8085),f=(0,u.Z)(g.Z).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:()=>[]},large:Boolean},computed:{classes(){return{"v-breadcrumbs--large":this.large,...this.themeClasses}}},methods:{genDivider(){return this.$createElement(v,this.$slots.divider?this.$slots.divider:this.divider)},genItems(){const t=[],e=!!this.$scopedSlots.item,i=[];for(let s=0;s<this.items.length;s++){const n=this.items[s];i.push(n.text),e?t.push(this.$scopedSlots.item({item:n})):t.push(this.$createElement(p,{key:i.join("."),props:n},[n.text])),s<this.items.length-1&&t.push(this.genDivider())}return t}},render(t){const e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}}),w=i(680),y=i(2628),b=i(7118),C=i(5500),x=w.Z,S=i(172),T=i(4333),$=T.y.extend({name:"v-window",directives:{Touch:C.Z},provide(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive(){return this.transitionCount>0},classes(){return{...T.y.options.computed.classes.call(this),"v-window--show-arrows-on-hover":this.showArrowsOnHover}},computedTransition(){if(!this.isBooted)return"";const t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,i=e?"-reverse":"";return`v-window-${t}${i}-transition`},hasActiveItems(){return Boolean(this.items.find((t=>!t.disabled)))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex(((t,e)=>this.internalValue===this.getValue(t,e)))},internalReverse(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex(t,e){this.isReverse=this.updateReverse(t,e)}},mounted(){window.requestAnimationFrame((()=>this.isBooted=!0))},methods:{genDefaultSlot(){return this.$slots.default},genContainer(){const t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon(t,e,i){var s,n,a;const o={click:t=>{t.stopPropagation(),this.changedByDelimiters=!0,i()}},r={"aria-label":this.$vuetify.lang.t(`$vuetify.carousel.${t}`)},l=null!=(s=null==(n=(a=this.$scopedSlots)[t])?void 0:n.call(a,{on:o,attrs:r}))?s:[this.$createElement(x,{props:{icon:!0},attrs:r,on:o},[this.$createElement(S.Z,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:`v-window__${t}`},l)},genControlIcons(){const t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){const i=this.genIcon("prev",e,this.prev);i&&t.push(i)}const i=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&i&&"string"===typeof i){const e=this.genIcon("next",i,this.next);e&&t.push(e)}return t},getNextIndex(t){const e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex(t){const e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next(){if(!this.hasActiveItems||!this.hasNext)return;const t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},prev(){if(!this.hasActiveItems||!this.hasPrev)return;const t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse(t,e){const i=this.items.length,s=i-1;return i<=2?t<e:t===s&&0===e||(0!==t||e!==s)&&t<e}},render(t){const e={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){const t=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:t=>{t.stopPropagation()},start:t=>{t.stopPropagation()}};e.directives.push({name:"touch",value:t})}return t("div",e,[this.genContainer()])}}),I=i(8159),k=T.y.extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return T.y.options.computed.classes.call(this)}},methods:{genData:T.y.options.methods.genData}}),A=i(1824),B=$.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:t=>t>0},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide(){return{parentTheme:this.theme}},data(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes(){return{...$.options.computed.classes.call(this),"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical}},isDark(){return this.dark||!this.light},isVertical(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height(t,e){t!==e&&t&&(this.internalHeight=t)},cycle(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created(){this.$attrs.hasOwnProperty("hide-controls")&&(0,A.fK)("hide-controls",':show-arrows="false"',this)},mounted(){this.startTimeout()},methods:{genControlIcons(){return this.isVertical?null:$.options.methods.genControlIcons.call(this)},genDelimiters(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems(){const t=this.items.length,e=[];for(let i=0;i<t;i++){const s=this.$createElement(x,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,t)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(S.Z,{props:{size:18}},this.delimiterIcon)]);e.push(s)}return this.$createElement(k,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:t=>{this.internalValue=t}}},e)},genProgress(){return this.$createElement(I.Z,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render(t){const e=$.options.render.call(this,t);return e.data.style=`height: ${(0,m.kb)(this.height)};`,this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),V=i(8625),P=i(7352);const _=(0,u.Z)(V.Z,(0,P.d)("windowGroup","v-window-item","v-window"));var E=_.extend().extend().extend({name:"v-window-item",directives:{Touch:C.Z},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=(0,m.kb)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick((()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=(0,m.kb)(t.clientHeight))}))}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((()=>[this.genWindowItem()])))}}),Z=i(7047);const D=(0,u.Z)(E,h.Z);var G=D.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot(){return[this.$createElement(Z.Z,{staticClass:"v-carousel__item",props:{...this.$attrs,height:this.windowGroup.internalHeight},on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},(0,m.z9)(this))]},genWindowItem(){const{tag:t,data:e}=this.generateRouteLink();return e.staticClass="v-window-item",e.directives.push({name:"show",value:this.isActive}),this.$createElement(t,e,this.genDefaultSlot())}}}),J=i(5424),N=i(2102),L=i(9846),O=g.Z.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:g.Z.options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find((t=>!t.isComment&&" "!==t.text))}}),z=i(5795),H=i(5907),j=i(3944),R=i(390),F=i(144),M=F.Z.extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(t){this.originalValue=t,setTimeout((()=>{this.isActive=!1}))}}}),W=i(5703),q=i(7860);const Q=(0,u.Z)(H.Z,j.Z,R.Z,M,W.Z,z.Z);var K=Q.extend({name:"v-dialog",directives:{ClickOutside:q.Z},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,A.Jk)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):R.Z.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{this.$refs.content.contains(document.activeElement)||(this.previousActiveElement=document.activeElement,this.$refs.content.focus()),this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===m.Do.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((t=>t.contains(e)))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find((t=>!t.hasAttribute("disabled")));e&&e.focus()}},genContent(){return this.showLazyContent((()=>[this.$createElement(O,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog",tabindex:this.isActive?0:void 0,"aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:(0,m.kb)(this.maxWidth),width:(0,m.kb)(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}}),U=i(6428),X=i(7620),Y=i(5192),tt=i(2877),et=i(9762),it=i(6656),st=(0,l.Z)(r,s,n,!1,null,null,null),nt=st.exports;d()(st,{VBreadcrumbs:f,VBtn:w.Z,VCard:y.Z,VCardText:b.ZB,VCarousel:B,VCarouselItem:G,VChip:J.Z,VCol:N.Z,VContainer:L.Z,VDialog:K,VIcon:U.Z,VImg:Z.Z,VListItem:X.Z,VListItemContent:Y.km,VListItemSubtitle:Y.oZ,VListItemTitle:Y.V9,VRow:tt.Z,VSpacer:et.Z,VToolbar:it.Z})}}]);
//# sourceMappingURL=project.a8712f47.js.map