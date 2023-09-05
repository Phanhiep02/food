<template>
  <section>
    <div class="container">
      <a href="" class="back__food">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
        >
          <path
            d="M5 9L1 5L5 1"
            stroke="#191720"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h4 class="back__food-title">Back to The Burger Cafe</h4>
      </a>
      <div class="row">
        <div class="col-lg-6 col-sm-12">
          <div class="food__detail-left">
            <img
              src="../assets/img/detail-burger-01.png"
              alt=""
              class="food__detail-img"
            />
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1 col-sm-12">
          <div class="food__detail-right">
            <h3 class="food__detail-title">Eggs Benedict Burger</h3>
            <p class="food__detail-desc">
              Ground beef, hollandaise sauce mix, stone ground mustard, with a
              egg it’s so much taste you would like most this taste burger.
            </p>
            <h5 class="food__detail-price">$7.50</h5>
            <div class="food__detail-quantity">
              <div class="input-number">
                <el-input-number controls v-model="num" :min="1" :max="10" />
              </div>
              <button class="food__detail-quantity-btn">
                Add to cart: <span>15.00</span>
              </button>
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
      num: 1,
    };
  },
};
</script>

<style scoped>
.back__food {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
.back__food-title {
  color: var(--Dark, #191720);
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.667;
  padding-left: 5px;
}
.food__detail-img {
  width: 570px;
  height: 570px;
}
.food__detail-left {
  padding-bottom: 160px;
}
.food__detail-title {
  color: var(--Dark, #191720);
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.33;
}
.food__detail-desc {
  width: 470px;
  margin-top: 30px;
  color: var(--Grey, #575363);
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.667;
}
.food__detail-price {
  margin-top: 18px;
  color: var(--Orange, #f05e36);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.5;
}
.food__detail-quantity {
  display: flex;
  align-items: center;
  margin-top: 50px;
  column-gap: 18px;
}
.el-input-number {
  position: relative;
  display: inline-flex;
  width: 172px;
  height: 60px;
  line-height: 30px;
}
.food__detail-quantity-btn {
  width: 280px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(--Dark, #191720);
  border: none;
  color: #fff;
  cursor: pointer;
}
.food__detail-quantity-btn:hover {
  opacity: 0.9;
}
</style>
