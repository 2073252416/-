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
       <router-link to="/">
        <li class="Left_lij">学生管理</li>
      </router-link>
    </ul>
    <div class="Right">
      <div class="Cons">
        <ul class="Cons_top">
          <li class="CT_left">
            <img style="float: left;" src="../imgs/06.jpg" alt>
            <h6 style="float: left;" class="CT_h">试题数量</h6>
            <span style="float:right;margin-top: 12px;">5</span>
          </li>
          <li class="CT_right">
            <img style="float: left;" src="../imgs/07.jpg" alt>
            <h6 style="float: left;" class="CT_h2">考试次数</h6>
            <span style="float:right;margin-top: 12px;">5</span>
          </li>
        </ul>
        <div style="width: 93.3%;border-bottom: 1px solid #E6E6E6;margin-left: 2.6%;"></div>
        <template>
          <ul class="CT_zhong">
            <button class="shanchu">删除</button>
            <li class="CT_lits">试题管理</li>
            <!-- <router-l  ink to=""><li class="CtLright" @click="open(scope.row.id)">删除</li></router-link> -->
            <router-link to>
              <li class="CtLright2">模板录入</li>
            </router-link>
            <router-link to="/MultiplesElection">
              <li class="CtLright3">我要出题 +</li>
            </router-link>
          </ul>
          <el-table
            ref="singleTable"
            border="boolean"
            :data="tableData"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 96.15%;margin-left:27px;margin-top:10px"
          >
            <!-- <el-table-column ref="multipleTable" :data="tableData" tooltip-effect="dark" width="10" @selection-change="handleSelectionChange"></el-table-column> -->
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column type="index" prop="date" label="#" sortable width="70"></el-table-column>
            <el-table-column prop="date" label="试题题干" sortable width="835">
              <template slot-scope="scope">{{scope.row.Choice_question}}</template>
            </el-table-column>
            <el-table-column prop="date" label="试题难度" sortable width="150">
              <template slot-scope="scope" id="one">{{scope.row.four}}</template>
            </el-table-column>
            <el-table-column prop="date" label="题型" width="100" sortable show-overflow-tooltip>
              <template slot-scope="scope">{{scope.row.Question}}</template>
            </el-table-column>
            <el-table-column prop="date" label="分数" width="80" sortable show-overflow-tooltip>
              <template slot-scope="scope">{{scope.row.Fraction}}</template>
            </el-table-column>
            <el-table-column prop="date" label="操作" width="112" sortable show-overflow-tooltip>
              <template slot-scope="scope">
                <el-button
                  @click="putdanxuan(scope.row.id)"
                  prevent="deleteRow(scope.$index, tableData)"
                  type="text"
                  size="small"
                >操作</el-button>
                <el-button
                  @click="data(scope.row.id)"
                  prevent="deleteRow(scope.$index, tableData)"
                  type="text"
                  size="small"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-dialog title :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item :label-width="formLabelWidth">
                <span>试题标题</span>
                <el-input v-model="putclazz" :placeholder="holder" autocomplete="off"></el-input>
                <br>
                <span>试题选项</span>
                <br>
                <span>(A)</span>
                <el-input v-model="putA" autocomplete="off"></el-input>
                <br>
                <span>(B)</span>
                <el-input v-model="putB" autocomplete="off"></el-input>
                <br>
                <span>(C)</span>
                <el-input v-model="putC" autocomplete="off"></el-input>
                <br>
                <span>(D)</span>
                <el-input v-model="putD" autocomplete="off"></el-input>
                <br>
                <span>试题答案</span>
                <input
                  type="radio"
                  name="1"
                  value="a"
                  checked
                  style="margin-top:17px;"
                  v-model="putThree"
                >A
                <input
                  type="radio"
                  name="1"
                  value="b"
                  checked
                  style="margin-left:3.6%;"
                  v-model=" putThree"
                >B
                <input
                  type="radio"
                  name="1"
                  value="c"
                  checked
                  style="margin-left:3.6%;"
                  v-model=" putThree"
                >C
                <input
                  type="radio"
                  name="1"
                  value="d"
                  checked
                  style="margin-left:3.6%;"
                  v-model=" putThree"
                >D
                <br>
                <span>试题难度</span>
                <ul class="Label">
                  <li class="simple" @click="simple">简单</li>
                  <li class="ordinary" @click="ordinary">普通</li>
                  <li class="difficulty" @click="difficulty">困难</li>
                </ul>
                <div
                  style="clearfix:after{content:””; display:block; clear:both;padding-top:10px;}"
                ></div>
                <el-input v-model="putFlour" autocomplete="off"></el-input>
                <br>
                <span>题型</span>
                <el-input v-model="putQuestion" autocomplete="off"></el-input>
                <br>
                <span>分数</span>
                <el-input v-model="putFraction" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="put()">确 定</el-button>
            </div>
          </el-dialog>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { watch } from "fs";

export default {
  data() {
    return {
      putdanxaunId: "",
      tableData: [],
      putclazz: "",
      putA: "",
      putB: "",
      putC: "",
      putD: "",
      putThree: "",
      putFlour: "",
      putFraction: "",
      putQuestion: "",
      dialogFormVisible: false,
      form: {
        putclazz: "",
        putA: "",
        putB: "",
        putC: "",
        putD: "",
        putThree: "",
        putFlour: "",
        putFraction: "",
        putQuestion: ""
      },
      formLabelWidth: "120px"
    };
    var a = document.getElementById("sj").value;
    this.putclazz = this.a;
  },

  methods: {
    simple() {
      this.putFlour = "简单";
    },
    ordinary() {
      this.putFlour = "普通";
    },
    difficulty() {
      this.putFlour = "困难";
    },
    putdanxuan(id) {
      this.dialogFormVisible = true;
      this.putdanxaunId = id;
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    data(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(res => {
          axios
            .delete("http://127.0.0.1:7001/danxuadelete" + id, {})
            .then(res => {
              this.studentList = res.data;
              location.reload(false)
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    put() {
      axios
        .put("http://127.0.0.1:7001/danxuput" + this.putdanxaunId, {
          putclazz: this.putclazz,
          putA: this.putA,
          putB: this.putB,
          putC: this.putC,
          putD: this.putD,
          putThree: this.putThree,
          putFlour: this.putFlour,
          putFraction: this.putFraction,
          putQuestion: this.putQuestion
        })
        .then(res => {
          this.dialogFormVisible = false;
          this.clazzList = res.data;
          this.get(), (this.putclazz = "");
          this.putA = "";
          this.putB = "";
          this.putC = "";
          this.putD = "";
          this.putThree = "";
          this.putThree = "";
          this.putFlour = "";
          this.putFraction = "";
          this.putQuestion = "";
        });
    },
   get() {
      axios.get("http://127.0.0.1:7001/danxuaget", {}).then(res => {
        this.tableData = res.data;
        console.log(this.tableData);
      });
    }
  },
  created() {
    this.get();
  }
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}
.element.style {
  width: 98%;
}
.Epm {
  width: 100%;
  height: 1080px;
  font-family: "黑体";
  background-color: #f5f5f5;
}
.Top {
  height: 4.6%;
  background-color: #02bbfc;
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
  background-color: #03bafc;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
  margin-top: 7%;

}
.Left_li2 {
  width: 100%;
  height: 4.9%;
  background-color: #0ea8fe;
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
  height: 71px;
}
.CT_left {
  float: left;
  width: 147px;
  height: 40px;
  margin-top: 15px;
  margin-left: 24.6%;
}
.CT_h {
  font-size: 15px;
  color: #424242;
  margin-left: 20px;
  text-align: center;
  margin-top: 12px;
}
.CT_right {
  float: left;
  width: 161px;
  height: 47px;
  margin-top: 11px;
  margin-left: 26.1%;
}
.CT_h2 {
  font-size: 15px;
  color: #424242;
  margin-left: 20px;
  text-align: center;
  margin-top: 12px;
}
.CT_zhong {
  height: 3.7%;
  width: 100%;
  border-bottom: 1px solid #d4d4d4;
}
.CT_lits {
  font-size: 15px;
  color: #424242;
  margin-top: 10px;
  margin-left: 21px;
  font-weight: bolder;
}
.CtLright {
  margin-right: 20px;
  font-size: 1%;
  margin-top: 5px;

  padding-top: 3px;
  width: 5.1%;
  height: 20px;
  color: #ffffff;
  float: right;
  text-align: center;
  border-radius: 5px;
  background-color: #cf0b0c;
}
.CtLright2 {
  margin-right: 20px;
  font-size: 1%;
  margin-top: 5px;
  padding-top: 3px;
  width: 5.1%;
  height: 20px;
  color: #ffffff;
  float: right;
  text-align: center;
  border-radius: 5px;
  background-color: #4a9e50;
}
.CtLright3 {
  margin-right: 20px;
  font-size: 1%;
  margin-top: 5px;
  padding-top: 3px;
  width: 5.1%;
  height: 20px;
  color: #ffffff;
  float: right;
  text-align: center;
  border-radius: 5px;
  background-color: #1490e6;
}
.CT_bottom {
  width: 100%;
  height: 88%;
}
.F_h {
  float: left;
  color: #424242;
  font-size: 15px;
  margin-left: 1.1%;
  margin-top: 1.9%;
}
.F_input {
  float: left;
  width: 6.3%;
  margin-left: 0.5%;
  margin-top: 1.8%;
  height: 26px;
  border: 1.2px solid #000000;
}
.Content {
  width: 93.8%;
  height: 820px;
  border: 1px solid #d3d3d3;
  margin-left: 3.1%;
  margin-top: 1%;
}
.footer {
  width: 28%;
  height: 35px;
  /* border: 1px solid #D3D3D3; */
  margin: auto;
  margin-top: 2.3%;
}
.footer2 {
  width: 33px;
  height: 33px;
  line-height: 33px;
  text-align: center;
  border: 1px solid #d4d4d4;
  margin-left: 1.4%;
}
.footer3 {
  width: 11px;
  height: 21px;
  padding-left: 8px;
  padding-top: 11px;
}
.Content_li {
  width: 100%;
  height: 38px;
  border-bottom: 1px solid #d3d3d3;
}
.to_top {
  width: 0;
  height: 0;
  display: initial;
  border-bottom: 10px solid #ccc;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  float: right;
  margin-top: 7px;
}
.to_bottom {
  width: 0;
  height: 0;
  /* display: initial; */
  border-top: 10px solid #ccc;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  /* float: right; */
  /* margin-top: 7px; */
  position: absolute;
  left: 23.59%;
  top: 194px;
}
.to_top1 {
  width: 0;
  height: 0;
  display: initial;
  border-bottom: 10px solid #ccc;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  float: right;
  margin-top: 7px;
  margin-right: 1px;
}
.to_bottom1 {
  width: 0;
  height: 0;
  border-top: 10px solid #ccc;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  position: absolute;
  left: 63.2%;
  top: 194px;
}
.to_top2 {
  width: 0;
  height: 0;
  display: initial;
  border-bottom: 10px solid #ccc;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  float: right;
  margin-top: 7px;
  margin-right: 1px;
}
.to_bottom2 {
  width: 0;
  height: 0;
  border-top: 10px solid #ccc;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  position: absolute;
  left: 70.4%;
  top: 194px;
}
.to_top3 {
  width: 0;
  height: 0;
  display: initial;
  border-bottom: 10px solid #ccc;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  float: right;
  margin-top: 7px;
  margin-right: 1px;
}
.to_bottom3 {
  width: 0;
  height: 0;
  border-top: 10px solid #ccc;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  position: absolute;
  left: 76.75%;
  top: 194px;
}
.to_top4 {
  width: 0;
  height: 0;
  display: initial;
  border-bottom: 10px solid #ccc;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  float: right;
  margin-top: 7px;
  margin-right: 1px;
}
.to_bottom4 {
  width: 0;
  height: 0;
  border-top: 10px solid #ccc;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  position: absolute;
  left: 81.55%;
  top: 194px;
}
.to_top5 {
  width: 0;
  height: 0;
  display: initial;
  border-bottom: 10px solid #ccc;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  float: right;
  margin-top: 7px;
  margin-right: 1px;
}
.to_bottom5 {
  width: 0;
  height: 0;
  border-top: 10px solid #ccc;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  position: absolute;
  left: 85.4%;
  top: 194px;
}
.to_top6 {
  width: 0;
  height: 0;
  display: initial;
  border-bottom: 10px solid #ccc;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  float: right;
  margin-top: 7px;
  margin-right: 1px;
}
.to_bottom6 {
  width: 0;
  height: 0;
  border-top: 10px solid #ccc;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  position: absolute;
  left: 89.25%;
  top: 194px;
}
.Content_li2 {
  width: 100%;
  height: 38px;
  border-bottom: 1px solid #d3d3d3;
  background-color: #f6f6f6;
}

.Label {
  margin-top: 9px;
  margin: 0 auto;
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
}
.difficulty {
  width: 7.6%;
  height: 28px;
  background-color: #a2a2a2;
  border: none;
  border: 1px solid #c7c7c7;
  outline: none;
  cursor: pointer;
  font-size: 15px;
  color: #ffffff;
  float: left;
  line-height: 28px;
}
.CT_zhong .shanchu {
  margin-right: 20px;
  font-size: 1%;
  margin-top: 5px;
  padding-top: 3px;
  width: 5.1%;
  height: 23px;
  color: #ffffff;
  float: right;
  text-align: center;
  border-radius: 5px;
  background-color: #939393;
  border: 1px solid #939393;
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
<style>
.el-table .caret-wrapper {
  float: right;
}
</style>