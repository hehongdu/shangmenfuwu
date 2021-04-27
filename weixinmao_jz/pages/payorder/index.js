
var t, e = require("../../resource/js/images.js"), i = getApp();

Page({
    data:{
        order:{
            serviceCopy:1
        },
        totalPrice:0,
        product:{
            id:23,
            productType:2,
            src:'../../resource/images/fuwu1.jpg',
            title:'特色全身油压养生SPA',
            des:['背部','腰部','臀部','胸部','腿部','手部','肩部','腹部','颈部'],
            amount:'288',
            time:'60',
            juli:'一公里',
            introduce: [
                {
                    "type": "image",
                    "content": "https://oss.angemo.com/upload/20190828/201908281128167258.png?x-oss-process=image/resize,m_fill,w_690,h_360,limit_0/auto-orient,0/quality,q_90"
                },
                {
                    "type": "image",
                    "content": "https://oss.angemo.com/upload/20190828/201908281131024708.png?x-oss-process=image/resize,m_fill,w_690,h_360,limit_0/auto-orient,0/quality,q_90"
                },
                {
                    "type": "image",
                    "content": "https://oss.angemo.com/upload/20190828/201908281127435825.png?x-oss-process=image/resize,m_fill,w_690,h_360,limit_0/auto-orient,0/quality,q_90"
                },
                {
                    "type": "image",
                    "content": "https://oss.angemo.com/upload/20190828/201908281128291644.png?x-oss-process=image/resize,m_fill,w_690,h_360,limit_0/auto-orient,0/quality,q_90"
                },
                {
                    "type": "image",
                    "content": "https://oss.angemo.com/upload/20190828/201908280233325358.png?x-oss-process=image/resize,m_fill,w_690,h_360,limit_0/auto-orient,0/quality,q_90"
                },
                {
                    "type": "image",
                    "content": "https://oss.angemo.com/upload/20190828/201908281127230239.png?x-oss-process=image/resize,m_fill,w_690,h_360,limit_0/auto-orient,0/quality,q_90"
                },
                {
                    "type": "image",
                    "content": "https://oss.angemo.com/upload/20190828/201908281130134843.png?x-oss-process=image/resize,m_fill,w_690,h_360,limit_0/auto-orient,0/quality,q_90"
                }
            ],
            orderNotice: "1、仅提供专业正规的推拿按摩服务，对于客人不正当的行为和要求，商家和技师有权拒绝服务，并保留诉诸法律的权利，对于客人恶意下单、恶意差评、恶意投诉的行为，商家或平台将对客人拉黑处理，并保留诉诸法律的权利。\r\n\r\n2、往返路费由平台代收，白天（08:00~20:00）直线距离3公里范围内免收往返路费，往返路费由高德地图估算，如有异议，以打车凭证为准，多退少补。商家或技师如有额外索取路费可以向平台举报。\r\n\r\n3、客人下单付款后两分钟内商家不能接单，有问题需要咨询的可主动拨打商家电话（订单页面可见）咨询。商家将在客人下单付款后10分钟内确认是否接单，如商家未接单，客人可主动联系商家催单，或选择申请退款，订单款项将原路返回客人账户。\r\n\r\n4、客人下单付款后，商家会联系技师和客人撮合订单，对接双方都没有问题才会确认接单，商家一旦接单，客人和商家都不能随意取消订单。\r\n\r\n5、接单后需要取消服务的，将进行扣款或退款处理，订单视为服务完成。\r\n 　5.1、因商家原因要取消服务的，订单款项由商家全额退还给客人。 \t\t\r\n 　5.2、因客人原因要取消服务的，如技师未出发，扣除项目费用的12%作为手续费，剩余款项由商家退还客人。 　\r\n 　5.3、因客人原因要取消服务的，如技师已出发，扣除项目费用的10%作为手续费，扣除技师往返路费，扣除技师误工费50元，剩余款项由商家退还客人。\r\n\r\n6、商家和技师有权拒绝客人加微信的要求，如客人需要联系商家或技师，可通过电话联系。如客人对技师或服务不满意，需要在服务开始前拒绝服务，服务开始后，客人不能以任何理由要求退款。\r\n\r\n7、若技师到达指定预约地点，因客人原因无法开始服务，技师将在等待30分钟后，自行离开视为服务完成，不做任何退款处理；在服务过程中，若因客人原因不得不提前结束服务，将视同本次服务完成，不做任何退款处理。\r\n\r\n8、本店所有服务费用和往返路费都是明码标价，如技师索要小费、路费或其它额外费用，客人有权拒绝（客人主动给予的除外），如遇服务质量问题，或技师未完成服务就提前离开（征得客人同意的除外），可保留相关证据联系商家或平台进行投诉。\r\n\r\n9、为保障你的权益，所有费用请通过按个摩平台支付。私自联系商家或技师进行交易的行为，发生财产损失或人身安全等问题与按个摩平台无关，后果自负。",
        },
    },
    onLoad() {

    },

    showBookTime: function() {
        var e = this, t = e.data.tid, r = e.data.technician;
        wx.navigateTo({
            url: "/weixinmao_jz/pages/payorder/time"
        });
    },
})