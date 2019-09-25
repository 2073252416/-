<template>
    <div class="cont">
        <div class="top">
            <ul style="height:50px;">
                <li class="top_img"><img src="../imgs/01.jpg" alt=""></li>
                <li class="top_li">爱学习</li>
                <router-link to="/Teacher"> <li class="top_click">登录</li></router-link>
            </ul>
        </div>
        <div class="log">
            <img style="
            width:100%;
            height: 40.7%;
            " src="../imgs/02.jpg" alt="">
        </div>
        <div class="conter">
            <div class="conter_top">
                <h3 class="conter_tils">三步考试,满足不同场景</h3>
            </div>
            <div class="conter_bottom">
                <div class="lefte"><img src="../imgs/03.jpg" alt="">
                    <h4 class="lefte_h">第一步:录题</h4>
                    <p class="lefte_p">支持多达8种题型,一键导入1000+题目</p>
                    <p class="lefte_p2">支持单选,多选,不定项选择,判断题,填空题,问答题,录音题,组合题</p>
                    <p class="lefte_p3">同时支持excel，word，批量上传试题，图片</p>
                </div>
                <div class="zhong"><img src="../imgs/04.jpg" alt="">
                    <h4 class="zhong_h">第二步:组卷</h4>
                    <p class="zhong_p">三种组卷方式,同时支持随机组卷</p>
                    <p class="zhong_p2">支持直接选题组卷,按比例抽题组组卷,随机抽题组卷,满足全部考试需求</p>
                </div>
                <div class="riht"><img src="../imgs/05.jpg" alt="">
                    <h4 class="riht_h">第三步:发布</h4>
                    <p class="riht_p">微信扫码考试+防作弊监控</p>
                    <p class="riht_p2">同时支持微信和电脑端答题,扫码即可考试</p>
                    <p class="riht_p3">监控答题中的切屏行为，发现自动交卷</p>
                </div>
            </div>
        </div>
        <div class="footer">
            <div style="height:50px;">
                <p class="footer_p">Copyright @ 2001-2019 Weaver Networkk All Righs Reserved.沪ICP备05040488号
                <br>沪公网安备31011202007203</p>
            </div>    
        </div>
    </div>
</template>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 14px;
        line-height: 1.42857143;
        color: #333;
    }
    li{
        list-style: none;
    }    
    .cont{
        width: 100%;
        height: 100%;
    }
    .top{
        width: 100%;
        height: 4.6%;
        background-color: #0F8BE1;
    }
    .log{
        width: 100%;
        height: 40.7%;
    }
    .conter{
        height: 50%;
        background-color: #FFFFFF;        
    }
    .footer{
        height: 4.7%;
        background-color: #D3E9F7;
    }

    .top_img{
        height:39px ;
        width:37px ;
        margin-left: 2.1%;
        margin-top: 0.2%;
        float: left;
    }
    .top_li{
        float: left;
        color: #E6F3FB;
        padding-top: 0.6%;
        letter-spacing: 2px;
        padding-left: 0.5%;        
    }
    .top_click{
        margin-top: 0.7%;
        color: #73BAFA;
        float: right;
        width: 5.7%;
        height: 45.6%;
        text-align:center;
        background-color: #FFFFFF;
        border: 2px solid #4CB7FF;
        border-radius: 10px;
        margin-right: 5%;        
    }

    .conter_top{
        width: 100%;
        height: 180px;
    }
    .conter_bottom{
        width: 100%;
        height:362px;
    }

    .conter_tils{
        padding-top: 1.7%;
        text-align: center;
        margin-left: 37px;
        font-size: 17px;
        font-weight: normal
    }

        .lefte{
        width: 25.9%;
        height: 100%;
        float: left;
        text-align: center;
        margin-left: 5%;
    }
    .lefte_h{
        text-align: center;
        color: #4E9DEA;
    }
    .lefte_p{
        font-weight:bolder;
    }
    .lefte_p2{
        font-size: 14px;
        color: #898989;
    }
    .lefte_p3{
        font-size: 14px;
        color: #898989;
    }
    .zhong{
        width: 21.9%;
        height: 100%;
        float: left;
        text-align: center;
        margin-left: 9%;
    }
    .zhong_h{
        text-align: center;
        color: #4E9DEA;
    }
    .zhong_p{
        font-weight:bolder;
    }
    .zhong_p2{
        font-size: 13px;
        color: #898989; 
    }
    .riht{
        width: 22.7%;
        height: 100%;
        float: left;
        text-align: center;
        margin-left: 10%;
    }
    .riht_h{
        text-align: center;
        color: #4E9DEA;
    }
    .riht_p{
        font-weight:bolder;
    }
    .riht_p2{
        color: #898989; 
        font-size: 13px;
    }
    .riht_p3{
        color: #898989; 
        font-size: 13px;
    }

    .footer_p{
        text-align: center;
        color: #BAB9B7;
        font-size: 1.9%;
        padding-top: 10px;
    }
</style>

<script>
export default {
    
}
</script>