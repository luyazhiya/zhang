<template>
  <div class="footer-nav"> 
    <router-link v-for="(item, index) in tabs" 
      :key="index" 
      :to="item.path"
      active-class="active"
    >
      <!-- 动态添加icon图标 ['标签名'，'icon名'，'分别传进来的icon图'] -->
      <i :class="['default','iconfont', item.icon]"></i>
      <i :class="['select','iconfont', item.selectIcon]"></i>
      <span>{{item.text}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'footer-bar',
  data () {
    return {
      tabs: [
        {
          path: '/home',
          icon: 'icon-shouye',
          selectIcon: 'icon-shouye1',
          text: '首页'
        },
        {
          path: '/film',
          icon: 'icon-yingyuan',
          selectIcon: 'icon-yingyuan1',
          text: '电影/影院'
        },
        {
          path: '/perform',
          icon: 'icon-yanchu',
          selectIcon: 'icon-yanchu1',
          text: '演出'
        },
        {
          path: '/match',
          icon: 'icon-huiyuan',
          selectIcon: 'icon-huiyuan1',
          text: '体育/赛事'
        },
        {
          path: '/mine',
          icon: 'icon-wode',
          selectIcon: 'icon-wode1',
          text: '我的'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-nav {
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  border-top: 1px solid #eee;
  z-index: 999;
  a {
    flex: 1;
    text-decoration: none;
    text-align: center;
    padding: 5px 0;
    color: #666;
    display: flex;
    flex-direction: column;
    i{
      font-size: 25px;
      margin-bottom: 2px;
    }
    .default {
      display: block;
    }
    .select {
      display: none;
    }
    span {
      font-size: 12px;
    }
    &.active {
      color: #f03d37;
      .default {
        display: none !important;
      }
      .select {
        display: block !important;
      }
    }
  }
}
</style>