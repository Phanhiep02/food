<template>
  <div>
    <section class="sign-mt">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="hero__right sign-in-hero__right">
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
          <div class="col-lg-6">
            <div class="sign-in">
              <h4 class="sign-in__title">Sign In</h4>
              <div class="sign-in__social">
                <a href="">
                  <img src="../assets/img/login-fb.svg" alt="" />
                </a>
                <a href="">
                  <img src="../assets/img/login-gg.svg" alt="" />
                </a>
              </div>
              <p class="sign-in__or">OR</p>
              <form
                method="post"
                action="https://api-gateway.fullstack.edu.vn/action_page.php"
                autocomplete="off"
              >
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    placeholder="Nhập Email..."
                  />
                  <p class="error">Vui Lòng nhập đúng định dạng email</p>
                </div>

                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    minlength="6"
                    placeholder="Nhập mật khẩu"
                  />
                  <p class="error">Mật khẩu cần tí nhất 6 kí tự</p>
                </div>
                <p class="sign-in__forgot">Forgot password?</p>
                <div class="form-group">
                  <button class="btn submit-btn" type="submit">Sign In</button>
                </div>
              </form>
              <p class="sign-in__footer desc">
                Don’t a have account? <a href=""> Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sign-in-hero__right {
  padding-top: 46px;
}
.sign-mt {
  /* margin-top: 12px; */
  background: #fffae3;
  margin-bottom: 100px;
}
.sign-in {
  border-radius: 12px;
  background: #fffae3;
  width: 430px;
  flex-shrink: 0;
  padding: 30px;
  margin-left: 60px;
}
.sign-in__title {
  color: var(--Dark, #191720);
  text-align: center;
  font-size: 2.6rem;
  font-weight: 600;
  line-height: 1.38;
  margin-bottom: 30px;
}
.sign-in__social {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
.sign-in__or {
  color: var(--Grey, #575363);
  text-align: center;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.75;
  margin-top: 20px;
}
.sign-in__forgot {
  color: var(--Grey, #575363);
  text-align: right;
  margin-top: 12px;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.667;
}
.sign-in__footer {
  text-align: center;
  margin-top: 20px;
}
.sign-in__footer a {
  color: var(--Dark, #191720);
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 30px;
}
form {
  margin-top: 20px;
}

.form-group {
  margin-top: 16px;
}

.form-group label,
.form-group input {
  display: block;
}

.form-group label {
  font-weight: 600;
}

.form-group input {
  width: 370px;
  height: 60px;
  margin-top: 8px;
  padding: 6px 10px;
  border: 2px solid #ccc;
  border-radius: 8px;
}

.form-group .btn {
  width: 370px;
  height: 60px;
  margin-top: 20px;
  padding: 10px 28px;
  border: 1px solid transparent;
  border-radius: 8px;
  color: #fff;
  background: #572af8;
  cursor: pointer;
}

.form-group .btn:hover {
  opacity: 0.9;
}

.form-group .error {
  margin: 4px;
  font-size: 14px;
  font-weight: 500;
  color: red;
  display: none;
}
/* has() là trong thẻ cha có thằng này ko nếu có thì hiện ra cái này */
/* xử lý nhập sai mới hiện , còn ko có plavceholder chưa nhập gì vẫn hiện */
.form-group:has(:invalid:not(:placeholder-shown)) .error {
  display: block;
}

/* xử lý khi tất cả điều kiện thỏa mãn login mới chạy */
/* form:has(:invalid) .submit-btn {
  opacity: 0.5;
  pointer-events: none;
} */
</style>
