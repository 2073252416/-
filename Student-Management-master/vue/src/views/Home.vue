<template>
    <div class="cont">
        <div class="top">
            <ul style="height:50px;">
                <li class="top_img"><img src="../imgs/01.jpg" alt=""></li>
                <li class="top_li">爱学习</li>
            </ul>
        </div>
        <div class="log">
            <img style="
            width:100%;
            height: 40.7%;
            " src="../imgs/00.jpg" alt="">
        </div>
        <div class="apps">
    <div id="homes">
      <form action @submit.prevemt="Denglu">
        <h4 class="Logintitle">登录</h4>
        <div class="Demarcation"></div>
        <ul class="Loginlist">
        </ul>
        <div class="Logincontent">
          <form @submit.prevent="Denglu">
            <ul class="TeacherInputlist">
              <li>
                <input class="TeacherInputuser" v-model="text" type="text" placeholder="请输入用户名" />
              </li>
              <li>
                <input
                  class="TeacherInputpass"
                  v-model="password"
                  type="password"
                  placeholder="请输入密码"
                />
              </li>
              <!-- <button class="Teacherlogin" type="suimit">登录</button> -->
              <input type="submit" value="登录" class="Teacherlogin">
            </ul>
          </form>
        </div>
      </form>
    </div>
  </div>
        <div class="footer">
            <div style="height:50px;">
                <p class="footer_p">Copyright @ 2001-2019 Weaver Networkk All Righs Reserved.沪ICP备05040488号
                <br>沪公网安备31011202007203</p>
            </div>    
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
    return {
      text: "",
      password: ""
    };
  },
  el: "homes",
  methods: {
    Denglu() {
      axios
        .post("http://127.0.0.1:7001/denglu", {
          name: this.text,
          password: this.password
        })
        .then(res => {
          console.log(res.data);
          console.log(res.data);
          if (res.data == "登录成功") {
            this.$router.push("/Epm");
          } else {
            alert(res.data);
          }
        });
    }
    // student(){
    //   var clicks = window.location.href;
    //   if(clicks.indexOf("Student") >=0 ){
    //     document.getElementById('teacher').className = "tea";
    //   }
    // },
  }
};
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 14px;
        line-height: 0.8;
        color: #333;
    }
    li{
        list-style: none;
    }    
    .cont{
        width: 100%;
        height: 100%;
    }
    .top{
        width: 100%;
        height: 4.6%;
        background-color: #0F8BE1;
    }
    .log{
        width: 100%;
        height: 40.7%;
    }
    .conter{
        height: 50%;
        background-color: #FFFFFF;        
    }
    .footer{
        height: 4.7%;
        background-color: #D3E9F7;
    }

    .top_img{
        height:39px ;
        width:37px ;
        margin-left: 2.1%;
        margin-top: 0.2%;
        float: left;
    }
    .top_li{
        float: left;
        color: #E6F3FB;
        padding-top: 0.6%;
        letter-spacing: 2px;
        padding-left: 0.5%;        
    }
    .top_click{
        margin-top: 0.7%;
        color: #73BAFA;
        float: right;
        width: 5.7%;
        height: 45.6%;
        text-align:center;
        background-color: #FFFFFF;
        border: 2px solid #4CB7FF;
        border-radius: 10px;
        margin-right: 5%;        
    }

    .conter_top{
        width: 100%;
        height: 180px;
    }
    .conter_bottom{
        width: 100%;
        height:362px;
    }

    .conter_tils{
        padding-top: 1.7%;
        text-align: center;
        margin-left: 37px;
        font-size: 17px;
        font-weight: normal
    }

        .lefte{
        width: 25.9%;
        height: 100%;
        float: left;
        text-align: center;
        margin-left: 5%;
    }
    .lefte_h{
        text-align: center;
        color: #4E9DEA;
    }
    .lefte_p{
        font-weight:bolder;
    }
    .lefte_p2{
        font-size: 14px;
        color: #898989;
    }
    .lefte_p3{
        font-size: 14px;
        color: #898989;
    }
    .zhong{
        width: 21.9%;
        height: 100%;
        float: left;
        text-align: center;
        margin-left: 9%;
    }
    .zhong_h{
        text-align: center;
        color: #4E9DEA;
    }
    .zhong_p{
        font-weight:bolder;
    }
    .zhong_p2{
        font-size: 13px;
        color: #898989; 
    }
    .riht{
        width: 22.7%;
        height: 100%;
        float: left;
        text-align: center;
        margin-left: 10%;
    }
    .riht_h{
        text-align: center;
        color: #4E9DEA;
    }
    .riht_p{
        font-weight:bolder;
    }
    .riht_p2{
        color: #898989; 
        font-size: 13px;
    }
    .riht_p3{
        color: #898989; 
        font-size: 13px;
    }

    .footer_p{
        text-align: center;
        color: #BAB9B7;
        font-size: 1.9%;
        padding-top: 10px;
    }
* {
  margin: 0px;
  padding: 0px;
}
.TeacherInputlist li {
  list-style: none;
  margin-left: 80px;
  margin-top: 20px;
}
.Teacherlogin {
  width: 110px;
  height: 30px;
  background-color: #1391e8;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  margin-top: 85px;
  margin-left: 195px;
  color: rgb(255, 255, 255);
}
.TeacherInputuser {
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
.TeacherInputpass {
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
#homes {
  background-color: WHITE;
  width: 500px;
  height: 360px;
  border: 1px solid white;
  border-radius: 10px;
  position: absolute;
  top: 36.5%;
  left: 38%;
  -moz-box-shadow: 1px 1px 3px #333333;
  -webkit-box-shadow: 1px 1px 3px #333333;
  box-shadow: 1px 1px 3px #333333;
}
.Loginstudent {
  font-size: 13px;
  list-style: none;
  float: left;
  margin-left: 200px;
}
.Loginstudent li {
  color: #a6a6a6;
}
.Loginstudent li:active {
  color: #1a9df8;
}
.Loginstudent a {
  text-decoration: none;
}
.Loginteacher a {
  text-decoration: none;
}
.Loginteacher li {
  color: #1a9df8;
  border-bottom: 1px solid #1a9df8;
}
.Loginteacher:active {
  color: #1a9df8;
}
.Loginteacher {
  font-size: 13px;
  list-style: none;
  float: left;
  margin-left: 100px;
}
.Loginlist {
  margin-top: 9px;
}
.Loginnav {
  width: 50px;
  height: 20px;
}
.Logincontent {
  margin-top: 65px;
}
.Logintitle {
  font-size: 16px;
  margin-left: 234px;
  margin-top: 19px;
  margin-bottom: 10px;
}
.Demarcation {
  width: 420px;
  height: 1px;
  border: 0.1px solid #969696;
  margin-left: 40px;
}
</style>

