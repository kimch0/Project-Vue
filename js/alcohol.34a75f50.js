(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["alcohol"],{"2dbb":function(t,e,r){"use strict";r.r(e);var c=r("7a23");function a(t,e,r,a,n,s){var o=Object(c["x"])("Cards");return Object(c["q"])(),Object(c["d"])("div",null,[Object(c["e"])("h2",null,Object(c["z"])(n.route),1),Object(c["h"])(o,{array:n.cocktails},null,8,["array"])])}var n=r("bc3a"),s=r.n(n),o=r("6210"),i={name:"Alcohol",components:{Cards:o["a"]},data:function(){return{cocktails:[],route:this.$route.params.selected}},mounted:function(){this.getDrinks()},methods:{getDrinks:function(){var t=this,e={},r=[],c=this.route;s.a.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php",{params:{a:c}}).then((function(c){e=c.data,r=e.drinks,t.cocktails=r})).catch((function(t){return console.log(t)}))}},watch:{$route:function(t,e){if(e.params.selected!==t.params.selected)return this.route=this.$route.params.selected,this.getDrinks()}}},d=r("6b0d"),l=r.n(d);const u=l()(i,[["render",a]]);e["default"]=u},6210:function(t,e,r){"use strict";var c=r("7a23"),a={class:"row row-cols-auto"},n={class:"card bg-transparent border-0"},s=["src"],o={class:"card-body"},i={class:"card-title"};function d(t,e,r,d,l,u){var b=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["d"])("div",a,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(r.array,(function(t,e){return Object(c["q"])(),Object(c["d"])("div",{class:"col-6 g-4 col-md-4",key:e},[Object(c["e"])("div",n,[Object(c["h"])(b,{id:"drinkInfo",to:{name:"Detailed",params:{id:t.idDrink}}},{default:Object(c["D"])((function(){return[Object(c["e"])("img",{src:t.strDrinkThumb,class:"card-img-top",alt:"",width:"150"},null,8,s),Object(c["e"])("div",o,[Object(c["e"])("h5",i,Object(c["z"])(t.strDrink),1)])]})),_:2},1032,["to"])])])})),128))])}var l={name:"Cards",props:["array"]},u=r("6b0d"),b=r.n(u);const h=b()(l,[["render",d]]);e["a"]=h}}]);
//# sourceMappingURL=alcohol.34a75f50.js.map