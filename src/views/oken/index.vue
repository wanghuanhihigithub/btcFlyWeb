<template>
    <div style="padding:20px;" id="app">
        <el-button @click="goBack">导航</el-button>
        <el-table :data="coins"  style="width: 100%;margin-top:20px">
          <el-table-column  prop="fromType"  label="fromType"  width="120"/>
          <el-table-column  prop="toType"  label="toType"  width="90"/>
          <el-table-column  prop="fromMinSalePrice"  label="fromMinSalePrice"  width="120"/>
          <el-table-column  prop="fromMaxBuyPrice"  label="fromMaxBuyPrice"  width="120"/>
          <el-table-column  prop="toMinSalePrice"  label="toMinSalePrice"  width="120"/>
          <el-table-column  prop="toMaxBuyPrice"  label="toMaxBuyPrice"  width="120"/>
          <el-table-column  prop="lastVs"  label="lastVs"  width="120"/>
          <el-table-column  prop="fromToProfit"  label="fromToProfit"  width="180"/>
          <el-table-column  prop="toFromProfit"  label="toFromProfit"  width="180"/>
          <el-table-column  prop="createdTime"  label="createdTime"  width="180"/>
         </el-table>

         <audio src="./dog.wav" controls="controls" id="dogAudio"></audio>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  data: function(){
    return {coins:[]}
  },
  mounted: function(){
    debugger;
    self = this
    this.findAll()
    setInterval(function() {self.findAll()}, 40000)
  },
  methods: {
    findAll: function(){
        axios.get('/api/coins').then(res=>{
            var coins = eval('(' + res.data + ')')
            var playVedio = false;
            if(coins.length > 3){
               for(var i = 0; i < 3; i ++){
                      var coin = coins[i]
                      if(coin.fromToProfit > 0 || coin.toFromProfit > 0){
                            playVedio = true
                      }
               }
            }
             if(playVedio){
                  document.getElementById("dogAudio").play()
             }
            this.coins = coins;
        }).catch(error=>console.log(error));
    },
    goBack: function(){
        this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>

</style>