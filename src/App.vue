<template>
  <!-- header -->
  <compHeader></compHeader>
  <router-view></router-view>
  <!-- footer -->
  <compFooter></compFooter>
</template>

<script>
import compHeader from "./components/compHeader.vue";
import compFooter from "./components/compFooter.vue";
export default {
  name: "App",
  components: {
    compHeader,
    compFooter,
  },
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
