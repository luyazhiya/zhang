<template>
  <div class="header-wrap">
    <header>
      <a href="javascript:;">中牟县</a>
      <search-bar :placeholder="hotSearchWord" to="/search"/>
    </header>
    <tab-bar :titles="list" router/>
  </div>
</template>

<script>
export default {
  name: 'header-wrap',
  data () {
    return {
      hotSearchWord: [
        '这个杀手不太冷静',
        '新蝙蝠侠',
        '长津湖之水门桥'
      ],
      list: [
        { 
          title: "推荐" ,
          key: '/home/recommend'
        },
        { 
          title: "热片解读" ,
          key: '/home/hotspot'
        },
        { 
          title: "预告片",
          key: '/home/notice'
        },
        { 
          title: "说电影",
          key: '/home/move'
        },
        { 
          title: "佳片",
          key: '/home/good'
        },
        { 
          title: "剧综",
          key: '/home/variety'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header-wrap {
  header {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      font-size: 12px;
      text-decoration: none;
      flex-shrink: 0;
      color: #333;
      margin-right: 20px;
    }
  }
}
</style>