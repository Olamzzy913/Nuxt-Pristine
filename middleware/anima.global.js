// import Nprogress from "nprogess";

// export default defineNuxtRouteMiddleware((to, from) => {
//   to.router.beforeEach((to, from, next) => {
//     Nprogress.start();
//     next();
//   });
//   to.router.afterEach(Nprogress.done);
// });
export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to);
});
