<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" alt="">
            <div class="banner-info">
                <div class="banner-title">
                    {{this.sightName}}
                </div>
                <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>
                    {{this.bannerImgs.length}}
                </div>
            </div>
        </div>
        <fade-animation>
            <Common-gallery 
                :imgs="bannerImgs" 
                v-show="showGallery" 
                @close="handleGallaryClose"
            ></Common-gallery>
        </fade-animation>
    </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/Fade'
export default {
    name: 'DetailBanner',
    props: {
        sightName: String,
        bannerImg: String,
        bannerImgs: Array
    },
    data () {
        return {
            showGallery: false
            // imgs: [
            //     "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg",
            //     "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
            // ]
        }
    },
    methods: {
        handleBannerClick () {
            this.showGallery = true
        },
        handleGallaryClose () {
            this.showGallery = false
        }
    },
    components: {
        CommonGallery,
        FadeAnimation
    }
}
</script>

<style lang="stylus" scoped>
.banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
        width: 100%
    .banner-info
        display: flex
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height: .6rem
        color: #fff
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
        .banner-title
            flex: 1
            font-size: .32rem
            padding: 0 .2rem
        .banner-number
            height: .32rem
            margin-top: .14rem
            padding: 0 .4rem
            line-height: .32rem
            border-radius: .2rem
            font-size: .24rem
            background: rgba(0, 0, 0, .8)
            font-size: .24rem
            .banner-icon
                font-size: .24rem
</style>

