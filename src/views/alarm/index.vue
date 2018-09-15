<template>
    <div style="padding:20px;">
        <el-form ref="form" :model="form" label-width="180px">
          <el-form-item label="昵称">
                <el-input  v-model="form.nickName "></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onStart">开始</el-button>
            <el-button type="primary" @click="onStop">停止播放</el-button>
          </el-form-item>
        </el-form>
        <audio src="/dog.wav" controls="controls" id="dogAudio"
            style="display:none;" loop="loop"></audio>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'setting',
  data: function(){
    return {
        form: {baseCurrency:"",nickName: 30,quoteMinAmountPerOrder: '',side:'',price:''},
        baseCurrencys:[{value:"usdt",label:"usdt"},{value:"btc",label:"btc"}],
        sides:[{value:"sell",label:"卖出"},{value:"buy",label:"买入"}]
    }
  },
  mounted: function(){

  },
  methods: {
    onStart: function(){
        self = this;
        this.interval = setInterval(function() {
            axios.get("/api/oken/all").then(res=>{
                debugger;
                /*if(!res.data){
                    alert("没有当前昵称的用户")
                }
                var availableAmount = res.data.availableAmount;
                console.log(availableAmount);
                if(self.form.price  && self.form.price != availableAmount){
                    console.log("ring====")
                    clearInterval(self.interval)
                    document.getElementById("dogAudio").play()
                }
                self.form.price = availableAmount;*/
            }).catch(error=>console.log(error));
        }, 3000)
    },
    onStop: function(){
        document.getElementById("dogAudio").pause();
        this.onStart();
    }
  }

}
</script>