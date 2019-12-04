import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Login from "@/components/Login";
import Home from "@/components/Home";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    }
  ]
});

// 访问之前，都检查下是否登录了
router.beforeEach((to, from, next) => {
  if (to.path.startsWith("/login")) {
    window.sessionStorage.removeItem("access-token");
    next();
  } else {
    let token = window.sessionStorage.getItem("access-token");
    console.log(token);
    if (!token) {
      next({ path: "/login" });
    } else {
      next();
    }
  }
});

export default router;
