 $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
 //给根元素设置字体大小
 function  doc_rem(doc, win) {
          var docEl = doc.documentElement,
              resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
              recalc = function () {
                  var clientWidth = docEl.clientWidth;
                 if (!clientWidth) return;
                  if(clientWidth>3500 && clientWidth<6000){
                     docEl.style.fontSize = '240px';
                 } else if(clientWidth>=6000){
                     docEl.style.fontSize = '500px';
                 }else if(clientWidth<3500 && clientWidth>1024){
                   docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
                }else if(clientWidth<1024 && clientWidth>760){
                   docEl.style.fontSize = 250 * (clientWidth / 1920) + 'px';
                }else{
                	docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
                }
            };

	        if (!doc.addEventListener) return;
	         win.addEventListener(resizeEvt, recalc, false);
	        doc.addEventListener('DOMContentLoaded', recalc, false);
	    	};
  //echarts字体大小设置方法
 setFontSize = function(size){
 	var windowWidth = document.body.clientWidth
 if(windowWidth>1024 && windowWidth<4000){
 		return size*windowWidth/1920;
 	}else if(windowWidth<=800){
 		return size*windowWidth/600;
 	}else if(windowWidth<1024){
 		return size*windowWidth/800;
 	}else if(windowWidth==1024){
 		return size*windowWidth/1366;
 	}else if(windowWidth>=4000){
 		return size*windowWidth/1600;
 	}
 }
 //定义数据列表动画效果
 function noticeUp(obj,top,time) {
         $(obj).animate({
             marginTop: top
         }, time, function () {
             $(this).css({marginTop:"0"}).find(":first").appendTo(this);
         })
     }