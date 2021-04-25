<template>
    <div class="pinklist" v-if="list.length">
      <van-list
        v-model="loading"
        :finished="finished"
        :finished-text="'我是有底线的'"
        @load="onLoad"
        >
        <div
          class="pinkitem flex flex_between"
          v-for="(item, index) in list"
          :key="index"
          @click="$router.push('/kqp_detail/' + item.id)"
        >
          <img class="goodsimg" :src="item.thumb" />
          <div class="infos">
            <div class="store_name line2">{{item.title}}</div>
            <div class="price_member flex flex_between">
              <div class="price flex">
                <div class="price_1">
                  ￥<span>{{item.groupsprice}}</span>
                </div>
                <div class="ot_price">￥{{item.price}}</div>
              </div>
              <div class="pinkmember">
                <div v-if="item.groupnum < 3">
                  <img
                    class="avatar"
                    v-for="(itemm, indexx) in item.groupnum"
                     src="@/assets/images/icon/1.png"
                    :key="indexx"
                  />
                </div>
                <!-- <img class="avatar" src="@/assets/images/icon/1.png" /> -->
              </div>
            </div>
            <div class="ali_center btns flex flex_between">
                <div class="left">
                    <div class="a">
                    1人拼团
                    </div>
                    <div class="b">
                    1人奖励1PPVB
                    </div>
                </div>
                <van-icon name="arrow" color="#fc4142"></van-icon>   
            </div>
          </div>
        </div>
      </van-list>
      <div
        v-if="list.length == 0"
        class="nolist"
        style="width: 100%;line-height: 12vw;text-align: center;color: #999999;font-size: 4vw;"
      >
        暂无商品~
      </div>
    </div>
</template>
<script>
export default {
    name: "goodsList",
    props: {
        // list: {
        //     type: Array,
        //     default: () => []
        // }
    },
    data() {
      return{
        page: 1,
        limit: 10,
        finished: false,
        loading: false,
        list: [],
      }
    },
    mounted() {
      this.onLoad()
    },
    methods: {
      async onLoad(){
        let res = await $ajax('groupgoods', { page: this.page,})  //活动列表
        if(!res) return false
        console.log(res)
        // this.money = res.money
        
        this.page++
        console.log(res.list)
        this.list.push(...res.list)
        // // 加载状态结束
        this.loading = false
        if (res.list.length === 0) {
            this.finished = true //加载完成
        } 
      }
    }
}
</script>
<style lang="less" scoped>
* {
    box-sizing: border-box;
}
.pinklist {
    padding: 0 2.67vw;
    .pinkitem {
        background-color: #fff;
        margin-bottom: 2.67vw;
        width: 94.67vw;
        height: 38.67vw;
        padding: 2.7vw;
        border-radius: 3vw;
        .goodsimg {
            width: 33.2vw;
            height: 33.2vw;
            border-radius: 2vw;
        }
        .infos {
            width: 52vw;
            .store_name {
                font-size: 3.47vw;
                color: #333333;
                font-weight: 600;
            }
            .price_member {
                height: 13vw;
                align-items: center;
                .price {
                    align-items: center;
                    .price_1 {
                        color: #fc4142;
                        font-size: 3.47vw;
                        text {
                        font-size: 4.8vw;
                        }
                    }
                    .ot_price {
                        color: #999999;
                        font-size: 3.2vw;
                    }
                }
                .pinkmember {
                    position: relative;
                    width: 13.61vw;
                    height: 5.07vw;
                    .avatar {
                        position: absolute;
                        width: 5.07vw;
                        height: 5.07vw;
                        border-radius: 50%;
                    }
                }
            }
        }
        .btns {
            width: 52vw;
            height: 10.67vw;
            color: #fff;
            padding: 0 4vw 0 2.67vw;
            background-image: url("../assets/images/btn_bg.png");
            background-size: 100% 100%;
            .left {
                font-size: 2.93vw;
            }
        }
    }
}
</style>