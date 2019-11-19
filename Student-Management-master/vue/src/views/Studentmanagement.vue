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
        <span class="xinxi">学生信息</span>
      <el-table
:data="tableData"
style="width: 91%; float:left; margin-left:5%; border-top:1px solid #ebeef5">
<el-table-column
prop="name"
label="名字"
width="160">
</el-table-column>
<el-table-column
prop="Gender"
label="性别"
width="160">
</el-table-column>
<el-table-column
prop="class"
label="班级"
width="160">
</el-table-column>
<el-table-column
prop="studentid"
label="学号"
width="875">
</el-table-column>
<el-table-column :render-header="renderHeader">
<template slot-scope="scope">
<el-button
size="mini"
@click="dialogFormVisible = true">修改</el-button>
<el-button
size="mini"
type="danger"
@click="del(index)">删除</el-button>
</template>
</el-table-column>
      </el-table>
    <el-dialog title :visible.sync="dialogFormVisible" style="width:40%; position: fixed; left:30%; top:200px; height:600px">
            <span class="xiugai">修改</span>
            <hr class="hr">
            <label class="studentname" for="">学生姓名:</label>
            <input class="nameinput" type="text" placeholder="马圣秦">
            <label class="Gender" for="">性别:</label>
            <input class="Genderinput" type="text" placeholder="男">
            <label class="class" for="">班级：</label>
            <select class="select" name="" id="">
              <option value="高职一班">高职一班</option>
            </select>
            <label for="" class="studentid">学号:</label>
            <input type="text" class="idinput" placeholder="3784598">
            <button class="queren">确认</button>
    </el-dialog>
    <el-dialog title :visible.sync="addOrupdateVisible">
             <span class="xiugai">添加</span>
            <hr class="hr">
            <label class="studentname" for="">学生姓名:</label>
            <input class="nameinput" type="text">
            <label class="Gender" for="">性别:</label>
            <input class="Genderinput" type="text" >
            <label class="class" for="">班级：</label>
            <select class="select" name="" id="">
              <option value="高职一班">高职一班</option>
            </select>
            <label for="" class="studentid">学号:</label>
            <input type="text" class="idinput">
            <button class="queren">确认</button>
    </el-dialog>
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
            Gender: '男',
            class: '高职一班',
            studentid:'3784598'
          }, {
            name: '马圣秦',
            Gender: '男',
            class: '高职一班',
            studentid:'3784598'
          }, {
         name: '马圣秦',
            Gender: '男',
            class: '高职一班',
            studentid:'3784598'
          }, {
            name: '马圣秦',
            Gender: '男',
            class: '高职一班',
            studentid:'3784598'
          }, {
            name: '马圣秦',
            Gender: '男',
            class: '高职一班',
            studentid:'3784598'
          }, {
            name: '马圣秦',
            Gender: '男',
            class: '高职一班',
            studentid:'3784598'
          }, {
            name: '马圣秦',
            Gender: '男',
            class: '高职一班',
            studentid:'3784598'
          }, {
            name: '马圣秦',
            Gender: '男',
            class: '高职一班',
            studentid:'3784598'
          }, {
            name: '马圣秦',
            Gender: '男',
            class: '高职一班',
            studentid:'3784598'
          }, {
            name: '马圣秦',
            Gender: '男',
            class: '高职一班',
            studentid:'3784598'
          }, {
            name: '马圣秦',
            Gender: '男',
            class: '高职一班',
            studentid:'3784598'
          }]
        }
      },
      methods: {
    renderHeader(h,params) {
      let a=[h('el-button',{
        props:{
          size:'mini',
          
        },
        on:{
          click:()=>{
              this.addOrupdateVisible=true
            this.$nextTick(()=>{
              this.$refs.addOrupdate.dataForm.id=''
              this.$refs.addOrupdate.init()
            })
          }
        }
      },'添加')]
         return h('div',a)
         
    },del(index){
      
       this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      }) .then(res => {
          
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },handleEdit(row) {
      this.dialogFormVisible = true;
      this.putdanxaunId = id;
    },add(row) {
      this.dialogTableVisible = true;
      this.putdanxaunI = id;
    },
}
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
  background-color: #03bafc ;
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
.Left_lij {
  width: 100%;
  height: 4.9%;
  background-color: #0ea8fe;
  margin-top: 13%;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
}
.content{
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
.el-button.el-button--default.el-button--mini{
  float: left;
  width: 40%;
  height:35px;
  border-radius: 20px;
  font-size: 15px;
  color: #aaaaaa;
  background-color: transparent;


}
.el-button.el-button--danger.el-button--mini{
  float: left;
  width: 40%;
  height:35px;
  border-radius: 20px;
  font-size: 15px;
  color: white;
}
.el-button.el-button--danger.el-button--mini:hover{
  background-color: #fe0000;
}
.el-table_1_column_5 {
  float: left;
  width: 100%;
}
.footer{
  float: left;
  background-color: white;
  width: 91.7%;
  height: 108px
}

.xiugai{
  float: left;
  font-size: 16px;
  margin-left: 46%;
  margin-top: -40px;
}
.hr{
  float: left;
  width: 95%;
  height: 1px;
  background-color: #b7b7b7;
  margin-top: -10px;
  margin-left: 2%;
}
.studentname{
  float: left;
  margin-left: 3%;
  color: black;
  margin-top: 10px;

}
.nameinput{
  float: left;
  border-radius: 10px;
  width: 42%;
  border: 1px solid #b7b7b7;
  margin-top: 10px;

  margin-left: 2%;
  padding-left: 3%;
}
.Gender{
  clear: both;
  float: left;
  margin-left: 3%;
  color: black;
  margin-top: 20px;

}
.Genderinput{
  float: left;
  border-radius: 10px;
  width: 7%;
  border: 1px solid #b7b7b7;
  margin-top: 20px;

  margin-left: 2%;
  padding-left: 3%;
}
.el-pagination{
  float: left;
  margin-left: 35%;
  margin-top: 35px;
}
.class{
  float: left;
  margin-left: 3%;
  color: black;
  margin-top: 20px;

}
.select{
  float: left;
  border-radius: 10px;
  width: 42%;
  border: 1px solid #b7b7b7;
  margin-top: 20px;

  margin-left: 2%;
  padding-left: 3%;
  color: #b0b0b0;
}
.studentid{
  clear: both;
  float: left;
  margin-left: 3%;
  color: black;
  margin-top: 20px;

}
.idinput{
  float: left;
  border-radius: 10px;
  width: 42%;
  border: 1px solid #b7b7b7;
  margin-top: 20px;
  margin-left: 2%;
  padding-left: 3%;
}
.queren{
  clear: both;
  width: 36%;
  height: 30px;
  color: white;
  background-color: #1e90ff;
  border: 1px solid #1e90ff;
  border-radius: 10px;
  float: left;
  margin-top: 60px;
  margin-left: 33%;
}
.el-dialog__wrapper{
  width: 40%;
    position: fixed;
    left: 30%;
    top: 200px;
    z-index: 2013;
    font-size: 16px;
}
.el-button--danger{
  background-color: #fe0000;
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
<style>


.el-table th div{
  width:100%
}
.el-table thead button{
  float: left;
  width: 60%;
  height: 35px;
  border-radius: 20px;
  margin-left: 35%;
  background-color: #00bdfd;
  font-size:15px;
  color:white;
}.el-dialog__wrapper {
  height:500px; 
}
.el-dialog__body{
  height:180px
}
.el-table tr {
  height:40px;
}
.el-table thead button:hover{
  background-color: #00bdfd;
  color:white;
}
</style>

