 //给根元素设置字体大小
 console.log("DPR:"+window.devicePixelRatio)
 function  docRem(doc, win) {
          var docEl = doc.documentElement,
              resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
              recalc = function () {
                  var clientWidth = docEl.clientWidth;
                 if (!clientWidth) return;
                  if(clientWidth>3500 && clientWidth<6000){
                     docEl.style.fontSize = '240px';
                 } else if(clientWidth>=6000){
                     docEl.style.fontSize = '500px';
                 }else if(clientWidth<3500 && 1023<clientWidth){
                   docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
                }
                 else{
                	docEl.style.fontSize = 250 * (clientWidth / 1920) + 'px';
                }
            };

	        if (!doc.addEventListener) return;
	         win.addEventListener(resizeEvt, recalc, false);
	        doc.addEventListener('DOMContentLoaded', recalc, false);
	    	};
//定义一个地图假数据
docRem(document, window);//自适应字体设置
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
	echart_one();
//	if(document.body.clientWidth>1024)//通过判断屏幕高度来显示什么类型的地图
	echart_two();	
  echart_three();
  echart_four();
	echart_five();
	echart_six();
	echart_seven();
	loadoOption4();
	$('.leftBottomBoder ul li').on('click',function(){
		$(this).siblings().removeClass('li_active');
		$(this).addClass('li_active');
	})
	Evaluation();
})
//定义诚信评价内容
var Evaluation = function(){
	var i = 0;
	var noticul = $('.notice ul');
	var str = '';
	for(;i<10;i++){
		str +='<li style="color: #fff;font-size: 0.14rem;border-bottom: 0.01rem solid rgba(67,104,199,.2)">'
			+'<span class="pull-left">新希望集团有限公司</span>'
			+'<span class="pull-right paimin" style="margin-right: 0.3rem;">1</span><span class="pull-right" style="margin-right: 0.8rem;">96.5</span>'
			+'</li><div class="clearfix"></div>' 
	}
	noticul.html(str);
	setInterval("noticeUp('.notice ul','-0.3rem',500)", 2000);
}

function echart_one(){
		//定义第一个饼状图
		var myChart = echarts.init(document.getElementById('wrong-message'));
		var	option = {
				color:['#04BFB0','#77E9F3','#FC7F3D','#FFF605'],//图例颜色设置
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)",
		        textStyle:{
			               	fontSize :setFontSize(20)
			               } 
		    },
		    legend: {//图例样式设置
		        orient : 'vertical',
		        itemWidth:setFontSize(24),
		        itemHeight:setFontSize(14),
		        textStyle:{
		        	color:'#fff',
		        	fontSize :setFontSize(18)
		        },
		        x : 'right',
		        y:'center',
		        data:['特级','一级','二级','三级']
		    },
		    calculable : false,
		    series : [
		        {
		            name:'地区',
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
		                        textStyle : {
															fontSize :setFontSize(16)
													}
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
		                {value:335, name:'本地'},
		                {value:679, name:'外地'}
		            ]
		        },
		        {
		            name:'级别',
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
		                {value:310, name:'二级'},
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
//function echart_two(){
//	//定义第二个地图
////		var optionMap = {  
////              backgroundColor: '#FFFFFF',  
////              title: {  
//////                  text: '全国地图大数据',  
//////                  subtext: '',  
//////                  x:'center'  
////              },
////              tooltip : {  
////                  trigger: 'item'  
////              },  
////              
////              //左侧小导航图标
////              visualMap: {  
////                  show : true,  
////                  x: 'left',  
////                  y: 'center',  
////                  splitList: [   
////                      {start: 500, end:600},{start: 400, end: 500},  
////                      {start: 300, end: 400},{start: 200, end: 300},  
////                      {start: 100, end: 200},{start: 0, end: 100},  
////                  ],  
////                  color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']  
////              },  
////                dataRange: {//值域选择，每个图表最多仅有一个值域控件
////                		show:false,
////				        orient: 'horizontal',
////				        min: 0,
////				        max: 55000,          // 文本，默认为数值文本
////				        splitNumber:0
////				    },
////              //配置属性
////              series: [  {
////		            name: '2011全国GDP分布',
////		            type: 'map',
////		            mapType: 'china',
////		            //roam: true,//是否缩放
////		            mapLocation: {
////		                x: 'center'//整个地图位置
////		            },
////		            selectedMode : 'multiple',
////		            itemStyle:{
////		                normal:{label:{show:true}},
////		                emphasis:{label:{show:true}}
////		            },
////		            data:mapdata,
////		            markPoint: {//动态标记
////		                    large: false,//这个选项，悬浮自动失效
////		                    symbolSize: 10,
////		                    symbol:'pin',
////		                  	itemStyle: {
////		                      normal: {
////		                          shadowBlur: 2,
////		                          shadowColor: 'rgba(37, 140, 249, 0.8)',
////		                          color: 'red'
////		                      }
////		                  },
////		                    data: [{name:'宁夏', value:20},
////		                    {name:'陕西', value:56}
////		                    ]
////		                },
////	                geoCoord: {//必须要加坐标才能显示标记点
////                            	"宁夏":[106.07761,38.699346],
////                            	"陕西":[108.938542,34.367395]
////                         }
////		        }]  
////          };
////       //初始化echarts实例
////      var myChart1 = echarts.init(document.getElementById('map'));
////		
////      //使用制定的配置项和数据显示图表
////      myChart1.setOption(optionMap);
////      window.addEventListener("resize",function(){
////		    myChart1.resize();
////		});    
//////四川地图
//
//
////绘制成都市地图
//
////	console.log(datajson)
////echarts.registerMap('成都', datajson);
//
//var optionMap = {
//               title: {
//                   text: '',
//                   //subtext: '-。-'  //子标题
//              },
//              tooltip: {
//                  trigger: 'item',
//                   formatter: function(a){//鼠标移到某个州市上弹出的提示内容。包括显示样式可以自定义，利用return返回样式即可。
//                   return a[1]+":"+a[2];//a[1]:州市名称，a[2]:data中的valuez值。
//           		}
//               },
//               //              //左侧小导航图标
//              visualMap: {  
//                  show : true,  
//                  x: 'left',  
//                  y: 'center',  
//                  splitList: [   
//                      {start: 500, end:600},{start: 400, end: 500},  
//                      {start: 300, end: 400},{start: 200, end: 300},  
//                      {start: 100, end: 200},{start: 0, end: 100},  
//                  ],  
//                  color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']  
//              },  
// dataRange: {//值域选择，每个图表最多仅有一个值域控件
//                		show:false,
//				        orient: 'horizontal',
//				        min: 0,
//				        max: 55000,          // 文本，默认为数值文本
//				        splitNumber:0
//				    },
//               series: [
//                   {
//                       //name: '数据名称',
//                      type: 'map',
//                       mapType: '四川',//如果是其他省份，也可以改变，例如：上海，北京，天津等地。
//                       selectedMode: 'single',
//                       roam: true,//是否缩放
//                       itemStyle: {
//                           normal: {
//                              label: { show: true },
//                               borderWidth: 2,//省份的边框宽度
//                               childBorderWidth: 1,
//                               childBorderColor: '#6EA1F4'
//                               
//                           },
//                           emphasis: { label: { show: true } }
//                       },
//                       data: mapdata,
//                       markPoint: {//动态标记
//		                    large: false,//这个选项，悬浮自动失效
//		                    symbolSize: 10,
//		                    symbol:'pin',
//		                  	itemStyle: {
//		                      normal: {
//		                          shadowBlur: 2,
//		                          shadowColor: 'rgba(37, 140, 249, 0.8)',
//		                          color: 'red'
//		                      }
//		                  },
//		                    data: [{name:'南充', value:30},
//		                    {name:'成都', value:261},
//		                    {name:'眉山', value:81}
//		                    ]
//		                },
//	                geoCoord: {//必须要加坐标才能显示标记点
//                            	"南充":[106.116354,30.844775],
//                            	"成都":[104.078081,30.656817],
//                            	"眉山":[103.854842,30.083527]
//                         }
//                   }
//               ]
//           };
//           //初始化echarts实例
//      var myChart1 = echarts.init(document.getElementById('map'));
//		
//      //使用制定的配置项和数据显示图表
//      myChart1.setOption(optionMap);
//      window.addEventListener("resize",function(){
//		    myChart1.resize();
//		});
//
//   
//}

//使用echarts3做成都市地图

function echart_two(){
	//定义第二个地图
	//初始化echarts实例
        var myChart1 = echarts.init(document.getElementById('map'));
//绘制成都市地图
	echarts.registerMap('成都', chengduJson());
	var option= {
                tooltip: {
                    trigger: 'item',
                    textStyle:{
			               	fontSize :setFontSize(22)
			               } 
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
            	scaleLimit:{min:1,max:5},//控制放大缩小的区域
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
                                	show: false,
                                	textStyle:{
							               	color:'#fff',//对地图上面地点设置文字颜色
							               	fontSize :setFontSize(16)
							               } 
                                	},
                                //borderWidth: 0.9,//省份的边框宽度
                                borderWidth: setFontSize(1.2),
                                borderColor: '#fff',
                             },
                             emphasis: { label: { show: true },areaColor: '#F7EA50', }//鼠标选中状态
                         },
                         data: [
		                    	{ name: '成都市', value: 50 },
								{ name: '锦江区', value: 210 },
								{ name: '金牛区', value: 160 },
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
								{ name: '青羊区', value: 208 },
								{ name: '新津县', value: 888 },
								{ name: '都江堰市', value: 361 },
								{ name: '彭州市', value: 753},
								{ name: '邛崃市', value: 300 },
								{ name: '崇州市', value: 153},
								{ name: '简阳市', value: 50}
		                    ],
		                    markPoint:{//动态标记
				                    large: false,//这个选项，悬浮自动失效
				                    symbolSize: 10,
//				                    symbol:'triangle',//标记点类型
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
							                    	},
							                    	textStyle:{
										               	fontSize :setFontSize(16)
										               } 
							                    }
				                      		}
				                  		}
		                		}
                     }
                 ]
             };
             
		
        
//      myChart1.on('click', function (maparams) {//地图点击事件
//		 	  console.info(maparams.data.name)
//		 });
 	myChart1.setOption(option);
		var myZoom //定义一个全局myrZoom用来保存zoom值
		 myChart1.on('georoam', function (params) {//地图缩放事件监听
	        console.log(params)
	        if(params.dy || params.dx) return //判断是否是拖曳事件如果是拖曳的时候就return
	        var _option = myChart1.getOption();
	      	var _zoom =  _option.series[0].zoom;
	      	if(myZoom == _zoom) return
	      	myZoom = _zoom;
	      	if(myZoom>2){
	    		_option.series[0].markPoint.data = [//标记点的数据
					                    {name:'大邑县',
					                     coord: [103.492457,30.618518],
					                     value:220
				                    	},
				                    	{name:'金牛区',
					                     coord: [104.059702,30.699342],
					                     value:160
				                    	}
				                    ]
	    	}else{
	    		_option.series[0].markPoint.data = '';
	    	}
	    	myChart1.clear();
			myChart1.setOption(_option);
        });
        //使用制定的配置项和数据显示图表
     
        window.addEventListener("resize",function(){
		    myChart1.resize();
		});
}
//滚轮监听事件
function onMouseScroll(e){
    e.preventDefault();
    var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
    var delta = Math.max(-1, Math.min(1, wheel) );
    if(delta<0){//向下滚动
        console.log('向下滚动');
    }else{//向上滚动
        console.log('向上滚动');
    }    
}
function echart_three(date){
	//定义第3个统计图
		var myChart3 = echarts.init(document.getElementById('statistical_right'));
	    var	option = {
	    	color:['#F7EB47','#77E9F3'],
		    tooltip : {//辅助线设置
		        trigger: 'axis',
		        show:true,
		        textStyle:{
			               	fontSize :setFontSize(20),
			               	align:'left'
			               },
			    formatter: function(params) {
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
		       	icon:'pin',
		        data:[{name:'预警数据',icon:'triangle'},
		        {name:'未处理数据',icon:'pin'}]
		    },
		    grid: { show:'true',borderWidth:'0',height:"60%",width:"60%",y:'10%',x:"20%"},
		    calculable : true,
		    xAxis : [
		        {
		        	splitLine:{//竖线条样式设置
                    	show:true,
                    	lineStyle:{
				            		width:setFontSize(1.5),
				            		color:'#fff'
				            		}
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
                            fontSize :setFontSize(16)
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
		    series : [
		        {
		            name:'预警数据',
		            type:'line',
		            data:[120, 132, 101, 134, 90, 230, 450],
		            symbolSize: setFontSize(20),//拐点大小
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
		            symbolSize: setFontSize(20),//拐点大小
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
	        	splitLine:{
	                    show:false
                },
//          title: {
//              text: '',
//              left:'20px',
//              textStyle: {    
//	                color: "#fff",
//	                fontSize: 17   
//              }
//          },
            grid: {show:'true',borderWidth:'0',y:'5%',y2:'5%',width:"80%",height:"60%",x:"10%"},
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
                                fontSize :setFontSize(16)
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
                 splitLine:{//设置线条大小
                    show:true,
                     	lineStyle:{
				            		width:setFontSize(1.5),
				            		color:'#fff'
				            		}
                
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
                                fontSize :setFontSize(16)
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
	                                color: '#fff',
	                                fontSize :setFontSize(16)
	                            }
	                       }
		       }
            ],
            series: [{
                name: '合格',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20, 30, 40,45],
                symbolSize: setFontSize(10),
                itemStyle:{
                     normal:{color:"#70F9FF"},
                }
            },{
                name: '不合格',
                type: 'line',
                data: [20, 30, 50, 15, 42, 40, 30, 45,50],
                yAxisIndex: 1,
                symbolSize: setFontSize(10),
                itemStyle:{
                     normal:{color:"#F7EA50",lineStyle:{
		            		//color:'#50DAF4'//给线条设置颜色
		            		width:setFontSize(2)
		            		}}
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

function echart_five(){
	//右侧第二个圆环统计图开始
//基于准备好的dom，初始化echarts实例
        var myChart5 = echarts.init(document.getElementById('statistical_rightCenter'));
        // 指定图表的配置项和数据
        var option = {
        	color:['#3F98DA','#77E9F3','#15C3FF','#FFF605'],//图例颜色设置
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)",
		        	textStyle:{//鼠标移上去显示字体大小设置
			               	fontSize :setFontSize(20)
			               } 
			    },
			    legend: {
			    	itemWidth:setFontSize(24),
	        		itemHeight:setFontSize(14),
			        orient : 'vertical',
			        x : 'right',
		        	y:'top',
			        data:['一般事故','较大事故','重大事故','特大事故'],
                	textStyle:{
			        		color:'#fff',
			        		fontSize:setFontSize(18)
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
		                        fontSize :setFontSize(22),
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
			                            fontSize :setFontSize(14),
			                            //fontWeight : 'bold'
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
		    grid: {show:'true',borderWidth:'0',height:"60%",width:"80%",y:'20%',x:"12%"},
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
		            name:'平均值',
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
		            name:'2017年',
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
		            data:data.gongyu
            	
		        },
		        {
		            name:'2018年',
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
		    grid: {show:'true',borderWidth:'0',height:"60%",width:"80%",y:"20%",x:"12%"},
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
		            name:'平均值',
		            type:'line',
			          data:data.bieshu,
			          symbolSize: setFontSize(10),
			          itemStyle : { 
		            	normal:{
		            		lineStyle:{
		            		//color:'#50DAF4'//给线条设置颜色
		            		width:setFontSize(2)
		            		}
		            	}
	            	},
			       },
		        {
		            name:'2017年',
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
		            data:data.gongyu
            	
		        },
		        {
		            name:'2018年',
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
		 myChart7.setOption(option);
		 window.addEventListener("resize",function(){
		    myChart7.resize();
		});
	}

//关键人员考勤
function  loadoOption4(){
	var data1=[1,20,15,1,1,1]//总人数
	var data2 = [1,1,1,1,1,1];//一样的长度需要的数据
	var data_shi=[1,5,10,0,1,1]//实到人数
	var data3=[]

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
	               	align:'left'//文字左对齐
	               },
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
            type : 'category',
            data : ['甲方代表','安全员','质量员','项目总监','技术负责人','项目经理'],
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
//      {
//          name:'到场人数',
//          type:'bar',
//          stack: '总量',
//          itemStyle : { 
//          	normal:{
//          		color:'#50DAF4',//给柱状图设置颜色
//          		label :{
//          			show: false,
//		            		position: 'insideRight',
//		            		textStyle: {
//                              color: '#fff',
//                              fontSize :setFontSize(16)
//                          }
//		            		}
//	            	}
//          	},
//          z:-10,
//          data:data3
//      },
//      {
//          name:'总人数',
//          type:'bar',
//          stack: '总量',
//          itemStyle : { normal:{color:'#3966B9',label : {show: true, position: 'right',textStyle: {color: '#fff',fontSize :setFontSize(16),
//          formatter: function(params){//返回总人数
//              return data1[params.dataIndex]
//      			}
//          }}}},
//          z:-12,
//          data:data2
//      }
//  ]
};
    myChart8.setOption(option);
    window.addEventListener("resize",function(){
		    myChart8.resize();
		});
}