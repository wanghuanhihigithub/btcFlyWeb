<template>
    <div style="padding:20px;">
        <el-form ref="form" :model="form" label-width="180px">
             <el-form-item label="人民币价格" style="float:left;">
                 <el-input  v-model="form.price" style="width:140px;"/>
             </el-form-item>
             <el-form-item label="手续费" style="float:left;">
                 <el-input  v-model="form.commission" style="width:140px;"/>
             </el-form-item>
             <el-form-item style="float:left;">
                  <el-button type="primary" @click="start">开始</el-button>
                  <el-button @click="end">结束</el-button>
             </el-form-item>
        </el-form>
        <el-table :data="ubitBtc" :row-style="rowStyle">
               <el-table-column  prop="name"          label="平台"/>
               <el-table-column  prop="createDate"    label="时间"/>
               <el-table-column  prop="chinaPrice"    label="btc人民币"/>
               <el-table-column  prop="koreaPrice"    label="btc韩元"/>
               <el-table-column  prop="parities"      label="汇率"/>
        </el-table>
    </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'hello',
  data: function(){
    return {
        form:{price:45000, commission:0},
        isRunning:false,
        ubitBtc:[]
    }
  },
  mounted: function(){
  },
  methods: {
     start:function(){
        if(this.isRunning){
              alert("已经开始执行，不能再开始")
              return;
        }
        this.isRunning = true;
            this.getUitBtc()
            self = this;
            this.ubitBtcInterval = setInterval(function() {self. getUitBtc()}, 1000)
     },
     end: function(){
         clearInterval(this.ubitBtcInterval)
         this.isRunning = false;
         alert("已停止");
     },
     getUitBtc: function(){
        self = this
        axios.get('/api/ubit/btc').then(res=>{
            if(res.data.length>0){
                var chinaPrice = self.form.price - self.form.commission;
                var koreaPrice = res.data[0]["trade_price"];
                var parities = (koreaPrice / chinaPrice).toFixed(2);
                var date = new Date(res.data[0]["trade_timestamp"])
                var year = date.getFullYear()
                var month =  (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)
                var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
                var hour = date.getHours() < 10 ? "0" + date.getHours(): date.getHours()
                var minute = date.getMinutes() < 10 ? "0"  + date.getMinutes() : date.getMinutes()
                var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
                date = year + "-" + month + "-" + day + " " +   hour + ":" + minute + ":" + second
                self.ubitBtc = [];
                self.ubitBtc.push({name:"ubit", createDate: date, chinaPrice : self.form.price - 150,
                        koreaPrice : koreaPrice, parities:(koreaPrice / (chinaPrice -150 )).toFixed(2)});
                self.ubitBtc.push({name:"ubit", createDate: date, chinaPrice : self.form.price - 100,
                        koreaPrice : koreaPrice, parities:(koreaPrice / (chinaPrice -100 )).toFixed(2)});
                self.ubitBtc.push({name:"ubit", createDate: date, chinaPrice : self.form.price - 50,
                        koreaPrice : koreaPrice, parities:(koreaPrice / (chinaPrice -50 )).toFixed(2)});
                self.ubitBtc.push({name:"ubit", createDate: date, chinaPrice : self.form.price,
                        koreaPrice : koreaPrice, parities:parities});
                self.ubitBtc.push({name:"ubit", createDate: date, chinaPrice : self.form.price + 50,
                        koreaPrice : koreaPrice, parities:(koreaPrice / (chinaPrice + 50 )).toFixed(2)});
                self.ubitBtc.push({name:"ubit", createDate: date, chinaPrice : self.form.price + 100,
                        koreaPrice : koreaPrice, parities:(koreaPrice / (chinaPrice + 100 )).toFixed(2)});
                self.ubitBtc.push({name:"ubit", createDate: date, chinaPrice : self.form.price + 150,
                        koreaPrice : koreaPrice, parities:(koreaPrice / (chinaPrice + 150 )).toFixed(2)});
            }
        }).catch(error=>console.log(error));
     },
     rowStyle: function(row, index){
        if(index == 3){
            return { "background-color": "pink" }
        }
     }

  }
}
</script>