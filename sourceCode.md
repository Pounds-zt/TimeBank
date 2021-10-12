```solidity
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
        /*
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
            description:"为了简化下标获取公益项目，所以下标为0的公益项目保留",
            account: account,
            startDate:startDate,
            endDate:endDate,
            joinUsers:joinUsers,
            voteProjectApply:voteProjectApply,
            voteProjectResult:voteProjectResult
        });
        projects.push(project1);
        */
    
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
        bytes10 joinDate;
        //  该日期该日期的工时 
        uint joinDuration;
        //参加者的备注 
        string remark; 
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
    
    
    
    function joinProject(uint _id,bytes10 _startDate,uint _joinDuration,string _remark) public returns(bool){
        Project memory _project = projects[_id];
        joinUser memory _joinUser = joinUser({
            //  报名参加的用户地址
            joinAddress:msg.sender,
            //  报名参加日期
            joinDate:_startDate,
            //  该日期该日期的工时 
            joinDuration:_joinDuration,
            //参加者的备注 
            remark:_remark 
        }); 
        //_startDate sub startDate got the index for account array???
        uint whichDay = 1;
        //how to limit the number of users in one day , or how to mark the number of users in oneday , then judege???
        if(_project.state==ProjectState.UNSTARTED && )
    }
    
    
    //check your record of participating in  projects
    function showMyProject() public returns(Project[]){
        Project[] memory myProjects;
        for(uint i=0; i< projects.length; i++){
            for(uint j=0; j< joinUser.length; j++){
                if(projects[i].joinUser[j].joinAddress == msg.sender){
                    myProjects.push(projects[i]);
                }
            }
        }
        return myProjects;
    }
    
    
    //show my balance
    function showMyTimeCoin() public pure returns(uint32){
        User memory user = usersMap[msg.sender];
        return user.timeCoin;
        
    }
    
    
    //申请
    function applyForReviewer(string introduction) public returns(bool) {
        User memory user = usersMap[msg.sender];
        if(user.timeCoin<100){
            return false;
        }
        else {
            user.isApplyReviewer = true;
            user.timeCoin -= 100;
            //where can  store the introduction ???
            return true;
        }
    }
    
    
    //投票 
    function voteToMyPleasure(address _voteTo) public returns(bool){
        User memory user = usersMap[msg.sender];
        require(usersMap[_voteTo])
        require(!user.isVote)
        User memory myPleasure = usersMap[_voteTo];
        myPleasure.voteCount++;
        user.voteTo = _voteTo;
        return true;
    }
    
    
    
    //撤票 
    function withdrawVote(address _voteTo) public returns(bool){
        User memory user = usersMap[msg.sender];
        require(usersMap[_voteTo])
        require(user.isVote)
        User memory myPleasure = usersMap[_voteTo];
        User memory myOldPleasure = usersMap[user.voteTo];
        myOldPleasure.voteCount--;
        myPleasure.voteCount++;
        return true;
    }
    
    
    function get() public view returns(string){
        
        return projects[0].description;
        
    }
    
      // 普通用户提交项目资料 ,view???系统警告要求
    function submitProjectInformation(bytes32 _name,string _description,uint[] _account,bytes10 _startDate,bytes10 _endDate) public{
        uint id = projects.length + 1;
        
        
        //存在问题:人员名单初始化   storage or memory ??
        joinUser[] memory _joinUsers;
        voteProject[] memory _voteProjectApply;
        voteProject[] memory _voteProjectResult;
        
        Project memory project = Project({
            ID:id,
            name:_name,
            state:ProjectState.UNREVIEWED,
            description:_description,
            account:_account,
            startDate:_startDate,
            endDate:_endDate,
            joinUsers:_joinUsers,
            voteProjectApply:_voteProjectApply,
            voteProjectResult:_voteProjectResult
        });
        
        projects.push(project);
        
        
        /*
        Project storage project;
        project.ID = id;
        project.name = _name;
        project.state = ProjectState.UNREVIEWED;
        project.description = _description;
        project.account = _account;
        
        projects.push(project);
        */

        
    }
    
    
    function test_submitProjectInformation() returns(bytes32){
        bytes32 name = "项目1";
        
        string memory description;
        description = "哈哈哈哈哈哈";
        
        uint[] memory account;
        account[0] = 120;
        
        bytes10 startDate="123";
        
        bytes10 endDate="12";
        
        
        submitProjectInformation(name,description,account,startDate,endDate);
        
        return projects[1].name;
        
    }


 
    // 发起人资格认证 
    function promoterCertification(User _user) internal returns(bool) {
        // 包含自定义结构体作为参数的函数均需要声明为internal
        
        if(_user.timeCoin>=PROMOTERFROZEN){
            return true;
        }else{
            return false;
        }
        
    }
    
    
    function test_promoterCertification() returns(bool){
        User memory user = User({
            name:"0",
            password:"123456",
            timeCoin:120,
            isApplyReviewer:true,
            isReviewer:true,
            isVote:false,
            voteTo:0x0,
            voteCount:0
        });
        return promoterCertification(user);
        
    }

    // 扣钱 
    function frozenCoin(address _userAddress,uint32 _coin) public{
        
        User storage user = usersMap[_userAddress];
        user.timeCoin -= _coin;
        
    }
    
    function test_frozenCoin(uint32 _coin) returns(uint32,uint32){
        
         User memory user = User({
            name:"0",
            password:"123456",
            timeCoin:120,
            isApplyReviewer:true,
            isReviewer:true,
            isVote:false,
            voteTo:0x0,
            voteCount:0
        });
       
        uint32 coin1 = user.timeCoin;
        user.timeCoin -= _coin;
        uint32 coin2 = user.timeCoin;
        
        return (coin1,coin2);
    }

    // 发钱 
    function sendCoin(address _userAddress,uint32 _coin) public{
        
        User storage user = usersMap[_userAddress];
        user.timeCoin += _coin;
        
    }
    
     function test_sendCoin(uint32 _coin) returns(uint32,uint32){
        
         User memory user = User({
            name:"0",
            password:"123456",
            timeCoin:120,
            isApplyReviewer:true,
            isReviewer:true,
            isVote:false,
            voteTo:0x0,
            voteCount:0
        });
       
        uint32 coin1 = user.timeCoin;
        user.timeCoin += _coin;
        uint32 coin2 = user.timeCoin;
        
        return (coin1,coin2);
    }
    
    
    
    //==================以下暂时不方便测试=====================================
    
    // 可以审核普通用户的参与申请 
    function ReviewUserJoin(address _joinAddress,bytes10 _joinDate,uint ProjectID) returns(bool) {
        
        joinUser[] storage _joinUsers = projects[ProjectID].joinUsers;
        for(uint i=0;i<_joinUsers.length;i++){
            if((_joinUsers[i].joinAddress==_joinAddress) && (_joinUsers[i].joinDate==_joinDate)){
                delete _joinUsers[i];
                break;
            }
        }
        
    }
    

    // 备注 
    function setRemark(bytes10 _remark,joinUser storage _joinUser) internal{
        
        _joinUser.remark = _remark;
        
    }
    
    
 
    //公布结果，是公益项目完成的结果【可以申报项目的参与结果（参与用户、各用户的参与时间、备注等）】
    function joinResult(Project _project) internal returns(joinUser[]) {
        
        return _project.joinUsers;
        
    }

     //==================以上暂时不方便测试=====================================

}

```


