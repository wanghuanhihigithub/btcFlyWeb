<template>
    <div id="app">
         <el-form ref="form" :model="form" label-width="180px">
             <el-form-item label="乘数" style="float:left;">
                  <el-input  v-model="form.price" style="width:100px;"/>
             </el-form-item>
             <el-form-item label="报警最小阈值" style="float:left;">
                  <el-input  v-model="form.minPrice" style="width:180px;"/>
             </el-form-item>
             <el-form-item label="报警最大阈值" style="float:left;">
                  <el-input  v-model="form.maxPrice" style="width:180px;"/>
             </el-form-item>
             <el-form-item style="float:right;">
                 <el-button type="primary" @click="start">开始</el-button>
                 <el-button @click="end">结束</el-button>
             </el-form-item>
         </el-form>
         <el-radio-group v-model="titleCoin" style="margin-left:140px">
             <el-radio :label="1">oken</el-radio>
             <el-radio :label="2">火币</el-radio>
             <el-radio :label="3">fcoin</el-radio>
             <el-radio :label="4">coinEx</el-radio>
           </el-radio-group>
           <div style="height:20px;"/>
           <el-table :data="btcCoins" style="width:56%;float:left;">
                 <el-table-column  prop="name"  label="平台"/>
                 <el-table-column  prop="now"  label="时间"/>
                 <el-table-column  prop="calc"  label="btc人民币"/>
                 <el-table-column  prop="last"  label="btc美元"/>
           </el-table>
           <el-table :data="ethCoins" style="width:42%;">
                <el-table-column  prop="now"  label="时间"/>
                <el-table-column  prop="calc"  label="eth人民币"/>
                <el-table-column  prop="last"  label="eth美元"/>
          </el-table>
          <audio src="./dog.wav" controls="controls" id="dogAudio" style="display:none;"></audio>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  data: function(){
    return {
        form:{price:0,minPrice:40000,maxPrice:50000},
        titleCoin:1,
        btcCoins:[{name:"oken"},{name:"火币"},{name:"fcoin"},{name:"coinEx"}],
        ethCoins:[{name:"oken"},{name:"火币"},{name:"fcoin"},{name:"coinEx"}],
        isRunning:false
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
         this.getOken("usdt","btc")
         this.getOken("usdt","eth")
         this.okenUsdtBtcInterval = setInterval(function() {self. getOken("usdt","btc")}, 500)
         this.okenUsdtEthInterval = setInterval(function() {self. getOken("usdt","eth")}, 500)
      },
      end:function(){
         clearInterval(this.okenUsdtBtcInterval)
         clearInterval(this.okenUsdtEthInterval)
         this.isRunning = false;
      },
      getOken:function(fromType, toType){
            self = this
            axios.get('/api/oken?fromType=' + fromType + "&toType=" + toType).then(res=>{
                  //返回的String类型 因此需要转换
                  var data = eval('(' + res.data + ')')
                  console.log("oken网" + fromType + "-" + toType + ":", data)
                  var last = data.last
                  var calc = (self.form.price * last).toFixed(2)
                  var date = new Date(data.timestamp)
                  var now = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +   date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
                   if(self.titleCoin == 1 && "btc" == toType){
                     document.title = date.getMinutes() + ":" + date.getSeconds() + "  "  + calc.split(".")[0] + "  "  + self.form.price
                     self.ring(calc)
                  }
                  if("btc" == toType){
                    self.btcCoins[0].now = now;
                    self.btcCoins[0].calc = calc;
                    self.btcCoins[0].last = last;
                  }
                  if("eth" == toType){
                      self.ethCoins[0].now = now;
                      self.ethCoins[0].calc = calc;
                      self.ethCoins[0].last = last;
                  }
           }).catch(error=>console.log(error));
      },
      ring:function(price){
        if(price > this.form.maxPrice | price < this.form.minPrice){
            document.getElementById("dogAudio").play()
        }
      }
  }
}
</script>

<style scoped>

</style>