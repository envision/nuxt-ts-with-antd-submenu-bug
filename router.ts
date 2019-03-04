// import Vue from 'vue';
// import Router from 'vue-router';

// import { store } from './store';

// import LoginPage from './pages/Login.vue';
// import DashboardPage from './pages/Dashboard.vue';
// import InsightsPage from './pages/Insights.vue';

// Vue.use(Router);

// const router_ = new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   linkActiveClass: 'ant-menu-item-selected',
//   linkExactActiveClass: 'ant-menu-item-selected-exact',
//   routes: [
//     {
//       path: '/',
//       redirect: { name: 'dashboard' }
//     },
//     {
//       path: '/logout',
//       name: 'logout',
//       component: LoginPage
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: LoginPage
//     },
//     {
//       path: '/dashboard',
//       name: 'dashboard',
//       component: DashboardPage
//     },
//     {
//       path: '/insights',
//       component: InsightsPage,
//       children: [
//         {
//           path: '',
//           meta: {
//             segment: 'network'
//           },
//           redirect: {
//             name: 'insightsNetwork'
//           }
//         },
//         {
//           path: 'network',
//           name: 'insightsNetwork',
//           component: InsightsPage,
//           meta: {
//             segment: 'network'
//           }
//         },
//         {
//           path: 'user',
//           name: 'insightsUser',
//           component: InsightsPage,
//           meta: {
//             segment: 'user'
//           }
//         },
//         {
//           path: 'business',
//           name: 'insightsBusiness',
//           component: InsightsPage,
//           meta: {
//             segment: 'business'
//           }
//         }
//       ]
//     },
//     // Otherwise redirect to home
//     { path: '*', redirect: '/login' }
//   ]
// });

// // https://blog.webf.zone/vue-router-the-missing-manual-ce51c21430b0
// export function storeInjector(fn) {
//   return (...args) => fn(...args, store);
// }

// router_.beforeEach(storeInjector((to, from, next, store) => {

//   const loggedIn = store.getters['authentication/isLoggedIn'];

//   // User logged in
//   if (loggedIn) {

//     // Logout => log out and redirect to Login
//     if (to.path === '/logout') {
//       store.dispatch('authentication/logout');
//       next('/login');
//     }

//     // Login => redirect to Dashboard
//     if (to.path === '/login') {
//       next('/dashboard');
//     }

//   // A Guest
//   } else {

//     // Redirect to login page if trying to access a restricted page
//     const publicPages = ['/login'];
//     const authRequired = !publicPages.includes(to.path);

//     if (authRequired) {
//       return next('/login');
//     }
//   }

//   next();

// }));

// export const router = router_;
