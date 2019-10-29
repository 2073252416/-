<template>
    <div class="apps">
    <div id="homes">
    <form action="">
      <h4 class="Logintitle">登录</h4>
      <div class="Demarcation"></div>
      <ul class="Loginlist">
        <div class="Loginteacher" id="teacher"><router-link to="/Teacher"><li  @click="teacher()">教师登录</li></router-link></div>
        <div class="Loginstudent" id="student"><router-link to="/Student" ><li  @click="student()">学生登录</li></router-link></div>
      </ul>
      <div class="Logincontent">
    <form action="/Epm">
      <ul class="TeacherInputlist">
        <li><input class="TeacherInputuser" type="text" placeholder="请输入用户名"></li>
        <li><input class="TeacherInputpass" type="password" placeholder="请输入密码"></li>
        <button class="Teacherlogin" type="suimit">登录</button>
      </ul>
    </form>
      </div>
    </form>
  </div>        
    </div>
</template>

<style scoped>
    *{
        margin: 0;
        padding: 0;  
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 14px;
        line-height: 1.42857143;
        color: #333;
    }
    .apps{
        width: 100%;
        height: 1060px;
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-image: url(../imgs/00.jpg);
    }
  .TeacherInputlist li{
    list-style: none;
    height: 39px;
    margin-left: 80px;
    margin-top: 20px;
  }
  .Teacherlogin{
    width: 22%;
    height: 30px;
    background-color: #1391e8;
    border: none;
    outline: none;
    cursor:pointer;
    border-radius: 6px;
    margin-top: 18.8%;
    margin-left: 39.4%;
  }
  .TeacherInputuser{
    width: 338px;
    height: 33px;
    border: 1.1px solid #969696;
    outline: none;
  }
  .TeacherInputuser::-webkit-input-placeholder {
    color: #a5a5a5;
    font-size: 12px;
    padding-left: 18px;
  }
  .TeacherInputpass{
    width: 338px;
    height: 33px;
    border: 1.1px solid #969696;
    outline: none;
  }
  .TeacherInputpass::-webkit-input-placeholder {
    color: #a5a5a5;
    font-size: 12px;
    padding-left: 18px;
  }
  #homes{
    background-color: WHITE;
    width: 26%;
    height: 40.4%;
     border: 1px solid white;
     border-radius: 10px;
    position: absolute;
top: 20.5%;
    left: 36%;
     -moz-box-shadow:1px 1px 3px #333333; -webkit-box-shadow:1px 1px 3px #333333; box-shadow:1px 1px 3px #333333;
  }
  .Loginstudent{
    font-size:13px;
    list-style: none;
    float:left;
    margin-left: 200px;
  }
  .Loginstudent li{
    color: #a6a6a6;
  }
  .Loginstudent li:active{
    color: #1a9df8;
  }
  .Loginstudent a{
    text-decoration: none;
  }
  .Loginteacher a{
    text-decoration: none;
  }
  .Loginteacher li{
    color: #1a9df8;
    border-bottom: 1px solid #1a9df8;
  }
  .Loginteacher:active{
    color: #1a9df8;
  }
  .Loginteacher{
    font-size:13px;
    list-style: none;
    float:left;
    margin-left: 100px;
  }
  .Loginlist{
    padding-top: 9px;
  }
  .Loginnav{
    width: 50px;
    height: 20px;
  }
  .Logincontent{
    padding-top: 10.6%;
    height: 250px;
  }
  .Logintitle{
    font-size: 16px;
    margin-left: 46.6%;
    padding-top: 5.3%;
    padding-bottom: 2.5%;
  }
  .Demarcation{
    width: 84%;
    height: 1px;
    border: 0.1px solid #969696;
    margin-left: 40px;
  }
</style>

<script>
export default {
  el: 'homes',
  methods:{
    student(){
     
      var clicks = window.location.href;
      if(clicks.indexOf("Student") >=0 ){
        document.getElementById('teacher').className = "tea";
      }
    },
   
  }

}
</script>