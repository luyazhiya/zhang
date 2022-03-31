<template>
  <div class="tabtarbox">
    <div class="tabboxs">
      <template>
        <a
          v-for="(item, index) in titles"
          :key="index"
          :class="{
            active: activeIndex === index 
          }"
          @click="actives(item,index, $event)"
          href="javascript:;"
          ref="navs"
          >{{ item.title }}</a
        >
      </template>
      <span class="line" ref="line"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab-bar",
  props: {
    titles: Array,
    router: Boolean,
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  mounted() {
    this.setLineLeft()
  },
  methods: {
    // 切换路由class
    actives(item,index) {
      if (this.router && this.$route.fullPath !== item.key) {
        this.$router.push(item.key)
      }
      this.activeIndex = index;
      this.$nextTick(() => {
        this.setLineLeft()
      })
    },
    // 换过小红点的计算
    setLineLeft() {
      const activeNav = this.$refs.navs[this.activeIndex]
      const windth = activeNav.clientWidth
      const left = activeNav.offsetLeft + windth / 2 - 13
      this.$refs.line.style.left = left + 'px'
    }
  },
};
</script>

<style lang="scss" scoped>
.tabboxs {
  overflow: auto;
  display: flex;
  flex-direction: row;
  position: relative;
  a {
    padding: 14px 18px;
    flex-shrink: 0;
    &.active {
      font-size: 18px;
      color: #000;
      font-weight: 200;
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
</style>