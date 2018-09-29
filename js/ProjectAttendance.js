doc_rem(document, window);//自适应字体设置
var kaoid = $.getUrlParam('id');
console.log(kaoid);
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
	money();
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


//项目经理考勤统计
function taji(date){
	var myChart = echarts.init(document.getElementById('tian_guo'));
	// 指定图表的配置项和数据
        var option = {
//				tooltip: {
//				        trigger: 'axis',
//		        		textStyle:{
//			               	fontSize :setFontSize(20),
//			               	align:'left'
//			               },
//		               formatter: function(params) {//提示框显示数据，去掉前面小园点
//						    var result = '';
//						    params.forEach(function (item) {
//						        result += item.seriesName + " : " + item.value +"</br>";
//						    });
//						    return result;
//						} 
//				    },
	        	splitLine:{
	                    show:false
                },
            title: {
                text: '',
                left:'20px',
                textStyle: {    
	                color: "#fff",
	                fontSize: setFontSize(17)   
                }
            },
            grid: {show:'true',borderWidth:'0',y:'5%',y2:'15%',width:"88%",height:"65%",x:"5%",x2:"5%"},
//          legend: {
//          	orient : 'vertical',
//              itemWidth:setFontSize(16),  
//              itemHeight:setFontSize(16),  
//              data:['平均值'],
//              x : 'right',
//		        y:'top',
//              textStyle:{
//		        	color:'#fff',
//		        	fontSize: setFontSize(15) 
//		        }
//          },
            xAxis: {
                data: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
                splitLine:{
                    show:false
                },
                axisLine: {show:false},
                axisTick: {show:false},
                axisLabel : {
                            formatter: '{value}',
//                          rotate:30,
                            textStyle: {
                                color: '#fff',
                                fontSize :setFontSize(16)
                            },
                            interval:0
//							formatter: function (value) {
//										//x轴的文字改为竖版显示
//										var str = value.split("");
//										return str.join("\n")
//									}
                }
            },
            yAxis: [{
                splitLine:{//设置线条大小
                    show:false,
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
                            formatter: '',
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
//              barWidth : setFontSize(35),
                data: [{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'}],
                symbolSize: setFontSize(10),
                itemStyle:{
                     normal:{
                     	color:function(p){
								if(p.data.state == '缺勤')
								return 'red'
								else
								return "#1296db"
							},
                        label: {//显示在柱子中间的值
                            show: true,
                            fontSize :setFontSize(18),
                            color:'#fff',
                            formatter: function(p){
                            	var str = p.data.state.split("");
								return	str.join("\n")
                 			},
                            position: 'inside'//定位在中间
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

//总监考勤统计
function echart2(){
	//右侧第二个统计图开始
        var myChart4 = echarts.init(document.getElementById('mainCenterBottom'));
	// 指定图表的配置项和数据
        var option = {
//				tooltip: {
//				        trigger: 'axis',
//		        		textStyle:{
//			               	fontSize :setFontSize(20),
//			               	align:'left'
//			               },
//		               formatter: function(params) {//提示框显示数据，去掉前面小园点
//						    var result = '';
//						    params.forEach(function (item) {
//						        result += item.seriesName + " : " + item.value +"</br>";
//						    });
//						    return result;
//						} 
//				    },
        	splitLine:{
                    show:false
            },
            title: {
                text: '',
                left:'20px',
                textStyle: {    
	                color: "#fff",
	                fontSize: setFontSize(17)   
                }
            },
            grid: {show:'true',borderWidth:'0',y:'5%',y2:'15%',width:"88%",height:"65%",x:"5%",x2:"5%"},
//          legend: {
//          	orient : 'vertical',
//              itemWidth:setFontSize(16),  
//              itemHeight:setFontSize(16),  
//              data:['平均值'],
//              x : 'right',
//		        y:'top',
//              textStyle:{
//		        	color:'#fff',
//		        	fontSize: setFontSize(15) 
//		        }
//          },
            xAxis: {
                data: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
                splitLine:{
                    show:false
                },
                axisLine: {show:false},
                axisTick: {show:false},
                axisLabel : {
                            formatter: '{value}',
//                          rotate:30,
                            textStyle: {
                                color: '#fff',
                                fontSize :setFontSize(16)
                            },
                            interval:0
//							formatter: function (value) {
//										//x轴的文字改为竖版显示
//										var str = value.split("");
//										return str.join("\n")
//									}
                }
            },
            yAxis: [{
                splitLine:{//设置线条大小
                    show:false,
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
                            formatter: '',
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
                type: 'line',
//              barWidth : setFontSize(35),
                data: [{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'}],
                symbolSize: setFontSize(10),
                markPoint : {
                	symbol:'droplet',
		             data : [{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'},{value:0,state:'在岗'}, {value:0,state:'缺勤'}],
		             formatter:function(p){
		             	console.log(p)
		             }
            	},
                itemStyle:{
                     normal:{
                     	color:function(p){
								if(p.data.state == '缺勤')
								return 'red'
								else
								return "#1296db"
							},
                        label: {//显示在柱子中间的值
                            show: true,
                            fontSize :setFontSize(18),
                            color:'#fff',
                            formatter: function(p){
                            	var str = p.data.state.split("");
								return	str.join("\n")
                 			},
                            position: 'top'//定位在中间
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

//总监考勤统计
function echart_four(){
	//右侧第二个统计图开始
        var myChart4 = echarts.init(document.getElementById('mainCenterBottom'));
	// 指定图表的配置项和数据
        var option = {
//				tooltip: {
//				        trigger: 'axis',
//		        		textStyle:{
//			               	fontSize :setFontSize(20),
//			               	align:'left'
//			               },
//		               formatter: function(params) {//提示框显示数据，去掉前面小园点
//						    var result = '';
//						    params.forEach(function (item) {
//						        result += item.seriesName + " : " + item.value +"</br>";
//						    });
//						    return result;
//						} 
//				    },
	        	splitLine:{
	                    show:false
                },
            title: {
                text: '',
                left:'20px',
                textStyle: {    
	                color: "#fff",
	                fontSize: setFontSize(17)   
                }
            },
            grid: {show:'true',borderWidth:'0',y:'5%',y2:'15%',width:"88%",height:"65%",x:"5%",x2:"5%"},
//          legend: {
//          	orient : 'vertical',
//              itemWidth:setFontSize(16),  
//              itemHeight:setFontSize(16),  
//              data:['平均值'],
//              x : 'right',
//		        y:'top',
//              textStyle:{
//		        	color:'#fff',
//		        	fontSize: setFontSize(15) 
//		        }
//          },
            xAxis: {
                data: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
                splitLine:{
                    show:false
                },
                axisLine: {show:false},
                axisTick: {show:false},
                axisLabel : {
                            formatter: '{value}',
//                          rotate:30,
                            textStyle: {
                                color: '#fff',
                                fontSize :setFontSize(16)
                            },
                            interval:0
//							formatter: function (value) {
//										//x轴的文字改为竖版显示
//										var str = value.split("");
//										return str.join("\n")
//									}
                }
            },
            yAxis: [{
                splitLine:{//设置线条大小
                    show:false,
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
                            formatter: '',
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
//              barWidth : setFontSize(35),
                data: [{value:15,state:'在岗'}, {value:15,state:'在岗'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'缺勤'}, {value:15,state:'在岗'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'},{value:15,state:'在岗'}, {value:15,state:'缺勤'}],
                symbolSize: setFontSize(10),
                itemStyle:{
                     normal:{
                     	color:function(p){
								if(p.data.state == '缺勤')
								return 'red'
								else
								return "#1296db"
							},
                        label: {//显示在柱子中间的值
                            show: true,
                            fontSize :setFontSize(18),
                            color:'#fff',
                            formatter: function(p){
                            	var str = p.data.state.split("");
								return	str.join("\n")
                 			},
                            position: 'inside'//定位在中间
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

//劳务人员统计图
function nian(){
	//左侧第二个统计图开始
        var myChart = echarts.init(document.getElementById('nian_guo'));
        // 指定图表的配置项和数据
        var option = {
//				tooltip: {
//				        trigger: 'axis',
//		        		textStyle:{
//			               	fontSize :setFontSize(20),
//			               	align:'left'
//			               },
//		               formatter: function(params) {//提示框显示数据，去掉前面小园点
//						    var result = '';
//						    params.forEach(function (item) {
//						        result += item.seriesName + " : " + item.value +"</br>";
//						    });
//						    return result;
//						} 
//				    },
	        	splitLine:{
	                    show:false
                },
            title: {
                text: '',
                left:'20px',
                textStyle: {    
	                color: "#fff",
	                fontSize: setFontSize(17)   
                }
            },
            grid: {show:'true',borderWidth:'0',y:'15%',y2:'15%',width:"88%",height:"65%",x:"5%",x2:"5%"},
            legend: {
//          	orient : 'vertical',
                itemWidth:setFontSize(16),  
                itemHeight:setFontSize(16),  
                data:['应到人数','实到人数'],
//              x : 'right',
//		        y:'top',
                textStyle:{
		        	color:'#fff',
		        	fontSize: setFontSize(15) 
		        }
            },
            xAxis: {
                data: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
                splitLine:{
                    show:false
                },
                axisTick: {show:false},
                axisLine: {
                	show:false,
                	lineStyle:{
                		color:'#fff'
                		}
                	},
                axisLabel : {
                            formatter: '{value}',
//                          rotate:30,
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
                    show:false,
                     	lineStyle:{
				            		width:setFontSize(1.5),
				            		color:'#fff'
				            		}
                
                },
                type : 'value',
//              min:0,
//              max:60,//在y轴上添加最大值是为了避免出现多根x轴，（双y轴的情况下最大值要一致）
                axisLine: {
                	show:false,
                	lineStyle:{
                		color:'#fff'
                		}
                	},
                axisTick: {show:false},
                axisLabel : {
                            formatter: '',
                            textStyle: {
                                color: '#fff',
                                fontSize :setFontSize(16)
                            }
                        }
            }
            ],
            series: [
            {
                name: '实到人数',
                type: 'bar',
                stack: "业务",//实现柱状图堆叠效果要stack名字一样
                data: [10, 18, 30, 30, 45, 10, 20, 25,40,15, 14, 30, 26, 20, 15, 15, 30,35,16, 18, 30, 29, 18, 33, 20, 30, 40,18,20,20],
                symbolSize: setFontSize(10),
                itemStyle:{
                     normal:{
                     	color:"#70F9FF",
	                    label: {//显示在柱子中间的值
	                            show: true,
	                            fontSize :setFontSize(16),
	                            color:'#fff',
	                            position: 'inside'//定位在中间
	                        }
                     },
                }
            },
            {
                name: '应到人数',
                type: 'bar',
                stack: "业务",
                data: [25, 20, 36, 60, 55, 20, 30, 40,45,50, 20, 36, 30, 65, 20, 45, 55,45,20, 20, 36, 30, 30, 20, 30, 40,45,20,45,20],
                symbolSize: setFontSize(10),
                itemStyle:{
                     normal:{
                     	color:"#1296db",
                        label: {//显示在柱子中间的值
                            show: true,
                            fontSize :setFontSize(16),
                            color:'#fff',
                            position: 'inside'//定位在中间
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
//工资支付情况统计图
function money(){
	//左侧第二个统计图开始
        var myChart = echarts.init(document.getElementById('money'));
        
        // 指定图表的配置项和数据
        var option = {
//				tooltip: {
//				        trigger: 'axis',
//		        		textStyle:{
//			               	fontSize :setFontSize(20),
//			               	align:'left'
//			               },
//		               formatter: function(params) {//提示框显示数据，去掉前面小园点
//						    var result = '';
//						    params.forEach(function (item) {
//						        result += item.seriesName + " : " + item.value +"</br>";
//						    });
//						    return result;
//						} 
//				    },
	        	splitLine:{
	                    show:false
                },
            title: {
                text: '',
                left:'20px',
                textStyle: {    
	                color: "#fff",
	                fontSize: setFontSize(17)   
                }
            },
            grid: {show:'true',borderWidth:'0',y:'15%',y2:'15%',width:"92.5%",height:"65%",x:"2.5%"},
//          legend: {
//          	orient : 'vertical',
//              itemWidth:setFontSize(16),  
//              itemHeight:setFontSize(16),  
//              data:['平均值'],
//              x : 'right',
//		        y:'top',
//              textStyle:{
//		        	color:'#fff',
//		        	fontSize: setFontSize(15) 
//		        }
//          },
            xAxis: {
                data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
                splitLine:{
                    show:false
                },
                axisLine: {show:false},
                axisTick: {show:false},
                axisLabel : {
                            formatter: '{value}',
//                          rotate:30,
                            textStyle: {
                                color: '#fff',
                                fontSize :setFontSize(16)
                            },
                            interval:0
//							formatter: function (value) {
//										//x轴的文字改为竖版显示
//										var str = value.split("");
//										return str.join("\n")
//									}
                }
            },
            yAxis: [{
                splitLine:{//设置线条大小
                    show:false,
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
                            formatter: '',
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
                barWidth : setFontSize(35),
                data: [{value:15,state:'正常'}, {value:15,state:'拖欠'}, {value:15,state:'正常'}, {value:15,state:'拖欠'}, {value:15,state:'正常'}, {value:15,state:'正常'}, {value:15,state:'拖欠'}, {value:15,state:'正常'},{value:15,state:'拖欠'},{value:15,state:'正常'}, {value:15,state:'拖欠'}, {value:15,state:'正常'}],
                symbolSize: setFontSize(10),
                itemStyle:{
                     normal:{
                     	color:function(p){
								if(p.data.state == '拖欠')
								return 'red'
								else
								return "#1296db"
							},
                        label: {//显示在柱子中间的值
                            show: true,
                            fontSize :setFontSize(18),
                            color:'#fff',
                            formatter: function(p){
                            	var str = p.data.state.split("");
								return	str.join("\n")
                 			},
                            position: 'inside'//定位在中间
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