$(function () {
    // echart_1();
    echart_2();

    echart_3();
    // echart_4();

    echart_map();

    //获取用户选择日期，发生'changeDate'事件时，获取input控件的text值
    // $('#demo-1').fdatepicker({
    //     format:"yyyy-mm-dd"
    // }).on('changeDate',function(){
    //     year = $('#demo-1').val().substring(0,4)
    //     month = $('#demo-1').val().substring(5,7)
    //     day = $('#demo-1').val().substring(8,10)
    //     alert(year+month+day)
    // })


    //echart_1
    // function echart_1() {
    //     // 基于准备好的dom，初始化echarts实例
    //     var myChart = echarts.init(document.getElementById('chart_1'));
    //
    //     var data = [
    //         {value: 335,name: '客运车'},
    //         {value: 335,name: '危险品运输车'},
    //         {value: 315,name: '网约车'},
    //         {value: 200,name: '学生班车'}
    //     ];
    //
    //     option = {
    //         backgroundColor: 'transparent',
    //         tooltip: {
    //             trigger: 'item',
    //             formatter: "{a} <br/>{b}: {c} ({d}%)"
    //         },
    //         color: ['#0035f9', '#f36f8a', '#ffff43', '#25f3e6'],
    //         legend: { //图例组件，颜色和名字
    //             left: '65%',
    //             top: '95',
    //             orient: 'vertical',
    //             itemGap: 12, //图例每项之间的间隔
    //             itemWidth: 16,
    //             itemHeight: 12,
    //
    //             icon: 'rect',
    //             data: ['客运车', '危险品运输车', '网约车', '学生班车'],
    //             textStyle: {
    //                 color: [],
    //                 fontStyle: 'normal',
    //                 fontFamily: '微软雅黑',
    //                 fontSize: 12,
    //             }
    //         },
    //         series: [{
    //             name: '车辆类型',
    //             type: 'pie',
    //             clockwise: false, //饼图的扇区是否是顺时针排布
    //             minAngle: 20, //最小的扇区角度（0 ~ 360）
    //             center: ['35%', '50%'], //饼图的中心（圆心）坐标
    //             radius: [50, 80], //饼图的半径
    //             avoidLabelOverlap: true, ////是否启用防止标签重叠
    //             itemStyle: { //图形样式
    //                 normal: {
    //                     borderColor: '#1e2239',
    //                     borderWidth: 1.5,
    //                 },
    //             },
    //
    //             label: { //标签的位置
    //                 normal: {
    //                     show: false,
    //                     position: 'inside', //标签的位置
    //                     formatter: "{d}%",
    //                     textStyle: {
    //                         color: '#fff',
    //                     }
    //                 },
    //                 emphasis: {
    //                     show: true,
    //                     textStyle: {
    //                         fontWeight: 'bold'
    //                     }
    //                 }
    //             },
    //             data: data
    //         }, {
    //             name: '',
    //             type: 'pie',
    //             clockwise: false,
    //             silent: true,
    //             minAngle: 20, //最小的扇区角度（0 ~ 360）
    //             center: ['35%', '50%'], //饼图的中心（圆心）坐标
    //             radius: [0, 45], //饼图的半径
    //             itemStyle: { //图形样式
    //                 normal: {
    //                     borderColor: '#1e2239',
    //                     borderWidth: 1.5,
    //                     opacity: 0.21,
    //                 }
    //             },
    //             label: { //标签的位置
    //                 normal: {
    //                     show: false,
    //                 }
    //             },
    //             data: data
    //         }]
    //     };
    //
    //     // 使用刚指定的配置项和数据显示图表。
    //     myChart.setOption(option);
    //     window.addEventListener("resize",function(){
    //         myChart.resize();
    //     });
    // }

    //echart_2
    function echart_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_2'));
        
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },

            legend: {
                // align: 'center',
                // left: '65%',
                top: '28',
                data: ['作业', '非作业'],
                itemWidth:16,
                itemHeight:12,
                // borderRadius: 0, // 统一设置四个角的圆角大小
                icon: 'rect',
                textStyle: {
                    itemGap: 12, //图例每项之间的间隔
                    color: [],
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 14,
                }
            },
            grid: {
                left: '5%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },

            xAxis: {
                axisLabel: { //调整x轴的lable
                    textStyle: {
                        color: '#fff',
                        fontSize: 13,
                    }
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'category',
                data: ['甘蔗机', '玉米机', '拖拉机', 'GF80(4LZ-8'],
                axisTick : {show: true},
                axisLabel: { //调整x轴的lable
                    textStyle: {
                        color: '#fff',
                        fontSize: 13,
                    }
                },
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: '作业',
                type: 'bar',
                stack: '总量',
                color:'#0035f9',
                barWidth : 18,
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                data: num1
            }, {
                name: '非作业',
                type: 'bar',
                stack: '总量',
                color:'#f36f8a',
                barWidth : 20,
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                data: num2
            }

            ]

        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
    // echart_map
    function echart_map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_map'));

        var name_title = "投票统计"
        var subname = ''
        var nameColor = " rgb(55, 75, 113)"
        var name_fontFamily = '楷体'
        var name_fontSize = 52
        var mapName = 'china'
        var data = []
        var geoCoordMap = {};
        var toolTipData = [];

        /*获取地图数据*/
        myChart.showLoading();
        var mapFeatures = echarts.getMap(mapName).geoJson.features;
        myChart.hideLoading();
        //设置map的featurs参数（地图要素参数设置）
        mapFeatures.forEach(function(v) {
            // 地区名称
            var name = v.properties.name;
            // 地区经纬度
            geoCoordMap[name] = v.properties.cp;
            var index = 0
            if (province.indexOf(name)) {

                index = province.indexOf(name)
                data.push({
                    name: name,
                    value: pro_total[index]//输入：v省一共有多少辆农机
                })
                //各省不同车辆的统计数据
                toolTipData.push({
                    name: name,
                    value: [{
                        name: "甘蔗机",
                        value: pro_1[index] //输入v省甘蔗机的数量
                    },
                        {
                            name: "玉米机",
                            value: pro_2[index]//输入v省玉米机的数量
                        },
                        {
                            name: "抛秧机",
                            value: pro_3[index]
                        },
                        {
                            name: "拖拉机",
                            value: pro_4[index]
                        },
                        {
                            name: "勇猛玉米机车型",
                            value: pro_5[index]
                        },
                        {
                            name: "潍柴动力测试",
                            value: pro_6[index]
                        },
                        {
                            name: "TS804A",
                            value: pro_7[index]
                        },
                        {
                            name: "GF80(4LZ-8",
                            value: pro_8[index]
                        },
                        {
                            name: "4HZJ-2500",
                            value: pro_9[index]
                        },
                        {
                            name: "5AQ1",
                            value: pro_10[index]
                        }
                    ]
                })
            }
            else{

                data.push({
                    name: name,
                    value: 0//输入：v省一共有多少辆农机
                })
                //各省不同车辆的统计数据
                toolTipData.push({
                    name: name,
                    value: [{
                        name: "甘蔗机",
                        value: 0 //输入v省甘蔗机的数量
                    },
                        {
                            name: "玉米机",
                            value: 0//输入v省玉米机的数量
                        },
                        {
                            name: "抛秧机",
                            value: 0
                        },
                        {
                            name: "拖拉机",
                            value: 0
                        },
                        {
                            name: "勇猛玉米机车型",
                            value: 0
                        },
                        {
                            name: "潍柴动力测试",
                            value: 0
                        },
                        {
                            name: "TS804A",
                            value: 0
                        },
                        {
                            name: "GF80(4LZ-8",
                            value: 0
                        },
                        {
                            name: "4HZJ-2500",
                            value: 0
                        },
                        {
                            name: "5AQ1",
                            value: 0
                        }
                    ]
                })
            }
        });

        var max = 480,
            min = 9; // todo
        var maxSize4Pin = 100,
            minSize4Pin = 20;
          //获取省名、该省对应的农机数
        var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                    });
                }
            }
            return res;
        };
        //option设置地图的一些结构的风格样式
        option = {
            title: {
                show:false,
                text: name_title,
                subtext: subname,
                x: 'center',
                textStyle: {
                    color: nameColor,
                    fontFamily: name_fontFamily,
                    fontSize: name_fontSize
                }
            },
            tooltip: {
                trigger: 'item',
                //设置鼠标聚焦时点弹出小窗口的信息
                formatter: function(params) {
                    if (typeof(params.value)[2] == "undefined") {
                        var toolTiphtml = ''
                        for(var i = 0;i<toolTipData.length;i++){
                            if(params.name==toolTipData[i].name){
                                toolTiphtml += toolTipData[i].name+':<br>'
                                for(var j = 0;j<toolTipData[i].value.length;j++){
                                    toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                                }
                            }
                        }
                        return toolTiphtml;
                    } else {
                        var toolTiphtml = ''
                        for(var i = 0;i<toolTipData.length;i++){
                            if(params.name==toolTipData[i].name){
                                toolTiphtml += toolTipData[i].name+':<br>'
                                for(var j = 0;j<toolTipData[i].value.length;j++){
                                    toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                                }
                            }
                        }
                        return toolTiphtml;
                    }
                }
            },
            legend: {
                orient: 'vertical',
                y: 'bottom',
                x: 'right',
                data: ['credit_pm2.5'],
                textStyle: {
                    color: '#fff'
                }
            },
            visualMap: {
                show: false,
                min: 0,
                max: 500,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                seriesIndex: [1],
                inRange: {
                    // color: ['#3B5077', '#031525'] // 蓝黑
                    // color: ['#ffc0cb', '#800080'] // 红紫
                    // color: ['#3C3B3F', '#605C3C'] // 黑绿
                    color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                    // color: ['#23074d', '#cc5333'] // 紫红
                    // color: ['#00467F', '#A5CC82'] // 蓝绿
                    // color: ['#1488CC', '#2B32B2'] // 浅蓝
                    // color: ['#00467F', '#A5CC82'] // 蓝绿
                    // color: ['#00467F', '#A5CC82'] // 蓝绿
                    // color: ['#00467F', '#A5CC82'] // 蓝绿
                    // color: ['#00467F', '#A5CC82'] // 蓝绿

                }
            },
            /*工具按钮组*/
            toolbox: {
                show: false,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {
                        readOnly: false
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            geo: {
                show: true,
                map: mapName,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#3B5077',
                    },
                    emphasis: {
                        areaColor: '#2B91B7',
                    }
                }
            },
            series: [{
                name: '散点',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function(val) {
                    return val[2] / 10;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#05C3F9'
                    }
                }
            },
                {
                    type: 'map',
                    map: mapName,
                    geoIndex: 0,
                    aspectScale: 0.75, //长宽比
                    showLegendSymbol: false, // 存在legend时显示
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#031525',
                            borderColor: '#0227ad',
                        },
                        emphasis: {
                            areaColor: '#2B91B7'
                        }
                    },
                    animation: false,
                    data: data
                },
                {
                    name: '点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbol: 'pin', //气泡
                    symbolSize: function(val) {
                        var a = (maxSize4Pin - minSize4Pin) / (max - min);
                        var b = minSize4Pin - a * min;
                        b = maxSize4Pin - a * max;
                        return a * val[2] + b;
                    },
                    label: {
                        //气泡上的文字
                        normal: {
                            show: false,
                            textStyle: {
                                color: '#fff',
                                fontSize: 9,
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#F62157', //标志颜色
                        }
                    },
                    zlevel: 6,
                    data: convertData(data),
                },
                {
                    name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function(a, b) {
                        return b.value - a.value;
                    }).slice(0, 5)),
                    symbolSize: function(val) {
                        return val[2] / 10;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#05C3F9',
                            shadowBlur: 10,
                            shadowColor: '#05C3F9'
                        }
                    },
                    zlevel: 1
                },

            ]
        };
        myChart.setOption(option);

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });

    }

    //echart_3
    function echart_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_3'));
        var legendData= ['','',''];
        var title = "";
        var serieData = [];

        //获取用户在下拉框选择的设备号，按照设备号来获取不同的数据，为何在此处触发事件函数会发生浏览器无法正常显示问题？
        // $('#didselect').change(function() {
        //     did_option = $('#didselect option:selected').text()//获取用户选择的文本
        //     alert(did_option)
        //     var xAxisData = [];
        //     var yAxisData = [];
        //     for (i in did) {
        //         if (did[i] == did_option)
        //         {
        //             xAxisData.push(GPSDateTime[i])
        //             yAxisData.push(numOfUsedSatellites[i])
        //         }
        //     }
        //     var metaDate = [yAxisData];
        // })
        did_option = $('#didselect option:selected').text()//获取用户选择的文本
        var xAxisData = [];
        var yAxisData = [];
        for (i in did) {
            if (did[i] == did_option)
            {
                xAxisData.push(GPSDateTime[i])
                yAxisData.push(numOfUsedSatellites[i])
            }
        }
        var metaDate = [yAxisData];

        for(var v=0; v < legendData.length ; v++){
            var serie = {
                name:legendData[v],
                type: 'line',
                symbol:"circle",
                symbolSize:10,
                data: metaDate[v]
            };
            serieData.push(serie)
        }
        var colors = ["#ffff43"];
        var option = {
            backgroundColor: 'transparent',
            title : {text: title,textAlign:'left',textStyle:{color:"#fff",fontSize:"16",fontWeight:"normal"}},

            color:colors,
            grid: {left: '4%',top:"30%",bottom: "5%",right:"4%",containLabel: true},
            tooltip : { trigger: 'axis',axisPointer : { type : 'shadow'}},
            xAxis: [
                {
                    type: 'category',
                    axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
                    axisLabel:{interval:0,textStyle:{color:'#fff',fontSize:12} },
                    axisTick : {show: false},
                    data:xAxisData,
                },
            ],
            yAxis: [
                {
                    axisTick : {show: false},
                    splitLine: {show:false},
                    axisLabel:{textStyle:{color:'#fff',fontSize:12} },
                    axisLine: { show: true,lineStyle:{ color:'#2c3459'}},
                },
            ],
            series:serieData
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
    // function echart_4() {
    //     // 基于准备好的dom，初始化echarts实例
    //     var myChart = echarts.init(document.getElementById('chart_4'));
    //
    //     /*中间显示的数据*/
    //     /*中间显示的数据*/
    //     var myData = ['超速', 'SOS', '偏移', '其他']
    //     var databeast = {
    //         1: [38, 25, 26, 32]
    //     }
    //     var databeauty = {
    //         1: [11, 38, 23, 30]
    //     }
    //     var timeLineData = [1]
    //
    //     var option = {
    //         baseOption: {
    //             backgroundColor: 'transparent',
    //             timeline: {
    //                 show: false,
    //                 top: 0,
    //                 data: []
    //             },
    //             legend: {
    //                 show:true,
    //                 // align: 'center',
    //                 left: '30%',
    //                 top: 30,
    //                 // data: ['行驶', '停车'],
    //                 // itemWidth:16,
    //                 // itemHeight:12,
    //                 // // borderRadius: 0, // 统一设置四个角的圆角大小
    //                 icon: 'rect',
    //                 textStyle: {
    //                     itemGap: 12, //图例每项之间的间隔
    //                     color: [],
    //                     fontStyle: 'normal',
    //                     fontFamily: '微软雅黑',
    //                     fontSize: 14,
    //                 }
    //             },
    //             tooltip: {
    //                 show: true,
    //                 trigger: 'axis',
    //                 formatter: '{b}<br/>{a}: {c}',
    //                 axisPointer: {
    //                     type: 'shadow'
    //                 }
    //             },
    //
    //             grid: [{
    //                 show: false,
    //                 left: '8%',
    //                 top: 60,
    //                 bottom: 0,
    //                 containLabel: true,
    //                 width: '30%'
    //             }, {
    //                 show: false,
    //                 left: '57%',
    //                 top: 60,
    //                 bottom: 0,
    //                 width: '0%'
    //             }, {
    //                 show: false,
    //                 right: '8%',
    //                 top: 60,
    //                 bottom: 0,
    //                 containLabel: true,
    //                 width: '30%'
    //             }],
    //
    //             xAxis: [{
    //                 type: 'value',
    //                 inverse: true,
    //                 axisLine: {
    //                     show: false
    //                 },
    //                 axisTick: {
    //                     show: false
    //                 },
    //                 position: 'top',
    //                 axisLabel: {
    //                     show: false
    //                 },
    //                 splitLine: {
    //                     show: false
    //                 }
    //             }, {
    //                 gridIndex: 1,
    //                 show: false
    //             }, {
    //                 gridIndex: 2,
    //                 nameTextStyle: {
    //                     color: '#50afff',
    //                     fontSize: 14
    //                 },
    //                 axisLine: {
    //                     show: false
    //                 },
    //                 axisTick: {
    //                     show: false
    //                 },
    //                 position: 'top',
    //                 axisLabel: {
    //                     show: false
    //                 },
    //                 splitLine: {
    //                     show: false
    //                 }
    //             }],
    //             yAxis: [{
    //                 type: 'category',
    //                 inverse: true,
    //                 position: 'right',
    //                 axisLine: {
    //                     show: false
    //                 },
    //                 axisTick: {
    //                     show: false
    //                 },
    //                 axisLabel: {
    //                     show: false
    //                 },
    //                 data: myData
    //             }, {
    //                 gridIndex: 1,
    //                 type: 'category',
    //                 inverse: true,
    //                 position: 'left',
    //                 axisLine: {
    //                     show: false
    //                 },
    //                 axisTick: {
    //                     show: false
    //                 },
    //                 axisLabel: {
    //                     show: true,
    //                     textStyle: {
    //                         color: '#fff',
    //                         fontSize: 14
    //                     }
    //
    //                 },
    //                 data: myData.map(function(value) {
    //                     return {
    //                         value: value,
    //                         textStyle: {
    //                             align: 'center'
    //                         }
    //                     }
    //                 })
    //             }, {
    //                 gridIndex: 2,
    //                 type: 'category',
    //                 inverse: true,
    //                 position: 'left',
    //                 axisLine: {
    //                     show: false
    //                 },
    //                 axisTick: {
    //                     show: false
    //                 },
    //                 axisLabel: {
    //                     show: false
    //
    //                 },
    //                 data: myData
    //             }],
    //             series: [
    //
    //             ]
    //
    //         },
    //         options: []
    //     }
    //
    //     option.baseOption.timeline.data.push(timeLineData[0])
    //     option.options.push({
    //         tooltip: {
    //             trigger: 'axis',
    //             formatter: '{b}<br/>{c} {a}'
    //         },
    //         series: [{
    //             name: '昨天',
    //             type: 'bar',
    //             barWidth: 17,
    //             label: {
    //                 normal: {
    //                     show: true,
    //                     position: 'left',
    //                     offset: [0, 0],
    //                     textStyle: {
    //                         color: '#fff',
    //                         fontSize: 14
    //                     }
    //                 }
    //             },
    //             itemStyle: {
    //                 normal: {
    //                     color: '#0035f9',
    //                     // barBorderRadius: 50
    //                 }
    //             },
    //
    //             data: databeast[timeLineData[0]]
    //         }, {
    //             name: '今天',
    //             type: 'bar',
    //             barWidth: 18,
    //             xAxisIndex: 2,
    //             yAxisIndex: 2,
    //             label: {
    //                 normal: {
    //                     show: true,
    //                     position: 'right',
    //                     offset: [0, 0],
    //                     textStyle: {
    //                         color: '#fff',
    //                         fontSize: 14
    //                     }
    //                 }
    //             },
    //             itemStyle: {
    //                 normal: {
    //                     color: '#25f3e6',
    //                     // barBorderRadius: 50
    //                 }
    //             },
    //             data: databeauty[timeLineData[0]]
    //         }]
    //     })
    //
    //     // 使用刚指定的配置项和数据显示图表。
    //     myChart.setOption(option);
    //     window.addEventListener("resize",function(){
    //         myChart.resize();
    //     });
    //
    // }




})
