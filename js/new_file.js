//定义一个地图假数据
var mapdata=[
            {name:'西藏', value:605.83},
            {name:'青海', value:1670.44},
            {name:'宁夏', value:2102.21},
            {name:'海南', value:2522.66},
            {name:'甘肃', value:5020.37},
            {name:'贵州', value:5701.84},
            {name:'新疆', value:6610.05},
            {name:'云南', value:8893.12},
            {name:'重庆', value:10011.37},
            {name:'吉林', value:10568.83},
            {name:'山西', value:11237.55},
            {name:'天津', value:11307.28},
            {name:'江西', value:11702.82},
            {name:'广西', value:11720.87},
            {name:'陕西', value:12512.3},
            {name:'黑龙江', value:12582},
            {name:'内蒙古', value:14359.88},
            {name:'安徽', value:15300.65},
            {name:'北京', value:16251.93, selected:true},
            {name:'福建', value:17560.18},
            {name:'上海', value:19195.69, selected:true},
            {name:'湖北', value:19632.26},
            {name:'湖南', value:19669.56},
            {name:'四川', value:21026.68},
            {name:'辽宁', value:22226.7},
            {name:'河北', value:24515.76},
            {name:'河南', value:26931.03},
            {name:'浙江', value:32318.85},
            {name:'山东', value:45361.85},
            {name:'江苏', value:49110.27},
            {name:'广东', value:53210.28, selected:true}
        ]
var databox=[{"id": 1,"name":"市管","selected":true}, 
				{"id": 2,
                    "name":"市管"
                }, {
                    "id": 3,
                    "name":"市管"

                }, {
                    "id": 4,
                    "name":"市管"
                }, {
                    "id": 5,
                    "name":"市管"
                }]
var databox1=[{"id": 1,"name":"2018年","selected":true}, 
				{"id": 2,
                    "name":"2019年"
                }, {
                    "id": 3,
                    "name":"2020年"

                }, {
                    "id": 4,
                    "name":"2021年"
                }, {
                    "id": 5,
                    "name":"2022年"
                }]
var databox2=[{"id": 1,"name":"01月","selected":true}, 
				{"id": 2,
                    "name":"02月"
                }, {
                    "id": 3,
                    "name":"03月"

                }, {
                    "id": 4,
                    "name":"04月"
                }, {
                    "id": 5,
                    "name":"05月"
                }]
// var whdef = 100/916;// 表示1920的设计图,使用100PX的默认值
//  var wH = window.innerHeight;// 当前窗口的高度
//  var wW = window.innerWidth;// 当前窗口的宽度
//  var rem = wH * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
//  $('html').css('font-size', rem + "px");
     
$(function(){
	echart_one();
	echart_two();	
    echart_three();
  	echart_four();
	echart_five();
	echart_six();
	$('.leftBottomBoder ul li').on('click',function(){
		$(this).siblings().removeClass('li_active');
		$(this).addClass('li_active');
	})
	$('#inputOne').combobox({
		data:databox,
		valueField:'id',    
    	textField:'name',
    	panelHeight:0,
    	panelWidth:0,
    	width:70,
    	editable:false
	});
	$('#inputTwo').combobox({
		data:databox1,
		valueField:'id',    
    	textField:'name',
    	panelHeight:0,
    	panelWidth:0,
    	width:70,
    	editable:false
	});
	$('#inputThree').combobox({
		data:databox2,
		valueField:'id',    
    	textField:'name',
    	panelHeight:0,
    	panelWidth:0,
    	width:70,
    	editable:false
	})
	$('#inputFour').combobox({
		data:databox1,
		valueField:'id',    
    	textField:'name',
    	panelHeight:0,
    	panelWidth:0,
    	width:70,
    	editable:false,
    	onSelect:function(){
    		var date = $('#inputFour').combobox('getValue');
    		
    		echart_three(date)
    	}
	})
	$('#inputFive').combobox({
		data:databox2,
		valueField:'id',    
    	textField:'name',
    	panelHeight:0,
    	panelWidth:0,
    	width:55,
    	editable:false
	})
	$('#inputSix').combobox({
		data:databox1,
		valueField:'id',    
    	textField:'name',
    	panelHeight:0,
    	panelWidth:0,
    	width:70,
    	editable:false
	})
	$('#inputSeven').combobox({
		data:databox2,
		valueField:'id',    
    	textField:'name',
    	panelHeight:0,
    	panelWidth:0,
    	width:55,
    	editable:false
	})
	$('#inputEight').combobox({
		data:databox1,
		valueField:'id',    
    	textField:'name',
    	panelHeight:0,
    	panelWidth:0,
    	width:70,
    	editable:false
	})
	$('#inputNine').combobox({
		data:databox2,
		valueField:'id',    
    	textField:'name',
    	panelHeight:0,
    	panelWidth:0,
    	width:55,
    	editable:false
	})
	$('#inputTen').combobox({
		data:databox1,
		valueField:'id',    
    	textField:'name',
    	panelHeight:0,
    	panelWidth:0,
    	width:70,
    	editable:false
	})
	$('#input11').combobox({
		data:databox2,
		valueField:'id',    
    	textField:'name',
    	panelHeight:0,
    	panelWidth:0,
    	width:55,
    	editable:false
	})
	$('#input12').combobox({
		data:databox1,
		valueField:'id',    
    	textField:'name',
    	panelHeight:0,
    	panelWidth:0,
    	width:70,
    	editable:false,
    	onSelect:function(){
    		var date = $('#input12').combobox('getValue');
    		echart_six(date)
    	}
	})
})

function echart_one(){
		//定义第一个饼状图
		var myChart = echarts.init(document.getElementById('wrong-message'));
		var	option = {
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient : 'vertical',
		        textStyle:{
		        	color:'#fff',
		        	fontSize:12
		        },
		        x : 'right',
		        y:'top',
		        data:['建筑材料及构配件','主体结构及装饰装修','钢结构','地基基础']
		    },
		    calculable : false,
		    series : [
		        {
		            name:'访问来源',
		            type:'pie',
		            selectedMode: 'single',
		            radius : ['0%', '45%'],//radius : [0, 40],大小设置
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
		                {value:335, name:'钢结构'},
		                {value:679, name:'地基基础'}
		            ]
		        },
		        {
		            name:'访问来源',
		            type:'pie',
		            radius : ['70%', '90%'],//radius : [70, 90],
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
		                {value:335, name:'建筑材料及构配件'},
		                {value:310, name:'主体结构及装饰装修'},
		                {value:234, name:'钢结构'}
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
function echart_two(){
	//定义第二个地图
		var optionMap = {  
                backgroundColor: '#FFFFFF',  
                title: {  
//                  text: '全国地图大数据',  
//                  subtext: '',  
//                  x:'center'  
                },
                tooltip : {  
                    trigger: 'item'  
                },  
                
                //左侧小导航图标
                visualMap: {  
                    show : true,  
                    x: 'left',  
                    y: 'center',  
                    splitList: [   
                        {start: 500, end:600},{start: 400, end: 500},  
                        {start: 300, end: 400},{start: 200, end: 300},  
                        {start: 100, end: 200},{start: 0, end: 100},  
                    ],  
                    color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']  
                },  
                  dataRange: {//值域选择，每个图表最多仅有一个值域控件
                  		show:false,
				        orient: 'horizontal',
				        min: 0,
				        max: 55000,          // 文本，默认为数值文本
				        splitNumber:0
				    },
                //配置属性
                series: [  {
		            name: '2011全国GDP分布',
		            type: 'map',
		            mapType: 'china',
		            //roam: true,//是否缩放
		            mapLocation: {
		                x: 'center'//整个地图位置
		            },
		            selectedMode : 'multiple',
		            itemStyle:{
		                normal:{label:{show:true}},
		                emphasis:{label:{show:true}}
		            },
		            data:mapdata,
		            markPoint: {//动态标记
		                    large: false,//这个选项，悬浮自动失效
		                    symbolSize: 10,
		                    symbol:'pin',
		                  	itemStyle: {
		                      normal: {
		                          shadowBlur: 2,
		                          shadowColor: 'rgba(37, 140, 249, 0.8)',
		                          color: 'red'
		                      }
		                  },
		                    data: [{name:'宁夏', value:20},
		                    {name:'陕西', value:56}
		                    ]
		                },
	                geoCoord: {//必须要加坐标才能显示标记点
                              	"宁夏":[106.07761,38.699346],
                              	"陕西":[108.938542,34.367395]
                           }
		        }]  
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
		    tooltip : {//辅助线设置
		        trigger: 'axis',
		        show:true
		    	},
		    legend: {
		    	textStyle:{
		        	color:'#fff'
		       		},
		        data:['整改','未整改','停工']
		    },
		    grid: {show:'true',borderWidth:'0',height:"60%",width:"60%",y:25,x:"20%"},
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
		            data : ['周一','周二','周三','周四','周五','周六','周日'],
		        	axisLabel : {
                            formatter: '{value}',
                            textStyle: {
                                color: '#fff'
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
	                                color: '#fff'
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
		            name:'整改',
		            type:'line',
		            data:[120, 132, 101, 134, 90, 230, 450],
		            symbolSize: 5,//拐点大小
		            itemStyle : {
	                    normal : {
	                        lineStyle:{
	                            width:0
	                        	}
	                    	}
                		}
		        },
		        {
		            name:'未整改',
		            type:'line',
		            symbolSize: 5,//拐点大小
		            data:[220, 182, 191, 234, 290, 330, 310],
		            itemStyle : {
	                    normal : {
	                        lineStyle:{
	                            width:0
	                        	}
	                    	}
                		}
		        },
		        {
		            name:'停工',
		            type:'line',
		            symbolSize: 5,//拐点大小
		            data:[150, 232, 201, 154, 190, 330, 410],
		            yAxisIndex: 1,
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
        	splitLine:{
                    show:false,
                },
            title: {
                text: '',
                left:'20px',
                textStyle: {    
	                color: "#fff",
	                fontSize: 17   
                }
            },
            grid: {show:'true',borderWidth:'0',y:10,y2:90,width:"70%",height:"50%",x:"10%"},
            legend: {
            	orient : 'vertical',
                itemWidth:15,  
                itemHeight:15,  
                data:['合格','不合格'],
                x : 'right',
		        y:'top',
                textStyle:{
		        	color:'#fff',
		        	fontSize: 11
		        }
            },
            xAxis: {
                data: ["市管","锦江区","成华区","金牛区","青阳区","武侯区","双流区","都江堰"],
                splitLine:{
                    show:false
                },
                axisTick: {show:false},
                axisLabel : {
                            formatter: '{value}',
                            textStyle: {
                                color: '#fff',
                                fontSize: 11
                            },
                            interval:0,
							formatter: function (value) {
										//x轴的文字改为竖版显示
										var str = value.split("");
										return str.join("\n")
									}
                        }
            },
            yAxis: {
                 splitLine:{
                    show:true
                },
                axisLine: {show:false},
                axisTick: {show:false},
                axisLabel : {
                            formatter: '{value}',
                            textStyle: {
                                color: '#fff'
                            }
                        }
            },
            series: [{
                name: '合格',
                type: 'bar',
                stack:'使用情况',
                data: [5, 20, 36, 10, 10, 20, 30, 40],
                itemStyle:{
                     normal:{color:"#FF8849"},
                }
            },{
                name: '不合格',
                type: 'bar',
                stack:'使用情况',
                data: [40, 22, 18, 35, 42, 40, 40, 30],
                itemStyle:{
                     normal:{color:"#3FBB49"},
                }
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart4.setOption(option);
        window.addEventListener("resize",function(){
		    myChart4.resize();
		});
}
function echart_five(){
	//右侧第二个圆环统计图开始
//基于准备好的dom，初始化echarts实例
        var myChart5 = echarts.init(document.getElementById('statistical_rightCenter'));
        // 指定图表的配置项和数据
        var option = {
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        orient : 'vertical',
			        x : 'right',
		        	y:'top',
			        data:['直接访问','邮件营销','联盟广告'],
                	textStyle:{
		        		color:'#fff'
		        	}
			    },
			    calculable : false,
			    series : [
			        {
			            name:'访问来源',
			            type:'pie',
			            radius : ['60%', '80%'],//radius : [50, 70]
		            	center: ['35%','50%'],//center: ['35%','30%'],
			            itemStyle : {
			                normal : {
			                    label : {
			                        show : false
			                    },
			                    labelLine : {
			                        show : false
			                    }
			                },
			                emphasis : {
			                    label : {
			                        show : true,
			                        position : 'center',
			                        textStyle : {
			                            fontSize : '20',
			                            fontWeight : 'bold'
			                        }
			                    }
			                }
			            },
			            data:[
			                {value:335, name:'直接访问'},
			                {value:310, name:'邮件营销'},
			                {value:234, name:'联盟广告'}
			            ]
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
				"legend":['营销','广告','视频'],
				"date":['周一','周二','周三','周四','周五','周六','周日']
		}
	//中间第二个统计图开始
	var myChart6 = echarts.init(document.getElementById('mainCenterBottom'));
	var	option = {
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		    	textStyle:{
		        	color:'#fff'
		       },
		        data:data.legend
		    },
		    grid: {show:'true',borderWidth:'0',height:"60%",width:"80%",y:25,x:"10%"},
		    calculable : true,
		    xAxis : [
		        {
		        	splitLine:{
                    	show:false
                	},
		            type : 'category',
		            boundaryGap : false,
		            data : data.date,
		        	axisLabel : {
                            formatter: '{value}',
                            textStyle: {
                                color: '#fff'
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
	                                color: '#fff'
	                            }
	                        }
		        }
		    ],
		    series : [
		        {
		            name:'营销',
		            type:'line',
		            data:data.bieshu
		        },
		        {
		            name:'广告',
		            type:'line',
		            data:data.gongyu
            	
		        },
		        {
		            name:'视频',
		            type:'line',
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

