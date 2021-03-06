var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var abi = JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"projects","outputs":[{"name":"promoterAddress","type":"address"},{"name":"ID","type":"uint256"},{"name":"name","type":"bytes32"},{"name":"state","type":"uint8"},{"name":"description","type":"string"},{"name":"startApplyTime","type":"uint256"},{"name":"endApplyTime","type":"uint256"},{"name":"joinUsersCount","type":"uint256"},{"name":"voteProjectApplyCount","type":"uint256"},{"name":"voteProjectResultCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_ID","type":"uint256"}],"name":"submitProjectFix","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index1","type":"uint256"},{"name":"index2","type":"uint256"}],"name":"getVoteProjectApplyVoteResult","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getProjectDateList","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index1","type":"uint256"},{"name":"index2","type":"uint256"}],"name":"getProjectJoinUsersRemark","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_description","type":"string"},{"name":"_startApplyTime","type":"uint256"},{"name":"_endApplyTime","type":"uint256"},{"name":"_account","type":"uint256[]"},{"name":"_dateList","type":"uint256[]"}],"name":"submitProjectInformation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_joinDate","type":"uint256"}],"name":"joinProject","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getApplyReviewerLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"applyIntroduce","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PROMOTERFROZEN","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"users","outputs":[{"name":"index","type":"uint256"},{"name":"userAddress","type":"address"},{"name":"name","type":"bytes12"},{"name":"password","type":"bytes6"},{"name":"timeCoin","type":"uint256"},{"name":"isApplyReviewer","type":"bool"},{"name":"isReviewer","type":"bool"},{"name":"isVote","type":"bool"},{"name":"voteTo","type":"address"},{"name":"voteCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getProjectAccount","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"applyReviewer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getUsersLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"new_","type":"bytes32"}],"name":"bytes32Tostring","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"getImpeachProjectLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_ID","type":"uint256"},{"name":"_joinAddress","type":"address"},{"name":"_joinDate","type":"uint256"},{"name":"_joinDuration","type":"uint256"}],"name":"setJoinUserDuration","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_introduction","type":"string"}],"name":"applyForReviewer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_userAddress","type":"address"},{"name":"_coin","type":"uint256"}],"name":"frozenCoin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getImpeachReviewerLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index1","type":"uint256"},{"name":"index2","type":"uint256"}],"name":"getVoteProjectApplyVoteReviewer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"impeachProjects","outputs":[{"name":"ID","type":"uint256"},{"name":"projectID","type":"uint256"},{"name":"voteImpeachCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ID","type":"uint256"},{"name":"result","type":"int256"}],"name":"setVoteProjectApply","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getProjectRealAccount","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"impeachReviewers","outputs":[{"name":"ID","type":"uint256"},{"name":"impeachAddress","type":"address"},{"name":"voteImpeachCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_userAddress","type":"address"},{"name":"_coin","type":"uint256"}],"name":"sendCoin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes12"},{"name":"_password","type":"bytes6"}],"name":"checkLogin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_joinAddress","type":"address"},{"name":"_joinDate","type":"uint256"},{"name":"ProjectID","type":"uint256"}],"name":"withdrawUserJoin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"showMyTimeCoin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes12"}],"name":"checkUserName","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ID","type":"uint256"},{"name":"_joinAddress","type":"address"},{"name":"_joinDate","type":"uint256"}],"name":"isJoinedProject","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index1","type":"uint256"},{"name":"index2","type":"uint256"}],"name":"getVoteProjectResultVoteReviewer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"REVIEWERFROZEN","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes12"}],"name":"getUserAddressByName","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ID","type":"uint256"},{"name":"_joinDate","type":"uint256"}],"name":"isFullProject","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getProjectsLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_ID","type":"uint256"},{"name":"_joinAddress","type":"address"},{"name":"_joinDate","type":"uint256"},{"name":"_remark","type":"string"}],"name":"setJoinUserRemark","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawReviewer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_voteTo","type":"address"}],"name":"voteToMyPleasure","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index1","type":"uint256"},{"name":"index2","type":"uint256"}],"name":"getVoteProjectResultVoteResult","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getA","outputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdrawVote","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index1","type":"uint256"},{"name":"index2","type":"uint256"}],"name":"getProjectJoinUsersJoinAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"usersMap","outputs":[{"name":"index","type":"uint256"},{"name":"userAddress","type":"address"},{"name":"name","type":"bytes12"},{"name":"password","type":"bytes6"},{"name":"timeCoin","type":"uint256"},{"name":"isApplyReviewer","type":"bool"},{"name":"isReviewer","type":"bool"},{"name":"isVote","type":"bool"},{"name":"voteTo","type":"address"},{"name":"voteCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index1","type":"uint256"},{"name":"index2","type":"uint256"}],"name":"getProjectJoinUsersJoinDuration","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReviewsLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"reviews","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"promoterCertification","outputs":[{"name":"","type":"bool"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index1","type":"uint256"},{"name":"index2","type":"uint256"}],"name":"getProjectJoinUsersJoinDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_userAddress","type":"address"},{"name":"_name","type":"bytes12"},{"name":"_password","type":"bytes6"}],"name":"addUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ID","type":"uint256"},{"name":"result","type":"int256"}],"name":"setVoteProjectResult","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_a","type":"string"},{"name":"_b","type":"string"}],"name":"strConcat","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"inputs":[{"name":"initalSupply","type":"uint32"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]');
var address = '0xb9a553d42ec78b9fe9b89b5873285935e08c20c5';
var timeContract = new web3.eth.Contract(abi,address);
var contractInstance = timeContract;
var Initialaddress = "0xdd6b0c421f9f9eaF8D563de86EB422921F413237";


//----------------------------------------------------------------工具函数----------------------------------------------------------------

//日期格式转换
Date.prototype.format = function(format) {
    var o = {
        "M+" : this.getMonth() + 1,
        "d+" : this.getDate(),
        "h+" : this.getHours(),
        "m+" : this.getMinutes(),
        "s+" : this.getSeconds(),
        "q+" : Math.floor((this.getMonth() + 3) / 3),
        "S" : this.getMilliseconds()
    }
    if (/(y+)/.test(format))
        format = format.replace(RegExp.$1, (this.getFullYear() + "")
                .substr(4 - RegExp.$1.length));
    for ( var k in o)
        if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
                    : ("00" + o[k]).substr(("" + o[k]).length));
    return format;
}

//将solidity中的日期转换成固定格式的日期（完整的日期加时、分和秒）
function getSdate(date){
    //*1000是因为solidity的时间戳是精确到秒的，但是js里是到毫秒
    var date=new Date(date*1000);
    date = date.format('yyyy年MM月dd日hh:mm:ss');
    date = date.toLocaleString();
    return date;
}
//将solidity中的日期转换成固定格式的日期（完整的日期）
function getDdate(date){
    var date=new Date(date*1000);
    date = date.format('yyyy年MM月dd日');
    date = date.toLocaleString();
    return date;
}
//将'yyyy年mm月dd日hh:ii:ss'格式转换为时间戳(秒)
function getUintSdate(dateString){
    dateString = dateString.replace(/年|:/,"-");
    dateString = dateString.replace(/月/,"-");
    dateString = dateString.replace(/日/,"T");
    date = new Date(dateString);
    return date.valueOf()/1000;
}
//将'yyyy年mm月dd日'格式转换为时间戳(秒)
function getUintDdate(dateString){
    dateString = dateString.replace(/年/,"-");
    dateString = dateString.replace(/月/,"-");
    dateString = dateString.replace(/日/,"");
    //不规定几点几分几秒，js就会默认设置为08:00:00
    dateString = dateString+"T00:00:00";
    date = new Date(dateString);
    return date.valueOf()/1000;
}

//utf8转为utf16：solidity中bytes转string后是utf-8，再转换为utf-16
function utf8to16(str) {
    var out, i, len, c;
    var char2, char3;
    out = "";
    len = str.length;
    i = 0;
    while(i < len) {
        c = str.charCodeAt(i++);
        switch(c >> 4)
        {
            case 0: case 1: case 2: case 3: case 4: case 5: case 6:case7:
            // 0xxxxxxx
            out += str.charAt(i-1);
            break;
            case 12: case 13:
            // 110x xxxx 10xx xxxx
            char2 = str.charCodeAt(i++);
            out += String.fromCharCode(((c & 0x1F) << 6) | (char2&0x3F));
            break;
            case 14:
            // 1110 xxxx 10xx xxxx 10xx xxxx
                char2 = str.charCodeAt(i++);
                char3 = str.charCodeAt(i++);
                out += String.fromCharCode(((c & 0x0F) << 12) |
                    ((char2 & 0x3F) << 6) |
                    ((char3 & 0x3F) << 0));
                break;
        }
    }
    return out;
}

// utf16转为utf8：
function utf16to8(str) {
    var out, i, len, c;
    out = "";
    len = str.length;
    for(i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i);
        } else if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        } else {
            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        }
    }
    return out;
}

// 获得url参数
function getUrlParam(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r!=null) return unescape(r[2]); return null; //返回参数值
}


$(document).ready(function() {

    $("#address").html(getUrlParam("address"));
    // 表格颜色隔行显示
    var rowStyle = function (row, index) {
        if (index % 2 === 0) {//偶数行
            return {classes: "row-class1"};
        } else {//奇数行
            return {classes: "row-class2"};
        }
    }
    //----------------------------------------------------------------查看用户基本信息----------------------------------------------------------------
    // 加载用户表格
    $("body").delegate("#tag1","click", function(){
        $('#users-table').bootstrapTable({
            method: 'post',             //请求方式（*）
            dataType: "json",
            toolbar: '#users-tool-bar',              //工具按钮用哪个容器
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   //是否显示分页（*）
            sortable: true,                     //是否启用排序
            sortOrder: "asc",                   //排序方式
            sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
            pageSize: 10,                     //每页的记录行数（*）
            pageList: [5, 10, 15],            //可供选择的每页的行数（*）
            search: true,                      //是否显示表格搜索
            searchOnEnterKey:false,         //设置为 true时，按回车触发搜索方法，否则自动触发搜索方法
            strictSearch:false,               	//设置为 true启用 全匹配搜索，否则为模糊搜索
            showColumns: true,                  //是否显示所有的列（选择显示的列）
            showRefresh: false,                  //是否显示刷新按钮
            minimumCountColumns: 1,             //最少允许的列数
            clickToSelect: true,                //是否启用点击选中行
            //height: 500,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "userAddress",                     //每一行的唯一标识，一般为主键列
            showToggle: false,                   //是否显示详细视图和列表视图的切换按钮
            cardView: false,                    //是否显示详细视图
            detailView: false,              //是否显示父子表
            rowStyle:rowStyle,
            //------导出excel表格设置
            showExport: true,              //是否显示导出按钮
            exportDataType: "all",              //basic', 'all', 'selected'.
            exportTypes:['excel','xlsx'],	    //导出类型
            exportOptions:{   
                fileName: '用户信息表',              //文件名称设置  
                worksheetName: '工作区',          //表格工作区名称  
                tableName: '表格',  
                excelstyles: ['background-color', 'color', 'font-size', 'font-weight'],
            },
            // 表格属性列
            columns: [{
                checkbox: true,
                visible: true                  //是否显示复选框
            }, {
                field: 'index',
                title: '用户下标',
                sortable: true
            }, {
                field: 'userAddress',
                title: '用户地址',
                sortable: true
            }, {
                field: 'name',
                title: '用户名',
                sortable: true
            }, {
                field: 'password',
                title: '密码',
                sortable: true
            }, {
                field: 'timeCoin',
                title: '时间余额',
                sortable: true
            }, {
                field: 'isApplyReviewer',
                title: '是否申请成为审核人',
                sortable: true
            }, {
                field: 'isReviewer',
                title: '是否是审核人',
                sortable: true
            },{
                field: 'isVote',
                title: '是否已经投票',
                sortable: true
            },{
                field: 'voteTo',
                title: '投票对象',
                sortable: true
            }, {
                field: 'voteCount',
                title: '收到票数',
                sortable: true
            }
            ]
        });

        // 清空表格
        $("#users-table").bootstrapTable("removeAll");
        console.log("开始获取用户长度");
        contractInstance.methods.getUsersLength().call().then(function(res){
            usersLength = res;
            console.log("获得用户长度："+ usersLength);
            for (var i = 0; i < usersLength; i++) {
                contractInstance.methods.users(i).call().then(function(res){
                    // 转json字符串,再转js对象
                    var user = JSON.parse(JSON.stringify(res));
                    var Array={
                        "index":user.index,
                        "userAddress":user.userAddress,
                        'name':web3.utils.hexToAscii(user.name),
                        'password':web3.utils.hexToAscii(user.password),
                        'timeCoin':user.timeCoin,
                        'isApplyReviewer':user.isApplyReviewer,
                        'isReviewer':user.isApplyReviewer,
                        'isVote':user.isVote,
                        'voteTo':user.voteTo,
                        'voteCount':user.voteCount
                    };
                    $("#users-table").bootstrapTable('append', Array);
                });
                
            }
        });
        

    });
    
    
    //初始化报名日期选择下拉框
    $('#joinDate-select').multipleSelect({
        name: "joinDate-select",//向后台提交的name
		placeholder: "请选择",//下拉框的提示
  		multiple: true,//是否是多选		
  		selectAll: true,//是否打开选择全部的选择按钮
  		selectAllText:'全选',//选择全部的复选框的text值
  		allSelected:'选择全部',//全部选中后显示的值
  		//singleRadio: true,//是否是单选
  		openOnHover: false,//用鼠标悬停而不是单击来打开选择下拉菜单。
  		showClear: true,//显示清除图标来取消选中的所有项目
  		filter: true,//开启搜索
  		filterPlaceholder:"搜索",//设置筛选器占位符
  		locale:"zh-CN",//设置语言
  		multipleWidth: 150,//设置选项的宽度
  		animate:'slide'//下滑动画,'slide','fade'
    });

    // 加载公益项目表格
    $("body").delegate("#tag2","click", function(){
        $('#projects-table').bootstrapTable({
            method: 'post',             //请求方式（*）
            dataType: "json",
            toolbar: '#projects-tool-bar',              //工具按钮用哪个容器
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   //是否显示分页（*）
            sortable: true,                     //是否启用排序
            sortOrder: "asc",                   //排序方式
            sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
            pageSize: 10,                     //每页的记录行数（*）
            pageList: [5, 10, 15],            //可供选择的每页的行数（*）
            search: true,                      //是否显示表格搜索
            searchOnEnterKey:false,         //设置为 true时，按回车触发搜索方法，否则自动触发搜索方法
            strictSearch:false,               	//设置为 true启用 全匹配搜索，否则为模糊搜索
            showColumns: true,                  //是否显示所有的列（选择显示的列）
            showRefresh: false,                  //是否显示刷新按钮
            minimumCountColumns: 1,             //最少允许的列数
            clickToSelect: true,                //是否启用点击选中行
            //height: 500,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
            showToggle: false,                   //是否显示详细视图和列表视图的切换按钮
            cardView: false,                    //是否显示详细视图
            detailView: false,              //是否显示父子表
            rowStyle:rowStyle,
            //------导出excel表格设置
            showExport: true,              //是否显示导出按钮
            exportDataType: "all",              //basic', 'all', 'selected'.
            exportTypes:['excel','xlsx'],	    //导出类型
            exportOptions:{   
                fileName: '公益项目信息表',              //文件名称设置  
                worksheetName: '工作区',          //表格工作区名称  
                tableName: '表格',  
                excelstyles: ['background-color', 'color', 'font-size', 'font-weight'],
            },
            // 表格属性列
            columns: [{
                checkbox: true,
                visible: true                  //是否显示复选框
            }, {
                field: 'ID',
                title: 'ID',
                sortable: true
            }, {
                field: 'promoterAddress',
                title: '项目发起人',
                sortable: true
            }, {
                field: 'name',
                title: '名称',
                sortable: true
            }, {
                field: 'state',
                title: '状态',
                sortable: true
            }, {
                field: 'description',
                title: '描述',
                align: 'center',
                valign: 'middle',
                events: {
                    // 模态框数据在这里加载
                    'click #description-detail': function (e, value, row, index) {
                        contractInstance.methods.projects(row.ID).call().then(function(res){
                            // 转json字符串
                            var value = JSON.stringify(res);
                            // 转js对象
                            var project = JSON.parse(value);
                            var description = project.description;
                            console.log("description"+description);
                            $("#project-name").attr("value",row.name);
                            // $("#project-description").innerHTML(description);
                            document.getElementById("project-description").innerHTML = description;
                        });
                    }
                },
                formatter: function (value, row, index) {
                    var result = "";
                    result += '<button id="description-detail" class="btn btn-default btn-in" data-toggle="modal" data-target="#description-modal">详情</button>';
                    return result;
                }
            }, {
                field: 'dateList',
                title: '开展日期',
                sortable: true
            }, {
                field: 'account',
                title: '招募人数',
                sortable: true
            }, {
                field: 'realAccount',
                title: '实际报名人数',
                sortable: true
            },{
                field: 'startApplyTime',
                title: '开始报名时间',
                sortable: true
            },{
                field: 'endApplyTime',
                title: '截止报名时间',
                sortable: true
            },{
                field: 'joinUsers',
                title: '报名名单',
                align: 'center',
                valign: 'middle',
                events: {
                    // 模态框数据在这里加载
                    'click #joinUsers-detail': function (e, value, row, index) {
                        $('#joinUsers-modal-id').val(row.ID);
                        $('#joinUsers-modal-name').val(row.name);
                        $('#joinUsers-table').bootstrapTable({
                            method: 'post',             //请求方式（*）
                            dataType: "json",
                            toolbar: '#joinUsers-tool-bar',              //工具按钮用哪个容器
                            striped: true,                      //是否显示行间隔色
                            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
                            pagination: true,                   //是否显示分页（*）
                            sortable: true,                     //是否启用排序
                            sortOrder: "asc",                   //排序方式
                            sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
                            pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
                            pageSize: 10,                     //每页的记录行数（*）
                            pageList: [5, 10, 15],            //可供选择的每页的行数（*）
                            search: true,                      //是否显示表格搜索
                            searchOnEnterKey:false,         //设置为 true时，按回车触发搜索方法，否则自动触发搜索方法
                            strictSearch:false,               	//设置为 true启用 全匹配搜索，否则为模糊搜索
                            showColumns: true,                  //是否显示所有的列（选择显示的列）
                            showRefresh: false,                  //是否显示刷新按钮
                            minimumCountColumns: 1,             //最少允许的列数
                            clickToSelect: true,                //是否启用点击选中行
                            //height: 500,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
                            uniqueId: 'ID',                     //每一行的唯一标识，一般为主键列
                            showToggle: false,                   //是否显示详细视图和列表视图的切换按钮
                            cardView: false,                    //是否显示详细视图
                            detailView: false,              //是否显示父子表
                            editable:true,                  //开启编辑模式
                            rowStyle:rowStyle,
                            //------导出excel表格设置
                            showExport: true,              //是否显示导出按钮
                            exportDataType: "all",              //basic', 'all', 'selected'.
                            exportTypes:['excel','xlsx'],	    //导出类型
                            exportOptions:{   
                                fileName: '报名信息表',              //文件名称设置  
                                worksheetName: '工作区',          //表格工作区名称  
                                tableName: '表格',  
                                excelstyles: ['background-color', 'color', 'font-size', 'font-weight'],
                            },
                            // 表格属性列
                            columns: [{
                                checkbox: true,
                                visible: true                  //是否显示复选框
                            }, {
                                field: 'joinAddress',
                                title: '报名用户地址',
                                sortable: true
                            }, {
                                field: 'joinDate',
                                title: '参加日期',
                                sortable: true
                            }, {
                                field: 'joinDuration',
                                title: '该日时间报酬',
                                sortable: true,
                                editable:{
                                    type: 'text',
                                    title:'修改时间报酬',
                                    validate: function (v) {
                                        if (!(/(^[0-9]\d*$)/.test(v))) {
                                            return '时间报酬应为非负整数！';
                                        } 
                                    }
                                }
                            }, {
                                field: 'remark',
                                title: '备注',
                                sortable: true,
                                editable:{
                                    type: 'text',
                                    title:'修改备注',
                                }
                            }
                            ],
                            onEditableSave:function(field, row, oldValue,$el){
                                var address=$("#address").html();
                                var projectID = $('#joinUsers-modal-id').val();
                                alert(projectID);
                                contractInstance.methods.isJoinedProject(projectID,row.joinAddress,getUintDdate(row.joinDate)).call().then(function(res){
                                    if(!res){
                                        document.getElementById("errorMessage").innerHTML="该用户未参加该项目该天的活动";
                                        $('#error-modal').modal('show');
                                    }else{
                                        contractInstance.methods.projects(projectID).call().then(function(res){
                                            // 转json字符串
                                            var value = JSON.stringify(res);
                                            // 转js对象
                                            var project = JSON.parse(value);
                                            if(project.promoterAddress!=address){
                                                document.getElementById("errorMessage").innerHTML="您不是该项目的发起者！无法修改！";
                                                $('#error-modal').modal('show');
                                            }else{
                                                if(field=="joinDuration"){
                                                    contractInstance.methods.setJoinUserDuration(projectID,row.joinAddress,getUintDdate(row.joinDate),row.joinDuration).send({from:address,gas:6000000},function(err,res){
                                                        if(err){
                                                            document.getElementById("errorMessage").innerHTML="无法修改！"+err;
                                                        }else{
                                                            document.getElementById("errorMessage").innerHTML="修改项目"+projectID+"中，用户"+row.joinAddress+"在日期为"+row.joinDate+"的时间报酬为"+row.joinDuration+"成功!";
                                                        }
                                                        $('#error-modal').modal('show');
                                                    });
                                                }else if(field=="remark"){
                                                    contractInstance.methods.setJoinUserRemark(projectID,row.joinAddress,getUintDdate(row.joinDate),row.remark).send({from:address,gas:6000000},function(err,res){
                                                        if(err){
                                                            document.getElementById("errorMessage").innerHTML="无法修改！"+err;
                                                            alert(row.joinAddress+"时间:"+getUintDdate(row.joinDate));
                                                        }else{
                                                            document.getElementById("errorMessage").innerHTML="修改项目"+projectID+"中，用户"+row.joinAddress+"在日期为"+row.joinDate+"的备注为"+row.remark+"成功!";
                                                        }
                                                        $('#error-modal').modal('show');
                                                    });
                                                }else{
                                                    document.getElementById("errorMessage").innerHTML="无法修改！";
                                                    $('#error-modal').modal('show');
                                                }
                                            }
                                        });
                                    }
                                });
                                
                            }
                        });

                        // 清空表格
                        $("#joinUsers-table").bootstrapTable("removeAll");

                        contractInstance.methods.projects(row.ID).call().then(function(res){
                            // 转json字符串
                            var value = JSON.stringify(res);
                            // 转js对象
                            var project = JSON.parse(value);
                            var joinUsersCount = project.joinUsersCount;
                            console.log("joinUsersCount"+joinUsersCount);

                            function getJoinUsers(i,ID){
                                console.log("getProjectJoinUsersJoinAddress前i"+i);
                                contractInstance.methods.getProjectJoinUsersJoinAddress(ID,i).call(function(err,res){
                                    if(err) {
                                        console.log("getProjectJoinUsersJoinAddressErr:"+err);
                                    }
                                    else{
                                        console.log("getProjectJoinUsersJoinAddressRes:"+res);
                                        console.log("getProjectJoinUsersJoinAddress后i"+i);
                                        var joinUsersJoinAddress=res;
                                        console.log("joinUsersJoinAddress"+joinUsersJoinAddress);
                                        contractInstance.methods.getProjectJoinUsersJoinDate(ID,i).call().then(function(res){
                                            alert("res"+res+";i"+i);
                                            var joinUsersJoinDate=res;
                                            console.log("joinUsersJoinDate"+joinUsersJoinDate);
                                            contractInstance.methods.getProjectJoinUsersJoinDuration(ID,i).call().then(function(res){
                                                var joinUsersJoinDuration=res;
                                                console.log("joinUsersJoinDuration"+joinUsersJoinDuration);
                                                contractInstance.methods.getProjectJoinUsersRemark(ID,i).call().then(function(res){
                                                    var joinUsersRemark=res;
                                                    console.log("JoinUsersRemark"+joinUsersRemark);
                                                    var Array={
                                                        "joinAddress":joinUsersJoinAddress,
                                                        "joinDate":getDdate(joinUsersJoinDate),
                                                        "joinDuration":joinUsersJoinDuration,
                                                        'remark':joinUsersRemark
                                                    };
                                                    $("#joinUsers-table").bootstrapTable('append', Array);
                                                });
                                            });
                                        });
                                        }
                                    });
                            }

                            for(var i=0;i<joinUsersCount;++i){
                                getJoinUsers(i,row.ID);
                            }
                            
                        });
                        
                    }
                },
                formatter: function (value, row, index) {
                    var result = "";
                    result += '<button id="joinUsers-detail" class="btn btn-default btn-in" data-toggle="modal" data-target="#joinUsers-modal">详情</button>';
                    return result;
                }
                
            },{
                field: 'voteProjectApply',
                title: '申请结果审核',
                align: 'center',
                valign: 'middle',
                events: {
                    // 模态框数据在这里加载
                    'click #voteProjectApply-detail': function (e, value, row, index) {
                        $('#voteProjectApply-modal-id').val(row.ID);
                        $('#voteProjectApply-modal-name').val(row.name);
                        //修改表格需要使用
                        // $("#voteProjectApply-table").bootstrapTable('destroy');
                        $('#voteProjectApply-table').bootstrapTable({
                            method: 'post',             //请求方式（*）
                            dataType: "json",
                            toolbar: '#voteProjectApply-tool-bar',              //工具按钮用哪个容器
                            striped: true,                      //是否显示行间隔色
                            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
                            pagination: true,                   //是否显示分页（*）
                            sortable: true,                     //是否启用排序
                            sortOrder: "asc",                   //排序方式
                            sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
                            pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
                            pageSize: 10,                     //每页的记录行数（*）
                            pageList: [5, 10, 15],            //可供选择的每页的行数（*）
                            search: true,                      //是否显示表格搜索
                            searchOnEnterKey:false,         //设置为 true时，按回车触发搜索方法，否则自动触发搜索方法
                            strictSearch:false,               	//设置为 true启用 全匹配搜索，否则为模糊搜索
                            showColumns: true,                  //是否显示所有的列（选择显示的列）
                            showRefresh: false,                  //是否显示刷新按钮
                            minimumCountColumns: 1,             //最少允许的列数
                            clickToSelect: true,                //是否启用点击选中行
                            //height: 500,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
                            uniqueId: "voteReviewer",                     //每一行的唯一标识，一般为主键列
                            showToggle: false,                   //是否显示详细视图和列表视图的切换按钮
                            cardView: false,                    //是否显示详细视图
                            detailView: false,              //是否显示父子表
                            editable:true,                  //开启编辑模式  
                            rowStyle:rowStyle,
                            //------导出excel表格设置
                            showExport: true,              //是否显示导出按钮
                            exportDataType: "all",              //basic', 'all', 'selected'.
                            exportTypes:['excel','xlsx'],	    //导出类型
                            exportOptions:{   
                                fileName: '申请结果结果审核表',              //文件名称设置  
                                worksheetName: '工作区',          //表格工作区名称  
                                tableName: '表格',  
                                excelstyles: ['background-color', 'color', 'font-size', 'font-weight'],
                            },
                            // 表格属性列
                            columns: [{
                                checkbox: true,
                                visible: true                  //是否显示复选框
                            }, {
                                field: 'voteReviewer',
                                title: '审核人地址',
                                sortable: true
                            }, {
                                field: 'voteResult',
                                title: '投票结果',
                                sortable: true, 
                                editable:{
                                    type:'select',
                                    title:'输入审核结果',
                                    source:[
                                        {
                                            value:'0',
                                            text: '未审核',
                                        },{
                                            value:'1',
                                            text: '通过',
                                        },{
                                            value:'-1',
                                            text: '不通过',
                                        }
                                    ],
                                    
                                }
                            }
                            ],
                            onEditableSave:function(field, row, oldValue,$el){
                                var projectID = $('#voteProjectApply-modal-id').val();
                                console.log("onEditableSave:"+"field:"+field+" row:"+row+" oldValue:"+oldValue+"$el"+$el);
                                console.log("row.voteResult:"+row.voteResult);
                                console.log("row.voteReviewer:"+row.voteReviewer);
                                var address=$("#address").html();
                                if(row.voteReviewer!=address){
                                    document.getElementById("errorMessage").innerHTML="您只能修改自己的审核结果！";
                                    $('#error-modal').modal('show');
                                }else{
                                    contractInstance.methods.setVoteProjectApply(projectID,row.voteResult).send({from:address,gas:6000000},function(err,res){
                                        if(err){
                                            document.getElementById("errorMessage").innerHTML="error:"+err;
                                        }else{
                                            if(res){
                                                document.getElementById("errorMessage").innerHTML="项目ID为"+projectID+"的项目，项目申请结果修改成功！";
                                            }else{
                                                document.getElementById("errorMessage").innerHTML="项目ID为"+projectID+"的项目，项目申请结果修改失败<br/>！"+"您不是该项目的审核人!";
                                            }
                                        }
                                        $('#error-modal').modal('show');
                                    });
                                }
                            }
                        });

                        // 清空表格
                        $("#voteProjectApply-table").bootstrapTable("removeAll");
                        contractInstance.methods.projects(row.ID).call().then(function(res){
                            // 转json字符串
                            var value = JSON.stringify(res);
                            // 转js对象
                            var project = JSON.parse(value);
                            var voteProjectApplyCount = project.voteProjectApplyCount;
                            console.log("voteProjectApplyCount"+voteProjectApplyCount);

                            function getVoteProjectApply(i,ID){
                                contractInstance.methods.getVoteProjectApplyVoteReviewer(ID,i).call().then(function(res){
                                    var voteReviewer=res;
                                    contractInstance.methods.getVoteProjectApplyVoteResult(ID,i).call().then(function(res){
                                       var voteResult=res; 
                                        var Array={
                                            "voteReviewer":voteReviewer,
                                            "voteResult":voteResult
                                        };
                                        $("#voteProjectApply-table").bootstrapTable('append', Array);

                                    });
                                });
                            }

                            for(var i=0;i<voteProjectApplyCount;++i) {
                                getVoteProjectApply(i,row.ID);
                            }
                        });
                    }
                },
                formatter: function (value, row, index) {
                    var result = "";
                    result += '<button id="voteProjectApply-detail" class="btn btn-default btn-in" data-toggle="modal" data-target="#voteProjectApply-modal">详情</button>';
                    return result;
                }
                
            },{
                field: 'voteProjectResult',
                title: '参与结果审核',
                align: 'center',
                valign: 'middle',
                events: {
                    // 模态框数据在这里加载
                    
                    'click #voteProjectResult-detail': function (e, value, row, index) {
                        $('#voteProjectResult-modal-id').val(row.ID);
                        $('#voteProjectResult-modal-name').val(row.name);
                        //修改表格需要使用
                        // $("#voteProjectResult-table").bootstrapTable('destroy');
                        $('#voteProjectResult-table').bootstrapTable({
                            method: 'post',             //请求方式（*）
                            dataType: "json",
                            toolbar: '#voteProjectResult-tool-bar',              //工具按钮用哪个容器
                            striped: true,                      //是否显示行间隔色
                            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
                            pagination: true,                   //是否显示分页（*）
                            sortable: true,                     //是否启用排序
                            sortOrder: "asc",                   //排序方式
                            sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
                            pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
                            pageSize: 10,                     //每页的记录行数（*）
                            pageList: [5, 10, 15],            //可供选择的每页的行数（*）
                            search: true,                      //是否显示表格搜索
                            searchOnEnterKey:false,         //设置为 true时，按回车触发搜索方法，否则自动触发搜索方法
                            strictSearch:false,               	//设置为 true启用 全匹配搜索，否则为模糊搜索
                            showColumns: true,                  //是否显示所有的列（选择显示的列）
                            showRefresh: false,                  //是否显示刷新按钮
                            minimumCountColumns: 1,             //最少允许的列数
                            clickToSelect: true,                //是否启用点击选中行
                            //height: 500,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
                            uniqueId: "voteReviewer",                     //每一行的唯一标识，一般为主键列
                            showToggle: false,                   //是否显示详细视图和列表视图的切换按钮
                            cardView: false,                    //是否显示详细视图
                            detailView: false,              //是否显示父子表
                            editable:true,                  //开启编辑模式  
                            rowStyle:rowStyle,
                            //------导出excel表格设置
                            showExport: true,              //是否显示导出按钮
                            exportDataType: "all",              //basic', 'all', 'selected'.
                            exportTypes:['excel','xlsx'],	    //导出类型
                            exportOptions:{   
                                fileName: '参与结果审核表',              //文件名称设置  
                                worksheetName: '工作区',          //表格工作区名称  
                                tableName: '表格',  
                                excelstyles: ['background-color', 'color', 'font-size', 'font-weight'],
                            },
                            // 表格属性列
                            columns: [{
                                checkbox: true,
                                visible: true                  //是否显示复选框
                            }, {
                                field: 'voteReviewer',
                                title: '审核人地址',
                                sortable: true
                            }, {
                                field: 'voteResult',
                                title: '投票结果',
                                sortable: true,
                                editable:{
                                    type:'select',
                                    title:'选择审核结果',
                                    source:[
                                        {
                                            value:'0',
                                            text: '未审核',
                                        },{
                                            value:'1',
                                            text: '通过',
                                        },{
                                            value:'-1',
                                            text: '不通过',
                                        }
                                    ],
                                    
                                }
                            }
                            ],
                            onEditableSave:function(field, row,oldValue,$el){
                                var projectID = $('#voteProjectResult-modal-id').val();
                                console.log("onEditableSave:"+"field:"+field+" row:"+row+" oldValue:"+oldValue+"$el"+$el);
                                console.log("row.voteResult:"+row.voteResult);
                                console.log("row.voteReviewer:"+row.voteReviewer);
                                var address=$("#address").html();
                                if(row.voteReviewer!=address){
                                    document.getElementById("errorMessage").innerHTML="您只能修改自己的审核结果！";
                                    $('#error-modal').modal('show');
                                }else{
                                    contractInstance.methods.setVoteProjectResult(projectID,row.voteResult).send({from:address,gas:6000000},function(err,res){
                                        if(err){
                                            document.getElementById("errorMessage").innerHTML="error:"+err;
                                        }else{
                                            if(res){
                                                document.getElementById("errorMessage").innerHTML="项目ID为"+projectID+"的项目，项目参与结果修改成功！";
                                            }else{
                                                document.getElementById("errorMessage").innerHTML="项目ID为"+projectID+"的项目，项目参与结果修改失败<br/>！"+"您不是该项目的审核人!";
                                                
                                            }
                                        }
                                        $('#error-modal').modal('show');
                                    });
                                }
                                
                            }
                        });

                        // 清空表格
                        $("#voteProjectResult-table").bootstrapTable("removeAll");
                        contractInstance.methods.projects(row.ID).call().then(function(res){
                            // 转json字符串
                            var value = JSON.stringify(res);
                            // 转js对象
                            var project = JSON.parse(value);
                            var voteProjectResultCount = project.voteProjectResultCount;
                            console.log("voteProjectResultCount"+voteProjectResultCount);

                            function getVoteProjectResult(i,ID){
                                contractInstance.methods.getVoteProjectResultVoteReviewer(ID,i).call().then(function(res){
                                    var voteReviewer=res;
                                    contractInstance.methods.getVoteProjectResultVoteResult(ID,i).call().then(function(res){
                                       var voteResult=res; 
                                        var Array={
                                            "voteReviewer":voteReviewer,
                                            "voteResult":voteResult
                                        };
                                        $("#voteProjectResult-table").bootstrapTable('append', Array);
                                    });
                                    
                                });
                            }
                            for(var i=0;i<voteProjectResultCount;++i) {
                                getVoteProjectResult(i,row.ID);
                            }
                        });
                    }
                },
                formatter: function (value, row, index) {
                    var result = "";
                    result += '<button id="voteProjectResult-detail" class="btn btn-default btn-in" data-toggle="modal" data-target="#voteProjectResult-modal">详情</button>';
                    return result;
                }
                
            },{
                field: 'apply',
                title: '报名',
                events: {
                    'click #join-detail': function (e, value, row, index) {

                        contractInstance.methods.projects(row.ID).call(function(err,res){
                            if (err){
                                alert("err"+err);
                                document.getElementById("errorMessage").innerHTML="error:"+err;
	  	                        $('#error-modal').modal('show');
                            }else{
                                $("#join-project-id").attr("value",row.ID);
                                $("#join-project-name").attr("value",utf8to16(web3.utils.hexToAscii(res.name)));
                                contractInstance.methods.getProjectDateList(row.ID).call().then(function(dateList){
                                    console.log("dateList:"+dateList);
                                    var date=[];
                                    for(var j=0; j<dateList.length; j++){
                                        date.push(getDdate(dateList[j]));
                                    }
                                    //清空下拉框
                                    $("#joinDate-select").empty().multipleSelect('refresh');
                                    //添加项到下拉框
                                    $("#joinDate-select").append($opt).multipleSelect('refresh');
                                    for(var j = 0;j<date.length;j++){
                                        var $opt = $('<option />', {
                                            value: dateList[j],
                                            text: date[j]
                                        });
                                        $("#joinDate-select").append($opt).multipleSelect('refresh');
                                    }

                                });
                            }
                        });
                        
                    }
                },
                formatter: function (value, row, index) {
                    var result = "";
                    result += '<button id="join-detail" class="btn btn-default btn-in" data-toggle="modal" data-target="#join-Modal">报名</button>';
                    return result;
                }
            }
            ]
        });


        //用户确认公益项目报名：
        $("body").delegate("#join-Modal-submit","click", function(){
            var id=document.getElementById("join-project-id").value;
            
            var address=$("#address").html();
            //var dateList=[];
            var dateList=document.getElementById("joinDate-select");

            //判断一下是否有选择日期
            var flag=false;
            for(var i=0; i<dateList.length; i++){
                if(dateList.options[i].selected){
                    flag=true;
                    console.log("选了");
                }
            }

            document.getElementById("errorMessage").innerHTML='';

            if(!flag){
                document.getElementById("errorMessage").innerHTML+='请先选择报名日期！<br/>';
            }

            function JoinedProject(i,id,address,dateList) {
                console.log("dateList[i2].value"+dateList[i].value);
                console.log("address"+address);
                console.log("id"+id);
                contractInstance.methods.isJoinedProject(id,address,dateList[i].value).call().then(function(res){
                    console.log("res:"+res);
                    if(res){
                        document.getElementById("errorMessage").innerHTML+="您在项目ID为"+id+"的项目中，已经报名了日期为"+dateList[i].text+"的公益活动，报名失败！<br/>";
                    }else{
                        contractInstance.methods.isFullProject(id,dateList[i].value).call().then(function(res){
                            if(res){
                                document.getElementById("errorMessage").innerHTML+="报名项目ID为"+id+"的项目，在日期为"+dateList[i].text+"的报名人数已满，报名失败！<br/>";
                            }else{
                                console.log("3");
                                contractInstance.methods.joinProject(id,dateList[i].value).send({from:address,gas:6000000},function(err,res){
                                    console.log("4");
                                    if(err){
                                        alert("err"+err);
                                        document.getElementById("errorMessage").innerHTML+="error:"+err;
                                    }else{
                                        if(res){
                                            document.getElementById("errorMessage").innerHTML+="项目ID为"+id+"的项目，日期为"+dateList[i].text+"的公益活动，报名成功！<br/>";
                                        }else{
                                            document.getElementById("errorMessage").innerHTML+="项目ID为"+id+"的项目，日期为"+dateList[i].text+"的公益活动，报名失败！<br/>";
                                        }
                                    }
                                });
                            }
                        });
                        
                    }
                });
            }
            for(var i=0; i<dateList.length; i++){
                if(dateList.options[i].selected){
                    JoinedProject(i,id,address,dateList);
                }
            }
            
            $('#error-modal').modal('show');
            // $('#tag2').trigger("click");
            //alert(dateList);
        });

        // 清空表格
        $("#projects-table").bootstrapTable("removeAll");

        console.log("开始获取公益项目长度");
        contractInstance.methods.getProjectsLength().call().then(function(res){
            projectsLength = res;
            console.log("获得公益项目长度："+ projectsLength);
            for (var i = 0; i < projectsLength; i++) {
                console.log("i="+i);
                contractInstance.methods.projects(i).call().then(function(res){
                    console.log("调用project后的i"+i);
                    // 转json字符串
                    var value = JSON.stringify(res);
                    // 转js对象
                    var project = JSON.parse(value);

                    console.log("projectsRes:"+project);
                    if(project.state==0){
                        project.state="未审核";
                    }else if(project.state==1){
                        project.state="待报名";
                    }else if(project.state==2){
                        project.state="正在报名";
                    }else if(project.state==3){
                        project.state="待开始";
                    }else if(project.state==4){
                        project.state="正在进行";
                    }else if(project.state==5){
                        project.state="已结束";
                    }else if(project.state==6){
                        project.state="待确定";
                    }else if(project.state==7){
                        project.state="已确定";
                    }else if(project.state==8){
                        project.state="已取消";
                    }else{
                        project.state="error:状态出错";
                    }
                    console.log("调用getProjectAccount(i)前"+i);

                    //这里必须用index而不能用i,因为call调用是异步的
                    var index = project.ID;
                    contractInstance.methods.getProjectAccount(index).call().then(function(account){
                        console.log("account:"+account);
                        contractInstance.methods.getProjectRealAccount(index).call().then(function(realAccount){
                            contractInstance.methods.getProjectDateList(index).call().then(function(dateList){
                                console.log("dateList:"+dateList);
                                var date=[];
                                for(var j=0; j<dateList.length; j++){
                                    date.push(getDdate(dateList[j]));
                                }
                                var Array={
                                    "ID":project.ID,
                                    "promoterAddress":project.promoterAddress,
                                    'name':utf8to16(web3.utils.hexToAscii(project.name)),
                                    'state':project.state,
                                    'description':project.description,
                                    'dateList':date,
                                    'account':account,
                                    'realAccount':realAccount,
                                    'startApplyTime':getSdate(project.startApplyTime),
                                    'endApplyTime':getSdate(project.endApplyTime)
                                };
                                $("#projects-table").bootstrapTable('append', Array);
                            });
                        });
                        
                    });

                });
                
            }
        });


    });
        
    //----------------------------------------------------------------提交用户参与结果----------------------------------------------------------------
    $("body").delegate("#submit-joinUsers-button","click", function(){
        var projectID=$('#joinUsers-modal-id').val();
        var address=$("#address").html();
        contractInstance.methods.submitProjectFix(projectID).send({from:address,gas:6000000},function(err,res){
            if(err){
                document.getElementById("errorMessage").innerHTML="出错:"+err;
                $('#error-modal').modal('show');
            }else{
                if(res){
                    document.getElementById("errorMessage").innerHTML="提交公益项目参与结果成功，请等待审核人审核！";
                    $('#error-modal').modal('show');
                }else{
                    document.getElementById("errorMessage").innerHTML="该公益项目不处于已结束状态，不可提交该公益项目的参与结果！";
                    $('#error-modal').modal('show');
                }
                
            }
        });
    });

    //----------------------------------------------------------------删除用户报名----------------------------------------------------------------
    $("body").delegate("#delete-joinUsers-button","click", function(){
        var projectID=$('#joinUsers-modal-id').val();
        var address=$("#address").html();
        var row=$("#joinUsers-table").bootstrapTable('getSelections');
        if(row.length==0){
            document.getElementById("errorMessage").innerHTML="请先选择要删除的参与记录！";
            $('#error-modal').modal('show');
        }else{
            document.getElementById("errorMessage").innerHTML="";
            for(var i=0;i<row.length;++i){
                var joinAddress=row[i].joinAddress;
                var joinDate=getDdate(row[i].joinDate);
                if(deleteJoinUsers(joinAddress,joinDate,projectID)){
                    document.getElementById("errorMessage").innerHTML+="删除第"+row+"行记录成功!<br/>";
                    $("#joinUsers-table").bootstrapTable('remove', {
                        field: 'ID',
                        values: row[i].ID
                    });
                }else{
                    document.getElementById("errorMessage").innerHTML+="删除第"+i+"行记录出错!<br/>";
                }
            }
            $('#error-modal').modal('show');
        }
        
        function deleteJoinUsers(_joinAddress,_joinDate,_projectID){
            contractInstance.methods.withdrawUserJoin(_joinAddress,_joinDate,_projectID).send({from:address,gas:6000000},function(err,res){
                if(err){
                    return false;
                }else{
                    if(res){
                        return true;
                    }else{
                        return false;
                    }
                }
            });
        }
        
    });

});
//----------------------------------------------------------------发起项目----------------------------------------------------------------   
function checkProjectForm(){
    //表单验证
    var promoterAddress = $("#address").html();
    var name = document.getElementsByName("form-project-name")[0].value;
    var startApplyTime = document.getElementById("form-project-startApplyTime").value;
    var endApplyTime = document.getElementById("form-project-endApplyTime").value;
    var description = document.getElementById("form-project-description").value;

    var sum = document.getElementsByName("dateLiestANDaccountItem").length;

    var flag=true;

    var dateList=[];
    var accountList=[];
    for(var i = 0; i <sum;++i){
        var date = document.getElementsByName("form-date")[i].value;
        var account = document.getElementsByName("form-account")[i].value;
        if(!(/(^[1-9]\d*$)/.test(account))){
            document.getElementById("form-account-tip"+i).innerHTML="当天所需报名人数应为正整数！";
            flag=false;
        }else{
            document.getElementById("form-account-tip"+i).innerHTML="";
            accountList.push(account);
        }
        if(date==""){
            document.getElementById("form-date-tip"+i).innerHTML="公益项目名称不能为空！";
            flag=false;
        }else if(getUintSdate(endApplyTime)>=getUintDdate(date)){
            document.getElementById("form-date-tip"+i).innerHTML="开展时间不能早于报名截止时间！";
            flag=false;
        }else{
            document.getElementById("form-date-tip"+i).innerHTML=" ";
        }
        dateList.push(getUintDdate(date));
    }

    if(name==""){
        document.getElementById("form-project-name-tip").innerHTML="公益项目名称不能为空！";
        flag=false;
    }else if(name.length>10){
        document.getElementById("form-project-name-tip").innerHTML="公益项目名称过长！";
        flag=false;
    }
    else{
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
    }else if(getUintSdate(endApplyTime)<=getUintSdate(startApplyTime)){
        document.getElementById("form-project-endApplyTime-tip").innerHTML="截止报名时间不能早于开始报名时间！";
        flag=false;
    }else{
		document.getElementById("form-project-endApplyTime-tip").innerHTML=" ";
	}

    //赋值一份数组
    var ary = dateList.slice();
    var nary=ary.sort();
    var error=false;
    for(var i=0;i<ary.length;i++){
　　    if (nary[i]==nary[i+1]){      
            error=true;
            break;
　      }
    }
    if(error){
        document.getElementById("dateLiestRrror-tip").innerHTML="开展日期中存在重复日期！";
        flag=false;
    }else{
        document.getElementById("dateLiestRrror-tip").innerHTML="";
    }

    if(!flag){
        return flag;
    }else{
        startApplyTime=getUintSdate(startApplyTime);
        endApplyTime=getUintSdate(endApplyTime);
        console.log("name:"+name+";startApplyTime:"+startApplyTime+";endApplyTime"+endApplyTime+";dateList:"+dateList+";accountList:"+accountList);
        name=web3.utils.asciiToHex(utf16to8(name));
        console.log("name:"+name+";startApplyTime:"+startApplyTime+";endApplyTime"+endApplyTime+";dateList:"+dateList+";accountList:"+accountList,";promoterAddress:"+promoterAddress);
        
        contractInstance.methods.promoterCertification(promoterAddress).call().then(function(res){
            var PROMOTERFROZEN = res[1];
            if(res[0]){
                contractInstance.methods.submitProjectInformation(name,description,startApplyTime,endApplyTime,accountList,dateList).send({from:promoterAddress,gas:6000000},function(err,res){
                    if(err){
                        alert("err"+err);
                        document.getElementById("errorMessage").innerHTML="出错:"+err;
                        $('#error-modal').modal('show');
                    }else{
                        alert("res"+res);
                        document.getElementById("errorMessage").innerHTML="冻结时间余额:"+PROMOTERFROZEN+",成功创建新项目！<br/>"+"交易哈希:"+res;
                        $('#error-modal').modal('show');
                    }
                });
            }else{
                document.getElementById("errorMessage").innerHTML="由于您的时间余额不足:"+PROMOTERFROZEN+",无法发起一个公益项目！";
                $('#error-modal').modal('show');
            }
        });
        
    }
}






