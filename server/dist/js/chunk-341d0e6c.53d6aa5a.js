(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-341d0e6c","chunk-6ae46683"],{"01c1":function(t,e,r){"use strict";var a=r("956b"),n=r.n(a);n.a},"0947":function(t,e,r){},"0c8b":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",[t._v("404 Page Not Found")])},n=[],c={name:"NotFoundPage"},s=c,u=(r("01c1"),r("2877")),o=Object(u["a"])(s,a,n,!1,null,"bc2dd022",null);e["default"]=o.exports},7195:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product?r("div",{attrs:{id:"page-wrap"}},[r("div",{attrs:{id:"img-wrap"}},[r("img",{attrs:{src:t.product.imageUrl,alt:""}}),r("div",{attrs:{id:"product-details"}},[r("h1",[t._v(t._s(t.product.name))]),r("h3",{attrs:{id:"price"}},[t._v(t._s(t.product.price))]),r("p",[t._v("Average Raiting: "+t._s(t.product.averageRating))]),t.itemInCart||t.showSuccessMsg?t._e():r("button",{attrs:{id:"add-to-cart"},on:{click:t.addToCart}},[t._v("\n        Add To Cart\n      ")]),!t.itemInCart&&t.showSuccessMsg?r("button",{staticClass:"greenBtn",attrs:{id:"add-to-cart"}},[t._v("\n        Success Fully added item to cart\n      ")]):t._e(),t.itemInCart?r("button",{staticClass:"grayBtn",attrs:{id:"add-to-cart"}},[t._v("\n        Item already in cart\n      ")]):t._e(),r("h4",[t._v("Description")]),r("p",[t._v(t._s(t.product.description))])])])]):r("NotFoundPage")},n=[],c=(r("96cf"),r("3b8d")),s=r("bc3a"),u=r.n(s),o=r("0c8b"),i={name:"ProductDetailPage",components:{NotFoundPage:o["default"]},data:function(){return{cartItems:[],product:{},showSuccessMsg:!1}},methods:{addToCart:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("http://localhost:9000/fkdata/users/12345/cart",{productId:this.$route.params.id});case 2:this.showSuccessMsg=!0,setTimeout((function(){e.$router.push("/products")}),1500);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},computed:{itemInCart:function(){var t=this;return this.cartItems.some((function(e){return e.id===t.product.id}))}},created:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e,r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("http://localhost:9000/fkdata/products/".concat(this.$route.params.id));case 2:return e=t.sent,r=e.data,this.product=r,t.next=7,u.a.get("http://localhost:9000/fkdata/users/12345/cart");case 7:a=t.sent,n=a.data,this.cartItems=n;case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},d=i,p=(r("bd0c"),r("2877")),h=Object(p["a"])(d,a,n,!1,null,"400ef601",null);e["default"]=h.exports},"956b":function(t,e,r){},bd0c:function(t,e,r){"use strict";var a=r("0947"),n=r.n(a);n.a}}]);
//# sourceMappingURL=chunk-341d0e6c.53d6aa5a.js.map