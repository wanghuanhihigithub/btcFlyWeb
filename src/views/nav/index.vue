<template>
    <div id="app">
        <el-col :span="4">
          <el-menu :default-active="$route.path" class="el-menu-vertical-demo"
                   theme="dark"
                   router>
            <el-menu-item index="/oken">实时数据</el-menu-item>
            <el-menu-item index="/search">高级查询</el-menu-item>
            <el-menu-item index="/setting">系统设置</el-menu-item>
          </el-menu>
        </el-col>

        <router-view></router-view>
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
        ws = new WebSocket("wss://api.huobi.pro/ws");
        ws.onopen =  function (msg) {
          console.log('webSocket opened');
        };
        ws.onmessage = function (message) {
          console.log('receive message : ' + message.data);
        };
        ws.onerror = function (error) {
          console.log('error :' + error.name + error.number);
        };

        ws.onclose =  function () {
          console.log('webSocket closed');
        };
  },
  methods: {

  }
}
</script>

<style scoped>

</style>