<template>
    <div class="index">
        <!-- 首页轮播 -->
        <swiper ref="mySwiper" class="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item, index) in banner" :key="index">
                <a :href="item.url">
                    <img :src="item.img" alt="">
                </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <!-- 公告 -->
        <div class="notice flex ali_center">
            <img src="@/assets/images/home/laba.png" alt="">
            <swiper ref="notice" class="swiper" :options="noticeSwiper">
               <swiper-slide v-for="(item, index) in bannerTxt" :key="index" >
                    <div style="color:#da428d;">
                        <p class="line" @click="$router.push('/gonggao/'+ item.id )">{{item.title}}</p>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="more"></div>
        </div>
        <div class="list">
            <div class="title flex ali_center flex_between">
                <div class="left">更多共识区</div>
                <div @click="$router.push('/kqp_goods_list/1')" class="right flex ali_center">
                    <span>更多</span>
                    <van-icon name="arrow"></van-icon>
                </div>
            </div>
            <goodslist></goodslist>
        </div>
        <!-- <div class="list">
            <div class="title flex ali_center flex_between">
                <div class="left">购物商城</div>
                <div @click="$router.push('/kqp_goods_list/2')" class="right flex ali_center">
                    <span>更多</span>
                    <van-icon name="arrow"></van-icon>
                </div>
            </div>
            <recommend :list="list"></recommend>
        </div> -->
        <bottom-nav></bottom-nav>
    </div>
</template>
<script>
import bottomNav from "@/views/common/footernav";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import goodslist from "@/views/goodsList";
import recommend from "@/views/recommend";
import "swiper/swiper-bundle.css";
export default {
    name: "kqp_index",
    components: {
        bottomNav,
        goodslist,
        recommend,
        swiper,
        swiperSlide,
    },
    data() {
        return {
            noticeSwiper: {
                direction: "vertical",
                loop: true,
                speed: 500,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
            },
            swiperOptions: {
                loop: true,
                speed: 2000,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                // 显示分页
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true, //允许分页点击跳转
                },
            },
            // list: []
            banner:[],
            bannerTxt: [],
        };
    },
    mounted(){
        // this.onLoad()
        this.getlist()
    },
    methods:{
       async getlist(){
            let res = await $ajax('kuang', {})
            if (!res) return false
            this.banner = res.banner
            this.bannerTxt = res.bannerTxt
            // this.btc = res.btc
            // this.eth = res.eth
            // this.fil = res.fil
            // this.footer = res.footer
            // this.btc_url = res.btc_url
            // this.eth_url = res.eth_url
            // this.fil_url = res.fil_url
            
        },
    },
    
};
</script>
<style lang="less" scoped>
.index {
    .mySwiper {
        .swiper-container {
            background: #ccc;
        }
        .pagination-bullet-active {
            color: #fff;
        }
        .swiper-slide {
            height: 50vw;
            img {
                width:100%;
                height: 50vw;
            }
        }
    }
    .notice {
        padding: 0 4vw;
        img {
            width: 5.33vw;
            height: 5.33vw;
        }
        .swiper {
            width: 76vw;
            height: 12vw;
            line-height: 12vw;
            font-size: 3.2vw;
            p {
                width: 76vw;
            }
        }
        .more {
            color: #999;
            font-size: 3.2vw;
        }
    }
    .list {
        box-sizing: border-box;
        * {
            box-sizing: border-box;
        }
        .title {
            height: 12vw;
            padding: 0 4vw;
            .left {
                position: relative;
                &::after {
                    position: absolute;
                    content: "";
                    top: 0;
                    bottom: 0;
                    margin: auto 0;
                    width: 1vw;
                    height: 4vw;
                    background: #fc4142;
                    left: -2vw;
                }
            }
            .right {
                color: #666;
                font-size: 3.2vw;
            }
        }
    }
}
</style>