<template>
  <div class="Epm">
    <div class="Top">
      <span class="name">盛邦升华</span>
    </div>
    <ul class="Left">
      <router-link to="/Examinationpapermanagement">
        <li class="Left_li">试卷管理</li>
      </router-link>
      <router-link to="/Epm">
        <li class="Left_li2">题库管理</li>
      </router-link>
      <router-link to="/Marking">
        <li class="Left_li3">阅卷管理</li>
      </router-link>
      <router-link to="/">
        <li class="Left_li4">成绩管理</li>
      </router-link>
       <router-link to="/studentLogin">
        <li class="Left_lij">学生管理</li>
      </router-link>
    </ul>
    <div class="Right">
      <div class="content">
        <div class="content_top">
          <router-link to="/Randomgeneration">
            <li class="Left_li5">生成试卷</li>
          </router-link>
        </div>
        <div class="content-bottom">
          <hr>
          <ul>
            <li>
              <span class="span1">已判完</span>
              <span class="span2">
                14信息安全第二学期期末考
                <br>总分100分丨考试时长120分钟
              </span>
              <span class="span3">查看</span>
            </li>
            <li>
              <span class="span4">测试中</span>
              <span class="span2">
                14信息安全第二学期期末考
                <br>总分100分丨考试时长120分钟
              </span>
               <span class="span3">查看</span>
            </li>
            <li>
              <span class="span5">测试中</span>
              <span class="span2">
                14信息安全第二学期期末考
                <br>总分100分丨考试时长120分钟
              </span>
            </li>
            <li>
              <span class="span6">待用</span>
              <span class="span2">
                14信息安全第二学期期末考
                <br>总分100分丨考试时长120分钟
              </span>
               <span class="span3">查看</span>
            </li>
          </ul>
          <ul>
            <li>
              <span class="span1">已判完</span>
              <span class="span2">
                14信息安全第二学期期末考
                <br>总分100分丨考试时长120分钟
              </span>
              <span class="span3">查看</span>
            </li>
            <li>
              <span class="span4">测试中</span>
              <span class="span2">
                14信息安全第二学期期末考
                <br>总分100分丨考试时长120分钟
              </span>
               <span class="span3">查看</span>
            </li>
            <li>
              <span class="span5">测试中</span>
              <span class="span2">
                14信息安全第二学期期末考
                <br>总分100分丨考试时长120分钟
              </span>
            </li>
            <li>
              <span class="span6">待用</span>
              <span class="span2">
                14信息安全第二学期期末考
                <br>总分100分丨考试时长120分钟
              </span>
               <span class="span3">查看</span>
            </li>
          </ul>
          <ul>
            <li>
              <span class="span1">已判完</span>
              <span class="span2">
                14信息安全第二学期期末考
                <br>总分100分丨考试时长120分钟
              </span>
              <span class="span3">查看</span>
            </li>
            <li>
              <span class="span4">测试中</span>
              <span class="span2">
                14信息安全第二学期期末考
                <br>总分100分丨考试时长120分钟
              </span>
               <span class="span3">查看</span>
            </li>
            <li>
              <span class="span5">测试中</span>
              <span class="span2">
                14信息安全第二学期期末考
                <br>总分100分丨考试时长120分钟
              </span>
            </li>
            <li>
              <span class="span6">待用</span>
              <span class="span2">
                14信息安全第二学期期末考
                <br>总分100分丨考试时长120分钟
              </span>
               <span class="span3">查看</span>
            </li>
          </ul>
          <ul>
            <li>
              <span class="span1">已判完</span>
              <span class="span2">
                14信息安全第二学期期末考
                <br>总分100分丨考试时长120分钟
              </span>
              <span class="span3">查看</span>
            </li>
            <li>
              <span class="span4">测试中</span>
              <span class="span2">
                14信息安全第二学期期末考
                <br>总分100分丨考试时长120分钟
              </span>
               <span class="span3">查看</span>
            </li>
          </ul>
          <el-pagination class="element" background layout="prev, pager, next" :total="80"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Epm {
  width: 100%;
  height: 1080px;
  font-family: "黑体";
  background-color: #f5f5f5;
}
.Top {
  height: 4.6%;
  background-color: #03bafc;
}
.name{
  font-size: 23px;
  color: white;
  float: left;
  margin-left: 1.6%;
  margin-top: 0.5%;;
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
  background-color: #03bafc;
  float: left;
  margin-top: 0.1%;
}
li {
  text-align: none;
}
.Left_li {
  float: left;
  width: 100%;
  height: 4.9%;
  background-color: #0ea8fe;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
  margin-top: 7%;

}
.Left_li2 {
  width: 100%;
  height: 4.9%;
  background-color: #03bafc;
  margin-top: 13%;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
}
.Left_li3 {
  width: 100%;
  height: 4.9%;
  background-color: #03bafc;
  margin-top: 13%;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
}
.Left_li4 {
  width: 100%;
  height: 4.9%;
  background-color: #03bafc;
  margin-top: 13%;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
}
.Right {
  float: left;
  width: 91.7%;
  height: 95.4%;
  background-color: #e8e8e8;
}
.content {
  float: left;
  width: 80%;
  height: 100%;
  background-color: white;
  margin-left: 10.4%;
}
.content_top {
  float: left;
  width: 100%;
  height: 5.3%;
  border-bottom: 1px solid #d4d4d4;
}
.Left_li5 {
  float: right;
  width: 7.2%;
  height: 65%;
  background-color: #0e8ae0;
  border-radius: 15px;
  margin-top: 0.72%;
  margin-right: 1.45%;
  color: white;
  font-size: 13px;
  text-align: center;
  line-height: 35px;
}
.content-bottom {
  float: left;
  width: 100%;
  height: 95%;
  padding-top: 0.74%;
}
hr {
  float: left;
  width: 100%;
  height: 0.1%;
  background-color: #d4d4d4;
  border: none;
}
.content-bottom ul {
  float: left;
  width: 100%;
  height: 24%;
}
.content-bottom li {
  width: 100%;
  height: 25%;
  border-bottom: 1px solid #d4d4d4;
}
.content-bottom .span1 {
  float: left;
  width: 2%;
  height: 100%;
  background-color: #4a9e50;
  color: white;
  text-align: center;
}
.content-bottom .span2 {
  float: left;
  margin-top: 0.9%;
  margin-left: 0.9%;
}
.content-bottom .span3 {
  float: right;
  width: 5%;
  height: 43.5%;
  background-color: #b5b5b5;
  color: white;
  text-align: center;
  border-radius: 5px;
  margin-top: 1.7%;
  margin-right: 2%;
  font-size: 13px;
  line-height: 25px;
}
.content-bottom .span4 {
  float: left;
  width: 2%;
  height: 100%;
  background-color: #b5b5b5;
  color: white;
  text-align: center;
}
.content-bottom .span5 {
  float: left;
  width: 2%;
  height: 100%;
  background-color: #ce0a0b;
  color: white;
  text-align: center;
}
.content-bottom .span6 {
  float: left;
  width: 2%;
  height: 100%;
  background-color: #ffb21e;
  color: white;
  text-align: center;
  padding-top: 10px;
}
.element {
  clear: both;
  margin-left: 32%;
}
.Left_lij {
  width: 100%;
  height: 4.9%;
  background-color: #03bafc;
  margin-top: 13%;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
}
</style>
