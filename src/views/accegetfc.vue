<template>
    <div class="accegetfc">
        <div class="header">
            <van-icon @click="$router.go(-1)" name="arrow-left" size="20" />
            <p>确认打款</p>
            <!-- <span @click="showService = true">联系客服</span> -->
        </div>
        <div style="height:8vw"></div>
        <div class="pays">
            <div class="num flex flex_between ali_center">
                <div class="title">金额</div>
                <div style="white-space: nowrap;">
                    <input v-model="num" type="text" placeholder="输入金额"  disabled  style="width:130%" /> FC
                </div>
                
                
            </div>
             <div class="num flex flex_between ali_center">
                <div class="title">姓名</div>
                <input v-model="roomid" type="text" placeholder="输入姓名" disabled />
            </div>
            <!-- <div class="img flex flex_between ali_center">
                <div class="title">转账地址</div>
                <input v-model="address" type="text" placeholder="输入转账地址" />
            </div> -->
            <div class="img flex flex_between ali_center" @click="showPopup">
                <div class="title">支付凭证</div>
                <!-- <van-uploader :after-read="afterRead" v-if="!baseimg" /> -->
                <img :src="image" alt=""  >
            </div>
            
        </div>
        <!-- <div class="tips">
            <p>温馨提示：</p> -->
            <!-- <div>1.最小输入数量为0.007</div>
            <div>2.请务必保证提币钱包地址的准确性，否则资产将无法找回；</div>
            <div>3.旷工费具体多少由市场决定，平台不收取手续费</div>
            <div>4.提币审核会在24小时内完成，具体到账时间会受网络影响，可能有所延迟；</div> -->
            <!-- <div>1.如长时间未到账，请及时联系客服</div>
        </div> -->
        <van-popup v-model="show"><img :src="image" alt="" style="width:100%;height:100%;"></van-popup>
        <div class="submit" :class="{on: num && roomid}" @click="submit">确认</div>
        
    </div>
</template>
<script>
import service from "./common/service"
import {copy} from '../func/copy'

export default {
    name: "exchangechu",
    components: {
        service
    },
    data() {
        return {
            showService: false,
            
            num: "",
            roomid:"",
            id: "",
            image: "",
            show: false,
          

        }
    },
    mounted(){
        this.id = this.$route.query.id
        this.num = this.$route.query.money
        this.roomid = this.$route.query.name
        this.image = this.$route.query.image
        //傳遞複製按鈕選擇器, 接受複製插件的 clipboard 實例
        // this.clipboard = copy('.copy')
        // this.getData()
    },
    methods: {
        async getData() {
            
            let type = this.type.toLowerCase()
            // let type = this.type.toLowerCase()
            if(type == "cny"){
                this.accountType = 1
            }else if(type == "usdt") {
                this.accountType = 2
            }else if(type == "btc"){
                this.accountType = 3
            }else if(type == "eth"){
                this.accountType = 4
            }else if(type == "fil"){
                this.accountType = 5
            }
            let res = await $ajax('userrecharge', {rechargeType: type, getType: 2})
            if(!res) return false
            this.money = res.money
            this.code = res.code
            this.wallet = res.wallet
            this.payId = res.id
            this.baseimg = res.image
        },
        async afterRead(s) {
            console.log(s);
            let img = s.content
            let res = await $ajax('userrechargeimages', {image: img})
            if(!res) return false
            console.log(res)
            // this.baseimg = res.img

        },
        changenav(type) {
            if (type == 'TRC') return Toast("即将开放");
        },
        onSelect(e) {
            console.log(e);
            this.type = e.name;
            this.img = e.img;
            this.show = false;
            this.getData()
        },
        closeservice(e) {
            this.showService = false;
        },
        async submit() {
            if(!this.num) return Toast("输入金额!")
            if(!this.roomid) return Toast("输入姓名!")
            
            let res = await $ajax('useraccegetFc', {
                // getType: 2,
                id: this.id,
                // money: this.num,
                // wallet: this.wallet,
                // carType: this.carType,
                // accountType: this.accountType
        
            })
            if(!res) return false
            console.log(res)
            Toast(res.msg)
            this.$router.go(-1)
        },
        showPopup() {
            this.show = true;
        }
    }
};
</script>
<style lang="less" scoped>
* {
    box-sizing: border-box;
}
.accegetfc {
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
        span {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 4vw;
            font-size: 3.47vw;
            margin: auto 0;
            color: #999;
            line-height: 12vw;
        }
        p {
            width: 100%;
            line-height: 12vw;
            font-size: 4vw;
            text-align: center;
        }
    }
    .content {
        width: 92vw;
        background: #fff;
        border-radius: 3vw;
        height: 28vw;
        margin: 0 4vw;
        flex-direction: column;
        padding: 0 4vw;
        .icon {
            width: 12vw;
            height: 12vw;
            border-radius: 50%;
            margin: -6vw 40vw 0;
        }
        .name {
            line-height: 8vw;
            font-weight: 600;
        }
        .change {
            color: #999;
            font-size: 3.2vw;
            height: 12vw;
        }
        .types {
            width: 100%;
            div {
                width: 20vw;
                height: 8vw;
                line-height: 8vw;
                text-align: center;
                color: #999;
                font-weight: 600;
                background: #f7f7f7;
                margin-left: 3vw;
                border-radius: 1vw;
                &.on {
                    color: #da428d;
                    border: 1px solid #da428d;
                }
            }
        }
        .code {
            width: 30vw;
            height: 30vw;
            margin: 6vw 0;
        }
        .address {
            word-break: break-all;
            text-align: center;
            font-weight: 600;
        }
        .btns {
            width: 100%;
            padding: 0 10vw;
            text-align: center;
            color: #da428d;
            height: 12vw;
            div {
                width: 50%;
            }
        }
    }
    .pays {
        background: #fff;
        width: 92vw;
        margin: 4vw;
        padding: 20px 4vw;
        .num {
            flex-wrap: wrap;
            margin-bottom: 10px;
            .title {
                font-size: 4.8vw;
                font-weight: 600;
                height: 12vw;
                line-height: 12vw;
                width: 100%;
            }
            input {
                text-align: left;
                width: 100%;
                background: #eee;
                padding: 10px 10px;
                border-radius: 8px;
            }
        }
        .img{
            position: relative;
            img{
                width: 80px;
                height: 80px;
            }
        }
    }
    .tips {
        color: #999;
        font-size: 3.1vw;
        padding: 0 4vw;
    }
    .submit {
        width: 92vw;
        height: 12vw;
        line-height: 12vw;
        text-align: center;
        color: #fff;
        background: #bbb;
        border-radius: 1vw;
        margin: 4vw;
        &.on{
            background: #da428d;
        }
    }
}
</style>