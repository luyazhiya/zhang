<template>
  <div class="header-wrap">
    <header>
      <a href="javascript:;">中牟县</a>
      <search-bar :placeholder="hotSearchWord" to="/search"/>
    </header>
    <Filmbar :titles="list" router/>
  </div>
</template>

<script>
export default {
  name: 'film-wrap',
  data () {
    return {
      hotSearchWord: [
        '这个杀手不太冷静',
        '新蝙蝠侠',
        '长津湖之水门桥'
      ],
      list: [
        { 
          title: "热映",
          key: '/film/heat'
        },
        { 
          title: "影院", 
          key: '/film/ying'
        },
        { 
          title: "待映",
          key: '/film/shown'
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