var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var abi = JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"projects","outputs":[{"name":"promoterAddress","type":"address"},{"name":"ID","type":"uint256"},{"name":"name","type":"bytes32"},{"name":"state","type":"uint8"},{"name":"description","type":"string"},{"name":"startApplyTime","type":"uint256"},{"name":"endApplyTime","type":"uint256"},{"name":"joinUsersCount","type":"uint256"},{"name":"voteProjectApplyCount","type":"uint256"},{"name":"voteProjectResultCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_ID","type":"uint256"}],"name":"submitProjectFix","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index1","type":"uint256"},{"name":"index2","type":"uint256"}],"name":"getVoteProjectApplyVoteResult","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getProjectDateList","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index1","type":"uint256"},{"name":"index2","type":"uint256"}],"name":"getProjectJoinUsersRemark","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_description","type":"string"},{"name":"_startApplyTime","type":"uint256"},{"name":"_endApplyTime","type":"uint256"},{"name":"_account","type":"uint256[]"},{"name":"_dateList","type":"uint256[]"}],"name":"submitProjectInformation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_joinDate","type":"uint256"}],"name":"joinProject","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getApplyReviewerLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"applyIntroduce","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PROMOTERFROZEN","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"users","outputs":[{"name":"index","type":"uint256"},{"name":"userAddress","type":"address"},{"name":"name","type":"bytes12"},{"name":"password","type":"bytes6"},{"name":"timeCoin","type":"uint256"},{"name":"isApplyReviewer","type":"bool"},{"name":"isReviewer","type":"bool"},{"name":"isVote","type":"bool"},{"name":"voteTo","type":"address"},{"name":"voteCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getProjectAccount","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"applyReviewer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getUsersLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"new_","type":"bytes32"}],"name":"bytes32Tostring","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"getImpeachProjectLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_ID","type":"uint256"},{"name":"_joinAddress","type":"address"},{"name":"_joinDate","type":"uint256"},{"name":"_joinDuration","type":"uint256"}],"name":"setJoinUserDuration","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_introduction","type":"string"}],"name":"applyForReviewer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_userAddress","type":"address"},{"name":"_coin","type":"uint256"}],"name":"frozenCoin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getImpeachReviewerLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index1","type":"uint256"},{"name":"index2","type":"uint256"}],"name":"getVoteProjectApplyVoteReviewer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"impeachProjects","outputs":[{"name":"ID","type":"uint256"},{"name":"projectID","type":"uint256"},{"name":"voteImpeachCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ID","type":"uint256"},{"name":"result","type":"int256"}],"name":"setVoteProjectApply","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getProjectRealAccount","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"impeachReviewers","outputs":[{"name":"ID","type":"uint256"},{"name":"impeachAddress","type":"address"},{"name":"voteImpeachCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_userAddress","type":"address"},{"name":"_coin","type":"uint256"}],"name":"sendCoin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes12"},{"name":"_password","type":"bytes6"}],"name":"checkLogin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_joinAddress","type":"address"},{"name":"_joinDate","type":"uint256"},{"name":"ProjectID","type":"uint256"}],"name":"withdrawUserJoin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"showMyTimeCoin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes12"}],"name":"checkUserName","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ID","type":"uint256"},{"name":"_joinAddress","type":"address"},{"name":"_joinDate","type":"uint256"}],"name":"isJoinedProject","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index1","type":"uint256"},{"name":"index2","type":"uint256"}],"name":"getVoteProjectResultVoteReviewer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"REVIEWERFROZEN","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes12"}],"name":"getUserAddressByName","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ID","type":"uint256"},{"name":"_joinDate","type":"uint256"}],"name":"isFullProject","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getProjectsLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_ID","type":"uint256"},{"name":"_joinAddress","type":"address"},{"name":"_joinDate","type":"uint256"},{"name":"_remark","type":"string"}],"name":"setJoinUserRemark","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawReviewer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_voteTo","type":"address"}],"name":"voteToMyPleasure","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index1","type":"uint256"},{"name":"index2","type":"uint256"}],"name":"getVoteProjectResultVoteResult","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getA","outputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdrawVote","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index1","type":"uint256"},{"name":"index2","type":"uint256"}],"name":"getProjectJoinUsersJoinAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"usersMap","outputs":[{"name":"index","type":"uint256"},{"name":"userAddress","type":"address"},{"name":"name","type":"bytes12"},{"name":"password","type":"bytes6"},{"name":"timeCoin","type":"uint256"},{"name":"isApplyReviewer","type":"bool"},{"name":"isReviewer","type":"bool"},{"name":"isVote","type":"bool"},{"name":"voteTo","type":"address"},{"name":"voteCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index1","type":"uint256"},{"name":"index2","type":"uint256"}],"name":"getProjectJoinUsersJoinDuration","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReviewsLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"reviews","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"promoterCertification","outputs":[{"name":"","type":"bool"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index1","type":"uint256"},{"name":"index2","type":"uint256"}],"name":"getProjectJoinUsersJoinDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_userAddress","type":"address"},{"name":"_name","type":"bytes12"},{"name":"_password","type":"bytes6"}],"name":"addUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ID","type":"uint256"},{"name":"result","type":"int256"}],"name":"setVoteProjectResult","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_a","type":"string"},{"name":"_b","type":"string"}],"name":"strConcat","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"inputs":[{"name":"initalSupply","type":"uint32"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]');
var address = '0xb9a553d42ec78b9fe9b89b5873285935e08c20c5';
var timeContract = new web3.eth.Contract(abi,address);
var contractInstance = timeContract;
var Initialaddress = "0xdd6b0c421f9f9eaF8D563de86EB422921F413237";


//hex转string(不用这个函数，直接用web3.utils.hexToAscii自带的函数就行)
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

//json字符串转hex(不用这个函数，直接用web3.utils.asciiToHex自带的函数就行)
function stringtoHex(str) {
    var val = "0x";
    for (var i = 0; i < str.length; i++) {
        val += str.charCodeAt(i).toString(16);
    }
    return val
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

//表单验证
function LoginCheck(){
    ////alert("1");
    var loginName = document.getElementsByName("loginName");
    var loginPassword = document.getElementsByName("loginPassword");
    var flag=true;
    var reg1 = /^[A-Za-z0-9]{1,12}$/; 
    if(!loginName[0].value.match(reg1)){
        document.getElementById("loginNametip").innerHTML="请输入正确的用户名(1-12为字母或数字)！";
        flag=false;
    }else{
		document.getElementById("loginNametip").innerHTML=" ";
	}
	var reg2 = /^[0-9]{6}$/; 
	if(!loginPassword[0].value.match(reg2)){
        document.getElementById("loginPasswordtip").innerHTML="请输入正确密码(6位数字)！";
        flag=false;
    }else{
		document.getElementById("loginPasswordtip").innerHTML=" ";	
	}
    return flag;
}

//表单验证
function RegisterCheck(){
    var registerName = document.getElementsByName("registerName");
    var registerPassword = document.getElementsByName("registerPassword");
    var registerRePassword = document.getElementsByName("registerRePassword");
    var flag=true;
    var reg1 = /^[A-Za-z0-9]{6,12}$/; 
    if(registerName[0].value.match(reg1)){
        document.getElementById("registerNametip").innerHTML="用户名格式错误(1-12为字母或数字)！";
        flag=false;
    }else{
		document.getElementById("registerNametip").innerHTML=" ";
	}
	var reg2 = /^[0-9]{6}$/; 
	if(!registerPassword[0].value.match(reg2)){
        document.getElementById("registerPasswordtip").innerHTML="密码格式错误(6位数字)！";
        flag=false;
    }else{
		document.getElementById("registerPasswordtip").innerHTML=" ";	
	}
    if(registerPassword[0].value!=registerRePassword[0].value){
        document.getElementById("registerRePasswordtip").innerHTML="两次密码输入不一致！";
        flag=false;
    }else{
		document.getElementById("registerRePasswordtip").innerHTML=" ";	
	}
    return flag;
}

$(document).ready(function(){
    $("body").delegate("#login","click", function(){
        //("login!");
        var flag=LoginCheck();
        if(flag){
            var loginName = document.getElementsByName("loginName");
            var name=web3.utils.asciiToHex(loginName[0].value);
            if(name.length<26){
                var length=26-name.length;
                for(var i=0;i<length;++i){
                    name=name+"0";
                }
            }
            //alert(name);
            contractInstance.methods.checkUserName(name).call().then(function(res){
                if(!res){
                    //alert("res"+res);
                    document.getElementById("errorMessage").innerHTML="该用户名不存在！";
	  	            $('#error-modal').modal('show');
                }else{
                    //alert("res"+res);
                    var loginPassword = document.getElementsByName("loginPassword");
                    var password = stringtoHex(loginPassword[0].value);
                    contractInstance.methods.checkLogin(name,password).call().then(function(res){
                        if(!res){
                            document.getElementById("errorMessage").innerHTML="密码错误！";
	  	                    $('#error-modal').modal('show');
                        }else{
                            contractInstance.methods.getUserAddressByName(name).call().then(function(res){
                                var address = res;
                                contractInstance.methods.usersMap(address).call().then(function(res){
                                    var value = JSON.stringify(res);
                                    // 转js对象
                                    var project = JSON.parse(value);
                                    if(project.isReviewer){
                                        window.location.href="reviewer.html?address="+address;
                                    }else{
                                        window.location.href="reviewer.html?address="+address;
                                    }
                                });
                            });
                        }
                    });
                    
                }
            });
        }
    });
});

$(document).ready(function(){
    $("body").delegate("#register","click", function(){
        var flag=RegisterCheck();
        if(flag){
            var registerName = document.getElementsByName("registerName");
            var name=web3.utils.asciiToHex(registerName[0].value);
            if(name.length<26){
                var length=26-name.length;
                for(var i=0;i<length;++i){
                    name=name+"0";
                }
            }
            //alert(name);
            console.log("name"+name);
            contractInstance.methods.checkUserName(name).call().then(function(res){
                if(res){
                    //alert("res",res);
                    document.getElementById("errorMessage").innerHTML="该用户名已经存在！";
	  	            $('#error-modal').modal('show');
                }else{
                    var registerPassword = document.getElementsByName("registerPassword");
                    var password = web3.utils.asciiToHex(registerPassword[0].value);
                    console.log("password"+password);
                    // 创建以太坊账户
                    web3.eth.personal.newAccount(password).then(function(address){
                        //alert("address"+address);
                        web3.eth.sendTransaction({from:Initialaddress,to:address,value:web3.utils.toWei(('100'))}).then(function(res){
                            console.log("sendTransactionResult",res);
                            web3.eth.personal.unlockAccount(address,password).then(function(res){
                                if(res){
                                    console.log("unlockAccountResult:",res);
                                    contractInstance.methods.addUser(address,name,password).send({from:address,gas:6000000},function(err,res){
                                        if(err){
                                            console.log("addUsererr:"+err);
                                            console.log("addUserres:"+res);
                                            document.getElementById("errorMessage").innerHTML="error:"+err+"<br/>注册失败！";
                                            $('#error-modal').modal('show');
                                        }else{
                                            console.log("res"+res);
                                            document.getElementById("errorMessage").innerHTML="注册成功！";
                                            $('#error-modal').modal('show');
                                        }
                                    });
                                }else{
                                    console.log("unlockAccountResult:",res);
                                }
                                                                    
                            });
                                
                        });
                        
                            
                        
                    });
                    
                }
            });
        }
    });
});