<template>
  <div class="card-wrap">
    <header>
      <h2>
        {{title}}
        <slot name="header"></slot>
      </h2>
      <router-link :to="to" class="sub-title">{{subTitle}}</router-link>
    </header>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'card',
    props: {
      title:String,
      subTitle: String,
      to: String
    }
  }
</script>

<style lang="scss" scoped>
.card-wrap {
  border-radius: 10px;
  margin: 10px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  header {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      line-height: 44px;
      font-size: 14px;
      font-weight: bold;
    }
    .sub-title {
      font-size: 12px;
      color: #ccc;
      text-decoration: none;
    }
  }
}
</style>