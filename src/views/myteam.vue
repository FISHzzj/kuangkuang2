<template>
    <div class="myteam">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" size="20" />
            <p>旗下矿工</p>
        </div>
        <div class="nav flex ali_center flex_around">
            <div class="item" :class="{on:status == 1}" @click="changenav(1)">一级</div>
            <div class="item" :class="{on:status == 2}" @click="changenav(2)">二级</div>
            <!-- <div class="item" :class="{on:status == 2}" @click="changenav(2)">中奖</div>
            <div class="item" :class="{on:status == 3}" @click="changenav(3)">未中奖</div> -->
        </div>
        <div class="list">
             <van-list
                v-model="loading"
                :finished="finished"
                :finished-text="'我是有底线的'"
                @load="getData"
                >
                <div
                    class="item" 
                    v-for="item in list" :key="item.id"
                    >
                    <div class="daipay flex ali_center">
                        <div class="daipayimg"><img :src="item.avatar" alt=""></div>
                        <div class="righttitle flex">
                            <div>   
                                <p>{{item.nickname}}</p>
                                <p>{{item.mobile}}</p>
                            </div>
                            <!-- <div >等级：{{item.layer}}</div> -->
                        </div>
                    </div>
                </div>
                    
            </van-list>
            
        </div>
    </div>
</template>
<script>
export default {
    name: "pinorder",
    data() {
        return {
            status: 1,
            typeName: "",
            type: 1,
            list: [],
            page: 1,
            limit: 10,
            finished: false,
            loading: false,
            listtotal: "",
            id: 1
        };
    },
    mounted() {
        // this.type = this.$route.params.type;
        // if (this.type ==1) {
        //     this.typeName = "联合挖矿";
        // } else if (this.type ==2) {
        //     this.typeName = "IPFS存储";
        // } else if (this.type ==3) {
        //     this.typeName = "合约算力";
        // }
        // this.getData()
    },
    methods: {
        async getData() {
            // console.log(this.$route.query.id)
            // let id = this.$route.query.id
            // console.log(typeof id)
            // let cateid = Number(this.$route.query.id)
            // console.log(cateid)
            let res = await $ajax('userteamList',{
                page: this.page,
                // cateid: Number(id),
                layer: this.status
            })
            if (!res) return false
            this.page++
            // console.log(res.lists)
            // this.listtotal = res.listtotal
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        changenav(index) {
            this.status = index;
            this.list = []
            this.page = 1
            this.getData()
        },
        toporderdetail(id){
            this.$router.push({
                name: 'porderdetail',
                query: {
                    id
                }
            })
        }
    }
};
</script>
<style lang="less" scoped>
* {
    box-sizing: border-box;
}
.myteam {
    background: #f7f7f7 !important;
    .header {
        width: 100%;
        height: 12vw;
        position: relative;
        background: #fff;
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
    .top {
        text-align: center;
        background: #fff;
        padding: 6vw 0;
        .num {
            font-size: 7vw;
            font-weight: 600;
            
        }
        .type {
            color: #666;
            font-size: 3.2vw;
        }
    }
    .nav {
        height: 12vw;
        text-align: center;
        background: #fff;
        .item {
            width: 30vw;
            color: #ccc;
            font-weight: 600;
            &.on {
                color: #333;
                position: relative;
                &::after {
                    position: absolute;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    bottom: -2vw;
                    width: 8vw;
                    content: "";
                    height: 0.75vw;
                    background: #da428d;
                }
            }
        }
    }
    .list {
        width: 100vw;
        padding: 3vw 4vw;
        background: #fff;
        .item {
            background: #fff;
            padding: 0 3vw;
            border-radius: 3vw;
            margin-bottom: 4vw;
            border-bottom: 1px solid #eee;
            .id_status {
                // width: 100%;
                // height: 10vw;
                // border-bottom: 1px solid #f7f7f7;
                // font-size: 3.2vw;
                .order_sn {
                    color: #333;
                }
                .status {
                    color: #da428d;
                }
            }
            // .two{
            //     width: 100%;
                .infos {
                    height: 14vw;
                    .name {
                        max-width: 60vw;
                        color: #333;
                        font-weight: 600;
                        font-size: 4.2vw;
                    }
                    .num {
                        color: #999;
                        font-size: 3.2vw;
                    }
                }
                .buy_time {
                    color: #999;
                    font-size: 3vw;
                    line-height: 5vw;
                }
                .bottom {
                    height: 13vw;
                    border-top: 1px solid #f7f7f7;
                    .left {
                        color: #333;
                        font-size: 3.47vw;
                        span {
                            font-weight: 600;
                            font-size: 6vw;
                        }
                    }
                    .right {
                        span {
                            width: 19vw;
                            color: #ccc;
                            line-height: 8vw;
                            height: 8vw;
                            font-size: 3.47vw;
                            border-radius: 3vw;
                            border: 1px solid #ccc;
                            text-align: center;
                            margin-left: 10px;
                        }
                    }
                }
            // }
                .daipay{
                    height: 30vw;
                    justify-content: flex-start;
                    .daipayimg{
                        height: 15vw;
                        width: 15vw;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .righttitle{
                        flex-direction: column;
                        justify-content: center;
                        // justify-content: space-between;
                        height: 20vw;
                        font-size: 15px;
                        margin-left: 10px;
                    }
                }
      
        }
    }
}

</style>