<template>
  <router-view name="header" />
  <router-view />
</template>

<script>
export default {
  name: "App",

  // beforeCreate -> created -> beforeMount -> mounted
  // beforeUpdate -> updated
  // beforeUnmount -> unmounted << vue3 기준 / beforeDestroy -> destroyed << vue2 기준
  // created, mounted, updated 가 많이 쓰인다
};
</script>

<style></style>
