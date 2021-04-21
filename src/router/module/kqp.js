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
        path: '/ptorderSubmit', // 查看参团成员
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
]