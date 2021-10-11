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
    Project[] public projects;
    
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
        uint[] memory account=new uint[](1);
        bytes10 startDate;
        bytes10 endDate;
        joinUser[] memory joinUsers;
        voteProject[] memory voteProjectApply;
        voteProject[] memory voteProjectResult;
        // 方便使用projects的ID当作下标查找，把下标为0的公益项目留出来
        Project memory project1 = Project({
            ID:0,
            name:"预留项目",
            state:ProjectState.FINISHED,
            description:"",
            account: account,
            startDate:startDate,
            endDate:endDate,
            joinUsers:joinUsers,
            voteProjectApply:voteProjectApply,
            voteProjectResult:voteProjectResult
        });
        Project memory project;
        project.ID=0;
        project.name="预留项目";
        project.state=ProjectState.FINISHED;
        project.description="为了简化下标获取公益项目，所以下标为0的公益项目保留";
        projects.push(project1);
        
    
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
    
    
    
    struct joinUser{
        //  报名参加的用户地址 
        address joinAddress;
        //  报名参加日期
        byte joinDate;
        //  该日期该日期的工时 
        byte joinDuration;
    }
    
    //   审核员对项目申请\项目结果的投票
    struct voteProject{
        address voteReviewer;
        // 1是通过，-1是不通过,0是该审核人没有投票
        uint voteResult;
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
    
    // 审核人期望

    //对公益项目进行审核，链上投票通过或不通过
    // function setVoteProjectApply(uint ID,uint result){

         
    // }
    
    function get() public view returns(string){
        return projects[0].description;
    }
    

}


