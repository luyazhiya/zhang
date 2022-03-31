// 封装好的划到底部无限加载
const scroll = {
  // 通过DOM添加的组件需要手动销毁
  mounted () {
    // 判断有没有这个方法有才可以使用
    if (this.$options.onScrollBottom || this.$options.onScroll) {
      window.addEventListener('scroll', this.scroll)
    }
  },
  // 销毁
  destroyed () {
    window.removeEventListener('scroll', this.scroll)
  },
  methods: {
    scroll () {
      const windowHeight = window.innerHeight
      const bodyHeight = document.body.clientHeight
      const scrollTop = document.querySelector('html').scrollTop
      if (bodyHeight - scrollTop -20 <= windowHeight) {
          this.commonParams.offset += 20
      }
    }
  }
}

export default scroll
