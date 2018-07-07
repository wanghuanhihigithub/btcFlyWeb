<template>
    <div id="app">
         <el-form ref="form" :model="form" label-width="180px">
             <el-form-item label="乘数">
                  <el-input  v-model="form.price "></el-input>
             </el-form-item>
             <el-form-item label="报警最小阈值">
                  <el-input  v-model="form.minPrice "></el-input>
             </el-form-item>
             <el-form-item label="报警最大阈值">
                  <el-input  v-model="form.maxPrice "></el-input>
             </el-form-item>
             <el-form-item>
                 <el-button type="primary" @click="start">开始</el-button>
                 <el-button @click="end">结束</el-button>
             </el-form-item>
         </el-form>
         <el-radio-group v-model="titleCoin" style="margin-left:120px" @change="selectTitleCoin">
             <el-radio :label="1">oken</el-radio>
             <el-radio :label="2">火币</el-radio>
             <el-radio :label="3">fcoin</el-radio>
             <el-radio :label="4">coinEx</el-radio>
           </el-radio-group>
         <el-table :data="coins"  style="width: 60%;margin:20px;">
             <el-table-column  prop="name"  label="平台"  width="200"/>
             <el-table-column  prop="now"  label="时间"  width="300"/>
             <el-table-column  prop="calc"  label="乘数 * last"  width="150"/>
             <el-table-column  prop="last"  label="last"  width="150"/>
          </el-table>
          <el-table :data="huobiCoins"  style="width: 60%;margin:20px;margin-top:0px" :show-header="false">
               <el-table-column  prop="name"  label="平台"  width="200"/>
               <el-table-column  prop="now"  label="时间"  width="300"/>
               <el-table-column  prop="calc"  label="乘数 * last"  width="150"/>
               <el-table-column  prop="last"  label="last"  width="150"/>
          </el-table>
          <el-table :data="fcoins"  style="width: 60%;margin:20px;" :show-header="false">
              <el-table-column  prop="name"  label="平台"  width="200"/>
              <el-table-column  prop="now"  label="时间"  width="300"/>
              <el-table-column  prop="calc"  label="乘数 * last"  width="150"/>
              <el-table-column  prop="last"  label="last"  width="150"/>
           </el-table>
           <el-table :data="coinEx"  style="width: 60%;margin:20px;" :show-header="false">
                 <el-table-column  prop="name"  label="平台"  width="200"/>
                 <el-table-column  prop="now"  label="时间"  width="300"/>
                 <el-table-column  prop="calc"  label="乘数 * last"  width="150"/>
                 <el-table-column  prop="last"  label="last"  width="150"/>
           </el-table>
           <audio src="./dog.wav" controls="controls" id="dogAudio"></audio>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  data: function(){
    return {form:{price:0,minPrice:40000,maxPrice:50000},coins:[],huobiCoins:[],fcoins:[],coinEx:[],titleCoin:1}
  },
  mounted: function(){
  },
  methods: {
      start:function(){
           this.getCoinsVs()
           this.getHuobiCoinsVs()
           this.getFCoinsVs()
           this.getCoinEx()
           self = this
           this.interval = setInterval(function() {self.getCoinsVs()}, 1000 * 2)
           this.huobiInterval = setInterval(function() {self.getHuobiCoinsVs()}, 500)
           this.fcoinInterval = setInterval(function() {self.getFCoinsVs()}, 2000)
           this.coinExInterval = setInterval(function() {self.getCoinEx()}, 2000)
      },
      getCoinsVs:function(){
        self = this
        axios.get('/api/coinsVs').then(res=>{
               console.log("oken返回数据", res)
               var last = res.data.ticker.last
               var calc = (self.form.price * last).toFixed(2)
               if(self.titleCoin == 1){
                  document.title = res.data.createdTime.split(" ")[1].substring(3,8) + "  "  + calc.split(".")[0] + "  "  + self.form.price
                  self.ring(calc,self)
               }
               self.coins = [{now:res.data.createdTime , calc : calc, last: last,name:"oken"}]
        }).catch(error=>console.log(error));
      },
      getHuobiCoinsVs:function(){
        axios.get('/api/huobiCoinsVs').then(res=>{
            var data = eval('(' + res.data + ')')
            console.log("火币网返回数据", res)
            var calc = (self.form.price * data.close).toFixed(2)
             if(self.titleCoin == 2){
                document.title = data.createdTime.split(" ")[1].substring(3,8) + "  "  + calc.split(".")[0] + "  "  + self.form.price
                self.ring(calc,self)
             }
            self.huobiCoins = [{now: data.createdTime, calc :calc, last: data.close,name:"火币"}]
        }).catch(error=>console.log(error));
      },
      getFCoinsVs:function(){
         axios.get('/api/fcoinVs').then(res=>{
            var last = res.data.data.ticker[0]
            var calc = (self.form.price * last).toFixed(2)
           if(self.titleCoin == 3){
              document.title = res.data.createdTime.split(" ")[1].substring(3,8) + "  "  + calc.split(".")[0] + "  "  + self.form.price
              self.ring(calc,self)
           }
            self.fcoins = [{now: res.data.createdTime, calc : calc, last: last,name:"fcoin"}]
         }).catch(error=>console.log(error));
      },
      getCoinEx:function(){
        axios.get('/api/coinEx').then(res=>{
            var last = res.data.data.ticker.last
            var calc = (self.form.price * last).toFixed(2)
           if(self.titleCoin == 4){
              document.title = res.data.createdTime.split(" ")[1].substring(3,8) + "  "  + calc.split(".")[0] + "  "  + self.form.price
              self.ring(calc,self)
           }
            self.coinEx = [{now: res.data.createdTime, calc : calc, last: last,name:"coinEx"}]
        }).catch(error=>console.log(error));
      },
      end:function(){
        clearInterval(this.interval)
        clearInterval(this.huobiInterval)
        clearInterval(this.fcoinInterval)
        clearInterval(this.coinExInterval)
      },
      ring:function(price,self){
        if(price > self.maxPrice | price < self.minPrice){
            document.getElementById("dogAudio").play()
        }
      }
  }
}
</script>

<style scoped>

</style>