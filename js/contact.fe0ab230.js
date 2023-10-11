"use strict";(self["webpackChunksearch_engine"]=self["webpackChunksearch_engine"]||[]).push([[631],{9286:function(e,t,a){a.d(t,{Z:function(){return m}});var s=a(8860),i=a(7678),n=(0,i.Z)(s.Z).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes(){return{"v-breadcrumbs__item":!0,[this.activeClass]:this.disabled}}},render(e){const{tag:t,data:a}=this.generateRouteLink();return e("li",[e(t,{...a,attrs:{...a.attrs,"aria-current":this.isActive&&this.isLink?"page":void 0}},this.$slots.default)])}}),r=a(5352),o=(0,r.Ji)("v-breadcrumbs__divider","li"),l=a(6669),m=(0,i.Z)(l.Z).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:()=>[]},large:Boolean},computed:{classes(){return{"v-breadcrumbs--large":this.large,...this.themeClasses}}},methods:{genDivider(){return this.$createElement(o,this.$slots.divider?this.$slots.divider:this.divider)},genItems(){const e=[],t=!!this.$scopedSlots.item,a=[];for(let s=0;s<this.items.length;s++){const i=this.items[s];a.push(i.text),t?e.push(this.$scopedSlots.item({item:i})):e.push(this.$createElement(n,{key:a.join("."),props:i},[i.text])),s<this.items.length-1&&e.push(this.genDivider())}return e}},render(e){const t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},120:function(e,t,a){a.d(t,{Z:function(){return c}});var s=a(2240),i=a(573),n=a(7069),r=a(144),o=r.ZP.extend({name:"rippleable",directives:{ripple:n.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(e={}){return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}}),l=a(6174),m=a(7678);function u(e){e.preventDefault()}var d=(0,m.Z)(i.Z,o,l.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const e=this.value,t=this.internalValue;return this.isMultiple?!!Array.isArray(t)&&t.some((t=>this.valueComparator(t,e))):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,t):Boolean(t):this.valueComparator(t,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel(){const e=i.Z.options.methods.genLabel.call(this);return e?(e.data.on={click:u},e):e},genInput(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:u},ref:"input"})},onClick(e){this.onChange(),this.$emit("click",e)},onChange(){if(!this.isInteractive)return;const e=this.value;let t=this.internalValue;if(this.isMultiple){Array.isArray(t)||(t=[]);const a=t.length;t=t.filter((t=>!this.valueComparator(t,e))),t.length===a&&t.push(e)}else t=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(t,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(t,e)?null:e:!t;this.validate(!0,t),this.internalValue=t,this.hasColor=t},onFocus(e){this.isFocused=!0,this.$emit("focus",e)},onBlur(e){this.isFocused=!1,this.$emit("blur",e)},onKeydown(e){}}}),c=d.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...i.Z.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(e){this.$nextTick((()=>this.inputIndeterminate=e))},inputIndeterminate(e){this.$emit("update:indeterminate",e)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:e,...t}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(s.Z,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...t,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},5470:function(e,t,a){a.r(t),a.d(t,{default:function(){return B}});var s=a(6190),i=a(120),n=a(266),r=a(2118),o=a(9223),l=(a(6699),a(7678)),m=a(2500),u=a(4712),d=(0,l.Z)(m.Z,(0,u.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",(t=>{this.$set(this.errorBag,e._uid,t)}),{immediate:!0}),a={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=e.$watch("shouldValidate",(s=>{s&&(this.errorBag.hasOwnProperty(e._uid)||(a.valid=t(e)))})):a.valid=t(e),a},validate(){return 0===this.inputs.filter((e=>!e.validate(!0))).length},reset(){this.inputs.forEach((e=>e.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((e=>e.resetValidation())),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find((t=>t._uid===e._uid));if(!t)return;const a=this.watchers.find((e=>e._uid===t._uid));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((e=>e._uid!==t._uid)),this.inputs=this.inputs.filter((e=>e._uid!==t._uid)),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}}),c=a(4324),h=a(9258),p=a(1713),v=a(3424),_=a(7808);const f=(0,l.Z)(_.Z);var g=f.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:e=>!isNaN(parseFloat(e))},rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseInt(e,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,..._.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(e){this.$nextTick((()=>{var t;e?this.calculateInputHeight():null==(t=this.$refs.input)||t.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const e=this.$refs.input;if(!e)return;e.style.height="0";const t=e.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(a,t)+"px"},genInput(){const e=_.Z.options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput(e){_.Z.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}}),x=function(){var e=this,t=e._self._c;return t("div",[t("hero-contact"),t(h.Z,{attrs:{height:"100%",src:"https://demo.themexbd.com/rtl/smartdev/wp-content/uploads/2021/06/choose-bg.png"}},[t(r.Z,{attrs:{id:"stats"}},[t(p.Z,[t(n.Z,{staticClass:"text--primary my-16",attrs:{cols:"12",md:"7"}},[t("p",{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInLeft"},expression:"{animationClass:'animate__animated animate__fadeInLeft'}"}],staticClass:"my-10 font-weight-medium text-h2"},[e._v(" Get In Touch ")]),t("p",{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInLeft"},expression:"{animationClass:'animate__animated animate__fadeInLeft'}"}]},[e._v(" You can contact us any way that is convenient for you. We are available 24/7 via fax or email. You can also use a quick contact form below. ")]),t("p",{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInLeft"},expression:"{animationClass:'animate__animated animate__fadeInLeft'}"}]},[e._v(" We would be happy to answer your questions. ")]),t(d,{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.send.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(p.Z,[t(n.Z,{attrs:{cols:"12",sm:"6"}},[t(_.Z,{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInLeft"},expression:"{animationClass:'animate__animated animate__fadeInLeft'}"}],attrs:{rules:e.nameRules,counter:40,label:"First Name",required:"","error-messages":e.errors.title,outlined:""},model:{value:e.firstname,callback:function(t){e.firstname=t},expression:"firstname"}})],1),t(n.Z,{attrs:{cols:"12",sm:"6"}},[t(_.Z,{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInLeft"},expression:"{animationClass:'animate__animated animate__fadeInLeft'}"}],attrs:{rules:e.nameRules,counter:40,label:"Last Name",required:"","error-messages":e.errors.title,outlined:""},model:{value:e.lastname,callback:function(t){e.lastname=t},expression:"lastname"}})],1)],1),t(p.Z,[t(n.Z,{attrs:{cols:"12",sm:"6"}},[t(v.Z,{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInLeft"},expression:"{animationClass:'animate__animated animate__fadeInLeft'}"}],attrs:{items:e.items,label:"Select","error-messages":e.errors.type,rules:e.selectRules,outlined:""},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})],1),t(n.Z,{attrs:{cols:"12",sm:"6"}},[t(_.Z,{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInLeft"},expression:"{animationClass:'animate__animated animate__fadeInLeft'}"}],attrs:{rules:e.emailRules,label:"E-mail",required:"","error-messages":e.errors.email,outlined:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1),t(g,{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInLeft"},expression:"{animationClass:'animate__animated animate__fadeInLeft'}"}],attrs:{label:"Your Message",rows:"4","row-height":"25","error-messages":e.errors.content,outlined:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),t(i.Z,{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInLeft"},expression:"{animationClass:'animate__animated animate__fadeInLeft'}"}],attrs:{rules:[e.rules.required],color:"success"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(" I agree to the  "),t("a",{attrs:{href:"#"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.dialog=!0}}},[e._v("Terms of Service")]),e._v("  and  "),t("a",{attrs:{href:"#"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.dialog=!0}}},[e._v("Privacy Policy")]),e._v("* ")]},proxy:!0}]),model:{value:e.agreement,callback:function(t){e.agreement=t},expression:"agreement"}}),t(s.Z,{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInLeft"},expression:"{animationClass:'animate__animated animate__fadeInLeft'}"}],staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success",type:"submit",rounded:""},on:{click:e.validate}},[e._v(" Send message ")]),t(s.Z,{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInLeft"},expression:"{animationClass:'animate__animated animate__fadeInLeft'}"}],attrs:{rounded:""},on:{click:e.clear}},[e._v(" clear ")])],1)],1),t(n.Z,{staticClass:"ml-10 mt-10 text--primary",attrs:{cols:"12",md:"4"}},[t("div",{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInRight"},expression:"{animationClass:'animate__animated animate__fadeInRight'}"}],staticClass:"my-16",attrs:{"max-width":"374"}},[t("h6",[e._v("SOCIALS")]),t(o.Z,{staticClass:"mr-4 my-2"}),t("div",{staticClass:"d-flex flex-row mr-16"},[t(s.Z,{staticClass:"mx-1 mb-2",attrs:{fab:"","x-small":"",color:"white"}},[t(c.Z,{attrs:{color:"indigo"}},[e._v(" "+e._s(e.icons.facebook)+" ")])],1),t(s.Z,{staticClass:"mx-1 mb-2",attrs:{fab:"","x-small":"",color:"white"}},[t(c.Z,{attrs:{color:"cyan"}},[e._v(" "+e._s(e.icons.twitter)+" ")])],1),t(s.Z,{staticClass:"mx-1 mb-2",attrs:{fab:"","x-small":"",color:"white"}},[t(c.Z,{attrs:{color:"red"}},[e._v(" "+e._s(e.icons.google)+" ")])],1),t(s.Z,{staticClass:"mx-1 mb-2",attrs:{fab:"","x-small":"",color:"white"}},[t(c.Z,{attrs:{color:"indigo"}},[e._v(" "+e._s(e.icons.linked)+" ")])],1)],1)],1),t("div",{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInRight"},expression:"{animationClass:'animate__animated animate__fadeInRight'}"}],staticClass:"my-16",attrs:{"max-width":"374"}},[t("h6",[e._v("ADDRESS")]),t(o.Z,{staticClass:"mr-4 my-2"}),t("p",[t(c.Z,{attrs:{left:"",color:"#2a93c9",size:"30px"}},[e._v(" "+e._s(e.icons.address)+" ")]),t("span",{staticClass:"text-h6 font-weight-medium",staticStyle:{color:"#757575"}},[e._v(" "+e._s(e.settings.search_address)+" ")])],1)],1),t("div",{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInRight"},expression:"{animationClass:'animate__animated animate__fadeInRight'}"}],staticClass:"mx-auto my-16",attrs:{"max-width":"374"}},[t("h6",[e._v("PHONES")]),t(o.Z,{staticClass:"mr-4 my-2"}),t("p",[t(c.Z,{attrs:{left:"",color:"#2a93c9",size:"30px"}},[e._v(" "+e._s(e.icons.phone)+" ")]),t("span",{staticClass:"text-h6 font-weight-medium",staticStyle:{color:"#757575"}},[e._v(" "+e._s(e.settings.search_phone)+" ")])],1)],1),t("div",{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInRight"},expression:"{animationClass:'animate__animated animate__fadeInRight'}"}],staticClass:"mx-auto my-16",attrs:{"max-width":"374"}},[t("h6",[e._v("E-MAIL")]),t(o.Z,{staticClass:"mr-4 my-2"}),t("p",[t(c.Z,{attrs:{left:"",color:"#2a93c9",size:"30px"}},[e._v(" "+e._s(e.icons.email)+" ")]),t("span",{staticClass:"text-h6 font-weight-medium",staticStyle:{color:"#757575"}},[e._v(" "+e._s(e.settings.search_email)+" ")])],1)],1)])],1)],1)],1)],1)},b=[],C=a(9286),w=function(){var e=this,t=e._self._c;return t(h.Z,{attrs:{height:"450",src:"https://livedemo00.template-help.com/wt_prod-20844/images/breadcrumbs-bg.jpg"}},[t(p.Z,{attrs:{align:"center",justify:"center"}},[t(n.Z,{staticClass:"text-center",attrs:{cols:"12"}},[t("h1",{staticClass:"text-h4 font-weight-bold"},[e._v(" Contact us ")]),t("div",{staticClass:"colorBreads d-flex justify-center"},[t(C.Z,{attrs:{large:"",items:e.items}})],1)])],1)],1)},y=[],I={data(){return{items:[{text:"Home",disabled:!1,href:"/"},{text:"ContactUs",disabled:!0,href:"/contact"}]}}},Z=I,k=a(1001),$=(0,k.Z)(Z,w,y,!1,null,null,null),S=$.exports,V={name:"ContactView",components:{HeroContact:S},data:()=>({icons:{phone:"mdi-phone",email:"mdi-email",address:"mdi-home",facebook:"mdi-facebook",twitter:"mdi-twitter",google:"mdi-google-plus",linked:"mdi-linkedin"},settings:{search_phone:"+963 954763265",search_address:"Syria Damascus",search_email:"info@info.com"},selectRules:[e=>!!e||"Select is required"],items:["Question","Thanks","complain"],text:"welcome to our hotel",snackbar:!1,valid:!0,rules:{required:e=>!!e||"This field is required"},message:"",agreement:!1,firstname:"",lastname:"",nameRules:[e=>!!e||"Name is required",e=>e.length<=40||"Name must be less than 40 characters"],email:"",emailRules:[e=>!!e||"E-mail is required",e=>/.+@.+/.test(e)||"E-mail must be valid"],errors:{}}),methods:{clear(){this.$refs.form.reset()},validate(){this.$refs.form.validate()},send(){const e=this,t={title:e.firstname,type:e.lastname,email:e.email,content:e.message};this.axios.post("/messages",t).then((t=>{console.log(t.data.message),"message was created"===t.data.message&&(e.snackbar=!0)})).catch((t=>{e.errors=t.response.data.errors,console.log(t.response.data.errors)}))}}},L=V,N=(0,k.Z)(L,x,b,!1,null,"da76c00c",null),B=N.exports}}]);
//# sourceMappingURL=contact.fe0ab230.js.map