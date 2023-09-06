<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="coming-soon">
            <img
              src="../assets/img/coming-soon.png"
              alt=""
              class="coming-soon__img"
            />
            <h2 class="coming-soon__title">Coming Soon</h2>
            <p class="desc coming-soon__desc">
              Are you Ready to get something new from us. Then subscribe the
              news latter to get latest updates?
            </p>
            <div class="footer__social">
              <a class="footer__social-link">
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
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.coming-soon {
  margin: 100px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.coming-soon__img {
  width: 317px;
  height: 264px;
  object-fit: cover;
}
.coming-soon__title {
  width: 570px;
  margin-top: 38px;
  text-align: center;
  color: var(--Dark, #191720);
  font-size: 4.4rem;
  font-weight: 600;
  line-height: 1;
}
.coming-soon__desc {
  margin-top: 18px;
  width: 570px;
  margin-bottom: 38px;
  text-align: center;
}
</style>
