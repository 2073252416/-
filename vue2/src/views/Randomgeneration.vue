<template>
  <div class="Epm">
    <div class="Top">
      <ul>
        <li class="Top_img">
          <img src="../imgs/01.jpg" alt />
        </li>
        <li class="Top_li">爱学习</li>
      </ul>
    </div>
    <ul class="Left">
      <router-link to="/Epm">
        <li class="Left_li">题库管理</li>
      </router-link>
      <router-link to="/Marking">
        <li class="Left_li2">试卷批阅</li>
      </router-link>
      <router-link to="/Randomgeneration">
        <li class="Left_li3Sele">随机生成</li>
      </router-link>
      <router-link to="/Manualmarking">
        <li class="Left_li4">人工出卷</li>
      </router-link>
    </ul>
    <div class="Right">
      <div class="Cons">
        <ul class="conents">
          <li>
            <p class="Title">14信息安全第二学期期末考试</p>
            <p class="content">总分100分|考试时长120分钟</p>
            <el-button class="Del" type="danger" round>
              <span>删除</span>
            </el-button>
            <el-button class="Release" type="success" round>
              <span>发布</span>
            </el-button>
            <br />
            <div class="Division"></div>
          </li>
          <li>
            <p class="Title">14信息安全第二学期期末考试</p>
            <p class="content">总分100分|考试时长120分钟</p>
            <el-button class="Del" type="danger" round>
              <span>删除</span>
            </el-button>
            <el-button class="Release" type="success" round>
              <span>发布</span>
            </el-button>
            <br />
            <div class="Division"></div>
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
                  单选题
                  <input type="text" value="30" class="number" />
                </label>
                <label for style="margin-left:61%">
                  题型
                  <input type="text" value="CSS" class="number" />
                </label>
                <el-form :model="form" style="margin-top:10px;">
                  <el-form-item class="formWidth" label="考试范围" :label-width="formLabelWidth">
                    <el-select class="formInputs" v-model="form.region" placeholder="请选择活动区域">
                      <el-option label="五年三考" value="shanghai"></el-option>
                      <el-option label="惨无人道" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog_l">
                  <ul class="VisibleLabel">
                    <li>难度</li>
                    <li>
                      <input type="radio" name="2" id="2" />
                      <label for="2">简单</label>
                    </li>
                    <li>
                      <input type="radio" name="2" id="3" />
                      <label for="3">普通</label>
                    </li>
                    <li>
                      <input type="radio" name="2" id="4" />
                      <label for="4">困难</label>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <label for>
                  多选题
                  <input type="text" value="30" class="number" />
                </label>
                <label for style="margin-left:61%">
                  题型
                  <input type="text" value="HTML" class="number" />
                </label>
                <el-form :model="form" style="margin-top:10px;">
                  <el-form-item class="formWidth" label="考试范围" :label-width="formLabelWidth">
                    <el-select class="formInputs" v-model="form.region" placeholder="请选择活动区域">
                      <el-option label="五年三考" value="shanghai"></el-option>
                      <el-option label="惨无人道" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog_l">
                  <ul class="VisibleLabel">
                    <li>难度</li>
                    <li>
                      <input type="radio" name="3" id="5" />
                      <label for="5">简单</label>
                    </li>
                    <li>
                      <input type="radio" name="3" id="6" />
                      <label for="6">普通</label>
                    </li>
                    <li>
                      <input type="radio" name="3" id="7" />
                      <label for="7">困难</label>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <label for>
                  填空题
                  <input type="text" value="30" class="number" />
                </label>
                <label for style="margin-left:61%">
                  题型
                  <input type="text" value="CSS" class="number" />
                </label>
                <el-form :model="form" style="margin-top:10px;">
                  <el-form-item class="formWidth" label="考试范围" :label-width="formLabelWidth">
                    <el-select class="formInputs" v-model="form.region" placeholder="请选择活动区域">
                      <el-option label="五年三考" value="shanghai"></el-option>
                      <el-option label="惨无人道" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog_l">
                  <ul class="VisibleLabel">
                    <li>难度</li>
                    <li>
                      <input type="radio" name="4" id="8" />
                      <label for="8">简单</label>
                    </li>
                    <li>
                      <input type="radio" name="4" id="9" />
                      <label for="9">普通</label>
                    </li>
                    <li>
                      <input type="radio" name="4" id="10" />
                      <label for="10">困难</label>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <label for>
                  解答题
                  <input type="text" value="30" class="number" />
                </label>
                <label for style="margin-left:61%">
                  题型
                  <input type="text" value="HTML" class="number" />
                </label>
                <el-form :model="form" style="margin-top:10px;">
                  <el-form-item class="formWidth" label="考试范围" :label-width="formLabelWidth">
                    <el-select class="formInputs" v-model="form.region" placeholder="请选择活动区域">
                      <el-option label="五年三考" value="shanghai"></el-option>
                      <el-option label="惨无人道" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog_l">
                  <ul class="VisibleLabel">
                    <li>难度</li>
                    <li>
                      <input type="radio" name="5" id="11" />
                      <label for="11">简单</label>
                    </li>
                    <li>
                      <input type="radio" name="5" id="12" />
                      <label for="12">普通</label>
                    </li>
                    <li>
                      <input type="radio" name="5" id="13" />
                      <label for="13">困难</label>
                    </li>
                  </ul>
                </div>
                <el-button
                  class="Randomgeneration"
                  type="primary"
                  @click="innerVisible = false"
                >确认生成</el-button>
              </li>
            </ul>
          </el-dialog>
          <el-dialog class="dialogs" width="40%" title :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item class="formLabelWidth" label="考试名题" :label-width="formLabelWidth">
                <el-input class="formLabelInput" v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item class="formLabelWidth" label="考试范围" :label-width="formLabelWidth">
                <el-select class="formLabelInputs" v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="五年三考" value="shanghai"></el-option>
                  <el-option label="惨无人道" value="beijing"></el-option>
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
                  <input type="radio" name="1" id="a" />
                  <label for="a">简单</label>
                </li>
                <li>
                  <input type="radio" name="1" id="b" />
                  <label for="b">普通</label>
                </li>
                <li>
                  <input type="radio" name="1" id="c" />
                  <label for="c">困难</label>
                </li>
              </ul>
            </div>
            <div slot="footer" class="dialog-footer">
              <el-button
                style="margin-right: 42%;"
                type="primary"
                @click="dialogFormVisible = false"
              >
                确 定
                生 成
              </el-button>
            </div>
          </el-dialog>
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
      formLabelWidth: "120px",
      formLabelInput: "301px"
    };
  },
  put() {
    axios
      .put("http://127.0.0.1:7001/danxuput" + this.putdanxaunId, {
        name: this.name,
        region: this.region,
        date1: this.date1,
        date2: this.date2,
        resource: this.resource,
        desc: this.desc
      })
      .then(res => {
        this.dialogFormVisible = false;
        (this.name = ""),
          (this.region = ""),
          (this.date1 = ""),
          (this.date2 = ""),
          (this.resource = ""),
          (this.desc = ""),
          this.get();
      });
  },
  get() {
    axios.get("http://127.0.0.1:7001/", {}).then(res => {
      this.type = res.data;
      console.log(this.type);
    });
  }
};
</script>
<style scoped>
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
  width: 9.3%;
  height: 30px;
  font-size: 15px;
  line-height: 1;
  padding: 7px 20px;
  margin-top: 134px;
  margin-left: 46.9%;
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
  background-color: #0f8be1;
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
  background-color: #84a4bb;
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
</style>