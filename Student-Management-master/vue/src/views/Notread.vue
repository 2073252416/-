<template>
  <div class="Epm">
    <div class="Top">
      <ul>
        <li class="Top_img">
          <img src="../imgs/01.jpg" alt>
        </li>
        <li class="Top_li">爱学习</li>
      </ul>
    </div>
    <ul class="Left">
      <router-link to="/Epm">
        <li class="Left_li">题库管理</li>
      </router-link>
      <router-link to="/Randomgeneration">
        <li class="Left_li2">随机生成</li>
      </router-link>
      <router-link to="/Manualmarking">
        <li class="Left_li3">人工出卷</li>
      </router-link>
      <router-link to="/Examinationpapermanagement">
        <li class="Left_li4">试卷管理</li>
      </router-link>
    </ul>
    <div class="Right">
      <div class="Cons">
        <ul class="Cons_top">
          <li class="CT_left">
            <router-link to="/Marking">
              <h6 class="CT_h">已批阅</h6>
            </router-link>
          </li>
          <li class="CT_right">
            <router-link to="/Notread">
              <h6 class="CT_h2">未批阅</h6>
              <div class="mark"></div>
            </router-link>
          </li>
        </ul>
        <div class="CT_hr"></div>
        <div class="CT_bottom">
          <div class="nr1">
            <p class="nr1_p">14信息安全第二学期期末考试</p>
            <br>
            <p class="nr1_p2">总分100|考试时长120分钟</p>
            <button class="nr1_bt">可查看</button>
          </div>
        </div>
        <el-pagination id="el_pt" background layout="prev, pager, next" :total="80"></el-pagination>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.Epm {
  width: 100%;
  height: 1080px;
  font-family: "黑体";
}
.Top {
  height: 4.6%;
  background-color: #0f8be1;
}
li {
  list-style: none;
  float: left;
}
.Top_img {
  margin-left: 2.1%;
  margin-top: 0.2%;
}
.Top_li {
  color: #e6f3fb;
  margin-top: 0.6%;
  letter-spacing: 2px;
  margin-left: 0.5%;
}
.Left {
  width: 8.3%;
  height: 95.4%;
  background-color: #90b9d5;
  float: left;
}
li {
  text-align: none;
}
.Left_li {
  width: 100%;
  height: 4.9%;
  background-color: #84a4bb;
  margin-top: 50px;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
}
.Left_li2 {
  width: 100%;
  height: 4.9%;
  background-color: #84a4bb;
  margin-top: 20px;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
}
.Left_li3 {
  width: 100%;
  height: 4.9%;
  background-color: #84a4bb;
  margin-top: 20px;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
}
.Left_li4 {
  width: 100%;
  height: 4.9%;
  background-color: #5d8fb2;
  margin-top: 20px;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
}
.Right {
  width: 91.7%;
  height: 95.4%;
  background-color: #e8e8e8;
  float: left;
}
.Cons {
  float: left;
  width: 83.3%;
  height: 100%;
  background-color: #ffffff;
  margin-left: 8.3%;
}
.Cons_top {
  width: 100%;
  height: 50px;
}
.CT_left {
  float: left;
  width: 66px;
  height: 40px;
  margin-top: 15px;
  margin-left: 24.6%;
}
.CT_h {
  font-size: 15px;
  color: #424242;
  text-align: center;
}
.CT_right {
  float: left;
  width: 66px;
  height: 47px;
  margin-top: 11px;
  margin-left: 26.1%;
}
.CT_h2 {
  font-size: 15px;
  color: #424242;
  text-align: center;
  float: left;
}
.CT_sapn {
  float: right;
  margin-top: 12px;
}
.CT_hr {
  width: 93.3%;
  border-bottom: 1px solid #e6e6e6;
  margin-left: 2.6%;
}
.mark {
  float: left;
  width: 100%;
  height: 2px;
  margin-top: 14px;
  background-color: #0f8be1;
  margin-left: -10px;
}
.CT_bottom {
  width: 100%;
  height: 80%;
  margin-top: 3.2%;
  border-top: 1px solid #d4d4d4;
  /* padding-top: 3.2%; */
}
.nr1 {
  width: 100%;
  height: 68px;
  border-bottom: 1px solid #d4d4d4;
}
.nr1_p {
  display: inline-block;
  margin-left: 2.5%;
  margin-top: 16px;
}
.nr1_p2 {
  display: inline;
  margin-left: 2.5%;
}
.nr1_bt {
  margin-right: 0.6%;
  float: right;
  width: 5%;
  height: 25px;
  background-color: #d4d4d4;
  color: #fbfbfb;
  border: 1px solid transparent;
  outline: none;
  border-radius: 4px;
}
#el_pt {
  margin: auto;
  margin-top: 2.3%;
  display: table;
}
a {
  text-decoration: none;
}
</style>
<style>
.CT_right[data-v-6f691d1f] {
  margin-top: 18px;
}
</style>


<script>
export default {};
</script>