if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(n[l])return;let c={};const u=e=>s(e,l),o={module:{uri:l},exports:c,require:u};n[l]=Promise.all(i.map((e=>o[e]||u(e)))).then((e=>(r(...e),c)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"search-engine"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/search-engine/css/200.ca9ff243.css",revision:null},{url:"/search-engine/css/311.bfd5fb2c.css",revision:null},{url:"/search-engine/css/500.740b0755.css",revision:null},{url:"/search-engine/css/582.5fffeac8.css",revision:null},{url:"/search-engine/css/808.bd217dc0.css",revision:null},{url:"/search-engine/css/961.ca9ff243.css",revision:null},{url:"/search-engine/css/about.d0e33ea5.css",revision:null},{url:"/search-engine/css/app.191156fb.css",revision:null},{url:"/search-engine/css/chunk-vendors.8800a5e2.css",revision:null},{url:"/search-engine/css/contact.aaee03cb.css",revision:null},{url:"/search-engine/css/login.3aee32f3.css",revision:null},{url:"/search-engine/img/Amar.18d099a6.jpg",revision:null},{url:"/search-engine/img/Dr.Mohmad.e95177bb.jpg",revision:null},{url:"/search-engine/img/Dr.Mohmmad.5e38e02d.jpg",revision:null},{url:"/search-engine/img/Lana.b8302527.jpg",revision:null},{url:"/search-engine/img/Reem.7aa63209.png",revision:null},{url:"/search-engine/img/login.725e0aef.png",revision:null},{url:"/search-engine/img/logo.4d6033c9.svg",revision:null},{url:"/search-engine/img/logo1.d6b7bcec.png",revision:null},{url:"/search-engine/img/logo2.8aec95e9.png",revision:null},{url:"/search-engine/img/logo3.68ea4397.png",revision:null},{url:"/search-engine/img/undraw_medicine_b1ol (2).89bf76b2.png",revision:null},{url:"/search-engine/index.html",revision:"e81cdb83610d722c4457f4ffd4527950"},{url:"/search-engine/js/200.ed35d4ca.js",revision:null},{url:"/search-engine/js/311.def3ed2f.js",revision:null},{url:"/search-engine/js/424.f6038be0.js",revision:null},{url:"/search-engine/js/479.888470b1.js",revision:null},{url:"/search-engine/js/500.db8653b1.js",revision:null},{url:"/search-engine/js/582.3e3bd2f3.js",revision:null},{url:"/search-engine/js/808.8e7f2fe5.js",revision:null},{url:"/search-engine/js/961.0c24e49d.js",revision:null},{url:"/search-engine/js/about.3fab8ffe.js",revision:null},{url:"/search-engine/js/app.b855bdcb.js",revision:null},{url:"/search-engine/js/chunk-vendors.c750b36a.js",revision:null},{url:"/search-engine/js/companies.7511bd8f.js",revision:null},{url:"/search-engine/js/contact.fe0ab230.js",revision:null},{url:"/search-engine/js/login.cd95ec4b.js",revision:null},{url:"/search-engine/js/search-company.7f6e4132.js",revision:null},{url:"/search-engine/js/search-medicine.625695e6.js",revision:null},{url:"/search-engine/manifest.json",revision:"76b409d838eb1be17087a8969fa01165"},{url:"/search-engine/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map