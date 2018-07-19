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
         <div>
            <el-table :data="okenBtcCoin">
                 <el-table-column  prop="name"  label="平台"/>
                 <el-table-column  prop="now"  label="时间"/>
                 <el-table-column  prop="calc"  label="btc人民币"/>
                 <el-table-column  prop="last"  label="btc美元"/>
            </el-table>
            <el-table :data="okenEthCoin">
                <el-table-column  prop="now"  label="时间"/>
                <el-table-column  prop="calc"  label="eth人民币"/>
                <el-table-column  prop="last"  label="eth美元"/>
            </el-table>
         </div>
         <div style="clear:both;">
           <el-table :data="huoBiBtcCoin"  :show-header="false">
                <el-table-column  prop="name"  label="平台"/>
                <el-table-column  prop="now"  label="时间"/>
                <el-table-column  prop="calc"  label="btc人民币"/>
                <el-table-column  prop="last"  label="btc美元"/>
           </el-table>
           <el-table :data="huoBiEthCoin" :show-header="false">
               <el-table-column  prop="now"  label="时间"/>
               <el-table-column  prop="calc"  label="eth人民币"/>
               <el-table-column  prop="last"  label="eth美元"/>
           </el-table>
         </div>
         <div style="clear:both;">
            <el-table :data="fcoinBtcCoin" :show-header="false">
                 <el-table-column  prop="name"  label="平台"/>
                 <el-table-column  prop="now"  label="时间"/>
                 <el-table-column  prop="calc"  label="btc人民币"/>
                 <el-table-column  prop="last"  label="btc美元"/>
            </el-table>
            <el-table :data="fcoinEthCoin" :show-header="false">
                <el-table-column  prop="now"  label="时间"/>
                <el-table-column  prop="calc"  label="eth人民币"/>
                <el-table-column  prop="last"  label="eth美元"/>
            </el-table>
         </div>
         <div style="clear:both;">
             <el-table :data="coinExBtcCoin"  :show-header="false">
                  <el-table-column  prop="name"  label="平台"/>
                  <el-table-column  prop="now"  label="时间"/>
                  <el-table-column  prop="calc"  label="btc人民币"/>
                  <el-table-column  prop="last"  label="btc美元"/>
             </el-table>
             <el-table :data="coinExEthCoin"  :show-header="false">
                 <el-table-column  prop="now"  label="时间"/>
                 <el-table-column  prop="calc"  label="eth人民币"/>
                 <el-table-column  prop="last"  label="eth美元"/>
             </el-table>
         </div>
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
        okenBtcCoin:[],
        okenEthCoin:[],
        isRunning:false,
        huoBiBtcCoin:[],
        huoBiEthCoin:[],
        fcoinBtcCoin:[],
        fcoinEthCoin:[],
        coinExBtcCoin:[],
        coinExEthCoin:[]
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
         this.getHuoBi("usdt","btc")
         this.getHuoBi("usdt","eth")
         this.getFcoin("usdt","btc")
         this.getFcoin("usdt","eth")
         this.getCoinEx("usdt","btc")
         this.getCoinEx("usdt","eth")
         this.okenUsdtBtcInterval = setInterval(function() {self. getOken("usdt","btc")}, 1000)
         this.okenUsdtEthInterval = setInterval(function() {self. getOken("usdt","eth")}, 1000)
         this.huoBiUsdtBtcInterval = setInterval(function() {self. getHuoBi("usdt","btc")}, 1000)
         this.huoBiUsdtEthInterval = setInterval(function() {self. getHuoBi("usdt","eth")}, 1000)
         this.fcoinUsdtBtcInterval = setInterval(function() {self. getFcoin("usdt","btc")}, 1000)
         this.fcoinUsdtEthInterval = setInterval(function() {self. getFcoin("usdt","eth")}, 1000)
         this.coinExUsdtBtcInterval = setInterval(function() {self. getCoinEx("usdt","btc")}, 2000)
         this.coinExUsdtEthInterval = setInterval(function() {self. getCoinEx("usdt","eth")}, 2000)
      },
      end:function(){
         clearInterval(this.okenUsdtBtcInterval)
         clearInterval(this.okenUsdtEthInterval)
         clearInterval(this.huoBiUsdtBtcInterval)
         clearInterval(this.huoBiUsdtEthInterval)
         clearInterval(this.fcoinUsdtBtcInterval)
         clearInterval(this.fcoinUsdtEthInterval)
         clearInterval(this.coinExUsdtBtcInterval)
         clearInterval(this.coinExUsdtEthInterval)
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
                  var year = date.getFullYear()
                  var month =  (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)
                  var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
                  var hour = date.getHours() < 10 ? "0" + date.getHours(): date.getHours()
                  var minute = date.getMinutes() < 10 ? "0"  + date.getMinutes() : date.getMinutes()
                  var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
                  var now = year + "-" + month + "-" + day + " " +   hour + ":" + minute + ":" + second
                   if(self.titleCoin == 1 && "btc" == toType){
                     document.title = minute + ":" + second + "  "  + calc.split(".")[0] + "  "  + self.form.price
                     self.ring(calc)
                  }
                  if("btc" == toType){
                      self.okenBtcCoin = [{name:"oken", now: now, calc : calc, last : last}]
                  }
                  if("eth" == toType){
                      self.okenEthCoin = [{name:"oken", now: now, calc : calc, last : last}]
                  }
           }).catch(error=>console.log(error));
      },
     getHuoBi:function(fromType, toType){
          self = this
          axios.get('/api/huoBi?fromType=' + fromType + "&toType=" + toType).then(res=>{
                var data = eval('(' + res.data + ')')
                console.log("huoBi " + fromType + "-" + toType + ":", data)
                var calc = (self.form.price * data.close).toFixed(2)
                if(self.titleCoin == 2 && "btc" == toType){
                   document.title = data.createdTime.split(" ")[1].substring(3,8) + "  "  + calc.split(".")[0] + "  "  + self.form.price
                   self.ring(calc)
                }
                if("btc" == toType){
                    self.huoBiBtcCoin = [{name:"huoBi", now: data.createdTime, calc : calc, last :  data.close}]
                }
                if("eth" == toType){
                    self.huoBiEthCoin = [{name:"huoBi", now: data.createdTime, calc : calc, last :  data.close}]
                }
         }).catch(error=>console.log(error));
      },
      getFcoin:function(fromType, toType){
            self = this
            axios.get('/api/fcoin?fromType=' + fromType + "&toType=" + toType).then(res=>{
                  var data = eval('(' + res.data + ')')
                  console.log("fcoin " + fromType + "-" + toType + ":", data)
                  var calc = (self.form.price * data[0]).toFixed(2)
                  if(self.titleCoin == 3 && "btc" == toType){
                     document.title = data[data.length - 1].split(" ")[1].substring(3,8) + "  "  + calc.split(".")[0] + "  "  + self.form.price
                     self.ring(calc)
                  }
                  if("btc" == toType){
                      self.fcoinBtcCoin = [{name:"fcoin", now: data[data.length - 1], calc : calc, last :  data[0]}]
                  }
                  if("eth" == toType){
                      self.fcoinEthCoin = [{name:"fcoin", now: data[data.length - 1], calc : calc, last :  data[0]}]
                  }
             }).catch(error=>console.log(error));
      },
      ring:function(price){
            if(price > this.form.maxPrice | price < this.form.minPrice){
                document.getElementById("dogAudio").play()
            }
      },
      getCoinEx:function(fromType, toType){
         axios.get('/api/coinEx?fromType=' + fromType + "&toType=" + toType).then(res=>{
            var last = res.data.data.ticker.last
            var calc = (self.form.price * last).toFixed(2)
            if(self.titleCoin == 4 && "btc" == toType){
              document.title = res.data.createdTime.split(" ")[1].substring(3,8) + "  "  + calc.split(".")[0] + "  "  + self.form.price
              self.ring(calc)
           }
            if("btc" == toType){
                 self.coinExBtcCoin = [{name:"coinEx", now: res.data.createdTime, calc : calc, last :  last}]
            }
            if("eth" == toType){
                 self.coinExEthCoin = [{name:"coinEx", now: res.data.createdTime, calc : calc, last : last}]
            }
        }).catch(error=>console.log(error));
      }
  }
}
</script>

<style scoped>

</style>