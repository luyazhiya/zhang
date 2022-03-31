<template>
  <swiper class="swiper-wrap" ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(item, index) in list" :key="index">
      <dl>
        <dt>
          <img :src="item.posterUrl" alt="" />
          <div class="labels">
            <label></label>
          </div>
        </dt>
        <dd>
          <label>{{item.tagText}}</label>
          <h2>{{item.projectName}}</h2>
        </dd>
      </dl>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: "show-list",
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
        label {
          text-align: center;
          background-image: linear-gradient(to left, #f00, rgb(255, 115, 0));
          font-size: 12px;
          padding: 2px 5px;
          border-radius: 5px;
          transform: scale(0.8);
          display: block;
          transform-origin: left center;
          color: #fff;
          margin: 5px 0;
        }
        h2 {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          margin-bottom: 5px;
          color: #000;
          font-weight: bold;
        }
      }
    }
  }
}
</style>