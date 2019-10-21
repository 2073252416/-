<template>
  <div class="interface" id="#app">
    <div class="Headerheading">
      <img src="../imgs/01.jpg" alt class="logo">
      <h4 class="Headertitle">爱学习</h4>
    </div>
    <div class="background">
      <a href="/Epm">
        <img src="../imgs/return.jpg" alt class="return">
      </a>
      <div class="content">
        <div class="navbox">
          <ul class="nav">
            <li>
              <a href="/MultiplesElection" style="color: #a9a9a9;">单选题</a>
            </li>
            <li>
              <a href="/SingleElection" style="color: #a9a9a9;">多选题</a>
            </li>
            <li>
              <a href="/GapFilling" style="color: #a9a9a9;">填空题</a>
            </li>
            <li>
              <a href="/Shortanswer" class="shortAnswer">简答题</a>
              <div class="mark"></div>
            </li>
          </ul>
          <hr>
        </div>
        <div class="form">
          <form @submit="TianJia" action="#" class="formbox">
            <ul class="formlist">
              <li>
                <h3 style="font-size:15px;margin-top:10px;font-weight:500">标题题干</h3>
                <textarea
                  type="text"
                  style="width:70.4%;border-radius:10px;height:118px;margin-top:5px;"
                  v-model="title"
                ></textarea>
              </li>
              <li>
                <h6 style="color:red;font-size:11px;margin-top:40px">提示</h6>
                <div class="promptbox">
                  <p style="width:100%">此为手动简答题，您需要在问题下空白处写上正确答案。请不要空题，如果空题，单答案题将判为0分。</p>
                </div>
              </li>
              <li>
                <h3 style="font-size:15px;margin-top:61px;font-weight:500">试题答案</h3>
                <textarea
                  type="text"
                  style="width:70.4%;border-radius:10px;height:78px;margin-top:5px;"
                  v-model="answer"
                ></textarea>
              </li>
              <li>
                <h3 style="font-size:15px;margin-top:150px;font-weight:500;">试题标签</h3>
                <ul class="Label">
                  <li class="simple" @click="simple">简单</li>
                  <li class="ordinary" @click="ordinary">普通</li>
                  <li class="difficulty" @click="difficulty">困难</li>
                </ul>
                <div
                  style="clearfix:after{content:””; display:block; clear:both;padding-top:10px;}"
                ></div>
                <input type="text" class="Labelinput" v-model="demo">
              </li>
            </ul>
            <input type="submit" class="submit" value="保存">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "interface",
  data: function() {
    return {
      demo: "",
      title: "",
      answer: ""
    };
  },
  methods: {
    simple() {
      this.demo = "简单";
    },
    ordinary() {
      this.demo = "普通";
    },
    difficulty() {
      this.demo = "困难";
    },
    TianJia() {
      axios
        .post("http://127.0.0.1:7001/saqpost", {
          title: this.title,
          answer: this.answer,
          difficulty: this.demo
        })
        .then();
    }
  }
};
</script>
<style scoped>
.submit {
  width: 19.6%;
  height: 30px;
  background-color: #4f89b1;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  color: white;
  margin-left: 37%;
  margin-top: 123px;
}
.Labelinput {
  width: 70.4%;
  height: 38px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
}
.Label {
  margin-top: 9px;
}
.Label li {
  float: left;
  margin-right: 1%;
  text-align: center;
}
.simple {
  width: 7.6%;
  height: 28px;
  background-color: #e9e9e9;
  border: none;
  border: 1px solid #c7c7c7;
  outline: none;
  cursor: pointer;
  font-size: 15px;
  color: #979797;
  float: left;
  line-height: 28px;
  border-radius: 10px;
}
.ordinary {
  width: 7.6%;
  height: 28px;
  background-color: #c7c7c7;
  border: none;
  border: 1px solid #c7c7c7;
  outline: none;
  cursor: pointer;
  font-size: 15px;
  color: #fcfcfc;
  float: left;
  line-height: 28px;
  border-radius: 10px;
}
.difficulty {
  width: 7.6%;
  height: 28px;
  background-color: #a2a2a2;
  border: none;
  border: 1px solid #c7c7c7;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  font-size: 15px;
  color: #ffffff;
  float: left;
  line-height: 28px;
}
.promptbox {
  width: 78.2%;
  background-color: #f2f2f2;
  height: 4.1%;
  border: 1px solid #c7c7c7;
}
.promptbox p {
  font-size: 12px;
  color: #6d6d6d;
  line-height: 31px;
  margin-left: 0.9%;
}
.formlist li {
  list-style: none;
}
.form {
  margin-left: 3.9%;
}
.shortAnswer {
  color: #0f8be1;
}
.nav a {
  text-decoration: none;
}
.mark {
  width: 100%;
  height: 2px;
  margin-top: 13px;
  background-color: #0f8be1;
}
.nav {
  width: 87.7%;
  height: 40px;
  margin: 0 auto;
}
.navbox li {
  float: left;
  list-style: none;
  margin-left: 17.2%;
  font-size: 13px;
  color: #a9a9a9;
  margin-top: 10px;
}
hr {
  background-color: #c4c4c4;
  width: 87.7%;
  margin: 0 auto;
}
.content {
  background-color: #ffffff;
  height: 100%;
  width: 53.1%;
  margin: 0 auto;
}
.return {
  position: absolute;
  width: 4.2%;
  height: 4.4%;
}
.background {
  width: 100%;
  height: 1080px;
  background-color: #ececec;
}
* {
  margin: 0;
  padding: 0;
}
.logo {
  margin-left: 2%;
  margin-top: 0.5%;
  float: left;
}
.interface {
  width: 100%;
  height: 1080px;
}
.Headerheading {
  background-color: #0f8be1;
  width: 100%;
  height: 50px;
}
.Headertitle {
  color: #f3f9ff;
  font-size: 15px;
  padding-top: 14px;
  float: left;
  padding-left: 1%;
}
</style>
