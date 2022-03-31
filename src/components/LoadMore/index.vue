<template>
  <div class="waterfall-list">
    <div class="left">
      <div v-for="(item,index) in leftList" :key="index">
        <dl>
          <dt>
            <img :src="item.images[0].url" alt="">
          </dt>
          <dd>
            <div v-if="item.product" class="product">
              <i class="move-icon"></i>
              <span>{{item.product.name}}</span>
            </div>
            <h2 class="title">{{item.title}}</h2>
            <div v-if="item.user" class="user">
              <div class="info">
                <img :src="item.user.avatarurl" alt=""><small>{{item.user.nickName}}</small>
              </div>
              <div class="up-count">
                <i class="zan-icon"></i>
                <output>{{item.upCount}}</output>
              </div>
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <div class="right">
      <div v-for="(item,index) in rightList" :key="index">
        <dl>
          <dt>
            <img :src="item.images[0].url" alt="">
          </dt>
          <dd>
            <div v-if="item.product" class="product">
              <i class="move-icon"></i>
              <span>{{item.product.name}}</span>
            </div>
            <h2 class="title">{{item.title}}</h2>
            <div v-if="item.user" class="user">
              <div class="info">
                <img :src="item.user.avatarurl" alt=""><small>{{item.user.nickName}}</small>
              </div>
              <div class="up-count">
                <i class="zan-icon"></i>
                <output>{{item.upCount}}</output>
              </div>
            </div>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'laadmore',
    props: {
      list: Array
    },
    data () {
      return {
        leftList: [],
        rightList: []
      }
    },
    watch: {
      list (newValue) {
        const colHeight = [0, 0]
        const left = []
        const right = []
        newValue.forEach ((item) => {
          // 求最小值和最小值的索引  colHeight获取第一行高度最小的
          const min = Math.min.apply(null, colHeight)
          // 最小索引
          const minIndex = colHeight.indexOf(min)
          // 修改初始最小的列高..循环 (最小高加上底下的高)
          colHeight[minIndex] += item.images[0].hight + (item.title.length <= 10 ? 41 : 62)
          if (item.product) {
            // product这个标签有高度就加17
            colHeight[minIndex] += 17
          }
          if (item.user) {
            // user这个标签有高度就加17
            colHeight[minIndex] += 25
          }
          if (minIndex === 0 ) {
            left.push(item)
          } else {
            right.push(item)
          }
        })
        this.leftList = left
        this.rightList = right
      },
      immediate: true
    }
  }
</script>

<style lang="scss" scoped>
.waterfall-list {
  display: flex;
  .left,.right {
    width: 50%;
    padding: 0 10px;
    dl {
      border-radius: 5px;
      overflow: hidden;
      background: #fff;
      margin-bottom: 10px;
      dt {
        width: 100%;
        img {
          display: block;
          width: 100%;
        }
      }
      dd {
        padding: 10px;
        .title {
          font-size: 14px;
          font-weight: bold;
          line-height: 1.5;
          max-height: 62px;
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .user {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 5px;
          overflow: hidden;
          .info {
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              display: block;
              width: 20px;
              border-radius: 100%;
            }
            small {
              font-size: 12px;
              margin-left: 10px;
            }
          }
        }
        .product {
            font-size: 12px;
            margin-bottom: 5px;
            font-weight: bold;
            color: #666;
          }
      }
    }
  }
}
</style>