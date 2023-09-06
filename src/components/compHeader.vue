<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <img src="../assets/icon/logo.svg" alt="" />
        <!-- nav -->
        <ul class="nav__list">
          <li class="nav__item">
            <a href="" class="nav__item-link">Get the app</a>
          </li>
          <li class="nav__item">
            <a href="" class="nav__item-link">About</a>
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
                  <a href="" class="sub__link">Blog</a>
                </li>
                <li class="item__sub">
                  <a href="" class="sub__link">FAQ</a>
                </li>
                <li class="item__sub">
                  <a href="" class="sub__link">Contact</a>
                </li>
                <li class="item__sub">
                  <a href="" class="sub__link">404 Page</a>
                </li>
                <li class="item__sub">
                  <a href="" class="sub__link">Coming Soon</a>
                </li>
              </ul>
            </a>
          </li>
        </ul>
        <!-- action -->
        <div class="header__action">
          <div class="header__cart">
            <img src="../assets/img/cart.svg" alt="" class="header__cart-img" />
            <p class="header__cart-quantity">0</p>
          </div>
          <a href="" class="btn__sign-in">Sign In</a>
          <a href="" class="btn btn__sign-up">Sign Up</a>
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
