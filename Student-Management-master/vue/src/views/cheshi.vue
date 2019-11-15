<template>
    <div class="index">
        <table>
            
                        <tr>
                            <th>姓名</th>
                            <th>年龄</th>
                            <th>学历</th>
                            <th>电话</th>
                            <th>毕业院校</th>
                        </tr>
                        <tr v-for="(item, index) in dataShow" :class="{ 'alt': index%2==1 }">
                            <td>{{ item.name }}</td>
                            <td>{{ item.age }}</td>
                            <td>{{ item.edu }}</td>
                            <td>{{ item.phone }}</td>
                            <td>{{ item.school }}</td>
                        </tr>
                    </table>
                    <div class="page">
                        <ul>
                            <li @click="shouye">首页</li>
                            <li v-on:click="prePage">
                                <a   >
                                    <</a>
                            </li>
                            <li id="a" v-on:click="toPage(index)" v-for="(item, index) in pageNum">
                                <a     :class="{active: currentPage==index}">{{ index+1 }}</a>
                            </li>
                            <li v-on:click="nextPage">
                                <a  >></a>
                            </li>
                            <li>
                                <input type="number" v-model="tiaozhuan">
                                
                            </li>
                            <li @click="tiao">
                                跳转
                            </li>
                            <li @click="weiye">尾页</li>
                        </ul>
                    </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            tiaozhuan:'',
        listArray:[
          {
              'name':'赵*',
              'age':'21',
              'edu':'本科',
              'phone':'188****888888',
              'school':'河南农业大学'
          },
          {
              'name':'钱*',
              'age':'22',
              'edu':'本科',
              'phone':'188****888888',
              'school':'郑州大学'
          },
          {
              'name':'王*',
              'age':'23',
              'edu':'大专',
              'phone':'188****888888',
              'school':'河南工业大学'
          },
          {
              'name':'张*',
              'age':'25',
              'edu':'本科',
              'phone':'188****888888',
              'school':'河南农业大学'
          },
          {
              'name':'刘*',
              'age':'21',
              'edu':'本科',
              'phone':'188****888888',
              'school':'河南理工大学'
          },
               {
              'name':'3*',
              'age':'21',
              'edu':'本科',
              'phone':'188****888888',
              'school':'河南理工大学'
          },
               {
              'name':'2*',
              'age':'21',
              'edu':'本科',
              'phone':'188****888888',
              'school':'河南理工大学'
          },
               {
              'name':'1*',
              'age':'21',
              'edu':'本科',
              'phone':'188****888888',
              'school':'河南理工大学'
          }
        ],
        pageSize:2,
        currentPage:0
        }
    },
        methods: {
            tiao(){
                
                // if( this.tiaozhuan =  ){
                    this.currentPage = this.tiaozhuan-1;

                // }else{
                    // alert("请输入数字")
                // }
            },
            weiye(){
                this.aaa = document.querySelectorAll("#a")
                let a  =  this.aaa.length
                let he  = a-1;
                 this.currentPage  = he
                
                console.log(this.aaa.length)
            },
            shouye(){
                this.currentPage  = 0;
            },
            nextPage: function(){
                var vm = this;
                if (vm.currentPage == vm.pageNum - 1) return;
                vm.currentPage++;
                 
            },
            prePage: function(){
                var vm = this;
                if (vm.currentPage == 0) return;
                vm.currentPage--;
                
            },
            toPage: function(page){
                var vm = this;
                vm.currentPage = page
            }
        },
    computed:{
        dataShow: function(){
            let start = this.currentPage*this.pageSize;
            let end = Math.min((this.currentPage+1)*this.pageSize, this.listArray.length)
            return this.listArray.slice(start, end)
        },
        pageNum: function(){
            return Math.ceil(this.listArray.length / this.pageSize) || 1 ;
        }
    },

}
</script>

<style  scoped>
ul li{
    width: 50px;
    height: 50px;
    background-color: aqua;
    border-radius: 2px;
    border: 1px solid red;
    text-align: center;
    float: left;
    list-style: none;
    line-height: 50px;
} 
ul li input{
    width: 50px;
    height: 30px;
}
</style>