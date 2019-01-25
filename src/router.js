import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Launches from "./views/Launches.vue";
import Rockets from "./views/Rockets.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Rockets",
      name: "rockets",
      component: Rockets
    },
    {
      path: "/Launches",
      name: "Launches",
      component: Launches
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    }
  ]
});
