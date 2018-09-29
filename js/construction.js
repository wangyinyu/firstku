
var mapdata=[
  { name: '阿坝藏族羌族自治州', value: 55},
                             { name: '巴中市', value: 605.83},
                            { name: '成都市', value: 261 },
                            { name: '达州市', value: 49110.27 },
                             { name: '德阳市', value: 24515.76 },
                             { name: '甘孜藏族自治州', value: 6610.05 },
                            { name: '广安市', value: 19632.26 },
                             { name: '广元市', value: 6610.05 },
                            { name: '乐山市', value: 3536.05 },
                             { name: '凉山彝族自治州', value: 3984.22},
                             { name: '泸州市', value: 33644.02 },
                             { name: '眉山市', value: 81 },
                            { name: '绵阳市', value: 10011.37 },
                             { name: '内江市', value: 12512.3 },
                             { name: '南充市', value: 30 },
                            { name: '攀枝花市', value: 22226.7 },
                             { name: '遂宁市', value: 14359.88 },
                             { name: '雅安市', value: 16251.93 },
                            { name: '宜宾市', value: 19195.69 },
                             { name: '资阳市', value: 10568.83 },
                             { name: '自贡市', value: 5680.58 }
]

var chengdu=[{
        "成都市":"510100",
        "锦江区":"510104",
        "青羊区":"510105" ,
        "金牛区":"510106" ,
        "武侯区":"510107" ,
        "成华区": "510108" ,
        "龙泉驿区": "510112" ,
        "青白江区": "510113",
        "新都区": "510114" ,
        "温江区": "510115" ,
        "双流区": "510116" ,
        "郫都区": "510117" ,
        "金堂县": "510121" ,
        "大邑县": "510129" ,
        "蒲江县": "510131" ,
        "新津县": "510132" ,
        "都江堰市": "510181", 
        "彭州市": "510182" ,
        "邛崃市": "510183" ,
        "崇州市": "510184" ,
        "简阳市": "510185" 
    }]
// var whdef = 100/916;// 表示1920的设计图,使用100PX的默认值
//  var wH = window.innerHeight;// 当前窗口的高度
//  var wW = window.innerWidth;// 当前窗口的宽度
//  var rem = wH * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
//  $('html').css('font-size', rem + "px");
     
$(function(){
	//echart_one();
	//echart_two();	
//  echart_three();
//	echart_four();
//	echart_five();
//	echart_six();
//	echart_seven();
//	loadoOption4();
	$('.leftBottomBoder ul li').on('click',function(){
		$(this).siblings().removeClass('li_active');
		$(this).addClass('li_active');
	})

})


function echart_one(){
		//定义第一个饼状图
		var myChart = echarts.init(document.getElementById('wrong-message'));
		var	option = {
			color:['#04BFB0','#77E9F3','#FC7F3D','#FFF605'],//图例颜色设置
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient : 'vertical',
		        textStyle:{
		        	color:'#fff',
		        	fontSize:'90%'
		        },
		        x : 'right',
		        y:'center',
		        data:['特级','一级','二级','三级']
		    },
		    calculable : false,
		    series : [
		        {
		            name:'访问来源',
		            type:'pie',
		            selectedMode: 'single',
		            radius : ['0%', '35%'],//radius : [0, 40],大小设置
		            center: ['35%','50%'],//center: ['35%','40%'],位置设置
		            x: '20%',
		            width: '40%',
		            funnelAlign: 'right',
		            max: 1548,
		            
		            itemStyle : {
		                normal : {
		                    label : {
		                        position : 'inner',
		                    },
		                    labelLine : {
		                        show : false
		                    }
		                }
		            },
//		            label : {
//						normal : {
//							formatter: '{b}:{c}: ({d}%)',
//							textStyle : {
//								fontWeight : 'normal',
//								fontSize : 10
//								}
//							}
//					},
		            data:[
		                {value:335, name:'特级'},
		                {value:679, name:'二级'}
		            ]
		        },
		        {
		            name:'访问来源',
		            type:'pie',
		            radius : ['50%', '70%'],//radius : [70, 90],
		            center: ['35%','50%'],//center: ['35%','40%'],
		            // for funnel
		            x: '60%',
		            width: '35%',
		            funnelAlign: 'left',
		            max: 1048,
		             itemStyle : {
		                normal : {
		                    label : {
		                        show : false
		                    },
		                    labelLine : {
		                        show : false
		                    }
		                }
		            },
		            data:[
		                {value:335, name:'特级'},
		                {value:310, name:'一级'},
		                {value:234, name:'三级'}
		            ]
		        }
		    ]
		};
		//ajax请求数据
		$.ajax({
			type:"get",
			url:"jj",
			success:function(data){
			
			},
			error:function(){
				//alert('22')
			}
		});
     myChart.setOption(option);
     window.addEventListener("resize",function(){
	    myChart.resize();
	});
};

//使用echarts3做成都市地图

function echart_two(){
	//定义第二个地图
//绘制成都市地图
	echarts.registerMap('成都', chengduJson());
	var optionMap = {
                tooltip: {
                    trigger: 'item',
//                   formatter: function(a){//鼠标移到某个州市上弹出的提示内容。包括显示样式可以自定义，利用return返回样式即可。
//                   return a[1]+":"+a[2];//a[1]:州市名称，a[2]:data中的valuez值。
//           		}
               },
                visualMap: {  
                    show : false,  
                    x: 'left',  
                    y: 'center',  
                    splitList: [//区域颜色根据值区间设置   
                        {start: 0, end:50},
                        {start: 50, end: 200},
                        {start: 200, end: 1000}
                        ],
                    inRange: {//设置颜色的地方
				                color: [ '#E5E376','#FF5555','#4090D9']
				            }
                },  
                 series: [
                     {
                         //name: '数据名称',
                        type: 'map',
                         mapType: '成都',//如果是其他省份，也可以改变，例如：上海，北京，天津等地。
                         selectedMode: 'single',
                         zoom:1.25,//设置地图大小
                         roam: true,//是否缩放
                         itemStyle: {
                             normal: {
                                label: { 
                                	show: true,
                                	textStyle:{
										               	//color:'#fff'//对地图上面地点设置文字颜色
										               } 
                                },
                                borderWidth: 0.7,//省份的边框宽度
                                borderColor: '#fff',
                             },
                             emphasis: { label: { show: true },areaColor: '#F7EA50', }//鼠标选中状态
                         },
                         data: [
		                    	{ name: '成都市', value: 50 },
													{ name: '锦江区', value: 210 },
													{ name: '金牛区', value: 300 },
													{ name: '武侯区', value: 400 },
													{ name: '成华区', value: 260 },
													{ name: '龙泉驿区', value: 30 },
													{ name: '青白江区', value: 420 },
													{ name: '新都区', value: 550},
													{ name: '温江区', value: 306 },
													{ name: '双流区', value: 381 },
													{ name: '郫都区', value: 36 },
													{ name: '金堂县', value: 140 },
													{ name: '大邑县', value: 220 },
													{ name: '蒲江县', value: 230 },
													{ name: '遂宁市', value: 65 },
													{ name: '青羊区', value: 208 },
													{ name: '新津县', value: 888 },
													{ name: '都江堰市', value: 361 },
													{ name: '彭州市', value: 753},
													{ name: '邛崃市', value: 300 },
													{ name: '崇州市', value: 153},
													{ name: '简阳市', value: 564}
		                    ],
                         markPoint: {//动态标记
				                    large: false,//这个选项，悬浮自动失效
				                    symbolSize: 10,
				                    symbol:'triangle',//标记点类型
				                  	itemStyle: {
				                      normal: {
				                          shadowBlur: 2,
				                          symbolSize:50,
				                          //shadowColor: 'rgba(37, 140, 249, 0.8)',
				                          color: 'red',
				                          label:{
							                    	show:true,
							                    	formatter:function(val){
							                    		return val.value//返回标注点要显示的文字
							                    	}
							                    }
				                      }
				                  },
				                    data: [//标记点的数据
						                    {
						                    	name:'大邑县',
						                    	coord: [103.526952,30.593652],
						                    	value:220
					                    	},
					                    	{
						                    	name:'金牛区',
						                    	coord: [104.059702,30.699342],
						                    	value:160
					                    	},
				                    ]
		                		}
                     }
                 ]
             };
             //初始化echarts实例
        var myChart1 = echarts.init(document.getElementById('map'));
		
        //使用制定的配置项和数据显示图表
        myChart1.setOption(optionMap);
        window.addEventListener("resize",function(){
		    myChart1.resize();
		});
}

function echart_three(date){
	//定义第3个统计图
		var myChart3 = echarts.init(document.getElementById('statistical_right'));
	    var	option = {
	    	color:['#F7EB47','#77E9F3'],
		    tooltip : {//辅助线设置
		        trigger: 'axis',
		        show:true
		    	},
		    legend: {
		    	textStyle:{
		        	color:'#fff',
		        	fontSize:'85%'
		       	},
		       	icon:'pin',
		        data:[{name:'预警数据',icon:'triangle'},
		        {name:'未处理数据',icon:'pin'}]
		    },
		    grid: {show:'true',borderWidth:'0',height:"60%",width:"60%",y:'10%',x:"20%"},
		    calculable : true,
		    xAxis : [
		        {
		        	splitLine:{
                    	show:true
                	},
//              	nameRotate:90,
                	axisLine: {show:false},
	                axisTick: {show:false},
		            type : 'category',
		            boundaryGap : false,
		            data : ["高新区","锦江区","成华区","金牛区","青羊区","武侯区","双流区"],
		        	axisLabel : {
                            formatter: '{value}',
                            textStyle: {
                                color: '#fff',
                                fontSize:'75%'
                            },
                            interval:0,
                            formatter: function (value) {
										//x轴的文字改为竖版显示
										var str = value.split("");
										return str.join("\n")
									}
                       }
		        }
		    ],
		    yAxis : [
		        {	
		        	splitLine:{
                    	show:false
                	},
		            type : 'value',
	                axisLine: {show:false},
	                axisTick: {show:false},
	                axisLabel : {
	                            formatter: '{value}',
	                            textStyle: {
	                                color: '#fff',
	                                fontSize:'90%'
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
	                                color: '#fff'
	                            }
	                       }
		       }
		    ],
		    series : [
		        {
		            name:'预警数据',
		            type:'line',
		            data:[120, 132, 101, 134, 90, 230, 450],
		            symbolSize: 10,//拐点大小
		            symbol:'triangle',//拐点样式
		            itemStyle : {
	                    normal : {
	                        lineStyle:{
	                            width:0//隐藏折线图的线
	                        	}
	                    	}
                		}
		        },
		        {
		            name:'未处理数据',
		            type:'line',
		            symbolSize: 15,//拐点大小
		             symbol:'pin',//拐点样式
		            data:[150, 232, 201, 154, 190, 330, 410],
		            yAxisIndex: 1,//使用第二根y轴的数据
		            itemStyle : {
	                    normal : {
	                        lineStyle:{
	                            width:0
	                        	}
	                    	}
                		}
		        }
		    ]
		};
	//ajax请求数据
		$.ajax({
			type:"get",
			url:"jj",
			success:function(data){
				alert('11')
			},
			error:function(){
				//alert('22')
			}
		});
     myChart3.setOption(option);
     window.addEventListener("resize",function(){
	    myChart3.resize();
	});
}

function echart_four(){
	//左侧第二个统计图开始
//基于准备好的dom，初始化echarts实例
        var myChart4 = echarts.init(document.getElementById('mainLeftCenter'));
        // 指定图表的配置项和数据
        var option = {
				tooltip: {
				        trigger: 'axis'
				    },
        	splitLine:{
                    show:false
                },
            title: {
                text: '',
                left:'20px',
                textStyle: {    
	                color: "#fff",
	                fontSize: 17   
                }
            },
            grid: {show:'true',borderWidth:'0',y:10,y2:90,width:"80%",height:"50%",x:"10%"},
//          legend: {
//          	orient : 'vertical',
//              itemWidth:15,  
//              itemHeight:15,  
//              data:['合格','不合格'],
//              x : 'right',
//		        y:'top',
//              textStyle:{
//		        	color:'#fff',
//		        	fontSize: 11
//		        }
//          },
            xAxis: {
                data: ["市管","锦江区","成华区","金牛区","青羊区","武侯区","双流区","都江堰","其他"],
                splitLine:{
                    show:false
                },
                axisTick: {show:false},
                axisLabel : {
                            formatter: '{value}',
                            textStyle: {
                                color: '#fff',
                                fontSize: '85%'
                            },
                            interval:0,
							formatter: function (value) {
										//x轴的文字改为竖版显示
										var str = value.split("");
										return str.join("\n")
									}
                        }
            },
            yAxis: [{
                 splitLine:{
                    show:true
                },
                type : 'value',
                min:0,
                max:60,//在y轴上添加最大值是为了避免出现多根x轴，（双y轴的情况下最大值要一致）
                axisLine: {show:false},
                axisTick: {show:false},
                axisLabel : {
                            formatter: '{value}',
                            textStyle: {
                                color: '#fff',
                                fontSize: '85%'
                            }
                        }
            },
            {	
		        	splitLine:{//双y轴实现
                    	show:true
                },
		            	type : 'value',
		            	min:0,
                max:60,
	                axisLine: {show:false},
	                axisTick: {show:false},
	                axisLabel : {
	                            formatter: '{value}',
	                            textStyle: {
	                                color: '#fff'
	                            }
	                       }
		       }
            ],
            series: [{
                name: '合格',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20, 30, 40,45],
                itemStyle:{
                     normal:{color:"#70F9FF"},
                }
            },{
                name: '不合格',
                type: 'line',
                data: [20, 30, 50, 15, 42, 40, 30, 45,50],
                yAxisIndex: 1,
                itemStyle:{
                     normal:{color:"#F7EA50"}
                }
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart4.setOption(option);
        window.addEventListener("resize",function(){
		    myChart4.resize();
		});
}

//定义一个计算的假数据
var datayuan=[
            {value:50, name:'一般事故'},
            {value:20, name:'较大事故'},
            {value:30, name:'重大事故'},
            {value:40, name:'特大事故'}]
 var arr=[]
 $(datayuan).each(function(i,o){
 	arr.push(o.value)
 })
 var shu = eval(arr.join("+"));
 
 //字体大小设置方法
 setFontSize = function(size){
 	var windowWidth = document.body.clientWidth
 	return size*windowWidth/1920;
 }
function echart_five(){
	//右侧第二个圆环统计图开始
//基于准备好的dom，初始化echarts实例
        var myChart5 = echarts.init(document.getElementById('statistical_rightCenter'));
        // 指定图表的配置项和数据
        var option = {
        	color:['#3F98DA','#77E9F3','#15C3FF','#FFF605'],//图例颜色设置
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        orient : 'vertical',
			        x : 'right',
		        	y:'top',
			        data:['一般事故','较大事故','重大事故','特大事故'],
                	textStyle:{
			        		color:'#fff',
			        		fontSize:"90%"
		        	}
			    },
			    calculable : false,
			    series : [
			        {
			            name:'事故名称',
			            type:'pie',
			            radius : ['60%', '80%'],//radius : [50, 70]
		            	center: ['35%','50%'],//center: ['35%','30%'],
		            	hoverAnimation:true,
		            	avoidLabelOverlap: false,//如果不需要开启该策略，例如圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
		            	silent:false,//图形是否触发鼠标移上扇形变大响应事件
		            	label :{//echarts3.0所需样式
		            		normal : {
		            			show : true,
		                  position: 'center',
		                    formatter:function(val){
		                    	return shu+'\r\n 事故总数'//返回圆环中间值
		                    },
		                    textStyle : {
		                        fontSize :"140%",
		                        color:'#fff'
		                    }
		            		},
		            		emphasis : {
			                        show : false,
			                        position : 'center',
			                        formatter:function(val){
			                        	return shu+'\r\n 事故总数'//返回圆环中间值
			                        },
			                        textStyle : {
			                            //fontSize :"130%",
			                            fontSize :setFontSize(12),
			                            fontWeight : 'bold'
			                        }
			                }
		            	},
            	    labelLine : {//echarts3.0所需样式
	                       	normal : {
            								show : false
            						}
	                   },
//			            itemStyle : {//echarts2.0所需样式 
//			                normal : {
//			                    label : {
//			                        show : false,
//			                       position : 'center',
//			                        formatter:function(val){
//			                        	return shu+'\n 事故总数'//返回圆环中间值
//			                        },
//			                        textStyle : {
//			                            fontSize :"130%",
//			                            fontWeight : 'bold'
//			                        }
//			                    },
//			                    labelLine : {
//			                        show : false//去除圆环外支出的线
//			                    }
//			                },
//			                emphasis : {
//			                    label : {
//			                        show : true,
//			                        position : 'center',
//			                        formatter:function(val){
//			                        	return shu+'\n 事故总数'//返回圆环中间值
//			                        },
//			                        textStyle : {
//			                            fontSize :"130%",
//			                            fontWeight : 'bold'
//			                        }
//			                    }
//			                }
//			            },
			            data:datayuan
			        }
			    ]
			};
        // 使用刚指定的配置项和数据显示图表。
        myChart5.setOption(option);
        window.addEventListener("resize",function(){
		    myChart5.resize();
		});
}
function echart_six(date){
	var data = { "bieshu":[120, 132, 101, 134, 90, 230, 210],
				"gongyu":[220, 182, 191, 234, 290, 330, 310],
				"zhuzhai":[150, 232, 201, 154, 190, 330, 410],
				"legend":[
				{name:'平均值',
				icon:'pin'//修改图例样式
				},
				{name:'2017年',
				icon:'pin'
				},
				{name:'2018年',
				icon:'pin'
				}
				],
				"date":['1','2','3','4','5','6','7']
		}
	//中间第二个统计图开始
	var myChart6 = echarts.init(document.getElementById('mainCenterBottom'));
	var	option = {
				color:['#FF6968','#50DAF4','#EEDA2D'],//图例颜色设置
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		    	textStyle:{
		        	color:'#fff',
		        	fontSize:"90%"
		       },
		        data:data.legend
		    },
		    grid: {show:'true',borderWidth:'0',height:"60%",width:"80%",y:25,x:"12%"},
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
                            formatter: '{value}',
                            textStyle: {
                                color: '#fff',
                                fontSize:"90%"
                            }
                        }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
	                axisLine: {show:false},
	                axisTick: {show:false},
	                axisLabel : {
	                            formatter: '{value}',
	                            textStyle: {
	                                color: '#fff',
	                                fontSize:"90%"
	                            }
	                        }
		        }
		    ],
		    series : [
		        {
		            name:'平均值',
		            type:'line',
		            data:data.bieshu
		        },
		        {
		            name:'2017年',
		            type:'line',
		             itemStyle : { 
		            	normal:{
		            		lineStyle:{
		            		//color:'#50DAF4'//给线条设置颜色
		            		}
		            	}
	            	},
		            data:data.gongyu
            	
		        },
		        {
		            name:'2018年',
		            type:'line',
		             itemStyle : { 
		            	normal:{
		            		lineStyle:{
		            		//color:'#EEDA2D'//给线条设置颜色
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
		 myChart6.setOption(option);
		 window.addEventListener("resize",function(){
		    myChart6.resize();
		});
	}
function echart_seven(date){
	var data = { "bieshu":[120, 132, 101, 134, 90, 230, 210],
				"gongyu":[220, 182, 191, 234, 290, 330, 310],
				"zhuzhai":[150, 232, 201, 154, 190, 330, 410],
				"legend":[
				{name:'平均值',
				icon:'pin'//修改图例样式
				},
				{name:'2017年',
				icon:'pin'
				},
				{name:'2018年',
				icon:'pin'
				}
				],
				"date":['1','2','3','4','5','6','7']
		}
	//中间第二个统计图开始
	var myChart7 = echarts.init(document.getElementById('mainCenterBottom1'));
	var	option = {
				color:['#FF6968','#50DAF4','#EEDA2D'],//图例颜色设置
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		    	textStyle:{
		        	color:'#fff',
		        	fontSize:"90%"
		       },
		        data:data.legend
		    },
		    grid: {show:'true',borderWidth:'0',height:"60%",width:"80%",y:25,x:"12%"},
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
	                            formatter: '{value}',
	                            textStyle: {
	                                color: '#fff',
	                                fontSize:"90%"
	                            }
	                        }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
	                axisLine: {show:false},
	                axisTick: {show:false},
	                axisLabel : {
	                            formatter: '{value}',
	                            textStyle: {
	                                color: '#fff',
	                                fontSize:"90%"
	                            }
	                        }
		        }
		    ],
		    series : [
		        {
		            name:'平均值',
		            type:'line',
			          data:data.bieshu
			       },
		        {
		            name:'2017年',
		            type:'line',
		            itemStyle : { 
		            	normal:{
		            		lineStyle:{
		            		//color:'#50DAF4'//给线条设置颜色
		            		}
		            	}
	            	},
		            data:data.gongyu
            	
		        },
		        {
		            name:'2018年',
		            type:'line',
		            itemStyle : { 
		            	normal:{
		            		lineStyle:{
		            		//color:'#EEDA2D'//给线条设置颜色
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
		 myChart7.setOption(option);
		 window.addEventListener("resize",function(){
		    myChart7.resize();
		});
	}

//关键人员考勤
function  loadoOption4(){
    //myChart4.clear();
    var myChart8 = echarts.init(document.getElementById('ec4'));
    option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid:{y:"5%",y2:'5%',x:'28%',x2:'1%',borderWidth:'0'},
    calculable : true,
    xAxis : [
        {	splitLine:{show:false},//去掉x轴网格 线
        		show:false,
            type : 'value',
            axisLine: {show:false},
            axisTick: {show:false},
            axisLabel : {
                            formatter: '{value}',
                            textStyle: {
                                color: '#fff',
                                fontSize:"90%"
                            }
                        }
        }
    ],
    yAxis : [
        {
        	splitLine:{show:false},//去掉y轴网格线
            type : 'category',
            data : ['甲方代表','安全员','质量员','项目总监','技术负责人','项目经理'],
            axisLine: {show:false},
            axisTick: {show:false},
            axisLabel : {
                            formatter: '{value}',
                            textStyle: {
                                color: '#fff',
                                fontSize:13
                            }
                        }
        }
    ],
    series : [
        {
            name:'到场人数',
            type:'bar',
            stack: '总量',
            itemStyle : { 
            	normal:{
            		color:'#50DAF4',//给柱状图设置颜色
            		label :{
            			show: true,
		            		position: 'insideRight'
		            		}
	            	}
            	},
            data:[320, 302, 301, 334, 390, 330]
        },
        {
            name:'考勤率',
            type:'bar',
            stack: '总量',
            itemStyle : { normal:{color:'#3966B9',label : {show: true, position: 'insideRight'}}},
            data:[120, 132, 101, 134, 90, 230]
        }
    ]
};
    myChart8.setOption(option);
    window.addEventListener("resize",function(){
		    myChart8.resize();
		});
}