/**
 * 
 */
 window.onload=function() {
	$('#error-button').click(function () {
        $('#modal-close').trigger("click");
    })
    document.getElementById("tag1").onclick = select_tag1;
    document.getElementById("tag2").onclick = select_tag2;
	// 登录
    document.getElementById("navbar-tag1").onclick = function(){
        document.getElementById("tag1").click();
        //select_tag1();
        //$('#nav-tab li:eq(0) a').tab('show');
    };
	// 注册
	document.getElementById("navbar-tag2").onclick = function(){
        document.getElementById("tag2").click();
        //select_tag1();
        //$('#nav-tab li:eq(0) a').tab('show');
    };


};
//登录
function select_tag1() {
    var li1=document.getElementById("nav-tab-li1");
    var li2=document.getElementById("nav-tab-li2");
    var tag1=document.getElementById("tag1");
    var tag2=document.getElementById("tag2");
    li1.className="select";
    tag1.className="select";
    li2.className="unselect";
    tag2.className="unselect";
}
//注册
function select_tag2() {
    var li1=document.getElementById("nav-tab-li1");
    var li2=document.getElementById("nav-tab-li2");
    var tag1=document.getElementById("tag1");
    var tag2=document.getElementById("tag2");
    li2.className="select";
    tag2.className="select";
    li1.className="unselect";
    tag1.className="unselect";
}


