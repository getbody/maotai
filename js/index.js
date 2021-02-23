console.log(111);
//原生方式
//window.orientation 浏览的角度
console.log(window.orientation);
function rote(){
    if(window.orientation == 180 || window.orientation == 0){
        console.log("竖屏");
    }
    if(window.orientation == 90 || window.orientation == -90){
        console.log("横屏");
       
    }
}
    window.addEventListener("load",rote())
        //角度切换事件 orientationchange
        // window.addEventListener("orientationchange",function(){
        //     rote();
        // })
        setTimeout(function(){
            $(".jiaz").addClass("dn");
            $(".loading").removeClass("dn");
        },3000)

        setTimeout(function(){
            $(".loading").addClass("dn");
            $(".page1").removeClass("dn");
        },13000)
