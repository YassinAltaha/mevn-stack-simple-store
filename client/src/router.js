import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import("./views/CarPage.vue")
    },
    {
      path: "/products",
      name: "Products",
      component: () => import("./views/ProductsPage.vue")
    },
    {
      path: "/products/:id",
      name: "ProductDetails",
      component: () => import("./views/ProductDetailsPage.vue")
    },
    {
      path: "*",
      name: "NotFoundPage",
      component: () => import("./views/NotFoundPage.vue")
    }
  ]
});
