<template>
  <div class="tabtarbox">
    <div class="tabboxs">
      <template>
        <router-link
          v-for="(item, index) in titles"
          :key="index"
          :to="item.key"
          active-class="active"
          >{{ item.title }}
          </router-link>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "film-bar",
  props: {
    titles: Array,
    router: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.tabtarbox{
  width: 100%;
  display: flex;
  justify-content: center;
  .tabboxs {
    overflow: auto;
    display: flex;
    flex-direction: row;
    position: relative;
    a {
      padding: 14px 18px;
      color: #000;
      flex-shrink: 0;
      &.active {
        color: rgb(235, 11, 11);
      }
    }
  }
  .line {
    position: absolute;
    bottom: 5px;
    width: 25px;
    height: 3px;
    background: #f03d37;
    transition: all .5s ease;
  }
}
</style>