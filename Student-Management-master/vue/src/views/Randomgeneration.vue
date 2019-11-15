<template>
  <div class="Epm">
    <div class="Top">
       <span class="name">盛邦升华</span>
     <hr class="hr">
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
      <router-link to="/Scoremanagement">
        <li class="Left_li4">成绩管理</li>
      </router-link>
       <router-link to="/Studentmanagement">
        <li class="Left_li4">学生管理</li>
      </router-link>
    </ul>
    <div class="Right">
      <div class="Cons">
         <ul class="Cons_top">
          <li class="CT_left">
            <router-link to="/Randomgeneration">
              <h6 class="CT_h">随机生成</h6>
              <div class="mark"></div>
            </router-link>
          </li>
          <li class="CT_right">
            <router-link to="/Manualmarking">
              <h6 class="CT_h2">自动生成</h6>
            </router-link>
          </li>
        </ul>
        <div>
          <el-button class="Random" type="primary" @click="dialogFormVisible = true">
            随机生成
            <i class="el-icon-plus el-icon--right"></i>
          </el-button>
          <el-dialog width="30%" title="修改" :visible.sync="innerVisible" append-to-body class="tmd">
            <ul class="formul">
              <li>
                <label for>
                  题型
                  <input type="text" value="CSS" class="number">
                </label>
                <label for style="margin-left:61%">
                  单选题
                  <input type="text" value="30" class="number">
                </label>
                <el-form :model="form" style="margin-top:10px;">
                  <el-form-item class="formWidth" label="考试范围" :label-width="formLabelWidth">
                    <el-select class="formInputs" v-model="form.region" placeholder="请选择活动区域">
                      <el-option label="五年三考" value="shanghai"></el-option>
                      <el-option label="惨无人道" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
              </li>
              <li>
                <label for>
                  题型
                  <input type="text" value="HTML" class="number">
                </label>
                <label for style="margin-left:61%">
                  多选题
                  <input type="text" value="30" class="number">
                </label>
                <el-form :model="form" style="margin-top:10px;">
                  <el-form-item class="formWidth" label="考试范围" :label-width="formLabelWidth">
                    <el-select class="formInputs" v-model="form.region" placeholder="请选择活动区域">
                      <el-option label="五年三考" value="shanghai"></el-option>
                      <el-option label="惨无人道" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
              </li>
              <li>
                <label for>
                  题型
                  <input type="text" value="CSS" class="number">
                </label>
                <label for style="margin-left:61%">
                  填空题
                  <input type="text" value="30" class="number">
                </label>
                <el-form :model="form" style="margin-top:10px;">
                  <el-form-item class="formWidth" label="考试范围" :label-width="formLabelWidth">
                    <el-select class="formInputs" v-model="form.region" placeholder="请选择活动区域">
                      <el-option label="五年三考" value="shanghai"></el-option>
                      <el-option label="惨无人道" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
              </li>
              <li>
                <label for>
                  题型
                  <input type="text" value="HTML" class="number">
                </label>
                <label for style="margin-left:61%">
                  解答题
                  <input type="text" value="30" class="number">
                </label>
                <el-form :model="form" style="margin-top:10px;">
                  <el-form-item class="formWidth" label="考试范围" :label-width="formLabelWidth">
                    <el-select class="formInputs" v-model="form.region" placeholder="请选择活动区域">
                      <el-option label="五年三考" value="shanghai"></el-option>
                      <el-option label="惨无人道" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
                <el-button
                  class="Randomgeneration"
                  type="primary"
                  @click="innerVisible = false"
                >确认生成</el-button>
              </li>
            </ul>
          </el-dialog>

          <form class="biaodan">
            <ul>
              <li class="li" v-for="(item,index) in items">
                <span class="span1">{{item}}</span><button class="btn1" @click="del(index)">删除</button><button class="btn2">发布</button>
              </li>
            </ul>
            <el-dialog class="dialogs" width="40%" title :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item class="formLabelWidth" label="考试命题" :label-width="formLabelWidth">
                  <el-input
                    class="formLabelInput"
                    v-model="form.name"
                    placeholder="请输入题名"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item class="formLabelWidth" label="考试范围" :label-width="formLabelWidth">
                  <el-select class="formLabelInputs" v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="HTML" value="shanghai"></el-option>
                    <el-option label="CSS" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <div class="bzd">
                  模拟考试题数:
                  <span class="qi">70</span>
                  <router-link to="#">
                    <span class="tz" @click="innerVisible = true">可修改</span>
                  </router-link>
                </div>
              </el-form>
              <div slot="footer" class="dialog_l">
                <ul class="Label">
                  <li>考试难度设置</li>
                  <li>
                    <input type="radio" name="1" id="a">
                    <label for="a">简单</label>
                  </li>
                  <li>
                    <input type="radio" name="1" id="b">
                    <label for="b">普通</label>
                  </li>
                  <li>
                    <input type="radio" name="1" id="c">
                    <label for="c">困难</label>
                  </li>
                </ul>
              </div>
              <div slot="footer" class="dialog-footer">
                <el-button
                  style="margin-right: 42%;"
                  type="submit"
                  @click="tianjia"
                >
                  确 定
                  生 成
                </el-button>
              </div>
            </el-dialog>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      innerVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      items: ["14信息安全第二学期期末考总分100分丨考试时长120分钟"],
      formLabelWidth: "120px",
      formLabelInput: "301px"
    };
  },
  methods: {
    tianjia: function() {
      this.dialogFormVisible = false
       if (this.form.name != "") {
          this.items.push(this.form.name)
          this.form.name = ""
      } else {
          alert("文本框不能为空")
      }
    },
    del:function(index){
      this.items.splice(index,1)
    }
  }
};
</script>
<style scoped>
.Epm {
  font-family: "黑体";
  background-color: #f5f5f5;
}
.name{
  font-size: 23px;
  color: white;
  float: left;
  margin-left: 1.6%;
  margin-top: 0.5%;;
}
.formul li {
  margin-bottom: 20px;
}
.VisibleLabel {
  margin-left: 40px;
  float: left;
  width: 100%;
  margin-right: 1%;
}
.VisibleLabel li {
  list-style: none;
  float: left;
  margin-right: 2.5%;
  margin-left: 31px;
}
.formInputs {
  width: 300px;
  height: 10px;
}
.formWidth {
  margin-left: 4%;
}
.number {
  width: 9%;
  height: 28px;
}

.el-dialog__title {
  line-height: 24px;
  font-size: 18px;
  color: #303133;
}

.Random {
position: absolute;
  width: 9.3%;
  height: 30px;
  font-size: 15px;
  line-height: 1;
  padding: 7px 20px;
  top: 700px;
  left: 46.9%;
}
.Randomgeneration {
  width: 51.3%;
  height: 30px;
  font-size: 15px;
  line-height: 1;
  padding: 7px 20px;
  margin-top: 23px;
  margin-left: 25.9%;
}

.Title {
  font-size: 15px;
  margin-top: 13px;
  margin-left: 1%;
}

.content {
  float: left;
  font-size: 12px;
  margin-left: 1%;
}

.Release {
  height: 25px;
  width: 4.5%;
  text-align: left;
  line-height: 5px;
  float: right;
}

.Del {
  height: 25px;
  width: 4.5%;
  text-align: left;
  line-height: 5px;
  float: right;
  margin-left: 0.5%;
}

.el-button.is-round {
  border-radius: 9px;
  padding: 12px 23px;
}

.Del span {
  margin-left: -7px;
}

.Release span {
  margin-left: -7px;
}

.Division {
  border: 0.8px solid #d5d5d5;
  position: relative;
  margin-top: 10px;
}

.Release {
  background-color: #4a9e50;
}

.Del {
  background-color: #cf0b0c;
}

.conents li {
  width: 100%;
  height: 66px;
}

.Left_li3Sele {
  width: 100%;
  height: 4.9%;
  background-color: #5d8fb2;
  margin-top: 20px;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
}

* {
  margin: 0;
  padding: 0;
}

.Epm {
  width: 100%;
  height: 1080px;
}

.Top {
  height: 4.6%;
  background-color: #02bbfc;

}

li {
  list-style: none;
}

.Top_img {
  margin-left: 2.1%;
  margin-top: 0.2%;
  float: left;
}

.Top_li[data-v-d903fe56] {
  color: #e6f3fb;
  padding-top: 0.6%;
  letter-spacing: 2px;
  margin-left: 0.5%;
  float: left;
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
  color: #189df8;
  text-align: center;
}
.CT_right {
  float: left;
  width: 66px;
  height: 47px;
  margin-top: 15px;
  margin-left: 26.1%;
}
.CT_h2 {
  font-size: 15px;
  color: #b0b0b0;
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
  width: 100%;
  height: 2px;
  margin-top: 17px;
  background-color: #0f8be1;
}
.Left {
  width: 8.3%;
  height: 95.4%;
  background-color: #02bbfc;
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
  float: left;
  width: 100%;
  height: 4.9%;
  background-color: #03bafc;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
  margin-top: 13%;

}

.Left_li3 {
  float: left;
  width: 100%;
  height: 4.9%;
  background-color: #03bafc;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
  margin-top: 13%;

}

.Left_li4 {
  float: left;
  width: 100%;
  height: 4.9%;
  background-color: #03bafc;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
  margin-top: 13%;

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

.dialog-footer {
  margin-top: 75px;
}

.formLabelWidth {
  margin-left: 90px;
}

.dialogs {
  height: 600px;
}

.formLabelInput {
  width: 366px;
}

.formLabelInputs {
  width: 366px;
}
.Label {
  margin-left: 109px;
  float: left;
  width: 100%;
  margin-right: 1%;
}

.Label li {
  list-style: none;
  float: left;
  margin-right: 2.5%;
  margin-left: 31px;
}

.bzd {
  margin-left: 141px;
}

.qi {
  padding-left: 31px;
}

.tz {
  padding-left: 21px;
  color: #70ade4;
}

a {
  text-decoration: none;
}
.Label[data-v-d903fe56] {
  float: left;
  margin-left: 80px;
  margin-top: 30px;
}
.el-button.is-round[data-v-d903fe56] {
  margin-right: 25px;
  margin-left: -15px;
}
/* .el-input__inner{
  float: left;
  border-radius: 20px;
} */
.el-input__inner {
  border-radius: 20px;
}
.el-select .el-input__inner {
  border-radius: 10px;
}
.biaodan ul .li{
  float: left;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #d5d5d5;
  text-align: none;
  float: left;  
}
.span1{
  float: left;
  /* line-height: 60px; */
  margin-top: 20px;
  margin-left: 20px;
  font-size: 16px;
}
.btn1{
  float: right;
  width: 68px;
  height: 25px;
  border-radius: 8px;
  background-color: #4b9e50;
  border-radius: 8px;
  text-align: center;
  line-height: 25px;
  margin-right: 15px;
  margin-top: 30px;
  color: white;
  font-size: 14px;
  border: 1px solid #4b9e50;
}
.btn2{
  float: right;
  width: 68px;
  height: 25px;
  border-radius: 8px;
  background-color: #cf0b0c;
  border-radius: 8px;
  text-align: center;
  line-height: 25px;
  margin-right: 25px;
  margin-top: 30px;
  color: white;
  font-size: 14px;
  border: 1px solid #cf0b0c;
}
.formLabelInput[data-v-d903fe56] {
  width: 71%;
}
.formLabelInputs[data-v-d903fe56]{
  width: 71%;
}
.dialog_l{
  width: 95%;
}

</style>
<style>
.myClass input.el-input__inner {
  border-radius: 15px;
}
.formInputs[data-v-d903fe56]{
  width:80%;
}
</style>
