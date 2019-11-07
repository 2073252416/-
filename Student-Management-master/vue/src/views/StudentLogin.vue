<template>
  <div class="cont">
    <div class="top">
      <span class="name">盛邦升华</span>
    </div>
    <div class="log">
      <img class="pic"
        style="
            width:100%;
            height: 100%;
            height: 40.7%;opacity: 0.4; 
            filter: alpha(opacity=40);
            "
        src="../imgs/007.jpg"
        alt
      />
      <div id="homess">
        <form action="/">
          <h4 class="Logintitles">登录</h4>
          <div class="Demarcations"></div>

          <div class="Logincontents">
            <form action="#">
              <ul class="SeacherInputlists">
                <li>
                  <input class="SeacherInputids" type="text" v-model="dl" placeholder="请输入你的学号" />
                </li>
                <button class="Seacherlogins" type="suimit">登录</button>
              </ul>
            </form>
          </div>
        </form>
      </div>
    </div>
    <div class="footer">
      <div style="height:50px;">
        <p class="footer_p">
          Copyright @ 2001-2019 Weaver Networkk All Righs Reserved.沪ICP备05040488号
          <br />沪公网安备31011202007203
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  el: "homess",
  data: {
      
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 0.7;
  color: #333;
}
li {
  list-style: none;
}
.cont {
  float: left;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,1)
}
.top {
  width: 100%;
  height: 4.6%;
  background-color: #0f8be1;
}
.log {
  width: 100%;
  height: 100%;
  background-color: black;
}
.conter {
  height: 50%;
  background-color: #ffffff;
}
.footer {
  height: 4.7%;
  background-color: #d3e9f7;
}

.top_img {
  height: 39px;
  width: 37px;
  margin-left: 2.1%;
  margin-top: 0.2%;
  float: left;
}
.top_li {
  float: left;
  color: #e6f3fb;
  padding-top: 0.6%;
  letter-spacing: 2px;
  padding-left: 0.5%;
}
.top_click {
  margin-top: 0.7%;
  color: #73bafa;
  float: right;
  width: 5.7%;
  height: 45.6%;
  text-align: center;
  background-color: #ffffff;
  border: 2px solid #4cb7ff;
  border-radius: 10px;
  margin-right: 5%;
}

.footer_p {
  text-align: center;
  color: #bab9b7;
  font-size: 1.9%;
  padding-top: 10px;
}
#homess {
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
.Loginstudents {
  font-size: 13px;
  list-style: none;
  float: left;
  margin-left: 200px;
}
.Loginstudents li {
  /* color: #a6a6a6; */
  color: #1a9df8;
  border-bottom: 1px solid #1a9df8;
}
.Loginstudents li:active {
  color: #1a9df8;
}
.Loginstudents a {
  text-decoration: none;
}
.Loginteachers a {
  text-decoration: none;
}
.Loginteachers li {
  /* color: #1a9df8; */
  color: #a6a6a6;
}
.Loginteachers {
  font-size: 13px;
  list-style: none;
  float: left;
  margin-left: 100px;
}
.Loginteachers:active {
  color: #1a9df8;
}
.Loginlists {
  margin-top: 9px;
}
.Loginnavs {
  width: 50px;
  height: 20px;
}
.Logincontents {
  margin-top: 65px;
}
.Logintitles {
  font-size: 16px;
  margin-left: 234px;
  margin-top: 19px;
  margin-bottom: 10px;
}
.Demarcations {
  width: 420px;
  height: 1px;
  border: 0.1px solid #969696;
  margin-left: 40px;
}
.demos {
  color: red;
}
* {
  margin: 0px;
  padding: 0px;
}
.Students {
  background-color: WHITE;
  width: 500px;
  height: 360px;
  border: 1px solid #f54;
  border-radius: 10px;
  margin: 130px auto;
  -moz-box-shadow: 1px 1px 3px #333333;
  -webkit-box-shadow: 1px 1px 3px #333333;
  box-shadow: 1px 1px 3px #333333;
}
.SeacherInputlists li {
  list-style: none;
  margin-left: 80px;
  margin-top: 20px;
}
.Seacherlogins {
  width: 110px;
  height: 30px;
  background-color: #1391e8;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  margin-top: 85px;
  margin-left: 195px;
}
.SeacherInputids {
  width: 338px;
  height: 33px;
  border: 1.1px solid #969696;
  outline: none;
}
.SeacherInputids::-webkit-input-placeholder {
  color: #a5a5a5;
  font-size: 12px;
  padding-left: 18px;
}
.footer_p {
  line-height: 18px;
}
.name{
  float: left;
  width: 98.4%;
  height: 50px;
  font-size: 23px;
  line-height: 50px;
  background-color: #01befe;
  color: white;
  padding-left: 1.6%;
}
</style>

