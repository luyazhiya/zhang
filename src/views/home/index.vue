<template>
  <div class="home-page">
    <header-wrap/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import HeaderWrap from './components/HeaderWrap.vue'
export default {
  name: 'home',
  components: {
    HeaderWrap,
  },
}
</script>

<style lang="scss" scoped>
.home-page {
  padding-bottom: 50px;
  .content {
    background: rgb(236, 235, 235);
  }
}
</style>