<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="12">
                <div id="barChart" style="width:100%;height: 300px"></div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'Echarts',
    data() {
        return {
            echarts: null,
            option: {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            }
        }
    },
    mounted() {
        this.init();
        this.getList();
    },
    methods: {
        init() {
            this.echarts = this.$echarts.init(document.getElementById('barChart'))
            this.echarts.setOption(this.option)
        },
        getList() {
            this.$axios.get('/mode2/DataOne').then(res => {
                console.log(res)
            }).catch(err => {

            })
        }
    }
}
</script>