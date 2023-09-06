<template>
  <section class="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-sm-12 offset-lg-3">
          <div class="contact__top">
            <h2 class="contact__top-title">
              Let’s talk with us for any issues or problem
            </h2>
            <img
              src="../assets/img/contact-img.png"
              alt=""
              class="contact__top-img"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="contact-form">
            <form
              method="POST"
              action="https://api-gateway.fullstack.edu.vn/action_page.php"
              autocomplete="off"
            >
              <div class="form-row">
                <div class="form-group">
                  <label for="first-name" class="form-label">First Name</label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    class="form-input"
                    placeholder="Enter first name"
                    required
                    minlength="2"
                  />
                  <p class="form-error">Nhập ít nhất 2 kí tự</p>
                </div>
                <div class="form-group">
                  <label for="Last-name" class="form-label">Last Name</label>
                  <input
                    type="text"
                    id="Last-name"
                    name="Last-name"
                    class="form-input"
                    placeholder="Enter last name"
                    required
                    minlength="2"
                  />
                  <p class="form-error">Nhập ít nhất 2 kí tự</p>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="form-input"
                    placeholder="Enter email"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  />
                  <p class="form-error">Nhập đúng email</p>
                </div>
                <div class="form-group">
                  <label for="tel" class="form-label">Phone</label>
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    class="form-input"
                    placeholder="Enter phone"
                    required
                    pattern="^(0|\+?84)(3|5|7|8|9)[0-9]{8}$"
                  />
                  <p class="form-error">Vui lòng nhập đúng số điện thoại</p>
                </div>
              </div>

              <!--  -->
              <div class="form-row">
                <div class="form-group">
                  <label for="message" class="form-label">message</label>
                  <textarea
                    name="message"
                    id="message"
                    class="form-textarea"
                    placeholder="Write your message..."
                    required
                    minlength="10"
                  ></textarea>
                  <p class="form-error">Vui lòng nhập đủ 10 kí tự</p>
                </div>
              </div>
              <div class="form-row submit-box">
                <button class="submit-btn" type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.contact {
  margin-top: 55px;
}
.contact__top {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 55px;
}
.contact__top-title {
  color: var(--Dark, #191720);
  text-align: center;
  font-size: 4.4rem;
  font-weight: 600;
  line-height: 1;
}
.contact__top-img {
  width: 340px;
  height: 264px;
  object-fit: cover;
}
/* contact-form */
.contact-form {
  flex-grow: 1;
  padding: 28px 32px;
}
/* nếu trong .contact-form mà có :invalid thì tác động vào .submit-btn */
.contact-form:has(:invalid) .submit-btn {
  opacity: 0.5;
  cursor: default;
}
.form-row {
  display: flex;
  gap: 32px;
  margin-bottom: 30px;
}

.form-group {
  flex-grow: 1;
}
/* khi muốn focus vào in put dùng :focus-within */
.form-group:focus-within .form-label:not(.large) {
  color: #ffcf54;
}
.form-group:focus-within .form-input {
  border-color: #ffcf54;
}
.form-label,
.form-input {
  display: block;
}

.form-label {
  font-size: 1.1rem;
  font-weight: 700;
  color: #76779e;
}
.form-label .large {
  font-size: 1.3rem;
}
.form-input,
.form-textarea {
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 2px solid #e3e3e9;
  padding: 8px 0 14px 0;
  /* chữ nhập tron input */
  color: #0d0d3b;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #bebfc9;
}
.form-textarea {
  resize: none;
}
.form-error {
  display: none;
  margin-top: 4px;
  font-size: 1.3rem;
  color: red;
}

/* code .form-error */
.form-group:has(:invalid:not(:placeholder-shown)) .form-error {
  display: block;
}
/* radio */
.radio-group {
  margin-top: 20px;
  display: flex;
}
.radio-btn {
  display: inline-block;
}
.radio-btn + .radio-btn {
  margin-left: 24px;
}
.radio-btn label {
  position: relative;
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 1.3rem;
  color: #474669;
}
.radio-btn label::before,
.radio-btn label::after {
  content: "";
  display: inline-block;
}

.radio-btn label::before {
  width: 12px;
  height: 12px;
  margin-right: 8px;
  border-radius: 50%;
  border: 2px solid #a7a7b6;
}
.radio-btn [type="radio"] {
  display: none;
}
.radio-btn [type="radio"]:checked + label::before {
  background: #5b32dc;
  border-color: #5b32dc;
}

.radio-btn [type="radio"]:checked + label::after {
  position: absolute;
  top: 2px;
  left: 3px;
  width: 9px;
  height: 5px;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  rotate: -45deg;
}
.submit-box {
  justify-content: flex-end;
}
.submit-btn {
  max-width: 160px;
  padding: 14px;
  height: 50px;
  color: #fff;

  background: var(--purple-primary, #572af8);
  outline: none;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.4rem;
}

.submit-btn:hover {
  opacity: 0.9;
  cursor: pointer;
}
</style>
