<template>
  <div class="aps">  
    <div id="homess">
    <form action="/">
      <h4 class="Logintitles">登录</h4>
      <div class="Demarcations"></div>
      <ul class="Loginlists">
        <div class="Loginteachers"><router-link to="/Teacher"><li id="teacher" @click="teacher()">教师登录</li></router-link></div>
        <div class="Loginstudents"><router-link to="/Student" ><li id="student" @click="student()">学生登录</li></router-link></div>
      </ul>
      <div class="Logincontents">
    <form action="#">
      <ul class="SeacherInputlists">
        <li><input class="SeacherInputids" type="text" placeholder="请输入你的姓名"></li>
        <li><input class="SeacherInputidss" type="text" placeholder="请输入你的学号"></li>
        <button class="Seacherlogins" type="suimit">登录</button>
      </ul>
    </form>
      </div>
    </form>
  </div>
</div>
</template>

<style scoped>
.aps{
  width: 1920px;
  height: 1080px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-image: url(../imgs/00.jpg);
}
*{    
    margin: 0px;
    padding: 0px;
    }
  .Students{
    background-color: WHITE;
    width: 500px;
    height: 360px;
     border: 1px solid #F54;
     border-radius: 10px;
     margin:130px auto;
     -moz-box-shadow:1px 1px 3px #333333; -webkit-box-shadow:1px 1px 3px #333333; box-shadow:1px 1px 3px #333333;
  }
  .SeacherInputlists li{
    list-style: none;
    margin-left: 80px;
    margin-top:20px;
  }
  .Seacherlogins{
    width: 110px;
    height: 30px;
    background-color: #1391e8;
    border: none;
    outline: none;
    cursor:pointer;
    border-radius: 6px;
    margin-top: 85px;
    margin-left: 195px;
  }
  .SeacherInputids{
    width: 338px;
    height: 33px;
    border: 1.1px solid #969696;
    outline: none;
  }
  .SeacherInputidss{
    width: 338px;
    height: 33px;
    border: 1.1px solid #969696;
    outline: none;    
  }
  .SeacherInputidss::-webkit-input-placeholder {
    color: #a5a5a5;
    font-size: 12px;
    padding-left: 18px;
  }
  .SeacherInputids::-webkit-input-placeholder {
    color: #a5a5a5;
    font-size: 12px;
    padding-left: 18px;
  }
    #homess{
    background-color: WHITE;
    width: 500px;
    height: 360px;
     border: 1px solid white;
     border-radius: 10px;
    position: absolute;
top: 36.5%;
    left: 38%;
     -moz-box-shadow:1px 1px 3px #333333; -webkit-box-shadow:1px 1px 3px #333333; box-shadow:1px 1px 3px #333333;
  }
  .Loginstudents{
    font-size:13px;
    list-style: none;
    float:left;
    margin-left: 200px;
  }
  .Loginstudents li{
    /* color: #a6a6a6; */
    color: #1a9df8;
    border-bottom: 1px solid #1a9df8;
  }
  .Loginstudents li:active{
    color: #1a9df8;
  }
  .Loginstudents a{
    text-decoration: none;
  }
  .Loginteachers a{
    text-decoration: none;
  }
  .Loginteachers li{
    /* color: #1a9df8; */
    color: #a6a6a6;
  }
  .Loginteachers{
    font-size:13px;
    list-style: none;
    float:left;
    margin-left: 100px;
  }
  .Loginteachers:active{
    color: #1a9df8;
  }
  .Loginlists{
    margin-top: 9px;
  }
  .Loginnavs{
    width: 50px;
    height: 20px;
  }
  .Logincontents{
    margin-top: 65px;
  }
  .Logintitles{
    font-size: 16px;
    margin-left: 234px;
    margin-top: 19px;
    margin-bottom: 10px;
  }
  .Demarcations{
    width: 420px;
    height: 1px;
    border: 0.1px solid #969696;
    margin-left: 40px;
  }
  .demos{
    color: red;
  }
</style>
<script>
  export default {
    el:'homess',
    data:{

    },
    mounted:{
      teacher(){

      },
    }
  }
</script>