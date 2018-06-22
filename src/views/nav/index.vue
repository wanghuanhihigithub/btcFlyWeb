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
         <el-table :data="coins"  style="width: 80%;margin:20px">
            <el-table-column  prop="now"  label="时间"  width="300"/>
            <el-table-column  prop="calc"  label="乘数 * last"  width="200"/>
            <el-table-column  prop="high"  label="乘数 * high"  width="200"/>
             <el-table-column  prop="low"  label="乘数 * low"  width="200"/>
            <el-table-column  prop="last"  label="last"  width="300"/>
          </el-table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  data: function(){
    return {form:{price:0},coins:[]}
  },
  mounted: function(){

  },
  methods: {
      start:function(){
           this.getCoinsVs()
           self = this
           this.interval = setInterval(function() {self.getCoinsVs()}, 1000 * 2)
      },
      getCoinsVs:function(){
            self = this
            axios.get('/api/coinsVs').then(res=>{
                   var last = res.data.ticker.last
                   console.log(res)
                   var now = new Date()
                   var high = res.data.ticker.high
                   var low = res.data.ticker.low
                   self.coins = [{now: now.toLocaleDateString() + " " + now.toLocaleTimeString(), calc : self.form.price * last, last: last, high:self.form.price * high,low:self.form.price * low}]
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