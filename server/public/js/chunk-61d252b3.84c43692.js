(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61d252b3"],{"046e":function(t,n,r){"use strict";r.r(n);var i=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"member container",attrs:{id:"member"}},[r("div",{staticClass:"member-title"},[t._v("成员介绍")]),r("div",[r("div",{staticClass:"pcavatar"},[t._l(t.imgs,function(t){return[r("Avatar",{key:t.no,attrs:{imgsrc:t.imgsrc,row:t.row,col:t.col,no:t.no,name:t.name}})]})],2),r("div",{staticClass:"phoneavatar"},[r("phoneavatar",{attrs:{avatarimg:t.imgs}})],1)])])},o=[],s=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"member-img",attrs:{id:t.no}},[r("div",{staticClass:"img-top"},[r("div",{staticClass:"img-top-avatar"},[r("img",{attrs:{src:t.imgsrc,alt:""}})]),r("div",{staticClass:"img-top-title"},[t._v("\n\t\t\t"+t._s(t.name)+"\n\t\t")])]),r("div",{staticClass:"img-transfer"},[r("div",{staticClass:"img-foot"},[r("img",{attrs:{src:t.imgsrc,alt:""}})])])])},a=[],c={props:["imgsrc","row","col","no","name"],data:function(){return{}},mounted:function(){var t=document.querySelector("#".concat(this.no)),n=200*(this.col-1),r=100*(this.row-1);this.row%2==0||(n+=100),r+=50,n+="px",r+="px",console.log(n,r),t.style.top=r,t.style.left=n}},e=c,u=(r("ae03"),r("2877")),f=Object(u["a"])(e,s,a,!1,null,null,null),p=f.exports,l=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"demo"},[r("el-row",[r("el-col",{attrs:{span:12}},[t.imgs[0]?r("div",{staticClass:"showMsg"},[r("img",{attrs:{src:t.imgs[0].imgsrc,alt:""}})]):t._e()]),r("el-col",{attrs:{span:12}},[r("div",{staticClass:"a-content"},[r("div",{staticClass:"a-content-title"},[t._v("\n                    "+t._s(this.imgs[0]?this.imgs[0].name:"")+"\n                ")]),r("div",{staticClass:"a-content-p"},[t._v("\n                    "+t._s(this.imgs[0]?this.imgs[0].p:"")+"\n                ")])])])],1),r("transition-group",{staticClass:"a-container",attrs:{name:"cells",tag:"div"}},t._l(t.imgs,function(n,i){return r("div",{key:n.no,staticClass:"cell",on:{"!click":function(n){return n.stopPropagation(),t.shut(i)}}},[r("div",[r("img",{attrs:{src:n.imgsrc}})])])}),0)],1)},m=[],h=r("a745"),g=r.n(h);function v(t){if(g()(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}var d=r("774e"),b=r.n(d),y=r("c8bb"),x=r.n(y);function w(t){if(x()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return b()(t)}function _(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function j(t){return v(t)||w(t)||_()}r("6d67");var F={props:["avatarimg"],data:function(){return{imgs:[],cells:Array.apply(null,{length:81}).map(function(t,n){return{id:n,number:n%9+1}})}},methods:{shut:function(t){var n,r=this;clearInterval(this.$timeout),(n=this.imgs).unshift.apply(n,j(this.imgs.splice(t,1))),this.$timeout=setInterval(function(){r.shuffle()},3e3)},shuffle:function(){this.imgs.unshift(this.imgs.pop())}},mounted:function(){var t=this;this.imgs=this.avatarimg,this.$timeout=setInterval(function(){t.shuffle()},3e3)}},A=F,k=(r("eaff"),Object(u["a"])(A,l,m,!1,null,null,null)),S=k.exports,C={components:{Avatar:p,phoneavatar:S},data:function(){return{imgs:[{imgsrc:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1004953359,2131419137&fm=11&gp=0.jpg",row:"1",col:"1",no:"kjl",name:"杰罗姆",p:"不要因为没有掌声就放弃梦想"},{imgsrc:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3155998395,3600507640&fm=26&gp=0.jpg",row:"1",col:"2",no:"yui",name:"伊迪斯",p:"但愿日子清静，抬头遇见的都是柔情"},{imgsrc:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1709216491,2536617744&fm=26&gp=0.jpg",row:"1",col:"3",no:"fhj",name:"阿尔瓦",p:"对于值得与热爱的事情，就要做到极致"},{imgsrc:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=181054249,3834661047&fm=11&gp=0.jpg",row:"1",col:"4",no:"ddd",name:"埃琳娜",p:"你什么都不知道，包括我喜欢你"},{imgsrc:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1475331839,2066156315&fm=26&gp=0.jpg",row:"1",col:"5",no:"dfg",name:"亚伯拉罕",p:"活得太清醒本就是件不浪漫的事"},{imgsrc:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1545190233,2172456233&fm=26&gp=0.jpg",row:"2",col:"2",no:"sfgfh",name:"伊斯特尔",p:"火苗再小，也可以反复点燃"},{imgsrc:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3641306367,2787304394&fm=26&gp=0.jpg",row:"2",col:"3",no:"ghj",name:"安东尼",p:"总要尝遍所有的路，在对生活充满期待"},{imgsrc:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2013128738,1744245349&fm=26&gp=0.jpg",row:"2",col:"4",no:"asfgfg",name:"洛福斯",p:"从此天光大亮，你是我全部的渴望与幻想"},{imgsrc:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3222454269,3484359568&fm=26&gp=0.jpg",row:"2",col:"5",no:"ktyu",name:"埃尔维斯",p:"所有的温柔都源于你的强大"},{imgsrc:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2622623191,3152180496&fm=26&gp=0.jpg",row:"3",col:"2",no:"yjkh",name:"埃德温",p:"努力让自己发光，对的人才会迎光而来"},{imgsrc:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=155684591,2266874896&fm=11&gp=0.jpg",row:"3",col:"3",no:"ghkn",name:"格伦",p:"记得在这杂乱的生活里，每天带点笑意"},{imgsrc:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1709644436,2739756540&fm=26&gp=0.jpg",row:"3",col:"4",no:"hjkty",name:"\t伊迪斯",p:"有人喝了酒眼睛亮闪闪的讲浪漫和爱"},{imgsrc:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2100401123,2895311668&fm=26&gp=0.jpg",row:"5",col:"3",no:"htj",name:"沃伦",p:"你的心，是我想要到达的蔚蓝海岸"}]}},methods:{},mounted:function(){}},H=C,G=(r("4b21"),Object(u["a"])(H,i,o,!1,null,null,null));n["default"]=G.exports},"0a49":function(t,n,r){var i=r("9b43"),o=r("626a"),s=r("4bf8"),a=r("9def"),c=r("cd1c");t.exports=function(t,n){var r=1==t,e=2==t,u=3==t,f=4==t,p=6==t,l=5==t||p,m=n||c;return function(n,c,h){for(var g,v,d=s(n),b=o(d),y=i(c,h,3),x=a(b.length),w=0,_=r?m(n,x):e?m(n,0):void 0;x>w;w++)if((l||w in b)&&(g=b[w],v=y(g,w,d),t))if(r)_[w]=v;else if(v)switch(t){case 3:return!0;case 5:return g;case 6:return w;case 2:_.push(g)}else if(f)return!1;return p?-1:u||f?f:_}}},1169:function(t,n,r){var i=r("2d95");t.exports=Array.isArray||function(t){return"Array"==i(t)}},"1af6":function(t,n,r){var i=r("63b6");i(i.S,"Array",{isArray:r("9003")})},"20fd":function(t,n,r){"use strict";var i=r("d9f6"),o=r("aebd");t.exports=function(t,n,r){n in t?i.f(t,n,o(0,r)):t[n]=r}},"2f21":function(t,n,r){"use strict";var i=r("79e5");t.exports=function(t,n){return!!t&&i(function(){n?t.call(null,function(){},1):t.call(null)})}},3702:function(t,n,r){var i=r("481b"),o=r("5168")("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||s[o]===t)}},"40c3":function(t,n,r){var i=r("6b4c"),o=r("5168")("toStringTag"),s="Arguments"==i(function(){return arguments}()),a=function(t,n){try{return t[n]}catch(r){}};t.exports=function(t){var n,r,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=a(n=Object(t),o))?r:s?i(n):"Object"==(c=i(n))&&"function"==typeof n.callee?"Arguments":c}},"4b21":function(t,n,r){"use strict";var i=r("7caa"),o=r.n(i);o.a},"4ee1":function(t,n,r){var i=r("5168")("iterator"),o=!1;try{var s=[7][i]();s["return"]=function(){o=!0},Array.from(s,function(){throw 2})}catch(a){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var s=[7],c=s[i]();c.next=function(){return{done:r=!0}},s[i]=function(){return c},t(s)}catch(a){}return r}},"549b":function(t,n,r){"use strict";var i=r("d864"),o=r("63b6"),s=r("241e"),a=r("b0dc"),c=r("3702"),e=r("b447"),u=r("20fd"),f=r("7cd6");o(o.S+o.F*!r("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var n,r,o,p,l=s(t),m="function"==typeof this?this:Array,h=arguments.length,g=h>1?arguments[1]:void 0,v=void 0!==g,d=0,b=f(l);if(v&&(g=i(g,h>2?arguments[2]:void 0,2)),void 0==b||m==Array&&c(b))for(n=e(l.length),r=new m(n);n>d;d++)u(r,d,v?g(l[d],d):l[d]);else for(p=b.call(l),r=new m;!(o=p.next()).done;d++)u(r,d,v?a(p,g,[o.value,d],!0):o.value);return r.length=d,r}})},"54a1":function(t,n,r){r("6c1c"),r("1654"),t.exports=r("95d5")},"6d67":function(t,n,r){"use strict";var i=r("5ca1"),o=r("0a49")(1);i(i.P+i.F*!r("2f21")([].map,!0),"Array",{map:function(t){return o(this,t,arguments[1])}})},"6f3b":function(t,n,r){},"774e":function(t,n,r){t.exports=r("d2d5")},"7caa":function(t,n,r){},"7cd6":function(t,n,r){var i=r("40c3"),o=r("5168")("iterator"),s=r("481b");t.exports=r("584a").getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||s[i(t)]}},"95d5":function(t,n,r){var i=r("40c3"),o=r("5168")("iterator"),s=r("481b");t.exports=r("584a").isIterable=function(t){var n=Object(t);return void 0!==n[o]||"@@iterator"in n||s.hasOwnProperty(i(n))}},a745:function(t,n,r){t.exports=r("f410")},aacb:function(t,n,r){},ae03:function(t,n,r){"use strict";var i=r("6f3b"),o=r.n(i);o.a},b0dc:function(t,n,r){var i=r("e4ae");t.exports=function(t,n,r,o){try{return o?n(i(r)[0],r[1]):n(r)}catch(a){var s=t["return"];throw void 0!==s&&i(s.call(t)),a}}},c8bb:function(t,n,r){t.exports=r("54a1")},cd1c:function(t,n,r){var i=r("e853");t.exports=function(t,n){return new(i(t))(n)}},d2d5:function(t,n,r){r("1654"),r("549b"),t.exports=r("584a").Array.from},e853:function(t,n,r){var i=r("d3f4"),o=r("1169"),s=r("2b4c")("species");t.exports=function(t){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)||(n=void 0),i(n)&&(n=n[s],null===n&&(n=void 0))),void 0===n?Array:n}},eaff:function(t,n,r){"use strict";var i=r("aacb"),o=r.n(i);o.a},f410:function(t,n,r){r("1af6"),t.exports=r("584a").Array.isArray}}]);
//# sourceMappingURL=chunk-61d252b3.84c43692.js.map