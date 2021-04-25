<template>
    <div class="detail">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" size="20" />
            <p>拼团详情</p>
        </div>
        <!-- 轮播 -->
        <swiper ref="mySwiper" class="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item, index) in thumb_url" :key="index">
                <img :src="item" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <!-- 拼团商品 -->
        <div class="goods_info" v-if="true">
            <div class="top flex ali_center flex_between">
                <div class="left flex ali_center flex_between">
                    <div class="price flex">
                        <p>拼团价</p>
                        {{groupsprice}}
                        <span>{{price}}</span>
                    </div>
                    <div class="des">
                        <p>11人拼团</p>
                        <p>8人得奖励</p>
                    </div>
                </div>
                <div class="right">第630团</div>
            </div>
            <div class="store_name flex ali_center flex_between">
                <div class="left line2">{{title}}</div>
                <div class="right flex ali_center">
                    <p>奖励</p>
                    <p>{{fic}}</p>
                </div>
            </div>
            <div class="pinklist">
                <div class="title flex ali_center flex_between">
                    <div class="left">{{groupnum}}人正在拼团,可直接参与</div>
                    <div class="right flex ali_center" @click="chakanlist">
                        <span>查看参团成员</span>
                        <van-icon name="arrow"></van-icon>
                    </div>
                </div>
                <div class="list flex ali_center flex_between">
                    <div class="left flex ali_center">
                        <img :src="thumb_url" v-for="(item, index) in groupnum" :key="index" alt="">
                    </div>
                    <div class="right">还差<span>0</span>人成团</div>
                </div>
            </div>
        </div>
        <div class="goods_info_1" v-else>
            <div class="store_name">{{title}}</div>
            <div class="price">￥{{groupsprice}}</div>
            <div class="price_1">￥{{price}}</div>
            <div class="num">库存：6000</div>
        </div>
        <div class="content">
            <div class="title">-商品详情-</div>
            <div v-html="content"></div>
        </div>
        <div style="height:14vw;"></div>
        <div class="footer flex">
            <div @click="$router.push('/kqp_index')" class="left flex ali_center">
                <van-icon name="wap-home-o" />
                <span>首页</span>
            </div>
            <div class="right" v-if="true" @click="submit">立即参团</div>
            <div class="right" v-else  @click="submit">立即购买</div>
        </div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
    name: "kqp_detail",
    components: {
        swiper,
        swiperSlide,
    },
    data() {
        return {
            detail: '这里是商品详情',
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
            id:"",
            title:"",
            category:"",
            stock:"",
            price:"",
            groupsprice:"",
            groupnum:"",
            sales:"",
            content:"",
            thumb_url:"",
            fic:"",
            status:"",
            rand_num:"",
        };
    },
    created(){
        this.id = this.$route.params.id
        this.getData()
    },
    methods: {
        async getData(){
            let res = await $ajax('groupgoodsdetail', {id: this.id})
            if(!res) return false
            // this.money = res.money
         
            Object.keys(res).forEach((key) => {
                this[key] = res[key]
            })
        },
        chakanlist(){
            this.$router.push({
                path: "/pinklist/" + this.id
            })
        },
        submit() {
            this.$router.push({
                path: "/ptorderSubmit",
                query: {
                    id: this.id
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
* {
    box-sizing: border-box;
}
.detail {
    background-color: #f7f7f7 !important;
    .header {
        width: 100%;
        height: 12vw;
        position: relative;
        background-color: #fff;
        .van-icon {
            position: absolute;
            top: 0;
            left: 3vw;
            bottom: 0;
            height: 4vw;
            margin: auto 0;
        }
        p {
            width: 100%;
            line-height: 12vw;
            font-size: 4vw;
            text-align: center;
        }
    }
    .mySwiper {
        .swiper-container {
            background: #ccc;
        }
        .pagination-bullet-active {
            color: #fff;
        }
        .swiper-slide {
            height: 100vw;
            img {
                width:100%;
                height: 100vw;
            }
        }
    }
    .goods_info {
        background-color: #fff;
        .top {
            height: 12vw;
            width: 100vw;
            padding: 0 2.4vw;
            background-image: url("../assets/images/btn_bg.png");
            background-size: 100% 100%;
            .left {
                color: #fff;
                width: 70vw;
                .price {
                    font-size: 6vw;
                    font-weight: 600;
                    line-height: 12vw;
                    p {
                        font-size: 3.73vw;
                        font-weight: 100;
                        margin-right: 1vw;
                    }
                    span {
                        margin-left: 1vw;
                        font-size: 3.2vw;
                        font-weight: 100;
                    }
                }
                .des {
                    font-size: 3vw;
                }
            }
            .right {
                color: #fc4142;
                font-size: 3.47vw;
            }
        }
        .store_name {
            padding: 1.5vw 2.4vw;
            .left {
                width: 80vw;
                font-size: 3.73vw;
            }
            .right {
                width: 10vw;
                height: 10vw;
                border-radius: 2vw;
                background-color: #fc4142;
                color: #fff;
                font-size: 3.2vw;
                flex-direction: column;
                justify-content: center;
            }
        }
        .pinklist {
            background-color: #fff;
            padding: 0 3vw;
            margin: 2.4vw 0;
            .title {
                border-bottom: 1px solid #f7f7f7;
                height: 12vw;
                color: #999;
                font-size: 3.2vw;
            }
            .list {
                height: 15vw;
                padding: 0 5vw 0 2vw;
                .left {
                    img {
                        width: 8vw;
                        height: 8vw;
                        border-radius: 50%;
                        margin-left: -3vw;
                        border: 1px solid #f7f7f7;
                    }
                }
                .right {
                    color: #333;
                    font-size: 3.2vw;
                    span {
                        color: #fc4142;
                    }
                }
            }
        }
    }
    .goods_info_1 {
        background-color: #fff;
        padding: 0 2.4vw 3vw;
        .store_name {
            font-size: 4.2vw;
            color: #333;
        }
        .price {
            font-size: 5vw;
            color: #fc4142;
            margin-top: 1vw;
        }
        .price_1 {
            text-decoration: line-through;
            font-size: 3.47vw;
            line-height: 8vw;
        }
        .num {
            color: #666;
            font-size: 3.47vw;
        }
    }
    .content {
        .title {
            height: 12vw;
            color: #999;
            font-size: 4.5vw;
            line-height: 12vw;
            text-align: center;
        }
    }
    .footer {
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        height: 12vw;
        background-color: #fff;
        .left {
            width: 10vw;
            flex-direction: column;
            justify-content: center;
            color: #666;
            span {
                font-size: 3.47vw;
            }
        }
        .right {
            width: 90vw;
            text-align: center;
            line-height: 12vw;
            background-color: rgb(255,65,66);
            color: #fff;
        }
    }
}
</style>