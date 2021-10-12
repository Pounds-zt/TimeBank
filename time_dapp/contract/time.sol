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
    
    // 一个地址对应这个人申请成为审核人的资料
    mapping(address=>string) public Applyintroduce;
    
    // 审核人申请人 
    address[] public ApplyReviewer;
    //  当天审核人 
    address[] public Review;
    // 存储公益项目
    Project[] projects;
    // 存储举报
    Impeach[] impeachs;

    //  未审核，待报名，正在报名，待开始，正在进行，已结束，已取消
    enum ProjectState{ UNREVIEWED, UNSTRATED, UNDERWAY, FINISHED, CANCELED }
    
    // 初始化函数 
    constructor(uint32 initalSupply) public {
        //初始化默认账号
        User memory user = User({
            userAddress:msg.sender,
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
        // joinUser[] memory joinUsers;
        // voteProject[] memory voteProjectApply;
        // voteProject[] memory voteProjectResult;
        // // 方便使用projects的ID当作下标查找，把下标为0的公益项目留出来
        // Project memory project = Project({
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
        //  projects.push(project);
        
        // Project memory project;
        // project.ID=0;
        // project.name="预留项目";
        // project.state=ProjectState.FINISHED;
        // joinUser[] joinUsers;
        // joinUser joinUser1;
        // joinUsers.push(joinUser1);
        // project.joinUsers=joinUsers;
        // project.description="为了简化下标获取公益项目，所以下标为0的公益项目保留";
        // projects.push(project);
        Project memory project;
        project.ID=0;
        project.name="预留项目";
        project.state=ProjectState.FINISHED;
        project.description="为了简化下标获取公益项目，所以下标为0的公益项目保留";
        projects.push(project);
    }
    
    // 用户数据结构
    struct User{
        // 用户地址
        address userAddress;
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
        uint joinDate;
        //  该日期的工时 
        uint joinDuration;
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
        // 公益项目实际招募人数
        uint[] realAccount;
        // 公益项目开展的日期
        uint[] dateList;
        // 招募的人
        mapping(uint=>joinUser) joinUsers;
        uint joinUsersCount;
	    // 规定早8点到晚8可以发起项目, 所以每个项目对应21个审核员的投票1是通过，-1是不通过,0是该审核人没有投票
        // mapping(address=>int) vote;
        // mapping实现不了查找一个项目的所有审核员，而且一个项目有两次审核 (申请审核，结束审核)所以换成以下形式 
        mapping(uint=>voteProject) voteProjectApply;
        uint voteProjectApplyCount;
        mapping(uint=>voteProject) voteProjectResult;
        uint voteProjectResultCount;
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
    
    // ====================================普通用户期望======================================
    // function showProject() public view returns(string){
    //     string memory jsonArray="{";
    //     for(uint i=0;i<projects.length;++i){
    //         jsonArray=strConcat(jsonArray,"{");
    //         uint ID=projects[i].ID;
    //         jsonArray=strConcat(jsonArray,"ID:");
    //         jsonArray=strConcat(jsonArray,string(ID));
    //         bytes32 name=projects[i].name;
    //         ProjectState state = projects[i].state;
            
    //     }
    //     jsonArray=strConcat(jsonArray,"}");
    //     return jsonArray;
    // }
    
    
    // ====================================审核人期望======================================
    
    //对公益项目的发起进行审核，链上投票通过或不通过
    function setVoteProjectApply(uint ID,int result) public {
        // 还需要检查该项目的voteProjectApply中是否已经存在该审核人的审核结果
        require(result==0 || result==1 || result==-1,"voteResult值错误:投票结果值不在(0,-1,1)中");
        voteProject memory voteProjectApply;
        voteProjectApply.voteReviewer=msg.sender;
        voteProjectApply.voteResult=result;
        uint index=projects[ID].voteProjectApplyCount+1;
        projects[ID].voteProjectApply[index]=voteProjectApply;
    }
    
    //对公益项目的结果进行审核，链上投票通过或不通过
    function setVoteProjectResult(uint ID,int result) public {
        // 还需要检查该项目的voteProjectResult中是否已经存在该审核人的审核结果
        require(result==0 || result==1 || result==-1,"voteResult值错误:投票结果值不在(0,-1,1)中");
        voteProject memory voteProjectResult;
        voteProjectResult.voteReviewer=msg.sender;
        voteProjectResult.voteResult=result;
        uint index=projects[ID].voteProjectResultCount+1;
        projects[ID].voteProjectResult[index]=voteProjectResult;
    }
    
    // 提交举报
    function setImpeach(uint projectID,address impeachAddress,string reason,string description)public returns(bool){
        // 需要被举报的审核人是该项目的审核人不然就返回false
        for(uint i=1;i<projects.length;++i){
            for(uint j=0;j<projects[i].voteProjectResultCount;++j){
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
                        Impeach memory impeach;
                        impeach.sendAddress=msg.sender;
                        impeach.projectID=projectID;
                        impeach.impeachAddress=impeachAddress;
                        impeachs.push(impeach);
                        impeachs[impeachs.length].reason.push(reason);
                        impeachs[impeachs.length].description.push(description);
                    }
                    return true;
                }
            }
            return false;
            
        }
        
    }
    
    //bytes转string方法
    function bytes32Tostring(bytes32 new_) pure public returns(string){
      
        uint count = 0; //定义一个计数器
        
        for(uint i=0;i<new_.length;i++){//通过循环判断单个字符是否为0
            bytes1 char = new_[i];
            if(char != 0){ // 如果字符不为0，就将count+1x
                count++;
            }
        }
        
        bytes memory _new = new bytes(count);//此时字节数组的长度变为了count，因为count不包含0
        
        for(uint j = 0;j < count;j++){//进行赋值
            _new[j] = new_[j];
        }
        
        return string(_new);//输出结果
    }
    
    
    // 拼接字符串
    function strConcat(string _a, string _b) pure public returns (string){
        bytes memory _ba = bytes(_a);
        bytes memory _bb = bytes(_b);
        string memory ret = new string(_ba.length + _bb.length);
        bytes memory bret = bytes(ret);
        uint k = 0;
        for (uint i = 0; i < _ba.length; i++)bret[k++] = _ba[i];
        for (i = 0; i < _bb.length; i++) bret[k++] = _bb[i];
        return string(ret);
   } 

    // 丽瑶的测试代码
    function getA() public pure returns(string){
        string memory s1="什么时候";
        string memory s2="去吃饭";
        string memory s3=strConcat(s1,s2);
        return s3;
    }
    

}


