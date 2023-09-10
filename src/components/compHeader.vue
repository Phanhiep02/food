<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <router-link to="/">
          <img src="../assets/icon/logo.svg" alt="" />
        </router-link>
        <!-- nav -->
        <ul class="nav__list">
          <li class="nav__item">
            <router-link to="coming" href="" class="nav__item-link"
              >Get the app</router-link
            >
          </li>
          <li class="nav__item">
            <router-link to="about" class="nav__item-link">About</router-link>
          </li>
          <li class="nav__item">
            <a href="" class="nav__item-link"
              >Page
              <img
                class="vector-down"
                src="../assets/img/vecto-down.svg"
                alt=""
              />
              <ul class="list__sub">
                <li class="item__sub">
                  <router-link to="blog" href="" class="sub__link"
                    >Blog</router-link
                  >
                </li>
                <li class="item__sub">
                  <router-link to="FAQ" href="" class="sub__link"
                    >FAQ</router-link
                  >
                </li>
                <li class="item__sub">
                  <router-link to="contact" href="" class="sub__link"
                    >Contact</router-link
                  >
                </li>
                <li class="item__sub">
                  <router-link to="404-page" href="" class="sub__link"
                    >404 Page</router-link
                  >
                </li>
                <li class="item__sub">
                  <router-link to="coming" href="" class="sub__link"
                    >Coming Soon</router-link
                  >
                </li>
              </ul>
            </a>
          </li>
        </ul>
        <!-- action -->
        <div class="header__action">
          <router-link to="cart-page" class="header__cart">
            <img src="../assets/img/cart.svg" alt="" class="header__cart-img" />
            <p class="header__cart-quantity">0</p>
          </router-link>
          <router-link to="sign-in" class="btn__sign-in">Sign In</router-link>
          <router-link to="sign-up" class="btn btn__sign-up"
            >Sign Up</router-link
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style></style>
