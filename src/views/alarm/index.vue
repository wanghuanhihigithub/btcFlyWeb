<template>
    <div style="padding:20px;">
        <el-form ref="form" :model="form" label-width="180px">
          <el-form-item label="监控对象">
                <el-input  v-model="form.nickName" style="width:140px;"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onStart">开始监控</el-button>
            <el-button type="primary" @click="onStop">停止播放</el-button>
            <el-button type="primary" @click="onStopListening">停止监控</el-button>
          </el-form-item>
          <el-form-item label="监控结果">
              <el-input  v-model="form.desc" style="width:1000px;"></el-input>
          </el-form-item>
        </el-form>
        <el-table :data="amountChanges" :row-style="rowStyle">
            <el-table-column  prop="name"          label="币种"/>
            <el-table-column  prop="type"          label="类型"/>
            <el-table-column  prop="oldAmount"      label="原数量"/>
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
        form: {nickName: "★全网第一诚信",desc:""},
        amountChanges:[],
        btcBuy:"",
        btcSell:"",
        usdtBuy:"",
        usdtSell:"",
        isRunning:false
    }
  },
  mounted: function(){

  },
  methods: {
    onStart: function(){
        self = this;
        if(this.isRunning){
           alert("已经开始执行，不能再开始")
           return;
        }
        this.isRunning = true;
        this.interval = setInterval(function() {
            axios.get("/virtual/oken").then(res=>{
                debugger;
                if(!res.data.btc && !res.data.usdt){
                    alert("服务器异常")
                }
                var btcBuy = res.data.btc.data.buy;
                var btcSell = res.data.btc.data.sell;
                var usdtBuy = res.data.usdt.data.buy;
                var usdtSell = res.data.usdt.data.sell;
                var okenChanges = [];
                var change = false;

                if(new Date().getTime() - new Date(btcBuy[0]["createdDate"]) > (1000 * 30 + 8 * 60 * 60 * 1000)){
                      alert("定时获取oken网数据异常");
                      self.form.desc = "定时获取oken网买入卖出数据异常，请联系管理员";
                      clearInterval(self.interval);
                      return;
                }else{
                    self.form.desc = "";
                }

                var btcBuyFind = false;
                for(var i =0 ; i < btcBuy.length; i++){
                    var data = btcBuy[i]
                    if(data.creator.nickName == self.form.nickName){
                        btcBuyFind = true;
                        if(!self.btcBuy){
                            self.btcBuy = data.availableAmount;
                        }
                        if(self.btcBuy != data.availableAmount){
                            change = true
                            self.form.desc += "当前用户的btc买入发生变化,从" + self.btcBuy + "变为" + data.availableAmount + "=="
                            console.log("当前用户的btc买入发生变化,从" + self.btcBuy + "变为" + data.availableAmount)
                        }
                        okenChanges.push({name:"btc",type:"买入",oldAmount:self.btcBuy,nowAmount:data.availableAmount})
                        self.btcBuy = data.availableAmount
                    }
                }
                if(self.btcBuy && !btcBuyFind){
                      change = true
                      self.form.desc += "当前用户的btc买入发生变化,从" + self.btcBuy + "变为0=="
                      console.log("当前用户的btc买入发生变化,从" + self.btcBuy + "变为0")
                      okenChanges.push({name:"btc",type:"买入",oldAmount:self.btcBuy,nowAmount:0})
                      self.btcBuy = "";
                }

                var btcSellFind = false;
                for(var i =0 ; i < btcSell.length; i++){
                    var data = btcSell[i]
                    if(data.creator.nickName == self.form.nickName){
                       btcSellFind = true;
                       if(!self.btcSell){
                          self.btcSell = data.availableAmount;
                       }
                       if(self.btcSell != data.availableAmount){
                             change = true
                             self.form.desc += "当前用户的btc卖出发生变化,从" + self.btcSell + "变为" + data.availableAmount + "==="
                             console.log("当前用户的btc卖出发生变化,从" + self.btcSell + "变为" + data.availableAmount)
                       }
                       okenChanges.push({name:"btc",type:"卖出",oldAmount:self.btcSell,nowAmount:data.availableAmount})
                       self.btcSell = data.availableAmount
                    }
                }
                if(self.btcSell && !btcSellFind){
                       change = true
                       self.form.desc += "当前用户的btc卖出发生变化,从" + self.btcSell + "变为0=="
                       console.log("当前用户的btc卖出发生变化,从" + self.btcSell + "变为0")
                       okenChanges.push({name:"btc",type:"卖出",oldAmount:self.btcSell,nowAmount:0})
                       self.btcSell = "";
                }


                var usdtBuyFind = false;
                for(var i =0 ; i < usdtBuy.length; i++){
                    var data = usdtBuy[i]
                    if(data.creator.nickName == self.form.nickName){
                       usdtBuyFind = true;
                       if(!self.usdtBuy){
                           self.usdtBuy = data.availableAmount;
                       }
                       if(self.usdtBuy != data.availableAmount){
                            change = true
                            self.form.desc += "当前用户的usdt买入发生变化,从" + self.usdtBuy + "变为" + data.availableAmount + "===="
                            console.log("当前用户的usdt买入发生变化,从" + self.usdtBuy + "变为" + data.availableAmount)
                       }
                       okenChanges.push({name:"usdt",type:"买入",oldAmount:self.usdtBuy,nowAmount:data.availableAmount})
                       self.usdtBuy = data.availableAmount
                    }
                }
                if(self.usdtBuy && !usdtBuyFind){
                    change = true
                    self.form.desc += "当前用户的usdt买入发生变化,从" + self.usdtBuy + "变为0=="
                    console.log("当前用户的usdt买入发生变化,从" + self.usdtBuy + "变为0")
                    okenChanges.push({name:"usdt",type:"买入",oldAmount:self.usdtBuy,nowAmount:0})
                    self.usdtBuy = "";
                }

                var usdtSellFind = false;
                for(var i =0 ; i < usdtSell.length; i++){
                   var data = usdtSell[i]
                   if(data.creator.nickName == self.form.nickName){
                       usdtSellFind = true;
                       if(!self.usdtSell){
                          self.usdtSell = data.availableAmount;
                       }
                       if(self.usdtSell != data.availableAmount){
                          change = true
                          self.form.desc += "当前用户的usdt卖出发生变化,从" + self.usdtSell + "变为" + data.availableAmount;
                          console.log("当前用户的usdt卖出发生变化,从" + self.usdtSell + "变为" + data.availableAmount)
                       }
                       okenChanges.push({name:"usdt",type:"卖出",oldAmount:self.usdtSell,nowAmount:data.availableAmount})
                       self.usdtSell = data.availableAmount
                   }
                }

                if(self.usdtSell && !usdtSellFind){
                     change = true
                     self.form.desc += "当前用户的usdt卖出发生变化,从" + self.usdtSell + "变为0=="
                     console.log("当前用户的usdt卖出发生变化,从" + self.usdtSell + "变为0")
                     okenChanges.push({name:"usdt",type:"卖出",oldAmount:self.usdtSell,nowAmount:0})
                     self.usdtSell = "";
                }
                if(change){
                    document.getElementById("orderAudio").play();
                    clearInterval(self.interval)
                }else{
                    self.form.desc = "";
                }
                self.amountChanges = okenChanges;
            }).catch(error=>console.log(error));
        }, 3000)
    },
    onStop: function(){
        document.getElementById("orderAudio").pause();
        this.isRunning = false;
        this.onStart();
    },
    onStopListening: function(){
        this.isRunning = false;
        document.getElementById("orderAudio").pause();
        clearInterval(this.interval)
    }
  }

}
</script>