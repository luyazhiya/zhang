<template>
  <div>
    <Banner :images='bannerList'/>

    <MiddleBar :listss='sideList'/>

    <Card
      title="正在热映"
      subTitle="全部19部"
      to="/film/heat"
    >
      <move-list :list="hotList" />
    </Card>

    <Card
      subTitle="全部19部"
      to="/film/shown"
    > 
      <template v-slot:header>
        <nav class="move-tab">
        <a href="javascript:;" :class="{active:moveTabIndex == 0 }" @click="moveChange(0)">待映推荐</a>
        <a href="javascript:;" :class="{active:moveTabIndex == 1 }" @click="moveChange(1)">即将上映</a>
      </nav>
      </template>
      <div>
          <move-list key="highComing" v-show="moveTabIndex == 0" :list="highComing" />
          <move-list key="comingList" v-show="moveTabIndex == 1" :list="comingList" />
      </div>
    </Card>

    <Card
      title="精彩演出"
      subTitle="查看全部"
      to="/film"
    >
      <show-list  :list="ShowList" />
    </Card>
    <Card
      title="猫眼放映厅"
      subTitle="全部392部"
      to="/film"
    >
      <move-list :list="hotList" />
    </Card>
    
    <!-- 瀑布流标签 -->
    <div>
        <LoadMore  :list="commonList"/> 
    </div>
  </div>
</template>

<script>
import MiddleBar from './components/MiddleBar.vue'
import Banner from './components/Banner.vue'

  export default {
    name:'recommend',
    components: {
    Banner,
    MiddleBar
    },
    data() {
      return {
        bannerList:[],
        sideList:[],
        hotList:[],
        comingList: [],
        highComing: [],
        moveTabIndex: 0,
        ShowList: [],
        commonParams: {
          offset: 0,
          limit: 20
        },
        commonList: []
      }
    },
    watch: {
      commonParams: {
        handler: 'fetchCommon',
        deep: true,
        immediate: true
      }
    },
    created () {
      this.fetchHomeBanner()
      // this.fetchCommon()
    },
    onScrollBottom () {
      this.commonParams.page += 1
    },
    methods: {
        fetchHomeBanner() {
          this.$api.home.banner().then((res) => {
            this.bannerList = res.data.data[0].config
          })
          this.$api.home.side().then((res) => {
            this.sideList = res.data.data[0].config
          })
          this.$api.home.hotMove().then((res) => {
            this.hotList = res.data.data.hot
          })
          // 待映推荐
          this.$api.home.coming().then((res) => {
            this.comingList = res.data.data.coming
            console.log(this.comingList);
          })
          // 即将上映
          this.$api.home.highComing().then((res) => {
            this.highComing = res.data.data.coming
          })
          // 精彩演出
          this.$api.home.wonderfulShow().then((res) => {
            this.ShowList = res.data.data
          })
        },
          // 瀑布流
        fetchCommon () {
          this.$api.home.common(this.commonParams).then((res) => {
            if (this.commonParams.page === 1) {
              this.commonList = res.data.data.feeds
            } else {
              this.commonList = this.commonList.concat(res.data.data.feeds)
            }
          })
        },
        moveChange(index) {
          this.moveTabIndex = index 
        }
      }
    }
</script>

<style lang="scss" scoped>
.move-tab {
  a {
    font-size: 14px;
    margin-right: 10px;
    color: #ccc;
    font-display: none;
    text-decoration: none;
    &.active {
      color: #000;
    }
  }
}
</style>