<template>
  <swiper class="swiper-wrap" ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(item, index) in list" :key="index">
      <dl>
        <dt>
          <img :src="item.img" alt="" />
          <div class="labels">
            <label></label>
          </div>
        </dt>
        <dd>
          <h2>{{ item.nm }}</h2>
          <el-button
            type="primaty"
            round
            :color="item.showStateButton && item.showStateButton.color "
          >
            {{item.showStateButton && item.showStateButton.content || "想看"}}
          </el-button>
        </dd>
      </dl>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: "move-list",
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 4.2,
        spaceBetween: 5,
        freeMode: true,
        observer: true
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper-wrap{
  display: flex;
  .swiper-slide{
    width: 85px;
    // height: 165px;
    padding: 5px 5px;
    dl {
      dt {
        width: 85px;
        height: 115px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 5px;
        }
      }
      dd {
        padding: 8px 0 15px 0;
        h2 {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          margin-bottom: 5px;
        }
        button {
          padding: 3px 12px;
          background: #F03D37;
          color: #fff;
          border-radius: 20px;
        }
      }
    }
  }
}
</style>