<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-sm-12">
          <div class="footer__top-left">
            <div class="footer__left">
              <img src="../assets/icon/logo.svg" alt="" />
              <p class="desc footer__left-desc">
                Food, drinks, groceries, and more available for delivery and
                pickup.
              </p>
              <div class="footer__social">
                <a
                  :href="facebookProfileURL"
                  target="_blank"
                  class="footer__social-link"
                >
                  <img src="../assets/img/facebook.svg" alt="" />
                </a>
                <a class="footer__social-link">
                  <img src="../assets/img/in.svg" alt=""
                /></a>
                <a class="footer__social-link">
                  <img src="../assets/img/instagram.svg" alt=""
                /></a>
                <a class="footer__social-link">
                  <img src="../assets/img/twitter.svg" alt=""
                /></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2 offset-lg-1 col-sm-12">
          <div class="footer__top-right">
            <ul class="footer__list">
              <li class="footer__item">
                <a href="" class="footer__item-link">Get Started</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__item-link">FoodEats Sign In</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__item-link">FoodEats Sign Up</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__item-link">Become a Rider</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__item-link">Become a Partner</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-sm-12">
          <div class="footer__top-right">
            <ul class="footer__list">
              <li class="footer__item">
                <a href="" class="footer__item-link">Get Started</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__item-link">FoodEats Sign In</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__item-link">FoodEats Sign Up</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__item-link">Become a Rider</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__item-link">Become a Partner</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-sm-12">
          <div class="footer__top-right">
            <ul class="footer__list">
              <li class="footer__item">
                <a href="" class="footer__item-link">Get Started</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__item-link">FoodEats Sign In</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__item-link">FoodEats Sign Up</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__item-link">Become a Rider</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__item-link">Become a Partner</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-sm-12">
          <div class="footer__top-right">
            <ul class="footer__list">
              <li class="footer__item">
                <a href="" class="footer__item-link">Get Started</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__item-link">FoodEats Sign In</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__item-link">FoodEats Sign Up</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__item-link">Become a Rider</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__item-link">Become a Partner</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__span"></div>
        <div class="footer__copyright">
          <p class="footer__copyright-desc">
            Copyright © 2022 UIHUT all rights reserved.
          </p>
          <div class="footer__copyright-sub">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    facebookProfileURL() {
      return "https://www.facebook.com/profile.php?id=100006048614931";
    },
  },
};
</script>

<style></style>
