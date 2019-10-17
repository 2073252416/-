<template>
    <div class="Epm">
        <div class="Top">
            <ul>
                <li class="Top_img"><img src="../imgs/01.jpg" alt=""></li>
                <li class="Top_li">爱学习</li>
            </ul>
        </div>
            <ul class="Left">
                <li class="Left_li">近期发布</li>
                <li class="Left_li2">试卷批阅</li>
                <li class="Left_li3"></li>
                <li class="Left_li4">设置</li>
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
                        <li class="CtLright">删除</li>
                        <li class="CtLright2">模板录入</li>
                        <li class="CtLright3">我要出卷 + </li>
                    </ul>
                    <div class="CT_bottom">
                        <form action="">
                            <h4 class="F_h">试卷状态</h4>
                            <!-- <input class="F_input" type="text"> -->
                                <select class="F_input" name="">
                                        <option value="所有状态">所有状态</option>
                                        <option value=""></option>
                                </select>
                        </form>
                    </div>
            </div>
        </div>
    </div>
</template>
<style scope>
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
        background-color: #84A4BB;
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
        height: 89%;
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
</style>

<script>
export default {
    

}
</script>