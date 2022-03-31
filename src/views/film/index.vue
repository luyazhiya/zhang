<template>
  <div>
    <FilmWrap/>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import FilmWrap from './components/FilmWrap.vue'
export default {
  name: 'film',
  components: {
    FilmWrap,
  },
}
</script>

<style lang="scss" scoped>

</style>