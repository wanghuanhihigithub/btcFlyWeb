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
              <el-input  v-model="form.desc" style="width:1000px;" :disabled="true"></el-input>
          </el-form-item>
        </el-form>
        <el-table :data="amountChanges" :row-style="rowStyle">
            <el-table-column  prop="name"          label="币种"/>
            <el-table-column  prop="createdDate"   label="挂单时间"/>
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
        ethBuy:"",
        ethSell:"",
        isRunning:false,
        admin:false
    }
  },
  mounted: function(){
    var url = document.URL;
    if(url.indexOf("?") > -1){
        this.admin = true;
    }
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
                if(!res.data.btc && !res.data.usdt && !res.data.eth){
                    alert("服务器异常,请联系管理员")
                    return;
                }
                self.initData();
                var okenChanges = [];
                if(self.admin){
                    if(self.handlerData(res.data.btc.data.buy, self.btcBuy, "btc", "买入", okenChanges) |
                       self.handlerData(res.data.btc.data.sell, self.btcSell, "btc", "卖出", okenChanges) |
                       self.handlerData(res.data.usdt.data.buy, self.usdtBuy, "usdt", "买入", okenChanges) |
                       self.handlerData(res.data.usdt.data.sell, self.usdtSell, "usdt", "卖出", okenChanges) |
                       self.handlerData(res.data.eth.data.buy, self.ethBuy, "eth", "买入", okenChanges) |
                       self.handlerData(res.data.eth.data.sell, self.ethSell, "eth", "卖出", okenChanges)){
                       document.getElementById("orderAudio").play();
                       clearInterval(self.interval)
                    }
                }else{
                    if(self.handlerData(res.data.usdt.data.buy, self.usdtBuy, "usdt", "买入", okenChanges) |
                       self.handlerData(res.data.usdt.data.sell, self.usdtSell, "usdt", "卖出", okenChanges)){
                         document.getElementById("orderAudio").play();
                         clearInterval(self.interval)
                    }
                }

                self.amountChanges = okenChanges;
            }).catch(error=>console.log(error));
        }, 3000)
    },
    initData:function(){
        this.form.desc = "";
        this.amountChanges = [];
    },
    //处理数据 dataList币种列表 oldCoinValue旧币值 coinType币种类型, type买入还是卖出
    handlerData: function(dataList, oldCoinValue ,coinType, type, okenChanges){
        var personCoinFind = false;//是否找到此人的当前币种
        var change = false;//当前币种是否发生变化
        for(var i =0 ; i < dataList.length; i++){
           var data = dataList[i];
           if(data.creator.nickName == this.form.nickName){
             personCoinFind = true;
             if(!oldCoinValue){
                oldCoinValue = data.availableAmount;
             }
             if(oldCoinValue != data.availableAmount){
               change = true
               self.form.desc += coinType + type + oldCoinValue + "--->" + data.availableAmount;
             }
             okenChanges.push({name:coinType,type:type,oldAmount:oldCoinValue,
                nowAmount:data.availableAmount,createdDate:this.convertTimestampToString(data["createdDate"])})
             oldCoinValue = data.availableAmount
           }
        }

        if(oldCoinValue && !personCoinFind){
             change = true
             self.form.desc += coinType + type + oldCoinValue + "--->" + data.availableAmount;
             okenChanges.push({name:coinType,type:type,oldAmount:oldCoinValue,nowAmount:0})
             oldCoinValue = "";
        }
        return change;
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
    },
    convertTimestampToString:function(timestamp){
        var date = new Date(timestamp);
        var year = date.getFullYear()
        var month =  (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)
        var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
        var hour = date.getHours() < 10 ? "0" + date.getHours(): date.getHours()
        var minute = date.getMinutes() < 10 ? "0"  + date.getMinutes() : date.getMinutes()
        var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
        return year + "-" + month + "-" + day + " " +   hour + ":" + minute + ":" + second
    }
  }

}
</script>