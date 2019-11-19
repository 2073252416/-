<template>
  <div class="Epm">
    <div class="Top">
      <span class="name">盛邦升华</span>
     <hr class="hr4">
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
        <li class="Left_lij">学生管理</li>
      </router-link>
      <button class="tuichu">退出</button>
    </ul>
    <div class="Right">
      <div class="Cons">
         <ul class="Cons_top">
          <li class="CT_left">
            <router-link to="/Randomgeneration">
              <h6 class="CT_h">随机生成</h6>
            </router-link>
          </li>
          <li class="CT_right">
            <router-link to="/Manualmarking">
              <h6 class="CT_h2">自动生成</h6>
              <div class="mark"></div>
            </router-link>
          </li>
        </ul>
        <div class="CT_hr">
          <el-button class="anniu" type="info" @click="dialogVisible = true">生成试卷</el-button>
          <el-dialog :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <span>是否生成</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false" v-on:click="tianjia">确 定</el-button>
            </span>
          </el-dialog>
        </div>
        <div class="hr"></div>
        <div class="CT_bottom">
          <el-table
            ref="multipleTable"
            :data="tableData"
            border
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
            :default-sort="{prop: 'Fraction', order: 'descending'}"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="ii" label="#" width="70" type="index"></el-table-column>
            <el-table-column prop="TestTitle" label="试题标题" width="800"></el-table-column>
            <el-table-column prop="TestLabel" label="试题标签" width="145"></el-table-column>
            <el-table-column prop="QuestionType" label="题型" width="145"></el-table-column>
            <el-table-column sortable prop="Fraction" label="分数" width="90"></el-table-column>
            <el-table-column prop="operation" label="操作" width="90"></el-table-column>
          </el-table>
        </div>
        <!-- <el-button class="CT_tui" type="primary">退出登录</el-button> -->
        <!-- <div class="CT_tui"><button class="CT_botton">退出登录</button></div> -->
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
  background-color: #f5f5f5;
}
.Top {
  height: 4.6%;
  background-color: #03bafc;
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

.CT_h {
  font-size: 15px;
  color: #424242;
  text-align: center;
  margin-top: 12px;
}
.CT_right {
  float: left;
  width: 66px;
  height: 47px;
  margin-top: 11px;
  margin-left: 26.1%;
}

.CT_sapn {
  float: right;
  margin-top: 12px;
}
.CT_hr {
  width: 100%;
  border-bottom: 1px solid #e6e6e6;
}
.anniu{
  width: 80px;
  height: 25px;
  line-height: 3px;
  background: #c4c4c4;
  float: right;
  color:#f8f8f8;
  margin-top: 11px;
  margin-right: 20px;
}

.CT_bottom {
  float: left;
  width: 96.15%;
  height: 80%;
  margin-top: 10px;
  margin-left: 29px;
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
  margin-top: 0.5%;
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
.CT_tui {
  width: 8%;
  height: 40px;
  margin-left: 45%;
}
.anniu[data-v-d8f42fb6][data-v-d8f42fb6]{
  padding-left: 13px;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
}
.hr{
  float: left;
  width: 100%;
  height: 1%;
  margin-top: 10px;
  border-top: 1px solid   #d4d4d4;
}
/* .CT_botton{
        background-color: #0F8BE1;
        width: 10%;
        
    } */
    .name{
  font-size: 23px;
  color: white;
  float: left;
  margin-left: 1.6%;
  margin-top: 0.5%;;
}
.Cons_top {
  width: 100%;
  height: 50px;
}
.CT_left {
  float: left;
  width: 66px;
  height: 40px;
  margin-top: 3px;
  margin-left: 24.6%;
  
}
.CT_h {
  font-size: 15px;
  color: #b0b0b0;
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
  color: #189df8;
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
  margin-top: 34px;
  background-color: #0f8be1;
}
.CT_left a{
  text-decoration: none;
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
.tuichu{
  float: left;
  width: 44%;
  height: 30px;
  background-color: transparent;
  color: #fffffd;
  border-radius: 10px;
  border: 1px solid #fffffd;
  margin-top: 635px;
  margin-left: 9%;
}
</style>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      tableData: [
        {
          TestTitle: "一年中有几个季节？",
          TestLabel: "简单",
          QuestionType: "多选题",
          Fraction: "8",
          operation: "操作"
        },
        {
          TestTitle: "一年中有几个季节？",
          TestLabel: "简单",
          QuestionType: "多选题",
          Fraction: "7",
          operation: "操作"
        },
        {
          TestTitle: "一年中有几个季节？",
          TestLabel: "简单",
          QuestionType: "多选题",
          Fraction: "2",
          operation: "操作"
        },
      ],
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    formatter(row, column) {
      return row.address;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>