/**
 * 
 */
 window.onload=function () {
    // 设置导航栏的时间显示
    settime();
    // 设置菜单栏默认全部展开
    $(function () { $('#menu1').collapse('show')});
    $(function () { $('#menu2').collapse('show')});
    $(function () { $('#menu3').collapse('show')});
    $(function () { $('#menu4').collapse('show')});
    $(function () { $('#menu5').collapse('show')});
    $(function () { $('#menu6').collapse('show')});
	
	//功能被按下的界面切换问题
    var taglist=document.getElementsByClassName("tag");
	for(var i=0;i<taglist.length;++i) {
	    taglist[i].onclick = function () {
	    	var list=document.getElementById("menu-content");
	        var lilist = list.getElementsByTagName("li");
	        for (var j = 0; j < lilist.length; ++j) {
	            lilist[j].className = "";
	        }
	        var li = document.getElementById("menu0").getElementsByTagName("li");
	        li[0].className="";
	    }
	}
	
	// 设置菜单栏小三角动画
    document.getElementById("heading1").onclick=function(){
        if($("#menu1").hasClass("in"))
        {
            $("#menu-arrow1").addClass("arrowoff");
            $("#menu-arrow1").removeClass("arrowon");
	
        }
        else{
            $("#menu-arrow1").addClass("arrowon");
            $("#menu-arrow1").removeClass("arrowoff");
        }
    }
    document.getElementById("heading2").onclick=function(){
        if($("#menu2").hasClass("in"))
        {
            $("#menu-arrow2").addClass("arrowoff");
            $("#menu-arrow2").removeClass("arrowon");

        }
        else{
            $("#menu-arrow2").addClass("arrowon");
            $("#menu-arrow2").removeClass("arrowoff");
        }
    }
    document.getElementById("heading3").onclick=function(){
        if($("#menu3").hasClass("in"))
        {
            $("#menu-arrow3").addClass("arrowoff");
            $("#menu-arrow3").removeClass("arrowon");

        }
        else{
            $("#menu-arrow3").addClass("arrowon");
            $("#menu-arrow3").removeClass("arrowoff");
        }
    }
    document.getElementById("heading4").onclick=function(){
        if($("#menu4").hasClass("in"))
        {
            $("#menu-arrow4").addClass("arrowoff");
            $("#menu-arrow4").removeClass("arrowon");

        }
        else{
            $("#menu-arrow4").addClass("arrowon");
            $("#menu-arrow4").removeClass("arrowoff");
        }
    }
    document.getElementById("heading5").onclick=function(){
        if($("#menu5").hasClass("in"))
        {
            $("#menu-arrow5").addClass("arrowoff");
            $("#menu-arrow5").removeClass("arrowon");

        }
        else{
            $("#menu-arrow5").addClass("arrowon");
            $("#menu-arrow5").removeClass("arrowoff");
        }
    }
    document.getElementById("heading6").onclick=function(){
        if($("#menu6").hasClass("in"))
        {
            $("#menu-arrow6").addClass("arrowoff");
            $("#menu-arrow6").removeClass("arrowon");

        }
        else{
            $("#menu-arrow6").addClass("arrowon");
            $("#menu-arrow6").removeClass("arrowoff");
        }
    }


    document.getElementById("menu-logo").onclick=function () {
        var menu=document.getElementById("change-menu");
        if(menu.getAttribute("class")=="bi bi-toggle-on"){
            menu.setAttribute("class","bi bi-toggle-off");
            document.getElementsByClassName("right-aside")[0].setAttribute("style","width:100%;");
            document.getElementsByClassName("left-aside")[0].setAttribute("style","display:none;")
        }else {
            menu.setAttribute("class","bi bi-toggle-on");
            document.getElementsByClassName("right-aside")[0].setAttribute("style","width:83%;");
            document.getElementsByClassName("left-aside")[0].setAttribute("style","display:inline-block;width:17%")
        }
    
    }
}
function settime() {
    var oDt=new Date();
    var sWd="";
    var iWeekDay=oDt.getDate();
    // 获取星期
    switch (iWeekDay) {
        case 0:
            sWd="星期日";break;
        case 1:
            sWd="星期一";break;
        case 2:
            sWd="星期二";break;
        case 3:
            sWd="星期三";break;
        case 4:
            sWd="星期四";break;
        case 5:
            sWd="星期五";break;
        case 6:
            sWd="星期六";break;
    }
    var iMonth=parseInt(oDt.getMonth())+1;
    // 获取年月日
    document.getElementById("displaydate").innerHTML="<span>"+
        oDt.getFullYear()+"年"+iMonth+"月"+oDt.getDate()+"日"+sWd+"</span>";
    // 定时器 每隔1000毫秒（1秒），调用showtime()函数 动态显示时间
    var iTimerid = window.setInterval("showtime()",1000);
}
function showtime() {
    var oDt=new Date();
    var iTimerid;
    var sTime="";
    if(oDt.getHours()<10){
        sTime+="0"+oDt.getHours()+":";
    }
    else{
        sTime+=oDt.getHours()+":";
    }
    if(oDt.getMinutes()<10){
        sTime+="0"+oDt.getMinutes()+":";
    }
    else{
        sTime+=oDt.getMinutes()+":";
    }
    if(oDt.getSeconds()<10){
        sTime+="0"+oDt.getSeconds();
    }
    else{
        sTime+=oDt.getSeconds();
    }
    document.getElementById("displaytime").innerHTML="<span>"+sTime+"</span>"
}

