pragma solidity ^0.4.22;
 
contract Time{
    // 发起者担保
    uint PROMOTERFROZEN=50;
    // 审核人担保
    uint REVIEWERFROZEN=100;
    // 用户数组
    User[] users;
    
    // 一个以太坊用户的地址对应一个用户 
    mapping(address=>User) public usersMap;
 
    
    // 存储公益项目
    Project[] projects;
    // 存储举报
    Impeach[] impeachs;
    
    //  未审核，待报名，正在报名，未开始，正在进行，已结束，已取消
    enum ProjectState{ UNREVIEWED, UNSTRATED, UNDERWAY, FINISHED, CANCELED }
    
    // 初始化函数 
    constructor(uint32 initalSupply) public {
        //初始化默认账号
        User memory user = User({
            name:"0",
            password:"123456",
            timeCoin:initalSupply,
            isApplyReviewer:true,
            isReviewer:true,
            isVote:false,
            voteTo:0x0,
            voteCount:0
        });
        usersMap[msg.sender]=user;
        users.push(user);
        
        // uint[] memory account=new uint[](1);
        // bytes10 startDate;
        // bytes10 endDate;
        // joinUser[] joinUsers;
        // voteProject[] voteProjectApply;
        // voteProject[] voteProjectResult;
        // // 方便使用projects的ID当作下标查找，把下标为0的公益项目留出来
        // Project memory project1 = Project({
        //     ID:0,
        //     name:"预留项目",
        //     state:ProjectState.FINISHED,
        //     description:"为了简化下标获取公益项目，所以下标为0的公益项目保留",
        //     account: account,
        //     startDate:startDate,
        //     endDate:endDate,
        //     joinUsers:joinUsers,
        //     voteProjectApply:voteProjectApply,
        //     voteProjectResult:voteProjectResult
        // });
        Project memory project;
        project.ID=0;
        project.name="预留项目";
        project.state=ProjectState.FINISHED;
        joinUser[] joinUsers;
        joinUser joinUser1;
        joinUsers.push(joinUser1);
        project.joinUsers=joinUsers;
        project.description="为了简化下标获取公益项目，所以下标为0的公益项目保留";
        projects.push(project);
        
        //Project storage project;
        // projects[1].ID=0;
        // projects[1].name="预留项目";
        // projects[1].state=ProjectState.FINISHED;
        // projects[1].description="为了简化下标获取公益项目，所以下标为0的公益项目保留";
        
    
    }
    
    // 用户数据结构
    struct User{
        // 用户名 
        bytes12 name;
        // 密码 
        bytes6 password;
        // 时间余额
        uint32 timeCoin;
        // 是否申请成为审核员
        bool isApplyReviewer;
        // 是否是审核员
        bool isReviewer;
        // 是否已经投票
        bool isVote;
        // 投票对象 
        address voteTo;
        // 收到票数 
        uint voteCount;
    }
    
    
    // 报名记录
    struct joinUser{
        //  报名参加的用户地址 
        address joinAddress;
        //  报名参加日期
        bytes10 joinDate;
        //  该日期该日期的工时 
        bytes10 joinDuration;
        //  备注
        string remark;
    }
    
    // 审核员对项目申请\项目结果的投票
    struct voteProject{
        address voteReviewer;
        // 1是通过，-1是不通过,0是该审核人没有投票
        int voteResult;
    }
    
    // 公益项目数据结构
    struct Project{
        // 公益项目ID
        uint ID;
        // 公益项目名称
        bytes32 name;
        // 公益项目状态
        ProjectState state;
        // 公益项目描述
        string description;
        // 公益项目招募人数
        uint[] account;
        // 公益项目开始日期
        bytes10 startDate;
        // 公益项目结束日期
        bytes10 endDate;
        // 招募的人
        joinUser[] joinUsers;
	    // 规定早8点到晚8可以发起项目, 所以每个项目对应21个审核员的投票1是通过，-1是不通过,0是该审核人没有投票
        // mapping(address=>int) vote;
        // mapping实现不了查找一个项目的所有审核员，而且一个项目有两次审核 (申请审核，结束审核)所以换成以下形式 
        voteProject[] voteProjectApply;
        voteProject[] voteProjectResult;
    }
    
    // 提交的举报记录
    struct Impeach{
        // 提交者地址
        address  sendAddress;
        // 举报项目的编号
        uint projectID;
        // 举报的审核人的地址
        address impeachAddress;
        // 举报理由
        string[] reason;
        // 举报描述
        string[] description;
    }    
    
    
    // ====================================审核人期望======================================
    
    //对公益项目的发起进行审核，链上投票通过或不通过
    function setVoteProjectApply(uint ID,int result){
        // 还需要检查该项目的voteProjectApply中是否已经存在该审核人的审核结果
        require(result==0 || result==1 || result==-1,"voteResult值错误:投票结果值不在(0,-1,1)中");
        voteProject voteProjectApply;
        voteProjectApply.voteReviewer=msg.sender;
        voteProjectApply.voteResult=result;
        projects[ID].voteProjectApply.push(voteProjectApply);
    }
    
    //对公益项目的结果进行审核，链上投票通过或不通过
    function setVoteProjectResult(uint ID,int result){
        // 还需要检查该项目的voteProjectResult中是否已经存在该审核人的审核结果
        require(result==0 || result==1 || result==-1,"voteResult值错误:投票结果值不在(0,-1,1)中");
        voteProject voteProjectResult;
        voteProjectResult.voteReviewer=msg.sender;
        voteProjectResult.voteResult=result;
        projects[ID].voteProjectResult.push(voteProjectResult);
    }
    
    // 提交举报
    function setImpeach(uint projectID,address impeachAddress,string reason,string description)public returns(bool){
        // 需要被举报的审核人是该项目的审核人不然就返回false
        for(uint i=1;i<projects.length;++i){
            for(uint j=0;j<projects[i].voteProjectResult.length;++j){
                if(impeachAddress==projects[i].voteProjectResult[j].voteReviewer){
                    // 要判断被举报人和被举报项目的举报记录是否已经存在
                    // 若不存在，则创建一条举报记录，若存在，则添加到该记录的举报理由和举报数组中
                    bool flag=false;
                    uint number;
                    for(uint x=0;x<impeachs.length;++x){
                        if(impeachs[x].impeachAddress==impeachAddress && impeachs[x].projectID==projectID){
                            flag=true;
                            number=x;
                        }
                    }
                    if(flag){
                        impeachs[number].reason.push(reason);
                        impeachs[number].description.push(description);
                    }else{
                        Impeach impeach;
                        impeach.sendAddress=msg.sender;
                        impeach.projectID=projectID;
                        impeach.impeachAddress=impeachAddress;
                        impeach.reason.push(reason);
                        impeach.description.push(description);
                        impeachs.push(impeach);
                    }
                    return true;
                }
            }
            return false;
            
        }
        
    }

    // 丽瑶的测试代码
    function getA() public view returns(bytes10){
        // string storage description=projects[0].description;
        // return description;
        return projects[0].startDate;
    }
    

}


