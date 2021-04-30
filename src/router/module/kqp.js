export default [
    {
        path: '/kqp_index', // 首页拼团
        name: 'kqp_index',
        component: () => import("@/views/home/pintuan.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/recommend', // 
        name: 'recommend',
        component: () => import("@/views/recommend.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/kqp_goods_list/:type?', // 商品列表
        name: 'kqp_goods_list',
        component: () => import("@/views/goodsList.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/kqp_detail/:id', // 商品详情
        name: 'kqp_detail',
        component: () => import("@/views/goods_detail.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/pinklist/:id', // 查看参团成员
        name: 'pinklist',
        component: () => import("@/views/pinklist.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/ptorderSubmit', // 生成订单
        name: 'ptorderSubmit',
        component: () => import("@/views/ptorderSubmit.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/addressList', // 编辑地址
        name: 'addressList',
        component: () => import("@/views/addressList.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/addAddress', // 新增地址
        name: 'addAddress',
        component: () => import("@/views/addAddress.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/cdslist', // 承兑商 好友充值
        name: 'cdslist',
        component: () => import("@/views/cdslist.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/huzhuan', // 互转
        name: 'huzhuan',
        component: () => import("@/views/huzhuan.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/pinorder', // 拼团订单
        name: 'pinorder',
        component: () => import("@/views/pinorder.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/myteam', // 我的团队
        name: 'myteam',
        component: () => import("@/views/myteam.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/chengduishang', // 打款列表
        name: 'chengduishang',
        component: () => import("@/views/chengduishang.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/accegetfc', // 确认打款
        name: 'accegetfc',
        component: () => import("@/views/accegetfc.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/porderdetail', // 拼团订单
        name: 'porderdetail',
        component: () => import("@/views/porderdetail.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    },
    {
        path: '/feeklist', // 反馈记录
        name: 'feeklist',
        component: () => import("@/views/feeklist.vue"),
        props: false,//1111,
        meta:{
            index: 1,
            mustLogin: true,//
        }
    }

]