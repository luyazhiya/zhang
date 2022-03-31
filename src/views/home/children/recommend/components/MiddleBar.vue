<template>
  <div class="content">
    <div class="navs">
      <div class="dafa">
      <router-link
        v-for="(item, index) in list"
        :key="index"
        :to="item.path"
        tag="dl"
      >
        <dt>
          <img :src="item.image" />
        </dt>
        <dd>
          <a href="javascript:;">{{item.text}}</a>
        </dd>
      </router-link>
    </div>
    <div class="roll-faren">
      <div v-for="(items,index) in listss" :key="index" class="roll">
        <img :src="items.materialItems[0].value" alt="" class="logo">
        <p>{{items.materialItems[1].value}}</p>
        <img :src="items.materialItems[4].value" alt="" class="log">
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'MiddleBar',
  props: {
    listss: Array
  },
  data () {
    return {
      list: [
        {
        path: '/film',
        image: 'https://p0.meituan.net/movie/ecc418da931f5d52e1759533bd498e6a16723.png@1l_1e_1c_52w_52h',
        text:'电影/影院'
        },
        {
        path: '/mine',
        image: 'https://p0.meituan.net/movie/219edb2e879bb17c4d93f2bb914cd0bc17054.png@1l_1e_1c_52w_52h',
        text:'演出/玩乐'
        },
        {
        path: '/perform',
        image: 'https://p0.meituan.net/movie/055ed462172a02e5684d33c6895cbecb16414.png@1l_1e_1c_52w_52h',
        text:'放映厅'
        },
        {
        path: '/film',
        image: 'https://p0.meituan.net/movie/7033142e0758232bcf40c1c4cb0bdd9517882.png@1l_1e_1c_52w_52h',
        text:'赛事'
        }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
  .content{
    width: 100%;
    .navs{
      margin: 0 10px;
      background: #fff;
      border-radius: 10px;
    .dafa {
      display: flex;
      justify-content: space-around;
      padding: 15px 0;
      dl{
        dd {
          text-align: center;
          font-size: 12px;
          a{
            color: #999;
            text-decoration: none;
          }
        }
      }
  }
  .roll-faren {
    width: 100%;
    display: flex;
    overflow: auto;
    padding: 12px 0px;
    .roll {
      width: 85px;
      height: 60px;
      border: 1px solid #ccc;
      border-radius: 10px;
      font-size: 14px;
      text-decoration: none;
      color: #333;
      flex-shrink: 0;
      margin-left: 10px;
      position: relative;
      .logo {
        width: 60px;
        height: 15px;
        padding: 10px 0 0px 10px;
      }
      p {
        margin: 0 5px;
      }
      .log {
        width: 32px;
        height: 17px;
        position: absolute;
        top: 43px;
        left: 49px;
      }
    }
  }
    }
  }
</style>