<template>
  <div class="apps">
    <div id="homes">
      <form action @submit.prevemt="Denglu">
        <h4 class="Logintitle">登录</h4>
        <div class="Demarcation"></div>
        <ul class="Loginlist">
          <div class="Loginteacher" id="teacher">
            <router-link to="/Teacher">
              <li>教师登录</li>
            </router-link>
          </div>
          <div class="Loginstudent" id="student">
            <router-link to="/Student">
              <li>学生登录</li>
            </router-link>
          </div>
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
.apps {
  width: 1920px;
  height: 1080px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-image: url(../imgs/00.jpg);
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