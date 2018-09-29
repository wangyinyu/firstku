
// var whdef = 100/916;// 表示1920的设计图,使用100PX的默认值
//  var wH = window.innerHeight;// 当前窗口的高度
//  var wW = window.innerWidth;// 当前窗口的宽度
//  var rem = wH * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
//  $('html').css('font-size', rem + "px");
doc_rem(document, window);//自适应字体设置
     var tabData={"Items":[
			{
				"time":"2018-08-05",
				"name":"计划于2018年6月7日前完成项目审结1",
				"yezhu":"成都鹏业软件1",
				"chen":"张三",
				"jine":"60万元",
				"shenjian":"20万元",
				"zhaobiao":"招标控制价",
				"jihua":"计划于2018年6月7日前完成项目审结"
			},
			{
				"time":"2018-08-05",
				"name":"计划于2018年6月7日前完成项目审结1",
				"yezhu":"成都鹏业软件1",
				"chen":"李四",
				"jine":"60万元",
				"shenjian":"20万元",
				"zhaobiao":"招标控制价",
				"jihua":"计划于2018年6月7日前完成项目审结"
			},
			{
				"time":"2018-08-05",
				"name":"计划于2018年6月7日前完成项目审结1",
				"yezhu":"成都鹏业软件1",
				"chen":"王二",
				"jine":"60万元",
				"shenjian":"20万元",
				"zhaobiao":"招标控制价",
				"jihua":"计划于2018年6月7日前完成项目审结"
			}
			]}
$(function(){
	
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
    
})