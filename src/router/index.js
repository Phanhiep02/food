import { createRouter, createWebHashHistory } from "vue-router";
import pagesSearch from "../pages/pagesSearchResult";
import pagesHome from "../pages/pagesHome";
import pagesRestaurantDetail from "../pages/pagesRestaurantDetail";
import pagesFoodDetail from "../pages/pagesFoodDetail";
import pagesAbout from "../pages/pagesAbout";
import pagesBlog from "../pages/pagesBlog";
import pagesBlogPost from "../pages/pagesBlogPost";
import pagesFAQ from "../pages/pagesFAQ";
import pagesContact from "../pages/pagesContact";
import pagesNotFound from "../pages/pages404NotFound";
import pagesComingSoon from "../pages/pagesComingSoon";
import pagesSignIn from "../pages/pagesSignIn";
import pagesSignUp from "../pages/pagesSignUp";
const routes = [
  { path: "/", component: pagesHome },
  { path: "/1", component: pagesSearch },
  { path: "/2", component: pagesRestaurantDetail },
  { path: "/3", component: pagesFoodDetail },
  { path: "/about", component: pagesAbout },
  { path: "/blog", component: pagesBlog },
  { path: "/blog-post", component: pagesBlogPost },
  { path: "/FAQ", component: pagesFAQ },
  { path: "/contact", component: pagesContact },
  { path: "/:pathMatch(.*)*", component: pagesNotFound },
  { path: "/coming", component: pagesComingSoon },
  { path: "/sign-in", component: pagesSignIn },
  { path: "/sign-up", component: pagesSignUp },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});
export default router;
