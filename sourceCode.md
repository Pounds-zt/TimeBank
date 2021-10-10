```solidity
pragma solidity ^0.4.22;

contract Time{
    // 发起者担保
    uint PROMOTERFROZEN=50;
    // 审核人担保
    uint ADMINFROZEN=100;
    // 用户数
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
            isApplyAdmin:true,
            isAdmin:true,
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
        bool isApplyAdmin;
        // 是否是审核员
        bool isAdmin;
        // 是否已经投票
        bool isVote;
        // 投票对象 
        address voteTo;
        // 收到票数 
        uint voteCount;
    }
        

    enum ProjectState{ UNREVIEWED, UNSTRATED, UNDERWAY, FINISHED, CANCELED }//未审核，未开始，进行中，结束，取消
    
    
    struct joinUser{ 
        //  报名参加的用户地址  
        address joinAddress; 
        //  报名参加日期 
        bytes32 joinDate; 
        //  该日期该日期的工时  
        bytes32 joinDuration; 
        //参加者的备注 
        byte[] remark;  
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
        uint number;
        // 公益项目开始日期
        bytes10 startDate;
        // 公益项目结束日期
        bytes10 endDate;
        // 招募的人和总时长
        mapping(address=>uint) numberMap;
    }


}
```


