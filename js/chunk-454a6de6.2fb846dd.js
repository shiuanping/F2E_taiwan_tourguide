(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-454a6de6"],{"047f":function(t,e,a){"use strict";var n=a("7a23"),c={class:"VertCard_header"},i={class:"location"},o=Object(n["h"])("i",{class:"fas fa-map-marker-alt"},null,-1);function r(t,e,a,r,l,u){return Object(n["u"])(),Object(n["g"])("div",{class:"VertCard",onClick:e[0]||(e[0]=function(){return u.modalOpen&&u.modalOpen.apply(u,arguments)})},[Object(n["h"])("div",c,[Object(n["h"])("div",{class:"VertCard_img",style:Object(n["q"])({background:t.haveData(a.data.Picture)?"url(".concat(a.data.Picture.PictureUrl1,") bottom center / cover"):"url(".concat(t.noImageUrl_s,") center / cover")})},null,4),Object(n["h"])("h4",null,Object(n["B"])(a.data.Name),1)]),Object(n["h"])("div",i,[o,Object(n["h"])("p",null,Object(n["B"])(t.handleAddress(a.data.Address)),1)])])}var l=a("2708"),u={props:{data:Object},mixins:[l["a"]],data:function(){return{openModal:!0}},computed:{locationAry:function(){return this.handleAddress(this.data.Address)}},methods:{modalOpen:function(){this.$emit("openModal",this.openModal),this.$emit("detail",this.data)}}},s=a("6b0d"),d=a.n(s);const b=d()(u,[["render",r]]);e["a"]=b},"0bc2":function(t,e,a){t.exports=a.p+"img/TaitungCounty.a752403b.png"},2532:function(t,e,a){"use strict";var n=a("23e7"),c=a("e330"),i=a("5a34"),o=a("1d80"),r=a("577e"),l=a("ab13"),u=c("".indexOf);n({target:"String",proto:!0,forced:!l("includes")},{includes:function(t){return!!~u(r(o(this)),r(i(t)),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(t,e,a){"use strict";var n=a("e330"),c=a("5e77").PROPER,i=a("6eeb"),o=a("825a"),r=a("3a9b"),l=a("577e"),u=a("d039"),s=a("ad6d"),d="toString",b=RegExp.prototype,O=b[d],j=n(s),h=u((function(){return"/a/b"!=O.call({source:"a",flags:"b"})})),f=c&&O.name!=d;(h||f)&&i(RegExp.prototype,d,(function(){var t=o(this),e=l(t.source),a=t.flags,n=l(void 0===a&&r(b,t)&&!("flags"in b)?j(t):a);return"/"+e+"/"+n}),{unsafe:!0})},"3a5e":function(t,e,a){"use strict";var n=a("7a23"),c={class:"loading"};function i(t,e,a,i,o,r){var l=Object(n["z"])("Triangle"),u=Object(n["z"])("Square"),s=Object(n["z"])("Circle");return Object(n["u"])(),Object(n["g"])("div",c,[Object(n["j"])(l),Object(n["j"])(u),Object(n["j"])(s)])}var o=a("803d"),r=a("ea14"),l={class:"circle"};function u(t,e){return Object(n["u"])(),Object(n["g"])("div",l)}var s=a("6b0d"),d=a.n(s);const b={},O=d()(b,[["render",u]]);var j=O,h={components:{Triangle:o["a"],Square:r["a"],Circle:j}};const f=d()(h,[["render",i]]);e["a"]=f},"44e7":function(t,e,a){var n=a("861d"),c=a("c6b6"),i=a("b622"),o=i("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==c(t))}},"4de4":function(t,e,a){"use strict";var n=a("23e7"),c=a("b727").filter,i=a("1dde"),o=i("filter");n({target:"Array",proto:!0,forced:!o},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(t,e,a){var n=a("da84"),c=a("44e7"),i=n.TypeError;t.exports=function(t){if(c(t))throw i("The method doesn't accept regular expressions");return t}},"7a06":function(t,e,a){"use strict";var n=a("7a23"),c={class:"layout"},i={class:"infoModal"},o={class:"infoModal_inner"},r={key:2,class:"infoModal_pictureBar"},l=Object(n["h"])("button",{class:"pre_btn btn icon_btn"},[Object(n["h"])("i",{class:"fas fa-caret-left"})],-1),u=[l],s=Object(n["h"])("button",{class:"next_btn btn icon_btn"},[Object(n["h"])("i",{class:"fas fa-caret-right"})],-1),d=[s],b={class:"infoModal_desc"},O={class:"infoModal_infoList"},j=Object(n["h"])("span",null,[Object(n["h"])("i",{class:"far fa-clock"})],-1),h=Object(n["h"])("span",null,[Object(n["h"])("i",{class:"fas fa-map-marker-alt"})],-1),f=Object(n["h"])("span",null,[Object(n["h"])("i",{class:"fas fa-phone-alt"})],-1),p={href:"tel:+"},g={key:0},v=Object(n["h"])("span",null,[Object(n["h"])("i",{class:"fas fa-parking"})],-1),m=Object(n["h"])("i",{class:"fas fa-times"},null,-1),y=[m];function C(t,e,a,l,s,m){return Object(n["u"])(),Object(n["g"])("div",c,[Object(n["h"])("div",i,[Object(n["h"])("div",o,[t.haveData(a.data.Picture)?Object(n["f"])("",!0):(Object(n["u"])(),Object(n["g"])("div",{key:0,class:"infoModal_img",style:Object(n["q"])({background:"url(".concat(t.noImageUrl_l,") center / cover")})},null,4)),t.haveData(a.data.Picture)?(Object(n["u"])(),Object(n["g"])("div",{key:1,class:"infoModal_img",style:Object(n["q"])({background:"url(".concat(s.pictureList[s.currentPicture],") no-repeat center bottom / contain")})},null,4)):Object(n["f"])("",!0),t.haveData(a.data.Picture)?(Object(n["u"])(),Object(n["g"])("ul",r,[Object(n["h"])("li",{onClick:e[0]||(e[0]=function(){return m.prePicture&&m.prePicture.apply(m,arguments)}),class:Object(n["p"])({hide:s.currentPicture<=0})},u,2),Object(n["h"])("li",{onClick:e[1]||(e[1]=function(){return m.nextPicture&&m.nextPicture.apply(m,arguments)}),class:Object(n["p"])({hide:s.currentPicture>=s.pictureList.length-1})},d,2)])):Object(n["f"])("",!0),Object(n["h"])("h2",null,Object(n["B"])(a.data.Name),1),Object(n["h"])("p",b,Object(n["B"])(a.data.Description),1),Object(n["h"])("ul",O,[Object(n["h"])("li",null,[j,Object(n["h"])("p",null,Object(n["B"])(a.data.StartTime?a.data.StartTime:a.data.OpenTime?a.data.OpenTime:"無"),1)]),Object(n["h"])("li",null,[h,Object(n["h"])("p",null,Object(n["B"])(a.data.Address?a.data.Address:a.data.Location?a.data.Location:"無"),1)]),Object(n["h"])("li",null,[f,Object(n["h"])("p",null,[Object(n["h"])("a",p,Object(n["B"])(a.data.Phone?a.data.Phone:"無"),1)])]),a.data.ParkingInfo?(Object(n["u"])(),Object(n["g"])("li",g,[v,Object(n["h"])("p",null,Object(n["B"])(a.data.ParkingInfo),1)])):Object(n["f"])("",!0)])]),Object(n["h"])("button",{class:"infoModal_close btn icon_btn",onClick:e[2]||(e[2]=function(){return m.modalClose&&m.modalClose.apply(m,arguments)})},y)])])}var P=a("b85c"),k=(a("d3b7"),a("25f0"),a("4de4"),a("b64b"),a("caad"),a("2532"),a("2708")),_={props:{data:Object},mixins:[k["a"]],data:function(){return{openModal:!1,pictureList:[],currentPicture:0}},methods:{modalClose:function(){this.$emit("closeModal",this.openModal)},pictureKey:function(){return"PictureUrl"+this.currentPicture.toString()},prePicture:function(){this.currentPicture-=1},nextPicture:function(){this.currentPicture+=1}},mounted:function(){var t,e=Object.keys(this.data.Picture).filter((function(t){return t.includes("Url")})),a=Object(P["a"])(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;this.pictureList.push(this.data.Picture[n])}}catch(c){a.e(c)}finally{a.f()}}},M=a("6b0d"),x=a.n(M);const S=x()(_,[["render",C]]);e["a"]=S},"803d":function(t,e,a){"use strict";var n=a("7a23"),c={class:"triangle"};function i(t,e){return Object(n["u"])(),Object(n["g"])("div",c)}var o=a("6b0d"),r=a.n(o);const l={},u=r()(l,[["render",i]]);e["a"]=u},a706:function(t,e,a){"use strict";a.r(e);a("fb6a");var n=a("7a23"),c={key:1},i={class:"hot_location"},o={class:"title"},r=Object(n["i"])("熱門城市"),l={class:"hot_location_content"},u=Object(n["h"])("i",{class:"fas fa-caret-left"},null,-1),s=[u],d=Object(n["h"])("i",{class:"fas fa-caret-right"},null,-1),b=[d],O={class:"hot_activity"},j={class:"title"},h=Object(n["i"])("熱門活動"),f={class:"card_container"},p={class:"hot_food"},g={class:"title"},v=Object(n["i"])("熱門餐飲"),m={class:"card_container"};function y(t,e,a,u,d,y){var C=Object(n["z"])("Loading"),P=Object(n["z"])("Triangle"),k=Object(n["z"])("ImageCard"),_=Object(n["z"])("HorCard"),M=Object(n["z"])("Square"),x=Object(n["z"])("VertCard"),S=Object(n["z"])("InfoModal");return Object(n["u"])(),Object(n["g"])(n["a"],null,[d.isLoading?(Object(n["u"])(),Object(n["e"])(C,{key:0})):Object(n["f"])("",!0),d.isLoading?Object(n["f"])("",!0):(Object(n["u"])(),Object(n["g"])("div",c,[Object(n["h"])("section",i,[Object(n["h"])("h3",o,[Object(n["j"])(P),r]),Object(n["h"])("div",l,[7==d.locationPage?(Object(n["u"])(),Object(n["g"])("button",{key:0,class:"btn icon_btn",onClick:e[0]||(e[0]=function(t){return d.locationPage=0})},s)):Object(n["f"])("",!0),(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["y"])(d.location.slice(d.locationPage,d.locationPage+7),(function(t,e){return Object(n["u"])(),Object(n["e"])(k,{value:t.value,Key:e,class:Object(n["p"])([e%3==0?"card_col_odd":"card_col_even"]),location:t},null,8,["value","Key","class","location"])})),256)),0==d.locationPage?(Object(n["u"])(),Object(n["g"])("button",{key:1,class:"btn icon_btn",onClick:e[1]||(e[1]=function(t){return d.locationPage=7})},b)):Object(n["f"])("",!0)])]),Object(n["h"])("section",O,[Object(n["h"])("h3",j,[Object(n["j"])(P),h]),Object(n["h"])("div",f,[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["y"])(d.activity,(function(t,e){return Object(n["u"])(),Object(n["e"])(_,{key:e,data:t,onOpenModal:y.getModalStatus,onDetail:y.getDetail},null,8,["data","onOpenModal","onDetail"])})),128))])]),Object(n["h"])("section",p,[Object(n["h"])("h3",g,[Object(n["j"])(M),v]),Object(n["h"])("div",m,[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["y"])(d.restaurant,(function(t,e){return Object(n["u"])(),Object(n["e"])(x,{key:e,data:t,onOpenModal:y.getModalStatus,onDetail:y.getDetail},null,8,["data","onOpenModal","onDetail"])})),128))])]),Object(n["j"])(n["b"],{name:"modal"},{default:Object(n["G"])((function(){return[d.openModal?(Object(n["u"])(),Object(n["e"])(S,{key:0,onCloseModal:y.getModalStatus,data:d.detail},null,8,["onCloseModal","data"])):Object(n["f"])("",!0)]})),_:1})]))],64)}a("d3b7");var C=a("803d"),P=a("ea14"),k=Object(n["h"])("span",null,[Object(n["h"])("i",{class:"fas fa-map-marker-alt"})],-1);function _(t,e,a,c,i,o){var r=Object(n["z"])("router-link");return Object(n["u"])(),Object(n["e"])(r,{class:"imageCard",to:{name:"Search",query:{searchType:"city",keyWord:"",type:"ScenicSpot",city:a.value}}},{default:Object(n["G"])((function(){return[Object(n["h"])("div",{class:"imageCard_inner",style:Object(n["q"])({backgroundImage:"url(".concat(a.location.picture,")")})},[k,Object(n["h"])("p",null,Object(n["B"])(a.location.title),1)],4)]})),_:1},8,["to"])}var M={props:{location:Object,value:String}},x=a("6b0d"),S=a.n(x);const T=S()(M,[["render",_]]);var A=T;a("a4d3"),a("e01a"),a("d28b"),a("3ca3"),a("ddb0");function D(t){return D="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}var L={class:"horCard"},z={class:"horCard_content"},B={class:"horCard_para"},q={class:"horCard_footer"},w={class:"location"},I=Object(n["h"])("i",{class:"fas fa-map-marker-alt"},null,-1);function N(t,e,a,c,i,o){return Object(n["u"])(),Object(n["g"])("div",L,[Object(n["h"])("div",{class:"horCard_img",style:Object(n["q"])({background:t.haveData(a.data.Picture)?"url(".concat(a.data.Picture.PictureUrl1,") center / cover"):"url(".concat(t.noImageUrl_m,") center / cover")})},null,4),Object(n["h"])("div",z,[Object(n["h"])("div",null,[Object(n["h"])("h4",{onClick:e[0]||(e[0]=function(){return t.passActivityData&&t.passActivityData.apply(t,arguments)})},Object(n["B"])(a.data.Name),1),Object(n["h"])("p",B,Object(n["B"])(a.data.Description),1)]),Object(n["h"])("div",q,[Object(n["h"])("div",w,[I,Object(n["h"])("p",null,Object(n["B"])("object"===D(o.locationAry)?o.locationAry.length>1?o.locationAry[0]+" "+o.locationAry[1]:o.locationAry[0]:a.data.Location),1)]),Object(n["h"])("button",{class:"btn",onClick:e[1]||(e[1]=function(){return o.modalOpen&&o.modalOpen.apply(o,arguments)})}," 活動詳情 ")])])])}var R=a("2708"),H={props:{data:Object},mixins:[R["a"]],data:function(){return{openModal:!0}},computed:{locationAry:function(){return this.handleAddress(this.data.Location)?this.handleAddress(this.data.Location):this.data.Location}},methods:{modalOpen:function(){this.$emit("openModal",this.openModal),this.$emit("detail",this.data)}}};const U=S()(H,[["render",N]]);var $=U,E=a("047f"),K=a("3a5e"),V=a("7a06"),G={data:function(){return{location:[{title:"台北市",value:"Taipei",picture:a("456d")},{title:"新北市",value:"NewTaipei",picture:a("5233")},{title:"桃園市",value:"Taoyuan",picture:a("eb6b")},{title:"新竹市",value:"Hsinchu",picture:a("00da")},{title:"台    中",value:"Taichung",picture:a("e2b0")},{title:"南    投",value:"NantouCounty",picture:a("c9a7")},{title:"嘉    義",value:"Chiayi",picture:a("54c6")},{title:"台    南",value:"Tainan",picture:a("bd22")},{title:"高    雄",value:"Kaohsiung",picture:a("e4d4")},{title:"屏    東",value:"PingtungCounty",picture:a("da81")},{title:"宜    蘭",value:"YilanCounty",picture:a("fa86")},{title:"花    蓮",value:"HualienCounty",picture:a("f05b")},{title:"台    東",value:"TaitungCounty",picture:a("0bc2")},{title:"金門馬祖.澎湖",value:"PenghuCounty",picture:a("efa7")}],restaurant:[],activity:[],locationPage:0,openModal:!1,detail:{},isLoading:!0}},components:{ImageCard:A,HorCard:$,VertCard:E["a"],Triangle:C["a"],Square:P["a"],InfoModal:V["a"],Loading:K["a"]},mixins:[R["a"]],methods:{update:function(){var t=this;this.isLoading=!0,fetch("https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$format=JSON",{headers:this.GetAuthorizationHeader()}).then((function(t){return t.json()})).then((function(e){t.getRandomData(e,10,"restaurant")})),fetch("https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$format=JSON",{headers:this.GetAuthorizationHeader()}).then((function(t){return t.json()})).then((function(e){t.getRandomData(e,4,"activity"),t.isLoading=!1}))},getModalStatus:function(t){this.openModal=t,this.openModal?document.body.className="modal_open":document.body.className=""},getDetail:function(t){this.detail=t}},mounted:function(){this.update()}};const J=S()(G,[["render",y]]);e["default"]=J},ab13:function(t,e,a){var n=a("b622"),c=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[c]=!1,"/./"[t](e)}catch(n){}}return!1}},bd22:function(t,e,a){t.exports=a.p+"img/Tainan.8022e851.png"},caad:function(t,e,a){"use strict";var n=a("23e7"),c=a("4d64").includes,i=a("44d2");n({target:"Array",proto:!0},{includes:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},da81:function(t,e,a){t.exports=a.p+"img/PingtungCounty.71aae4c0.png"},e4d4:function(t,e,a){t.exports=a.p+"img/Kaohsiung.4e1d3e07.png"},ea14:function(t,e,a){"use strict";var n=a("7a23"),c={class:"square"};function i(t,e){return Object(n["u"])(),Object(n["g"])("div",c)}var o=a("6b0d"),r=a.n(o);const l={},u=r()(l,[["render",i]]);e["a"]=u},efa7:function(t,e,a){t.exports=a.p+"img/Sotojima.6cc9bd87.png"},f05b:function(t,e,a){t.exports=a.p+"img/HualienCounty.861c900a.png"},fa86:function(t,e,a){t.exports=a.p+"img/YilanCounty.f5a0e994.png"}}]);
//# sourceMappingURL=chunk-454a6de6.2fb846dd.js.map