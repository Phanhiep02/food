<template>
  <compHeader></compHeader>
  <router-view></router-view>
</template>

<script>
import compHeader from "../components/compHeader.vue";
export default {
  components: {
    compHeader,
  },
};
</script>

<style></style>
