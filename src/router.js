import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Missions from "./views/Missions.vue";
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
      path: "/Missions",
      name: "Missions",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Missions.vue")
    }
  ]
});
