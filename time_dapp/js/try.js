
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var abi = JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"projects","outputs":[{"name":"ID","type":"uint256"},{"name":"name","type":"bytes32"},{"name":"state","type":"uint8"},{"name":"description","type":"string"},{"name":"joinUsersCount","type":"uint256"},{"name":"voteProjectApplyCount","type":"uint256"},{"name":"voteProjectResultCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"applyIntroduce","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PROMOTERFROZEN","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"users","outputs":[{"name":"userAddress","type":"address"},{"name":"name","type":"bytes12"},{"name":"password","type":"bytes6"},{"name":"timeCoin","type":"uint32"},{"name":"isApplyReviewer","type":"bool"},{"name":"isReviewer","type":"bool"},{"name":"isVote","type":"bool"},{"name":"voteTo","type":"address"},{"name":"voteCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"applyReviewer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"impeachs","outputs":[{"name":"sendAddress","type":"address"},{"name":"projectID","type":"uint256"},{"name":"impeachAddress","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"new_","type":"bytes32"}],"name":"bytes32Tostring","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"ID","type":"uint256"},{"name":"result","type":"int256"}],"name":"setVoteProjectApply","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"REVIEWERFROZEN","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getA","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"review","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"usersMap","outputs":[{"name":"userAddress","type":"address"},{"name":"name","type":"bytes12"},{"name":"password","type":"bytes6"},{"name":"timeCoin","type":"uint32"},{"name":"isApplyReviewer","type":"bool"},{"name":"isReviewer","type":"bool"},{"name":"isVote","type":"bool"},{"name":"voteTo","type":"address"},{"name":"voteCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_userAddress","type":"address"},{"name":"_name","type":"bytes12"},{"name":"_password","type":"bytes6"}],"name":"addUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ID","type":"uint256"},{"name":"result","type":"int256"}],"name":"setVoteProjectResult","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"projectID","type":"uint256"},{"name":"impeachAddress","type":"address"},{"name":"reason","type":"string"},{"name":"description","type":"string"}],"name":"setImpeach","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_a","type":"string"},{"name":"_b","type":"string"}],"name":"strConcat","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"inputs":[{"name":"initalSupply","type":"uint32"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]');
var address = "0xa5010b56135ade5ebcdd7bda7e93e08c662d1422";
var timeContract = new web3.eth.Contract(abi,address);
var contractInstance = timeContract;

$(document).ready(function() {

    //hex转string
    function hextoString(hex) {
        var arr = hex.split("")
        var out = ""
        for (var i = 0; i < arr.length / 2; i++) {
            var tmp = "0x" + arr[i * 2] + arr[i * 2 + 1]
            var charValue = String.fromCharCode(tmp);
            out += charValue
        }
        return out
    }

    //json字符串转hex
    function stringtoHex(str) {
        var val = "0x";
        for (var i = 0; i < str.length; i++) {
            val += str.charCodeAt(i).toString(16);
        }
        return val
    }

    // 表格颜色隔行显示
    var rowStyle = function (row, index) {
        if (index % 2 === 0) {//偶数行
            return {classes: "row-class1"};
        } else {//奇数行
            return {classes: "row-class2"};
        }
    }

    // 加载用户表格
    $("body").delegate("#tag0","click", function(){
        $('#users-table').bootstrapTable({
            method: 'post',             //请求方式（*）
            dataType: "json",
            toolbar: '#score-tool-bar',              //工具按钮用哪个容器
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

        contractInstance.methods.users(0).call().then(function(res){
            // 转json字符串
            var value = JSON.stringify(res);
            // 转js对象
            var user = JSON.parse(value);
            $("#usersMessage").html(value);
            // alert(stringtoHex("123456"));
            var Array={
                "userAddress":user.userAddress,
                'name':hextoString(user.name),
                'password':hextoString(user.password),
                'timeCoin':user.timeCoin,
                'isApplyReviewer':user.isApplyReviewer,
                'isReviewer':user.isApplyReviewer,
                'isVote':user.isVote,
                'voteTo':user.voteTo,
                'voteCount':user.voteCount
            };
            $("#users-table").bootstrapTable('append', Array);
        });
    });
    


    // 加载公益项目表格
    $("body").delegate("#tag1","click", function(){
        $('#projects-table').bootstrapTable({
            method: 'post',             //请求方式（*）
            dataType: "json",
            toolbar: '#score-tool-bar',              //工具按钮用哪个容器
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
                field: 'ID',
                title: 'ID',
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
                sortable: true
            }, {
                field: 'dateList',
                title: '开展日期',
                sortable: true
            }, {
                field: 'account',
                title: '招募人数',
                sortable: true
            }
            ]
        });

        contractInstance.methods.projects(0).call().then(function(res){
            // 转json字符串
            var value = JSON.stringify(res);
            // 转js对象
            var project = JSON.parse(value);
            $("#projectsMessage").html(value);
            // alert(stringtoHex("123456"));
            alert("???"+project.dateList);
            contractInstance.methods.projects(0).dateList(0).call().then(function(res){
                alert("!!!"+res);
            });

            // contractInstance.methods.projects(0).ID取不到，结果是undefined
            var dateList=JSON.parse(project.dateList);
            for(var i=0;i<dateList.length;++i){
                alert(dateList[i]);
            }
            var Array={
                "ID":project.ID,
                'name':hextoString(project.name),
                'state':project.state,
                'description':project.description,
                'dateList':project.dateList,
                'account':project.account
            };
            $("#projects-table").bootstrapTable('append', Array);
        });
    });
        


        
}); 




