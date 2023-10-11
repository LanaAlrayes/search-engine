"use strict";(self["webpackChunksearch_engine"]=self["webpackChunksearch_engine"]||[]).push([[582],{120:function(e,t,a){a.d(t,{Z:function(){return c}});var i=a(2240),s=a(573),n=a(7069),r=a(144),o=r.ZP.extend({name:"rippleable",directives:{ripple:n.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(e={}){return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}}),l=a(6174),u=a(7678);function m(e){e.preventDefault()}var d=(0,u.Z)(s.Z,o,l.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const e=this.value,t=this.internalValue;return this.isMultiple?!!Array.isArray(t)&&t.some((t=>this.valueComparator(t,e))):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,t):Boolean(t):this.valueComparator(t,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel(){const e=s.Z.options.methods.genLabel.call(this);return e?(e.data.on={click:m},e):e},genInput(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:m},ref:"input"})},onClick(e){this.onChange(),this.$emit("click",e)},onChange(){if(!this.isInteractive)return;const e=this.value;let t=this.internalValue;if(this.isMultiple){Array.isArray(t)||(t=[]);const a=t.length;t=t.filter((t=>!this.valueComparator(t,e))),t.length===a&&t.push(e)}else t=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(t,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(t,e)?null:e:!t;this.validate(!0,t),this.internalValue=t,this.hasColor=t},onFocus(e){this.isFocused=!0,this.$emit("focus",e)},onBlur(e){this.isFocused=!1,this.$emit("blur",e)},onKeydown(e){}}}),c=d.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...s.Z.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(e){this.$nextTick((()=>this.inputIndeterminate=e))},inputIndeterminate(e){this.$emit("update:indeterminate",e)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:e,...t}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(i.Z,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...t,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},6582:function(e,t,a){a.r(t),a.d(t,{default:function(){return N}});var i=function(){var e=this,t=e._self._c;return t("div",[t("hero-companies"),t("add-companies")],1)},s=[],n=a(266),r=a(9258),o=a(1713),l=function(){var e=this,t=e._self._c;return t(r.Z,{staticClass:"mt-16",attrs:{height:"450",src:"https://ld-wt73.template-help.com/wt_prod-20176/images/background-breadcrumbs-01-1920x345.jpg"}},[t(o.Z,{attrs:{align:"center",justify:"center"}},[t(n.Z,{staticClass:"text-center",attrs:{cols:"12"}},[t("h1",{staticClass:"text-h4 font-weight-bold"},[e._v(" Store information about companies ")])])],1)],1)},u=[],m={data(){}},d=m,c=a(1001),h=(0,c.Z)(d,l,u,!1,null,null,null),p=h.exports,v=a(6190),f=a(120),_=a(2118),b=a(4324),y=a(7808),C=function(){var e=this,t=e._self._c;return t(r.Z,{attrs:{height:"100%",src:"https://demo.themexbd.com/rtl/smartdev/wp-content/uploads/2021/06/choose-bg.png"}},[t(_.Z,[t("div",{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInLeft"},expression:"{animationClass:'animate__animated animate__fadeInLeft'}"}],staticClass:"text-h4 mx-auto my-12 text--primary"},[e._v(" You can add the company now ")]),t(o.Z,[t(n.Z,{attrs:{cols:"10"}},[t("validation-observer",{ref:"observer"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t(o.Z,[t(n.Z,{attrs:{cols:"9"}},[t("validation-provider",{attrs:{name:"companyName",rules:"required|max:40"},scopedSlots:e._u([{key:"default",fn:function({errors:a}){return[t(y.Z,{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInLeft"},expression:"{animationClass:'animate__animated animate__fadeInLeft'}"}],attrs:{counter:40,"error-messages":a,label:"Company Name",required:"",outlined:""},model:{value:e.companyName,callback:function(t){e.companyName=t},expression:"companyName"}})]}}])}),t("validation-provider",{attrs:{name:"summary"},scopedSlots:e._u([{key:"default",fn:function({errors:a}){return[t(y.Z,{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInLeft"},expression:"{animationClass:'animate__animated animate__fadeInLeft'}"}],attrs:{"error-messages":a,label:"Summary",required:"",outlined:""},model:{value:e.summary,callback:function(t){e.summary=t},expression:"summary"}})]}}])}),t("validation-provider",{attrs:{name:"companyAddress",rules:"required|max:50"},scopedSlots:e._u([{key:"default",fn:function({errors:a}){return[t(y.Z,{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInLeft"},expression:"{animationClass:'animate__animated animate__fadeInLeft'}"}],attrs:{counter:50,"error-messages":a,label:"Company Address",required:"",outlined:""},model:{value:e.companyAddress,callback:function(t){e.companyAddress=t},expression:"companyAddress"}})]}}])}),t("validation-provider",{attrs:{name:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function({errors:a}){return[t(y.Z,{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInLeft"},expression:"{animationClass:'animate__animated animate__fadeInLeft'}"}],attrs:{"error-messages":a,label:"E-mail",required:"",outlined:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})]}}])}),t("validation-provider",{attrs:{name:"numberProducts",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function({errors:a}){return[t(y.Z,{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInLeft"},expression:"{animationClass:'animate__animated animate__fadeInLeft'}"}],attrs:{counter:10,"error-messages":a,label:"Number of Products",required:"",outlined:""},model:{value:e.numberProducts,callback:function(t){e.numberProducts=t},expression:"numberProducts"}})]}}])})],1)],1),t("validation-provider",{attrs:{rules:"required",name:"checkbox"},scopedSlots:e._u([{key:"default",fn:function({errors:a}){return[t(f.Z,{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInLeft"},expression:"{animationClass:'animate__animated animate__fadeInLeft'}"}],attrs:{"error-messages":a,value:"1",label:"Option",type:"ch\n              outlinedeckbox",required:""},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}})]}}])}),t(v.Z,{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInLeft"},expression:"{animationClass:'animate__animated animate__fadeInLeft'}"}],staticClass:"mr-4",attrs:{color:"success",type:"submit"},on:{click:e.validate}},[e._v(" submit ")]),t(v.Z,{directives:[{name:"vue-aos",rawName:"v-vue-aos",value:{animationClass:"animate__animated animate__fadeInLeft"},expression:"{animationClass:'animate__animated animate__fadeInLeft'}"}],on:{click:e.clear}},[e._v(" clear ")])],1)])],1),t(n.Z,{attrs:{cols:"2"}},[t(v.Z,{staticClass:"myfirst",attrs:{to:{name:"DataCompanyView"},fab:""}},[t(b.Z,{attrs:{size:"40",color:"blue darken-4"}},[e._v(" mdi-database-eye-outline ")])],1)],1)],1)],1)],1)},x=[],g=a(4479),k=a(2954);(0,k.UF)("eager"),(0,k.l7)("required",{...g.C1,message:"{_field_} can not be empty"}),(0,k.l7)("max",{...g.Fp,message:"{_field_} may not be greater than {length} characters"}),(0,k.l7)("email",{...g.Do,message:"Email must be valid"});var I={components:{ValidationProvider:k.d_,ValidationObserver:k._j},data:()=>({company:[],companyName:"",summary:"",companyAddress:"",email:"",numberProducts:"",checkbox:null}),methods:{submit(){const e={name:this.companyName,summary:this.summary,website:this.companyAddress,email:this.email,count:this.numberProducts};this.axios.post("/company_add/",e).then((e=>{"Company has added"===e.data?window.location="/data-company":window.location="/add-companies"})),this.$refs.observer.validate()},validate(){this.$refs.form.validate()},clear(){this.companyName="",this.summary="",this.companyAddress="",this.email="",this.numberProducts="",this.checkbox=null,this.$refs.observer.reset()}}},Z=I,w=(0,c.Z)(Z,C,x,!1,null,"10369cce",null),V=w.exports,A={name:"AddCompaniesView",components:{HeroCompanies:p,AddCompanies:V}},S=A,L=(0,c.Z)(S,i,s,!1,null,null,null),N=L.exports}}]);
//# sourceMappingURL=582.3e3bd2f3.js.map