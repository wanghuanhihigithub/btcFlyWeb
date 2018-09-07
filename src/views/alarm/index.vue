<template>
    <div style="padding:20px;" id="app">
        <el-form ref="form" :model="form" label-width="180px">
          <el-form-item label="币种">
            <el-input  v-model="form.baseCurrency "></el-input>
          </el-form-item>
          <el-form-item label="昵称">
                <el-input  v-model="form.nickName "></el-input>
          </el-form-item>
          <el-form-item label="quoteMinAmountPerOrder">
                <el-input  v-model="form.quoteMinAmountPerOrder"></el-input>
          </el-form-item>
          <el-form-item label="side">
               <el-input  v-model="form.side"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onStart">开始</el-button>
          </el-form-item>
        </el-form>
        <audio src="./dog.wav" controls="controls" id="dogAudio" style="display:none;"></audio>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'setting',
  data: function(){
    return {
        form: {baseCurrency:1,nickName: 30,quoteMinAmountPerOrder: '',side:'',price:''}
    }
  },
  mounted: function(){

  },
  methods: {
    onStart: function(){
        self = this;
        setInterval(function() {
            var url = '/api/oken/change?baseCurrency=' + self.form.baseCurrency + "&nickName=" + self.form.nickName + "&quoteMinAmountPerOrder=" + self.form.quoteMinAmountPerOrder + "&side=" + self.form.side
            axios.get(url).then(res=>{
                debugger;
                var availableAmount = res.data.availableAmount;
                console.log(availableAmount);
                debugger;
                if(self.form.price != "" && self.form.price != availableAmount){
                    alert(true)
                    document.getElementById("dogAudio").play()
                }
                self.form.price = availableAmount;
            }).catch(error=>console.log(error));
        }, 3000)
    }
  }

}
</script>