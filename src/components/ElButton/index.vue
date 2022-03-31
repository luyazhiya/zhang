<template>
  <button
    :class="{
      btn:true,
      [type]:true,
      plain:plain,
      round:round
    }"
    :style="{
      background: color
    }"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'el-button',
    props: {
      color: {
        type: String,
        default: '#faaf01'
      },
      type: {
        type: String,
        required: true,
        validtor (value) {
          return ['primary', 'success', 'warning'].includes(value)
        }
      },
      plain: Boolean,
      round: Boolean,
    }
  }
</script>

<style lang="scss" scoped>
$colors: (
  primary: #f03e38,
  success: #3b9fe6,
  warning: #faaf01,
);
.btn {
    border: 1px solid transparent;
    padding: 2px 10px;
    color: #fff;
    display: block;
    margin-bottom: 10px;
    font-size: 12px;
    // 类名类名：匹配同时具有这两个类的元素
    @each $name, $color in $colors {
        &.#{$name} {
            background:  $color;
            &.plain {
              background: transparent;
              border-color: $color;
              color: $color;
            }
            &.round {
              border-radius: 20px;
            }
        }
    }
}
</style>