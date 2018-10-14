<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="" />
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: "HomeSwiper",
    props: {
        list: Array
    },
    data () {
      return {
        swiperOption: {
            pagination: '.swiper-pagination',
            loop: true
        }
      }
    },
    computed: {
        showSwiper() {
            return this.list.length
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff
    .wrapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 31.25% //让图片的宽高比自适应，需要把width设置为100%，height设置为0，padding-bottom设置为图片的宽高比。这么做是为了防止图片加载进来时的抖动感，利用宽高比让父元素先把内容去占了
        background: #eee
        .swiper-img
            width: 100%
</style>

