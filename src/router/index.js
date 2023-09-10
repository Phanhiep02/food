import { createRouter, createWebHashHistory } from "vue-router";
import pagesSearch from "../pages/pagesSearchResult";
import pagesHome from "../pages/pagesHome";
import pagesHomePage from "../pages/pagesHomePage";
import pagesRestaurantDetail from "../pages/pagesRestaurantDetail";
import pagesFoodDetail from "../pages/pagesFoodDetail";
import pagesCartPage from "../pages/pagesCartPage";
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
  {
    path: "/",
    component: pagesHomePage,
    children: [
      { path: "", component: pagesHome },
      { path: "restaurant", component: pagesSearch, name: "restaurant" },
      {
        path: "restaurant-detail",
        component: pagesRestaurantDetail,
        name: "restaurant-detail",
      },
      {
        path: "restaurant-detail-food",
        component: pagesFoodDetail,
        name: "restaurant-detail-food",
      },
      { path: "cart-page", component: pagesCartPage, name: "cart-page" },
      { path: "about", component: pagesAbout, name: "about" },
      { path: "blog", component: pagesBlog, name: "blog" },
      { path: "blog-post", component: pagesBlogPost, name: "blog-post" },
      { path: "FAQ", component: pagesFAQ, name: "FAQ" },
      { path: "contact", component: pagesContact, name: "contact" },
      { path: ":pathMatch(.*)*", component: pagesNotFound },
      { path: "/coming", component: pagesComingSoon, name: "coming" },
    ],
  },

  { path: "/sign-in", component: pagesSignIn, name: "signIn" },
  { path: "/sign-up", component: pagesSignUp, name: "signUp" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    // Kéo trang lên đầu khi chuyển route
    return { top: 0 };
  },
});
export default router;
