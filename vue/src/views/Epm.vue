<template>
    <div class="Epm">
        <div class="Top">
            <ul>
                <li class="Top_img"><img src="../imgs/01.jpg" alt=""></li>
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
                    <li class="Left_li3">随机生成</li>
                </router-link>
                <router-link to="/Manualmarking">
                    <li class="Left_li4">人工出卷</li>
                </router-link>
            </ul>
        <div class="Right">
            <div class="Cons">
                    <ul class="Cons_top">
                        <li class="CT_left"><img style="float: left;" src="../imgs/06.jpg" alt="">
                            <h6 style="float: left;" class="CT_h">试卷数量</h6>
                            <span style="float:right;margin-top: 12px;">5</span>
                        </li>
                        <li class="CT_right"><img style="float: left;" src="../imgs/07.jpg" alt="">
                            <h6 style="float: left;" class="CT_h2">考试次数</h6>
                            <span style="float:right;margin-top: 12px;">5</span>
                        </li>
                    </ul>
                    <div style="width: 93.3%;border-bottom: 1px solid #E6E6E6;margin-left: 2.6%;"></div>
                    <ul class="CT_zhong">
                        <li class="CT_lits">试卷管理</li>
                        <router-link to=""><li class="CtLright">删除</li></router-link>
                        <router-link to=""><li class="CtLright2">模板录入</li></router-link>
                        <router-link to="/MultiplesElection"><li class="CtLright3">我要出题 + </li></router-link>
                    </ul>
<template>
  <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column   label="试题标题"  width="200">
    <template slot-scope="scope">{{scope.row.Choice_question}}</template>
    </el-table-column>
    <el-table-column  label="试题难度"  width="200">
         <template slot-scope="scope">{{scope.row.four}}</template>
    </el-table-column>
    <el-table-column label="作者" show-overflow-tooltip></el-table-column>
    <el-table-column  label="题型"  show-overflow-tooltip></el-table-column>
    <el-table-column  label="分数"  show-overflow-tooltip></el-table-column>
    <el-table-column  label="操作"  show-overflow-tooltip>
        <template slot-scope="scope">操作</template>
    </el-table-column>
  </el-table>
</template>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data(){
        return {
            tableData: [],
        }
    },
    
  methods: {
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
  },
  created(){
        axios.get("http://127.0.0.1:7001/danxuaget", {}).then(res => {
            this.tableData = res.data;
        console.log(this.tableData)
      });
  }
};
</script>


<style scoped>
*{
    margin: 0;
    padding: 0;
}
    .Epm{
        width: 100%;
        height: 1080px;
    }
    .Top{
        height:4.6%;
        background-color: #0F8BE1;
    }
    li{
        list-style: none;
        float: left;
    }
    .Top_img{
        margin-left: 2.1%;
        margin-top: 0.2%;
    }
    .Top_li{
        color: #E6F3FB;
        margin-top: 0.6%;
        letter-spacing: 2px;
        margin-left: 0.5%;
    }
    .Left{
        width: 8.3%;
        height: 95.4%;
        background-color: #90B9D5;
        float: left;
    }
    li{
        text-align: none;
    }
    .Left_li{
        width: 100%;
        height: 4.9%;
        background-color: #5D8FB2;
        margin-top: 50px;
        color: #ffffff;
        line-height: 50px;
        text-align:center;
    }
    .Left_li2{
        width: 100%;
        height: 4.9%;
        background-color: #84A4BB;
        margin-top: 20px;
        color: #ffffff;
        line-height: 50px;
        text-align:center;
    }
    .Left_li3{
        width: 100%;
        height: 4.9%;
        background-color: #84A4BB;
        margin-top: 20px;
        color: #ffffff;
        line-height: 50px;
        text-align:center;        
    }
    .Left_li4{
        width: 100%;
        height: 4.9%;
        background-color: #84A4BB;
        margin-top: 20px;
        color: #ffffff;
        line-height: 50px;
        text-align:center;        
    }
    .Right{
        width: 91.7%;
        height:95.4%;
        background-color: #E8E8E8;
        float: left;
    }
    .Cons{
        float: left;
        width: 83.3%;
        height: 100%;
        background-color: #ffffff;
        margin-left: 8.3%;
    }
    .Cons_top{
        width: 100%;
        height: 71px;
    }
    .CT_left{
        float: left;
        width: 147px;
        height: 40px;
        margin-top: 15px;
        margin-left: 24.6%;
    }
    .CT_h{
        font-size: 15px;
        color: #424242;
        margin-left: 20px;
        text-align:center; 
        margin-top: 12px;
    }
    .CT_right{
        float: left;
        width: 161px;
        height: 47px;
        margin-top: 11px;
        margin-left: 26.1%;
    }
    .CT_h2{
        font-size: 15px;
        color: #424242;
        margin-left: 20px;
        text-align:center; 
        margin-top: 12px;
    }
    .CT_zhong{
        height: 3.7%;
        width: 100%;
        border-bottom: 1px solid #D4D4D4;
    }
    .CT_lits{
        font-size: 15px;
        color: #424242;
        margin-top: 10px;
        margin-left: 21px;        
        font-weight: bolder;
    }
    .CtLright{
        margin-right: 20px;
        font-size: 1%;
        margin-top: 5px;

        padding-top: 3px;
        width: 5.1%;
        height: 20px;
        color: #ffffff;
        float: right;
        text-align:center;
        border-radius: 5px;
        background-color: #CF0B0C;
    }
    .CtLright2{
        margin-right: 20px;
        font-size: 1%;
        margin-top: 5px;
        padding-top: 3px;
        width: 5.1%;
        height: 20px;
        color: #ffffff;
        float: right;
        text-align:center;
        border-radius: 5px;
        background-color: #4A9E50;
    }
    .CtLright3{
        margin-right: 20px;
        font-size: 1%;
        margin-top: 5px;
        padding-top: 3px;
        width: 5.1%;
        height: 20px;
        color: #ffffff;
        float: right;
        text-align:center;
        border-radius: 5px;
        background-color: #1490E6;
    }
    .CT_bottom{
        width: 100%;
        height: 88%;
    }
    .F_h{
        float: left;
        color: #424242;
        font-size: 15px;
        margin-left: 1.1%;
        margin-top: 1.9%;
    }
    .F_input{
        float: left;
        width: 6.3%;
        margin-left: 0.5%;
        margin-top: 1.8%;
        height: 26px;
        border: 1.2px solid #000000;
    }
    .Content{
        width: 93.8%;
        height: 820px;
        border: 1px solid #D3D3D3;
        margin-left: 3.1%;
        margin-top: 1%;
    }
    .footer{
        width: 28%;
        height: 35px;
        /* border: 1px solid #D3D3D3; */
        margin: auto;
        margin-top: 2.3%;
    }
    .footer2{
        width:33px;
        height:33px;line-height: 33px;
        text-align:center;
        border: 1px solid #D4D4D4;
        margin-left: 1.4%;
    }
    .footer3{
        width: 11px;
        height: 21px;
        padding-left: 8px;
        padding-top: 11px;
    }
    .Content_li{
        width: 100%;
        height: 38px;
        border-bottom: 1px solid #D3D3D3;
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
    width: 0;height: 0;
    display: initial;
    border-bottom: 10px solid #ccc;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    float: right;
    margin-top: 7px;
    margin-right: 1px;
    }
    .to_bottom1 {
    width: 0;height: 0;
    border-top: 10px solid #ccc;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    position: absolute;
    left: 63.2%;
    top: 194px;
    }
        .to_top2 {
    width: 0;height: 0;
    display: initial;
    border-bottom: 10px solid #ccc;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    float: right;
    margin-top: 7px;
    margin-right: 1px;
    }
    .to_bottom2{
    width: 0;height: 0;
    border-top: 10px solid #ccc;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    position: absolute;
    left: 70.4%;
    top: 194px;
    }
            .to_top3 {
    width: 0;height: 0;
    display: initial;
    border-bottom: 10px solid #ccc;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    float: right;
    margin-top: 7px;
    margin-right: 1px;
    }
    .to_bottom3{
    width: 0;height: 0;
    border-top: 10px solid #ccc;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    position: absolute;
    left: 76.75%;
    top: 194px;
    }
            .to_top4 {
    width: 0;height: 0;
    display: initial;
    border-bottom: 10px solid #ccc;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    float: right;
    margin-top: 7px;
    margin-right: 1px;
    }
    .to_bottom4{
    width: 0;height: 0;
    border-top: 10px solid #ccc;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    position: absolute;
    left: 81.55%;
    top: 194px;
    }
            .to_top5 {
    width: 0;height: 0;
    display: initial;
    border-bottom: 10px solid #ccc;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    float: right;
    margin-top: 7px;
    margin-right: 1px;
    }
    .to_bottom5{
    width: 0;height: 0;
    border-top: 10px solid #ccc;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    position: absolute;
    left: 85.4%;
    top: 194px;
    }
            .to_top6 {
    width: 0;height: 0;
    display: initial;
    border-bottom: 10px solid #ccc;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    float: right;
    margin-top: 7px;
    margin-right: 1px;
    }
    .to_bottom6{
    width: 0;height: 0;
    border-top: 10px solid #ccc;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    position: absolute;
    left: 89.25%;
    top: 194px;
    }
    .Content_li2{
        width: 100%;
        height: 38px;
        border-bottom: 1px solid #D3D3D3;
        background-color: #F6F6F6;
    }
</style>