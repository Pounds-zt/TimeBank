
window.onload = function() {
    alert("onload");
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
    
    alert($("#form-project-endApplyTime").val());
    getUintSdate($("#form-project-endApplyTime").val());

    //开展时间
    $('#form-date0').datetimepicker({
        forceParse: 0,//设置为0，时间不会跳转1899，会显示当前时间。
        language: 'zh-CN',//显示中文
        format: 'yyyy年mm月dd日',//显示格式
        minView: "day",//设置只显示到日期
        initialDate: new Date(),//初始化当前日期
        autoclose: true,//选中自动关闭
        todayBtn: true//显示今日按钮
    });
    $("#form-date0").datetimepicker("setDate", new Date());  //设置显示默认当天的时间
    alert($("#form-date0").val());
    getUintDdate($("#form-date0").val());

    $("#form-delete-dateListANDaccount0").click(function (){
        $(this).parent().parent().parent().parent().remove();
        var sum = document.getElementsByName("dateLiestANDaccountItem").length;
        document.getElementById("dateLiestANDaccount-tip").innerHTML="总开展天数:"+sum+"天！";
    });
    var sum = document.getElementsByName("dateLiestANDaccountItem").length;
    document.getElementById("dateLiestANDaccount-tip").innerHTML="总开展天数:"+sum+"天！";

};
//控制+-开展时间按钮
var countRow=1;
function addRow(){
    var newRow='<span id="dateLiestANDaccountItem'+countRow+'" style="display: flex" name="dateLiestANDaccountItem">'+
        '<div class="form-box"><div class="form-group2"><label class="control-label"><b class="required">*</b>活动时间:</label>'+
        '<div class="input-group"><input type="text" id="form-date'+countRow+'" name="datetimepicker" value="" class="form-control"></div>'+
        '</div><div class="tips"><p class="tip" id="form-date-tip'+countRow+'"></p></div></div> '+
        '<div class="form-box"><div class="form-group2"><label class="control-label"><b class="required">*</b>报名人数:</label>'+
        '<div class="input-group"><input type="text" id="form-account'+countRow+'" class="form-control" placeholder="输入当天所需报名人数">'+
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
        minView: "day",//设置只显示到日期
        initialDate: new Date(),//初始化当前日期
        autoclose: true,//选中自动关闭
        todayBtn: true//显示今日按钮
    });
    $("#form-date"+countRow).datetimepicker("setDate", new Date());  //设置显示默认当天的时间

    countRow++;
    var sum = document.getElementsByName("dateLiestANDaccountItem").length;
    document.getElementById("dateLiestANDaccount-tip").innerHTML="总开展天数:"+sum+"天！";
}

function checkProjectForm(){
    //表单验证
    var promoterAddress = $("#address").html();
    var name = document.getElementsByName("form-project-name")[0].value;
    var startApplyTime = document.getElementsByName("form-project-startApplyTime")[0].value;
    var endApplyTime = document.getElementsByName("form-project-endApplyTime")[0].value;
    var description = document.getElementsByName("form-project-description")[0].value;

    var sum = document.getElementsByName("dateLiestANDaccountItem").length;
    for(var i = 0; i <sum;++i){

    }

    var flag=true;

    if(name==""){
        document.getElementById("form-project-name-tip").innerHTML="公益项目名称不能为空！";
        flag=false;
    }else{
		document.getElementById("form-project-name-tip").innerHTML=" ";
	}

    if(description==""){
        document.getElementById("form-project-description-tip").innerHTML="公益项目描述不能为空！";
        flag=false;
    }else{
		document.getElementById("form-project-description-tip").innerHTML=" ";
	}

    if(startApplyTime==""){
        document.getElementById("form-project-startApplyTime-tip").innerHTML="开始报名时间不能为空！";
        flag=false;
    }else{
		document.getElementById("form-project-startApplyTime-tip").innerHTML=" ";
	}

    if(endApplyTime==""){
        document.getElementById("form-project-endApplyTime-tip").innerHTML="截止报名时间不能为空！";
        flag=false;
    }else{
		document.getElementById("form-project-endApplyTime-tip").innerHTML=" ";
	}

    return flag;
}
