doc_rem(document, window);//自适应字体设置
var databox1=[{"id": 1,"name":"2018年","selected":true}, 
				{"id": 2,
                    "name":"2017年"
                }, {
                    "id": 3,
                    "name":"2016年"

                }, {
                    "id": 4,
                    "name":"2015年"
                }, {
                    "id": 5,
                    "name":"2014年"
                }]
var databox=[{"id": 1,"name":"2018-01","selected":true}, 
				{"id": 2,
                    "name":"2018-02"
                }, {
                    "id": 3,
                    "name":"2018-03"

                }, {
                    "id": 4,
                    "name":"2018-04"
                }, {
                    "id": 5,
                    "name":"2018-05"
                }, {"id": 6,"name":"2018-06"}, {"id": 7,"name":"2018-07"}, {"id": 8,"name":"2018-08"}, {"id": 9,"name":"2018-09"}, {"id": 10,"name":"2018-10"}, {"id": 11,"name":"2018-11"}, {"id": 12,"name":"2018-12"}
                ]
$(function(){
	echart_four();
	taji();
	nian();
	$('#combotian').datebox({
		panelWidth:setFontSize(200),
    	panelHeight:setFontSize(200),
    	width:setFontSize(150),
    	height:setFontSize(30),
    	editable:false
	});
	$('#comboyue').combobox({
		data:databox,
		valueField:'id',    
    	textField:'name',
    	panelHeight:setFontSize(200),
    	panelWidth:0,
    	width:setFontSize(100),
    	height:setFontSize(28),
    	editable:false
	});
	$('#combonian').combobox({
		data:databox1,
		valueField:'id',    
    	textField:'name',
    	panelHeight:0,
    	panelWidth:0,
    	width:setFontSize(100),
    	height:setFontSize(28),
    	editable:false
	});
})


//国控值天数统计
function taji(date){
	var myChart = echarts.init(document.getElementById('tian_guo'));
	var option = {
				tooltip: {
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
	        	splitLine:{
	                    show:false
                },
            title: {
                text: 'μg/m3',
                left:'20px',
                textStyle: {    
	                color: "#fff",
	                fontSize: setFontSize(17)   
                }
            },
            grid: {show:'true',borderWidth:'0',y:'15%',y2:'15%',width:"88%",height:"65%",x:"5%"},
            legend: {
            	orient : 'vertical',
                itemWidth:setFontSize(16),  
                itemHeight:setFontSize(16),  
                data:['平均值','国控值'],
                x : 'right',
		        y:'top',
                textStyle:{
		        	color:'#fff',
		        	fontSize: setFontSize(15) 
		        }
            },
            xAxis: {
                data: ["0时","1时","2时","3时","4时","5时","6时","7时","8时","9时","10时","11时","12时","13时","14时","15时","16时","17时","18时","19时","20时","21时","22时","23时",],
                splitLine:{
                    show:false
                },
                axisTick: {show:false},
                axisLabel : {
                            formatter: '{value}',
                             rotate:30,
                            textStyle: {
                                color: '#fff',
                                fontSize :setFontSize(16)
                            },
                            interval:0,
                }
            },
            yAxis: [{
                 splitLine:{//设置线条大小
                    show:true,
                     	lineStyle:{
				            		width:setFontSize(1.5),
				            		color:'#fff'
				            		}
                
                },
                type : 'value',
//              min:0,
//              max:60,//在y轴上添加最大值是为了避免出现多根x轴，（双y轴的情况下最大值要一致）
                axisLine: {show:false},
                axisTick: {show:false},
                axisLabel : {
                            formatter: '{value}',
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
            series: [
            {
                name: '平均值',
                type: 'bar',
                data: [3, 18, 30, 6, 5, 10, 20, 25,40,15, 10, 30, 6, 8, 15, 15, 30,35,16, 18, 30, 9, 8, 13],
                symbolSize: setFontSize(10),
                itemStyle:{
                     normal:{color:"#70F9FF"},
                }
            },
            {
                name: '国控值',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20, 30, 40,45,20, 20, 36, 10, 10, 20, 30, 40,45,20, 20, 36, 10, 10, 20],
                symbolSize: setFontSize(10),
                itemStyle:{
                     normal:{
                     	color:function(p){
								if(p.data>30)
								return 'red'
								else
								return '#FFF605'
							}
	                     }
	                }
	            }
            ]
        };
		 myChart.setOption(option);
		 window.addEventListener("resize",function(){
		    myChart.resize();
		});
	}

//国控值月数统计
function echart_four(){
	//左侧第二个统计图开始
        var myChart4 = echarts.init(document.getElementById('mainCenterBottom'));
        // 指定图表的配置项和数据
        var option = {
				tooltip: {
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
	        	splitLine:{
	                    show:false
                },
            title: {
                text: 'μg/m3',
                left:'20px',
                textStyle: {    
	                color: "#fff",
	                fontSize: setFontSize(17)   
                }
            },
            grid: {show:'true',borderWidth:'0',y:'15%',y2:'15%',width:"85%",height:"65%",x:"5%",x2:"5%"},
            legend: {
            	orient : 'vertical',
                itemWidth:setFontSize(16),  
                itemHeight:setFontSize(16),  
                data:['平均值','国控值'],
                x : 'right',
		        y:'top',
                textStyle:{
		        	color:'#fff',
		        	fontSize: setFontSize(15) 
		        }
            },
            xAxis: {
                data: ["1日","2日","3日","4日","5日","6日","7日","8日","9日","10日","11日","12日","13日","14日","15日","16日","17日","18日","19日","20日","21日","22日","23日","24日","25日","26日","27日","28日","29日","30日"],
                splitLine:{
                    show:false
                },
                axisTick: {show:false},
                axisLabel : {
                            formatter: '{value}',
                             rotate:30,
                            textStyle: {
                                color: '#fff',
                                fontSize :setFontSize(16)
                            },
                            interval:0,
//							formatter: function (value) {
//										//x轴的文字改为竖版显示
//										var str = value.split("");
//										return str.join("\n")
//									}
                }
            },
            yAxis: [{
                 splitLine:{//设置线条大小
                    show:true,
                     	lineStyle:{
				            		width:setFontSize(1.5),
				            		color:'#fff'
				            		}
                
                },
                type : 'value',
//              min:0,
//              max:60,//在y轴上添加最大值是为了避免出现多根x轴，（双y轴的情况下最大值要一致）
                axisLine: {show:false},
                axisTick: {show:false},
                axisLabel : {
                            formatter: '{value}',
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
            series: [
            {
                name: '平均值',
                type: 'bar',
                data: [3, 18, 30, 6, 5, 10, 20, 25,40,15, 10, 30, 6, 8, 15, 15, 30,35,16, 18, 30, 9, 8, 13, 20, 30, 40,18,20,20],
                symbolSize: setFontSize(10),
                itemStyle:{
                     normal:{color:"#70F9FF"},
                }
            },
            {
                name: '国控值',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20, 30, 40,45,20, 20, 36, 10, 10, 20, 30, 40,45,20, 20, 36, 10, 10, 20, 30, 40,45,20,45,20],
                symbolSize: setFontSize(10),
                itemStyle:{
                     normal:{
						color:function(p){
								if(p.data>30)//数据超过30柱状图显示红色
								return 'red'
								else
								return '#FFF605'
							}
                     	}
                }
            },
            {
                name: '次数',
                type: 'line',
                data: [5, 20, 36, 60, 10, 20, 30, 40,28,20, 20, 36, 10, 65, 20, 45, 55,45,20, 20, 36, 10, 10, 20, 30, 40,45,20,45,20],
                yAxisIndex: 1,
                symbolSize: setFontSize(10),
                itemStyle:{
                     normal:{
                     	color:"#F7EA50",lineStyle:{
		            		//color:'#50DAF4'//给线条设置颜色
		            		width:setFontSize(2)
		            		}
                     }
                }
            }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart4.setOption(option);
        window.addEventListener("resize",function(){
		    myChart4.resize();
		});
}

//国控值年数统计图
function nian(){
	//左侧第二个统计图开始
        var myChart = echarts.init(document.getElementById('nian_guo'));
        // 指定图表的配置项和数据
        var option = {
				tooltip: {
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
	        	splitLine:{
	                    show:false
                },
            title: {
                text: 'μg/m3',
                left:'20px',
                textStyle: {    
	                color: "#fff",
	                fontSize: setFontSize(17)   
                }
            },
            grid: {show:'true',borderWidth:'0',y:'15%',y2:'15%',width:"85%",height:"65%",x:"5%",x2:"5%"},
            legend: {
            	orient : 'vertical',
                itemWidth:setFontSize(16),  
                itemHeight:setFontSize(16),  
                data:['平均值','国控值'],
                x : 'right',
		        y:'top',
                textStyle:{
		        	color:'#fff',
		        	fontSize: setFontSize(15) 
		        }
            },
            xAxis: {
                data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
                splitLine:{
                    show:false
                },
                axisTick: {show:false},
                axisLabel : {
                            formatter: '{value}',
                             rotate:30,
                            textStyle: {
                                color: '#fff',
                                fontSize :setFontSize(16)
                            },
                            interval:0,
//							formatter: function (value) {
//										//x轴的文字改为竖版显示
//										var str = value.split("");
//										return str.join("\n")
//									}
                }
            },
            yAxis: [{
                 splitLine:{//设置线条大小
                    show:true,
                     	lineStyle:{
				            		width:setFontSize(1.5),
				            		color:'#fff'
				            		}
                
                },
                type : 'value',
//              min:0,
//              max:60,//在y轴上添加最大值是为了避免出现多根x轴，（双y轴的情况下最大值要一致）
                axisLine: {show:false},
                axisTick: {show:false},
                axisLabel : {
                            formatter: '{value}',
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
            series: [
            {
                name: '平均值',
                type: 'bar',
                data: [3, 15, 30, 6, 7, 15, 20, 30,35,16, 12, 20],
                symbolSize: setFontSize(10),
                itemStyle:{
                     normal:{color:"#70F9FF"},
                }
            },
            {
                name: '国控值',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20, 30, 40,45,20, 20, 36],
                symbolSize: setFontSize(10),
                itemStyle:{
                     normal:{
                     	color:function(p){
								if(p.data>30)
								return 'red'
								else
									return '#FFF605'
							}
                     	}
                }
            },
            {
                name: '次数',
                type: 'line',
                data: [5, 20, 36, 60, 10, 20, 30, 40,28,20, 20, 36],
                yAxisIndex: 1,
                symbolSize: setFontSize(10),
                itemStyle:{
                     normal:{
                     	color:"#F7EA50",
                     	lineStyle:{
		            		//color:'#50DAF4'//给线条设置颜色
		            		width:setFontSize(2)
		            		}
                     }
                }
            }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
		    myChart.resize();
		});
}
