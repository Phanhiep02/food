<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="page__found">
            <img
              src="../assets/img/404page.png"
              alt=""
              class="page__found-img"
            />
            <p class="desc page__found-desc">
              Sorry, the page you’re looking for doesn’t exist. If you think
              something is broken, report a porblem
            </p>
            <a href="" class="btn page__found-btn">Go to Home</a>
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
.page__found {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 100px;
}
.page__found-img {
  width: 369px;
  height: 264px;
  object-fit: cover;
}
.page__found-desc {
  margin: 38px 0;
  width: 570px;
}
.page__found-btn:hover {
  cursor: pointer;
  opacity: 0.8;
}
</style>
