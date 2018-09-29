
doc_rem(document, window);//自适应字体设置
$(function(){
	semicircle();
	loadoOption4();
	echart_six();
	echart();
//点击li添加状态
	$('.leftBottomBoder ul li').on('click',function(){
		$(this).siblings().removeClass('li_active');
		$(this).addClass('li_active');
	})
	//给表格缺勤添加红色
   var td = $('.leftBottomBoder td');
   $(td).each(function(i,o){
     if($(this).text()=='缺勤') 
     $(this).css('color','#FD8E8D')
   })
    //点击塔吊进入塔机界面
    $('.tadiao').click(function(){
    	window.location.href='TowerCrane.html'
    })
    //点击进入考勤界面
    $('.kao').click(function(){
    	window.location.href='ProjectAttendance.html?id=1'
    })
    //点击进入扬尘监控界面
    $('.yang_see').click(function(){
    	window.location.href='DustMonitoring.html'
    })
})
function  loadoOption4(){
	var data1=[200, 15, 1, 1]//总人数
	var data2 = [1,1,1,1];//一样的长度需要的数据
	var data_shi=[50,5,1,0]//实到人数
	var data3=[]
//	$(data1).each(function(i,o){
//			data3.push(eval((data_shi[i]/o)*100).toFixed()+'%')
//	})
	$(data1).each(function(i,o){//到场人数个数
			data3.push(eval(data_shi[i]/o))
	})
    //myChart4.clear();
    var myChart8 = echarts.init(document.getElementById('ec4'));
    option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        textStyle:{
           	fontSize :setFontSize(20),
           	align:'left'
           },
//      formatter:function(p){//到场人数个数
//      	console.log(p)
//    		return ''+p[0].seriesName+'：'+p[0].value+''
//      },
    	formatter:function(p){//到场人数百分比
    		var renshu = '到场人数：'+data_shi[p[0].dataIndex]
    		var baifen ='考勤率：'+eval((data3[p[0].dataIndex])*100).toFixed()+'%'
        	return p[0].name+'<br />'+renshu+'<br />'+baifen
            }
    },
    grid:{y:"5%",y2:'5%',x:'28%',x2:'15%',borderWidth:'0'},
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
                    fontSize :setFontSize(16)
                }
            }
        }
    ],
    yAxis : [
        {	
        	splitLine:{show:false},//去掉y轴网格线
//          type : 'category',
            data : ['劳务人员','其他人员','总监','项目经理'],
            axisLine: {show:false},
            axisTick: {show:false},
            axisLabel : {
                            formatter: '{value}',
                            textStyle: {
                                color: '#fff',
                                fontSize :setFontSize(18)
                            }
                        }
        }
    ],
    series: [{
    	name:'到场人数',
        type: 'bar',
        barGap: '-100%',
        itemStyle: {
        	normal: {
               color:'#3966B9'
            }
        },
        z: -10,
        data: data3//返回实到人数
    }, {
    	name:'总人数',
        type: 'bar',
        barGap: '-100%',
        itemStyle: {
             normal: {
                show: true,
                position: 'right',
               color:'#50DAF4',
            }
        },
        label: {
            normal: {
            show: true,
            position: 'right',
            fontSize: setFontSize(16),
            formatter: function(params){//返回总人数
                return data1[params.dataIndex]+'/'+data_shi[params.dataIndex]
        			}
	            }
			},
        z: -12,
        data: data2
    }]
//  series : [
//  	{
//          name:'到场人数',
//          barGap: '-100%',
//          type:'bar',
//          stack: '总量',
//          itemStyle : { normal:{color:'#3966B9',label : {show: false, position: 'right',textStyle: {color: '#fff',fontSize :setFontSize(16)}}}},
//          z:-10,//设置z值使两个柱状图叠加不知道为什么不起作用
//          data:data1
//     },
//      {
//          name:'总量',
//          barGap: '-100%',
//          type:'bar',
//          stack: '总量',
//          itemStyle : { 
//          	normal:{
//          		color:'#50DAF4',//给柱状图设置颜色
//          		label :{
//      				show: true,
//	            		position: 'right',
//	            		textStyle: {
//                          color: '#fff',
//                          fontSize :setFontSize(16)
//                      },
//                       formatter: function(params){
//		                    return data1[params.dataIndex]===0?'-':data1[params.dataIndex]
//		                	}
//	            		}
//	            	}
//          	},
//          z:-12,
//          data:data2
//      }
//      
//  ]
};
    myChart8.setOption(option);
    window.addEventListener("resize",function(){
		    myChart8.resize();
		});
}
//塔吊统计图
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
	//中间第二个统计图开始
	var myChart6 = echarts.init(document.getElementById('mainCenterBottom'));
	var	option = {
				color:['#FF6968','#50DAF4','#EEDA2D'],//图例颜色设置
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
                            formatter: '{value}',
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
//材料检测概况
function echart(date){
	var data = { "bieshu":[120, 132, 101, 134, 90, 230, 210],
				"gongyu":[220, 182, 191, 234, 290, 330, 310],
				"zhuzhai":[150, 180, 201, 230, 280, 330, 410],
				"legend":[
				{name:'每日不合格',
				icon:'pin'//修改图例样式
				},
				{name:'累计不合格',
				icon:'pin'
				}
				],
				"date":['08-5','08-6','08-7','08-8','08-9','08-10','08-11']
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
                            formatter: '{value}',
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
		            name:'每日不合格',
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
		            name:'累计不合格',
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
//半圆统计图
function semicircle(){
	g1 = new JustGage({
        id: "ec_ban",
        value: 148,//赋值的地方
        min: 0,
        max: 500,
        title: "PM10(μg/m3)",
        label: "",
        valueFontColor: "#fff",
        customSectors: [{
            color: "#017E5E",
            lo: 0,
            hi: 50
        }, {
            color: "#F0BD00",
            lo: 50,
            hi: 150
        },
        {
            color: "#DE1E1B",
            lo: 150,
            hi: 500
        }],

    });
}
