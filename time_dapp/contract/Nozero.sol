pragma solidity ^0.4.22;
 
contract Time{
    // 发起者担保
    uint public PROMOTERFROZEN=50;
    // 审核人担保
    uint public REVIEWERFROZEN=100;
    // 用户数组
    User[] public users;
    // 获取用户长度 
    function getUsersLength()public view returns(uint){
        return users.length;
    }
    
    // 一个以太坊用户的地址对应一个用户 
    mapping(address=>User) public usersMap;

    
    // 一个地址对应这个人申请成为审核人的资料
    mapping(address=>string) public applyIntroduce;
    
    // 审核人申请人
    address[] public applyReviewer;
    // 获取审核人申请人长度
    function getApplyReviewerLength()public view returns(uint){
        return applyReviewer.length;
    }
    
    //  当天审核人(0位置一直是默认账户 )
    address[] public reviews;
    function getReviewsLength()public view returns(uint){
        return reviews.length;
    }
    
    // 存储公益项目
    Project[] public projects;
    // 获取公益项目长度
    function getProjectsLength()public view returns(uint){
        return projects.length;
    }
    
   

     // 审核人个数
    uint REVIEWCOUNT=21;
    // 审核通过下限人数
    uint PASSCOUNT=11;

    //  未审核，待报名，正在报名，待开始，正在进行，已结束，待确定，已确定，已取消
    enum ProjectState{ UNREVIEWED, WAITINGAPPLY, APPLYING, WAITINGSTART, UNDERWAY, FINISHED, WAITINGFIX, FIXED, CANCELED }
    
    //  待审核，通过，未通过
    enum ImpeachState{ UNREVIEWED, PASSED, UNPASSED }
    
    // 用户数据结构
    struct User{
        // 用户下标
        uint index;
        // 用户地址
        address userAddress;
        // 用户名 
        bytes12 name;
        // 密码 
        bytes6 password;
        // 时间余额
        uint timeCoin;
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
        // 项目发起人 
        address promoterAddress;
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
        // 报名开始时间
        uint startApplyTime;
        // 报名结束时间
        uint endApplyTime;
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
    //获取结构体中数组对象和mapping的方法 
    function getProjectAccount(uint index)public view returns(uint[]){
        return projects[index].account;
    }
    function getProjectRealAccount(uint index)public view returns(uint[]){
        return projects[index].realAccount;
    }
    function getProjectDateList(uint index)public view returns(uint[]){
        return projects[index].dateList;
    }
    
    function getProjectJoinUsersJoinAddress(uint index1,uint index2)public view returns(address){
        return projects[index1].joinUsers[index2].joinAddress;
    }
    function getProjectJoinUsersJoinDate(uint index1,uint index2)public view returns(uint){
        return projects[index1].joinUsers[index2].joinDate;
    }
    function getProjectJoinUsersJoinDuration(uint index1,uint index2)public view returns(uint){
        return projects[index1].joinUsers[index2].joinDuration;
    }
    function getProjectJoinUsersRemark(uint index1,uint index2)public view returns(string){
        return projects[index1].joinUsers[index2].remark;
    }
    
    function getVoteProjectApplyVoteReviewer(uint index1,uint index2)public view returns(address){
        return projects[index1].voteProjectApply[index2].voteReviewer;
    }
    function getVoteProjectApplyVoteResult(uint index1,uint index2)public view returns(int){
        return projects[index1].voteProjectApply[index2].voteResult;
    }
    
    function getVoteProjectResultVoteReviewer(uint index1,uint index2)public view returns(address){
        return projects[index1].voteProjectResult[index2].voteReviewer;
    }
    function getVoteProjectResultVoteResult(uint index1,uint index2)public view returns(int){
        return projects[index1].voteProjectResult[index2].voteResult;
    }
    
    // 项目的举报记录
    struct ImpeachProject{
        // 举报编号 
        uint ID;
        // 举报项目的编号
        uint projectID;
        // 状态
        ImpeachState state;
        // 提交者地址
        address[]  sendAddresses;
        // 举报理由
        string[] reasons;
        // 举报描述
        string[] descriptions;
        // 投票结果 
        mapping(uint=>voteProject) voteImpeachApply;
        uint voteImpeachCount;
    }
    // 审核人举报记录
    struct ImpeachReviewer{
        // 举报编号 
        uint ID;
        // 被举报的审核人的地址
        address impeachAddress;
        // 状态
        ImpeachState state;
        // 提交者地址
        address[]  sendAddresses;
        // 举报理由
        string[] reasons;
        // 举报描述
        string[] descriptions;
        // 投票结果 
        mapping(uint=>voteProject) voteImpeachApply;
        uint voteImpeachCount;
    }
    
    // 存储举报
    ImpeachProject[] public impeachProjects;
    // 获取举报长度
    function getImpeachProjectLength()public view returns(uint){
        return impeachProjects.length;
    }
    
    function getVoteImpeachProjectApplyReviewer(uint index1,uint index2)public view returns(address){
        return projects[index1].voteProjectApply[index2].voteReviewer;
    }
    function getVoteImpeachProjectApplyResult(uint index1,uint index2)public view returns(int){
        return projects[index1].voteProjectApply[index2].voteResult;
    }
    
    // 存储举报
    ImpeachReviewer[] public impeachReviewers;
    // 获取举报长度
    function getImpeachReviewerLength()public view returns(uint){
        return impeachReviewers.length;
    }
    
     function getVoteImpeachReviewerApplyReviewer(uint index1,uint index2)public view returns(address){
        return projects[index1].voteProjectApply[index2].voteReviewer;
    }
    function getVoteImpeachReviewerApplyResult(uint index1,uint index2)public view returns(int){
        return projects[index1].voteProjectApply[index2].voteResult;
    }
    
    

    // ====================================初始化函数====================================
    constructor(uint32 initalSupply) public {
        //初始化默认账号
        User memory user = User({
            index:0,
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
        
        
        applyReviewer.push(msg.sender);
        reviews.push(msg.sender);        
        
        // 初始化预留项目
        Project memory project;
        project.ID=0;
        project.name="预留项目";
        project.state=ProjectState.APPLYING;
        project.description="为了简化下标获取公益项目，所以下标为0的公益项目保留";
        project.startApplyTime=now-6 days;
        project.endApplyTime=now+6 days;
        projects.push(project);
        projects[0].dateList.push(now);
        projects[0].dateList.push(now+1 days);
        projects[0].account.push(4);
        projects[0].account.push(3);
        projects[0].realAccount.push(1);
        projects[0].realAccount.push(1);

        // 测试代码
        joinUser memory _joinUser;
        _joinUser.joinAddress=msg.sender;
        _joinUser.joinDate=now;
        projects[0].joinUsers[projects[0].joinUsersCount]=_joinUser;
        projects[0].joinUsersCount++;

        voteProject memory _voteProjectApply;
        _voteProjectApply.voteReviewer=msg.sender;
        _voteProjectApply.voteResult=1;
        projects[0].voteProjectApply[projects[0].voteProjectApplyCount]=_voteProjectApply;
        projects[0].voteProjectApplyCount++;

        voteProject memory _voteProjectResult;
        _voteProjectResult.voteReviewer=msg.sender;
        _voteProjectResult.voteResult=1;
        projects[0].voteProjectResult[projects[0].voteProjectResultCount]=_voteProjectResult;
        projects[0].voteProjectResultCount++;

        // 初始化预留项目
        Project memory project2;
        
        // ysy
        project2.promoterAddress=msg.sender;
        
        project2.ID=1;
        project2.name="测试项目1";
        project2.state=ProjectState.APPLYING;
        project2.description="测试项目1的描述";
        project2.startApplyTime=now-5 days;
        project2.endApplyTime=now+3 days;
        projects.push(project2);
        projects[1].dateList.push(now);
        projects[1].dateList.push(now+1 days);
        projects[1].account.push(2);
        projects[1].account.push(5);
        projects[1].realAccount.push(1);
        projects[1].realAccount.push(1);

        joinUser memory _joinUser2;
        _joinUser2.joinAddress=msg.sender;
        _joinUser2.joinDate=now;
        projects[1].joinUsers[projects[1].joinUsersCount]=_joinUser;
        projects[1].joinUsersCount++;

        voteProject memory _voteProjectApply2;
        _voteProjectApply2.voteReviewer=msg.sender;
        _voteProjectApply2.voteResult=-1;
        projects[1].voteProjectApply[projects[1].voteProjectApplyCount]=_voteProjectApply2;
        projects[1].voteProjectApplyCount++;

        voteProject memory _voteProjectResult2;
        _voteProjectResult2.voteReviewer=msg.sender;
        _voteProjectResult2.voteResult=-1;
        projects[1].voteProjectResult[projects[1].voteProjectResultCount]=_voteProjectResult2;
        projects[1].voteProjectResultCount++;
    }

    // ====================================普通用户期望======================================

    // 用户申请加入一个公益项目
    function joinProject(uint _id,uint _joinDate) public returns(bool){
        
        // 判断项目是否存在
        require(_id<projects.length,"error:该项目不存在！");
        
        // 判断参加的日期是否在公益项目开展的日期中
        bool flag=false;
        uint dateIndex=0;
        for(uint i=0;i<projects[_id].dateList.length; i++){
            if(_joinDate==projects[_id].dateList[i]){
                flag=true;
                dateIndex=i;
            }
        }
        require(flag,"error:报名日期不在该公益项目的开展日期中！");

        // 判断该项目是否在“正在报名”状态
        require(projects[_id].state==ProjectState.APPLYING,"error:该项目不处于正在报名状态");
        
        //判断用户是否已经参加该项目该日期的公益活动isJoinedProject
        require(!isJoinedProject(_id,msg.sender,_joinDate),"error:该用户已经参加该项目该日期的公益活动");

        // 该日期报名人数没超过该日上线
        require(projects[_id].realAccount[dateIndex]<projects[_id].account[dateIndex],"error:该日报名人数上限");
        
        joinUser memory _joinUser = joinUser({
            // 报名参加的用户地址
            joinAddress:msg.sender,
            // 报名参加日期
            joinDate:_joinDate,
            // 该日期的工时，申请时默认为0，后由发起人提交实际工时
            joinDuration:0,
            //参加者的备注 
            remark:"无"
        }); 

        // 报名成功，该公益项目该日实际报名人数增加
        projects[_id].realAccount[dateIndex]++;

        projects[_id].joinUsers[projects[_id].joinUsersCount]=_joinUser;
        projects[_id].joinUsersCount++;
        
        return true;


    }

    // 查看本人的链上时间余额
    function showMyTimeCoin() public view returns(uint){
        return usersMap[msg.sender].timeCoin;
    }
    
    
    // 质押一定的时间余额（如100小时，作为合格用户保证），提交个人资料，申请成为候选审核人   
    function applyForReviewer(string _introduction) public returns(bool) {
        User storage user = usersMap[msg.sender];
        require(!user.isApplyReviewer,"error:你已经申请成为候选审核人!");
        require(user.timeCoin>=REVIEWERFROZEN,"error:时间余额不足候选审核人抵押时间余额!");
        //冻结抵押的时间余额
        frozenCoin(msg.sender,REVIEWERFROZEN);
        user.isApplyReviewer = true;
        applyReviewer.push(msg.sender);
        applyIntroduce[msg.sender] = _introduction;
        return true;
    }
    
    
    // 撤回审核人申请   
    function withdrawReviewer() public returns(bool) {
        User storage user = usersMap[msg.sender];
        require(user.isApplyReviewer,"error:你未申请成为审核人");
        sendCoin(msg.sender,REVIEWERFROZEN);
        user.isApplyReviewer = false;
        uint index=0;
        for(;index < applyReviewer.length; index++){
            if(applyReviewer[index] == msg.sender)
                break;
        }
        delete applyReviewer[index];
        applyIntroduce[msg.sender] = "";
        return true;
        
    }
    
    // 给候选审核人投票
    function voteToMyPleasure(address _voteTo) public returns(bool){
        User storage user = usersMap[msg.sender];
        require(!user.isVote,"error:您已经投票，一人只能投一票！");
        User storage myPleasure = usersMap[_voteTo];
        myPleasure.voteCount++;
        user.isVote = true;
        user.voteTo = _voteTo;
        return true;
    }
     
    // 给候选审核人撤票 
    function withdrawVote() public returns(bool){
        User storage user = usersMap[msg.sender];
        require(user.isVote,"error:您还未投票！");
        User storage myOldPleasure = usersMap[user.voteTo];
        myOldPleasure.voteCount--;
        user.isVote = false;
        user.voteTo = 0x0;
        return true;
    }
    

    // ====================================发起人期望====================================
    // 普通用户提交项目资料 
    function submitProjectInformation(bytes32 _name,string _description,uint _startApplyTime,uint _endApplyTime,uint[] _account,uint[] _dateList) public{
        require(usersMap[msg.sender].timeCoin>=PROMOTERFROZEN,"error:时间余额不足发起人抵押时间余额!");
        uint id = projects.length;
        Project memory project ;
        project.promoterAddress=msg.sender;
        project.ID = id;
        project.name = _name;
        project.description = _description;
        project.account = _account;
        project.dateList = _dateList;
        project.realAccount = new uint[](_dateList.length);
        project.startApplyTime=_startApplyTime;
        project.endApplyTime=_endApplyTime;
        //默认是0，可以不写，防错，先放着
        project.joinUsersCount = 0;
        project.voteProjectResultCount = 0;
        project.voteProjectApplyCount = 0;
        projects.push(project);
        
         // 每次申请项目的时候初始化审核投票mapping
        // >=21 

        if((applyReviewer.length-1)>=REVIEWCOUNT){ 
             // 每次申请项目的时候初始化审核投票mapping（每次项目审核失败被取消的时候，会清空原本的voteProjectApply）  但这个还没测试过 
            for(uint i=0;i<REVIEWCOUNT;i++){ 
                voteProject memory _voteProject; 
                _voteProject.voteReviewer = reviews[i+1]; 
                _voteProject.voteResult = 0; 
                projects[projects.length-1].voteProjectApply[i] = _voteProject; 
            } 
            projects[projects.length-1].voteProjectApplyCount = REVIEWCOUNT; 
        }else{ 
            voteProject memory _voteProject2; 
            _voteProject2.voteReviewer = reviews[0]; 
            _voteProject2.voteResult = 0; 
            projects[projects.length-1].voteProjectApply[0] = _voteProject2; 
            projects[projects.length-1].voteProjectApplyCount = 1; 
        }
        
    }
    
    // 发起人资格认证 (没用到，但是先留着)
    function promoterCertification(User _user) internal returns(bool) {
        // 包含自定义结构体作为参数的函数均需要声明为internal
        if(_user.timeCoin>=PROMOTERFROZEN){
            frozenCoin(_user.userAddress,PROMOTERFROZEN);
            return true;
        }else{
            return false;
        }
        
    }
    
    // 可以审核普通用户的参与申请 (把该用户在该项目某一天的申请撤回)
    function withdrawUserJoin(address _joinAddress,uint _joinDate,uint ProjectID) public returns(bool) {
        Project storage project = projects[ProjectID];
        mapping(uint=>joinUser) _joinUsers = project.joinUsers;
        // uint count = projects[ProjectID].joinUsersCount;
        for(uint i=0;i<project.joinUsersCount;i++){
            // 比较出现错误！！！
            if((_joinUsers[i].joinAddress==_joinAddress) && (_joinUsers[i].joinDate==_joinDate)){
                delete _joinUsers[i];
                project.joinUsersCount--;
                return true;
            }
        }
        return false;
    }
    
    // 扣钱 
    function frozenCoin(address _userAddress,uint _coin) public{
        usersMap[_userAddress].timeCoin -= _coin;
    }
    
     // 发钱 
    function sendCoin(address _userAddress,uint _coin) public{
        usersMap[_userAddress].timeCoin += _coin;
    }
    
    // 备注 
    function setRemark(string _remark,joinUser storage _joinUser) internal{
        _joinUser.remark = _remark;
    }
    
    // ====================================审核人期望====================================
    
    //对公益项目的发起进行审核，链上投票通过或不通过
    function setVoteProjectApply(uint ID,int result) public {
        // 还需要检查该项目的voteProjectApply中是否已经存在该审核人的审核结果
        require(result==0 || result==1 || result==-1,"error:voteResult值错误:投票结果值不在(0,-1,1)中");
        voteProject memory voteProjectApply;
        voteProjectApply.voteReviewer=msg.sender;
        voteProjectApply.voteResult=result;
        uint index=projects[ID].voteProjectApplyCount+1;
        projects[ID].voteProjectApply[index]=voteProjectApply;
    }
    
    //对公益项目的结果进行审核，链上投票通过或不通过
    function setVoteProjectResult(uint ID,int result) public {
        // 还需要检查该项目的voteProjectResult中是否已经存在该审核人的审核结果
        require(result==0 || result==1 || result==-1,"error:voteResult值错误:投票结果值不在(0,-1,1)中");
        voteProject memory voteProjectResult;
        voteProjectResult.voteReviewer=msg.sender;
        voteProjectResult.voteResult=result;
        uint index=projects[ID].voteProjectResultCount+1;
        projects[ID].voteProjectResult[index]=voteProjectResult;
    }
    
    // ====================================工具方法====================================

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

    // ====================================登录模块使用的方法====================================
    // 判断用户名是否存在
    function checkUserName(bytes12 _name) view public returns(bool){
        for(uint i = 0; i < users.length; i++){
            if(users[i].name == _name){
                return true;
            }
        }
        return false;
    }
    
    // 判断用户名和密码
    function checkLogin(bytes12 _name,bytes6 _password) view public returns(bool){
        require(checkUserName(_name),"error:该用户名不存在！");
        for(uint i = 0; i < users.length; i++){
            if(users[i].name == _name){
                if(users[i].password==_password){
                    return true;
                }
            }
        }
        return false;
    }
    
    //根据用户名返回用户地址
    function getUserAddressByName(bytes12 _name)view public returns(address){
        require(checkUserName(_name),"error:该用户名不存在！");
        for(uint i = 0; i < users.length; i++){
            if(users[i].name == _name){
                return users[i].userAddress;
            }
        }
    }
    
    // 添加用户
    function addUser(address _userAddress,bytes12 _name,bytes6 _password) public{
        User memory user = User({
            index:users.length,
            userAddress:_userAddress,
            name:_name,
            password:_password,
            timeCoin:0,
            isApplyReviewer:false,
            isReviewer:false,
            isVote:false,
            voteTo:0x0,
            voteCount:0
        });
        usersMap[msg.sender]=user;
        users.push(user);
    }
    
    // ====================================报名公益项目使用====================================
    //判断用户是否已经报名该日期的该公益活动
    function isJoinedProject(uint ID,address _joinAddress,uint _joinDate) view public returns(bool){
        for(uint i=0;i<projects[ID].joinUsersCount;++i){
            if(projects[ID].joinUsers[i].joinAddress == _joinAddress&&projects[ID].joinUsers[i].joinDate == _joinDate){
                return true;
            }
        }
        return false;
    }

    //当天公益项目人数是否已满
    function isFullProject(uint ID,uint _joinDate) view public returns(bool){
        for(uint i=0;i<projects[ID].dateList.length;++i){
            if(projects[ID].dateList[i] == _joinDate){
                return(projects[ID].account[i]<=projects[ID].realAccount[i]);
            }
            
        }
    }
    
    
    // ==================================投票========================================== 
     function getPromoteProjects(address _address) public view returns(uint[] ids,uint promoteProjectscount){
         uint[] memory promoteProjects0 = new uint[](projects.length);
         uint count = 0;
         for(uint i=1;i<projects.length;i++){
             if(projects[i].promoterAddress == _address){
                 promoteProjects0[count++] = projects[i].ID;
             }
         }
         /*
         uint[] memory promoteProjects = new uint[](count);
         for(i=0;i<count;i++){
            promoteProjects[i]=promoteProjects0[i];
         }
         */
         return (promoteProjects0,count);
     }
     
     function getJoinProjects(address _address) public view returns(uint[] ids,uint joinProjectscount){
         uint[] memory joinProjects0 = new uint[](projects.length);
         uint count = 0;
         for(uint i=1;i<projects.length;i++){
             for(uint j=0;j<projects[i].joinUsersCount;j++){
                 if(projects[i].joinUsers[j].joinAddress == _address){
                     joinProjects0[count++] = projects[i].ID;
                     break;
                 }
             }
         }
          /*
         uint[] memory joinProjects = new uint[](count);
         for(i=0;i<count;i++){
            joinProjects[i]=joinProjects0[i];
         }
         */
         return (joinProjects0,count);
     }
     
     
     // ==================================举报========================================== 
     // Reviewer
     function submitImpeachReviewer(address _impeacheAddress,address _sendAddress,string _reason,string _description) public{
        for(uint i=0;i<impeachReviewers.length;i++){
            // 当已经存在该举报
            if(impeachReviewers[i].impeachAddress==_impeacheAddress){
                impeachReviewers[i].sendAddresses.push(_sendAddress);
                impeachReviewers[i].reasons.push(_reason);
                impeachReviewers[i].descriptions.push(_description);
                
                if(impeachReviewers[i].state==ImpeachState.UNPASSED){
                    impeachReviewers[i].state=ImpeachState.UNREVIEWED;
                    
                     // 每次举报的时候初始化审核投票mapping
                    // >=21 
                    if((applyReviewer.length-1)>=REVIEWCOUNT){ 
                        for(uint j=0;j<REVIEWCOUNT;j++){ 
                            voteProject memory _voteProject; 
                            _voteProject.voteReviewer = reviews[j+1]; 
                            _voteProject.voteResult = 0; 
                            impeachReviewers[i].voteImpeachApply[j] = _voteProject; 
                        } 
                        impeachReviewers[i].voteImpeachCount = REVIEWCOUNT; 
                    }else{ 
                        voteProject memory _voteProject2; 
                        _voteProject2.voteReviewer = reviews[0]; 
                        _voteProject2.voteResult = 0; 
                        impeachReviewers[i].voteImpeachApply[0] = _voteProject2; 
                        impeachReviewers[i].voteImpeachCount = 1; 
                    }
                    
                }
                return;
            }
        }

        // 不存在该举报
        address[] memory _sendAddresses;
        _sendAddresses[0] = _sendAddress;
        
        string[] memory _reasons;
        _reasons[0] = _reason;
        
        string[] memory _descriptions;
        _descriptions[0] = _description;
        
        ImpeachReviewer memory impeachReviewer = ImpeachReviewer({
            ID:impeachReviewers.length,
            impeachAddress:_impeacheAddress,
            state:ImpeachState.UNREVIEWED,
            sendAddresses:_sendAddresses,
            reasons:_reasons,
            descriptions:_descriptions,
            voteImpeachCount:0
        });
        
        impeachReviewers.push(impeachReviewer);
        
        // 每次举报的时候初始化审核投票mapping
        // >=21 
        if((applyReviewer.length-1)>=REVIEWCOUNT){ 
            for(i=0;i<REVIEWCOUNT;i++){ 
                voteProject memory _voteProject3; 
                _voteProject3.voteReviewer = reviews[i+1]; 
                _voteProject3.voteResult = 0; 
                impeachReviewers[impeachReviewers.length-1].voteImpeachApply[i] = _voteProject3; 
            } 
            impeachReviewers[impeachReviewers.length-1].voteImpeachCount = REVIEWCOUNT; 
        }else{ 
            voteProject memory _voteProject4; 
            _voteProject4.voteReviewer = reviews[0]; 
            _voteProject4.voteResult = 0; 
            impeachReviewers[impeachReviewers.length-1].voteImpeachApply[0] = _voteProject4; 
            impeachReviewers[impeachReviewers.length-1].voteImpeachCount = 1; 
        }
    }
    
     // Project
    function submitImpeachProject(uint _projectID,address _sendAddress,string _reason,string _description) public{
        for(uint i=0;i<impeachProjects.length;i++){
            // 当已经存在该举报
            if(impeachProjects[i].projectID==_projectID){
                impeachProjects[i].sendAddresses.push(_sendAddress);
                impeachProjects[i].reasons.push(_reason);
                impeachProjects[i].descriptions.push(_description);
                
                if(impeachProjects[i].state==ImpeachState.UNPASSED){
                    impeachProjects[i].state=ImpeachState.UNREVIEWED;
                    
                    // 每次举报的时候初始化审核投票mapping
                    // >=21 
                    if((applyReviewer.length-1)>=REVIEWCOUNT){ 
                        for(uint j=0;j<REVIEWCOUNT;j++){ 
                            voteProject memory _voteProject; 
                            _voteProject.voteReviewer = reviews[j+1]; 
                            _voteProject.voteResult = 0; 
                            impeachProjects[i].voteImpeachApply[j] = _voteProject; 
                        } 
                        impeachProjects[i].voteImpeachCount = REVIEWCOUNT; 
                    }else{ 
                        voteProject memory _voteProject2; 
                        _voteProject2.voteReviewer = reviews[0]; 
                        _voteProject2.voteResult = 0; 
                        impeachProjects[i].voteImpeachApply[0] = _voteProject2; 
                        impeachProjects[i].voteImpeachCount = 1; 
                    }
                    
                }
                return;
            }
        }

        // 不存在该举报
        address[] memory _sendAddresses=new address[](1);
        _sendAddresses[0] = _sendAddress;
        
        string[] memory _reasons=new string[](1);
        _reasons[0] = _reason;
        
        string[] memory _descriptions=new string[](1);
        _descriptions[0] = _description;
        
        ImpeachProject memory impeachProject = ImpeachProject({
            ID:impeachReviewers.length,
            projectID:_projectID,
            state:ImpeachState.UNREVIEWED,
            sendAddresses:_sendAddresses,
            reasons:_reasons,
            descriptions:_descriptions,
            voteImpeachCount:0
        });
        
        impeachProjects.push(impeachProject);
        
        
        // 每次举报的时候初始化审核投票mapping
        // >=21 
        if((applyReviewer.length-1)>=REVIEWCOUNT){ 
            for(i=0;i<REVIEWCOUNT;i++){ 
                voteProject memory _voteProject3; 
                _voteProject3.voteReviewer = reviews[i+1]; 
                _voteProject3.voteResult = 0; 
                impeachProjects[impeachProjects.length-1].voteImpeachApply[i] = _voteProject3; 
            } 
            impeachProjects[impeachProjects.length-1].voteImpeachCount = REVIEWCOUNT; 
        }else{ 
            voteProject memory _voteProject4; 
            _voteProject4.voteReviewer = reviews[0]; 
            _voteProject4.voteResult = 0; 
            impeachProjects[impeachProjects.length-1].voteImpeachApply[0] = _voteProject4; 
            impeachProjects[impeachProjects.length-1].voteImpeachCount = 1; 
        }
    }
     
    
    // ====================================个人测试代码====================================
    // 丽瑶的测试代码
    function getA() public view returns(uint a,uint b){
        return (users.length,2);
        // return PROMOTERFROZEN;
        
    }
    

}