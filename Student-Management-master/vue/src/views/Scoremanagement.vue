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
      <router-link to="/Scoremanagement">
        <li class="Left_li4">成绩管理</li>
      </router-link>
      <router-link to="/Studentmanagement">
        <li class="Left_lij">学生管理</li>
      </router-link>
      <button class="tuichu">退出</button>
    </ul>
     <div class="content">
        <span class="xinxi">学生成绩</span>
<el-table
    :data="tableData"
    style="width: 91%; float:left; margin-left:5%; border-top:1px solid #ebeef5">
    <el-table-column
      prop="name"
      label="学生名字"
      width="140">
    </el-table-column>
    <el-table-column
      prop="Number"
      label="考场人数"
      width="130">
    </el-table-column>
    <el-table-column
      prop="Average"
      label="平均分"
      width="130">
    </el-table-column>
    <el-table-column
      prop="zuigao"
      label="最高分"
      width="130">
    </el-table-column>
    <el-table-column
      prop="zuidi"
      label="最低分"
      width="130">
    </el-table-column>
    <el-table-column
      prop="danxuan"
      label="单选题"
      width="130">
    </el-table-column>
    <el-table-column
      prop="duoxuan"
      label="多选题"
      width="130">
    </el-table-column>
    <el-table-column
      prop="tiankong"
      label="填空题"
      width="130">
    </el-table-column>
    <el-table-column
      prop="jianda"
      label="简答题">
    </el-table-column>
  </el-table>
    </div>
    <div class="footer">
      <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
    </div>
    </div>
</template>
<script>
export default {
      data() {
        return {
        putdanxaunId:"",
        putdanxaunI:"",
        dialogFormVisible:false,
        addOrupdateVisible:false,
          tableData: [{
            name: '马圣秦',
            Number: '27',
            Average: '87.5',
            zuigao:'95',
            zuidi:'78',
            danxuan:'85%',
            duoxuan:'75%',
            tiankong:'90%',
            jianda:'85%'
          }, {
             name: '马圣秦',
            Number: '27',
            Average: '87.5',
            zuigao:'95',
            zuidi:'78',
            danxuan:'85%',
            duoxuan:'75%',
            tiankong:'90%',
            jianda:'85%'
          }, {
         name: '马圣秦',
            Number: '27',
            Average: '87.5',
            zuigao:'95',
            zuidi:'78',
            danxuan:'85%',
            duoxuan:'75%',
            tiankong:'90%',
            jianda:'85%'
          }, {
            name: '马圣秦',
            Number: '27',
            Average: '87.5',
            zuigao:'95',
            zuidi:'78',
            danxuan:'85%',
            duoxuan:'75%',
            tiankong:'90%',
            jianda:'85%'
          }, {
           name: '马圣秦',
            Number: '27',
            Average: '87.5',
            zuigao:'95',
            zuidi:'78',
            danxuan:'85%',
            duoxuan:'75%',
            tiankong:'90%',
            jianda:'85%'
          }, {
            name: '马圣秦',
            Number: '27',
            Average: '87.5',
            zuigao:'95',
            zuidi:'78',
            danxuan:'85%',
            duoxuan:'75%',
            tiankong:'90%',
            jianda:'85%'
          }, {
            name: '马圣秦',
            Number: '27',
            Average: '87.5',
            zuigao:'95',
            zuidi:'78',
            danxuan:'85%',
            duoxuan:'75%',
            tiankong:'90%',
            jianda:'85%'
          }, {
            name: '马圣秦',
            Number: '27',
            Average: '87.5',
            zuigao:'95',
            zuidi:'78',
            danxuan:'85%',
            duoxuan:'75%',
            tiankong:'90%',
            jianda:'85%'
          }, {
           name: '马圣秦',
            Number: '27',
            Average: '87.5',
            zuigao:'95',
            zuidi:'78',
            danxuan:'85%',
            duoxuan:'75%',
            tiankong:'90%',
            jianda:'85%'
          }, {
             name: '马圣秦',
            Number: '27',
            Average: '87.5',
            zuigao:'95',
            zuidi:'78',
            danxuan:'85%',
            duoxuan:'75%',
            tiankong:'90%',
            jianda:'85%'
          }, {
            name: '马圣秦',
            Number: '27',
            Average: '87.5',
            zuigao:'95',
            zuidi:'78',
            danxuan:'85%',
            duoxuan:'75%',
            tiankong:'90%',
            jianda:'85%'
          }, {
             name: '马圣秦',
            Number: '27',
            Average: '87.5',
            zuigao:'95',
            zuidi:'78',
            danxuan:'85%',
            duoxuan:'75%',
            tiankong:'90%',
            jianda:'85%'
          }
          , {
             name: '马圣秦',
            Number: '27',
            Average: '87.5',
            zuigao:'95',
            zuidi:'78',
            danxuan:'85%',
            duoxuan:'75%',
            tiankong:'90%',
            jianda:'85%'
          }
          ]
        }
      },
}
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
  background-color: #0ea8fe;
  margin-top: 13%;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
}.Left_lij {
  width: 100%;
  height: 4.9%;
  background-color: #03bafc;
  margin-top: 13%;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
}.content{
    float: left;
    width: 91.7%;
    height: 925px;
    background-color: white;
}
.xinxi{
  font-size: 20px;
    float: left;
    width: 100%;
    text-align: center;
    height: 50px;
    line-height: 50px;
}
.footer{
  float: left;
  background-color: white;
  width: 91.7%;
  height: 108px
}
.el-pagination {
    float: left;
    margin-left: 35%;
    margin-top: 35px;
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