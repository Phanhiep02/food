<template>
  <!-- section-01 hero -->
  <section class="hero">
    <div class="container">
      <div class="row">
        <div class="col col-lg-5 col-sm-12">
          <div class="hero__left">
            <h3 class="hero__left-has">#The Best in Town</h3>
            <h1 class="hero__left-title">
              Get food
              <img src="../assets/img/hero-left-01.svg" alt="" />
              delivery and more
              <img src="../assets/img/hero-left-02.svg" alt="" />
            </h1>
            <p class="hero__left-desc">
              You want it. We get it. Food, drinks, groceries, and more
              available for delivery and pickup.
            </p>
            <div class="hero__location">
              <div class="hero__location-left">
                <!-- <a class="img__link-location">
                  <img
                    src="../assets/img/Location.svg"
                    alt=""
                    class="img-location"
                  />
                </a> -->
                <input
                  class="hero__location-input"
                  type="text"
                  placeholder="Location or zip code"
                />
              </div>
              <button class="btn btn-explore">
                <a>Explore</a>
              </button>
            </div>
            <div class="hero__left-app">
              <h3 class="hero__left-app-desc">Get the app:</h3>
              <a class="app__img">
                <img
                  src="../assets/img/hero-left-app01.png"
                  class="app__img-link"
                  alt=""
                />
              </a>
              <a class="app__img">
                <img
                  src="../assets/img/hero-left-app02.png"
                  class="app__img-link"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div class="col col-lg-7 col-sm-12">
          <div class="hero__right">
            <div class="hero__right-content">
              <div class="hero__right-img">
                <img
                  src="../assets/img/hero-right-img.png"
                  alt=""
                  class="hero__right-img-sub"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- section-02 -->
  <section class="services">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="services__inner">
            <h2 class="services__inner-title">Your everyday, right away</h2>
            <p class="services__inner-desc">
              Order food and grocery delivery online from hundreds of
              restaurants and shops nearby.
            </p>
          </div>
        </div>
      </div>
      <div class="row services__content">
        <div class="col-lg-4 col-sm-12">
          <div class="services__list">
            <div class="services__item">
              <img
                src="../assets/img/services-01.png"
                alt=""
                class="services__item-img"
              />
              <h4 class="services__item-title">Food Items</h4>
              <p class="services__item-desc">
                Find deals, free delivery, and more from our restaurant
                partners.
              </p>
              <router-link
                to="restaurant"
                href=""
                class="services__item-explore"
                >Explore</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-12">
          <div class="services__list">
            <div class="services__item">
              <img
                src="../assets/img/services-02.png"
                alt=""
                class="services__item-img"
              />
              <h4 class="services__item-title">Groceries</h4>
              <p class="services__item-desc">
                Find deals, free delivery, and more from our restaurant
                partners.
              </p>
              <a href="" class="services__item-explore">Explore</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-12">
          <div class="services__list">
            <div class="services__item">
              <img
                src="../assets/img/services-03.png"
                alt=""
                class="services__item-img"
              />
              <h4 class="services__item-title">Flower Items</h4>
              <p class="services__item-desc">
                Find deals, free delivery, and more from our restaurant
                partners.
              </p>
              <a href="" class="services__item-explore">Explore</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- section -03  countdown -->
  <section class="countdown">
    <div class="container">
      <div class="row">
        <div class="col col-sm-12">
          <div class="countdown__body">
            <div class="countdown__inner">
              <div class="countdown__item">
                <h2 class="countdown__title">350+</h2>
                <p class="countdown__desc">Order per minute</p>
              </div>
              <div class="countdown__item">
                <h2 class="countdown__title">10x</h2>
                <p class="countdown__desc">Faster delivery</p>
              </div>
              <div class="countdown__item">
                <h2 class="countdown__title">10+</h2>
                <p class="countdown__desc">In Country</p>
              </div>
              <div class="countdown__item">
                <h2 class="countdown__title">99.9%</h2>
                <p class="countdown__desc">Order per minute</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- section - 04 - about  -->
  <section class="about-foodeats">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-sm-12">
          <div class="about-foodeats__img">
            <div class="about-foodeats__img-sub">
              <img
                src="../assets/img/about-eats.png"
                alt=""
                class="about-foodeats__img-link"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1 col-sm-12">
          <div class="about-foodeats__content">
            <h2 class="about-foodeats__title">About Foodeats</h2>
            <p class="about-foodeats__desc">
              Foodeats helps you find and order food from wherever you are. How
              it works: you type in an address, we tell you the restaurants that
              deliver to that locale as well as showing you droves of pickup
              restaurants near you.
            </p>
            <p class="about-foodeats__desc-sub">
              Want to be more specific? Search by cuisine, restaurant name or
              menu item. We'll filter your results accordingly.
            </p>
            <router-link to="about">
              <button class="btn about-foodeats__btn">Learn More</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- section - 05 -->
  <section class="features">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="features__top">
            <h2 class="features__top-title">
              It’s all here. All in one platform.
            </h2>
            <p class="features__top-desc">
              Order food and grocery delivery online from hundreds of
              restaurants and shops nearby.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-sm-12">
          <div class="features__content">
            <div class="features__item">
              <img
                src="../assets/img/features-01.png"
                alt=""
                class="features__item-img"
              />
              <h3 class="features__item-title">Deliver With Us</h3>
              <p class="features__item-desc">
                Sign up today, start earning tomorrow. Build a new career in
                delivery service with us.
              </p>
              <router-link to="restaurant" class="btn features__content-btn"
                >Learn More</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12">
          <div class="features__content">
            <div class="features__item">
              <img
                src="../assets/img/features-02.png"
                alt=""
                class="features__item-img"
              />
              <h3 class="features__item-title">Partner With Us</h3>
              <p class="features__item-desc">
                Sign up today, start earning tomorrow. Build a new career in
                delivery service with us.
              </p>
              <router-link to="restaurant" class="btn features__content-btn"
                >Learn More</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- section - 06 - features -->
  <section class="features__footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-sm-12">
          <div class="features__footer-left">
            <h2 class="heading features__footer-title">Feed your employees</h2>
            <p class="desc features__footer-desc">
              Fuel your business with great food. Treat employees and clients to
              corporate meals with food delivery that’s customizable to your
              business.
            </p>
            <ul class="features__footer-desc-list">
              <li class="desc features__footer-desc-item">
                Meals in the office
              </li>
              <li class="desc features__footer-desc-item">Meals after hours</li>
              <li class="desc features__footer-desc-item">Meals at home</li>
              <li class="desc features__footer-desc-item">
                Meals while traveling
              </li>
            </ul>
            <router-link
              to="restaurant"
              href=""
              class="btn features__footer-btn"
              >Get Started Now</router-link
            >
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 col-sm-12">
          <div class="features__footer-right">
            <div class="features__footer-right-bg">
              <div class="features__footer-right-bgSub">
                <img
                  src="../assets/img/features-03.png"
                  alt=""
                  class="features__footer-right-img"
                />
                <a href="">
                  <img
                    src="../assets/img/features-video.png"
                    alt=""
                    class="features__footer-video"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- section - 07 CTA -->
  <section class="cta">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="cta__top">
            <h2 class="heading cta__top-title">
              Find your flavour even faster
            </h2>
            <p class="desc cta__top-desc">
              Download the Just Eat app for faster ordering and more
              personalised recommendations.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-sm-12">
          <div class="cta__top-list">
            <div class="cta__top-item">
              <a>
                <img src="../assets/img/cta-01.png" alt="" class="cta__top-img"
              /></a>
              <a>
                <img src="../assets/img/cta-02.png" alt="" class="cta__top-img"
              /></a>
              <a>
                <img src="../assets/img/cta-03.png" alt="" class="cta__top-img"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- section - 08  testimonial -->
  <section class="testimonial">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="cta__app">
            <router-link to="coming" class="cta__app-link">
              <img
                src="../assets/img/cta-google.svg"
                alt=""
                class="cta__app-img"
              />
            </router-link>
            <router-link to="coming" href="" class="cta__app-link">
              <img
                src="../assets/img/cta-store.svg"
                alt=""
                class="cta__app-img"
              />
            </router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="testimonial__top">
            <h2 class="heading testimonial__top-heading">
              What food lovers are saying about us
            </h2>
            <div class="testimonial__top-scroll">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="testimonial__body-list">
          <div class="col-lg-4 col-sm-12">
            <div class="testimonial__body">
              <div class="testimonial__content">
                <a>
                  <img
                    src="../assets/img/testimonial-body.svg"
                    alt=""
                    class="testimonial__content-union"
                  />
                </a>
                <a class="testimonial__stars-link">
                  <img
                    src="../assets/img/testimonial-stars.svg"
                    alt=""
                    class="testimonial__content-stars"
                  />
                </a>
                <p class="desc testimonial__content-desc">
                  I’m obsessed with excellent customer service...thanks foodeats
                  for being awesome!
                </p>
                <span class="testimonial__content-span"></span>
                <router-link to="blog"
                  ><h6 class="testimonial__content-title">
                    Peter Moor
                  </h6></router-link
                >
                <p class="desc testimonial__content-descSub">UI/UX Designer</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="testimonial__body">
              <div class="testimonial__content">
                <a>
                  <img
                    src="../assets/img/testimonial-body.svg"
                    alt=""
                    class="testimonial__content-union"
                  />
                </a>
                <a class="testimonial__stars-link">
                  <img
                    src="../assets/img/testimonial-stars.svg"
                    alt=""
                    class="testimonial__content-stars"
                  />
                </a>
                <p class="desc testimonial__content-desc">
                  I’m obsessed with excellent customer service...thanks foodeats
                  for being awesome!
                </p>
                <span class="testimonial__content-span"></span>
                <router-link to="blog"
                  ><h6 class="testimonial__content-title">
                    Peter Moor
                  </h6></router-link
                >
                <p class="desc testimonial__content-descSub">UI/UX Designer</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="testimonial__body">
              <div class="testimonial__content">
                <a>
                  <img
                    src="../assets/img/testimonial-body.svg"
                    alt=""
                    class="testimonial__content-union"
                  />
                </a>
                <a class="testimonial__stars-link">
                  <img
                    src="../assets/img/testimonial-stars.svg"
                    alt=""
                    class="testimonial__content-stars"
                  />
                </a>
                <p class="desc testimonial__content-desc">
                  I’m obsessed with excellent customer service...thanks foodeats
                  for being awesome!
                </p>
                <span class="testimonial__content-span"></span>
                <router-link to="blog"
                  ><h6 class="testimonial__content-title">
                    Peter Moor
                  </h6></router-link
                >
                <p class="desc testimonial__content-descSub">UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- section - 09 sub-->
  <section class="newsletter">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="newsletter__inner">
            <h2 class="heading newsletter__heading">
              Subscribe newsletter to get updates
            </h2>
            <p class="desc newsletter__desc">
              Download the Just Eat app for faster ordering and more
              personalised recommendations.
            </p>
            <div class="newsletter__email">
              <div class="newsletter__email-input">
                <input type="text" placeholder="Enter your email" />
              </div>
              <a href="" class="btn newsletter__btn">Subscribe</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
