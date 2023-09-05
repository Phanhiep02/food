<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="cart__page">
          <div class="cart__page-top">
            <ul class="cart__top-list">
              <li class="cart__top-item">Food</li>
              <li class="cart__top-item">Price</li>
              <li class="cart__top-item">Quantity</li>
              <li class="cart__top-item">Subtotal</li>
            </ul>
          </div>
          <div class="cart__page-top-span"></div>
          <div class="cart__page-body">
            <div class="cart__page-inner">
              <ul class="cart__page-list">
                <li class="cart__page-item">
                  <button class="icon-delete">
                    <el-icon><Delete /></el-icon>
                  </button>
                  <img
                    src="../assets/img/detail-burger-01.png"
                    alt=""
                    class="cart__page-img"
                  />
                  <p class="cart__page-desc">Crispy chicken breasts</p>
                  <h5 class="cart__page-price">$24.99</h5>
                  <div class="input__number">
                    <button class="minus-btn" type="button">-</button>
                    <input type="text" class="input__quantity" value="1" />
                    <button class="plus-btn" type="button">+</button>
                  </div>
                  <p class="cart__page-price-subtotal">$24.99</p>
                </li>
                <div class="cart__page-top-span"></div>
              </ul>

              <div class="cart__page-update">
                <button class="cart__page-update-btn">Update Cart</button>
              </div>
              <!-- a -->
              <!-- total -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <div class="cart__total">
          <h3 class="cart__total-title">Cart totals</h3>
          <div class="cart__total-body">
            <p class="cart__total-quantity">total quantity: <span>3</span></p>
            <h5 class="cart__total-price">total: <span>$24.99</span></h5>
            <div class="cart__total-btn">
              <button>Go to Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
.cart__page {
  width: 100%;
  height: 360px;
  margin-top: 68px;
  flex-shrink: 0;
  overflow-y: auto;
  margin-bottom: 50px;
  border: 1px solid #e2d2a8;
}
.cart__page::-webkit-scrollbar {
  width: 10px; /* Chiều rộng của thanh cuộn */
}

/* Tùy chỉnh thanh cuộn khi cuộn lên trên */
.cart__page::-webkit-scrollbar-thumb {
  background-color: #e2d2a8; /* Đặt màu cho thanh cuộn */
  border-radius: 5px; /* Độ cong viền thanh cuộn */
}

/* Tùy chỉnh thanh cuộn khi cuộn xuống dưới */
.cart__page::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Màu khi di chuột qua thanh cuộn */
}

/* Tùy chỉnh thanh cuộn track (phần nền của thanh cuộn) */
.cart__page::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* Màu nền của track */
}

/* Tùy chỉnh khi thanh cuộn ẩn đi */
.cart__page::-webkit-scrollbar-track-piece:end {
  background-color: transparent; /* Ẩn cuối thanh cuộn khi không còn nội dung để cuộn */
}
.cart__page-top {
  padding-left: 375px;
}
.cart__page-top-span {
  width: 100%;
  height: 1px;
  background: #e2d2a8;
  margin-top: 24px;
  margin-bottom: 28px;
}
.cart__top-list {
  display: flex;
  padding-top: 24px;
}
.cart__top-list .cart__top-item:nth-child(2) {
  padding-left: 248px;
}
.cart__top-list .cart__top-item:nth-child(3) {
  padding-left: 100px;
}
.cart__top-list .cart__top-item:nth-child(4) {
  padding-left: 166px;
}
.cart__top-item {
  color: var(--Dark, #191720);
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.75; /* 175% */
}
.cart__top-list {
  display: flex;
}

.cart__page-item {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.icon-delete {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 38px;
  border: none;
  border-radius: 16px;
}
.icon-delete:hover {
  opacity: 0.9;
  cursor: pointer;
  background: #ee4d2d;
  color: #fff;
}
.cart__page-img {
  width: 130px;
  height: 130px;
  display: block;
  object-fit: cover;
}
.cart__page-desc {
  width: 200px;
  color: var(--Grey);
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.667;
}
.cart__page-price,
.cart__page-price-subtotal {
  color: var(--Orange, #f05e36);
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
}
.input__number {
  width: 150px;
  display: flex;
}
.minus-btn,
.plus-btn {
  background-color: #e2d2a8; /* Màu nền */
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
}
.minus-btn:hover,
.plus-btn:hover {
  opacity: 0.8; /* Màu nền khi di chuột qua */
}
.input__quantity {
  width: 40px;
  text-align: center;
  font-size: 18px;
  border: none;
  outline: none;
}
.cart__page-update {
  padding-bottom: 36px;
  display: flex;
  justify-content: flex-end;
  margin-right: 40px;
}
.cart__page-update-btn {
  width: 155px;
  border: none;
  height: 42px;
  background: #572af8;
  color: #fff;
  border-radius: 4px;
}
.cart__page-update-btn:hover {
  opacity: 0.9;
  cursor: pointer;
}
/* total */
.cart__total {
  padding: 30px 0 30px 40px;
}
.cart__total-title {
  color: var(--Dark, #191720);
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
}
.cart__total-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cart__total-quantity,
.cart__total-price {
  margin-top: 16px;
  color: var(--Grey);
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.667;
}
.cart__total-quantity span {
  margin-top: 16px;
  color: var(--Dark, #191720);
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.667;
}
.cart__total-price span {
  color: var(--Orange, #f05e36);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.5;
}
.cart__total-price {
  margin-top: 16px;
}
.cart__total-btn {
  margin-top: 16px;
}
.cart__total-btn button {
  border: none;
  width: 175px;
  height: 48px;
  background: #572af8;
  color: #fff;
}
.cart__total-btn button:hover {
  opacity: 0.9;
  cursor: pointer;
}
</style>
