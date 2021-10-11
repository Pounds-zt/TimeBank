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
    
    // 初始化函数 
    constructor(uint32 initalSupply) public {
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
    
    enum ProjectState{ UNREVIEWED, UNSTRATED, UNDERWAY, FINISHED, CANCELED }
    
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
        byte[] description;
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
    
    
}


