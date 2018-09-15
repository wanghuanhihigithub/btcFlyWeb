<template>
    <div style="padding:20px;">
        <el-form ref="form" :model="form" label-width="180px">
          <el-form-item label="昵称">
                <el-input  v-model="form.nickName"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onStart">开始</el-button>
            <el-button type="primary" @click="onStop">停止播放</el-button>
          </el-form-item>
        </el-form>
        <el-label v-model="desc"></el-label>
        <el-table :data="amountChanges" :row-style="rowStyle">
            <el-table-column  prop="name"          label="币种"/>
            <el-table-column  prop="type"          label="类型"/>
            <el-table-column  prop="oldAmout"      label="原数量"/>
            <el-table-column  prop="nowAmount"     label="现数量"/>
        </el-table>
        <audio src="/order.wav" controls="controls" id="orderAudio"
            style="display:none;" loop="loop"></audio>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'setting',
  data: function(){
    return {
        form: {nickName: 30},
        amountChanges:[],
        btcBuy:"",
        btcSell:"",
        usdtBuy:"",
        usdtSell:"",
        desc:""
    }
  },
  mounted: function(){

  },
  methods: {
    onStart: function(){
        self = this;
        this.interval = setInterval(function() {
            axios.get("/api/oken/all").then(res=>{
                if(!res.data.btc && !res.data.usdt){
                    alert("服务器异常")
                }
                var btc = res.data.btc;
                var btcBuy = res.data.btc.data.buy;
                var btcSell = res.data.btc.data.sell;
                var usdtBuy = res.data.usdt.data.buy;
                var usdtSell = res.data.usdt.data.sell;
                var okenChanges = [];
                var change = false;
                for(var i =0 ; i < btcBuy.length; i++){
                    var data = btcBuy[i]
                    if(data.creator.nickName == self.form.nickName){
                        if(!self.btcBuy){
                            self.btcBuy = data.availableAmount;
                        }
                        if(self.btcBuy != data.availableAmount){
                            change = true
                            self.desc += "当前用户的btc买入发生变化,从" + self.btcBuy + "变为" + data.availableAmount + "=="
                            console.log("当前用户的btc买入发生变化,从" + self.btcBuy + "变为" + data.availableAmount)
                        }
                        okenChanges.push({name:"btc",type:"买入",oldAmount:self.btcBuy,nowAmount:data.availableAmount})
                        self.btcBuy == data.availableAmount
                    }
                }

                for(var i =0 ; i < btcSell.length; i++){
                    var data = btcSell[i]
                    if(data.creator.nickName == self.form.nickName){
                       if(!self.btcSell){
                          self.btcSell = data.availableAmount;
                       }
                       if(self.btcSell != data.availableAmount){
                             change = true
                             self.desc += "当前用户的btc卖出发生变化,从" + self.btcSell + "变为" + data.availableAmount + "==="
                             console.log("当前用户的btc卖出发生变化,从" + self.btcSell + "变为" + data.availableAmount)
                       }
                       okenChanges.push({name:"btc",type:"买出",oldAmount:self.btcSell,nowAmount:data.availableAmount})
                       self.btcSell == data.availableAmount
                    }
                }

                for(var i =0 ; i < usdtBuy.length; i++){
                    var data = usdtBuy[i]
                    if(data.creator.nickName == self.form.nickName){
                       if(!self.usdtBuy){
                           self.usdtBuy = data.availableAmount;
                       }
                       if(self.usdtBuy != data.availableAmount){
                            change = true
                            self.desc += "当前用户的usdt买入发生变化,从" + self.usdtBuy + "变为" + data.availableAmount + "===="
                            console.log("当前用户的usdt买入发生变化,从" + self.usdtBuy + "变为" + data.availableAmount)
                       }
                       okenChanges.push({name:"usdt",type:"买入",oldAmount:self.usdtBuy,nowAmount:data.availableAmount})
                       self.usdtBuy == data.availableAmount
                    }
                }

                for(var i =0 ; i < usdtSell.length; i++){
                   var data = usdtSell[i]
                   if(data.creator.nickName == self.form.nickName){
                       if(!self.usdtSell){
                          self.usdtSell = data.availableAmount;
                       }
                       if(self.usdtSell != data.availableAmount){
                          change = true
                          self.desc += "当前用户的usdt卖出发生变化,从" + self.usdtSell + "变为" + data.availableAmount;
                          console.log("当前用户的usdt卖出发生变化,从" + self.usdtSell + "变为" + data.availableAmount)
                       }
                       okenChanges.push({name:"usdt",type:"卖出",oldAmount:self.usdtSell,nowAmount:data.availableAmount})
                       self.usdtSell == data.availableAmount
                   }
                }
                if(change){
                    document.getElementById("orderAudio").play();
                    clearInterval(self.interval)
                }else{
                    self.desc = "";
                }
                self.amountChanges = okenChanges;
            }).catch(error=>console.log(error));
        }, 3000)
    },
    onStop: function(){
        document.getElementById("orderAudio").pause();
        this.onStart();
    }
  }

}
</script>