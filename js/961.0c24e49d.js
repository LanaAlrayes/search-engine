"use strict";(self["webpackChunksearch_engine"]=self["webpackChunksearch_engine"]||[]).push([[961],{9228:function(e,t,i){i.d(t,{Z:function(){return p}});i(6699);var s=i(920),n=i(1452),o=i(908),a=i(2694),l=i(2933),r=l.Z,d=i(5352),h=i(144),c=h.ZP.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(e){this.isActive&&(e?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const e=new r({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});e.$mount();const t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");t&&t.insertBefore(e.$el,t.firstChild),this.overlay=e},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=(0,d.KK)(this.$el)),this.overlay.value=!0)})),!0},removeOverlay(e=!0){this.overlay&&((0,d.qh)(this.overlay.$el,"transitionend",(()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener(e){if("keydown"===e.type){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;const t=[d.Do.up,d.Do.pageup],i=[d.Do.down,d.Do.pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!i.includes(e.keyCode))return;e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return(["auto","scroll"].includes(t.overflowY)||"SELECT"===e.tagName)&&e.scrollHeight>e.clientHeight||["auto","scroll"].includes(t.overflowX)&&e.scrollWidth>e.clientWidth},shouldScroll(e,t){if(e.hasAttribute("data-app"))return!1;const i=t.shiftKey||t.deltaX?"x":"y",s="y"===i?t.deltaY:t.deltaX||t.deltaY;let n,o;"y"===i?(n=0===e.scrollTop,o=e.scrollTop+e.clientHeight===e.scrollHeight):(n=0===e.scrollLeft,o=e.scrollLeft+e.clientWidth===e.scrollWidth);const a=s<0,l=s>0;return!(n||!a)||(!(o||!l)||!(!n&&!o)&&this.shouldScroll(e.parentNode,t))},isInside(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath(e){const t=(0,d.iZ)(e);if("keydown"===e.type&&t[0]===document.body){const t=this.$refs.dialog,i=window.getSelection().anchorNode;return!(t&&this.hasScrollbar(t)&&this.isInside(i,t))||!this.shouldScroll(t,e)}for(let i=0;i<t.length;i++){const s=t[i];if(s===document)return!0;if(s===document.documentElement)return!0;if(s===this.$refs.content)return!0;if(this.hasScrollbar(s))return!this.shouldScroll(s,e)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):((0,d.lj)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),u=i(6401),m=i(8472),v=i(5942),y=i(7678),f=i(4101);const g=(0,y.Z)(o.Z,a.Z,c,u.Z,m.Z,n.Z);var p=g.extend({name:"v-dialog",directives:{ClickOutside:v.Z},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(t=this.previousActiveElement)||t.focus())},fullscreen(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,f.Jk)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(e){const t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):c.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{var e,t;null!=(e=this.$refs.dialog)&&e.contains(document.activeElement)||(this.previousActiveElement=document.activeElement,null==(t=this.$refs.dialog)||t.focus());this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(e){if(e.keyCode===d.Do.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const e=this.getActivator();this.$nextTick((()=>e&&e.focus()))}this.$emit("keydown",e)},onFocusin(e){if(!e||!this.retainFocus)return;const t=e.target;if(t&&this.$refs.dialog&&![document,this.$refs.dialog].includes(t)&&!this.$refs.dialog.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((e=>e.contains(t)))){const e=this.$refs.dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),t=[...e].find((e=>!e.hasAttribute("disabled")));t&&t.focus()}},genContent(){return this.showLazyContent((()=>[this.$createElement(s.Z,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){const e=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[e]):e},genInnerContent(){const e={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(e.style={...e.style,maxWidth:(0,d.kb)(this.maxWidth),width:(0,d.kb)(this.width)}),this.$createElement("div",e,this.getContentSlot())}},render(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},9961:function(e,t,i){i.r(t),i.d(t,{default:function(){return g}});var s=i(6190),n=i(9582),o=i(4886),a=i(2118),l=i(3863),r=i(9228),d=i(4324),h=i(3687),c=function(){var e=this,t=e._self._c;return t("div",[t("svg",{staticClass:"mt-12",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 224"}},[t("path",{attrs:{fill:"#2a93c9","fill-opacity":"0.70",d:"M0,32L40,32C80,32,160,32,240,64C320,96,400,160,480,154.7C560,149,640,75,720,80C800,85,880,171,960,192C1040,213,1120,171,1200,165.3C1280,160,1360,192,1400,208L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"}})]),t(a.Z,[t(l.Z,{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInLeft"},expression:"{animationClass:'animate__animated animate__fadeInLeft'}"}],key:e.desserts.name,staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts,"sort-by":"type"},scopedSlots:e._u([{key:"top",fn:function(){return[t(r.Z,{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}}),t(r.Z,{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(n.Z,[t(o.EB,{staticClass:"text-h5"},[e._v(" Are you sure you want to delete this item? ")]),t(o.h7,[t(h.Z),t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v(" Cancel ")]),t(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.deleteItemConfirm(e.desserts.name)}}},[e._v(" OK ")]),t(h.Z)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function({item:i}){return[t(d.Z,{attrs:{small:""},on:{click:function(t){return e.deleteItem(i)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[t(s.Z,{attrs:{color:"primary"},on:{click:e.initialize}},[e._v(" Reset ")])]},proxy:!0}],null,!0)})],1)],1)},u=[],m={data:()=>({dialog:!1,dialogDelete:!1,headers:[{align:"start",sortable:!1},{text:"Name",value:"name"},{text:"Count",value:"count"},{text:"Address",value:"website"},{text:"Email",value:"email"},{text:"Summary",value:"summary"},{text:"Actions",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{name:"",summary:"",count:"",address:"",email:""},defaultItem:{name:"",summary:"",count:"",address:"",email:""}}),watch:{dialog(e){e||this.close()},dialogDelete(e){e||this.closeDelete()}},created(){this.initialize()},methods:{initialize(){const e={name:this.name,summary:this.summary,count:this.count,website:this.address,email:this.email},t=this;this.axios.get("/get_companys",e).then((e=>{t.desserts=e.data}))},deleteItem(){this.dialogDelete=!0},deleteItemConfirm(){const e={name:this.name};this.axios.delete("/delete_company/",e).then((e=>{"DONE"===e.data?self.desserts=e.data:window.location="/data-company"})),this.desserts.splice(this.editedIndex,1),this.closeDelete()},closeDelete(){this.dialogDelete=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))}}},v=m,y=i(1001),f=(0,y.Z)(v,c,u,!1,null,null,null),g=f.exports}}]);
//# sourceMappingURL=961.0c24e49d.js.map