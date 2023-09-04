<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-sm-12">
          <div class="restaurant__top">
            <div class="restaurant__top-left">
              <h5 class="filter__title">Filters</h5>
              <p class="restaurant__clear">Clear All</p>
            </div>
            <div class="restaurant__top-restaurant">
              <h5 class="restaurant__top-restaurant-title">Restaurants</h5>
              <h5 class="restaurant__top-restaurant-desc">Catering</h5>
            </div>
            <div class="restaurant__top-restaurant-delivery">
              <a href="" class="btn restaurant__top-restaurant-btn">Delivery</a>
              <a href="" class="btn restaurant__top-restaurant-btn">Pickup</a>
            </div>
          </div>
        </div>
        <div class="col-lg-9 col-sm-12">
          <div class="restaurant__top-right">
            <div class="restaurant__top-category">
              <h5 class="restaurant__top-right-title">Explore by category</h5>
              <p class="restaurant__top-right-desc">View All</p>
            </div>
            <ul class="restaurant__top-list">
              <li class="restaurant__top-item">
                <a href="" class="restaurant__top-item-link">
                  <img
                    src="../assets/img/burger.png"
                    alt=""
                    class="restaurant__top-item-img"
                  />
                </a>
                <p class="restaurant__top-item-desc">Burger</p>
              </li>
              <li class="restaurant__top-item">
                <a href="" class="restaurant__top-item-link">
                  <img
                    src="../assets/img/pizza.png"
                    alt=""
                    class="restaurant__top-item-img"
                  />
                </a>
                <p class="restaurant__top-item-desc">Pizza</p>
              </li>
              <li class="restaurant__top-item">
                <a href="" class="restaurant__top-item-link">
                  <img
                    src="../assets/img/sandwiches.png"
                    alt=""
                    class="restaurant__top-item-img"
                  />
                </a>
                <p class="restaurant__top-item-desc">Sandwiches</p>
              </li>
              <li class="restaurant__top-item">
                <a href="" class="restaurant__top-item-link">
                  <img
                    src="../assets/img/wings.png"
                    alt=""
                    class="restaurant__top-item-img"
                  />
                </a>
                <p class="restaurant__top-item-desc">Wings</p>
              </li>
              <li class="restaurant__top-item">
                <a href="" class="restaurant__top-item-link">
                  <img
                    src="../assets/img/coffee.png"
                    alt=""
                    class="restaurant__top-item-img"
                  />
                </a>
                <p class="restaurant__top-item-desc">Coffee & Tea</p>
              </li>
              <li class="restaurant__top-item">
                <a href="" class="restaurant__top-item-link">
                  <img
                    src="../assets/img/indian.png"
                    alt=""
                    class="restaurant__top-item-img"
                  />
                </a>
                <p class="restaurant__top-item-desc">Indian</p>
              </li>
              <li class="restaurant__top-item">
                <a href="" class="restaurant__top-item-link">
                  <img
                    src="../assets/img/chinese.png"
                    alt=""
                    class="restaurant__top-item-img"
                  />
                </a>
                <p class="restaurant__top-item-desc">Chinese</p>
              </li>
              <li class="restaurant__top-item">
                <a href="" class="restaurant__top-item-link">
                  <img
                    src="../assets/img/thai.png"
                    alt=""
                    class="restaurant__top-item-img"
                  />
                </a>
                <p class="restaurant__top-item-desc">Thai</p>
              </li>
            </ul>
          </div>
          <div class="restaurant__top-right-span"></div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-3 col-sm-12">
          <div class="restaurant__body-left">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#fff"
              :style="{ 'padding-left': '0px' }"
            >
              <el-sub-menu index="1">
                <template #title>
                  <p class="nav-text">
                    <span>FoodEats</span>
                  </p>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">
                    <el-checkbox-group v-model="checkList">
                      <el-checkbox label="Special Deals" />
                    </el-checkbox-group>
                  </el-menu-item>
                  <el-menu-item index="1-2">
                    <el-checkbox label="Top Eats" />
                  </el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
              <!-- 2 -->
              <el-sub-menu index="2">
                <template #title>
                  <p class="nav-text"><span>Price</span></p>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">
                    <el-checkbox-group v-model="checkList">
                      <el-checkbox label="$0-$20" />
                    </el-checkbox-group>
                  </el-menu-item>
                  <el-menu-item index="2-2">
                    <el-checkbox label="$20-$40" />
                  </el-menu-item>
                  <el-menu-item index="2-3">
                    <el-checkbox label="$40-$80" />
                  </el-menu-item>
                  <el-menu-item index="2-4">
                    <el-checkbox label="$80-$100" />
                  </el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
              <!-- 3 -->
              <el-sub-menu index="3">
                <template #title>
                  <p class="nav-text"><span>Max Delivery Fee</span></p>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1">
                    <el-checkbox-group v-model="checkList">
                      <el-checkbox label="$0-$2" />
                    </el-checkbox-group>
                  </el-menu-item>
                  <el-menu-item index="3-2">
                    <el-checkbox label="$3-$6" />
                  </el-menu-item>
                  <el-menu-item index="3-3">
                    <el-checkbox label="$6-$9+" />
                  </el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
              <!-- 4 -->
              <el-sub-menu index="4">
                <template #title>
                  <p class="nav-text"><span>Rating</span></p>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="4-1">
                    <el-checkbox-group v-model="checkList">
                      <div class="restaurant__rating">
                        <el-checkbox label="1.0" />
                        <img src="../assets/img/star-01.svg" alt="" />
                      </div>
                    </el-checkbox-group>
                  </el-menu-item>
                  <el-menu-item index="4-2">
                    <div class="restaurant__rating">
                      <el-checkbox label="2.0" />
                      <img src="../assets/img/star-01.svg" alt="" />
                      <img src="../assets/img/star-01.svg" alt="" />
                    </div>
                  </el-menu-item>
                  <el-menu-item index="4-3">
                    <div class="restaurant__rating">
                      <el-checkbox label="3.0" />
                      <img src="../assets/img/star-01.svg" alt="" />
                      <img src="../assets/img/star-01.svg" alt="" />
                      <img src="../assets/img/star-01.svg" alt="" />
                    </div>
                  </el-menu-item>
                  <el-menu-item index="4-4">
                    <div class="restaurant__rating">
                      <el-checkbox label="4.0" />
                      <img src="../assets/img/star-01.svg" alt="" />
                      <img src="../assets/img/star-01.svg" alt="" />
                      <img src="../assets/img/star-01.svg" alt="" />
                      <img src="../assets/img/star-01.svg" alt="" />
                    </div>
                  </el-menu-item>
                  <el-menu-item index="4-5">
                    <div class="restaurant__rating">
                      <el-checkbox label="5.0" />
                      <img src="../assets/img/star-01.svg" alt="" />
                      <img src="../assets/img/star-01.svg" alt="" />
                      <img src="../assets/img/star-01.svg" alt="" />
                      <img src="../assets/img/star-01.svg" alt="" />
                      <img src="../assets/img/star-01.svg" alt="" />
                    </div>
                  </el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
            </el-menu>
          </div>
        </div>
        <div class="col-lg-9 col-sm-12">
          <div class="restaurant__body">
            <div class="restaurant__body-title">
              <h5>120 Restaurants Near Austin, TX</h5>
              <p class="restaurant__body-sort">Sort By:</p>
            </div>
            <!-- content -->
            <div class="restaurant__content">
              <ul class="restaurant__content-list">
                <li class="restaurant__content-item">
                  <a class="restaurant__content-img">
                    <img
                      src="../assets/img/restaurant-burger.png"
                      alt=""
                      class="restaurant__content-thumb"
                    />
                  </a>
                  <h5 class="restaurant__content-item-title">
                    The Burger Cafe
                  </h5>
                  <p class="restaurant__content-item-desc">$0 delivery fee</p>
                  <div class="restaurant__content-time">
                    <p class="restaurant__content-time-title">Time:</p>
                    <p class="restaurant__content-time-title">Food Type:</p>
                  </div>
                  <div class="restaurant__content-time">
                    <p class="restaurant__content-time-sub">20 min</p>
                    <p class="restaurant__content-time-sub">Burger</p>
                  </div>
                  <div class="restaurant__content-rating">
                    <p class="restaurant__content-rating-quantity">4.6</p>
                    <img
                      src="../assets/img/restaurant-star.png"
                      alt=""
                      class="restaurant__content-rating-star"
                    />
                    <p class="restaurant__content-rating-quantity">(2,200)</p>
                  </div>
                </li>
                <li class="restaurant__content-item">
                  <a class="restaurant__content-img">
                    <img
                      src="../assets/img/restaurant-burger.png"
                      alt=""
                      class="restaurant__content-thumb"
                    />
                  </a>
                  <h5 class="restaurant__content-item-title">
                    The Burger Cafe
                  </h5>
                  <p class="restaurant__content-item-desc">$0 delivery fee</p>
                  <div class="restaurant__content-time">
                    <p class="restaurant__content-time-title">Time:</p>
                    <p class="restaurant__content-time-title">Food Type:</p>
                  </div>
                  <div class="restaurant__content-time">
                    <p class="restaurant__content-time-sub">20 min</p>
                    <p class="restaurant__content-time-sub">Burger</p>
                  </div>
                  <div class="restaurant__content-rating">
                    <p class="restaurant__content-rating-quantity">4.6</p>
                    <img
                      src="../assets/img/restaurant-star.png"
                      alt=""
                      class="restaurant__content-rating-star"
                    />
                    <p class="restaurant__content-rating-quantity">(2,200)</p>
                  </div>
                </li>
                <li class="restaurant__content-item">
                  <a class="restaurant__content-img">
                    <img
                      src="../assets/img/restaurant-burger.png"
                      alt=""
                      class="restaurant__content-thumb"
                    />
                  </a>
                  <h5 class="restaurant__content-item-title">
                    The Burger Cafe
                  </h5>
                  <p class="restaurant__content-item-desc">$0 delivery fee</p>
                  <div class="restaurant__content-time">
                    <p class="restaurant__content-time-title">Time:</p>
                    <p class="restaurant__content-time-title">Food Type:</p>
                  </div>
                  <div class="restaurant__content-time">
                    <p class="restaurant__content-time-sub">20 min</p>
                    <p class="restaurant__content-time-sub">Burger</p>
                  </div>
                  <div class="restaurant__content-rating">
                    <p class="restaurant__content-rating-quantity">4.6</p>
                    <img
                      src="../assets/img/restaurant-star.png"
                      alt=""
                      class="restaurant__content-rating-star"
                    />
                    <p class="restaurant__content-rating-quantity">(2,200)</p>
                  </div>
                </li>
                <li class="restaurant__content-item">
                  <a class="restaurant__content-img">
                    <img
                      src="../assets/img/restaurant-burger.png"
                      alt=""
                      class="restaurant__content-thumb"
                    />
                  </a>
                  <h5 class="restaurant__content-item-title">
                    The Burger Cafe
                  </h5>
                  <p class="restaurant__content-item-desc">$0 delivery fee</p>
                  <div class="restaurant__content-time">
                    <p class="restaurant__content-time-title">Time:</p>
                    <p class="restaurant__content-time-title">Food Type:</p>
                  </div>
                  <div class="restaurant__content-time">
                    <p class="restaurant__content-time-sub">20 min</p>
                    <p class="restaurant__content-time-sub">Burger</p>
                  </div>
                  <div class="restaurant__content-rating">
                    <p class="restaurant__content-rating-quantity">4.6</p>
                    <img
                      src="../assets/img/restaurant-star.png"
                      alt=""
                      class="restaurant__content-rating-star"
                    />
                    <p class="restaurant__content-rating-quantity">(2,200)</p>
                  </div>
                </li>
                <li class="restaurant__content-item">
                  <a class="restaurant__content-img">
                    <img
                      src="../assets/img/restaurant-burger.png"
                      alt=""
                      class="restaurant__content-thumb"
                    />
                  </a>
                  <h5 class="restaurant__content-item-title">
                    The Burger Cafe
                  </h5>
                  <p class="restaurant__content-item-desc">$0 delivery fee</p>
                  <div class="restaurant__content-time">
                    <p class="restaurant__content-time-title">Time:</p>
                    <p class="restaurant__content-time-title">Food Type:</p>
                  </div>
                  <div class="restaurant__content-time">
                    <p class="restaurant__content-time-sub">20 min</p>
                    <p class="restaurant__content-time-sub">Burger</p>
                  </div>
                  <div class="restaurant__content-rating">
                    <p class="restaurant__content-rating-quantity">4.6</p>
                    <img
                      src="../assets/img/restaurant-star.png"
                      alt=""
                      class="restaurant__content-rating-star"
                    />
                    <p class="restaurant__content-rating-quantity">(2,200)</p>
                  </div>
                </li>
                <li class="restaurant__content-item">
                  <a class="restaurant__content-img">
                    <img
                      src="../assets/img/restaurant-burger.png"
                      alt=""
                      class="restaurant__content-thumb"
                    />
                  </a>
                  <h5 class="restaurant__content-item-title">
                    The Burger Cafe
                  </h5>
                  <p class="restaurant__content-item-desc">$0 delivery fee</p>
                  <div class="restaurant__content-time">
                    <p class="restaurant__content-time-title">Time:</p>
                    <p class="restaurant__content-time-title">Food Type:</p>
                  </div>
                  <div class="restaurant__content-time">
                    <p class="restaurant__content-time-sub">20 min</p>
                    <p class="restaurant__content-time-sub">Burger</p>
                  </div>
                  <div class="restaurant__content-rating">
                    <p class="restaurant__content-rating-quantity">4.6</p>
                    <img
                      src="../assets/img/restaurant-star.png"
                      alt=""
                      class="restaurant__content-rating-star"
                    />
                    <p class="restaurant__content-rating-quantity">(2,200)</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="restaurant__pagination">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      checkList: ["selected and disabled", "Option A"],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.restaurant__top {
  margin-top: 55px;
}
.restaurant__top-left {
  display: flex;
  align-items: center;
}
.filter__title {
  margin-right: 30px;
  color: var(--Dark, #191720);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.5; /* 150% */
}
.restaurant__clear,
.restaurant__content-item-desc {
  color: var(--Grey, #575363);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.75;
}
.restaurant__top-restaurant {
  margin-top: 30px;
  display: flex;
  align-items: center;
}
.restaurant__top-restaurant-desc,
.restaurant__top-restaurant-title {
  color: var(--Grey, #575363);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.5;
  margin-right: 30px;
}
.restaurant__top-restaurant-title:hover,
.restaurant__top-restaurant-desc:hover {
  cursor: pointer;
  color: var(--Dark, #191720);
}
.restaurant__top-restaurant-delivery {
  margin-top: 30px;
  display: flex;
  align-items: center;
  column-gap: 30px;
}
.restaurant__top-restaurant-btn {
  background: #fff;
  width: 135px;
  height: 44px;
  border: 1px solid #333;
  color: #333;
}
.restaurant__top-restaurant-btn:hover {
  border-radius: 6px;
  background: var(--purple-primary, #572af8);
  color: #fff;
}
.restaurant__top-category {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.restaurant__top-right {
  margin-top: 55px;
  margin-left: 30px;
}
.restaurant__top-right-title {
  color: var(--Dark, #191720);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.5;
}
.restaurant__top-right-desc {
  color: var(--purple-primary, #572af8);
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.667;
}
.restaurant__top-list {
  margin-top: 30px;
  display: flex;
  column-gap: 40px;
}
.restaurant__top-item {
  width: 64px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
}
.restaurant__top-item:hover {
  opacity: 0.8;
}
.restaurant__top-item:hover .restaurant__top-item-desc {
  cursor: pointer;
  color: var(--purple-primary, #572af8);
}
.restaurant__content-list {
  display: flex;
  flex-wrap: wrap;
  gap: 42px 30px;
}
.restaurant__top-item-link {
  height: 64px;
  width: 64px;
  flex-shrink: 0;
  display: flex;
  background: #fffae3;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
}
.restaurant__top-item-img {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  object-fit: cover;
}
.restaurant__top-item-desc {
  margin-top: 6px;
  color: var(--Dark, #191720);
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.75;
  text-align: center;
}
.restaurant__top-right-span {
  margin-left: 30px;
  margin-top: 46px;
  width: 100%;
  height: 1px;
  border-radius: 2px;
  background: var(--Dark, #191720);
}
/* body */
.restaurant__body-left {
  width: 262px;
}
.restaurant__body {
  margin-top: 45px;
  margin-left: 30px;
}
.el-menu-item .is-active:hover {
  background: #fff;
}
.restaurant__body-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.restaurant__body-title h5,
.restaurant__content-item-title {
  color: var(--Dark, #191720);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.5;
}
.restaurant__body-sort {
  color: var(--Grey, #575363);
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.667;
}
.restaurant__content {
  margin-top: 42px;
}
.restaurant__content-img {
  display: inline-block;
  width: 246px;
  height: 246px;
}
.restaurant__content-thumb {
  cursor: pointer;
  width: 100%;
  object-fit: cover;
}
.restaurant__content-item {
  display: inline-block;
}
.restaurant__content-item-title {
  margin-top: 12px;
  margin-bottom: 8px;
}
.restaurant__content-item-title:hover {
  opacity: 0.8;
  cursor: pointer;
}
.restaurant__content-item-desc {
  margin-bottom: 4px;
}
.restaurant__content-time {
  position: relative;
  display: flex;
  column-gap: 60px;
}
.restaurant__content-time::after {
  position: absolute;
  content: "";
  top: 0;
  left: 75px;
  width: 1px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 0.5px;
  background: var(--Grey, #575363);
}
.restaurant__content-time-title,
.restaurant__content-rating-quantity {
  color: var(--Grey, #575363);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.71;
}
.restaurant__content-time-sub {
  color: var(--Dark, #191720);
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.71;
}
.restaurant__content-rating {
  display: flex;
  align-items: center;
  column-gap: 6px;
  margin-top: 4px;
}
.restaurant__content-rating-star {
  width: 16px;
  height: 16px;

  object-fit: cover;
}
/* pagination */
.restaurant__pagination {
  margin-top: 76px;
  padding-bottom: 160px;
}
.nav-text {
  color: var(--Dark, #191720);
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
}
/* author */
.restaurant__rating {
  display: flex;
  align-items: center;
  column-gap: 6px;
}
</style>
