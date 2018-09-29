
doc_rem(document, window);//自适应字体设置
$(function(){
	echart_six();
	echart();
	taji();
	//taji_two();
	highchart()
})

//塔吊今日数据统计图
function echart_six(date){
	var data = { "bieshu":[1.2, 2.5, 1.6, 2.4, 2.8, 3.1, 2.1],
				"gongyu":[220, 182, 191, 234, 290, 330, 310],
				"zhuzhai":[11, 15, 20, 24, 8, 10, 21],
				"legend":[
				{name:'吊重(吨)',
				icon:'pin'//修改图例样式
				},
				{name:'高度(米)',
				icon:'pin'
				}
				],
				"date":['01:00','02:00','03:00','04:00','05:00','06:00','07:00']
		}
	var myChart6 = echarts.init(document.getElementById('mainCenterBottom'));
	var	option = {
				color:['#FF6968','#50DAF4','#EEDA2D'],//图例颜色设置
		    tooltip : {
		        trigger: 'axis',
		        textStyle:{
			               	fontSize :setFontSize(20)
			               },
                formatter: function(params) {//提示框显示数据，去掉前面小园点
						    var result = '';
						    params.forEach(function (item) {
						        result += item.seriesName + " : " + item.value +"</br>";
						    });
						    return result;
						}
		    },
		    legend: {
		    	itemWidth:setFontSize(22),
	        itemHeight:setFontSize(12),
		    	textStyle:{
		        	color:'#fff',
		        	fontSize :setFontSize(16)
		       },
		        data:data.legend
		    },
		    grid: {show:'true',borderWidth:'0',height:"65%",width:"70%",y:'20%',x:"15%",x2:"15%"},
		    calculable : true,
		    xAxis : [
		        {
		        	splitLine:{
                    	show:false
                },
		            type : 'category',
		            boundaryGap : false,
		            axisLine: {show:false},
		            axisTick: {show:false},
		            data : data.date,
		        	axisLabel : {
                            //formatter: '{value}',
                            rotate:30,
                            interval:0,
                            textStyle: {
                                color: '#fff',
                                fontSize :setFontSize(16)
                            }
                        }
		        }
		    ],
		    yAxis : [
		        {	
		        	splitLine:{
		        			lineStyle:{
				            		width:setFontSize(1.5),
				            		color:'#fff'
				            		}
		        		},
		            type : 'value',
	                axisLine: {show:false},
	                axisTick: {show:false},
	                axisLabel : {
	                            formatter: '{value}(吨)',
	                            textStyle: {
	                                color: '#fff',
	                                fontSize :setFontSize(16)
	                            }
	                        }
		       },
            {	
		        	splitLine:{//双y轴实现
                    	show:false
            		},
		            	type : 'value',
//		            	min:0,
//              		max:60,
	                axisLine: {show:false},
	                axisTick: {show:false},
	                axisLabel : {
	                            formatter: '{value}(米)',
	                            textStyle: {
	                                color: '#fff',
	                                fontSize :setFontSize(16)
	                            }
	                       }
		       }
		    ],
		    series : [
		        {
		            name:'吊重(吨)',
		            type:'line',
		            symbolSize: setFontSize(10),
		            itemStyle : { 
		            	normal:{
		            		lineStyle:{
		            		//color:'#50DAF4'//给线条设置颜色
		            		width:setFontSize(2)
		            		}
		            	}
	            	},
		            data:data.bieshu
		        },
		        {
		            name:'高度(米)',
		            type:'line',
		            symbolSize: setFontSize(10),
		             itemStyle : { 
		            	normal:{
		            		lineStyle:{
		            		//color:'#EEDA2D'//给线条设置颜色
		            		width:setFontSize(2)
		            		}
		            	}
	            	},
	            	 yAxisIndex: 1,
		            data:data.zhuzhai
//		        	markLine : {//平均值
//          			data : [
//          		        {type : 'average', name: '平均值'}
//          			]
//          		}
		        }
		    ]
		};
		 myChart6.setOption(option);
		 window.addEventListener("resize",function(){
		    myChart6.resize();
		});
	}

//塔机实时吊重
function taji(date){
	var data = { "bieshu":[1.2, 2.5, 1.6, 2.4, 2.8, 3.1, 2.1],
				"gongyu":[220, 182, 191, 234, 290, 330, 310],
				"zhuzhai":[150, 180, 201, 230, 280, 330, 410],
				"legend":[
				{name:'吊次',
				icon:'pin'//修改图例样式
				},
				{name:'超载次数',
				icon:'pin'
				}
				],
				"date":['14:00','15:00','16:00','17:00','18:00','19:00','20:00']
		}
	var myChart = echarts.init(document.getElementById('taji'));
	var	option = {
			color:['#FFF605','#FC7F3D'],//图例颜色设置
//		    tooltip : {
//		        trigger: 'axis',
//		        textStyle:{
//			               	fontSize :setFontSize(20)
//			               }，
//				formatter: function(params) {//提示框显示数据，去掉前面小园点
//						    var result = '';
//						    params.forEach(function (item) {
//						        result += item.seriesName + " : " + item.value +"</br>";
//						    });
//						    return result;
//						}
//		    },
		    grid: {show:'true',borderWidth:'0',height:"65%",width:"80%",y:'20%',x:"15%"},
		    calculable : true,
		    xAxis : [
		        {
		        	splitLine:{
                    	show:false
                	},
		            type : 'category',
		            boundaryGap : false,
		            axisLine: {
		            	show:true,
		            	lineStyle:{
			            		width:setFontSize(1.5),
			            		color:'#fff'
			            		}
		            	},
		            axisTick: {show:false},
		            data : data.date,
		        	axisLabel : {
//                          formatter: '{value}',
							rotate:30,
                            textStyle: {
                                color: '#fff',
                                fontSize :setFontSize(16)
                            }
                        }
		        }
		    ],
		    yAxis : [
        		{		
        			splitLine:{
        				show:false,
	        			lineStyle:{
			            		width:setFontSize(1.5),
			            		color:'#fff'
			            		}
		        		},
		            type : 'value',
	                axisLine: {show:false},
	                axisTick: {show:false},
	                axisLabel : {
	                            formatter: '{value}(吨)',
	                            textStyle: {
	                                color: '#fff',
	                                fontSize :setFontSize(16)
	                            }
	                        }
		       }
		    ],
		    series : [
		        {
		            name:'吊次',
		            type:'line',
		            symbolSize: setFontSize(10),
		            itemStyle : { 
		            	normal:{
		            		lineStyle:{
		            		//color:'#50DAF4'//给线条设置颜色
		            		width:setFontSize(2)
		            		}
		            	}
	            	},
		            data:data.bieshu
		        }
		    ]
		};
		 myChart.setOption(option);
		 window.addEventListener("resize",function(){
		    myChart.resize();
		});
	}


//塔机15日情况
function echart(date){
	var data = { "bieshu":[0, 0],
				"gongyu":[220, 182, 191, 234, 290, 330, 310],
				"zhuzhai":[20, 40],
				"legend":[
				{name:'吊次',
				icon:'pin'//修改图例样式
				},
				{name:'超载次数',
				icon:'pin'
				}
				],
				"date":['2018-03-2','2018-05-2']
		}
	//中间第二个统计图开始
	var myChart = echarts.init(document.getElementById('material'));
	var	option = {
			color:['#FFF605','#FC7F3D'],//图例颜色设置
		    tooltip : {
		        trigger: 'axis',
		        textStyle:{
			               	fontSize :setFontSize(20),
			               	align:'left'
			               },
	            formatter: function(params) {//提示框显示数据，去掉前面小园点
						    var result = '';
						    params.forEach(function (item) {
						        result += item.seriesName + " : " + item.value +"</br>";
						    });
						    return result;
						}   
		    },
		    legend: {
		    	itemWidth:setFontSize(22),
	        	itemHeight:setFontSize(12),
		    	textStyle:{
		        	color:'#fff',
		        	fontSize :setFontSize(16)
		       },
		        data:data.legend
		    },
		    grid: {show:'true',borderWidth:'0',height:"65%",width:"80%",y:'20%',x:"10%"},
		    calculable : true,
		    xAxis : [
		        {
		        	splitLine:{
                    	show:false
                	},
		            type : 'category',
		            boundaryGap : false,
		            axisLine: {show:false},
		            axisTick: {show:false},
		            data : data.date,
		        	axisLabel : {
//                          formatter: '{value}',
                            textStyle: {
                                color: '#fff',
                                fontSize :setFontSize(16)
                            }
                        }
		        }
		    ],
		    yAxis : [
		        {		splitLine:{
		        			lineStyle:{
				            		width:setFontSize(1.5),
				            		color:'#fff'
				            		}
		        		},
		            type : 'value',
	                axisLine: {show:false},
	                axisTick: {show:false},
	                axisLabel : {
	                            formatter: '{value}',
	                            textStyle: {
	                                color: '#fff',
	                                fontSize :setFontSize(16)
	                            }
	                        }
		       }
		    ],
		    series : [
		        {
		            name:'吊次',
		            type:'line',
		            symbolSize: setFontSize(10),
		            itemStyle : { 
		            	normal:{
		            		lineStyle:{
		            		//color:'#50DAF4'//给线条设置颜色
		            		width:setFontSize(2)
		            		}
		            	}
	            	},
		            data:data.bieshu
		        },
		        {
		            name:'超载次数',
		            type:'line',
		            symbolSize: setFontSize(10),
		             itemStyle : { 
		            	normal:{
		            		lineStyle:{
		            		//color:'#EEDA2D'//给线条设置颜色
		            		width:setFontSize(2)
		            		}
		            	}
	            	},
		            data:data.zhuzhai
//		        	markLine : {//平均值
//          			data : [
//          		        {type : 'average', name: '平均值'}
//          			]
//          		}
		        }
		    ]
		};
		 myChart.setOption(option);
		 window.addEventListener("resize",function(){
		    myChart.resize();
		});
	}
//塔机今日警告3d图
function taji_two(){
	
	var myChart = echarts.init(document.getElementById('taji_two'));
	var days = [1, 2, 3, 4];
	var hours = [''];
	var data = [
	    [0, 0, 7],
	    [0, 1, 6],
	    [0, 2, 5],
	    [0, 3, 4]
	];
var colorList = ['yellow', 'orange', '#66D9EF', '#CC8F8F'];
data = echarts.util.map(data, function(item, index) {
    return {
        value: [item[1], item[0], item[2]],
        itemStyle: {
            color: colorList[index]
        }
    };
});
option = {
    tooltip: {
        type: 'axis'
    },
    xAxis3D: {
        type: 'category',
        name: '',
        data: days,
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
    },
    yAxis3D: {
        type: 'category',
        name: '',
        data: hours,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        }
    },
    zAxis3D: {
        type: 'value',
        name: '',
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
    },
    grid3D: {
    	viewControl:{
    		rotateSensitivity:0,//设置为0表示禁止旋转
    		distance: 180,//视觉距离
    		alpha:2,//设置上下展示角度
    		beta: 0,//设置左右展示角度
    	},
        boxWidth: 200,
        boxDepth: 80,
        axisPointer: {
            show: false
        },
        light: {
            main: {
                intensity: 1.2
            },
            ambient: {
                intensity: 0.3
            }
        }
    },
    series: [{
        type: 'bar3D',
        name: '天数',
        barSize: 15,
        data: data,
        label: {
            show: false,
            textStyle: {
                fontSize: 16,
                borderWidth: 1
            }
        },
        itemStyle: {
            opacity: 1
        },
        emphasis: {
            label: {
                textStyle: {
                    fontSize: 20,
                    color: '#900'
                }
            }
        }
    }]
}
myChart.setOption(option);
 window.addEventListener("resize",function(){
    myChart.resize();
});
}
//塔机3d柱状图使用highcharts
function highchart(){
	var chart = {
      renderTo: 'taji_two',
      type: 'column',
      //height:setFontSize(300),
//    margin: 75,
      backgroundColor:'#2C4166',
      options3d: {
         enabled: true,
         alpha: 0,
         beta: 0,
         depth: 50,
         viewDistance: 25
      }
   };
   var title = {
      text: ''   
   };
   var plotOptions = {
      column: {
         depth: 25
      }
   };
   var colors=['#6BD7FA', '#FFC830', '#FF8A00', '#FFC830', '#1aadce', 
               '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'];
   	var series= [
   		{
   		  name:'预警数量',
	      data: [1]
   		},{
   		  name:'提醒数量',
	      data: [20]
   		},{
   		  name:'报警数量',
	      data: [1]
   		},{
   		  name:'违章数量',
	      data: [1]
   		},
   ];
 	var yAxis = {
			title: {
				text: '',//报警数量y轴左侧显示标题
//				rotation:90,文字旋转角度
				style:{
					fontSize:setFontSize(14),
					color:'#fff'
				}
			},
			labels: {
	            	formatter: function () {
                    	return this.value
                	},
	                style: {
						color: '#fff',
						fontSize:setFontSize(14),
						fontFamily:'微软雅黑'
					}
	            },
		};
	var xAxis = {
			visible:false,
//			labels: {//设置x轴显示文字
//	            	formatter: function () {
//                  	return ''
//              	}
//	            },
		};	
   	var legend={
   		itemStyle: { cursor: 'pointer', color: '#fff',fontSize:setFontSize(16)},
   		itemHoverStyle: { color: '#fff' },
   		symbolHeight:setFontSize(16),//图例园标高度
   		symbolPadding:setFontSize(10),
   		align:'right',
 		layout: 'vertical',
   		verticalAlign: 'middle',
// 		x: -10,
//		y: 100
   }
   var tooltip={
   	enabled:false
   }
   var json = {};   
   json.chart = chart; 
   json.title = title;   
   json.tooltip = tooltip;   
   json.yAxis=yAxis;
   json.xAxis=xAxis;
   json.colors = colors;
   json.series = series;
   json.plotOptions = plotOptions;
   json.legend=legend
   var highchart = new Highcharts.Chart(json);
  

}
