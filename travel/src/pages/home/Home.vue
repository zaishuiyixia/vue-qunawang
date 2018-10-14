<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header' //引入的是局部组件，需要再下面注册引入的局部组件
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    name: 'Home',
    data () {
        return {
            lastCity: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    components: {
        HomeHeader, //es6语法，键和值想等时的简写，注册完之后就可以再template模板里用这个组件了
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend,
    },
    computed: {
        ...mapState(['city'])
    },
    methods: {
        getHomeInfo () {
            //axios返回的结果是一个promise对象
            axios.get('/api/index.json?city=' + this.city)
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.swiperList = data.swiperList
                this.iconList = data.iconList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
            }
            console.log('city==>', this.city)
        }
    }
    ,
    mounted () {
        this.lastCity = this.city
        this.getHomeInfo()
    },
    activated () {
        if (this.lastCity !== this.city) {
            this.lastCity = this.city
            this.getHomeInfo()
        }
    }
}
</script>
