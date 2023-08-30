<template>
  <header>
    <div class="container">
      <div class="inner">header</div>
    </div>
  </header>
  <router-view></router-view>
  <!-- footer -->
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="inner">footer</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
.inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100px;
  margin-bottom: 30px;
  background: #ccc;
  font-size: 30px;
  font-weight: 600;
}
</style>
