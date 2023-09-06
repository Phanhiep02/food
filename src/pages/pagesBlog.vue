<template>
  <div class="blog">
    <!-- section 1 -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-sm-12">
            <div class="blog__top">
              <div class="blog__top-left">
                <div class="blog__top-read">
                  <p class="blog__top-time desc">Nove 06, 2022</p>
                  <span></span>
                  <p class="blog__top-time desc">14 min read</p>
                </div>
                <h2 class="blog__top-title">
                  Most popular vegetarian and vegan restaurants in your city.
                </h2>
                <p class="desc blog__top-desc">
                  Looking to add more leafy greens and plant-based burgers to
                  your plate this fall? Today, in celebration of World
                  Vegetarian Day on October 1, we discover few restaurants for
                  you.
                </p>
                <div class="blog__top-info">
                  <img
                    src="../assets/img/blog-avatar.png"
                    alt=""
                    class="blog__top-info-img"
                  />
                  <p class="blog__top-info-name">David Warner</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 offset-lg-1 col-sm-12">
            <div class="blog__top-right">
              <img
                src="../assets/img/blog-img.png"
                alt=""
                class="blog__top-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section 2 -->
    <section class="blog__title">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-12">
            <ul class="blog__nav">
              <li>
                <a href="" class="blog__nav-link blog-active">All</a>
              </li>
              <li>
                <a href="" class="blog__nav-link">Recent</a>
              </li>
              <li>
                <a href="" class="blog__nav-link">Popular</a>
              </li>
              <li>
                <a href="" class="blog__nav-link">Oldest</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-6 offset-lg-2 col-sm-12">
            <div class="blog__search">
              <div class="blog__search-input">
                <img src="../assets/img/blog-search.svg" alt="" />
                <input type="text" placeholder="Search the blog..." />
              </div>
              <a href="" class="btn blog__search-btn">Search</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section 3 -->
    <section class="">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-12">
            <div class="blog__content">
              <ul class="blog__list">
                <li class="blog__item">
                  <img
                    src="../assets/img/blog-img01.png"
                    alt=""
                    class="blog__item-img"
                  />
                  <div class="blog__item-time">
                    <p class="desc">Nove 06, 2022</p>
                    <span></span>
                    <p class="desc">14 min read</p>
                  </div>
                  <h5 class="blog__item-title">
                    Top 10 vegetarian and vegan restaurants in your city.
                  </h5>
                  <p class="desc blog__item-desc">
                    Looking to add more leafy greens and plant-based burgers to
                    your plate this fall? Today, in celebration of World...
                  </p>
                  <div class="blog__item-info">
                    <img
                      src="../assets/img/blog-avatar.png"
                      alt=""
                      class="blog__item-avatar"
                    />
                    <p class="blog__item-name">David Warner</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="blog__content">
              <ul class="blog__list">
                <li class="blog__item">
                  <img
                    src="../assets/img/blog-img02.png"
                    alt=""
                    class="blog__item-img"
                  />
                  <div class="blog__item-time">
                    <p class="desc">Nove 06, 2022</p>
                    <span></span>
                    <p class="desc">14 min read</p>
                  </div>
                  <h5 class="blog__item-title">
                    Top 10 vegetarian and vegan restaurants in your city.
                  </h5>
                  <p class="desc blog__item-desc">
                    Looking to add more leafy greens and plant-based burgers to
                    your plate this fall? Today, in celebration of World...
                  </p>
                  <div class="blog__item-info">
                    <img
                      src="../assets/img/blog-avatar.png"
                      alt=""
                      class="blog__item-avatar"
                    />
                    <p class="blog__item-name">David Warner</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4 col-sm-12">
            <div class="blog__content">
              <ul class="blog__list">
                <li class="blog__item">
                  <img
                    src="../assets/img/blog-img03.png"
                    alt=""
                    class="blog__item-img"
                  />
                  <div class="blog__item-time">
                    <p class="desc">Nove 06, 2022</p>
                    <span></span>
                    <p class="desc">14 min read</p>
                  </div>
                  <h5 class="blog__item-title">
                    Top 10 vegetarian and vegan restaurants in your city.
                  </h5>
                  <p class="desc blog__item-desc">
                    Looking to add more leafy greens and plant-based burgers to
                    your plate this fall? Today, in celebration of World...
                  </p>
                  <div class="blog__item-info">
                    <img
                      src="../assets/img/blog-avatar.png"
                      alt=""
                      class="blog__item-avatar"
                    />
                    <p class="blog__item-name">David Warner</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: "abc" },
        { id: 1, name: "abc" },
        { id: 1, name: "abc" },
      ],
    };
  },
};
</script>

<style></style>
