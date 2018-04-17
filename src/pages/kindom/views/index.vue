<template>
    <article class="wrapper-bd">
        <div id="banner" class="banner">
            <img src="~assets/img/banner.jpg" alt="banner" class="img-responsive">
        </div>
        <div id="chart" class="section-chart">
            <div class="tabs">
                <div class="item" :class="{'active':chartIndex == 1}" @click="chartIndex = 1">
                    <div class="item-title">贵金属</div>
                    <div class="menu-list">
                        <div class="item-menu">黄金</div>
                        <div class="item-menu">黄金</div>
                        <div class="item-menu">黄金</div>
                        <div class="item-menu">黄金</div>
                    </div>
                </div>
                <div class="item" :class="{'active':chartIndex == 2}" @click="chartIndex = 2">
                    <div class="item-title">外汇</div>
                    <div class="menu-list">
                        <div class="item-menu">澳元兑美元</div>
                        <div class="item-menu">澳元兑美元</div>
                        <div class="item-menu">澳元兑美元</div>
                        <div class="item-menu">澳元兑美元</div>
                        <div class="item-menu">澳元兑美元</div>
                        <div class="item-menu">澳元兑美元</div>
                        <div class="item-menu">澳元兑美元</div>
                    </div>
                </div>
                <div class="item" :class="{'active':chartIndex == 3}" @click="chartIndex = 3">
                    <div class="item-title">能源</div>
                    <div class="menu-list">
                        <div class="item-menu">澳元兑美元</div>
                        <div class="item-menu">澳元兑美元</div>
                        <div class="item-menu">澳元兑美元</div>
                        <div class="item-menu">澳元兑美元</div>
                        <div class="item-menu">澳元兑美元</div>
                        <div class="item-menu">澳元兑美元</div>
                        <div class="item-menu">澳元兑美元</div>
                    </div>
                </div>
                <div class="item" :class="{'active':chartIndex == 4}" @click="chartIndex = 4">
                    <div class="item-title">指数</div>
                    <div class="menu-list">
                        <div class="item-menu">澳元兑美元</div>
                        <div class="item-menu">澳元兑美元</div>
                        <div class="item-menu">澳元兑美元</div>
                        <div class="item-menu">澳元兑美元</div>
                        <div class="item-menu">澳元兑美元</div>
                        <div class="item-menu">澳元兑美元</div>
                        <div class="item-menu">澳元兑美元</div>
                    </div>
                </div>
            </div>
            <e-chart :options="optChart" style="width:7.5rem;height:4.4rem;"></e-chart>
        </div>
        <div id="news" class="section-news">
            <div class="tabs">
                <div class="item" :class="{'active':newsIndex == 1}" @click="newsIndex = 1">贵金属</div>
                <div class="item" :class="{'active':newsIndex == 2}" @click="newsIndex = 2">财经日历</div>
            </div>
            <div class="news-list" :class="{'active':newsIndex == 1}">
                <a href="#/index" class="item-news">
                    <span class="item-time">2018-04-10<br>18:38:09</span><span class="item-desc">阿塞拜疆能源部：阿塞拜疆三月石油产量维稳在79
.4万桶/日阿塞拜疆三月石油产量维稳在79阿塞拜疆三月石油产量维稳在79阿塞拜疆三月石油产量维稳在79阿塞拜疆三月石油产量维稳在79</span>
                </a>
                <a href="#/index" class="item-news">
                    <span class="item-time">2018-04-10<br>18:38:09</span><span class="item-desc">阿塞拜疆能源部：阿塞拜疆三月石油产量维稳在79
.4万桶/日</span>
                </a>
                <a href="#/index" class="item-news">
                    <span class="item-time">2018-04-10<br>18:38:09</span><span class="item-desc">阿塞拜疆能源部：阿塞拜疆三月石油产量维稳在79
.4万桶/日</span>
                </a>
                <a href="#/index" class="item-news">
                    <span class="item-time">2018-04-10<br>18:38:09</span><span class="item-desc">阿塞拜疆能源部：阿塞拜疆三月石油产量维稳在79
.4万桶/日</span>
                </a>
                <a href="#/index" class="item-news">
                    <span class="item-time">2018-04-10<br>18:38:09</span><span class="item-desc">阿塞拜疆能源部：阿塞拜疆三月石油产量维稳在79
.4万桶/日</span>
                </a>
                <a href="#/index" class="item-news">
                    <span class="item-time">2018-04-10<br>18:38:09</span><span class="item-desc">阿塞拜疆能源部：阿塞拜疆三月石油产量维稳在79
.4万桶/日</span>
                </a>
            </div>
            <div class="news-list" :class="{'active':newsIndex == 2}">
                <a href="#/index" class="item-news">
                    <span class="item-time">2019-05-23<br>09:40:26</span><span class="item-desc">能源部阿塞拜疆：阿塞拜疆三月石油产量维稳在79
.4万桶/日阿塞拜疆三月石油产量维稳在79阿塞拜疆三月石油产量维稳在79阿塞拜疆三月石油产量维稳在79阿塞拜疆三月石油产量维稳在79</span>
                </a>
                <a href="#/index" class="item-news">
                    <span class="item-time">2019-05-23<br>09:40:26</span><span class="item-desc">能源部阿塞拜疆：阿塞拜疆三月石油产量维稳在79
.4万桶/日</span>
                </a>
                <a href="#/index" class="item-news">
                    <span class="item-time">2019-05-23<br>09:40:26</span><span class="item-desc">能源部阿塞拜疆：阿塞拜疆三月石油产量维稳在79
.4万桶/日</span>
                </a>
                <a href="#/index" class="item-news">
                    <span class="item-time">2019-05-23<br>09:40:26</span><span class="item-desc">能源部阿塞拜疆：阿塞拜疆三月石油产量维稳在79
.4万桶/日</span>
                </a>
                <a href="#/index" class="item-news">
                    <span class="item-time">2019-05-23<br>09:40:26</span><span class="item-desc">能源部阿塞拜疆：阿塞拜疆三月石油产量维稳在79
.4万桶/日</span>
                </a>
                <a href="#/index" class="item-news">
                    <span class="item-time">2019-05-23<br>09:40:26</span><span class="item-desc">能源部阿塞拜疆：阿塞拜疆三月石油产量维稳在79
.4万桶/日</span>
                </a>
            </div>
        </div>
        <!--advantage-->
        <div id="advantage" class="advantage">
            <div class="box-title">我们的优势</div>
            <div class="list-box clearfix">
                <div class="item-list">
                    <div class="item-thumb">
                        <img src="~assets/img/potai_01.jpg" alt="">
                    </div>
                    <div class="item-title">信誉保障</div>
                    <div class="item-desc">资质齐全( FCA)监管,运营规范,与银行第三方合作,充分保障资金安全，并有专业完善的团队为您保驾护航</div>
                    <a href="#/index" class="item-more">了解更多</a>
                </div>
                <div class="item-list">
                    <div class="item-thumb">
                        <img src="~assets/img/potai_02.jpg" alt="">
                    </div>
                    <div class="item-title">产品多样化</div>
                    <div class="item-desc">提供丰富多样的在线交易产品，外汇、黄金白银、贵金属、原油、指数等,客户随心选择,机会多多。</div>
                    <a href="#/index" class="item-more">了解更多</a>
                </div>
                <div class="item-list">
                    <div class="item-thumb">
                        <img src="~assets/img/potai_03.jpg" alt="">
                    </div>
                    <div class="item-title">T+0交易灵活</div>
                    <div class="item-desc">即时买卖,做多做空,交易灵活, 杠杆可达1-400倍,客户可根据交易策略及风险偏好自行调节</div>
                    <a href="#/index" class="item-more">了解更多</a>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                chartIndex:0,
                newsIndex:1,
                optChart:{}
            }
        },
        mounted(){
            this.setOptChart()
        },
        methods:{
            setOptChart(){
                const rawData = [
                    ['3570.47','3539.18','3538.35','3580.6'],
                    ['3566.73','3572.88','3538.11','3573.68'],
                    ['3528.4','3563.74','3515.52','3564.17'],
                    ['3635.77','3533.78','3533.78','3641.59'],
                    ['3614.05','3627.91','3601.74','3635.26'],
                    ['3631.31','3612.49','3572.28','3640.22'],
                    ['3653.28','3636.09','3633.03','3684.57'],
                    ['3645.99','3651.77','3616.87','3652.63'],
                    ['3568.58','3642.47','3565.75','3651.06'],
                    ['3574.94','3578.96','3568.16','3614.7']];
                const option = {
                    backgroundColor: '#FFF',
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            animation: false,
                            type: 'cross',
                            lineStyle: {
                                color: '#376df4',
                                width: 1,
                                opacity: 0.8
                            }
                        }
                    },
                    grid:{
                        left:'0',
                        right:'60px',
                        top:'20px',
                        bottom:'24px'
                    },
                    xAxis: {
                        type: 'category',
                        data: ['10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00'],
                        axisLine: { lineStyle: { color: '#8392A5' } }
                    },
                    yAxis: {
                        position:'right',
                        scale: true,
                        axisLine: { lineStyle: { color: '#8392A5' } },
                        splitLine: { show: false }
                    },
                    series: [
                        {
                            type: 'candlestick',
                            name: '日K',
                            data: rawData,
                            itemStyle: {
                                normal: {
                                    color: '#FD1050',
                                    color0: '#0CF49B',
                                    borderColor: '#FD1050',
                                    borderColor0: '#0CF49B'
                                }
                            }
                        }
                    ]
                }
                this.optChart = option
            }
        }
    }
</script>

<style lang="scss">

</style>
