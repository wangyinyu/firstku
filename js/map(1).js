var baseMap = {

    //返回容器的
    getMarkLayer: function(options) {

        var layer = new CustomOverLayer(options);
        this.map.addOverlay(layer);
        return layer;

    }, 
    extend: function(target, source) {
        for (name in source) {
            if (source[name]) {
                target[name] = source[name];
            }
        }
        return target;
    },
    getLocationSearch: function() {
        var params = {};
        var arr = window.location.search.substring(1).split("&");
        var i = 0;
        var key, value, strArr;
        for (; i < arr.length; i++) {
            strArr = arr[i].split("=");
            if (strArr.length != 2) {
                continue;
            }
            params[strArr[0]] = decodeURIComponent(strArr[1]);
        }
        
        var obj = {};
        this.extend(obj, this.defaults);
        this.extend(obj, params);
        this.params = obj;
        return obj;
    },

    removeElem: function(elem) {
        elem.style.display = "none";
        //elem.parentNode.removeChild(elem);
    },
    
    drawBoundry: function() {
        var deferred = $.Deferred();
        var bdary = new BMap.Boundary();
        var map = this.map;
        var polygons = [];
        var count = 0;
        // var cities = ['西安', '商洛', '安康','榆林','汉中','延安','渭南',
        //                   '咸阳','宝鸡','铜川'];
        //var cities = ['陕西','西安'];
        
        //console.log(JSON.stringify(cities));
        
        function getLayer(city, i) {
            setTimeout(function() {
                bdary.get(city.name, function(rs){
                    count++;
                    addLayer(rs, city);
                });
            })
        }
        console.log(cities[i]);
        for (var i = 0; i < cities.length; i++) {
            getLayer(cities[i], i);
        }



        function addLayer(rs, city) {
            var count = rs.boundaries.length; //行政区域的点有多少个
            for(var i = 0; i < count; i++){
                var ply = new BMap.Polygon(rs.boundaries[i], 
                          {strokeWeight: city.strokeWeight, //设置多边形边线线粗
                           strokeOpacity: city.strokeOpacity, //设置多边形边线透明度0-1
                           StrokeStyle: "solid", //设置多边形边线样式为实线或虚线，取值 solid 或 dashed
                           strokeColor: city.strokeColor, //设置多边形边线颜色
                           fillColor: city.fillColor, //设置多边形填充颜色
                           fillOpacity: city.fillOpacity, //设置多边形填充颜色透明度0-1  注：标红的地放你们可以去掉看一下效果，自己体验一下
                           enableClicking: false
                }); //建立多边形覆盖物
                map.addOverlay(ply);  //添加覆盖物
                polygons.push(ply);
                loaded();
                //addPolygonEvents();
                //map.setViewport(ply.getPath());    //调整视野
            }
            function loaded() {
                if (polygons.length == 11) {
                    console.log('boundry loaded');
                    setTimeout(function() {
                        deferred.resolveWith(self);
                    }, 1000);
                    
                }
            }
            
        };
        return deferred;
    },
    
    draw: function(i, points) {
        var ply = new BMap.Polyline(points, 
                {strokeWeight: 1, //设置多边形边线线粗
            strokeOpacity: 1, //设置多边形边线透明度0-1
            StrokeStyle: "solid", //设置多边形边线样式为实线或虚线，取值 solid 或 dashed
            strokeColor: "#ff0000", //设置多边形边线颜色
            fillColor: i == 0 ? "#ff0000" : '#000000', //设置多边形填充颜色
            fillOpacity:0.1, //设置多边形填充颜色透明度0-1  注：标红的地放你们可以去掉看一下效果，自己体验一下
            enableClicking: false
        });
        this.map.addOverlay(ply);  //添加覆盖物

    },
    drawPolygon: function(data) {
        var self = this;
        $.each(data.geometry.coordinates, function(j) {
            var points = [];
            $.each(this, function(i, item) {
                points.push(new BMap.Point(item[0], item[1]));
            });
            self.fillLine(points, !!j);
        });
    },
    drawMultiLine: function(data) {
        var self = this;
        var points = $.each(data.geometry.coordinates, function(i, item) {
            var points = [];
            $.each(this, function() {
                points.push(new BMap.Point(this[0], this[1]));
            });
            //console.log(points);
            self.drawLine(points);
        });

    },
    fillLine: function(points, isInner) {
        var ply = new BMap.Polygon(points, {
            strokeWeight: 2, //设置线粗
            strokeOpacity: 1, //设置线透明度0-1
            fillColor: isInner ? "#ffffff" : '#3B9CFF', //设置多边形填充颜色
            fillOpacity: 1,
            StrokeStyle: "solid", //设置为实线或虚线，取值 solid 或 dashed
            strokeColor: "#3B9CFF", //设置线颜色
            enableClicking: false
        });
        this.map.addOverlay(ply); 
    },
    drawLine: function(points) {
        var ply = new BMap.Polyline(points, {
            strokeWeight: 2, //设置线粗
            strokeOpacity: 1, //设置线透明度0-1
            StrokeStyle: "solid", //设置为实线或虚线，取值 solid 或 dashed
            strokeColor: "#3B9CFF", //设置线颜色
            enableClicking: false
        });
        this.map.addOverlay(ply); 
    },
    
    drawPolyline: function(data) {
        var points = $.map(data.geometry.coordinates, function(item) {
            //console.log(item);
            return new BMap.Point(item[0], item[1]);
        });
        this.drawLine(points);
    },
    
    drawRivers: function() {
        var deferred = $.Deferred();
        var self = this;
        $.get('geojson/all.json').done(function(rdata) {
            //MultiLineString //LineString
            
            $.each(rdata.features, function() {
                if (this.geometry.type === 'MultiLineString') {
                    self.drawMultiLine(this);
                    return;
                    //
                }
                self.drawPolyline(this);
            }); 
            
        }).then(function() {
            $.get('geojson/geo2.json').done(function(rdata) {
                
                $.each(rdata.features, function() {
                    self.drawPolygon(this);
                }); 
                setTimeout(function() {
                    deferred.resolveWith(self);
                }, 1000);
                
            });
        });
        return deferred;
    },
    
    defaults: {
        longitude: 109.427,
        latitude: 35.866,
        zoomLevel: 8
    },
    
    map: new BMap.Map("map"),

    initialize: function() {
        
        var params = this.defaults;
        
        var map = this.map;// 创建地图实例  
        var point = new BMap.Point(params.longitude, params.latitude); // 创建点坐标  
        
        map.centerAndZoom(point, params.zoomLevel);
        map.enableScrollWheelZoom(true);
        map.disableDoubleClickZoom();//禁用双击 
        map.setDefaultCursor("default");//cursor  
        map.setCurrentCity("西安");// 设置地图显示的城市 此项是必须设置的
        map.setMapStyle({
            styleJson: styleJson
        });
        var deferred = $.Deferred();
        var self = this;
        this.drawBoundry().then(function() {
            self.drawRivers().then(function() {
                deferred.resolve();
            });
        });
        return deferred;
    }
};
