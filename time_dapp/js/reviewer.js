
window.onload = function() {
    //----------------------------------------------------------------默认方法----------------------------------------------------------------
    // 设置导航栏的时间显示
    settime();
    // 设置菜单栏默认全部展开
    $(function () { $('#menu1').collapse('show')});
    $(function () { $('#menu2').collapse('show')});
    $(function () { $('#menu3').collapse('show')});
	
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
    // //----------------------------------------------------------------添加公益项目----------------------------------------------------------------
    // 开始报名时间
    $('#form-project-startApplyTime').datetimepicker({
        forceParse: 0,//设置为0，时间不会跳转1899，会显示当前时间。
        language: 'zh-CN',//显示中文
        format: 'yyyy年mm月dd日hh:ii:ss',//显示格式
        minView: "hour",//设置只显示到小时
        initialDate: new Date(),//初始化当前日期
        autoclose: true,//选中自动关闭
        todayBtn: true//显示今日按钮
    });
    $("#form-project-startApplyTime").datetimepicker("setDate", new Date() );  //设置显示默认当天的时间

    //截止报名时间
    $('#form-project-endApplyTime').datetimepicker({
        forceParse: 0,//设置为0，时间不会跳转1899，会显示当前时间。
        language: 'zh-CN',//显示中文
        format: 'yyyy年mm月dd日hh:ii:ss',//显示格式
        minView: "hour",//设置只显示到小时
        initialDate: new Date(),//初始化当前日期
        autoclose: true,//选中自动关闭
        todayBtn: true//显示今日按钮
    });
    $("#form-project-endApplyTime").datetimepicker("setDate", new Date() );  //设置显示默认当天的时间

    //开展时间
    $('#form-date0').datetimepicker({
        forceParse: 0,//设置为0，时间不会跳转1899，会显示当前时间。
        language: 'zh-CN',//显示中文
        format: 'yyyy年mm月dd日',//显示格式
        minView: "month",//设置只显示到日期
        initialDate: new Date(),//初始化当前日期
        autoclose: true,//选中自动关闭
        todayBtn: true//显示今日按钮
    });
    $("#form-date0").datetimepicker("setDate", new Date());  //设置显示默认当天的时间

    $("#form-delete-dateListANDaccount0").click(function (){
        $(this).parent().parent().parent().parent().remove();
        var sum = document.getElementsByName("dateLiestANDaccountItem").length;
        document.getElementById("dateLiestANDaccount-tip").innerHTML="总开展天数:"+sum+"天！";
    });
    var sum = document.getElementsByName("dateLiestANDaccountItem").length;
    document.getElementById("dateLiestANDaccount-tip").innerHTML="总开展天数:"+sum+"天！";

    //给提交按钮添加方法;
    $("body").delegate("#form-project-add","click", checkProjectForm);

};
//控制+-开展时间按钮
var countRow=1;
function addRow(){
    var newRow='<span id="dateLiestANDaccountItem'+countRow+'" style="display: flex" name="dateLiestANDaccountItem">'+
        '<div class="form-box"><div class="form-group2"><label class="control-label"><b class="required">*</b>活动时间:</label>'+
        '<div class="input-group"><input type="text" id="form-date'+countRow+'" name="form-date" value="" class="form-control"></div>'+
        '</div><div class="tips"><p class="tip" id="form-date-tip'+countRow+'"></p></div></div> '+
        '<div class="form-box"><div class="form-group2"><label class="control-label"><b class="required">*</b>报名人数:</label>'+
        '<div class="input-group"><input type="text" id="form-account'+countRow+'" name="form-account" class="form-control" placeholder="输入当天所需报名人数">'+
        '<a id="form-delete-dateListANDaccount'+countRow+'" class="delete-logo"><i class="bi bi-dash-circle-fill"></i></a></div></div>'+
        '<div class="tips"><p class="tip" id="form-account-tip'+countRow+'"></p></div></div></span>';
    $('#dateLiestANDaccount').append(newRow);
    $("#form-delete-dateListANDaccount"+countRow).click(function (){
        $(this).parent().parent().parent().parent().remove();
        var sum = document.getElementsByName("dateLiestANDaccountItem").length;
        document.getElementById("dateLiestANDaccount-tip").innerHTML="总开展天数:"+sum+"天！";
    });
    //开展时间
    $("#form-date"+countRow).datetimepicker({
        forceParse: 0,//设置为0，时间不会跳转1899，会显示当前时间。
        language: 'zh-CN',//显示中文
        format: 'yyyy年mm月dd日',//显示格式
        minView: "month",//设置只显示到日期
        initialDate: new Date(),//初始化当前日期
        autoclose: true,//选中自动关闭
        todayBtn: true//显示今日按钮
    });
    $("#form-date"+countRow).datetimepicker("setDate", new Date());  //设置显示默认当天的时间

    countRow++;
    var sum = document.getElementsByName("dateLiestANDaccountItem").length;
    document.getElementById("dateLiestANDaccount-tip").innerHTML="总开展天数:"+sum+"天！";
}
