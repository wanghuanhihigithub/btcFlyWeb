<template>
    <div id="app">
         <el-form ref="form" :model="form" label-width="180px">
             <el-form-item label="乘数">
                  <el-input  v-model="form.price "></el-input>
             </el-form-item>
             <el-form-item>
                 <el-button type="primary" @click="start">开始</el-button>
                 <el-button @click="end">结束</el-button>
             </el-form-item>
         </el-form>
         <el-table :data="coins"  style="width: 40%;margin:20px;float:left">
             <el-table-column  prop="now"  label="时间"  width="200"/>
             <el-table-column  prop="calc"  label="乘数 * last"  width="150"/>
             <el-table-column  prop="last"  label="last"  width="150"/>
          </el-table>
          <el-table :data="huobiCoins"  style="width: 40%;margin:20px;float:left">
              <el-table-column  prop="now"  label="时间"  width="200"/>
              <el-table-column  prop="calc"  label="乘数 * last"  width="150"/>
              <el-table-column  prop="last"  label="last"  width="150"/>
            </el-table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  data: function(){
    return {form:{price:0},coins:[],huobiCoins:[]}
  },
  mounted: function(){
    document.title = 456
  },
  methods: {
      start:function(){
           this.getCoinsVs()
           this.getHuobiCoinsVs()
           self = this
           this.interval = setInterval(function() {self.getCoinsVs()}, 1000 * 2)
           this.interval = setInterval(function() {self.getHuobiCoinsVs()}, 500)
      },
      getCoinsVs:function(){
            self = this
            axios.get('/api/coinsVs').then(res=>{
                   console.log(res)
                   var last = res.data.ticker.last
                   var calc = (self.form.price * last).toFixed(2)
                   document.title = res.data.createdTime.split(" ")[1].substring(3,8) + "  "  + calc.split(".")[0] + "  "  + self.form.price
                   self.coins = [{now:res.data.createdTime , calc : calc, last: last}]
            }).catch(error=>console.log(error));

      },
      getHuobiCoinsVs:function(){
        axios.get('/api/huobiCoinsVs').then(res=>{
            var data = eval('(' + res.data + ')')
            console.log("火币网返回数据", res)
            self.huobiCoins = [{now: data.createdTime, calc : (self.form.price * data.close).toFixed(2), last: data.close}]
        }).catch(error=>console.log(error));
      },
      end:function(){
        clearInterval(this.interval)
      }
  }
}
</script>

<style scoped>

</style>