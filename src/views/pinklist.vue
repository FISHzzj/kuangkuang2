<template>
    <div class="pinklist">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" size="20" />
            <p>查看参团成员</p>
        </div>
        <div class="list">
            <van-list
                v-model="loading"
                :finished="finished"
                :finished-text="'我是有底线的'"
                @load="onLoad"
                >
                <div class="item flex flex_between ali_center"  v-for="(item, index) in list" :key="index">
                    <div class="left flex ali_center">
                        <img :src="item.avatar" alt="">
                        <div>
                            <p class="nickname">{{item.nickname}}</p>
                            <p class="num">参团编号:{{item.id}}</p>
                        </div>
                    </div>
                    <div class="right">{{item.createtime}}</div>
                </div>
            </van-list>
        </div>
    </div>
</template>
<script>
export default {
    name: "pinklist",
    data() {
        return {
            page: 1,
            limit: 10,
            finished: false,
            loading: false,
            list: [],
      
        };
    },
    mounted() {
        this.teamid = this.$route.params.id
    },
    methods:{
        async onLoad(){
            let res = await $ajax('groupteamlog', {teamid: this.teamid})  //活动列表
            if(!res) return false
            console.log(res)
            // this.money = res.money
            
            this.page++
            console.log(res.list)
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            // if (res.list.length === 0) {
                this.finished = true //加载完成
            // } 
        }
    }
};
</script>
<style lang="less" scoped>
* {
    box-sizing: border-box;
}
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
.pinklist {
    background-color: #f7f7f7 !important;
    .list {
        padding-top: 2vw;
        .item {
            background-color: #fff;
            padding: 0 4vw;
            height: 15vw;
            margin-bottom: 2.3vw;
            .left {
                .nickname,
                .num {
                    font-size: 3.47vw;
                    color: #666;
                }
                img {
                    width: 7vw;
                    height: 7vw;
                    border-radius: 50%;
                    margin-right: 3vw;
                }

            }
            .right {
                color: #999;
                font-size: 3.2vw;
            }
        }
    }
}
</style>