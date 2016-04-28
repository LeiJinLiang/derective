/**
 * Created by jinlei on 16/4/28.
 */
var app = angular.module('rzSliderDemo', ['rzModule']);
var dirctive= function () {
    return{
        restrict: 'EA', //E = element（元素）, A = attribute（属性）, C = class, M = comment
        scope: {
            title: '@'
        },
        replace: 'true',
        templateUrl: 'template/mytemplate.html',
        //controller: controllerFunction, //Embed a custom controller in the directive 在指令中嵌入一个自定义控制器
        link: function ($scope, element, attrs) {
            var min_price=document.getElementsByClassName('min_price')[0];
            var max_price=document.getElementsByClassName('max_price')[0];
            var max_value=600;
            //初始化插件的方法
            $scope.slider_translate_html = {
                minValue: 0,
                maxValue: 400,
                options: {
                    floor: 0,
                    ceil: max_value,
                    minRange: 100,
                    showTicksValues: 100,
                    translate: function(value, sliderId, label) {
                        switch (label) {
                            case 'model':
                                min_price.textContent='¥'+value;
                                return '<b>¥</b>' + value;
                            case 'high':
                                max_price.textContent='¥'+value;
                                if(value==max_value){
                                    max_price.textContent='不限';
                                    return '<b>¥</b>' + '不限';
                                }
                                return '<b>¥:</b>' + value;
                            default:
                                return '¥' + value;
                        }
                    }
                }
            };
            var last_scala= function () {
                var ele=document.getElementsByClassName('rz-tick-value');
                var len=ele.length;
                ele[len-1].textContent='无限';
            }
            setTimeout(last_scala,0);

        } //DOM manipulation DOM 操作
    }
}
app.directive('touch',dirctive);
app.controller('MainCtrl', function ($scope) {

});
